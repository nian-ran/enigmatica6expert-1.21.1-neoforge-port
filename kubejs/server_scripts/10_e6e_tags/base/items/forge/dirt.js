if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:dirt', ['minecraft:dirt', 'byg:meadow_dirt']);

    event.remove('forge:dirt', ['supplementaries:fodder']);
});

}
