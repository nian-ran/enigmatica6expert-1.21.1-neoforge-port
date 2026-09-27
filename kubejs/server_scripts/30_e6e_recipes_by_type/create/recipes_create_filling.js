// 配方类型：create:filling
// 中文名称：容器灌液
// 用途：用于登记机械动力的容器灌液配方。

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:filling", true, ["create:filling","e6e_mbd2:thermal_bottler"]);
    const recipes = [
        // {
        //     output: Item.of('tiab:timeinabottle'),
        //     inputs: [Item.of('eidolon_repraised:soul_shard'), Item.of('create:cuckoo_clock')],
        //     fluids: [Fluid.of('industrialforegoing:essence', 1000), Fluid.of('pneumaticcraft:memory_essence', 1000)]
        // }
    ];

    let recipeIndex = 0;
    recipes.forEach((recipe) => {
        recipe.inputs.forEach((input) => {
            recipe.fluids.forEach((fluid) => {
                event.recipes.create.filling(recipe.output, [input, fluid]);
                if (e6ePortedRecipeModLoaded('e6e_mbd2') && e6eRecipeIngredientExists(input)
                    && e6eRecipeOutputExists(recipe.output)) {
                    const builder = event.recipes.e6e_mbd2.thermal_bottler;
                    if (typeof builder === 'function') {
                        builder()
                            .id('enigmatica:base/thermal/bottler/custom_' + recipeIndex++)
                            .duration(80)
                            .inputItems(input)
                            .inputFluids(fluid)
                            .outputItems(recipe.output);
                    }
                }
            });
        });
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/filling/';
    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: { fluidTag: 'forge:milk', amount: 250 },
            output: 'farmersdelight:milk_bottle',
            id: `${id_prefix}milk_bottle`
        }
    ];

    if (e6ePortedFluidExists('create:chocolate')) {
        recipes.push({
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa',
            id: `${id_prefix}hot_cocoa`
        });
    }

    if (e6ePortedFluidExists('industrialforegoing:essence')) {
        recipes.push({
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('industrialforegoing:essence', 250),
            output: 'minecraft:experience_bottle',
            id: `${id_prefix}experience_bottle_if`
        });
    }

    if (e6ePortedFluidExists('pneumaticcraft:memory_essence')) {
        recipes.push({
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
            output: 'minecraft:experience_bottle',
            id: `${id_prefix}experience_bottle_pnc`
        });
    }

    if (e6ePortedFluidExists('cofh_core:experience')) {
        recipes.push({
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('cofh_core:experience', 250),
            output: 'minecraft:experience_bottle',
            id: `${id_prefix}experience_bottle_cofh`
        });
    }

    if (e6ePortedFluidExists('astralsorcery:liquid_starlight')) {
        recipes.push({
            input: 'upgrade_aquatic:squid_bucket',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
            output: 'upgrade_aquatic:glow_squid_bucket',
            id: `${id_prefix}glow_squid_bucket`
        });
    }

    if (e6ePortedFluidExists('productivebees:honey')) {
        // 原数据配方 create:filling/honey_bottle；当前整合包改用 Productive Bees 蜂蜜。
        recipes.push({
            input: 'minecraft:glass_bottle',
            output: 'minecraft:honey_bottle',
            fluid: Fluid.of('productivebees:honey', 250),
            id: `${id_prefix}honey_bottle`
        });
    }
    recipes.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, [recipe.fluid, recipe.input])) return;
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/filling/';
    const recipes = [];

    if (e6ePortedRecipeModLoaded('thermal')) {
        recipes.push({
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250),
            output: 'thermal:syrup_bottle',
            id: `${id_prefix}syrup_bottle`
        });
    }

    recipes.push({
        input: 'minecraft:light_gray_concrete_powder',
        fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
        output: 'pneumaticcraft:reinforced_stone',
        id: `${id_prefix}reinforced_stone`
    });

    recipes.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, [recipe.fluid, recipe.input])) return;
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
})();

(function () {
// 将原普通模式的机械动力灌装配方一并纳入专家版。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            input: '#forge:glass/colorless',
            fluid: 'integrateddynamics:menril_resin',
            output: 'integratedterminals:menril_glass',
            id: 'enigmatica:normal/create/filling/menril_glass'
        },
        {
            input: '#forge:glass/colorless',
            fluid: 'integrateddynamics:liquid_chorus',
            output: 'integratedterminals:chorus_glass',
            id: 'enigmatica:normal/create/filling/chorus_glass'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedFluidExists(recipe.fluid)) return;
        if (!e6ePortedItemExists(recipe.output) || !e6eRecipeIngredientExists(recipe.input)) return;
        const ingredients = [Fluid.of(recipe.fluid, 1000), recipe.input];
        event.recipes.create.filling(recipe.output, ingredients).id(recipe.id);
    });
});
})();
