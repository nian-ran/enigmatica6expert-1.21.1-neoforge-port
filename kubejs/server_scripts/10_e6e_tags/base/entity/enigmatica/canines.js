if (['atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    event.get('enigmatica:canines').add('minecraft:wolf').add('atum:desert_wolf');
});

}
