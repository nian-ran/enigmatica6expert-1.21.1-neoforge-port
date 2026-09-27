if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:raw_chicken', ['simplefarming:raw_chicken_wings']);
});

}
