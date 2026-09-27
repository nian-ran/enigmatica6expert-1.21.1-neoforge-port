if (['atum', 'mythicbotany'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const items = ['mythicbotany:alfsteel_pick', 'aiotbotania:alfsteel_aiot'];
    event.get('atum:nebu_hammer').add(items);
});

}
