// 配方类型：industrialforegoing:crusher
// 中文名称：粉碎机加工
// 用途：用于登记工业先锋的粉碎机加工配方。

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "industrialforegoing:crusher", false, ["ars_nouveau:crush","create:milling","immersiveengineering:crusher","industrialforegoing:crusher","mekanism:enriching","occultism:crushing"]);
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
if (['byg'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            input: { tag: 'forge:cobblestone' },
            output: { item: 'minecraft:gravel' },
            id: 'industrialforegoing:crusher/cobble_gravel'
        },
        {
            input: { tag: 'forge:gravel' },
            output: { item: 'minecraft:sand' },
            id: 'industrialforegoing:crusher/gravel_sand'
        },
        {
            input: { item: 'byg:white_sandstone' },
            output: { item: 'byg:white_sand' },
            id: 'enigmatica:industrialforegoing/crusher/white_sandstone_sand'
        },
        {
            input: { item: 'byg:blue_sandstone' },
            output: { item: 'byg:blue_sand' },
            id: 'enigmatica:industrialforegoing/crusher/blue_sandstone_sand'
        },
        {
            input: { item: 'byg:purple_sandstone' },
            output: { item: 'byg:purple_sand' },
            id: 'enigmatica:industrialforegoing/crusher/purple_sandstone_sand'
        },
        {
            input: { item: 'byg:black_sandstone' },
            output: { item: 'byg:black_sand' },
            id: 'enigmatica:industrialforegoing/crusher/black_sandstone_sand'
        },
        {
            input: { item: 'minecraft:end_stone' },
            output: { item: 'byg:end_sand' },
            id: 'enigmatica:industrialforegoing/crusher/end_stone_sand'
        },
        {
            input: { item: 'minecraft:red_sandstone' },
            output: { item: 'minecraft:red_sand' },
            id: 'enigmatica:industrialforegoing/crusher/red_sandstone_sand'
        },
        {
            input: { item: 'minecraft:sandstone' },
            output: { item: 'minecraft:sand' },
            id: 'enigmatica:industrialforegoing/crusher/sandstone_sand'
        },
        {
            input: { item: 'atmospheric:arid_sandstone' },
            output: { item: 'atmospheric:arid_sand' },
            id: 'enigmatica:industrialforegoing/crusher/arid_sandstone_sand'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: recipe.output
            })
            .id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "industrialforegoing:crusher", false, ["ars_nouveau:crush","create:milling","immersiveengineering:crusher","industrialforegoing:crusher","mekanism:enriching","occultism:crushing"]);
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
