//priority: 1000

const fires = [
    'minecraft:fire', //
    'minecraft:soul_fire',
    'byg:boric_fire',
    'byg:cryptic_fire',
    'occultism:spirit_fire'
];

const campfires = [
    'minecraft:campfire',
    'minecraft:soul_campfire',
    'byg:boric_campfire',
    'byg:cryptic_campfire',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'valhelsia_structures:brazier'
];

// 其他非火焰或营火的热源方块
const heatSources = [
    'minecraft:lava',
    'minecraft:magma_block',
    'botania:blaze_block',
    'byg:cryptic_magma_block',
    'byg:magmatic_stone',
    'create:lit_blaze_burner',
    'farmersdelight:stove',
    'quark:magma_bricks',
    'quark:magma_bricks_slab',
    'quark:magma_bricks_stairs',
    'quark:magma_bricks_vertical_slab',
    'quark:magma_bricks_wall'
];

// 顶面非实心的热源（不含火和营火）
const nonSolidHeatSources = ['minecraft:lava', 'create:lit_blaze_burner'];
