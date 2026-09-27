// 配方类型：interactio:item_anvil_smashing
// 中文名称：铁砧砸落物品
// 用途：用于登记Interactio 掉落物交互的铁砧砸落物品配方。

(function () {
if (['botania', 'eidolon_repraised', 'interactio'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_anvil_smashing/';
    const recipes = [
        {
            inputs: [
                Item.of('minecraft:potion[minecraft:potion_contents={potion:"minecraft:long_swiftness"}]'),
                [Item.of('eidolon_repraised:soul_shard'), Item.of('create:cuckoo_clock')]
            ],
            output: {
                entries: [{ result: { item: 'tiab:timeinabottle' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: `${id_prefix}timeinabottle`
        },
        {
            inputs: [
                Item.of('naturesaura:hopper_upgrade'),
                Item.of('botania:ender_eye_block'),
                Item.of('naturesaura:grated_chute'),
                Item.of('botania:red_string')
            ],
            output: {
                entries: [{ result: { item: 'darkutils:ender_hopper' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: 'darkutils:crafting/ender_hopper'
        },
        {
            inputs: [
                Ingredient.of('#forge:storage_blocks/tin'),
                Item.of('sophisticatedbackpacks:upgrade_base'),
                Item.of('minecraft:blast_furnace')
            ],
            output: {
                entries: [{ result: { item: 'sophisticatedbackpacks:smelting_upgrade' }, weight: 1 }],
                rolls: 1
            },
            damage: 4,
            id: 'sophisticatedbackpacks:smelting_upgrade'
        },
        {
            inputs: [
                Ingredient.of('#forge:storage_blocks/tin'),
                Item.of('sophisticatedbackpacks:upgrade_base'),
                Item.of('trashcans:item_trash_can')
            ],
            output: {
                entries: [{ result: { item: 'sophisticatedbackpacks:void_upgrade' }, weight: 1 }],
                rolls: 1
            },
            damage: 4,
            id: 'sophisticatedbackpacks:void_upgrade'
        },
        {
            inputs: [Item.of('computercraft:computer_normal'), Item.of('computercraft:disk[minecraft:custom_data={Color:1118481}]')],
            output: {
                entries: [{ result: { item: 'computercraft:pocket_computer_normal' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: `${id_prefix}pocket_computer_normal`
        },
        {
            inputs: [Item.of('computercraft:computer_advanced'), Item.of('computercraft:disk[minecraft:custom_data={Color:1118481}]')],
            output: {
                entries: [{ result: { item: 'computercraft:pocket_computer_advanced' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: `${id_prefix}pocket_computer_advanced`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_anvil_smashing';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
