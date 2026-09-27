// 水下宝箱奖励由 LootJS 3.7 处理；药水使用数据组件。
LootJS.lootTables((event) => {
    const entries = [
        {
            item: 'minecraft:potion',
            potion: 'minecraft:water_breathing',
            weight: 100,
            count: [1, 3]
        },
        {
            item: 'minecraft:potion',
            potion: 'minecraft:long_water_breathing',
            weight: 75,
            count: [0, 2]
        },
        { item: 'create:diving_helmet', weight: 25, enchantLevel: 15 },
        { item: 'create:diving_boots', weight: 25, enchantLevel: 15 },
        { item: 'create:copper_backtank', weight: 25, enchantLevel: 15 },
        { item: 'thermal:diving_helmet', weight: 50, enchantLevel: 10 },
        { item: 'thermal:diving_chestplate', weight: 50, enchantLevel: 10 },
        { item: 'thermal:diving_boots', weight: 50, enchantLevel: 10 },
        { item: 'thermal:diving_leggings', weight: 50, enchantLevel: 10 },
        { item: 'artifacts:charm_of_sinking' },
        { item: 'artifacts:flippers' },
        { item: 'artifacts:snorkel' }
    ];

    const tables = [
        'minecraft:chests/shipwreck_supply',
        'minecraft:chests/underwater_ruin_big',
        'minecraft:chests/underwater_ruin_small',
        'repurposed_structures:chests/dungeons/ocean',
        'repurposed_structures:chests/mineshafts/ocean'
    ];

    tables.forEach((id) => {
        if (!event.hasLootTable(id)) return;

        event.getLootTable(id).createPool((pool) => {
            pool.rolls([1, 5]);

            entries.forEach((entry) => {
                if (!Item.exists(entry.item)) return;

                const stack = entry.potion
                    ? Item.of(`minecraft:potion[minecraft:potion_contents={potion:"${entry.potion}"}]`)
                    : Item.of(entry.item);
                const loot = LootEntry.of(stack, entry.count || 1).withWeight(entry.weight || 1);
                if (entry.enchantLevel) loot.enchantWithLevels(entry.enchantLevel);
                pool.addEntry(loot);
            });
        });
    });
});
