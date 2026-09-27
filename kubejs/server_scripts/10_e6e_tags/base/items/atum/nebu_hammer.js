if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    const items = ['atum:nebu_hammer'];
    event.get('atum:nebu_hammer').add(items);
});

}
