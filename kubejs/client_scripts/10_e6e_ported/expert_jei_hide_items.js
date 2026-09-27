// E6E 1.16.5 to 1.21.1 NeoForge client migration
// Entries are filtered against target-installed mods.
RecipeViewerEvents.removeEntries('item', (event) => {
let items = [
        'integrateddynamics:coal_generator',
        /darkutils:export_plate/,
        /integrateddynamics:energy_battery/,
        /powah:energy_cable_/,
    ];
    items.forEach((entry) => {
        event.remove(entry);
    });
});
