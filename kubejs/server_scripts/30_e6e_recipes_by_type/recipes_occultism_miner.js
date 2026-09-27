// 配方类型：occultism:miner
// 中文名称：矿工精灵采矿
// 用途：用于登记神秘学的矿工精灵采矿配方。

(function () {
if (['atum', 'byg'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/basic_resources/';
    const recipes = [
        {
            output: 'minecraft:granite',
            weight: 2000,
            id: `${id_prefix}granite`
        },
        {
            output: 'minecraft:diorite',
            weight: 2000,
            id: `${id_prefix}diorite`
        },
        {
            output: 'minecraft:stone',
            weight: 2000,
            id: `${id_prefix}stone`
        },
        {
            output: 'minecraft:andesite',
            weight: 2000,
            id: `${id_prefix}andesite`
        },
        {
            output: 'minecraft:mossy_cobblestone',
            weight: 200,
            id: `${id_prefix}mossy_cobblestone`
        },
        {
            output: 'minecraft:mossy_stone_bricks',
            weight: 200,
            id: `${id_prefix}mossy_stone_bricks`
        },
        {
            output: 'minecraft:gravel',
            weight: 1000,
            id: `${id_prefix}gravel`
        },
        {
            output: 'minecraft:end_stone',
            weight: 200,
            id: `${id_prefix}end_stone`
        },
        {
            output: 'betterendforge:aurora_crystal',
            weight: 50,
            id: `${id_prefix}aurora_crystal`
        },
        {
            output: 'minecraft:blue_ice',
            weight: 50,
            id: `${id_prefix}blue_ice`
        },
        {
            output: 'minecraft:packed_ice',
            weight: 100,
            id: `${id_prefix}packed_ice`
        },
        {
            output: 'minecraft:snow_block',
            weight: 200,
            id: `${id_prefix}snow_block`
        },
        {
            output: 'minecraft:clay_ball',
            weight: 200,
            id: `${id_prefix}clay_ball`
        },
        {
            output: 'minecraft:sand',
            weight: 1000,
            id: `${id_prefix}sand`
        },
        {
            output: 'byg:quartzite_sand',
            weight: 200,
            id: `${id_prefix}quartzite_sand`
        },
        {
            output: 'undergarden:sediment',
            weight: 1000,
            id: `${id_prefix}sediment`
        },
        {
            output: 'minecraft:soul_sand',
            weight: 500,
            id: `${id_prefix}soul_sand`
        },
        {
            output: 'minecraft:basalt',
            weight: 750,
            id: `${id_prefix}basalt`
        },
        {
            output: 'minecraft:blackstone',
            weight: 750,
            id: `${id_prefix}blackstone`
        },
        {
            output: 'minecraft:netherrack',
            weight: 1000,
            id: `${id_prefix}netherrack`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/basic_resources' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/fish/';
    const recipes = [
        {
            output: 'kubejs:soggy_treasure_box',
            weight: 177,
            id: `${id_prefix}soggy_treasure_box`
        },
        {
            output: 'aquaculture:starshell_turtle',
            weight: 100,
            id: `${id_prefix}starshell_turtle`
        },
        {
            output: 'aquaculture:arrau_turtle',
            weight: 100,
            id: `${id_prefix}arrau_turtle`
        },
        {
            output: 'aquaculture:box_turtle',
            weight: 100,
            id: `${id_prefix}box_turtle`
        },
        {
            output: 'aquaculture:leech',
            weight: 100,
            id: `${id_prefix}leech`
        },
        {
            output: 'aquaculture:frog',
            weight: 100,
            id: `${id_prefix}frog`
        },
        {
            output: 'aquaculture:jellyfish',
            weight: 100,
            id: `${id_prefix}jellyfish`
        },
        {
            output: 'aquaculture:fish_bones',
            weight: 100,
            id: `${id_prefix}fish_bones`
        }
    ];

    fishableFish.forEach((fish) => {
        recipes.push({
            output: fish,
            weight: 100,
            // 配方 ID 加入命名空间，避免不同模组的同名鱼产生冲突。
            // 中文：在 ID 中包含命名空间，避免不同模组的同名鱼类配方 ID 冲突。
            id: `${id_prefix}${fish.replace(':', '/')}`
        });
    });

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.output)) return;
        event.custom({
            type: 'occultism:miner',
            ingredient: { tag: 'occultism:miners/fish' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: recipe.output, count: 1 },
                weight: recipe.weight
            }
        }).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/irradiated/';
    const recipes = [
        {
            output: 'emendatusenigmatica:uranium_chunk',
            weight: 6,
            id: `${id_prefix}uranium_chunk`
        },
        {
            output: 'emendatusenigmatica:fluorite_chunk',
            weight: 1,
            id: `${id_prefix}fluorite_chunk`
        },
        {
            output: 'emendatusenigmatica:sulfur_chunk',
            weight: 1,
            id: `${id_prefix}sulfur_chunk`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.output)) return;
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/irradiated' };
        recipe.result = {
            type: 'occultism:weighted_item',
            stack: { id: recipe.output, count: 1 },
            weight: recipe.weight
        };

        event.custom(recipe).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/ores/';
    const recipes = [
        {
            output: 'emendatusenigmatica:aluminum_chunk',
            weight: 1200,
            id: `${id_prefix}aluminum_chunk`
        },
        {
            output: 'emendatusenigmatica:apatite_chunk',
            weight: 700,
            id: `${id_prefix}apatite_chunk`
        },
        {
            output: 'emendatusenigmatica:arcane_chunk',
            weight: 600,
            id: `${id_prefix}arcane_chunk`
        },
        {
            output: 'emendatusenigmatica:bitumen_chunk',
            weight: 1000,
            id: `${id_prefix}bitumen_chunk`
        },
        {
            output: 'emendatusenigmatica:cinnabar_chunk',
            weight: 500,
            id: `${id_prefix}cinnabar_chunk`
        },
        {
            output: 'emendatusenigmatica:coal_chunk',
            weight: 2500,
            id: `${id_prefix}coal_chunk`
        },
        {
            output: 'emendatusenigmatica:copper_chunk',
            weight: 2000,
            id: `${id_prefix}copper_chunk`
        },
        {
            output: 'emendatusenigmatica:diamond_chunk',
            weight: 400,
            id: `${id_prefix}diamond_chunk`
        },
        {
            output: 'emendatusenigmatica:dimensional_chunk',
            weight: 200,
            id: `${id_prefix}dimensional_chunk`
        },
        {
            output: 'emendatusenigmatica:emerald_chunk',
            weight: 350,
            id: `${id_prefix}emerald_chunk`
        },
        {
            output: 'emendatusenigmatica:fluorite_chunk',
            weight: 450,
            id: `${id_prefix}fluorite_chunk`
        },
        {
            output: 'emendatusenigmatica:gold_chunk',
            weight: 550,
            id: `${id_prefix}gold_chunk`
        },
        {
            output: 'emendatusenigmatica:iron_chunk',
            weight: 2000,
            id: `${id_prefix}iron_chunk`
        },
        {
            output: 'emendatusenigmatica:lapis_chunk',
            weight: 500,
            id: `${id_prefix}lapis_chunk`
        },
        {
            output: 'emendatusenigmatica:lead_chunk',
            weight: 1500,
            id: `${id_prefix}lead_chunk`
        },
        {
            output: 'emendatusenigmatica:nickel_chunk',
            weight: 1000,
            id: `${id_prefix}nickel_chunk`
        },
        {
            output: 'emendatusenigmatica:osmium_chunk',
            weight: 1500,
            id: `${id_prefix}osmium_chunk`
        },
        {
            output: 'emendatusenigmatica:potassium_nitrate_chunk',
            weight: 400,
            id: `${id_prefix}potassium_nitrate_chunk`
        },
        {
            output: 'emendatusenigmatica:redstone_chunk',
            weight: 700,
            id: `${id_prefix}redstone_chunk`
        },
        {
            output: 'emendatusenigmatica:silver_chunk',
            weight: 1000,
            id: `${id_prefix}silver_chunk`
        },
        {
            output: 'emendatusenigmatica:sulfur_chunk',
            weight: 2000,
            id: `${id_prefix}sulfur_chunk`
        },
        {
            output: 'emendatusenigmatica:tin_chunk',
            weight: 1800,
            id: `${id_prefix}tin_chunk`
        },
        {
            output: 'emendatusenigmatica:uranium_chunk',
            weight: 500,
            id: `${id_prefix}uranium_chunk`
        },
        {
            output: 'emendatusenigmatica:zinc_chunk',
            weight: 1000,
            id: `${id_prefix}zinc_chunk`
        },
        {
            output: 'occultism:iesnium_ore',
            weight: 100,
            id: `${id_prefix}iesnium_ore`
        },
        {
            output: 'minecraft:glowstone',
            weight: 100,
            id: `${id_prefix}glowstone`
        },
        {
            output: 'emendatusenigmatica:quartz_chunk',
            weight: 400,
            id: `${id_prefix}quartz_chunk`
        },
        {
            output: 'minecraft:ancient_debris',
            weight: 80,
            id: `${id_prefix}ancient_debris`
        },
        {
            output: 'emendatusenigmatica:cobalt_chunk',
            weight: 100,
            id: `${id_prefix}cobalt_chunk`
        },
        {
            output: 'betterendforge:amber_ore',
            weight: 50,
            id: `${id_prefix}amber_ore`
        },
        {
            output: 'betterendforge:ender_ore',
            weight: 50,
            id: `${id_prefix}ender_ore`
        },
        {
            output: 'betterendforge:thallasium_ore',
            weight: 100,
            id: `${id_prefix}thallasium_ore`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.output)) return;
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/ores' };
        recipe.result = {
            type: 'occultism:weighted_item',
            stack: { id: recipe.output, count: 1 },
            weight: recipe.weight
        };

        event.custom(recipe).id(recipe.id);
    });
});
})();
