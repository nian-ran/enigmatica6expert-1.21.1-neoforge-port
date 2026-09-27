//priority: 999
// 这里使用了 colors 常量，因此加载优先级必须低于 constants.js。

// 此处添加的物品会获得 valid_apiary 标签，可用作养蜂场多方块结构的墙体。
// 此外还包括所有有碰撞箱的方块。
const validApiaryBlocks = [
    'glassential:glass_dark',
    'glassential:glass_dark_ethereal',
    'glassential:glass_ethereal',
    'glassential:glass_light',
    'glassential:glass_redstone'
];

// 此处添加的物品会从 valid_apiary 标签中移除
const invalidApiaryBlocks = ['upgrade_aquatic:bedroll'];
colors.forEach((color) => invalidApiaryBlocks.push(`upgrade_aquatic:${color}_bedroll`));

const honeyVarieties = [
    'resourcefulbees:blaze_honey',
    'resourcefulbees:brass_honey',
    'resourcefulbees:bronze_honey',
    'resourcefulbees:catnip_honey',
    'resourcefulbees:coal_honey',
    'resourcefulbees:constantan_honey',
    'resourcefulbees:diamond_honey',
    'resourcefulbees:electrum_honey',
    'resourcefulbees:emerald_honey',
    'resourcefulbees:enderium_honey',
    'resourcefulbees:glowstone_honey',
    'resourcefulbees:gold_honey',
    'resourcefulbees:honey',
    'resourcefulbees:icy_honey',
    'resourcefulbees:invar_honey',
    'resourcefulbees:iron_honey',
    'resourcefulbees:lapis_honey',
    'resourcefulbees:lumium_honey',
    'resourcefulbees:netherite_honey',
    'resourcefulbees:obsidian_honey',
    'resourcefulbees:rainbow_honey',
    'resourcefulbees:redstone_honey',
    'resourcefulbees:signalum_honey',
    'resourcefulbees:steel_honey',
    'resourcefulbees:water_honey',
    'resourcefulbees:wither_honey',
    'resourcefulbees:illuminating_honey',
    'resourcefulbees:rocky_honey',
    'resourcefulbees:meaty_honey',
    'resourcefulbees:rocket_honey',
    'resourcefulbees:mana_honey',
    'resourcefulbees:otherworldly_honey'
];

const combVariants = [
    //修改时同步更新 startup_scripts/item_registry.js 中的蜜蜂常量。
    // 合金
    'brass',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'invar',
    'lumium',
    'signalum',
    'steel',
    // 开发
    'catnip',
    // 宝石
    'diamond',
    'emerald',
    'lapis',
    'redstone',
    // 魔法
    'bloody',
    'carbee',
    'elven',
    'infused',
    'mana',
    'otherworldly',
    'sky',
    'starry',
    'tainted',
    'terrestrial',
    // 材料
    'clay',
    'enderslime',
    'gravel',
    'ichor',
    'shepherd',
    'skyslime',
    // 金属
    'aluminum',
    'cobalt',
    'copper',
    'frosty',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'regal',
    'silver',
    'tin',
    'uranium',
    'zinc',
    // 自然
    'brutish_zombee',
    'clogged',
    'coal',
    'creeper',
    'ender',
    'forest',
    'glowstone',
    'icy',
    'obsidian',
    'pigman',
    'rgbee',
    'rocky',
    'sand',
    'skeleton',
    'slimy',
    'water',
    'zombie',
    // 下界
    'blaze',
    'ghast',
    'netherite',
    'wither',
    'nether_quartz',
    // 特殊
    'boobee',
    'clockwork',
    'direbee20',
    'dusty_mummbee',
    'generikbee',
    'soup',
    'spelling',
    'wasabee',
    // 科技
    'basalz',
    'blitz',
    'blizz',
    'industrious',
    'pcbee'
];

const bees = [];

combVariants.forEach((bee) => {
    bees.push(bee);
});

let moreBees = [
    // 开发
    'kitten',
    'oreo',
    'starry_lexxie',
    'yeti',
    // 手动
    'abbee'
];

moreBees.forEach((bee) => {
    bees.push(bee);
});
