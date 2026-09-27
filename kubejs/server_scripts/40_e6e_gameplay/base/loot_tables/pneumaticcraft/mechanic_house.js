// 机械师小屋使用旧专家包的四至六次抽取及奖励权重。
LootJS.lootTables((event) => {
    const tableId = 'pneumaticcraft:chests/mechanic_house';
    if (!event.hasLootTable(tableId)) return;

    const entries = [
        { item: 'pneumaticcraft:air_canister', weight: 10, count: [1, 5] },
        { item: 'pneumaticcraft:pneumatic_cylinder', weight: 5, count: [2, 4] },
        { item: 'pneumaticcraft:logistics_core', weight: 8, count: [4, 8] },
        { item: 'pneumaticcraft:capacitor', weight: 4, count: [4, 8] },
        { item: 'pneumaticcraft:transistor', weight: 4, count: [4, 8] },
        { item: 'pneumaticcraft:turbine_rotor', weight: 5, count: [2, 4] },
        { item: 'pneumaticcraft:vortex_tube', weight: 5 },
        { item: 'pneumaticcraft:pressure_tube', weight: 10, count: [3, 8] },
        { item: 'pneumaticcraft:advanced_pressure_tube', weight: 4, count: [3, 8] },
        { item: 'pneumaticcraft:heat_pipe', weight: 8, count: [3, 8] },
        { item: 'pneumaticcraft:aphorism_tile', weight: 5, count: [2, 3] },
        { item: 'pneumaticcraft:compressed_iron_helmet', weight: 10, enchant: [5, 15] },
        { item: 'pneumaticcraft:compressed_iron_chestplate', weight: 10, enchant: [5, 15] },
        { item: 'pneumaticcraft:compressed_iron_leggings', weight: 10, enchant: [5, 15] },
        { item: 'pneumaticcraft:compressed_iron_boots', weight: 10, enchant: [5, 15] }
    ];

    event.getLootTable(tableId).clear().createPool((pool) => {
        pool.rolls([4, 6]);
        entries.forEach((entry) => {
            if (!Item.exists(entry.item)) return;
            const loot = LootEntry.of(entry.item).withWeight(entry.weight);
            if (entry.count) loot.setCount(entry.count);
            if (entry.enchant) loot.enchantWithLevels(entry.enchant);
            pool.addEntry(loot);
        });
    });
});
