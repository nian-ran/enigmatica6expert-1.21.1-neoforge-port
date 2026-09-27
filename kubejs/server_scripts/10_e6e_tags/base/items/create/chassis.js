ServerEvents.tags('item', (event) => {
    event.add('create:chassis', [/create:\w+_chassis/]);
});
