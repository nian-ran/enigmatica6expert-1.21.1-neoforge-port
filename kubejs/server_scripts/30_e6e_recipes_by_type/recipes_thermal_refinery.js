// 配方类型：thermal:refinery
// 中文名称：精炼机加工
// 用途：用于登记热力系列的精炼机加工配方。

(function () {
if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    const id_prefix = 'enigmatica:base/thermal/refinery/';
    const recipes = [
        {
            outputs: [
                Item.of('emendatusenigmatica:bitumen_gem').withChance(0.1),
                fluid.of('thermal:heavy_oil', 40),
                fluid.of('thermal:light_oil', 60)
            ],
            input: fluid.of('pneumaticcraft:oil', 100),
            id: `${id_prefix}oil_cracking`
        },
        {
            outputs: [Item.of('minecraft:sugar', 2)],
            input: fluid.of('thermal:syrup', 25),
            id: `${id_prefix}sugar`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.refinery(recipe.outputs, recipe.input).id(recipe.id);
    });
});

}
})();
