if (['tconstruct'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('forge:wither_bones').add(['tconstruct:necrotic_bone', 'architects_palette:withered_bone']);
});

}
