if (['alexsmobs'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    event.get('enigmatica:mungus').add('alexsmobs:mungus');
});

}
