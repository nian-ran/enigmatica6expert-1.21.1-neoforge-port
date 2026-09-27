if (['thermal'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('forge:slag').add('thermal:slag');
});

}
