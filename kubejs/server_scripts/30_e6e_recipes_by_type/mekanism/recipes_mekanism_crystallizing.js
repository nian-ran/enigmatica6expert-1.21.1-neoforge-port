// 配方类型：mekanism:crystallizing
// 中文名称：结晶加工
// 用途：用于登记通用机械的结晶加工配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            chemical: 'mekanism:lithium',
            amount: 100,
            output: 'mekanism:dust_lithium',
            id: 'mekanism:crystallizing/lithium'
        }
    ];
    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.output)) return;
        const re = event.custom({
            type: 'mekanism:crystallizing',
            input: { amount: recipe.amount, chemical: recipe.chemical },
            output: { id: recipe.output, count: 1 }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
})();
