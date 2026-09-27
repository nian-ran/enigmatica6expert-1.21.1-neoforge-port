// 配方类型：farmersdelight:cooking
// 中文名称：烹饪锅料理
// 用途：用于登记农夫乐事的烹饪锅料理配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cooking/';
    const recipes = [
        {
            inputs: [
                '#forge:crops/rice',
                '#forge:vegetables',
                'farmersdelight:tomato_sauce',
                'minecraft:baked_potato',
                'minecraft:brown_mushroom',
                'minecraft:sweet_berries'
            ],
            output: 'farmersdelight:stuffed_pumpkin_block',
            container: 'minecraft:pumpkin',
            count: 1,
            cookingTime: 400,
            id: `farmersdelight:cooking/stuffed_pumpkin_block`
        },
        {
            inputs: ['#forge:raw_fishes/perch', 'minecraft:red_mushroom', '#forge:crops/rice', '#forge:crops/tomato'],
            output: 'abnormals_delight:perch_with_mushrooms',
            container: 'minecraft:bowl',
            count: 1,
            cookingTime: 200,
            id: `abnormals_delight:perch_with_mushrooms`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.recipes.farmersdelight
            .cooking('meals', recipe.inputs, Item.of(recipe.output, recipe.count), 0, recipe.cookingTime, recipe.container)
            .id(recipe.id);
    });
});
})();

(function () {
if (['eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/farmersdelight/cooking/';
    const recipes = [
        {
            inputs: ['eidolon_repraised:enchanted_ash', '#forge:dusts/coal'],
            output: 'emendatusenigmatica:sulfur_dust',
            count: 1,
            cookingTime: 200,
            id: `${id_prefix}sulfur_dust`
        },
        {
            inputs: [
                'eidolon_repraised:enchanted_ash',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh'
            ],
            output: 'minecraft:leather',
            count: 5,
            cookingTime: 200,
            id: `${id_prefix}leather`
        },
        {
            inputs: ['eidolon_repraised:enchanted_ash', '#forge:dusts/ender'],
            output: 'eidolon_repraised:ender_calx',
            count: 2,
            cookingTime: 50,
            id: `${id_prefix}ender_calx`
        },
        {
            inputs: [
                'eidolon_repraised:enchanted_ash',
                '#forge:dusts/gold',
                'minecraft:melon_slice',
                'minecraft:melon_slice',
                'minecraft:melon_slice',
                'minecraft:melon_slice'
            ],
            output: 'minecraft:glistering_melon_slice',
            count: 4,
            cookingTime: 200,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            inputs: [
                'eidolon_repraised:enchanted_ash',
                '#forge:dusts/gold',
                'minecraft:carrot',
                'minecraft:carrot',
                'minecraft:carrot',
                'minecraft:carrot'
            ],
            output: 'minecraft:golden_carrot',
            count: 4,
            cookingTime: 200,
            id: `${id_prefix}golden_carrot`
        },
        {
            inputs: [
                'eidolon_repraised:enchanted_ash',
                '#forge:dusts/gold',
                'minecraft:apple',
                'minecraft:apple',
                'minecraft:apple',
                'minecraft:apple'
            ],
            output: 'minecraft:golden_apple',
            count: 4,
            cookingTime: 200,
            id: `${id_prefix}golden_apple`
        },
        {
            inputs: ['eidolon_repraised:enchanted_ash', '#forge:dusts/charcoal', '#forge:dusts/sulfur'],
            output: 'minecraft:gunpowder',
            count: 4,
            cookingTime: 50,
            id: `${id_prefix}gunpowder`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            inputs: [`minecraft:${color}_dye`, '#enigmatica:candle_materials'],
            output: `minecraft:${color}_candle`,
            container: 'minecraft:string',
            count: 1,
            cookingTime: 50,
            id: `quark:building/crafting/candles/${color}_candle`
        });
    });

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        const data = {
            type: 'farmersdelight:cooking',
            recipe_book_tab: 'meals',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: { id: recipe.output, count: recipe.count },
            cookingtime: recipe.cookingTime
        };
        if (recipe.container) {
            if (!e6ePortedItemExists(recipe.container)) return;
            data.container = { id: recipe.container, count: 1 };
        }

        event.custom(data).id(recipe.id);
    });
});

}
})();
