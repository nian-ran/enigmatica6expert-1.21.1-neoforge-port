// 七种林地府邸储藏室的食物奖池由 LootJS 3.7 处理。
LootJS.lootTables((event) => {
    const food = [
        { item: 'farmersdelight:noodle_soup', weight: 50, count: [4, 16] },
        { item: 'ars_nouveau:source_berry_pie', weight: 50, count: [4, 8] },
        { item: 'alexsmobs:kangaroo_burger', weight: 50, count: [4, 8] },
        { item: 'undergarden:dweller_steak', weight: 50, count: [2, 8] },
        { item: 'simpledelights:orange_chicken', weight: 50, count: [2, 8] },
        { item: 'immersivecooking:pyttipanna', weight: 50, count: [2, 8] },
        { item: 'farmersdelight:apple_cider', weight: 50, count: [2, 8] },
        { item: 'simplefarming:sake', weight: 40, count: [1, 2] },
        { item: 'minecraft:carrot', weight: 30, count: [4, 16] },
        { item: 'farmersdelight:shepherds_pie', weight: 50, count: [2, 8] },
        { item: 'farmersdelight:fried_rice', weight: 20, count: [2, 8] },
        { item: 'farmersdelight:mixed_salad', weight: 20, count: [2, 8] },
        { item: 'minecraft:potato', weight: 20, count: [4, 16] },
        { item: 'farmersdelight:steak_and_potatoes', weight: 15, count: [4, 8] },
        { item: 'simplefarming:vegetable_curry', weight: 50, count: [4, 16] },
        { item: 'simpledelights:mango_wings', weight: 50, count: [4, 16] },
        { item: 'simpledelights:plum_pudding', weight: 50, count: [4, 16] },
        { item: 'create:builders_tea', weight: 10, count: [4, 16] },
        { item: 'farmersdelight:roasted_mutton_chops', weight: 50, count: [4, 16] },
        { item: 'alexsmobs:shrimp_fried_rice', weight: 50, count: [4, 16] },
        { item: 'create:honeyed_apple', weight: 50, count: [4, 16] },
        { item: 'quark:golden_frog_leg', weight: 50, count: [4, 16] },
        { item: 'create:sweet_roll', weight: 50, count: [4, 16] },
        { item: 'simplefarming:pork_curry', weight: 50, count: [4, 16] },
        { item: 'simplefarming:italian_beef', weight: 50, count: [4, 16] },
        { item: 'simplefarming:beef_and_broccoli', weight: 50, count: [4, 16] }
    ].filter((entry) => Item.exists(entry.item));

    if (food.length === 0) return;

    ['birch', 'desert', 'jungle', 'oak', 'savanna', 'snowy', 'taiga'].forEach((wood) => {
        const tableId = `repurposed_structures:chests/mansions/${wood}_storage`;
        if (!event.hasLootTable(tableId)) return;

        event.getLootTable(tableId).createPool((pool) => {
            pool.rolls([2, 3]);
            food.forEach((entry) => {
                pool.addEntry(
                    LootEntry.of(entry.item, entry.count).withWeight(entry.weight)
                );
            });
        });
    });
});
