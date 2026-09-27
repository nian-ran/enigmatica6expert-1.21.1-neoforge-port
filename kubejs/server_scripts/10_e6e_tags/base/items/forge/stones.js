// 石材物品标签只包含当前实例已注册的物品。
// 石材物品标签只加入当前实例已注册的物品。
ServerEvents.tags('item', (event) => {
    const addExistingItems = (tag, items) => {
        const existing = items.filter((item) => Item.exists(item));
        if (existing.length > 0) event.get(tag).add(existing);
    };

    addExistingItems('forge:stone', [
        'astralsorcery:marble_arch',
        'astralsorcery:marble_bricks',
        'astralsorcery:marble_chiseled',
        'astralsorcery:marble_engraved',
        'astralsorcery:marble_raw',
        'astralsorcery:marble_runed',
        'create:natural_scoria',
        'quark:deepslate'
    ]);
    event.get('forge:stone').remove(['#pneumaticcraft:reinforced_stone']);

    addExistingItems('forge:stones/basalt', [
        'quark:basalt',
        'quark:chiseled_basalt_bricks',
        'quark:basalt_pavement',
        'quark:basalt_pillar',
        'quark:polished_basalt',
        'quark:basalt_bricks',
        'minecraft:basalt'
    ]);
    addExistingItems('forge:stones/slate', ['quark:slate', 'quark:polished_slate']);
    addExistingItems('forge:stones/marble', [
        'quark:marble',
        'quark:polished_marble',
        'astralsorcery:marble_arch',
        'astralsorcery:marble_bricks',
        'astralsorcery:marble_chiseled',
        'astralsorcery:marble_engraved',
        'astralsorcery:marble_raw',
        'astralsorcery:marble_runed'
    ]);
    addExistingItems('forge:stones/limestone', ['quark:limestone', 'quark:polished_limestone']);
    addExistingItems('forge:stones/jasper', ['quark:jasper', 'quark:polished_jasper']);
    addExistingItems('forge:stones/granite', ['minecraft:granite', 'minecraft:polished_granite']);
    addExistingItems('forge:stones/diorite', ['minecraft:diorite', 'minecraft:polished_diorite']);
    addExistingItems('forge:stones/andesite', ['minecraft:andesite', 'minecraft:polished_andesite']);

    createStoneTypes.forEach((stone) => {
        addExistingItems(`forge:stones/${stone}`, [`create:${stone}`]);
    });
});
