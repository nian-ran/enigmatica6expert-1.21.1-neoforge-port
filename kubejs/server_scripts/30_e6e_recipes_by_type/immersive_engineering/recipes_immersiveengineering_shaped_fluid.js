// 配方类型：immersiveengineering:shaped_fluid
// 中文名称：含流体有序合成
// 用途：用于登记沉浸工程的含流体有序合成配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            pattern: ['SCS', 'GBG', 'SCS'],
            key: {
                C: { tag: 'forge:gems/bitumen' },
                S: { tag: 'forge:sand' },
                G: { tag: 'forge:gravel' },
                B: { tag: 'minecraft:water', amount: 1000, type: 'immersiveengineering:fluid_stack' }
            },
            result: { id: 'immersivepetroleum:asphalt', count: 8 },
            id: 'immersivepetroleum:asphalt'
        },
        {
            pattern: ['SCS', 'GBG', 'SCS'],
            key: {
                C: { tag: 'forge:gems/bitumen' },
                S: { tag: 'forge:slag' },
                G: { tag: 'forge:gravel' },
                B: { tag: 'minecraft:water', amount: 1000, type: 'immersiveengineering:fluid_stack' }
            },
            result: { id: 'immersivepetroleum:asphalt', count: 12 },
            id: 'immersivepetroleum:asphalt2'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'immersiveengineering:shaped_fluid',
            pattern: recipe.pattern,
            key: recipe.key,
            result: recipe.result
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
})();
