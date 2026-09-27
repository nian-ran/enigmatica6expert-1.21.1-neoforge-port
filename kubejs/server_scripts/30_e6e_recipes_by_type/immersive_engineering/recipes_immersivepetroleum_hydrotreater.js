// 配方类型：immersivepetroleum:hydrotreater
// 中文名称：加氢处理
// 用途：用于登记沉浸石油的加氢处理配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/hydrotreater/';
    const recipes = [
        {
            time: 1,
            energy: 512,
            result: { id: 'immersivepetroleum:diesel', amount: 7 },
            input: { tag: 'forge:diesel_sulfur', amount: 7 },
            secondary_input: { tag: 'minecraft:water', amount: 7 },
            secondary_result: { output: { id: 'mekanism:dust_sulfur', count: 1 } },
            id: 'immersivepetroleum:hydrotreater/sulfur_recovery'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:hydrotreater';
        event.custom(recipe).id(recipe.id);
    });
});
})();
