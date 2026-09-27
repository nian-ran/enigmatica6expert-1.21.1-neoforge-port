if (global.isExpertMode != false) {
    [
        'kubejs:hot_compressed_iron_ingot',
        'kubejs:superheated_steel_ingot',
        'kubejs:superheated_steel_block',
        'kubejs:hot_compressed_iron_block'
    ].forEach((hotItem) => {
        ItemEvents.dropped(hotItem, (event) => {
            const player = event.player;
            if (!player.isPlayer() || player.isFake()) return;
            if (!event.item.hasTag('enigmatica:burning_hot')) return;
            if (playerHas('#enigmatica:burning_hot', player)) return;

            if (player.persistentData.getBoolean('e6e_burning_hot_active')) {
                player.extinguish();
                player.persistentData.putBoolean('e6e_burning_hot_active', false);
            }
        });
    });
}
