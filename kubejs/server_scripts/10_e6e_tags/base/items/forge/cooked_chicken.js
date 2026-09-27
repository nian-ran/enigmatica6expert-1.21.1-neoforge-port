if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:cooked_chicken', ['simplefarming:cooked_chicken_wings']);
});

}
