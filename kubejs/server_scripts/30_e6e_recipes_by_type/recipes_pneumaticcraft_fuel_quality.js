// 配方类型：pneumaticcraft:fuel_quality
// 中文名称：燃料品质参数
// 用途：定义燃料的空气压缩机品质参数。

(function () {
if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/fuel_quantity/';

    var multiplier = 1000;
    var data = {
        recipes: [
            {
                fluid: 'mekanismgenerators:bioethanol',
                air: 400,
                rate: 1
            },
            {
                fluid: 'industrialforegoing:biofuel',
                air: 400,
                rate: 1
            },
            {
                fluid: 'immersiveengineering:creosote',
                air: 50,
                rate: 0.25
            },
            {
                fluid: 'resourcefulbees:rocket_honey',
                air: 1500,
                rate: 2
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        if (!e6ePortedFluidExists(recipe.fluid)) return;
        fallback_id(
            event.custom({
                type: 'pneumaticcraft:fuel_quality',
                fluid: { fluid: recipe.fluid },
                air_per_bucket: recipe.air * multiplier,
                burn_rate: recipe.rate
            }),
            id_prefix
        );
    });
});

}
})();
