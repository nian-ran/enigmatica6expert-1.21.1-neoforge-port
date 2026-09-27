// 配方类型：naturesaura:tree_ritual
// 中文名称：树木仪式
// 用途：用于登记自然灵气的树木仪式配方。

(function () {
if (['alexsmobs', 'astralsorcery', 'atum', 'botania', 'eidolon_repraised', 'meetyourfight', 'resourcefulbees', 'tconstruct', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const time_multiplier = 10,
        id_prefix = 'enigmatica:expert/naturesaura/tree_ritual/';

    const recipes = [
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'botania:pink_shiny_flower',
                'naturesaura:gold_leaf',
                'minecraft:golden_apple',
                'architects_palette:sunmetal_blend',
                'botania:pink_shiny_flower',
                'architects_palette:sunmetal_blend',
                'botania:pink_shiny_flower'
            ],
            output: '2x naturesaura:token_joy',
            time: 2 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_joy'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'upgrade_aquatic:thrasher_tooth',
                'naturesaura:gold_leaf',
                'eidolon_repraised:ender_calx',
                'astralsorcery:nocturnal_powder',
                'upgrade_aquatic:thrasher_tooth',
                'astralsorcery:nocturnal_powder',
                'upgrade_aquatic:thrasher_tooth'
            ],
            output: '2x naturesaura:token_fear',
            time: 2 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_fear'
        },
        {
            ingredients: [
                'quark:bottled_cloud',
                'powah:charged_snowball',
                'naturesaura:gold_leaf',
                'minecraft:diamond_axe[minecraft:damage=0]',
                'alexsmobs:komodo_spit',
                'powah:charged_snowball',
                'alexsmobs:komodo_spit',
                'powah:charged_snowball'
            ],
            output: '2x naturesaura:token_anger',
            time: 2 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_anger'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'botania:black_shiny_flower',
                'naturesaura:gold_leaf',
                'quark:soul_bead',
                'minecraft:ghast_tear',
                'botania:black_shiny_flower',
                'minecraft:ghast_tear',
                'botania:black_shiny_flower'
            ],
            output: '2x naturesaura:token_sorrow',
            time: 2 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_sorrow'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:sunstone',
                'ars_nouveau:sylph_shards',
                'naturesaura:token_joy',
                'thermal:phytogro',
                'botania:livingwood',
                'thermal:phytogro',
                'botania:livingwood'
            ],
            output: 'naturesaura:oak_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:oak_generator'
        },
        {
            ingredients: [
                'naturesaura:tainted_gold',
                'architects_palette:moonstone',
                'eidolon_repraised:reaper_scythe[minecraft:damage=0]',
                'naturesaura:token_sorrow',
                '#forge:ingots/nether_brick',
                'minecraft:soul_sand',
                '#forge:ingots/nether_brick',
                'minecraft:soul_sand'
            ],
            output: 'naturesaura:animal_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:animal_generator'
        },
        {
            ingredients: [
                'naturesaura:sky_ingot',
                'kubejs:firmament',
                'ars_nouveau:glyph_launch',
                'minecraft:fire_charge',
                'minecraft:firework_rocket',
                'naturesaura:token_joy',
                'minecraft:firework_rocket',
                'naturesaura:token_rage'
            ],
            output: 'naturesaura:firework_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:firework_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:sunstone',
                'ars_nouveau:glyph_harvest',
                'naturesaura:token_joy',
                'botania:livingwood',
                'botania:livingwood',
                'botania:livingwood',
                'botania:livingwood'
            ],
            output: 'naturesaura:flower_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:flower_generator'
        },
        {
            ingredients: [
                'naturesaura:tainted_gold',
                'architects_palette:moonstone',
                'ars_nouveau:glyph_split',
                'supplementaries:bamboo_spikes',
                '#forge:ingots/nether_brick',
                'naturesaura:token_sorrow',
                '#forge:ingots/nether_brick',
                'naturesaura:token_joy'
            ],
            output: 'naturesaura:slime_split_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:slime_split_generator'
        },
        {
            ingredients: [
                'eidolon_repraised:ender_calx',
                'quark:ender_watcher',
                'ars_nouveau:glyph_blink',
                'minecraft:chorus_flower',
                'integratedterminals:chorus_glass',
                'naturesaura:token_joy',
                'integratedterminals:chorus_glass',
                'naturesaura:token_rage'
            ],
            output: 'naturesaura:chorus_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:chorus_generator'
        },
        {
            ingredients: [
                'naturesaura:tainted_gold',
                'architects_palette:moonstone',
                'ars_nouveau:glyph_aoe',
                'naturesaura:token_fear',
                'eidolon_repraised:fungus_sprouts',
                '#forge:ingots/nether_brick',
                'eidolon_repraised:fungus_sprouts',
                '#forge:ingots/nether_brick'
            ],
            output: 'naturesaura:potion_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:potion_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'ars_nouveau:glyph_wither',
                'naturesaura:token_terror',
                'naturesaura:token_grief',
                'architects_palette:moonstone',
                'architects_palette:sunstone',
                'botania:mossy_livingwood_planks',
                'botania:mossy_livingwood_planks'
            ],
            output: 'naturesaura:moss_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:moss_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:sunstone',
                'ars_nouveau:glyph_amplify',
                'ars_nouveau:glyph_projectile',
                'rsgauges:arrow_target',
                'naturesaura:token_anger',
                'rsgauges:arrow_target',
                'naturesaura:token_anger'
            ],
            output: 'naturesaura:projectile_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:projectile_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:moonstone',
                'ars_nouveau:glyph_grow',
                'naturesaura:token_joy',
                'astralsorcery:rock_crystal',
                '#forge:ingots/starmetal',
                'astralsorcery:rock_crystal',
                '#forge:ingots/starmetal'
            ],
            output: 'naturesstarlight:crystal_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesstarlight:crystal_generator'
        },
        {
            ingredients: [
                'naturesaura:token_joy',
                'resourcefulbees:t2_apiary',
                '#botania:runes/summer',
                '#botania:runes/spring',
                '#resourcefulbees:resourceful_honeycomb_block',
                '#resourcefulbees:resourceful_honeycomb_block',
                '#resourcefulbees:resourceful_honey_block',
                '#resourcefulbees:resourceful_honey_block'
            ],
            output: 'resourcefulbees:t3_apiary',
            time: 3 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'resourcefulbees:t3_apiary'
        },
        {
            ingredients: [
                'meetyourfight:spectres_eye',
                '#forge:ingots/silver',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'farmersdelight:tree_bark',
                'farmersdelight:tree_bark',
                'farmersdelight:tree_bark',
                'farmersdelight:tree_bark'
            ],
            output: 'naturesaura:eye',
            time: 2 * time_multiplier,
            sapling: 'quark:pink_blossom_sapling',
            id: 'naturesaura:tree_ritual/eye'
        },
        {
            ingredients: [
                'naturesaura:eye',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                'naturesaura:end_flower',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'botania:lens_normal',
                'upgrade_aquatic:elder_eye'
            ],
            output: 'naturesaura:eye_improved',
            time: 5 * time_multiplier,
            sapling: 'quark:pink_blossom_sapling',
            id: 'naturesaura:tree_ritual/eye_improved'
        },
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                'botania:brewery',
                '#forge:ingots/sky',
                'naturesaura:gold_leaf',
                'eidolon_repraised:gold_inlay'
            ],
            output: 'naturesaura:conversion_catalyst',
            time: 6 * time_multiplier,
            sapling: 'quark:orange_blossom_sapling',
            id: 'naturesaura:tree_ritual/conversion_catalyst'
        },
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                '#forge:ingots/andesite_alloy',
                '#forge:ingots/andesite_alloy',
                'naturesaura:token_anger'
            ],
            output: 'naturesaura:crushing_catalyst',
            time: 6 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/crushing_catalyst'
        },
        {
            ingredients: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/infused_iron',
                'minecraft:fire_charge',
                'minecraft:flint_and_steel[minecraft:damage=0]',
                'tconstruct:magma_cake',
                'naturesaura:token_anger'
            ],
            sapling: 'quark:red_blossom_sapling',
            output: 'naturesaura:furnace_heater',
            time: 6 * time_multiplier,
            id: 'naturesaura:tree_ritual/furnace_heater'
        },
        {
            ingredients: [
                '#forge:gems/mana_diamond',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/sky',
                'naturesaura:token_fear'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:break_prevention',
            time: 2 * time_multiplier,
            id: 'naturesaura:tree_ritual/break_prevention'
        },
        {
            ingredients: [
                'atum:palm_sapling',
                'atum:date',
                'undergarden:veil_mushroom',
                'atum:emmer_seeds',
                'undergarden:glowing_kelp',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: '2x naturesaura:ancient_sapling',
            time: 2 * time_multiplier,
            id: 'naturesaura:tree_ritual/ancient_sapling'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ores/emerald',
                '#forge:ores/cobalt',
                '#botania:runes/spring'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 4, '{effect:"naturesaura:ore_spawn"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/ore_spawn_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'botania:ender_eye_block',
                'naturesaura:aura_cache',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 32, '{effect:"naturesaura:cache_recharge"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/cache_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/infused_iron',
                'ars_nouveau:ritual_fertility',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 8, '{effect:"naturesaura:animal"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/animal_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/tainted_gold',
                'atum:emmer',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 24, '{effect:"naturesaura:plant_boost"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/plant_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/tainted_gold',
                'minecraft:crimson_nylium',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 24, '{effect:"naturesaura:nether_grass"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/nether_grass_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:resonating_gem',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:resonating_gem',
                'astralsorcery:resonating_gem',
                'astralsorcery:nocturnal_powder'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 8, '{effect:"naturesstarlight:starlight_increase"}'),
            time: 4 * time_multiplier,
            id: 'naturesstarlight:tree_ritual/starlight_increase_powder'
        },
        {
            ingredients: [
                'eidolon_repraised:basic_amulet',
                '#forge:ingots/tainted_gold',
                'tconstruct:efln_ball',
                'kubejs:firmament',
                'naturesaura:token_anger'
            ],
            sapling: 'quark:red_blossom_sapling',
            output: 'naturesaura:shockwave_creator',
            time: 4 * time_multiplier,
            id: `${id_prefix}shockwave_creator`
        },
        {
            ingredients: [
                'minecraft:conduit',
                'astralsorcery:resonating_gem',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: 'botania:brewery',
            time: 4 * time_multiplier,
            id: `${id_prefix}brewery`
        },
        {
            ingredients: [
                'ars_nouveau:summoning_crystal',
                Item.of('naturesaura:aura_cache', '{aura:400000}'),
                'naturesaura:token_anger',
                'naturesaura:token_joy',
                'botania:overgrowth_seed',
                '#forge:storage_blocks/infused_iron',
                'botania:overgrowth_seed',
                '#forge:storage_blocks/infused_iron'
            ],
            sapling: 'quark:blue_blossom_sapling',
            output: 'naturesaura:animal_spawner',
            time: 20 * time_multiplier,
            id: `${id_prefix}animal_spawner`
        }

        /*
            ,
            {
                ingredients: [
                    item, //上
                    item, //下
                    item, //左
                    item, //右

                    item, //左上
                    item, //右下
                    item, //右上
                    item //左下
                output: 'naturesaura:oak_generator',
                sapling: 'quark:yellow_blossom_sapling',
                id: 'naturesaura:oak_generator'
            }
            */
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
// 将 E6E 普通模式的 Nature's Aura 树仪式配方加入专家模式。
if (e6ePortedRecipeModLoaded('naturesaura')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;
const recipes = [
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                'minecraft:brewing_stand',
                'naturesaura:sky_ingot',
                'naturesaura:gold_leaf',
                'minecraft:glowstone'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: 'naturesaura:conversion_catalyst',
            time: 600,
            id: 'naturesaura:tree_ritual/conversion_catalyst'
        },
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                'minecraft:piston',
                'minecraft:flint',
                'naturesaura:token_anger'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:crushing_catalyst',
            time: 600,
            id: 'naturesaura:tree_ritual/crushing_catalyst'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'naturesaura:sky_ingot',
                'naturesaura:aura_cache'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output:  { effectPowder: 'naturesaura:cache_recharge', count: 32 } ,
            time: 400,
            id: 'naturesaura:tree_ritual/cache_powder'
        },
        {
            ingredients: ['naturesaura:gold_powder', 'naturesaura:gold_powder', 'naturesaura:sky_ingot', 'minecraft:egg'],
            sapling: 'quark:lavender_blossom_sapling',
            output:  { effectPowder: 'naturesaura:animal', count: 8 } ,
            time: 400,
            id: 'naturesaura:tree_ritual/animal_powder'
        },
        {
            ingredients: ['naturesaura:gold_powder', 'naturesaura:gold_powder', 'naturesaura:sky_ingot', 'minecraft:wheat'],
            sapling: 'quark:yellow_blossom_sapling',
            output:  { effectPowder: 'naturesaura:plant_boost', count: 24 } ,
            time: 400,
            id: 'naturesaura:tree_ritual/plant_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                ["minecraft:diamond_ore", "minecraft:deepslate_diamond_ore"],
                ["minecraft:redstone_ore", "minecraft:deepslate_redstone_ore"]
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output:  { effectPowder: 'naturesaura:ore_spawn', count: 4 } ,
            time: 400,
            id: 'naturesaura:tree_ritual/ore_spawn_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'minecraft:netherrack',
                'minecraft:short_grass'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output:  { effectPowder: 'naturesaura:nether_grass', count: 24 } ,
            time: 400,
            id: 'naturesaura:tree_ritual/nether_grass_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'astralsorcery:illumination_powder',
                'astralsorcery:aquamarine'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output:  { effectPowder: 'naturesstarlight:starlight_increase', count: 8 } ,
            time: 400,
            id: 'naturesstarlight:tree_ritual/starlight_increase_powder'
        },
        {
            ingredients: [
                'minecraft:diamond',
                'naturesaura:tainted_gold',
                'naturesaura:sky_ingot',
                'naturesaura:token_fear'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:break_prevention',
            time: 200,
            id: 'naturesaura:tree_ritual/break_prevention'
        },
        {
            ingredients: [
                '#minecraft:saplings',
                'minecraft:dandelion',
                'minecraft:poppy',
                'minecraft:wheat_seeds',
                'minecraft:sugar_cane',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:ancient_sapling',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/ancient_sapling'
        },
        {
            ingredients: [
                { auraBottle: 'naturesaura:overworld' },
                'naturesaura:gold_leaf',
                '#minecraft:small_flowers',
                'minecraft:apple',
                'minecraft:torch',
                'minecraft:iron_ingot'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_joy',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_joy'
        },
        {
            ingredients: [
                { auraBottle: 'naturesaura:nether' },
                'naturesaura:gold_leaf',
                'minecraft:rotten_flesh',
                'minecraft:feather',
                'minecraft:bone',
                'minecraft:soul_sand'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_fear',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_fear'
        },
        {
            ingredients: [
                { auraBottle: 'naturesaura:nether' },
                'naturesaura:gold_leaf',
                'minecraft:magma_block',
                'minecraft:blaze_powder',
                'minecraft:gunpowder',
                'minecraft:ender_pearl'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_anger',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_anger'
        },
        {
            ingredients: [
                'minecraft:stone',
                'minecraft:stone',
                'minecraft:stone',
                'naturesaura:gold_leaf',
                'minecraft:gold_ingot',
                'naturesaura:token_joy'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:nature_altar',
            time: 500,
            id: 'naturesaura:tree_ritual/nature_altar'
        },
        {
            ingredients: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:tainted_gold',
                'naturesaura:infused_iron',
                'minecraft:fire_charge',
                'minecraft:flint',
                'minecraft:magma_block',
                'naturesaura:token_fear'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:furnace_heater',
            time: 600,
            id: 'naturesaura:tree_ritual/furnace_heater'
        },
        {
            ingredients: [
                'naturesaura:eye',
                'naturesaura:sky_ingot',
                'naturesaura:sky_ingot',
                'naturesaura:end_flower',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:eye_improved',
            time: 500,
            id: 'naturesaura:tree_ritual/eye_improved'
        },
        {
            ingredients: [
                'minecraft:spider_eye',
                'minecraft:gold_ingot',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:eye',
            time: 250,
            id: 'naturesaura:tree_ritual/eye'
        }

        
    ];
    const auraBottle = (type) => ({
        type: 'neoforge:components',
        components: { 'naturesaura:aura_bottle_data': { aura_type: type } },
        items: 'naturesaura:aura_bottle'
    });
    const asIngredient = (input) => {
        if (input && input.auraBottle) return auraBottle(input.auraBottle);
        if (Array.isArray(input)) {
            if (!input.some((value) => e6eRecipeIngredientExists(value))) return null;
            return Ingredient.of(input.filter((value) => e6eRecipeIngredientExists(value))).toJson();
        }
        if (!e6eRecipeIngredientExists(input)) return null;
        return Ingredient.of(input).toJson();
    };

    recipes.forEach((recipe) => {
        try {
        if (!e6ePortedItemExists(recipe.sapling)) return;
        if (typeof recipe.output === 'string' && !e6ePortedItemExists(recipe.output)) return;
        if (recipe.output && recipe.output.effectPowder && !e6ePortedItemExists('naturesaura:effect_powder')) return;
        var ingredients = recipe.ingredients.map(asIngredient);
        if (ingredients.some((ingredient) => ingredient == null)) return;
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = ingredients;
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = recipe.output && recipe.output.effectPowder
            ? {
                id: 'naturesaura:effect_powder',
                count: recipe.output.count,
                components: {
                    'naturesaura:effect_powder_data': { effect: recipe.output.effectPowder }
                }
            }
            : { id: recipe.output, count: recipe.count || 1 };
        event.custom(recipe).id(recipe.id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id}: ${error}`);
        }
    });
});
}
})();
