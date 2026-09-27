//priority: 1001

const air = 'minecraft:air';

// 如有多个模组可提供产物，按此优先级选择。
const modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'kubejs',
    'pneumaticcraft',
    'create',
    'occultism',
    'industrialforegoing',
    'botania',
    'quark',
    'pedestals',
    'refinedstorage',
    'mapperbase',
    'bloodmagic',
    'eidolon',
    'morevanillalib',
    'titanium',
    'mythicbotany',
    'undergarden',
    'byg',
    'atum',
    'betterendforge',
    'miniutilities',
    'chipped',
    'chisel',
    'tconstruct'
];

const lootChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest'];

// 供按颜色生成的配方或标签使用
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

// Quark 水晶簇颜色

const quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

// 用于生成标签
const createStoneTypes = [
    'scoria',
    'limestone',
    'weathered_limestone',
    'dolomite',
    'gabbro',
    'dark_scoria',
    'natural_scoria'
];

const sign_wood_type_blacklist = [
    'aspen',
    'bloodshroom',
    'cherry',
    'deadwood',
    'dragon_tree',
    'driftwood',
    'end_lotus',
    'greenheart',
    'grimwood',
    'grongle',
    'helix_tree',
    'jellyshroom',
    'kousa',
    'lacugrove',
    'lucernia',
    'morado',
    'mossy_glowshroom',
    'palm',
    'pythadendron',
    'river',
    'rosewood',
    'sakura',
    'skyroot',
    'smogstem',
    'tenanea',
    'umbrella_tree',
    'wigglewood',
    'willow',
    'wisteria',
    'yucca'
];

const chest_wood_type_blacklist = [
    'aspen',
    'cherry',
    'dragon_tree',
    'driftwood',
    'grimwood',
    'helix_tree',
    'jellyshroom',
    'kousa',
    'lacugrove',
    'lucernia',
    'morado',
    'mossy_glowshroom',
    'pythadendron',
    'river',
    'rosewood',
    'tenanea',
    'umbrella_tree',
    'willow',
    'wisteria',
    'yucca'
];

const normalMode = global.packmode == 'normal';
const expertMode = global.packmode == 'expert';
