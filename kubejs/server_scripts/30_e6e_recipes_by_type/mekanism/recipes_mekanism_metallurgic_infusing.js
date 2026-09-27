// 配方类型：mekanism:metallurgic_infusing
// 中文名称：冶金灌注
// 用途：用于登记通用机械的冶金灌注配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/metallurgic_infusing/';

    const recipes = [
        {
            output: 'betterendforge:end_mycelium',
            input: 'minecraft:end_stone',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: `${id_prefix}end_stone_to_end_mycelium`
        },
        {
            output: 'minecraft:crimson_nylium',
            input: 'minecraft:netherrack',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/netherrack_to_crimson_nylium'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, [recipe.input])) return;
        event.custom({
            type: 'mekanism:metallurgic_infusing',
            output: { id: recipe.output, count: 1 },
            item_input: typeof recipe.input === 'string' && recipe.input.startsWith('#')
                ? { tag: recipe.input.slice(1), count: 1 }
                : { item: recipe.input, count: 1 },
            chemical_input: { tag: recipe.infusionInput, amount: recipe.infusionAmount },
            per_tick_usage: false
        }).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/metallurgic_infusing/';
    const recipes = [
        {
            output: 'mekanism:alloy_infused',
            input: '#forge:ingots/energized_steel',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/alloy/infused'
        },
        {
            output: 'refinedstorage:stack_upgrade',
            input: '4x refinedstorage:speed_upgrade',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 80,
            id: 'refinedstorage:stack_upgrade'
        },
        {
            output: 'mekanismgenerators:reactor_glass',
            input: 'mekanism:structural_glass',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 320,
            id: 'mekanismgenerators:reactor/glass'
        },
        {
            output: 'immersiveengineering:rockcutter',
            input: 'immersiveengineering:sawblade',
            infusionInput: 'mekanism:diamond',
            infusionAmount: 80,
            id: 'immersiveengineering:crafting/rockcutter'
        },
        {
            output: 'mekanism:ingot_refined_obsidian',
            input: '#forge:ingots/osmium',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 160,
            id: 'mekanism:processing/refined_obsidian/ingot/from_dust'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, [recipe.input])) return;
        const input = recipe.input.replace(/^\s*(\d+)\s*x\s*/, '');
        const countMatch = recipe.input.match(/^\s*(\d+)\s*x\s*/);
        const itemInput = input.startsWith('#')
            ? { tag: input.slice(1), count: countMatch ? Number(countMatch[1]) : 1 }
            : { item: input, count: countMatch ? Number(countMatch[1]) : 1 };
        event.custom({
            type: 'mekanism:metallurgic_infusing',
            output: { id: recipe.output, count: 1 },
            item_input: itemInput,
            chemical_input: { tag: recipe.infusionInput, amount: recipe.infusionAmount },
            per_tick_usage: false
        }).id(recipe.id);
    });
});
})();

(function () {
// 专家版纳入源 normal 目录的 Mekanism 金属灌注配方。
if (e6ePortedRecipeModLoaded('mekanism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const output = Item.of('compactmachines:wall', 32);
        const input = '#forge:storage_blocks/ender';

        if (!e6eCanRegisterRecipe(output, [input])) return;

        event.recipes.mekanism
            .metallurgic_infusing(output, input, 'mekanism:refined_obsidian', 80)
            .id('enigmatica:normal/mekanism/metallurgic_infusing/compactmachines_wall');
    });
}
})();
