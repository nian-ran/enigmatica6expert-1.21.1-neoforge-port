if (['botania', 'thermal'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('forge:fertilizer', [
        'botania:fertilizer',
        'thermal:phytogro',
        'farmingforblockheads:green_fertilizer',
        'farmingforblockheads:red_fertilizer',
        'farmingforblockheads:yellow_fertilizer'
    ]);
});

}
