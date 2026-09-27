if (['thermal'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('block', (event) => {
    event.add('create:windmill_sails', ['#quark:quilted_wools', '#thermal:rockwool']);
});

}
