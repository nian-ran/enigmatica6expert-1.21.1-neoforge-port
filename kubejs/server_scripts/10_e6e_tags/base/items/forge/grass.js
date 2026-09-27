if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:grass', ['minecraft:grass_block', 'byg:meadow_grass_block']);
});

}
