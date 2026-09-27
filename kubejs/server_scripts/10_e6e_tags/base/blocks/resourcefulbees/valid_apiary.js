if (['resourcefulbees'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('block', (event) => {
    event.get('resourcefulbees:valid_apiary').add(validApiaryBlocks);
});

}
