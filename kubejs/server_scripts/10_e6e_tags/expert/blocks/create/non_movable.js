ServerEvents.tags('block', (event) => {
    // 文档：https://github.com/Direwolf20-MC/BuildingGadgets/tree/master/src/main/resources/data/buildinggadgets/tags/blocks/blacklist

    const blocks = [/pedestals:*/];
    event.get('create:non_movable').add(blocks);
});
