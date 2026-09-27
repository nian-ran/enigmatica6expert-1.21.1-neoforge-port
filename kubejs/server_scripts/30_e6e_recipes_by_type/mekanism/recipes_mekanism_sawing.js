// 配方类型：mekanism:sawing
// 中文名称：锯切加工
// 用途：用于登记通用机械的锯切加工配方。

(function () {
if (['astralsorcery', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/sawing/';
    const recipes = [
        {
            input: ['astralsorcery:infused_wood'],
            output: Item.of('6x astralsorcery:infused_wood_planks'),
            extraOutput: Item.of('astralsorcery:stardust'),
            extraOutputChance: 0.05,
            id: `${id_prefix}infused_wood_planks_from_infused_wood`
        },
        {
            input: ['#forge:storage_blocks/quartz'],
            output: Item.of('3x pneumaticcraft:aphorism_tile'),
            extraOutput: Item.of('emendatusenigmatica:quartz_dust'),
            extraOutputChance: 0.375,
            id: `${id_prefix}aphorism_tile`
        }
    ];
    recipes.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeIngredientExists(recipe.input)) return;
        if (recipe.extraOutput && !e6eRecipeOutputExists(recipe.extraOutput)) return;
        event.recipes.mekanism
            .sawing(recipe.output, recipe.extraOutput, recipe.extraOutputChance, recipe.input)
            .id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/sawing/';
    const recipes = [
        {
            input: 'occultism:dimensional_matrix',
            output: Item.of('kubejs:dimensional_storage_crystal', 21),
            extraOutput: Item.of('3x kubejs:dimensional_storage_crystal'),
            extraOutputChance: 0.5,
            id: `${id_prefix}dimensional_storage_crystal`
        },
        {
            input: 'occultism:otherstone',
            output: Item.of('darkutils:blank_plate', 8),
            extraOutput: Item.of('darkutils:blank_plate'),
            extraOutputChance: 0.5,
            id: `${id_prefix}blank_plate`
        }
    ];
    recipes.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeIngredientExists(recipe.input)) return;
        if (recipe.extraOutput && !e6eRecipeOutputExists(recipe.extraOutput)) return;
        event.recipes.mekanism
            .sawing(recipe.output, recipe.extraOutput, recipe.extraOutputChance, recipe.input)
            .id(recipe.id);
    });
});
})();

(function () {

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "mekanism:sawing", false, ["create:cutting","immersiveengineering:sawmill","mekanism:sawing","pedestals:pedestal_sawing","e6e_mbd2:thermal_sawmill"]);
    if (!e6ePortedRecipeModLoaded('e6e_mbd2')) return;

    buildWoodVariants.forEach((variant) => {
        var sawDust = 'immersiveengineering:sawdust',
            treeBark = 'farmersdelight:tree_bark';

        if (e6ePortedRecipeModLoaded('create')) create_cutting(event, variant, sawDust, treeBark);
        if (e6ePortedRecipeModLoaded('immersiveengineering')) immersiveengineering_sawing(event, variant, sawDust, treeBark);
        if (e6ePortedRecipeModLoaded('mekanism')) mekanism_sawing(event, variant, sawDust);
        if (e6ePortedRecipeModLoaded('pedestals')) pedestal_sawing(event, variant);
        thermal_sawing(event, variant, sawDust);
    });
});

function create_cutting(event, variant, sawDust, treeBark) {
    let data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped,
                secondaryOutput: treeBark,
                count: 1,
                time: 50
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped,
                secondaryOutput: treeBark,
                count: 1,
                time: 50
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock,
                secondaryOutput: sawDust,
                count: 6,
                time: 100
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock,
                secondaryOutput: sawDust,
                count: 6,
                time: 100
            }
        ]
    };

    const { cutting } = event.recipes.create;

    data.recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(recipe.output)) return;
        const outputs = [Item.of(recipe.output, recipe.count)];
        if (e6eRecipeOutputExists(recipe.secondaryOutput)) outputs.push(recipe.secondaryOutput);
        fallback_id(
            cutting(outputs, recipe.input).processingTime(recipe.time),
            `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
        );
    });
}

function immersiveengineering_sawing(event, variant, sawDust, treeBark) {
    if (!e6eRecipeOutputExists(variant.plankBlock)) return;
    [
        { input: variant.logBlockStripped, energy: 800 },
        { input: variant.woodBlockStripped, energy: 800 },
        { input: variant.logBlock, stripped: variant.logBlockStripped, energy: 1600 },
        { input: variant.woodBlock, stripped: variant.woodBlockStripped, energy: 1600 }
    ].forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input)) return;
        const data = {
            type: 'immersiveengineering:sawmill',
            input: { item: recipe.input },
            result: { id: variant.plankBlock, count: 6 },
            energy: recipe.energy
        };
        if (e6eRecipeOutputExists(sawDust)) data.secondaryOutputs = [{ id: sawDust }];
        if (recipe.stripped && e6eRecipeOutputExists(recipe.stripped)) {
            data.stripped = { id: recipe.stripped };
            if (e6eRecipeOutputExists(treeBark)) data.strippingSecondaries = [{ id: treeBark }];
        }
        const path = String(recipe.input).replace(':', '/').replace(/[^a-z0-9_./-]/g, '_');
        event.custom(data).id('enigmatica:base/immersiveengineering/sawmill/' + path);
    });
}

function mekanism_sawing(event, variant, sawDust) {
    if (!e6eRecipeOutputExists(variant.plankBlock)) return;
    if (variant.modId == 'minecraft') {
        event.remove({
            output: variant.plankBlock,
            mod: 'mekanism',
            type: 'mekanism:sawing'
        });
    }

    if (variant.logBlock == 'byg:withering_oak_log') {
        return;
    }

    var data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlock,
                output: variant.plankBlock
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input)) return;
        const data = {
            type: 'mekanism:sawing',
            input: { item: recipe.input, count: 1 },
            main_output: { id: recipe.output, count: 6 }
        };
        if (e6eRecipeOutputExists(sawDust)) {
            data.secondary_output = { id: sawDust, count: 1 };
            data.secondary_chance = 0.25;
        }
        const path = String(recipe.input).replace(':', '/').replace(/[^a-z0-9_./-]/g, '_');
        event.custom(data).id('enigmatica:base/mekanism/sawing/' + path);
    });
}
function pedestal_sawing(event, variant) {
    // 模组黑名单
    if (variant.modId == 'minecraft') {
        return;
    }

    var data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.plankBlock,
                count: 6
            },
            {
                input: variant.woodBlock,
                output: variant.plankBlock,
                count: 6
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock,
                count: 6
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock,
                count: 6
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(recipe.output)) return;
        fallback_id(
            event.recipes.pedestals.pedestal_sawing({
                type: 'pedestals:pedestal_sawing',
                ingredient: {
                    item: recipe.input
                },
                result: {
                    item: recipe.output,
                    count: recipe.count
                }
            }),
            `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
        );
    });
}
function thermal_sawing(event, variant, sawDust) {
    // 保留原热力副产物产量：必定得到 1 个粉末，另有 25% 概率多得 1 个。
    if (!e6ePortedRecipeModLoaded('e6e_mbd2')) return;
    const builder = event.recipes.e6e_mbd2.thermal_sawmill;
    if (typeof builder !== 'function') return;

    // 模组黑名单
    if (
        variant.modId == 'minecraft' ||
        variant.modId == 'byg' ||
        variant.modId == 'autumnity' ||
        variant.modId == 'atmospheric' ||
        variant.modId == 'upgrade_aquatic'
    ) {
        return;
    }

    [
        variant.logBlock,
        variant.woodBlock,
        variant.logBlockStripped,
        variant.woodBlockStripped
    ].forEach((input) => {
        if (!e6eRecipeIngredientExists(input) || !e6eRecipeOutputExists(variant.plankBlock)
            || !e6eRecipeOutputExists(sawDust)) return;

        const path = String(input).replace(':', '/').replace(/[^a-z0-9_./-]/g, '_');
        const recipe = builder()
            .id('enigmatica:base/thermal/sawmill/' + path)
            .duration(100)
            .inputItems(input)
            .outputItems(Item.of(variant.plankBlock, 6))
            .outputItems(sawDust)
            .inputFE(1000);
        recipe.chance(0.25, (chanceRecipe) => chanceRecipe.outputItems(sawDust));
    });
}
})();
