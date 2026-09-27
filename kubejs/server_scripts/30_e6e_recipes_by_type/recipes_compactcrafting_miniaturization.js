// 配方类型：compactcrafting:miniaturization
// 中文名称：微型化合成
// 用途：用于登记紧凑合成的微型化合成配方。

(function () {
if (['compactcrafting'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //注意：这里不能使用 Item.of，因为 Count 和 Name 字段区分大小写。

    const recipes = [
        /*{
                //测试配方
                recipeSize: 1,
                layers: [ 
                    {
                        type: 'compactcrafting:filled',
                        component: 'C'
                    }
                ],
                catalyst: {
                    id: 'minecraft:diamond',
                    Count: 1
                },
                components: {
                    'C': {
                      Name: 'minecraft:coal_block'
                    }
                },
                outputs: [{
                    id: 'minecraft:diamond',
                    Count: 1
                }]
              }*/
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });
});

}
})();
