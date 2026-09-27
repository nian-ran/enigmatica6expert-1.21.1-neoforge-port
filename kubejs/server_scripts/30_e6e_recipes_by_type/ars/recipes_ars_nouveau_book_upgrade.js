// 配方类型：ars_nouveau:book_upgrade
// 中文名称：法术书升级
// 用途：用于登记新生魔艺的法术书升级配方。

(function () {
if (['eidolon_repraised', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                'ars_nouveau:apprentice_spell_book',
                'ars_nouveau:wilden_tribute',
                'minecraft:totem_of_undying',
                '#forge:gems/amber',
                '#forge:gems/amber',
                'betterendforge:enchanted_petal',
                'betterendforge:enchanted_petal',
                'betterendforge:enchanted_petal',
                'betterendforge:eternal_crystal'
            ],
            output: 'ars_nouveau:archmage_spell_book',
            id: 'ars_nouveau:archmage_spell_book_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        var ingredients = [];
        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });
        const re = event.custom({
            type: 'ars_nouveau:book_upgrade',
            ingredients: ingredients,
            result: Ingredient.of(recipe.output).toJson()
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});

}
})();
