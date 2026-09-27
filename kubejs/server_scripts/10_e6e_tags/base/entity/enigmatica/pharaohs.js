if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    let entities = ['atum:pharaoh'];
    event.get('enigmatica:pharaohs').add(entities);
});

}
