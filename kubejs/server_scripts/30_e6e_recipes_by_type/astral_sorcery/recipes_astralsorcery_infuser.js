// 配方类型：astralsorcery:infuser
// 中文名称：注入器加工
// 用途：用于登记星辉魔法的注入器加工配方。

(function () {
if (['astralsorcery', 'byg', 'resourcefulbees', 'simplefarming', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/infuser/';

    data = {
        recipes: [
            {
                input: { item: 'thermal:blizz_rod' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'thermal:blizz_powder',
                count: 4,
                duration: 100
            },
            {
                input: { item: 'thermal:basalz_rod' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'thermal:basalz_powder',
                count: 4,
                duration: 100
            },
            {
                input: { item: 'thermal:blitz_rod' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'thermal:blitz_powder',
                count: 4,
                duration: 100
            },
            {
                input: { item: 'simplefarming:habanero' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'simplefarming:golden_habanero',
                count: 1,
                duration: 50
            },
            {
                input: { tag: 'forge:dusts/iron' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'astralsorcery:stardust',
                count: 1,
                duration: 100
            },
            {
                input: { item: 'resourcefulbees:starry_honeycomb' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'astralsorcery:starmetal_ingot',
                count: 3,
                duration: 100
            },
            {
                input: { item: 'resourcefulbees:starry_honeycomb_block' },
                fluid: 'astralsorcery:liquid_starlight',
                consumptionChance: 0.1,
                output: 'astralsorcery:starmetal',
                count: 3,
                duration: 100
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        fallback_id(
            event.custom({
                type: 'astralsorcery:infuser',
                fluidInput: recipe.fluid,
                input: recipe.input,
                output: {
                    item: recipe.output,
                    count: recipe.count
                },
                consumptionChance: recipe.consumptionChance,
                duration: recipe.duration,
                consumeMultipleFluids: false,
                acceptChaliceInput: true,
                copyNBTToOutputs: false
            }),
            id_prefix
        );
    });
});

}
})();
