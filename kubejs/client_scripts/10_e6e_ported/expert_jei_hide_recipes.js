// E6E 1.16.5 to 1.21.1 NeoForge client migration
// Entries are filtered against target-installed mods.
RecipeViewerEvents.removeRecipes((event) => {
//console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());
    //console.log('Valid Keys: ' + Object.keys(event));
    recipesToHide.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.remove(id);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.remove(id);
                } catch (err) {
                    // do nothing
                }
            }
            console.log(`Category: ${recipe.category}, Hiding: ${id}`);
            event.remove(id);
        });
    });
});
