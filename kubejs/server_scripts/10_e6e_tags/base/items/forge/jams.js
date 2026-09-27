if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:jams', ['#forge:jams/mulberry', 'simplefarming:jam']);
});
ServerEvents.tags('item', (event) => {
    event.add('forge:jams/mulberry', ['upgrade_aquatic:mulberry_jam_bottle']);
});

}
