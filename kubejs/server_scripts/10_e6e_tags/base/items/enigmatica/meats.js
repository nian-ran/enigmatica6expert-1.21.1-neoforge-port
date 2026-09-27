// 肉类标签只包含当前实例已注册的肉类物品。
// 肉类标签只加入当前实例已注册的肉类物品。
ServerEvents.tags('item', (event) => {
    const smallMeats = [
        'atum:quail',
        'farmersdelight:mutton_chops',
        'simplefarming:raw_chicken_wings',
        'farmersdelight:chicken_cuts',
        'farmersdelight:bacon',
        'quark:frog_leg',
        'undergarden:raw_gloomper_leg'
    ];
    const mediumMeats = ['environmental:duck', 'minecraft:chicken', 'minecraft:rabbit'];
    const largeMeats = [
        'undergarden:raw_dweller_meat',
        'simplefarming:raw_horse_meat',
        'atum:camel',
        'environmental:venison',
        'alexsmobs:kangaroo_meat',
        'minecraft:beef',
        'minecraft:mutton',
        'minecraft:porkchop',
        'alexsmobs:moose_ribs'
    ];
    const addExistingItems = (tag, items) => {
        const existing = items.filter((item) => Item.exists(item));
        if (existing.length > 0) event.get(tag).add(existing);
    };

    addExistingItems('enigmatica:meats', smallMeats.concat(mediumMeats, largeMeats));
    addExistingItems('enigmatica:meats/small', smallMeats);
    addExistingItems('enigmatica:meats/medium', mediumMeats);
    addExistingItems('enigmatica:meats/large', largeMeats);
});
