// 配方类型：pneumaticcraft:refinery
// 中文名称：精炼机加工
// 用途：用于登记气动工艺的精炼机加工配方。

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/refinery/';
    const recipes = [
        {
            input: { tag: 'minecraft:water', amount: 100 },
            temperature: { min: 373 },
            outputs: [
                { id: 'mekanism:brine', amount: 10 },
                { id: 'mekanism:steam', amount: 90 }
            ],
            id: `${id_prefix}brine`
        },
        {
            input: { tag: 'forge:brine', amount: 10 },
            temperature: { min: 373 },
            outputs: [
                { id: 'mekanism:lithium', amount: 1 },
                { id: 'mekanism:steam', amount: 9 }
            ],
            id: `${id_prefix}lithium`
        }
    ];

    recipes.forEach((recipe) => {
        if (!recipe.outputs.every((output) => e6ePortedFluidExists(output.id))) return;
        recipe.type = 'pneumaticcraft:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
})();
