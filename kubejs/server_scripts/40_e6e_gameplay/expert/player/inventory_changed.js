if (global.isExpertMode != false) {
    PlayerEvents.tick((event) => {
        const player = event.player;
        if (!player.isPlayer() || player.isFake()) return;

        const isHoldingHotItem = playerHas('#enigmatica:burning_hot', player);
        const isBurningFromHotItem = player.persistentData.getBoolean('e6e_burning_hot_active');

        if (isHoldingHotItem && !player.isInWater()) {
            if (!isBurningFromHotItem) {
                player.tell(Text.of('高温物品正在灼烧你！').red());
            }
            player.setOnFire(180);
            player.persistentData.putBoolean('e6e_burning_hot_active', true);
        } else if (!isHoldingHotItem && isBurningFromHotItem) {
            player.extinguish();
            player.persistentData.putBoolean('e6e_burning_hot_active', false);
        }
    });
}
