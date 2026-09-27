ItemEvents.rightClicked((e) => {
    if (e.item.id != 'kubejs:soggy_treasure_box') return;
    if (!e.player.isCreativeMode()) {
        e.player.getMainHandItem().count--;
    }
    let lootTable = 'enigmatica:chests/soggy_treasure_box';
    let lootDrops = Utils.rollChestLoot(lootTable);

    if (!e.player.isPlayer() || e.player.isFake()) {
        //暂用此变通方法在假玩家所在位置掉落物品，等待更合适的处理器。
        let playerCoords = `${e.player.x} ${e.player.y + 1} ${e.player.z}`;
        e.world.server.runCommand(
            `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot ${lootTable}`
        );
    } else {
        lootDrops.forEach((lootDrop) => {
            e.player.give(lootDrop);
        });
    }
});
