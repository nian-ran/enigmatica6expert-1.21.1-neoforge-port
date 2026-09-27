// 配方类型：mekanism:chemical_infusing
// 中文名称：化学灌注
// 用途：用于登记通用机械的化学灌注配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: ['mekanismgenerators:fusion_fuel', 2],
            leftInput: ['mekanismgenerators:deuterium', 1],
            rightInput: ['mekanismgenerators:tritium', 1],
            id: 'mekanismgenerators:chemical_infusing/fusion_fuel'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mekanism:chemical_infusing',
            left_input: { amount: recipe.leftInput[1], chemical: recipe.leftInput[0] },
            right_input: { amount: recipe.rightInput[1], chemical: recipe.rightInput[0] },
            output: { id: recipe.output[0], amount: recipe.output[1] }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
})();
