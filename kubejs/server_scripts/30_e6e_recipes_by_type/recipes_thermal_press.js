// 配方类型：thermal:press
// 中文名称：压制机加工
// 用途：用于登记热力系列的压制机加工配方。

(function () {
if (['byg', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    const id_prefix = 'enigmatica:base/thermal/press/';
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')],
            outputs: [Item.of('immersiveengineering:mold_plate', 1)],
            energy: 2400,
            id: `${id_prefix}mold_plate`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')],
            outputs: [Item.of('immersiveengineering:mold_wire', 1)],
            energy: 2400,
            id: `${id_prefix}mold_wire`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')],
            outputs: [Item.of('immersiveengineering:mold_gear', 1)],
            energy: 2400,
            id: `${id_prefix}mold_gear`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')],
            outputs: [Item.of('immersiveengineering:mold_rod', 1)],
            energy: 2400,
            id: `${id_prefix}mold_rod`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#thermal:crafting/dies/bullet_casing')],
            outputs: [Item.of('immersiveengineering:empty_casing', 2)],
            energy: 2400,
            id: `${id_prefix}empty_casing`
        },
        {
            inputs: [Item.of('byg:purple_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:purple_sand', 4)],
            energy: 2400,
            id: `${id_prefix}purple_sand`
        },
        {
            inputs: [Item.of('byg:blue_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:blue_sand', 4)],
            energy: 2400,
            id: `${id_prefix}blue_sand`
        },
        {
            inputs: [Item.of('byg:white_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:white_sand', 4)],
            energy: 2400,
            id: `${id_prefix}white_sand`
        },
        {
            inputs: [Item.of('byg:black_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:black_sand', 4)],
            energy: 2400,
            id: `${id_prefix}black_sand`
        },
        {
            inputs: [Item.of('atmospheric:arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:arid_sand', 4)],
            energy: 2400,
            id: `${id_prefix}arid_sand`
        },
        {
            inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:red_arid_sand', 4)],
            energy: 2400,
            id: `${id_prefix}red_arid_sand`
        },
        {
            inputs: [Item.of('betterendforge:dense_snow', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:snow_block', 9)],
            energy: 2400,
            id: `${id_prefix}snow_block`
        },
        {
            inputs: [Item.of('minecraft:snow_block', 9), Ingredient.of('#thermal:crafting/dies/packing_3x3')],
            outputs: [Item.of('betterendforge:dense_snow', 1)],
            energy: 2400,
            id: `${id_prefix}dense_snow`
        },
        {
            id: 'thermal:machine/press/packing2x2/press_honeycomb_packing',
            inputs: [Item.of('minecraft:honeycomb', 9), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb_block', 1)],
            energy: 2400,
            id: `${id_prefix}honeycomb_block`
        },
        {
            id: 'thermal:machine/press/unpacking/press_honeycomb_unpacking',
            inputs: [Item.of('minecraft:honeycomb_block', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb', 9)],
            energy: 2400,
            id: `${id_prefix}honeycomb`
        },
        {
            inputs: [Item.of('mekanism:hdpe_pellet')],
            outputs: [Item.of('mekanism:hdpe_sheet')],
            energy: 2400,
            id: `${id_prefix}hdpe_sheet`
        },
        {
            inputs: [Item.of('minecraft:vine')],
            outputs: [Fluid.of('industrialforegoing:latex', 50)],
            energy: 400,
            id: 'thermal:machine/press/press_vine_to_latex'
        },
        {
            inputs: [Item.of('minecraft:dandelion')],
            outputs: [Fluid.of('industrialforegoing:latex', 50)],
            energy: 400,
            id: 'thermal:machine/press/press_dandelion_to_latex'
        }
    ];

    ['osmium', 'aluminum', 'uranium'].forEach((metal) => {
        recipes.push({
            inputs: [
                Item.of(`emendatusenigmatica:${metal}_ingot`, 9),
                Ingredient.of('#thermal:crafting/dies/packing_3x3')
            ],
            outputs: [Item.of(`emendatusenigmatica:${metal}_block`)],
            energy: 2400,
            id: `${id_prefix}${metal}_block`
        });
    });

    combVariants.forEach((variant) => {
        recipes.push(
            {
                inputs: [
                    Item.of(`resourcefulbees:${variant}_honeycomb`, 9),
                    Ingredient.of('#thermal:crafting/dies/packing_3x3')
                ],
                outputs: [Item.of(`resourcefulbees:${variant}_honeycomb_block`, 1)],
                energy: 2400,
                id: `${id_prefix}${variant}_honeycomb_block`
            },
            {
                inputs: [
                    Item.of(`resourcefulbees:${variant}_honeycomb_block`, 1),
                    Ingredient.of('#thermal:crafting/dies/unpacking')
                ],
                outputs: [Item.of(`resourcefulbees:${variant}_honeycomb`, 9)],
                energy: 2400,
                id: `${id_prefix}${variant}_honeycomb`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});

}
})();

(function () {
if (['tconstruct', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/press/';
    const recipes = [
        {
            inputs: [Item.of('4x kubejs:superheated_steel_ingot'), Ingredient.of('#thermal:crafting/dies/packing_2x2')],
            output: Item.of('2x kubejs:hot_compressed_iron_ingot'),
            energy: 1000,
            id: `${id_prefix}hot_compressed_iron_ingot`
        },
        {
            inputs: [Item.of('4x kubejs:superheated_steel_block'), Ingredient.of('#thermal:crafting/dies/packing_2x2')],
            output: Item.of('2x kubejs:hot_compressed_iron_block'),
            energy: 9000,
            id: `${id_prefix}hot_compressed_iron_block`
        },
        {
            inputs: ['refinedstorage:raw_basic_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            output: 'refinedstorage:basic_processor',
            energy: 3000,
            id: 'refinedstorage:basic_processor'
        },
        {
            inputs: ['refinedstorage:raw_improved_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            output: 'refinedstorage:improved_processor',
            energy: 3000 * 2,
            id: 'refinedstorage:improved_processor'
        },
        {
            inputs: ['refinedstorage:raw_advanced_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            output: 'refinedstorage:advanced_processor',
            energy: 3000 * 3,
            id: 'refinedstorage:advanced_processor'
        },
        {
            inputs: ['extrastorage:raw_neural_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            output: 'extrastorage:neural_processor',
            energy: 3000 * 4,
            id: 'extrastorage:neural_processor'
        },
        {
            inputs: ['immersiveengineering:thermoelectric_generator'],
            output: 'powah:thermoelectric_plate',
            energy: 1000,
            id: `${id_prefix}thermoelectric_plate`
        },
        {
            inputs: [
                Item.of('tconstruct:large_plate', '{Material:"tconstruct:invar"}'),
                'immersiveengineering:mold_gear'
            ],
            output: 'thermal:saw_blade',
            energy: 9000,
            id: 'thermal:saw_blade'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});

}
})();
