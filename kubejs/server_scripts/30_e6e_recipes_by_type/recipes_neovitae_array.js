// 配方类型：neovitae:array
// 中文名称：法阵仪式
// 用途：用于登记Neovitae的法阵仪式配方。

(function () {
if (e6ePortedRecipeModLoaded('neovitae')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/neovitae/array/';
    const recipes = [
        {
            input: '#forge:rods/copper',
            addedInput: '#forge:gems/fluorite',
            output: 'powah:charged_snowball',
            texture: 'bindinglightningarray',
            id: `${id_prefix}charged_snowball`
        },
        {
            input: 'architects_palette:algal_lamp',
            addedInput: '#forge:gems/aquamarine',
            output: 'minecraft:heart_of_the_sea',
            texture: 'watersigil',
            id: `${id_prefix}heart_of_the_sea`
        },
        {
            input: 'architects_palette:moonstone',
            addedInput: '#forge:ingots/silver',
            output: 'bloodmagic:arcaneashes',
            texture: 'moonarray',
            id: 'bloodmagic:array/night'
        },
        {
            input: 'architects_palette:sunstone',
            addedInput: '#forge:ingots/sunmetal',
            output: 'bloodmagic:arcaneashes',
            texture: 'sunarray',
            id: 'bloodmagic:array/day'
        },
        {
            input: 'ars_nouveau:ritual_scrying',
            addedInput: 'bloodmagic:blankslate',
            output: 'bloodmagic:divinationsigil',
            texture: 'divinationsigil',
            id: 'bloodmagic:array/divinationsigil'
        }
    ];
    recipes.forEach((recipe) => {
        const baseInput = e6eMapNeoVitaeIngredient(recipe.input);
        const addedInput = e6eMapNeoVitaeIngredient(recipe.addedInput);
        const output = e6eMapNeoVitaeItemId(recipe.output);
        if (!baseInput || !addedInput || !output) return;

        const textureName = recipe.texture === 'bindinglightningarray' ? 'bindingarray' : recipe.texture;
        const texture = `neovitae:textures/models/alchemyarrays/${textureName}.png`;
        event.recipes.neovitae.array(
            texture,
            baseInput,
            addedInput,
            Item.of(output, recipe.count || 1)
        ).id(recipe.id);
    });
});

}
})();
