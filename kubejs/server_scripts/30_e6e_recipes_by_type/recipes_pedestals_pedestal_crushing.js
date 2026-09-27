// 配方类型：pedestals:pedestal_crushing
// 中文名称：基座粉碎
// 用途：用于登记基座的基座粉碎配方。

(function () {
if (['atum', 'byg', 'pedestals', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pedestals/pedestal_crushing/';
    const recipes = [
        {
            input: 'thermal:blitz_rod',
            output: 'thermal:blitz_powder',
            count: 3,
            id: 'pedestals:pedestal_crushing/blitz_rod'
        },
        {
            input: 'thermal:basalz_rod',
            output: 'thermal:basalz_powder',
            count: 3,
            id: 'pedestals:pedestal_crushing/basalz_rod'
        },
        {
            input: 'minecraft:end_stone',
            output: 'occultism:crushed_end_stone',
            count: 4,
            id: 'pedestals:pedestal_crushing/end_stone'
        },
        {
            input: 'minecraft:obsidian',
            output: 'emendatusenigmatica:obsidian_dust',
            count: 4,
            id: 'pedestals:pedestal_crushing/obsidian'
        },
        {
            input: '#forge:grain',
            output: 'create:wheat_flour',
            count: 1,
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'atum:emmer',
            output: 'atum:emmer_flour',
            count: 1,
            id: `${id_prefix}emmer_flour`
        },
        {
            input: 'byg:raw_quartz_block',
            output: 'byg:quartzite_sand',
            count: 2,
            id: `${id_prefix}quartzite_sand`
        },
        {
            input: '#forge:coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            count: 1,
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            count: 9,
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            output: 'emendatusenigmatica:coke_dust',
            count: 9,
            id: `${id_prefix}coke_dust_from_block`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: Ingredient.of(recipe.input),
                result: Item.of(recipe.output, recipe.count)
            })
            .id(recipe.id);
    });
});

}
})();

(function () {
// 仅为目标端实际存在的原料、染料和机器配方类型注册配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "pedestals:pedestal_crushing", false, ["ars_nouveau:crush","atum:quern","create:milling","e6e_mbd2:thermal_centrifuge","immersiveengineering:crusher","mekanism:enriching","mekanism:pigment_extracting","minecraft:crafting_shapeless","occultism:crushing","pedestals:pedestal_crushing"]);
    const idPrefix = 'enigmatica:base/unification/unify_dyes/';
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');
    const hasIE = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasMekanism = e6ePortedRecipeModLoaded('mekanism') && e6ePortedRecipeModLoaded('kubejs_mekanism');
    const hasArs = e6ePortedRecipeModLoaded('ars_nouveau') && e6ePortedRecipeModLoaded('kubejsarsnouveau');
    const hasOccultism = e6ePortedRecipeModLoaded('occultism') && e6ePortedRecipeModLoaded('occultism_kubejs');
    const hasBotania = e6ePortedRecipeModLoaded('botania');
    const hasMbd2 = e6ePortedRecipeModLoaded('e6e_mbd2');
    const hasPedestals = e6ePortedRecipeModLoaded('pedestals');
    const hasAtum = e6ePortedRecipeModLoaded('atum');

    dyeSources.forEach((recipe, index) => {
        if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(recipe.primary)) return;

        const multiplier = recipe.type === 'large' ? 2 : 1;
        const key = `${index}_${String(recipe.input).replace(/[^a-zA-Z0-9_/-]/g, '_')}`;
        const count = 2 * multiplier;

        if (hasBotania && recipe.type !== 'petal' && recipe.input !== 'minecraft:bone'
            && e6ePortedItemExists('botania:pestle_and_mortar')) {
            event.shapeless(Item.of(recipe.primary, count), [recipe.input, 'botania:pestle_and_mortar'])
                .id(`${idPrefix}botania/pestle_mortar/${key}`);
        }

        if (hasCreate) {
            const outputs = [Item.of(recipe.primary, count)];
            if (e6eRecipeOutputExists(recipe.secondary)) {
                outputs.push(Item.of(recipe.secondary, count).withChance(0.25));
            }
            if (e6eRecipeOutputExists(recipe.tertiary)) {
                outputs.push(Item.of(recipe.tertiary, multiplier).withChance(0.05));
            }
            event.recipes.create.milling(outputs, recipe.input)
                .id(`${idPrefix}create/milling/${key}`);
        }

        if (hasArs) {
            const outputs = [{ stack: Item.of(recipe.primary, count), chance: 1.0, maxRange: 1 }];
            if (e6eRecipeOutputExists(recipe.secondary)) {
                outputs.push({ stack: Item.of(recipe.secondary, count), chance: 0.25, maxRange: 1 });
            }
            event.recipes.ars_nouveau.crush(recipe.input, outputs)
                .id(`${idPrefix}ars_nouveau/crush/${key}`);
        }

        if (hasIE) {
            const secondary = [];
            if (e6eRecipeOutputExists(recipe.secondary)) {
                secondary.push(Item.of(recipe.secondary, count).withChance(0.25));
            }
            if (e6eRecipeOutputExists(recipe.tertiary)) {
                secondary.push(Item.of(recipe.tertiary, multiplier).withChance(0.05));
            }
            event.recipes.immersiveengineering.crusher(Item.of(recipe.primary, count), recipe.input, secondary)
                .id(`${idPrefix}immersiveengineering/crusher/${key}`);
        }

        if (hasMekanism) {
            event.recipes.mekanism.enriching(Item.of(recipe.primary, 3 * multiplier), recipe.input)
                .id(`${idPrefix}mekanism/enriching/${key}`);

            if (recipe.primary.includes('_dye')) {
                const color = recipe.primary.split(':')[1].replace('_dye', '');
                event.custom({
                    type: 'mekanism:pigment_extracting',
                    input: Ingredient.of(recipe.input).toJson(),
                    output: { id: `mekanism:${color}`, amount: 256 * 3 * multiplier }
                }).id(`${idPrefix}mekanism/pigment_extracting/${key}`);
            }
        }

        // MBD2 保留旧热力离心机的主产物和概率副产物。
        if (hasMbd2) {
            const mbdRecipe = event.recipes.e6e_mbd2.thermal_centrifuge()
                .id(`${idPrefix}mbd2/centrifuge/${key}`)
                .duration(50)
                .inputItems(recipe.input)
                .outputItems(`${count}x ${recipe.primary}`)
                .inputFE(2000);
            if (e6eRecipeOutputExists(recipe.secondary)) {
                mbdRecipe.chance(0.25, (chanceRecipe) => chanceRecipe.outputItems(`${count}x ${recipe.secondary}`));
            }
            if (e6eRecipeOutputExists(recipe.tertiary)) {
                mbdRecipe.chance(0.05, (chanceRecipe) => chanceRecipe.outputItems(`${multiplier}x ${recipe.tertiary}`));
            }
        }

        if (hasOccultism && recipe.input !== 'minecraft:bone') {
            event.custom({
                type: 'occultism:crushing',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: { type: 'occultism:item', id: recipe.primary, count: count },
                crushing_time: 50,
                ignore_crushing_multiplier: false
            }).id(`${idPrefix}occultism/crushing/${key}`);
        }

        if (hasPedestals && recipe.input !== 'minecraft:bone') {
            event.custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: { item: recipe.primary, count: count }
            }).id(`${idPrefix}pedestals/crushing/${key}`);
        }

        if (hasAtum) {
            event.custom({
                type: 'atum:quern',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: { item: recipe.primary, count: 4 * multiplier },
                rotations: multiplier
            }).id(`${idPrefix}atum/quern/${key}`);
        }

        if (recipe.input.split(':')[0] === 'atum' && e6ePortedItemExists(recipe.input)) {
            event.shapeless(recipe.primary, [recipe.input]).id(`${idPrefix}crafting/atum_dye/${key}`);
        }
    });
});
})();
