if (['atum', 'eidolon_repraised'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('entity_type', (event) => {
    let entities = ['eidolon_repraised:zombie_brute', 'minecraft:zombified_piglin', 'atum:mummy'];
    event.get('forge:zombies').add(entities);
});

}
