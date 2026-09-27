if (['alexsmobs'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    event.get('enigmatica:apes').add('alexsmobs:gorilla');
});

}
