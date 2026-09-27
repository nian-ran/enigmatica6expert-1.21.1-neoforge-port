if (['alexsmobs'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    let entities = ['alexsmobs:dropbear'];
    event.get('enigmatica:dropbears').add(entities);
});

}
