// 配方类型：thermal:insolator
// 中文名称：植物培育机加工
// 用途：用于登记热力系列的植物培育机加工配方。

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/insolator/';
    const recipes = [
        {
            input: '#forge:dusts/silver',
            outputs: [Item.of('architects_palette:sunmetal_blend').withChance(1.0)],
            water: 1000,
            energy: 10000,
            id: `${id_prefix}sunmetal_blend`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal
            .insolator(recipe.outputs, recipe.input)
            .water(recipe.water)
            .energy(recipe.energy)
            .id(recipe.id);
    });
});
})();
