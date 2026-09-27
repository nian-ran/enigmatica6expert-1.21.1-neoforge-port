// 配方类型：immersivepetroleum:distillation
// 中文名称：蒸馏加工
// 用途：用于登记沉浸石油的蒸馏加工配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/distillation/';

    const recipes = [
        {
            byproducts: [{ output: { id: 'immersivepetroleum:bitumen' }, chance: 0.07 }],
            results: [
                { id: 'pneumaticcraft:lubricant', amount: 9 },
                { id: 'immersivepetroleum:diesel_sulfur', amount: 14 },
                { id: 'immersivepetroleum:gasoline', amount: 39 }
            ],
            input: { tag: 'c:crude_oil', amount: 75 },
            time: 1,
            energy: 2048,
            id: `immersivepetroleum:distillation/oilcracking`
        }
    ];

    recipes.forEach((recipe) => {
        if (!recipe.results.every((result) => e6ePortedFluidExists(result.id))) return;
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersivepetroleum/distillation/';

    const recipes = [
        {
            results: [
                { id: 'mekanism:brine', amount: 10 },
                { id: 'mekanism:steam', amount: 90 }
            ],
            byproducts: [],
            input: { tag: 'minecraft:water', amount: 100 },
            time: 1,
            energy: 2048,
            id: `${id_prefix}brine`
        },
        {
            results: [
                { id: 'mekanism:lithium', amount: 1 },
                { id: 'mekanism:steam', amount: 9 }
            ],
            byproducts: [],
            input: { tag: 'forge:brine', amount: 10 },
            time: 1,
            energy: 2048,
            id: `${id_prefix}lithium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
})();
