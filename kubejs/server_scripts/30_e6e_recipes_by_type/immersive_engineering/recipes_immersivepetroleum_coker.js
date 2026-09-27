// 配方类型：immersivepetroleum:coker
// 中文名称：焦化炉加工
// 用途：用于登记沉浸石油的焦化炉加工配方。

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode) return;
    const id_prefix = 'enigmatica:base/immersivepetroleum/coker/';

    const recipes = [
        {
            result: { item: 'immersivepetroleum:petcoke' },
            resultfluid: { tag: 'forge:diesel_sulfur', amount: 27 },
            input: {
                count: 2,
                base_ingredient: { tag: 'forge:gems/bitumen' }
            },
            inputfluid: { tag: 'minecraft:water', amount: 125 },
            time: 30,
            energy: 1024,
            id: 'immersivepetroleum:coking/petcoke'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:coker';
        event.custom(recipe).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersivepetroleum/coker/';

    const recipes = [
        {
            result: { id: 'immersivepetroleum:petcoke', count: 2 },
            resultfluid: { id: 'immersivepetroleum:diesel_sulfur', amount: 27 },
            input: {
                basePredicate: { tag: 'c:bitumen' },
                count: 2
            },
            inputfluid: { tag: 'minecraft:water', amount: 125 },
            time: 8,
            energy: 24000,
            id: `immersivepetroleum:coking/petcoke`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.result.id) || !e6ePortedFluidExists(recipe.resultfluid.id)) return;
        recipe.type = 'immersivepetroleum:coker';
        event.custom(recipe).id(recipe.id);
    });
});
})();
