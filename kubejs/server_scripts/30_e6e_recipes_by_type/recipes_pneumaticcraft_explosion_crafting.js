// 配方类型：pneumaticcraft:explosion_crafting
// 中文名称：爆炸合成
// 用途：用于登记气动工艺的爆炸合成配方。

(function () {
if (['atum'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/explosion/';
    const recipes = [
        {
            input: { tag: 'forge:grain' },
            results: [{ item: 'create:wheat_flour' }],
            loss_rate: 50,
            id: 'pneumaticcraft:explosion_crafting/wheat_flour'
        },
        {
            input: { item: 'atum:emmer' },
            results: [{ item: 'atum:emmer_flour' }],
            loss_rate: 50,
            id: `${id_prefix}emmer_flour`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:explosion_crafting',
                input: recipe.input,
                results: recipe.results,
                loss_rate: recipe.loss_rate
            })
            .id(recipe.id);
    });
});

}
})();
