// 潮湿宝箱沿用旧专家包的五次抽取与珍宝、杂物 20:80 的权重。
LootJS.lootTables((event) => {
    const treasures = [
        { item: 'minecraft:name_tag', weight: 100 },
        { item: 'minecraft:nautilus_shell', weight: 100 },
        { item: 'projectvibrantjourneys:seashells', weight: 100, count: [2, 4] },
        { item: 'minecraft:turtle_scute', weight: 100 },
        { item: 'minecraft:prismarine_crystals', weight: 100 },
        { item: 'upgrade_aquatic:glowing_ink_sac', weight: 100, count: [1, 2] },
        { item: 'minecraft:ink_sac', weight: 100, count: [1, 2] },
        { item: 'thermal:tin_coin', weight: 50, count: [2, 8] },
        { item: 'thermal:lumium_coin', weight: 20, count: [2, 4] },
        { item: 'thermal:enderium_coin', weight: 10, count: [1, 2] },
        { item: 'minecraft:bow', weight: 100, enchantLevel: 30, damage: [0, 0.25] },
        { item: 'minecraft:fishing_rod', weight: 100, enchantLevel: 30, damage: [0, 0.25] },
        { item: 'minecraft:book', weight: 100, enchantLevel: 30 }
    ];

    const junk = [
        'undergarden:glowing_kelp',
        'upgrade_aquatic:polar_kelp',
        'upgrade_aquatic:ochre_kelp',
        'upgrade_aquatic:thorny_kelp',
        'upgrade_aquatic:tongue_kelp',
        'minecraft:kelp',
        'minecraft:seagrass',
        'upgrade_aquatic:blue_pickerelweed',
        'upgrade_aquatic:purple_pickerelweed'
    ];

    event.create('enigmatica:chests/soggy_treasures').createPool((pool) => {
        pool.rolls(1);
        treasures.forEach((entry) => {
            if (!Item.exists(entry.item)) return;
            const loot = LootEntry.of(entry.item).withWeight(entry.weight);
            if (entry.count) loot.setCount(entry.count);
            if (entry.enchantLevel) loot.enchantWithLevels(entry.enchantLevel);
            if (entry.damage) {
                loot.jsonFunction({
                    function: 'minecraft:set_damage',
                    damage: { type: 'minecraft:uniform', min: entry.damage[0], max: entry.damage[1] }
                });
            }
            pool.addEntry(loot);
        });
    });

    event.create('enigmatica:chests/soggy_junk').createPool((pool) => {
        pool.rolls([1, 2]);
        junk.forEach((item) => {
            if (Item.exists(item)) pool.addEntry(LootEntry.of(item).withWeight(100));
        });
    });

    event.create('enigmatica:chests/soggy_treasure_box').createPool((pool) => {
        pool.rolls(5);
        pool.addEntry(LootEntry.reference('enigmatica:chests/soggy_treasures').withWeight(20));
        pool.addEntry(LootEntry.reference('enigmatica:chests/soggy_junk').withWeight(80));
    });
});
