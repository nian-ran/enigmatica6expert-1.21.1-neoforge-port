ServerEvents.tags('item', (event) => {
    event.get('forge:pies').add(/_pie$/).remove('farmersdelight:shepherds_pie');
});
