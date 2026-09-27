// 配方类型：immersiveengineering:fertilizer
// 中文名称：园艺肥料
// 用途：用于登记沉浸工程的园艺肥料配方。

(function () {
if (['botania', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/fertilizer/';

    var data = {
        recipes: [
            {
                input: 'industrialforegoing:fertilizer',
                growthModifier: 1.7,
                id: `${id_prefix}fertilizer`
            },
            {
                input: 'thermal:phytogro',
                growthModifier: 3.0,
                id: `${id_prefix}phyto_gro`
            },
            {
                input: 'botania:fertilizer',
                growthModifier: 1.5,
                id: `${id_prefix}floral_fertilizer`
            },
            {
                input: 'farmingforblockheads:red_fertilizer',
                growthModifier: 2.0,
                id: `${id_prefix}red_fertilizer`
            },
            {
                input: 'farmingforblockheads:green_fertilizer',
                growthModifier: 1.5,
                id: `${id_prefix}green_fertilizer`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.fertilizer(recipe.input).growthModifier(recipe.growthModifier).id(recipe.id);
    });
});

}
})();
