if (['eidolon_repraised'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.get('minecraft:planks').remove('eidolon_repraised:polished_planks');
});

}
