// 配方类型：astralsorcery:infusion
// 中文名称：灌注仪式
// 用途：用于登记星辉魔法的灌注仪式配方。

(function () {
if (['astralsorcery'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'occultism:infused_lenses',
            fluid: 'astralsorcery:liquid_starlight',
            consumptionChance: 0.5,
            output: 'astralsorcery:glass_lens',
            count: 2,
            duration: 100,
            id: `astralsorcery:infuser/glass_pane`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'astralsorcery:infusion',
                fluid_input: recipe.fluid,
                item_input: Ingredient.of(recipe.input).toJson(),
                output: { id: recipe.output, count: recipe.count },
                fluid_consumption_chance: recipe.consumptionChance,
                duration: recipe.duration,
                consume_multiple_fluids: false,
                accept_chalice_input: true
            })
            .id(recipe.id);
    });
});

}
})();
