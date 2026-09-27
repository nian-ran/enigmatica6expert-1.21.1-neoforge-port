// 配方类型：thermal:magmatic_fuel
// 中文名称：熔岩能源炉燃料
// 用途：用于登记热力系列的熔岩能源炉燃料配方。

(function () {
if (['tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    const id_prefix = 'enigmatica:base/thermal/magmatic_fuel/';

    var multiplier = 10;
    const recipes = [
        {
            input: 'tconstruct:blazing_blood',
            energy: 1000000,
            id: `${id_prefix}blazing_blood`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal
            .magmatic_fuel(Fluid.of(recipe.input, 1000))
            .energy(recipe.energy * multiplier)
            .id(recipe.id);
    });
});

}
})();
