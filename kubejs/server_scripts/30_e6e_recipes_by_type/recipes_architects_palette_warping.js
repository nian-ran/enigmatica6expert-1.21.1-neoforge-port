// 配方类型：architects_palette:warping
// 中文名称：扭曲加工
// 用途：用于登记建筑师调色板的扭曲加工配方。

(function () {
if (['byg'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/architects_palette/warping/';

    const recipes = [
        {
            input: '#forge:coral_blocks',
            output: 'byg:warped_coral_block',
            id: `${id_prefix}warped_coral_block`
        },
        {
            input: '#forge:corals',
            output: 'byg:warped_coral',
            id: `${id_prefix}warped_coral`
        },
        {
            input: '#forge:coral_fans',
            output: 'byg:warped_coral_fan',
            id: `${id_prefix}warped_coral_fan`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'architects_palette:warping',
                ingredient: [Ingredient.of(recipe.input)],
                result: Item.of(recipe.output),
                dimension: 'minecraft:the_nether'
            })
            .id(recipe.id);
    });
});

}
})();
