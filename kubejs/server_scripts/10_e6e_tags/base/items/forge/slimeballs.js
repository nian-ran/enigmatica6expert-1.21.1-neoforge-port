if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:slimeballs', ['byg:embur_gel_ball', 'betterendforge:gelatine']);
});

}
