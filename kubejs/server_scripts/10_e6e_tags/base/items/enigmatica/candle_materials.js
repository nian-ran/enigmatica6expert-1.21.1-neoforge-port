ServerEvents.tags('item', (event) => {
    const tag = event.get('enigmatica:candle_materials').add('minecraft:honeycomb');
    if (Item.exists('productivebees:wax')) tag.add('productivebees:wax');
    if (Item.exists('occultism:tallow')) tag.add('occultism:tallow');
});
