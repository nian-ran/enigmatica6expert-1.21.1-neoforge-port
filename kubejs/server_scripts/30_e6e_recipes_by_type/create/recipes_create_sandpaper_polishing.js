// 配方类型：create:sandpaper_polishing
// 中文名称：砂纸打磨
// 用途：用于登记机械动力的砂纸打磨配方。

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/sandpaper_polishing/';

    const recipes = [
        {
            input: Item.of('minecraft:nether_bricks'),
            output: Item.of('minecraft:red_nether_bricks'),
            id: `${id_prefix}red_nether_bricks`
        },
        {
            input: Item.of('minecraft:nether_brick'),
            output: Item.of('kubejs:red_nether_brick'),
            id: `${id_prefix}red_nether_brick`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.sandpaper_polishing(recipe.output, recipe.input).id(recipe.id);
    });
});
})();
