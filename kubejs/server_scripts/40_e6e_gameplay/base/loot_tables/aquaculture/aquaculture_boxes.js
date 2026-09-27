// Aquaculture 海王馈赠杂物盒中的水生植物奖励由 LootJS 3.7 处理。
LootJS.lootTables((event) => {
    const tableId = 'aquaculture:box/neptunes_bounty_junk';
    if (!event.hasLootTable(tableId)) return;

    const kelp = [
        'upgrade_aquatic:tongue_kelp',
        'upgrade_aquatic:thorny_kelp',
        'upgrade_aquatic:ochre_kelp',
        'upgrade_aquatic:polar_kelp'
    ].filter((item) => Item.exists(item));
    if (kelp.length === 0) return;

    event.getLootTable(tableId).createPool((pool) => {
        pool.rolls(1);
        kelp.forEach((item) => {
            pool.addEntry(
                LootEntry.of(item, [5, 10])
                    .withWeight(100)
                    .randomChance(0.1)
            );
        });
    });
});
