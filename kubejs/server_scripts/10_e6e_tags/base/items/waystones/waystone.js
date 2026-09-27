ServerEvents.tags('item', (event) => {
    event.get('waystones:waystone').add(/waystones:(\w+_)?waystone$/);
});
