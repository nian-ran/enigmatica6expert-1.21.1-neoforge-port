if (['byg'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    event.add('minecraft:birch_logs', ['#byg:palo_verde_logs']);
    event.add('minecraft:logs', ['#upgrade_aquatic:driftwood_logs']);
});

}
