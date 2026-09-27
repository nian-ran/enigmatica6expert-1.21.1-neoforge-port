// 配方类型：immersiveengineering:turn_and_copy
// 中文名称：翻转与复制
// 用途：用于登记沉浸工程的翻转与复制配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            pattern: [' g ', 'idi', ' g '],
            key: {
                g: { tag: 'forge:glass' },
                i: { tag: 'forge:dusts/iron_aluminum' },
                d: { tag: 'forge:dyes/green' }
            },
            result: { id: 'immersiveengineering:insulating_glass', count: 2 },
            quarter_turn: true,
            id: 'immersiveengineering:crafting/insulating_glass'
        }
    ];
    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'immersiveengineering:turn_and_copy',
            pattern: recipe.pattern,
            key: recipe.key,
            result: recipe.result,
            quarter_turn: recipe.quarter_turn
        };

        if (recipe.group) {
            constructed_recipe.group = recipe.group;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
})();

(function () {
// 将 E6E 普通模式的 IE 混凝土配方加入专家模式。
if (e6ePortedRecipeModLoaded('immersiveengineering')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const ingredients = ['#c:slag', '#c:clay', '#c:gravels'];
        if (!ingredients.every(e6eRecipeIngredientExists)) return;
        if (!e6ePortedItemExists('immersiveengineering:concrete')) return;

        // IE 12.4.2 使用 fluid_stack、id/count 和新版 c: 标签格式。
        event.custom({
            type: 'immersiveengineering:turn_and_copy',
            category: 'misc',
            group: 'ie_concrete',
            pattern: ['scs', 'gbg', 'scs'],
            key: {
                s: { tag: 'c:slag' },
                c: { tag: 'c:clay' },
                g: { tag: 'c:gravels' },
                b: {
                    type: 'immersiveengineering:fluid_stack',
                    amount: 1000,
                    tag: 'minecraft:water'
                }
            },
            result: { id: 'immersiveengineering:concrete', count: 12 },
            quarter_turn: true
        }).id('immersiveengineering:crafting/concrete2');
    });
}
})();
