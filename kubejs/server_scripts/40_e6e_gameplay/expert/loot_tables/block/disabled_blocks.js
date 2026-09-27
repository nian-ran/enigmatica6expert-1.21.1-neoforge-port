// 专家模式方块战利品修改由 LootJS 3.7 处理。
// 专家模式方块战利品修改由 LootJS 3.7 处理。
LootJS.lootTables((event) => {
    if (global.isExpertMode == false) return;

    const addBlockPool = (blockId, itemId, rolls) => {
        if (!Item.exists(blockId) || !Item.exists(itemId)) return;

        event.modifyBlockTables(blockId).createPool((pool) => {
            pool.rolls(rolls);
            pool.addEntry(LootEntry.of(itemId).survivesExplosion());
        });
    };

    [
        { blocks: ['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'], item: 'pneumaticcraft:reinforced_bricks', rolls: [4, 6] },
        { blocks: ['eidolon_repraised:crucible'], item: 'eidolon_repraised:pewter_ingot', rolls: [1, 2] },
        { blocks: ['eidolon_repraised:worktable'], item: 'minecraft:conduit', rolls: [1, 1] }
    ].forEach((loot) => {
        loot.blocks.forEach((blockId) => addBlockPool(blockId, loot.item, loot.rolls));
    });

    const alfheimCondition = {
        condition: 'minecraft:location_check',
        predicate: { dimension: 'mythicbotany:alfheim' }
    };
    const outsideAlfheim = {
        condition: 'minecraft:inverted',
        term: alfheimCondition
    };
    const illusoryBlocks = [
        { real: 'botania:livingrock', fake: 'undergarden:shiverstone' },
        { real: 'botania:livingrock_wall', fake: 'undergarden:shiverstone' },
        { real: 'botania:livingrock_bricks', fake: 'undergarden:shiverstone' },
        { real: 'botania:apothecary_default', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_forest', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_plains', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_mountain', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_fungal', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_swamp', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_desert', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_taiga', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_mesa', fake: 'mekanism:salt' },
        { real: 'botania:bifrost_perm', fake: 'dustrial_decor:cardboard' },
        { real: 'botania:diluted_pool', fake: 'dustrial_decor:cardboard' }
    ];

    illusoryBlocks.forEach((block) => {
        if (!Item.exists(block.real) || !Item.exists(block.fake)) return;

        event.modifyBlockTables(block.real).createPool((pool) => {
            pool.addEntry(
                LootEntry.of(block.real)
                    .survivesExplosion()
                    .matchCustomCondition(outsideAlfheim)
            );
        });
        event.modifyBlockTables(block.real).createPool((pool) => {
            pool.addEntry(
                LootEntry.of(block.fake)
                    .survivesExplosion()
                    .matchCustomCondition(alfheimCondition)
            );
        });
    });
});
