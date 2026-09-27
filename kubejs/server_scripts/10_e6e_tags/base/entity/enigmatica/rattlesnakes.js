if (['alexsmobs'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    let entities = ['alexsmobs:rattlesnake'];
    event.get('enigmatica:rattlesnakes').add(entities);
});

}
