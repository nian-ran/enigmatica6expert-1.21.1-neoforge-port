// 配方类型：create:emptying
// 中文名称：容器排液
// 用途：用于登记机械动力的容器排液配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/emptying/';

    const recipes = [
        {
            input: 'farmersdelight:milk_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250),
            id: `${id_prefix}milk_bottle`
        }
    ];

    if (e6ePortedRecipeModLoaded('productivebees')) {
        recipes.push({
            input: 'minecraft:honey_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('productivebees:honey', 250),
            id: 'create:emptying/honey_bottle'
        });
    }
    recipes.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe([recipe.fluid, recipe.container], [recipe.input])) return;
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    if (!e6ePortedRecipeModLoaded('thermal')) return;

    const id_prefix = 'enigmatica:expert/create/emptying/';
    const recipes = [
        {
            input: 'thermal:syrup_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250),
            id: `${id_prefix}syrup_bottle`
        }
    ];
    recipes.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe([recipe.fluid, recipe.container], [recipe.input])) return;
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
    });
});
})();
