// 配方类型：minecraft:smithing_transform
// 中文名称：锻造台升级
// 用途：用于登记原版 Minecraft的锻造台升级配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/smithing/';

    const recipes = [
        
    ];

    const black_hole_types = ['tank', 'unit'];
    const black_hole_tiers = ['common', 'pity', 'simple', 'advanced', 'supreme'];

    black_hole_types.forEach((type) => {
        black_hole_tiers.forEach((tier) => {
            lowerTiers(black_hole_tiers, tier).forEach((prev) => {
                recipes.push({
                    input1: `industrialforegoing:${prev}_black_hole_${type}`,
                    input2: `industrialforegoing:machine_frame_${tier}`,
                    output: `industrialforegoing:${tier}_black_hole_${type}`,
                    id: `${id_prefix}upgrade_${prev}_black_hole_${type}_to_${tier}`
                });
            });
        });
    });

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, [recipe.input1, recipe.input2])) return;
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
})();

(function () {
if (['atum', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input1: '#atum:relic_non_dirty/necklace',
            input2: '#forge:ingots/arcane_gold',
            output: 'eidolon_repraised:basic_amulet',
            id: 'eidolon_repraised:basic_amulet'
        }
    ];
    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, [recipe.input1, recipe.input2])) return;
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});

}
})();
