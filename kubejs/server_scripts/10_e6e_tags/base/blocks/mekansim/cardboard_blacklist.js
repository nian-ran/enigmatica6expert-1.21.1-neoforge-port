if (['engineersdecor'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('block', (event) => {
    let blacklist_blocks = ['engineersdecor:factory_placer'];
    event.get('mekanism:cardboard_blacklist').add(blacklist_blocks);
});

}
