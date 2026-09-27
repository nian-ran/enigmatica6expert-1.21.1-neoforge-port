if (['botania'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    let entities = ['botania:doppleganger'];
    event.get('enigmatica:gaia_guardian').add(entities);
});

}
