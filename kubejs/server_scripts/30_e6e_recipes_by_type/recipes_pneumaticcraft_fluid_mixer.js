// 配方类型：pneumaticcraft:fluid_mixer
// 中文名称：流体混合机加工
// 用途：用于登记气动工艺的流体混合机加工配方。

(function () {
if (['tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/fluid_mixer/';
    const recipes = [
        {
            input1: { fluid: 'tconstruct:sky_slime', amount: 250 },
            input2: { fluid: 'integrateddynamics:menril_resin', amount: 750 },
            fluid_output: {},
            item_output: { id: 'integrateddynamics:crystalized_menril_block', count: 1 },
            pressure: 4.0,
            time: 300,
            id: `${id_prefix}crystalized_menril_block`
        },
        {
            input1: { fluid: 'tconstruct:ender_slime', amount: 250 },
            input2: { fluid: 'integrateddynamics:liquid_chorus', amount: 750 },
            fluid_output: {},
            item_output: { id: 'integrateddynamics:crystalized_chorus_block', count: 1 },
            pressure: 4.0,
            time: 300,
            id: `${id_prefix}crystalized_chorus_block`
        }
    ];

    recipes.forEach((recipe) => {
        if (![recipe.input1.fluid, recipe.input2.fluid].every(e6ePortedFluidExists)) return;
        if (!e6ePortedItemExists(recipe.item_output.id)) return;
        recipe.type = 'pneumaticcraft:fluid_mixer';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
