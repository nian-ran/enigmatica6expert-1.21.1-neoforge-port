// 配方类型：thermal:sawmill
// 中文名称：锯木机加工
// 用途：用于登记热力系列的锯木机加工配方。

(function () {
if (['astralsorcery', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    const id_prefix = 'enigmatica:base/thermal/sawmill/';
    const recipes = [
        {
            input: '#minecraft:planks',
            outputs: [Item.of('minecraft:stick', 6), Item.of('emendatusenigmatica:wood_dust').withChance(0.25)],
            id: `${id_prefix}sticks_from_planks`
        },
        {
            input: '#minecraft:wooden_slabs',
            outputs: [Item.of('minecraft:stick', 3), Item.of('emendatusenigmatica:wood_dust').withChance(0.125)],
            id: `${id_prefix}sticks_from_wooden_slabs`
        },
        {
            input: '#minecraft:wooden_stairs',
            outputs: [Item.of('minecraft:stick', 9), Item.of('emendatusenigmatica:wood_dust').withChance(0.375)],
            id: `${id_prefix}sticks_from_wooden_stairs`
        },
        {
            input: ['naturesaura:ancient_log'],
            outputs: [Item.of('6x naturesaura:ancient_planks'), Item.of('emendatusenigmatica:wood_dust').withChance(0.25)],
            id: `${id_prefix}ancient_planks_from_log`
        },
        {
            input: ['naturesaura:ancient_bark'],
            outputs: [Item.of('6x naturesaura:ancient_planks'), Item.of('emendatusenigmatica:wood_dust').withChance(0.25)],
            id: `${id_prefix}ancient_planks_from_bark`
        },
        {
            input: ['botania:livingwood'],
            outputs: [Item.of('6x botania:livingwood_planks'), Item.of('emendatusenigmatica:wood_dust').withChance(0.25)],
            id: `${id_prefix}livingwood_planks_from_livingwood`
        },
        {
            input: ['astralsorcery:infused_wood'],
            outputs: [Item.of('6x astralsorcery:infused_wood_planks'), Item.of('astralsorcery:stardust').withChance(0.01)],
            id: `${id_prefix}infused_wood_planks_from_infused_wood`
        },
        {
            input: ['#forge:storage_blocks/quartz'],
            outputs: [
                Item.of('2x pneumaticcraft:aphorism_tile'),
                Item.of('emendatusenigmatica:quartz_dust').withChance(0.375)
            ],
            id: `${id_prefix}aphorism_tile`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/sawmill/';
    const recipes = [
        {
            input: 'occultism:dimensional_matrix',
            outputs: [
                Item.of('12x kubejs:dimensional_storage_crystal'),
                Item.of('3x kubejs:dimensional_storage_crystal').withChance(0.25)
            ],
            id: `${id_prefix}dimensional_storage_crystal`
        },
        {
            input: 'occultism:otherstone',
            outputs: [Item.of('darkutils:blank_plate', 8), Item.of('darkutils:blank_plate').withChance(0.5)],
            id: `${id_prefix}blank_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});
})();
