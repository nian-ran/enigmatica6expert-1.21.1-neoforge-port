// 配方类型：mekanism:reaction
// 中文名称：化学反应
// 用途：用于登记通用机械的化学反应配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            itemInput: [
                { ingredient: { tag: 'forge:storage_blocks/coal' } },
                { ingredient: { tag: 'forge:storage_blocks/charcoal' } }
            ],
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'mekanism:oxygen' },
            duration: 900,
            itemOutput: { item: 'mekanism:dust_sulfur', count: 9 },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 1000 },
            id: 'mekanism:reaction/coal_gasification/blocks_coals'
        },
        {
            itemInput: { ingredient: { tag: 'minecraft:coals' } },
            fluidInput: { amount: 100, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:oxygen' },
            duration: 100,
            itemOutput: { item: 'mekanism:dust_sulfur' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 100 },
            id: 'mekanism:reaction/coal_gasification/coals'
        },
        {
            itemInput: [{ ingredient: { tag: 'forge:dusts/coal' } }, { ingredient: { tag: 'forge:dusts/charcoal' } }],
            fluidInput: { amount: 100, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:oxygen' },
            duration: 100,
            itemOutput: { item: 'mekanism:dust_sulfur' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 100 },
            id: 'mekanism:reaction/coal_gasification/dusts_coals'
        },
        {
            itemInput: { amount: 4, ingredient: { tag: 'minecraft:logs' } },
            fluidInput: { amount: 400, tag: 'minecraft:water' },
            gasInput: { amount: 400, gas: 'mekanism:oxygen' },
            duration: 600,
            itemOutput: { item: 'mekanism:dust_charcoal' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 400 },
            id: 'mekanism:reaction/wood_gasification/logs'
        },
        {
            itemInput: { amount: 20, ingredient: { tag: 'minecraft:planks' } },
            fluidInput: { amount: 400, tag: 'minecraft:water' },
            gasInput: { amount: 400, gas: 'mekanism:oxygen' },
            duration: 600,
            itemOutput: { item: 'mekanism:dust_charcoal' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 400 },
            id: 'mekanism:reaction/wood_gasification/planks'
        }
    ];

    recipes.forEach((recipe) => {
        const itemInput = Array.isArray(recipe.itemInput)
            ? {
                type: 'neoforge:compound',
                children: recipe.itemInput.map((entry) => entry.ingredient),
                count: 1
            }
            : (() => {
                const ingredient = recipe.itemInput.ingredient;
                const result = { count: recipe.itemInput.amount || 1 };
                if (ingredient.item) result.item = ingredient.item;
                if (ingredient.tag) result.tag = ingredient.tag;
                return result;
            })();

        const constructed_recipe = {
            type: 'mekanism:reaction',
            item_input: itemInput,
            fluid_input: recipe.fluidInput,
            chemical_input: {
                amount: recipe.gasInput.amount,
                chemical: recipe.gasInput.gas
            },
            duration: recipe.duration,
            item_output: {
                id: recipe.itemOutput.item,
                count: recipe.itemOutput.count || 1
            },
            chemical_output: {
                id: recipe.gasOutput.gas,
                amount: recipe.gasOutput.amount
            }
        };
        if (!e6ePortedItemExists(constructed_recipe.item_output.id)) return;
        if (recipe.energyRequired) constructed_recipe.energy_required = recipe.energyRequired;
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
})();

(function () {
// 专家版纳入源 normal 目录的底物压力反应配方。
if (e6ePortedRecipeModLoaded('mekanism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false || e6ePortedRecipeModLoaded('materialis')) return;

        const input = { tag: 'c:fuels/bio' };
        if (!e6eRecipeIngredientExists(input) || !e6ePortedItemExists('mekanism:substrate')) return;

        event.custom({
            type: 'mekanism:reaction',
            item_input: { count: 2, tag: input.tag },
            fluid_input: { amount: 10, tag: 'minecraft:water' },
            chemical_input: { amount: 100, chemical: 'mekanism:hydrogen' },
            energy_required: 595,
            duration: 2000,
            item_output: { id: 'mekanism:substrate', count: 1 },
            chemical_output: { id: 'mekanism:ethene', amount: 100 }
        }).id('mekanism:reaction/substrate/water_hydrogen');
    });
}
})();

(function () {
// Materialis 与 Mekanism 均安装时，注册专家版压力反应配方。
if (e6ePortedRecipeModLoaded('materialis') && e6ePortedRecipeModLoaded('mekanism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const recipes = [
            {
                itemInput: { amount: 2, ingredient: { tag: 'c:fuels/bio' } },
                fluidInput: { amount: 10, tag: 'minecraft:water' },
                chemicalInput: { amount: 100, chemical: 'mekanism:hydrogen' },
                energyRequired: 100,
                duration: 2000,
                itemOutput: { id: 'mekanism:substrate', count: 1 },
                chemicalOutput: { id: 'mekanism:ethene', amount: 100 },
                id: 'mekanism:reaction/substrate/water_hydrogen'
            },
            {
                itemInput: { amount: 2, ingredient: { tag: 'c:ingots/manyullyn' } },
                fluidInput: { amount: 144, fluid: 'materialis:molten_shadow_steel' },
                chemicalInput: { amount: 1000, chemical: 'mekanism:plutonium' },
                energyRequired: 1000,
                duration: 300,
                itemOutput: { id: 'mekanism:alloy_atomic', count: 3 },
                chemicalOutput: { id: 'mekanism:spent_nuclear_waste', amount: 1000 },
                id: 'enigmatica:expert/thermal/reactionalloy_atomic'
            }
        ];

        recipes.forEach((recipe) => {
            const ingredient = recipe.itemInput.ingredient;
            if (!e6eRecipeIngredientExists(ingredient)) return;
            if (!e6ePortedItemExists(recipe.itemOutput.id)) return;
            if (recipe.fluidInput.fluid && !e6ePortedFluidExists(recipe.fluidInput.fluid)) return;

            const itemInput = { count: recipe.itemInput.amount || ingredient.count || 1 };
            if (ingredient.item) itemInput.item = ingredient.item;
            if (ingredient.tag) itemInput.tag = ingredient.tag;

            const data = {
                type: 'mekanism:reaction',
                item_input: itemInput,
                fluid_input: recipe.fluidInput,
                chemical_input: recipe.chemicalInput,
                duration: recipe.duration,
                item_output: recipe.itemOutput,
                chemical_output: recipe.chemicalOutput,
                energy_required: recipe.energyRequired
            };
            event.custom(data).id(recipe.id);
        });
    });
}
})();
