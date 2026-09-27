if (['simplefarming'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:crops/soybean', ['#forge:crops/soy_bean']);
    event.add('forge:crops/soy_bean', ['simplefarming:soybean']);
});

}
