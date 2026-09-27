// 配方类型：mekanism:injecting
// 中文名称：注入加工
// 用途：用于登记通用机械的注入加工配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/injecting/';

    const recipes = [
        {
            output: 'buildinggadgets:construction_block_dense',
            input: 'buildinggadgets:construction_block_powder',
            gas: { gas: 'mekanism:steam', amount: 1 },
            id: `${id_prefix}construction_block_powder_to_dense`
        },
        {
            output: 'minecraft:clay',
            input: '#forge:terracotta',
            gas: { gas: 'mekanism:steam', amount: 1 },
            id: 'mekanism:injecting/terracotta_to_clay'
        },
        {
            output: 'mekanism:dust_sulfur',
            input: '#forge:gunpowder',
            gas: { gas: 'mekanism:hydrogen_chloride', amount: 1 },
            id: 'mekanism:injecting/gunpowder_to_sulfur'
        }
    ];
    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, [recipe.input])) return;
        const itemInput = recipe.input.startsWith('#')
            ? { tag: recipe.input.slice(1), count: 1 }
            : { item: recipe.input, count: 1 };
        const chemicalInput = recipe.gas.gas === 'mekanism:steam'
            ? { tag: 'mekanism:water_vapor', amount: recipe.gas.amount }
            : { chemical: recipe.gas.gas, amount: recipe.gas.amount };

        event.custom({
            type: 'mekanism:injecting',
            output: { id: recipe.output, count: 1 },
            item_input: itemInput,
            chemical_input: chemicalInput,
            per_tick_usage: true
        }).id(recipe.id);
    });
});
})();
