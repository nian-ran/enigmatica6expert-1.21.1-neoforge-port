ServerEvents.tags('item', (event) => {
    const items = [
        /pneumaticcraft:(reinforced_)?air_canister/, // 10 与 20 bar 压力罐
        /pneumaticcraft:(\w+_)?drone$/, // 全部 5 种可合成的无人机

        /pneumaticcraft:pneumatic_(wrench|helmet|chestplate|leggings|boots)/,

        'pneumaticcraft:vortex_cannon',
        'pneumaticcraft:manometer',
        'pneumaticcraft:logistics_configurator',
        'pneumaticcraft:amadron_tablet',
        'pneumaticcraft:minigun',
        'pneumaticcraft:camo_applicator',
        'pneumaticcraft:jackhammer'
    ];

    const tags = ['forge:storage', 'forge:storage/air'];

    tags.forEach((tag) => {
        event.get(tag).add(items);
    });
});
