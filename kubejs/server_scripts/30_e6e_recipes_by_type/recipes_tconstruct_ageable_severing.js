// 配方类型：tconstruct:ageable_severing
// 中文名称：可成长生物斩首
// 用途：用于登记匠魂的可成长生物斩首配方。

(function () {
if (['atum', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/tconstruct/tools/severing/';
    const recipes = [
        {
            type: 'tconstruct:ageable_severing',
            entity: {
                types: ['minecraft:rabbit', 'atum:desert_rabbit']
            },
            adult_result: 'minecraft:rabbit_foot',
            id: 'tconstruct:tools/severing/rabbit_foot'
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
