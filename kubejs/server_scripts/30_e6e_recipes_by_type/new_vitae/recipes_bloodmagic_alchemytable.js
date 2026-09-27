// 配方类型：bloodmagic:alchemytable
// 中文名称：炼金桌
// 用途：用于登记血魔法的炼金桌配方。

(function () {
if (['bloodmagic', 'byg', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/alchemytable/';

    recipes = [
        {
            inputs: ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'],
            output: 'minecraft:flint',
            count: 3,
            syphon: 50,
            ticks: 20,
            orbLevel: 0,
            id: 'bloodmagic:alchemytable/flint_from_gravel'
        },
        {
            inputs: ['#forge:crops/potato', '#forge:crops/potato', '#forge:crops/potato', 'minecraft:bone_meal'],
            output: 'bloodmagic:plantoil',
            count: 1,
            syphon: 100,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/plantoil_from_taters'
        },
        {
            inputs: ['#forge:crops', '#forge:crops', '#forge:crops', 'minecraft:bone_meal'],
            output: 'bloodmagic:plantoil',
            count: 1,
            syphon: 100,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/plantoil_from_wheat'
        },
        {
            inputs: ['minecraft:coal', 'minecraft:coal'],
            output: 'emendatusenigmatica:coal_dust',
            count: 2,
            syphon: 400,
            ticks: 200,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/sand_coal'
        },
        {
            inputs: ['#minecraft:wool'],
            output: 'minecraft:string',
            count: 4,
            syphon: 100,
            ticks: 100,
            orbLevel: 0,
            id: 'bloodmagic:alchemytable/string'
        },
        {
            inputs: ['#forge:sand', '#forge:sand', 'minecraft:water_bucket'],
            output: 'minecraft:clay',
            count: 2,
            syphon: 50,
            ticks: 100,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/clay_from_sand'
        },
        {
            inputs: ['#forge:sand', '#forge:sand', 'bloodmagic:watersigil'],
            output: 'minecraft:clay',
            count: 2,
            syphon: 150,
            ticks: 100,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/clay_from_sand_sigil'
        },
        {
            inputs: ['#forge:rods/blaze'],
            output: 'minecraft:blaze_powder',
            count: 4,
            syphon: 50,
            ticks: 20,
            orbLevel: 1,
            id: `${id_prefix}blaze_powder`
        },
        {
            inputs: ['#forge:rods/basalz'],
            output: 'thermal:basalz_powder',
            count: 4,
            syphon: 50,
            ticks: 20,
            orbLevel: 1,
            id: `${id_prefix}basalz_powder`
        },
        {
            inputs: ['#forge:rods/blizz'],
            output: 'thermal:blizz_powder',
            count: 4,
            syphon: 50,
            ticks: 20,
            orbLevel: 1,
            id: `${id_prefix}blizz_powder`
        },
        {
            inputs: ['#forge:rods/blitz'],
            output: 'thermal:blitz_powder',
            count: 4,
            syphon: 50,
            ticks: 20,
            orbLevel: 1,
            id: `${id_prefix}blitz_powder`
        },
        {
            inputs: ['minecraft:dirt', 'minecraft:bone_meal', '#forge:mushrooms'],
            output: 'minecraft:mycelium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}mycelium`
        },
        {
            inputs: ['minecraft:dirt', 'minecraft:bone_meal', '#minecraft:leaves'],
            output: 'minecraft:podzol',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}podzol`
        },
        {
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand'],
            output: 'minecraft:quartz',
            count: 3,
            syphon: 50,
            ticks: 20,
            orbLevel: 0,
            id: `${id_prefix}quartz`
        },
        {
            inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:bulbis_sprouts'],
            output: 'byg:bulbis_phycelium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}bulbis_phycelium`
        },
        {
            inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:imparius_vine'],
            output: 'byg:imparius_phylium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}imparius_phylium`
        },
        {
            inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:shulkren_moss_blanket'],
            output: 'byg:shulkren_phylium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}shulkren_phylium`
        },
        {
            inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:nightshade_sprouts'],
            output: 'byg:nightshade_phylium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}nightshade_phylium`
        },
        {
            inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:ivis_sprout'],
            output: 'byg:ivis_phylium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}ivis_phylium`
        },
        {
            inputs: ['byg:ether_soil', 'minecraft:bone_meal', 'byg:ether_foliage'],
            output: 'byg:ether_phylium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}ether_phylium`
        },
        {
            inputs: ['minecraft:dirt', 'minecraft:bone_meal', 'byg:ether_foliage'],
            output: 'byg:ether_soil',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}ether_soil`
        },
        {
            inputs: ['byg:ether_stone', 'minecraft:bone_meal', 'byg:vermilion_sculk_growth'],
            output: 'byg:vermilion_sculk',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}vermilion_sculk`
        },
        {
            inputs: ['minecraft:netherrack', 'minecraft:bone_meal', '#forge:mushrooms'],
            output: 'byg:mycelium_netherrack',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}mycelium_netherrack`
        },
        {
            inputs: ['#forge:dusts/sulfur', 'industrialforegoing:dryrubber', 'industrialforegoing:dryrubber'],
            output: 'thermal:cured_rubber',
            count: 2,
            syphon: 400,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}cured_rubber`
        },
        {
            inputs: ['minecraft:end_stone', 'minecraft:bone_meal', '#forge:mushrooms'],
            output: 'betterendforge:end_mycelium',
            count: 1,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}end_mycelium`
        },
        {
            inputs: ['minecraft:nether_wart_block'],
            output: 'minecraft:nether_wart',
            count: 4,
            syphon: 50,
            ticks: 40,
            orbLevel: 0,
            id: 'bloodmagic:alchemytable/nether_wart_from_block'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel)
            .id(recipe.id);
    });
});

}
})();

(function () {
if (['alexsmobs', 'astralsorcery', 'atum', 'bloodmagic', 'botania', 'eidolon_repraised', 'meetyourfight', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/bloodmagic/alchemytable/';
    const recipes = [
        {
            inputs: ['ars_nouveau:magic_clay', 'minecraft:blaze_powder'],
            output: 'bloodmagic:arcaneashes',
            count: 1,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/arcane_ash'
        },
        {
            inputs: ['alexsmobs:komodo_spit', 'alexsmobs:rattlesnake_rattle', '#forge:dusts/charcoal'],
            output: 'kubejs:cutting_essence',
            count: 8,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: `${id_prefix}cutting_essence`
        },
        {
            inputs: ['bloodmagic:plantoil', 'kubejs:cutting_essence'],
            output: 'bloodmagic:basiccuttingfluid',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/basic_cutting_fluid'
        },
        {
            inputs: [
                'undergarden:glowing_kelp',
                '#forge:dusts/regalium',
                '#forge:dusts/regalium',
                '#forge:dusts/regalium',
                '#forge:dusts/regalium'
            ],
            output: 'astralsorcery:illumination_powder',
            count: 16,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: 'astralsorcery:altar/illumination_powder'
        },
        {
            inputs: [
                'undergarden:ink_mushroom',
                '#forge:dusts/obsidian',
                '#forge:dusts/obsidian',
                'astralsorcery:illumination_powder'
            ],
            output: 'astralsorcery:nocturnal_powder',
            count: 4,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: 'astralsorcery:altar/nocturnal_powder'
        },
        {
            inputs: [
                'bloodmagic:plantoil',
                'occultism:burnt_otherstone',
                'occultism:burnt_otherstone',
                'occultism:otherworld_ashes',
                'occultism:otherworld_ashes',
                'occultism:otherworld_ashes'
            ],
            output: 'occultism:chalk_white_impure',
            count: 1,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: 'occultism:crafting/chalk_white_impure'
        },
        {
            inputs: [
                'bloodmagic:plantoil',
                'occultism:chalk_white_impure',
                'architects_palette:sunmetal_blend',
                'naturesaura:gold_powder'
            ],
            output: 'occultism:chalk_gold_impure',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 2,
            id: 'occultism:crafting/chalk_gold_impure'
        },
        {
            inputs: [
                'bloodmagic:plantoil',
                'occultism:chalk_white_impure',
                'betterendforge:enchanted_petal',
                'eidolon_repraised:ender_calx'
            ],
            output: 'occultism:chalk_purple_impure',
            count: 1,
            syphon: 1500,
            ticks: 200,
            orbLevel: 3,
            id: 'occultism:crafting/chalk_purple_impure'
        },
        {
            inputs: [
                'bloodmagic:plantoil',
                'occultism:chalk_white_impure',
                'occultism:afrit_essence',
                'create:cinder_flour'
            ],
            output: 'occultism:chalk_red_impure',
            count: 1,
            syphon: 5000,
            ticks: 200,
            orbLevel: 4,
            id: 'occultism:crafting/chalk_red_impure'
        },
        {
            inputs: [
                'alexsmobs:bone_serpent_tooth',
                '#forge:dusts/sulfur',
                'minecraft:magma_cream',
                'ars_nouveau:red_archwood_wood'
            ],
            output: 'bloodmagic:reagentlava',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 0,
            id: 'bloodmagic:alchemytable/reagent_lava'
        },
        {
            inputs: ['#minecraft:saplings', '#minecraft:saplings', 'minecraft:sugar_cane', 'thermal:phytogro'],
            output: 'bloodmagic:reagentgrowth',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/reagent_growth'
        },
        {
            inputs: [
                'eidolon_repraised:ender_calx',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:nocturnal_powder'
            ],
            output: 'bloodmagic:reagentvoid',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/reagent_void'
        },
        {
            inputs: ['quark:bottled_cloud', 'alexsmobs:tarantula_hawk_wing_fragment', 'ars_nouveau:wilden_wing'],
            output: 'bloodmagic:reagentair',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/reagent_air'
        },
        {
            inputs: [
                'upgrade_aquatic:thrasher_tooth',
                '#forge:dusts/lapis',
                'minecraft:prismarine_shard',
                'minecraft:kelp'
            ],
            output: 'bloodmagic:reagentwater',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/reagent_water'
        },
        {
            inputs: [
                'alexsmobs:kangaroo_hide',
                'alexsmobs:kangaroo_hide',
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber'
            ],
            output: 'bloodmagic:reagentholding',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/reagent_holding'
        },
        {
            inputs: ['minecraft:lodestone', 'ars_nouveau:mana_fiber', 'eidolon_repraised:gold_inlay'],
            output: 'bloodmagic:reagentmagnetism',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 3,
            id: 'bloodmagic:alchemytable/reagent_magnetism'
        },
        {
            inputs: [
                'occultism:afrit_essence',
                Item.of('botania:brew_flask', '{brewKey:"botania:bloodthirst"}'),
                'eidolon_repraised:crimson_essence'
            ],
            output: 'bloodmagic:weakbloodshard',
            count: 2,
            syphon: 20000,
            ticks: 200,
            orbLevel: 3,
            id: `${id_prefix}weakbloodshard_from_flask`
        },
        {
            inputs: [
                'occultism:afrit_essence',
                Item.of('botania:incense_stick', '{brewKey:"botania:bloodthirst"}'),
                'eidolon_repraised:crimson_essence'
            ],
            output: 'bloodmagic:weakbloodshard',
            count: 10,
            syphon: 20000,
            ticks: 200,
            orbLevel: 4,
            id: `${id_prefix}weakbloodshard_from_incense`
        },
        {
            inputs: [
                ['minecraft:crimson_roots', 'undergarden:blisterberry'],
                '#forge:crops/nether_wart',
                '#forge:dusts/sulfur'
            ],
            output: 'eidolon_repraised:crimson_essence',
            count: 2,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}crimson_essence`
        },
        {
            inputs: [
                'eidolon_repraised:zombie_heart',
                'undergarden:raw_dweller_meat',
                'undergarden:ditchbulb',
                'projectvibrantjourneys:charred_bones',
                'undergarden:ink_mushroom'
            ],
            output: 'eidolon_repraised:death_essence',
            count: 4,
            syphon: 200,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}death_essence`
        },
        {
            inputs: [
                'aquaculture:fish_bones',
                '#forge:dusts/lapis',
                'minecraft:fermented_spider_eye',
                'undergarden:raw_dweller_meat'
            ],
            output: 'meetyourfight:fossil_bait',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 2,
            id: `${id_prefix}fossil_bait`
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/silver',
                'undergarden:shimmerweed'
            ],
            output: 'bloodmagic:holy_water_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/holy_water_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/regalium',
                'undergarden:underbeans'
            ],
            output: 'bloodmagic:looting_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/looting_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/froststeel',
                'undergarden:dweller_steak'
            ],
            output: 'bloodmagic:melee_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/melee_damage_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/cloggrum',
                'undergarden:veil_mushroom'
            ],
            output: 'bloodmagic:hidden_knowledge_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/hidden_knowledge_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/regalium',
                'undergarden:indigo_mushroom'
            ],
            output: 'bloodmagic:fortune_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/fortune_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/iron',
                'undergarden:depthrock_pebble'
            ],
            output: 'bloodmagic:bow_power_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/bow_power_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/uranium',
                'undergarden:ditchbulb'
            ],
            output: 'bloodmagic:smelting_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/smelting_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/cloggrum',
                'undergarden:goo_ball'
            ],
            output: 'bloodmagic:silk_touch_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/silk_touch_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                '#forge:nuggets/aluminum',
                'undergarden:raw_gloomper_leg'
            ],
            output: 'bloodmagic:quick_draw_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/quick_draw_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'undergarden:utheric_shard',
                'undergarden:raw_gwibling'
            ],
            output: 'bloodmagic:bow_velocity_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/bow_velocity_anointment'
        },
        {
            inputs: [
                'undergarden:glowing_kelp',
                'glassential:glass_ghostly',
                'glassential:glass_ghostly',
                'bloodmagic:divinationsigil'
            ],
            output: 'bloodmagic:reagentsight',
            count: 1,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/reagent_sight'
        },
        {
            inputs: [
                'undergarden:roasted_underbeans',
                'undergarden:roasted_underbeans',
                'undergarden:roasted_underbeans',
                'undergarden:gloomper_leg',
                'undergarden:cloggrum_ingot',
                'undergarden:blisterberry'
            ],
            output: 'bloodmagic:reagentfastminer',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 2,
            id: 'bloodmagic:alchemytable/reagent_fastminer'
        },
        {
            inputs: [
                'undergarden:glowing_kelp',
                'undergarden:droopvine_item',
                'undergarden:droopvine_item',
                'undergarden:shard_torch'
            ],
            output: 'bloodmagic:reagentbloodlight',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 3,
            id: 'bloodmagic:alchemytable/reagent_blood_light'
        },
        {
            inputs: [
                '#forge:ingots/utherium',
                'undergarden:blood_mushroom',
                'undergarden:goo_ball',
                '#forge:nuggets/regalium'
            ],
            output: 'bloodmagic:reagentbinding',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 3,
            id: 'bloodmagic:alchemytable/reagent_binding'
        },
        {
            inputs: ['quark:green_rune', 'quark:red_rune'],
            output: 'quark:brown_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}brown_rune`
        },
        {
            inputs: ['quark:blue_rune', 'quark:red_rune'],
            output: 'quark:purple_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}purple_rune`
        },
        {
            inputs: ['quark:blue_rune', 'quark:yellow_rune'],
            output: 'quark:green_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}green_rune`
        },
        {
            inputs: ['quark:blue_rune', 'quark:green_rune'],
            output: 'quark:cyan_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}cyan_rune`
        },
        {
            inputs: ['quark:white_rune', 'quark:red_rune'],
            output: 'quark:pink_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}pink_rune`
        },
        {
            inputs: ['quark:white_rune', 'quark:black_rune'],
            output: 'quark:gray_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}gray_rune`
        },
        {
            inputs: ['quark:white_rune', 'quark:gray_rune'],
            output: 'quark:light_gray_rune',
            count: 2,
            syphon: 500,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}light_gray_rune`
        },
        {
            inputs: ['bloodmagic:basiccuttingfluid', 'bloodmagic:tauoil', 'bloodmagic:lavasigil'],
            output: 'bloodmagic:intermediatecuttingfluid',
            count: 2,
            syphon: 2100,
            ticks: 200,
            orbLevel: 3,
            id: `${id_prefix}intermediatecuttingfluid`
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"eidolon_repraised:anchored"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:anchor_plate',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/anchor_plate'
        },
        {
            inputs: ['darkutils:blank_plate', 'occultism:datura', 'bloodmagic:watersigil'],
            output: 'darkutils:rune_nausea',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_nausea'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_blindness',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_blindness'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"atmospheric:worsening"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_hunger',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_hunger'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"undergarden:glowing"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_glowing',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_glowing'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"apotheosis:fatigue"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_fatigue',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_fatigue'
        },
        {
            inputs: ['darkutils:blank_plate', 'alexsmobs:lava_bottle', 'bloodmagic:lavasigil'],
            output: 'darkutils:rune_fire',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_fire'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"apotheosis:wither"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_wither',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_wither'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"minecraft:slowness"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_slowness',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_slowness'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"minecraft:weakness"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_weakness',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_weakness'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"minecraft:poison"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_poison',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_poison'
        },
        {
            inputs: [
                'darkutils:blank_plate',
                'minecraft:potion[minecraft:potion_contents={potion:"minecraft:harming"}]',
                'bloodmagic:watersigil'
            ],
            output: 'darkutils:rune_damage',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: 'darkutils:crafting/rune_damage'
        },
        {
            inputs: [
                'atum:nuit_godshard',
                'astralsorcery:nocturnal_powder',
                'eidolon_repraised:death_essence',
                'eidolon_repraised:death_essence',
                'eidolon_repraised:soul_shard',
                'eidolon_repraised:soul_shard'
            ],
            output: 'eidolon_repraised:shadow_gem',
            count: 1,
            syphon: 300,
            ticks: 200,
            orbLevel: 1,
            id: `${id_prefix}shadow_gem`
        },
        {
            inputs: ['#forge:ingots/silicon_bronze', '#forge:shards/ender', 'eidolon_repraised:enchanted_ash'],
            output: 'bloodmagic:teleposerfocus',
            count: 1,
            syphon: 50,
            ticks: 20,
            orbLevel: 1,
            id: `${id_prefix}teleposerfocus`
        }
    ];

    const patchouli_safe_removals = [
        { output: 'bloodmagic:itemrouterfiltercomposite', id: 'bloodmagic:alchemytable/composite_router_filter' },
        { output: 'bloodmagic:itemrouterfiltermoditems', id: 'bloodmagic:alchemytable/mod_router_filter' },
        { output: 'bloodmagic:itemrouterfilterenchant', id: 'bloodmagic:alchemytable/enchant_router_filter' },
        { output: 'bloodmagic:itemrouterfilteroredict', id: 'bloodmagic:alchemytable/mod_router_filter' },
        { output: 'bloodmagic:itemrouterfilterexact', id: 'bloodmagic:alchemytable/router_filter' },
        { output: 'bloodmagic:componentframeparts', id: 'bloodmagic:alchemytable/mod_router_filter' },
        { output: 'bloodmagic:basiccuttingfluid', id: 'bloodmagic:alchemytable/basic_cutting_fluid_sigil' }
    ];

    patchouli_safe_removals.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, 1), 'kubejs:altered_recipe_indicator')
            .syphon(1)
            .ticks(1)
            .upgradeLevel(1)
            .id(recipe.id);
    });

    let anointmentTypes = [
        'holy_water_anointment',
        'looting_anointment',
        'melee_anointment',
        'hidden_knowledge_anointment',
        'fortune_anointment',
        'bow_power_anointment',
        'smelting_anointment',
        'silk_touch_anointment',
        'quick_draw_anointment',
        'bow_velocity_anointment'
    ];

    anointmentTypes.forEach((anointmentType) => {
        recipes.push({
            inputs: [`bloodmagic:${anointmentType}`, 'bloodmagic:tauoil'],
            output: `bloodmagic:${anointmentType}_l`,
            count: 1,
            syphon: 1000,
            ticks: 100,
            orbLevel: 3,
            id: `bloodmagic:alchemytable/${anointmentType}_l`
        });
        if (anointmentType !== 'smelting_anointment' && anointmentType !== 'silk_touch_anointment') {
            recipes.push({
                inputs: [`bloodmagic:${anointmentType}`, 'bloodmagic:strong_tau'],
                output: `bloodmagic:${anointmentType}_2`,
                count: 1,
                syphon: 1000,
                ticks: 100,
                orbLevel: 3,
                id: `bloodmagic:alchemytable/${anointmentType}_2`
            });
        }
    });

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel)
            .id(recipe.id);
    });
});

}
})();
