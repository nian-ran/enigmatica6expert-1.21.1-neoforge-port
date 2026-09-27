if (['tconstruct'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('architects_palette:withered_bones').add('tconstruct:necrotic_bone');
});

}
