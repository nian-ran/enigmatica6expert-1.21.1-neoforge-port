if (['alexsmobs', 'atum'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('block', (event) => {
    event.get('alexsmobs:crocodile_spawns').add(['atum:fertile_soil']);
});

}
