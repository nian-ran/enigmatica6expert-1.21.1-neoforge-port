// 配方类型：thermal:bottler
// 中文名称：装瓶机灌装
// 用途：用于登记热力系列的装瓶机灌装配方。

(function () {
if (['resourcefulbees', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    const id_prefix = 'enigmatica:base/thermal/bottler/';
    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250),
            output: 'farmersdelight:milk_bottle',
            id: `${id_prefix}milk_bottle`
        },
        {
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa',
            id: `${id_prefix}hot_cocoa`
        },
        {
            input: 'buildinggadgets:construction_block_powder',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'buildinggadgets:construction_block_dense',
            id: `${id_prefix}construction_block_dense`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            input: Item.of('minecraft:glass_bottle'),
            fluid: Fluid.of(honeyVariety, 250),
            output: Item.of(
                honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_bottle' : `${honeyVariety}_bottle`
            ),
            id: `thermal:machine/bottler/bottler_${honey}_bottle`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});

}
})();

(function () {
if (['botania', 'gunswithoutroses', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/bottler/';
    const recipes = [
        {
            input: '#forge:dusts/sulfur',
            fluid: Fluid.of('industrialforegoing:latex', 900),
            output: 'industrialforegoing:dryrubber',
            energy: 12000,
            id: `${id_prefix}dryrubber`
        },
        {
            input: ['#forge:ingots/superheated_steel', '#forge:ingots/hot_compressed_iron'],
            fluid: Fluid.of('tconstruct:scorched_stone', 144 * 8),
            output: 'tconstruct:foundry_controller',
            energy: 10000,
            id: 'tconstruct:smeltery/casting/scorched/foundry_controller'
        },
        {
            input: 'minecraft:light_gray_concrete_powder',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            energy: 8000,
            id: 'pneumaticcraft:reinforced_stone'
        },
        {
            input: 'kubejs:memory_basic_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000),
            output: 'kubejs:memory_basic_filled',
            energy: 8000,
            id: `${id_prefix}memory_basic_filled`
        },
        {
            input: 'kubejs:memory_advanced_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 2),
            output: 'kubejs:memory_advanced_filled',
            energy: 8000 * 2,
            id: `${id_prefix}memory_advanced_filled`
        },
        {
            input: 'kubejs:memory_elite_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 4),
            output: 'kubejs:memory_elite_filled',
            energy: 8000 * 4,
            id: `${id_prefix}memory_elite_filled`
        },
        {
            input: 'kubejs:memory_ultimate_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 8),
            output: 'kubejs:memory_ultimate_filled',
            energy: 8000 * 8,
            id: `${id_prefix}memory_ultimate_filled`
        },
        {
            input: 'gunswithoutroses:iron_bullet',
            fluid: Fluid.of('tconstruct:blazing_blood', 5),
            output: 'gunswithoutroses:blaze_bullet',
            energy: 100,
            id: `${id_prefix}blaze_bullet`
        },
        {
            input: 'botania:thorn_chakram',
            fluid: Fluid.of('tconstruct:blazing_blood', 1000),
            output: 'botania:flare_chakram',
            energy: 15000,
            id: `${id_prefix}flare_chakram`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});

}
})();
