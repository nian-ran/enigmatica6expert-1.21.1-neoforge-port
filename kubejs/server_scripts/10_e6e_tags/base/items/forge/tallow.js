if (['eidolon_repraised'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:tallow', ['quark:tallow', 'eidolon_repraised:tallow', 'occultism:tallow']);
});

}
