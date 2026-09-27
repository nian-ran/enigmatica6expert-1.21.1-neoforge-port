if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:netherbricks', ['minecraft:nether_bricks', 'byg:blue_nether_bricks', 'byg:yellow_nether_bricks']);
});

}
