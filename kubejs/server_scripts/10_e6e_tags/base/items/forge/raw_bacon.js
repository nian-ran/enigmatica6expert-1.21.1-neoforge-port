if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:raw_bacon', ['simplefarming:raw_bacon']);
    event.add('forge:raw_pork', ['#forge:raw_bacon']);
});

}
