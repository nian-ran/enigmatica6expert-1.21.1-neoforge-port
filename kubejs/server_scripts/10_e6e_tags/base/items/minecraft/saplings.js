if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    var items = ['byg:yellow_spruce_sapling', 'byg:joshua_sapling'];
    event.get('minecraft:saplings').add(items);
});

}
