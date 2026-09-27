if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    var items = [/fishing_rod$/, 'atum:atems_bounty'];

    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/fishing_rods'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});

}
