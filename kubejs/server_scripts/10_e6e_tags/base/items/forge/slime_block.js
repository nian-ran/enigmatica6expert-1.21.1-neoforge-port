if (['tconstruct'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('forge:slime_block').add('#tconstruct:slime_block').add('#quark:slime_blocks');
});

}
