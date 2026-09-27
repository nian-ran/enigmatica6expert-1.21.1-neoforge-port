ServerEvents.tags('block', (event) => {
    event.get('forge:honey').remove('create:honey');
});
