if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('forge:cooked_eggs').add('simplefarming:cooked_egg');
});

}
