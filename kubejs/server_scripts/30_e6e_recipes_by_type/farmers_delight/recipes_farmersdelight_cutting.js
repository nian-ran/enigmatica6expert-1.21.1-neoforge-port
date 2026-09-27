// 配方类型：farmersdelight:cutting
// 中文名称：切割加工
// 用途：用于登记农夫乐事的切割加工配方。

(function () {
if (['alexsmobs', 'simplefarming'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
function cuttingRecipe(ingredient, tool, result) {
    return { ingredient: ingredient, tool: tool, result: result };
}

function filletRecipe(fish, filletCount) {
    return cuttingRecipe(fish, '#c:tools/knife', [
        `${filletCount}x aquaculture:fish_fillet_raw`,
        `${Math.ceil(filletCount / 3)}x minecraft:bone_meal`
    ]);
}
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cutting/';

    const recipes = [
        cuttingRecipe('quark:root', '#c:tools/knife', ['quark:root_item']),
        cuttingRecipe(
            '#c:storage_blocks/clay',
            '#minecraft:shovels',
            ['4x minecraft:clay_ball']
        ),
        cuttingRecipe('minecraft:chicken', '#c:tools/knife', [
            '2x farmersdelight:chicken_cuts',
            'simplefarming:raw_chicken_wings',
            'minecraft:bone_meal'
        ]),
        cuttingRecipe('aquaculture:frog', '#c:tools/knife', ['2x quark:frog_leg']),
        cuttingRecipe(
            'aquaculture:goldfish',
            '#minecraft:pickaxes',
            ['emendatusenigmatica:gold_chunk']
        ),
        cuttingRecipe('aquaculture:atlantic_cod', '#c:tools/knife', [
            '6x farmersdelight:cod_slice',
            '3x minecraft:bone_meal'
        ]),
        cuttingRecipe('aquaculture:pink_salmon', '#c:tools/knife', [
            '2x farmersdelight:salmon_slice',
            'minecraft:bone_meal'
        ]),
        filletRecipe('minecraft:pufferfish', 2),
        filletRecipe('aquaculture:boulti', 1),
        filletRecipe('aquaculture:smallmouth_bass', 2),
        filletRecipe('aquaculture:atlantic_halibut', 14),
        filletRecipe('aquaculture:pollock', 2),
        filletRecipe('aquaculture:bayad', 4),
        filletRecipe('aquaculture:atlantic_herring', 1),
        filletRecipe('aquaculture:synodontis', 1),
        filletRecipe('aquaculture:piranha', 1),
        filletRecipe('aquaculture:red_grouper', 3),
        filletRecipe('aquaculture:pacific_halibut', 12),
        filletRecipe('aquaculture:perch', 1),
        filletRecipe('aquaculture:rainbow_trout', 2),
        filletRecipe('aquaculture:catfish', 6),
        filletRecipe('aquaculture:muskellunge', 3),
        filletRecipe('aquaculture:tambaqui', 3),
        filletRecipe('aquaculture:carp', 2),
        filletRecipe('aquaculture:blackfish', 2),
        filletRecipe('aquaculture:capitaine', 10),
        filletRecipe('aquaculture:brown_trout', 2),
        filletRecipe('aquaculture:arapaima', 10),
        filletRecipe('aquaculture:tuna', 10),
        filletRecipe('aquaculture:bluegill', 1),
        filletRecipe('aquaculture:gar', 4),
        filletRecipe('undergarden:raw_gwibling', 4),
        filletRecipe('alexsmobs:blobfish', 6),
        filletRecipe('betterendforge:end_fish_raw', 2),
        filletRecipe('upgrade_aquatic:lionfish', 12)
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.ingredient) || !e6eRecipeIngredientExists(recipe.tool)) return;
        if (recipe.result.some((stack) => !e6eRecipeOutputExists(stack))) return;
        fallback_id(event.recipes.farmersdelight.cutting(recipe.ingredient, recipe.tool, recipe.result), id_prefix);
    });

    const tillsIntoFarmland = [
        { type: 'minecraft:farmland', soils: ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:coarse_dirt'] },
        { type: 'farmersdelight:rich_soil_farmland', soils: ['farmersdelight:rich_soil'] },
        {
            type: 'undergarden:deepsoil_farmland',
            soils: [
                'undergarden:deepturf_block',
                'undergarden:ashen_deepturf_block',
                'undergarden:deepsoil',
                'undergarden:coarse_deepsoil'
            ]
        }
    ];

    tillsIntoFarmland.forEach(function (category) {
        let farmland = category.type;
        category.soils.forEach(function (soil) {
            const tool = '#minecraft:hoes';
            const result = [farmland];
            if (!e6eRecipeIngredientExists(soil) || !e6eRecipeIngredientExists(tool)) return;
            if (!e6eRecipeOutputExists(farmland)) return;

            fallback_id(
                event.recipes.farmersdelight.cutting(soil, tool, result),
                id_prefix
            );
        });
    });

    buildWoodVariants.forEach((variant) => {
        let woodRecipes = [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped
            }
        ];

        woodRecipes.forEach((recipe) => {
            const tool = '#minecraft:axes';
            const result = [recipe.output, 'farmersdelight:tree_bark'];
            if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeIngredientExists(tool)) return;
            if (result.some((stack) => !e6eRecipeOutputExists(stack))) return;

            event.remove({ mod: 'farmersdelight', output: recipe.output });

            fallback_id(
                event.recipes.farmersdelight.cutting(recipe.input, tool, result),
                id_prefix
            );
        });
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/farmersdelight/cutting/';

    const recipes = [
        { ingredient: 'minecraft:leather', tool: '#c:tools/knife', result: ['3x betterendforge:leather_stripe'] },
        { ingredient: '#minecraft:planks', tool: '#minecraft:axes', result: ['2x minecraft:stick'] },
        {
            ingredient: 'upgrade_aquatic:embedded_ammonite',
            tool: '#minecraft:pickaxes',
            result: ['2x minecraft:nautilus_shell']
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.ingredient) || !e6eRecipeIngredientExists(recipe.tool)) return;
        if (recipe.result.some((stack) => !e6eRecipeOutputExists(stack))) return;
        fallback_id(event.recipes.farmersdelight.cutting(recipe.ingredient, recipe.tool, recipe.result), id_prefix);
    });

    buildWoodVariants.forEach((variant) => {
        let woodRecipes = [
            {
                input: variant.logBlockStripped
            },
            {
                input: variant.woodBlockStripped
            }
        ];

        woodRecipes.forEach((recipe) => {
            const tool = '#minecraft:axes';
            const result = ['8x minecraft:stick'];
            if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(result[0])) return;
            fallback_id(
                event.recipes.farmersdelight.cutting(recipe.input, tool, result),
                id_prefix
            );
        });
    });
});
})();
