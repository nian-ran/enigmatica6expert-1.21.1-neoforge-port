PlayerEvents.loggedIn((event) => {
    const startingItemsGameStage = 'starting_items';
    const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'];

    global.setMode(event.player);

    if (!event.player.stages.has(startingItemsGameStage)) {
        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of(randomOf(waystones)));

        event.player.stages.add(startingItemsGameStage);
    }
});
