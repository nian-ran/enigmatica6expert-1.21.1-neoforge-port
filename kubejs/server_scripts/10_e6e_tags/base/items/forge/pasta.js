if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:pasta/raw_pasta', ['simplefarming:noodles']);
});

}
