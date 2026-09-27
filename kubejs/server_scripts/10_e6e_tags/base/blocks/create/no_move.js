ServerEvents.tags('block', (event) => {
    event.add('create:no_move', [/refinedstorage:/, /prettypipes:/]);
});
