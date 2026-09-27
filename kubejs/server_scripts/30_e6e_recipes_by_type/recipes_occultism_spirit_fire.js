// 配方类型：occultism:spirit_fire
// 中文名称：灵魂火焰转化
// 用途：用于登记神秘学的灵魂火焰转化配方。

(function () {
if (['bloodmagic'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // 由于旧版原因，它不在 enigmatica 命名空间下吗？
    const id_prefix = `occultism:spirit_fire/`;

    const recipes = [
        {
            input: 'ars_nouveau:arcane_stone',
            output: 'occultism:otherstone',
            id: `${id_prefix}otherstone`
        },
        {
            input: '#forge:gems/mana',
            output: 'occultism:spirit_attuned_gem',
            id: `${id_prefix}spirit_attuned_gem`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });
});

}
})();
