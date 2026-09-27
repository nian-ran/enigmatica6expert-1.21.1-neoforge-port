// E6E 1.16.5 to 1.21.1 NeoForge client migration
// Entries are filtered against target-installed mods.
RecipeViewerEvents.removeEntries('item', (event) => {
    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:stick_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'eidolon:ingot_' + material,
            'eidolon:nugget_' + material,
            'eidolon:block_' + material,
            'thermal:' + material + '_block'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (typeof disabledItem === 'string' && Item.exists(disabledItem)) {
            event.remove(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (typeof disabledItem === 'string' && Item.exists(disabledItem)) {
            event.remove(disabledItem);
        }
    });

    colors.forEach((color) => {
        event.remove('/refinedstorage:' + color + '\\w/');
    });
});
