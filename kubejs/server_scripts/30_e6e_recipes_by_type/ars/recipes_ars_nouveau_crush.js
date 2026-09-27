// 配方类型：ars_nouveau:crush
// 中文名称：粉碎加工
// 用途：用于登记新生魔艺的粉碎加工配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/crush/';
    const recipes = [
        {
            "id": "enigmatica:base/ars_nouveau/crush/prismarine_shard_from_bricks",
            "input": "minecraft:prismarine_bricks",
            "outputs": [
                {
                    "item": "minecraft:prismarine_shard",
                    "count": 6,
                    "chance": 1
                },
                {
                    "item": "minecraft:prismarine_shard",
                    "count": 3,
                    "chance": 0.75
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/prismarine_shard",
            "input": "minecraft:prismarine",
            "outputs": [
                {
                    "item": "minecraft:prismarine_shard",
                    "count": 3,
                    "chance": 1
                },
                {
                    "item": "minecraft:prismarine_shard",
                    "count": 1,
                    "chance": 0.75
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/wheat_flour",
            "input": "#forge:grain",
            "outputs": [
                {
                    "item": "create:wheat_flour",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "create:wheat_flour",
                    "count": 2,
                    "chance": 0.25
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/emmer_flour",
            "input": "atum:emmer",
            "outputs": [
                {
                    "item": "atum:emmer_flour",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "atum:emmer_flour",
                    "count": 2,
                    "chance": 0.25
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/netherite_scrap",
            "input": "#forge:ores/netherite",
            "outputs": [
                {
                    "item": "minecraft:netherite_scrap",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "minecraft:ancient_debris",
                    "count": 1,
                    "chance": 0.66
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/wood_dust",
            "input": "#minecraft:logs",
            "outputs": [
                {
                    "item": "emendatusenigmatica:wood_dust",
                    "count": 4,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/sand_from_glass",
            "input": "#forge:glass",
            "outputs": [
                {
                    "item": "minecraft:sand",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/sand_from_sandstone",
            "input": "#forge:sandstone/colorless",
            "outputs": [
                {
                    "item": "minecraft:sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/arid_sand",
            "input": "atmospheric:arid_sandstone",
            "outputs": [
                {
                    "item": "atmospheric:arid_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_arid_sand",
            "input": "atmospheric:red_arid_sandstone",
            "outputs": [
                {
                    "item": "atmospheric:red_arid_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/pink_sand",
            "input": "byg:pink_sandstone",
            "outputs": [
                {
                    "item": "byg:pink_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/black_sand",
            "input": "byg:black_sandstone",
            "outputs": [
                {
                    "item": "byg:black_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/white_sand",
            "input": "byg:white_sandstone",
            "outputs": [
                {
                    "item": "byg:white_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/blue_sand",
            "input": "byg:blue_sandstone",
            "outputs": [
                {
                    "item": "byg:blue_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/purple_sand",
            "input": "byg:purple_sandstone",
            "outputs": [
                {
                    "item": "byg:purple_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_sand_from_red_sandstone",
            "input": "#forge:sandstone/red",
            "outputs": [
                {
                    "item": "minecraft:red_sand",
                    "count": 2,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/construction_paste",
            "input": "buildinggadgets:construction_block_dense",
            "outputs": [
                {
                    "item": "buildinggadgets:construction_paste",
                    "count": 3,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/glowstone_dust_from_glowstone",
            "input": "minecraft:glowstone",
            "outputs": [
                {
                    "item": "minecraft:glowstone_dust",
                    "count": 3,
                    "chance": 1
                },
                {
                    "item": "minecraft:glowstone_dust",
                    "count": 1,
                    "chance": 0.75
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/basalz_powder",
            "input": "#forge:rods/basalz",
            "outputs": [
                {
                    "item": "thermal:basalz_powder",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "thermal:basalz_rod",
                    "count": 1,
                    "chance": 0.8
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/blitz_powder",
            "input": "#forge:rods/blitz",
            "outputs": [
                {
                    "item": "thermal:blitz_powder",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "thermal:blitz_rod",
                    "count": 1,
                    "chance": 0.8
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/blizz_powder",
            "input": "#forge:rods/blizz",
            "outputs": [
                {
                    "item": "thermal:blizz_powder",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "thermal:blizz_rod",
                    "count": 1,
                    "chance": 0.8
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/blaze_powder",
            "input": "#forge:rods/blaze",
            "outputs": [
                {
                    "item": "minecraft:blaze_powder",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "minecraft:blaze_rod",
                    "count": 1,
                    "chance": 0.8
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_sand_from_granite",
            "input": "minecraft:granite",
            "outputs": [
                {
                    "item": "minecraft:red_sand",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/limesand",
            "input": "minecraft:diorite",
            "outputs": [
                {
                    "item": "create:limesand",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/blue_glowcane_dust_from_blue_glowcane",
            "input": "byg:blue_glowcane",
            "outputs": [
                {
                    "item": "byg:blue_glowcane_dust",
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": "byg:blue_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/blue_glowcane_dust_from_blue_glowcane_block",
            "input": "byg:blue_glowcane_block",
            "outputs": [
                {
                    "item": "byg:blue_glowcane_dust",
                    "count": 3,
                    "chance": 1
                },
                {
                    "item": "byg:blue_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/pink_glowcane_dust_from_pink_glowcane",
            "input": "byg:pink_glowcane",
            "outputs": [
                {
                    "item": "byg:pink_glowcane_dust",
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": "byg:pink_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/pink_glowcane_dust_from_pink_glowcane_block",
            "input": "byg:pink_glowcane_block",
            "outputs": [
                {
                    "item": "byg:pink_glowcane_dust",
                    "count": 3,
                    "chance": 1
                },
                {
                    "item": "byg:pink_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/purple_glowcane_dust_from_purple_glowcane",
            "input": "byg:purple_glowcane",
            "outputs": [
                {
                    "item": "byg:purple_glowcane_dust",
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": "byg:purple_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/purple_glowcane_dust_from_purple_glowcane_block",
            "input": "byg:purple_glowcane_block",
            "outputs": [
                {
                    "item": "byg:purple_glowcane_dust",
                    "count": 3,
                    "chance": 1
                },
                {
                    "item": "byg:purple_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_glowcane_dust_from_red_glowcane",
            "input": "byg:red_glowcane",
            "outputs": [
                {
                    "item": "byg:red_glowcane_dust",
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": "byg:red_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_glowcane_dust_from_red_glowcane_block",
            "input": "byg:red_glowcane_block",
            "outputs": [
                {
                    "item": "byg:red_glowcane_dust",
                    "count": 3,
                    "chance": 1
                },
                {
                    "item": "byg:red_glowcane_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/clay_ball",
            "input": "minecraft:clay",
            "outputs": [
                {
                    "item": "minecraft:clay_ball",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "minecraft:clay",
                    "count": 1,
                    "chance": 0.75
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/crystal_shards",
            "input": "betterendforge:aurora_crystal",
            "outputs": [
                {
                    "item": "betterendforge:crystal_shards",
                    "count": 1,
                    "chance": 1
                },
                {
                    "item": "betterendforge:aurora_crystal",
                    "count": 1,
                    "chance": 0.75
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/cobbled_ether_stone",
            "input": "byg:ether_stone",
            "outputs": [
                {
                    "item": "byg:cobbled_ether_stone",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/dacite_cobblestone",
            "input": "byg:dacite",
            "outputs": [
                {
                    "item": "byg:dacite_cobblestone",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/nether_wart",
            "input": "minecraft:nether_wart_block",
            "outputs": [
                {
                    "item": "minecraft:nether_wart",
                    "count": 4,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/glowstone_dust_from_pervaded_netherrack",
            "input": "byg:pervaded_netherrack",
            "outputs": [
                {
                    "item": "minecraft:glowstone_dust",
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": "minecraft:glowstone_dust",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_sand_from_red_rock",
            "input": "byg:red_rock",
            "outputs": [
                {
                    "item": "minecraft:red_sand",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/red_sand_from_terracotta",
            "input": "minecraft:terracotta",
            "outputs": [
                {
                    "item": "minecraft:red_sand",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/petcoke_dust",
            "input": "#forge:coal_petcoke",
            "outputs": [
                {
                    "item": "immersivepetroleum:petcoke_dust",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/petcoke_dust_from_block",
            "input": "#forge:storage_blocks/coal_petcoke",
            "outputs": [
                {
                    "item": "immersivepetroleum:petcoke_dust",
                    "count": 9,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/coke_dust",
            "input": "#forge:gems/coal_coke",
            "outputs": [
                {
                    "item": "emendatusenigmatica:coke_dust",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/coke_dust_from_block",
            "input": "#forge:storage_blocks/coal_coke",
            "outputs": [
                {
                    "item": "emendatusenigmatica:coke_dust",
                    "count": 9,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/crushed_end_stone",
            "input": "#forge:end_stones",
            "outputs": [
                {
                    "item": "occultism:crushed_end_stone",
                    "count": 4,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/quartz_from_quartzite_sand",
            "input": "byg:quartzite_sand",
            "outputs": [
                {
                    "item": "minecraft:quartz",
                    "count": 1,
                    "chance": 1
                }
            ]
        },
        {
            "id": "enigmatica:base/ars_nouveau/crush/quartzite_sand_from_raw_block",
            "input": "byg:raw_quartz_block",
            "outputs": [
                {
                    "item": "byg:quartzite_sand",
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": "byg:quartzite_sand",
                    "count": 1,
                    "chance": 0.5
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input)) return;
        if (!recipe.outputs.every((output) => e6ePortedItemExists(output.item))) return;

        const outputs = recipe.outputs.map((output) => ({
            stack: Item.of(output.item, output.count),
            chance: output.chance,
            maxRange: 1
        }));
        event.recipes.ars_nouveau.crush(recipe.input, outputs).id(recipe.id);
    });

    ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'].forEach((color) => {
        const wool = 'minecraft:' + color + '_wool';
        if (!e6ePortedItemExists(wool)) return;
        event.recipes.ars_nouveau.crush(wool, [
            { stack: Item.of('minecraft:string'), chance: 1, maxRange: 1 },
            { stack: Item.of(wool), chance: 0.75, maxRange: 1 }
        ]).id(id_prefix + 'string_from_' + color + '_wool');
    });
});
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "ars_nouveau:crush", true, ["ars_nouveau:crush","create:milling","immersiveengineering:crusher","industrialforegoing:crusher","mekanism:enriching","occultism:crushing"]);
    const recipes = [
        {
            id: 'bone_meal_from_bone_serpent_tooth',
            input: { item: 'alexsmobs:bone_serpent_tooth' },
            output: 'minecraft:bone_meal',
            count: 8,
            duration: 150,
            secondary: { item: 'minecraft:bone_meal', count: 2, chance: 0.25 }
        },
        {
            id: 'bone_meal_from_thrasher_tooth',
            input: { item: 'upgrade_aquatic:thrasher_tooth' },
            output: 'minecraft:bone_meal',
            count: 8,
            duration: 150,
            secondary: { item: 'minecraft:bone_meal', count: 2, chance: 0.25 }
        },
        {
            id: 'bone_meal_from_cachalot_whale_tooth',
            input: { item: 'alexsmobs:cachalot_whale_tooth' },
            output: 'minecraft:bone_meal',
            count: 8,
            duration: 150,
            secondary: { item: 'minecraft:bone_meal', count: 2, chance: 0.25 }
        },
        {
            id: 'bone_meal_from_serrated_shark_tooth',
            input: { item: 'alexsmobs:serrated_shark_tooth' },
            output: 'minecraft:bone_meal',
            count: 4,
            duration: 50,
            secondary: { item: 'minecraft:bone_meal', chance: 0.15 }
        },
        {
            id: 'aquamarine',
            // 1.21.1 版 Astral Sorcery 将蓝晶石矿石改名为 shale 方块。
            input: { item: 'astralsorcery:aquamarine_shale' },
            output: 'astralsorcery:aquamarine',
            count: 4,
            duration: 150,
            secondary: { item: 'astralsorcery:aquamarine', chance: 0.15 },
            ignoreOccultismMultiplier: false
        }
    ];

    const inputString = (input) => (input.tag ? `#${input.tag}` : input.item);
    const recipeExists = (recipe) =>
        e6eRecipeIngredientExists(recipe.input) && e6ePortedItemExists(recipe.output);
    const primaryStack = (recipe) => Item.of(recipe.output, recipe.count);
    const recipeId = (machine, recipe) =>
        `enigmatica:base/enigmatica/crushing/${machine}/${recipe.id}`;

    recipes.forEach((recipe) => {
        if (!recipeExists(recipe)) return;

        if (e6ePortedRecipeModLoaded('occultism')) {
            event.custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: {
                    type: 'occultism:item',
                    id: recipe.output,
                    count: recipe.count
                },
                crushing_time: recipe.duration,
                ignore_crushing_multiplier: recipe.ignoreOccultismMultiplier !== false
            }).id(recipeId('occultism', recipe));
        }

        if (e6ePortedRecipeModLoaded('industrialforegoing')) {
            event.custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: { item: recipe.output, count: recipe.count }
            }).id(recipeId('industrialforegoing', recipe));
        }

        if (e6ePortedRecipeModLoaded('mekanism')) {
            event.recipes.mekanism.enriching(primaryStack(recipe), inputString(recipe.input))
                .id(recipeId('mekanism_enriching', recipe));
        }

        if (e6ePortedRecipeModLoaded('immersiveengineering')) {
            const TagOutputJS = Java.loadClass(
                'com.chen1335.immersiveEngineeringJs.api.crafting.TagOutputJS'
            );
            const StackWithChanceJS = Java.loadClass(
                'com.chen1335.immersiveEngineeringJs.api.crafting.StackWithChanceJS'
            );
            const secondary = recipe.secondary && e6ePortedItemExists(recipe.secondary.item)
                ? StackWithChanceJS.of(
                      Item.of(recipe.secondary.item, recipe.secondary.count || 1),
                      recipe.secondary.chance
                  )
                : null;
            event.recipes.immersiveengineering
                .crusher(TagOutputJS.ofItemStack(primaryStack(recipe)), inputString(recipe.input), 3200, secondary ? [secondary] : [])
                .id(recipeId('immersiveengineering', recipe));
        }

        if (e6ePortedRecipeModLoaded('create')) {
            const outputs = [{ id: recipe.output, count: recipe.count }];
            if (recipe.secondary && e6ePortedItemExists(recipe.secondary.item)) {
                outputs.push({
                    id: recipe.secondary.item,
                    count: recipe.secondary.count || 1,
                    chance: recipe.secondary.chance
                });
            }
            event.custom({
                type: 'create:milling',
                ingredients: [recipe.input],
                results: outputs,
                processing_time: recipe.duration || 100
            }).id(recipeId('create_milling', recipe));
        }

        if (e6ePortedRecipeModLoaded('ars_nouveau')) {
            const outputs = [{ stack: primaryStack(recipe), chance: 1, maxRange: 1 }];
            if (recipe.secondary && e6ePortedItemExists(recipe.secondary.item)) {
                outputs.push({
                    stack: Item.of(recipe.secondary.item, recipe.secondary.count || 1),
                    chance: recipe.secondary.chance,
                    maxRange: 1
                });
            }
            event.recipes.ars_nouveau.crush(inputString(recipe.input), outputs)
                .id(recipeId('ars_nouveau', recipe));
        }
    });
});
})();

(function () {
// 仅为目标端实际存在的原料、染料和机器配方类型注册配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "ars_nouveau:crush", true, ["ars_nouveau:crush","atum:quern","create:milling","e6e_mbd2:thermal_centrifuge","immersiveengineering:crusher","mekanism:enriching","mekanism:pigment_extracting","minecraft:crafting_shapeless","occultism:crushing","pedestals:pedestal_crushing"]);
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

(function () {
// 仅在目标端对应物品、标签和配方附属可用时注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "ars_nouveau:crush", true, ["ars_nouveau:crush","create:crushing","create:milling","create:splashing","immersiveengineering:crusher","immersiveengineering:metal_press","mekanism:crushing","mekanism:enriching","minecraft:blasting","minecraft:crafting_shapeless","minecraft:smelting","occultism:crushing"]);
    const idPrefix = 'enigmatica:base/unification/unify_materials/';
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');
    const hasIE = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasMekanism = e6ePortedRecipeModLoaded('mekanism') && e6ePortedRecipeModLoaded('kubejs_mekanism');
    const hasOccultism = e6ePortedRecipeModLoaded('occultism') && e6ePortedRecipeModLoaded('occultism_kubejs');
    const hasArs = e6ePortedRecipeModLoaded('ars_nouveau') && e6ePortedRecipeModLoaded('kubejsarsnouveau');

    function tagFor(type, material, namespaces) {
        const ns = namespaces || ['c', 'forge'];
        for (let i = 0; i < ns.length; i++) {
            const candidate = `#${ns[i]}:${type}/${material}`;
            if (e6eRecipeIngredientExists(candidate)) return candidate;
        }
        return null;
    }

    function preferred(tag) {
        if (!tag) return air;
        try {
            return getPreferredItemInTag(Ingredient.of(tag)).id;
        } catch (error) {
            return air;
        }
    }

    function propertyOutput(properties, dust, gem, shard) {
        if (!properties) return null;
        if (properties.output === 'dust') return dust !== air ? dust : null;
        if (properties.output === 'gem') return gem !== air ? gem : null;
        if (properties.output === 'shard') return shard !== air ? shard : null;
        return null;
    }

    materialsToUnify.forEach((material) => {
        const oreTag = tagFor('ores', material);
        const ingotTag = tagFor('ingots', material);
        const nuggetTag = tagFor('nuggets', material);
        const gemTag = tagFor('gems', material);
        const blockTag = tagFor('storage_blocks', material);
        const dustTag = tagFor('dusts', material);
        const shardTag = tagFor('shards', material);
        const crushedOreTag = tagFor('crushed_ores', material, ['create']);
        const ore = preferred(oreTag);
        const ingot = preferred(ingotTag);
        const nugget = preferred(nuggetTag);
        const gem = preferred(gemTag);
        const dust = preferred(dustTag);
        const shard = preferred(shardTag);
        const crushedOre = preferred(crushedOreTag);

        if (hasCreate) {
            createMetalOre(material, oreTag, ore, ingot, crushedOreTag, crushedOre);
            createGemOre(material, oreTag, ore, dust, gem, shard);
            createIngotGemMilling(material, ingotTag, ingot, gemTag, gem, dust);
            createMetalBlock(material, blockTag, ingot, nugget, crushedOreTag, crushedOre);
        }

        if (hasIE) {
            immersiveEngineeringGemOre(material, oreTag, ore, dust, gem, shard);
            immersiveEngineeringGemCrushing(material, gemTag, gem, dust);
            immersiveEngineeringSpecialIngotCrushing(material, ingotTag, ingot, dust);
            immersiveEngineeringHammerCrushing(material, oreTag, ore, gemTag, gem, dust);
            immersiveEngineeringPacking(material, blockTag, ingotTag, ingot, nuggetTag, nugget, gemTag, gem);
        }

        if (hasMekanism) {
            mekanismIngotGemCrushing(material, ingotTag, ingot, gemTag, gem, dust);
            mekanismGemOre(material, oreTag, ore, dust, gem, shard);
        }

        vanillaOreAndDustSmelting(material, oreTag, ore, gem, dustTag, dust, ingot);

        if (hasOccultism) {
            occultismGemOre(material, oreTag, ore, dust, gem, shard);
            occultismMetalOre(material, oreTag, ore, ingot, dust);
            occultismIngotGem(material, ingotTag, ingot, gemTag, gem, dust);
        }

        if (hasArs) {
            arsGemOre(material, oreTag, ore, dust, gem, shard);
            arsMetalOre(material, oreTag, ore, ingot, dust);
            arsIngotGem(material, ingotTag, ingot, gemTag, gem, dust);
        }
    });

    function createMetalOre(material, oreTag, ore, ingot, crushedTag, crushedOre) {
        if (ore === air || ingot === air || crushedOre === air || !oreTag || !crushedTag) return;

        let secondary = null;
        let processingTime = 400;
        let hasSecondaryConfig = false;
        try {
            const properties = oreProcessingSecondaries[material];
            if (properties) {
                hasSecondaryConfig = true;
                const secondaryTag = tagFor('crushed_ores', properties.secondary, ['create']);
                const found = preferred(secondaryTag);
                if (found !== air) secondary = found;
                if (Number(properties.createProcessingTime) > 0) processingTime = Number(properties.createProcessingTime);
            }
        } catch (error) {
            // 没有副产物配置时沿用该矿石本身作为副产物。
        }
        if (!hasSecondaryConfig) secondary = crushedOre;

        const millingOutputs = [
            Item.of(crushedOre),
            Item.of(crushedOre, 2).withChance(0.25)
        ];
        const crushingOutputs = [
            Item.of(crushedOre),
            Item.of(crushedOre, 2).withChance(0.6)
        ];
        if (secondary !== null) {
            millingOutputs.push(Item.of(secondary, 2).withChance(0.05));
            crushingOutputs.push(Item.of(secondary, 2).withChance(0.1));
        }
        crushingOutputs.push(Item.of('minecraft:cobblestone').withChance(0.125));

        event.recipes.create.milling(millingOutputs, oreTag)
            .processingTime(processingTime).id(`create:milling/${material}_ore`);

        event.recipes.create.crushing(crushingOutputs, oreTag)
            .processingTime(processingTime).id(`create:crushing/${material}_ore`);
    }

    function createGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.create) return;

        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        const stone = properties.stoneOutput;
        if (!e6eRecipeOutputExists(stone)) return;

        const outputs = [Item.of(output, properties.create.primaryCount)];
        if (properties.secondary) {
            if (e6eRecipeOutputExists(properties.secondary)) {
                outputs.push(Item.of(properties.secondary, properties.create.secondaryCount)
                    .withChance(properties.create.secondaryChance));
            }
        } else {
            outputs.push(Item.of(output, properties.create.secondaryCount)
                .withChance(properties.create.secondaryChance));
        }
        outputs.push(Item.of(stone).withChance(0.125));

        const time = Number(properties.create.processingTime) > 0 ? Number(properties.create.processingTime) : 300;
        event.recipes.create.crushing(outputs, oreTag)
            .processingTime(time)
            .id(`create:crushing/${material}_ore`);
    }

    function createIngotGemMilling(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        let input = ingotTag;
        if (ingot === air) input = gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.create.milling([Item.of(dust)], input)
            .processingTime(300)
            .id(`${idPrefix}create/milling/${material}_dust`);
    }

    function createMetalBlock(material, blockTag, ingot, nugget, crushedTag, crushedOre) {
        if (ingot === air || crushedOre === air || !blockTag || !crushedTag) return;
        event.recipes.create.crushing(Item.of(crushedOre, 5), blockTag)
            .processingTime(400)
            .id(`create:crushing/${material}_block`);
        if (nugget !== air) {
            event.recipes.create.splashing([
                Item.of(nugget, 10),
                Item.of(nugget, 5).withChance(0.5)
            ], crushedOre).id(`create:splashing/crushed_${material}`);
        }
        event.blasting(ingot, crushedTag).xp(0.1).id(`create:blasting/${material}_ingot_from_crushed`);
        event.smelting(ingot, crushedTag).xp(0.1).id(`create:smelting/${material}_ingot_from_crushed`);
    }

    function immersiveEngineeringGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.immersiveengineering) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output || !e6eRecipeOutputExists(output)) return;

        const secondary = properties.secondary;
        const secondaryChance = Number(properties.immersiveengineering.secondaryChance);
        const byproducts = e6eRecipeOutputExists(secondary) && secondaryChance >= 0 && secondaryChance <= 1
            ? [Item.of(secondary).withChance(secondaryChance)] : [];
        event.recipes.immersiveengineering.crusher(
            Item.of(output, properties.immersiveengineering.count), oreTag, byproducts
        ).energy(2000).id(`immersiveengineering:crusher/ore_${material}`);
    }

    function immersiveEngineeringGemCrushing(material, gemTag, gem, dust) {
        if (dust === air) return;
        let input = gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.immersiveengineering.crusher(dust, input)
            .energy(2000).id(`${idPrefix}immersiveengineering/gem_to_dust/${material}`);
    }

    function immersiveEngineeringSpecialIngotCrushing(material, ingotTag, ingot, dust) {
        if (!['signalum', 'lumium', 'enderium'].includes(material) || ingot === air || dust === air || !ingotTag) return;
        event.recipes.immersiveengineering.crusher(dust, ingotTag)
            .energy(2000).id(`${idPrefix}immersiveengineering/ingot_to_dust/${material}`);
    }

    function immersiveEngineeringHammerCrushing(material, oreTag, ore, gemTag, gem, dust) {
        if (ore === air || dust === air || !oreTag) return;
        let hammer = null;
        const hammerTags = ['#c:tools/crafting_hammer', '#c:tools/hammers', '#forge:tools/crafting_hammer'];
        for (let i = 0; i < hammerTags.length; i++) {
            if (e6eRecipeIngredientExists(hammerTags[i])) {
                hammer = hammerTags[i];
                break;
            }
        }
        if (!hammer) return;
        event.shapeless(dust, [oreTag, hammer])
            .id(`enigmatica:base/enigmatica/${material}_dust_from_ore`);
        if (gem !== air && gemTag) {
            event.shapeless(dust, [gemTag, hammer])
                .id(`${idPrefix}immersiveengineering/hammer/gem_to_dust/${material}`);
        }
    }

    function immersiveEngineeringPacking(material, blockTag, ingotTag, ingot, nuggetTag, nugget, gemTag, gem) {
        if (['ender', 'amber', 'quartz'].includes(material)) return;
        const packingMold = 'immersiveengineering:mold_packing_9';
        const unpackingMold = 'immersiveengineering:mold_unpacking';
        if (!e6ePortedItemExists(packingMold) || !e6ePortedItemExists(unpackingMold)) return;
        const block = preferred(blockTag);

        if (block !== air && blockTag && ingotTag && ingot !== air) {
            event.recipes.immersiveengineering.metal_press(
                block, `9x ${ingotTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/ingots_to_block`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${ingot}`, blockTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/block_to_ingots`);
        }

        if (block !== air && blockTag && gemTag && gem !== air) {
            event.recipes.immersiveengineering.metal_press(
                block, `9x ${gemTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/gems_to_block`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${gem}`, blockTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/block_to_gems`);
        }

        if (ingotTag && nuggetTag && ingot !== air && nugget !== air) {
            event.recipes.immersiveengineering.metal_press(
                ingot, `9x ${nuggetTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/nuggets_to_ingot`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${nugget}`, ingotTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/ingot_to_nuggets`);
        }
    }

    function mekanismIngotGemCrushing(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.remove({ input: input, mod: 'mekanism', type: 'mekanism:crushing' });
        event.recipes.mekanism.crushing(dust, input).id(`mekanism:processing/${material}/to_dust`);
    }

    function mekanismGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.mekanism) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        event.recipes.mekanism.enriching(Item.of(output, properties.mekanism.count), oreTag)
            .id(`mekanism:processing/${material}/from_ore`);
    }

    function vanillaOreAndDustSmelting(material, oreTag, ore, gem, dustTag, dust, ingot) {
        if (ore !== air && gem !== air && !['amber', 'ender'].includes(material) && oreTag) {
            event.smelting(gem, oreTag).xp(0.7).id(`${idPrefix}smelting/${material}/gem/from_ore`);
            event.blasting(gem, oreTag).xp(0.7).id(`${idPrefix}blasting/${material}/gem/from_ore`);
        }
        if (ingot !== air && dust !== air && !['starmetal'].includes(material) && dustTag) {
            event.smelting(ingot, dustTag).xp(0.7).id(`${idPrefix}smelting/${material}/ingot/from_dust`);
            event.blasting(ingot, dustTag).xp(0.7).id(`${idPrefix}blasting/${material}/ingot/from_dust`);
        }
    }

    function occultismGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.occultism) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(oreTag).toJson(),
            result: { type: 'occultism:item', id: output, count: properties.occultism.count },
            crushing_time: 100,
            ignore_crushing_multiplier: false
        }).id(`${idPrefix}occultism_crushing/${material}/${properties.output}/from_ore`);
    }

    function occultismMetalOre(material, oreTag, ore, ingot, dust) {
        if (ore === air || ingot === air || dust === air || !oreTag) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(oreTag).toJson(),
            result: { type: 'occultism:item', id: dust, count: 2 },
            crushing_time: 100,
            ignore_crushing_multiplier: false
        }).id(`occultism:crushing/${material}_dust`);
    }

    function occultismIngotGem(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air || (material === 'silver')) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(input).toJson(),
            result: { type: 'occultism:item', id: dust, count: 1 },
            crushing_time: 100,
            ignore_crushing_multiplier: true
        }).id(`${idPrefix}occultism_crushing/${material}_dust`);
    }

    function arsGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.ars_nouveau) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        const outputs = [
            { stack: Item.of(output, properties.ars_nouveau.primaryCount), chance: 1.0, maxRange: 1 }
        ];
        if (properties.secondary) {
            if (e6eRecipeOutputExists(properties.secondary)) {
                outputs.push({
                    stack: Item.of(properties.secondary, properties.ars_nouveau.secondaryCount),
                    chance: properties.ars_nouveau.secondaryChance,
                    maxRange: 1
                });
            }
        } else {
            outputs.push({
                stack: Item.of(output, properties.ars_nouveau.secondaryCount),
                chance: properties.ars_nouveau.secondaryChance,
                maxRange: 1
            });
        }
        event.recipes.ars_nouveau.crush(oreTag, outputs)
            .id(`ars_nouveau:crushing/${material}_from_ore`);
    }

    function arsMetalOre(material, oreTag, ore, ingot, dust) {
        if (ore === air || ingot === air || dust === air || !oreTag) return;
        let secondary = null;
        let hasSecondaryConfig = false;
        try {
            const properties = oreProcessingSecondaries[material];
            if (properties) {
                hasSecondaryConfig = true;
                const secondaryDust = preferred(tagFor('dusts', properties.secondary));
                if (secondaryDust !== air) secondary = secondaryDust;
            }
        } catch (error) {
            // 缺少副产物映射时只产出主粉尘。
        }
        if (!hasSecondaryConfig) secondary = dust;
        const outputs = [{ stack: Item.of(dust, 2), chance: 1.0, maxRange: 1 }];
        if (secondary !== null) outputs.push({ stack: Item.of(secondary), chance: 0.1, maxRange: 1 });
        event.recipes.ars_nouveau.crush(oreTag, outputs)
            .id(`ars_nouveau:crushing/${material}_dust_from_ore`);
    }

    function arsIngotGem(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.ars_nouveau.crush(input, [
            { stack: Item.of(dust), chance: 1.0, maxRange: 1 }
        ]).id(`ars_nouveau:crushing/${material}_dust`);
    }
});
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "ars_nouveau:crush", true, ["ars_nouveau:crush","create:milling","immersiveengineering:crusher","industrialforegoing:crusher","mekanism:enriching","occultism:crushing"]);
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            id: 'basalt_powder',
            input: { tag: 'forge:stones/basalt' },
            output: 'kubejs:basalt_powder',
            count: 4,
            secondary: { item: 'kubejs:basalt_powder', chance: 0.5 }
        },
        {
            id: 'ground_meat_small',
            input: { tag: 'enigmatica:meats/small' },
            output: 'kubejs:ground_meat',
            count: 1,
            secondary: { item: 'minecraft:bone_meal', chance: 0.15 }
        },
        {
            id: 'ground_meat_medium',
            input: { tag: 'enigmatica:meats/medium' },
            output: 'kubejs:ground_meat',
            count: 2,
            secondary: { item: 'minecraft:bone_meal', chance: 0.15 }
        },
        {
            id: 'ground_meat_large',
            input: { tag: 'enigmatica:meats/large' },
            output: 'kubejs:ground_meat',
            count: 3,
            secondary: { item: 'minecraft:bone_meal', chance: 0.15 }
        },
        {
            id: 'warp_dust',
            input: { item: 'waystones:warp_stone' },
            output: 'waystones:warp_dust',
            count: 3,
            secondary: { item: 'waystones:warp_dust', chance: 0.15 }
        }
    ];

    const inputString = (input) => (input.tag ? `#${input.tag}` : input.item);
    const recipeExists = (recipe) =>
        e6eRecipeIngredientExists(recipe.input) && e6ePortedItemExists(recipe.output);
    const primaryStack = (recipe) => Item.of(recipe.output, recipe.count);
    const recipeId = (machine, recipe) =>
        `enigmatica:expert/enigmatica/crushing/${machine}/${recipe.id}`;

    recipes.forEach((recipe) => {
        if (!recipeExists(recipe)) return;

        if (e6ePortedRecipeModLoaded('occultism')) {
            event.custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: {
                    type: 'occultism:item',
                    id: recipe.output,
                    count: recipe.count
                },
                crushing_time: 100,
                ignore_crushing_multiplier: true
            }).id(recipeId('occultism', recipe));
        }

        if (e6ePortedRecipeModLoaded('industrialforegoing')) {
            event.custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: { item: recipe.output, count: recipe.count }
            }).id(recipeId('industrialforegoing', recipe));
        }

        if (e6ePortedRecipeModLoaded('mekanism')) {
            event.recipes.mekanism.enriching(primaryStack(recipe), inputString(recipe.input))
                .id(recipeId('mekanism_enriching', recipe));
        }

        if (e6ePortedRecipeModLoaded('immersiveengineering')) {
            const TagOutputJS = Java.loadClass(
                'com.chen1335.immersiveEngineeringJs.api.crafting.TagOutputJS'
            );
            const StackWithChanceJS = Java.loadClass(
                'com.chen1335.immersiveEngineeringJs.api.crafting.StackWithChanceJS'
            );
            const secondary = recipe.secondary && e6ePortedItemExists(recipe.secondary.item)
                ? StackWithChanceJS.of(Item.of(recipe.secondary.item), recipe.secondary.chance)
                : null;
            event.recipes.immersiveengineering
                .crusher(TagOutputJS.ofItemStack(primaryStack(recipe)), inputString(recipe.input), 3200, secondary ? [secondary] : [])
                .id(recipeId('immersiveengineering', recipe));
        }

        if (e6ePortedRecipeModLoaded('create')) {
            const outputs = [{ id: recipe.output, count: recipe.count }];
            if (recipe.secondary && e6ePortedItemExists(recipe.secondary.item)) {
                outputs.push({
                    id: recipe.secondary.item,
                    count: recipe.secondary.count || 1,
                    chance: recipe.secondary.chance
                });
            }
            event.custom({
                type: 'create:milling',
                ingredients: [recipe.input],
                results: outputs,
                processing_time: recipe.duration || 100
            }).id(recipeId('create_milling', recipe));
        }

        if (e6ePortedRecipeModLoaded('ars_nouveau')) {
            const outputs = [{ stack: primaryStack(recipe), chance: 1, maxRange: 1 }];
            if (recipe.secondary && e6ePortedItemExists(recipe.secondary.item)) {
                outputs.push({
                    stack: Item.of(recipe.secondary.item),
                    chance: recipe.secondary.chance,
                    maxRange: 1
                });
            }
            event.recipes.ars_nouveau.crush(inputString(recipe.input), outputs)
                .id(recipeId('ars_nouveau', recipe));
        }
    });
});
})();
