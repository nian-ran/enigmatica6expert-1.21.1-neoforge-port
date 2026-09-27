if (['resourcefulbees'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('resourcefulbees:valid_apiary').add(validApiaryBlocks).remove(invalidApiaryBlocks);
});

}
