if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:chocolate_bars', ['create:bar_of_chocolate', 'simplefarming:chocolate']);
});

}
