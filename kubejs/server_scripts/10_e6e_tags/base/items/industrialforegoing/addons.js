ServerEvents.tags('item', (event) => {
    event.get('industrialforegoing:addons').add(/industrialforegoing:\w+addon/);
});
