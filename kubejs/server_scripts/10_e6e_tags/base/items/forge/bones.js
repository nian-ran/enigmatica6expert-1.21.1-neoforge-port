if (['tconstruct'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('forge:bones/wither').add('tconstruct:necrotic_bone');
});

}
