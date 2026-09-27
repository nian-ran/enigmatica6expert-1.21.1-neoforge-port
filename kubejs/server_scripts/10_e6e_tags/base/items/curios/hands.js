if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('curios:hands', ['#atum:relic_non_dirty/bracelet']);
});

}
