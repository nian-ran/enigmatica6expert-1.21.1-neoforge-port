// 配方类型：tconstruct:casting_basin
// 中文名称：铸造盆浇铸
// 用途：用于登记匠魂的铸造盆浇铸配方。

(function () {
if (['tconstruct', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/tconstruct/casting_basin/';
    const recipes = [
        /*
        {
            "fluid": {
                "tag": "tconstruct:molten_diamond",
                "amount": 1296
            },
            "result": "minecraft:diamond_block",
            "cooling_time": 237
        }
        */ {
            fluid: { name: 'tconstruct:molten_quartz', amount: 576 },
            result: Item.of('minecraft:quartz_block').toJson(),
            cooling_time: 180,
            id: `tconstruct:smeltery/casting/quartz/block`
        },
        {
            fluid: { name: 'thermal:redstone', amount: 1296 },
            result: Item.of('minecraft:redstone_block').toJson(),
            cooling_time: 200,
            id: `${id_prefix}redstone_block`
        },
        {
            fluid: { name: 'kubejs:molten_hardened_glass', amount: 1000 },
            result: Item.of('thermal:obsidian_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}obsidian_glass`
        },
        {
            fluid: { name: 'kubejs:molten_signalum_glass', amount: 1000 },
            result: Item.of('thermal:signalum_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}signalum_glass`
        },
        {
            fluid: { name: 'kubejs:molten_lumium_glass', amount: 1000 },
            result: Item.of('thermal:lumium_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}lumium_glass`
        },
        {
            fluid: { name: 'kubejs:molten_enderium_glass', amount: 1000 },
            result: Item.of('thermal:enderium_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}enderium_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:casting_basin';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['botania', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/tconstruct/casting_basin/';
    var data = {
        recipes: [
            {
                fluid: 'tconstruct:molten_hepatizon',
                fluid_amount: 576,
                casts: [{ item: 'botania:ender_eye_block' }],
                cast_consumed: true,
                output: 'betterendforge:infusion_pedestal',
                cooling_time: 233,
                id: 'betterendforge:infusion_pedestal'
            },
            {
                fluid: 'kubejs:molten_compressed_iron',
                fluid_amount: 18,
                casts: [{ item: 'minecraft:light_gray_concrete_powder' }],
                cast_consumed: true,
                output: 'pneumaticcraft:reinforced_stone',
                cooling_time: 10,
                id: `${id_prefix}reinforced_stone`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});

}
})();
