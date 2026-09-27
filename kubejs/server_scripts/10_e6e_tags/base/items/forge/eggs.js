if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    let items = ['atum:quail_egg'];
    event.get('forge:eggs').add(items);
});

}
