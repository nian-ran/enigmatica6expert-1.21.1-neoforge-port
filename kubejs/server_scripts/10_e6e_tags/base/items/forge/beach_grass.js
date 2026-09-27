if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:beach_grass', [
        'byg:beach_grass',
        'upgrade_aquatic:beachgrass',
        'projectvibrantjourneys:beach_grass'
    ]);
});

}
