if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('minecraft:soul_fire_base_blocks', ['byg:nylium_soul_sand', 'byg:nylium_soul_soil']);
});

}
