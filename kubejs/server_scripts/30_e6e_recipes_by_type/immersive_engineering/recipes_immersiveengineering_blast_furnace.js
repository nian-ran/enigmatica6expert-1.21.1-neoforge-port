// 配方类型：immersiveengineering:blast_furnace
// 中文名称：高炉冶炼
// 用途：用于登记沉浸工程的高炉冶炼配方。

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('immersiveengineering')) return;
    const id_prefix = 'enigmatica:base/immersiveengineering/blast_furnace/';
    const recipes = [
        {
            input: '#forge:slimeball/earth',
            output: 'tconstruct:earth_slime_crystal',
            slag: 'immersiveengineering:slag',
            time: 100,
            id: `${id_prefix}earth_slime_crystal`
        },
        {
            input: '#forge:slimeball/sky',
            output: 'tconstruct:sky_slime_crystal',
            slag: 'immersiveengineering:slag',
            time: 100,
            id: `${id_prefix}sky_slime_crystal`
        },
        {
            input: '#forge:slimeball/ender',
            output: 'tconstruct:ender_slime_crystal',
            slag: 'immersiveengineering:slag',
            time: 100,
            id: `${id_prefix}ender_slime_crystal`
        },
        {
            input: '#forge:slimeball/ichor',
            output: 'tconstruct:ichor_slime_crystal',
            slag: 'immersiveengineering:slag',
            time: 100,
            id: `${id_prefix}ichor_slime_crystal`
        },
        {
            input: 'industrialforegoing:pink_slime',
            output: 'materialis:pink_slime_crystal',
            slag: 'immersiveengineering:slag',
            time: 100,
            id: `${id_prefix}pink_slime_crystal`
        }
    ];

    const resolveIngredient = (ingredient) => {
        if (typeof ingredient !== 'string') return ingredient;
        const match = /^(\d+\s*x\s*)?#forge:(.+)$/i.exec(ingredient.trim());
        if (!match) return ingredient;
        const commonTag = `${match[1] || ''}#c:${match[2]}`;
        return e6eRecipeIngredientExists(commonTag) ? commonTag : ingredient;
    };

    recipes.forEach((recipe) => {
        const input = resolveIngredient(recipe.input);
        if (!e6eRecipeIngredientExists(input)) return;
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeOutputExists(recipe.slag)) return;
        event.recipes.immersiveengineering
            .blast_furnace(recipe.output, input, recipe.slag)
            .time(recipe.time)
            .id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    if (!e6ePortedRecipeModLoaded('immersiveengineering')) return;
    const id_prefix = 'enigmatica:expert/immersiveengineering/blast_furnace';
    const recipes = [
        {
            output: 'kubejs:smoldering_lapis_lazuli_compound',
            input: 'kubejs:coarse_lapis_lazuli_compound',
            slag: 'immersiveengineering:slag',
            id: `${id_prefix}smoldering_lapis_lazuli_compound`
        },
        {
            output: 'industrialforegoing:plastic',
            input: 'industrialforegoing:dryrubber',
            slag: 'immersiveengineering:slag',
            id: 'industrialforegoing:plastic'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input)) return;
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeOutputExists(recipe.slag)) return;
        event.recipes.immersiveengineering
            .blast_furnace(recipe.output, recipe.input, recipe.slag)
            .id(recipe.id);
    });
});
})();
