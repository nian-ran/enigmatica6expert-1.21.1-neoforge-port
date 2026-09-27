if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    event.get('enigmatica:camels').add('atum:camel');
});

}
