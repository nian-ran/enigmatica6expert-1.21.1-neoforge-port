// 配方类型：tconstruct:melting_fuel
// 中文名称：熔融燃料
// 用途：用于登记匠魂的熔融燃料配方。

(function () {
if (['resourcefulbees', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/tconstruct/melting_fuel/';

    const recipes = [
        {
            fluid: {
                name: 'resourcefulbees:blaze_honey',
                amount: 50
            },
            duration: 150,
            temperature: 1500,
            id: `${id_prefix}blaze_honey`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:melting_fuel',
                fluid: recipe.fluid,
                duration: recipe.duration,
                temperature: recipe.temperature
            })
            .id(recipe.id);
    });
});

}
})();
