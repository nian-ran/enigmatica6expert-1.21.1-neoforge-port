// 配方类型：immersiveengineering:sawmill
// 中文名称：锯木机加工
// 用途：用于登记沉浸工程的锯木机加工配方。

(function () {
if (['astralsorcery', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/cutting/';
    const recipes = [
        {
            input: '#minecraft:planks',
            output: Item.of('minecraft:stick', 6),
            id: `${id_prefix}sticks_from_planks`
        },
        {
            input: '#minecraft:wooden_slabs',
            output: Item.of('minecraft:stick', 3),
            id: `${id_prefix}sticks_from_wooden_slabs`
        },
        {
            input: '#minecraft:wooden_stairs',
            output: Item.of('minecraft:stick', 9),
            id: `${id_prefix}sticks_from_wooden_stairs`
        },
        {
            input: 'naturesaura:ancient_log',
            output: Item.of('6x naturesaura:ancient_planks'),
            id: `${id_prefix}ancient_planks_from_log`
        },
        {
            input: 'naturesaura:ancient_bark',
            output: Item.of('6x naturesaura:ancient_planks'),
            id: `${id_prefix}ancient_planks_from_bark`
        },
        {
            input: 'botania:livingwood',
            output: Item.of('6x botania:livingwood_planks'),
            id: `${id_prefix}livingwood_planks_from_livingwood`
        },
        {
            input: 'astralsorcery:infused_wood',
            output: Item.of('6x astralsorcery:infused_wood_planks'),
            id: `${id_prefix}infused_wood_planks_from_infused_wood`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeIngredientExists(recipe.input)) return;
        event.recipes.immersiveengineering.sawmill(recipe.output, recipe.input, []).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/cutting/';
    const recipes = [
        {
            input: 'occultism:otherstone',
            output: Item.of('darkutils:blank_plate', 8),
            id: `${id_prefix}blank_plate`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeIngredientExists(recipe.input)) return;
        event.recipes.immersiveengineering
            .sawmill(recipe.output, recipe.input, [])
            .id(recipe.id);
    });
});
})();

(function () {

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "immersiveengineering:sawmill", false, ["create:cutting","immersiveengineering:sawmill","mekanism:sawing","pedestals:pedestal_sawing","e6e_mbd2:thermal_sawmill"]);
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
