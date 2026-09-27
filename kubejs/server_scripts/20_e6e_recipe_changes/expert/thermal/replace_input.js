if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: 'thermal:machine_bottler' },
            toReplace: 'thermal:machine_frame',
            replaceWith: 'thermal:fluid_cell_frame'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});

}
