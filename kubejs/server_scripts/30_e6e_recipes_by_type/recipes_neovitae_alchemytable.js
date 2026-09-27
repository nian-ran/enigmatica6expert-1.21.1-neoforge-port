// 配方类型：neovitae:alchemytable
// 中文名称：炼金桌
// 用途：用于登记Neovitae的炼金桌配方。

(function () {
if (e6ePortedRecipeModLoaded('neovitae')) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/neovitae/alchemytable/'
    const bloodMagicToNeoVitae = {
        'bloodmagic:basiccuttingfluid': 'neovitae:basic_cutting_fluid',
        'bloodmagic:bow_power_anointment': 'neovitae:bow_power_anointment',
        'bloodmagic:bow_velocity_anointment': 'neovitae:bow_velocity_anointment',
        'bloodmagic:componentframeparts': 'neovitae:component_frame_parts',
        'bloodmagic:divinationsigil': 'neovitae:sigil_divination',
        'bloodmagic:fortune_anointment': 'neovitae:fortune_anointment',
        'bloodmagic:hidden_knowledge_anointment': 'neovitae:hidden_knowledge_anointment',
        'bloodmagic:holy_water_anointment': 'neovitae:holy_water_anointment',
        'bloodmagic:intermediatecuttingfluid': 'neovitae:intermediate_cutting_fluid',
        'bloodmagic:looting_anointment': 'neovitae:looting_anointment',
        'bloodmagic:melee_anointment': 'neovitae:melee_damage_anointment',
        'bloodmagic:plantoil': 'neovitae:plant_oil',
        'bloodmagic:quick_draw_anointment': 'neovitae:quick_draw_anointment',
        'bloodmagic:reagentair': 'neovitae:reagent_air',
        'bloodmagic:reagentbinding': 'neovitae:reagent_binding',
        'bloodmagic:reagentbloodlight': 'neovitae:reagent_blood_light',
        'bloodmagic:reagentfastminer': 'neovitae:reagent_fast_miner',
        'bloodmagic:reagentgrowth': 'neovitae:reagent_growth',
        'bloodmagic:reagentholding': 'neovitae:reagent_holding',
        'bloodmagic:reagentlava': 'neovitae:reagent_lava',
        'bloodmagic:reagentmagnetism': 'neovitae:reagent_magnetism',
        'bloodmagic:reagentsight': 'neovitae:reagent_sight',
        'bloodmagic:reagentvoid': 'neovitae:reagent_void',
        'bloodmagic:reagentwater': 'neovitae:reagent_water',
        'bloodmagic:silk_touch_anointment': 'neovitae:silk_touch_anointment',
        'bloodmagic:smelting_anointment': 'neovitae:smelting_anointment',
        'bloodmagic:strong_tau': 'neovitae:strong_tau',
        'bloodmagic:tauoil': 'neovitae:tau_oil',
        'bloodmagic:teleposerfocus': 'neovitae:teleposer_focus',
        'bloodmagic:weakbloodshard': 'neovitae:weak_blood_shard',
        'bloodmagic:watersigil': 'neovitae:sigil_water',
        'bloodmagic:lavasigil': 'neovitae:sigil_lava'
    };
    const nativeAlchemyRecipePaths = [
        'basic_cutting_fluid', 'bow_power_anointment', 'bow_velocity_anointment',
        'flint_from_gravel', 'fortune_anointment', 'hidden_knowledge_anointment',
        'holy_water_anointment', 'intermediate_cutting_fluid', 'looting_anointment',
        'melee_damage_anointment', 'nether_wart_from_block', 'plantoil_from_potatoes',
        'plantoil_from_wheat', 'quick_draw_anointment', 'reagent_air', 'reagent_binding',
        'reagent_blood_light', 'reagent_fast_miner', 'reagent_fastminer', 'reagent_growth',
        'reagent_holding', 'reagent_lava', 'reagent_magnetism', 'reagent_sight',
        'reagent_void', 'reagent_water', 'silk_touch_anointment', 'smelting_anointment',
        'string'
    ];
    function e6eMapNeoVitaeItem(id) {
        if (typeof id !== 'string') return null;
        let target = bloodMagicToNeoVitae[id];
        if (!target && id.startsWith('bloodmagic:')) {
            const path = id.substring('bloodmagic:'.length);
            if (path.startsWith('melee_anointment_')) {
                target = 'neovitae:melee_damage_anointment_' + path.substring('melee_anointment_'.length);
            } else if (path === 'melee_anointment') {
                target = 'neovitae:melee_damage_anointment';
            } else {
                target = e6eMapNeoVitaeItemId(id);
            }
        }
        if (!target && id.startsWith('bloodmagic:')) {
            return e6eAttemptAllPortedRecipesEnabled() ? id : null;
        }
        if (id.startsWith('eidolon:')) {
            const replacement = 'eidolon_repraised:' + id.substring('eidolon:'.length);
            if (e6ePortedItemExists(replacement)) target = replacement;
        }
        if (!target) target = id;
        return e6ePortedItemExists(target) ? target : null;
    }
    function e6eMapNeoVitaeIngredient(value) {
        if (typeof value !== 'string') return null;
        const isTag = value.startsWith('#');
        const raw = isTag ? value.substring(1) : value;
        let mapped;
        if (isTag) {
            if (raw === 'bloodmagic:crystals/demon') {
                mapped = '#neovitae:crystals/demon';
            } else if (raw.startsWith('bloodmagic:')) {
                return e6eAttemptAllPortedRecipesEnabled() ? value : null;
            } else {
                mapped = value;
            }
        } else {
            mapped = e6eMapNeoVitaeItem(raw);
        }
        if (!mapped) return null;
        return e6eRecipeIngredientExists(mapped) ? mapped : null;
    }
    function e6eNeoVitaeRecipeId(sourceId) {
        if (sourceId.startsWith(id_prefix)) return sourceId;
        let oldPrefix = '';
        if (sourceId.startsWith('neovitae:alchemytable/')) oldPrefix = 'neovitae:alchemytable/';
        if (sourceId.startsWith('bloodmagic:alchemytable/')) oldPrefix = 'bloodmagic:alchemytable/';
        if (sourceId.startsWith('enigmatica:base/bloodmagic/alchemytable/')) oldPrefix = 'enigmatica:base/bloodmagic/alchemytable/';
        if (sourceId.startsWith('enigmatica:expert/bloodmagic/alchemytable/')) oldPrefix = 'enigmatica:expert/bloodmagic/alchemytable/';
        if (oldPrefix) {
            let path = sourceId.substring(oldPrefix.length);
            if (path === 'intermediatecuttingfluid') path = 'intermediate_cutting_fluid';
            if (path === 'plantoil_from_taters') path = 'plantoil_from_potatoes';
            if (path.startsWith('melee_anointment_')) path = 'melee_damage_anointment_' + path.substring('melee_anointment_'.length);
            if (nativeAlchemyRecipePaths.indexOf(path) >= 0 || /^(holy_water|looting|melee_damage|hidden_knowledge|fortune|bow_power|bow_velocity|smelting|silk_touch|quick_draw)_anointment_(l|2)$/.test(path)) {
                return 'neovitae:alchemytable/' + path;
            }
            return id_prefix + path.replace(/[^a-zA-Z0-9_/-]/g, '_');
        }
        return id_prefix + sourceId.replace(/[^a-zA-Z0-9_.-]+/g, '_');
    }

    const recipes = [
        {
            inputs: [
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh'
            ],
            output: 'minecraft:leather',
            count: 4,
            syphon: 100,
            ticks: 200,
            orbLevel: 1,
            id: 'bloodmagic:alchemytable/leather_from_flesh'
        },
        {
            inputs: ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'],
            output: 'minecraft:flint',
            count: 3,
            syphon: 50,
            ticks: 20,
            orbLevel: 0,
            id: 'neovitae:alchemytable/flint_from_gravel'
        },
        {
            inputs: ['#forge:crops/potato', '#forge:crops/potato', '#forge:crops/potato', 'minecraft:bone_meal'],
            output: 'bloodmagic:plantoil',
            count: 1,
            syphon: 100,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/plantoil_from_taters'
        },
        {
            inputs: ['#forge:crops', '#forge:crops', '#forge:crops', 'minecraft:bone_meal'],
            output: 'bloodmagic:plantoil',
            count: 1,
            syphon: 100,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/plantoil_from_wheat'
        },
        {
            inputs: ['#minecraft:wool'],
            output: 'minecraft:string',
            count: 4,
            syphon: 100,
            ticks: 100,
            orbLevel: 0,
            id: 'neovitae:alchemytable/string'
        },
        {
            inputs: ['#forge:sand', '#forge:sand', 'minecraft:water_bucket'],
            output: 'minecraft:clay',
            count: 2,
            syphon: 50,
            ticks: 100,
            orbLevel: 2,
            id: 'neovitae:alchemytable/clay_from_sand'
        },
        {
            inputs: ['#forge:sand', '#forge:sand', 'bloodmagic:watersigil'],
            output: 'minecraft:clay',
            count: 2,
            syphon: 150,
            ticks: 100,
            orbLevel: 2,
            id: 'neovitae:alchemytable/clay_from_sand_sigil'
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
            id: 'neovitae:alchemytable/nether_wart_from_block'
        }
    ];

    recipes.forEach((recipe) => {
        if (!Array.isArray(recipe.inputs) || recipe.inputs.some((input) => input == null)) return;
        const mappedInputs = recipe.inputs.map(e6eMapNeoVitaeIngredient);
        if (mappedInputs.some((input) => input == null)) return;
        const mappedOutput = e6eMapNeoVitaeItem(recipe.output);
        if (!mappedOutput || !e6ePortedItemExists(mappedOutput)) return;

        event.recipes.neovitae.alchemytable(
            mappedInputs,
            Item.of(mappedOutput, recipe.count || 1),
            recipe.syphon,
            recipe.ticks,
            recipe.orbLevel
        ).id(e6eNeoVitaeRecipeId(recipe.id));
    });
});

}
})();

(function () {
if (e6ePortedRecipeModLoaded('neovitae')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/neovitae/alchemytable/'
    const bloodMagicToNeoVitae = {
        'bloodmagic:basiccuttingfluid': 'neovitae:basic_cutting_fluid',
        'bloodmagic:bow_power_anointment': 'neovitae:bow_power_anointment',
        'bloodmagic:bow_velocity_anointment': 'neovitae:bow_velocity_anointment',
        'bloodmagic:componentframeparts': 'neovitae:component_frame_parts',
        'bloodmagic:divinationsigil': 'neovitae:sigil_divination',
        'bloodmagic:fortune_anointment': 'neovitae:fortune_anointment',
        'bloodmagic:hidden_knowledge_anointment': 'neovitae:hidden_knowledge_anointment',
        'bloodmagic:holy_water_anointment': 'neovitae:holy_water_anointment',
        'bloodmagic:intermediatecuttingfluid': 'neovitae:intermediate_cutting_fluid',
        'bloodmagic:looting_anointment': 'neovitae:looting_anointment',
        'bloodmagic:melee_anointment': 'neovitae:melee_damage_anointment',
        'bloodmagic:plantoil': 'neovitae:plant_oil',
        'bloodmagic:quick_draw_anointment': 'neovitae:quick_draw_anointment',
        'bloodmagic:reagentair': 'neovitae:reagent_air',
        'bloodmagic:reagentbinding': 'neovitae:reagent_binding',
        'bloodmagic:reagentbloodlight': 'neovitae:reagent_blood_light',
        'bloodmagic:reagentfastminer': 'neovitae:reagent_fast_miner',
        'bloodmagic:reagentgrowth': 'neovitae:reagent_growth',
        'bloodmagic:reagentholding': 'neovitae:reagent_holding',
        'bloodmagic:reagentlava': 'neovitae:reagent_lava',
        'bloodmagic:reagentmagnetism': 'neovitae:reagent_magnetism',
        'bloodmagic:reagentsight': 'neovitae:reagent_sight',
        'bloodmagic:reagentvoid': 'neovitae:reagent_void',
        'bloodmagic:reagentwater': 'neovitae:reagent_water',
        'bloodmagic:silk_touch_anointment': 'neovitae:silk_touch_anointment',
        'bloodmagic:smelting_anointment': 'neovitae:smelting_anointment',
        'bloodmagic:strong_tau': 'neovitae:strong_tau',
        'bloodmagic:tauoil': 'neovitae:tau_oil',
        'bloodmagic:teleposerfocus': 'neovitae:teleposer_focus',
        'bloodmagic:weakbloodshard': 'neovitae:weak_blood_shard',
        'bloodmagic:watersigil': 'neovitae:sigil_water',
        'bloodmagic:lavasigil': 'neovitae:sigil_lava'
    };
    const nativeAlchemyRecipePaths = [
        'basic_cutting_fluid', 'bow_power_anointment', 'bow_velocity_anointment',
        'flint_from_gravel', 'fortune_anointment', 'hidden_knowledge_anointment',
        'holy_water_anointment', 'intermediate_cutting_fluid', 'looting_anointment',
        'melee_damage_anointment', 'nether_wart_from_block', 'plantoil_from_potatoes',
        'plantoil_from_wheat', 'quick_draw_anointment', 'reagent_air', 'reagent_binding',
        'reagent_blood_light', 'reagent_fast_miner', 'reagent_fastminer', 'reagent_growth',
        'reagent_holding', 'reagent_lava', 'reagent_magnetism', 'reagent_sight',
        'reagent_void', 'reagent_water', 'silk_touch_anointment', 'smelting_anointment',
        'string'
    ];
    function e6eMapNeoVitaeItem(id) {
        if (typeof id !== 'string') return null;
        let target = bloodMagicToNeoVitae[id];
        if (!target && id.startsWith('bloodmagic:')) {
            const path = id.substring('bloodmagic:'.length);
            if (path.startsWith('melee_anointment_')) {
                target = 'neovitae:melee_damage_anointment_' + path.substring('melee_anointment_'.length);
            } else if (path === 'melee_anointment') {
                target = 'neovitae:melee_damage_anointment';
            } else {
                target = e6eMapNeoVitaeItemId(id);
            }
        }
        if (!target && id.startsWith('bloodmagic:')) {
            return e6eAttemptAllPortedRecipesEnabled() ? id : null;
        }
        if (id.startsWith('eidolon:')) {
            const replacement = 'eidolon_repraised:' + id.substring('eidolon:'.length);
            if (e6ePortedItemExists(replacement)) target = replacement;
        }
        if (!target) target = id;
        return e6ePortedItemExists(target) ? target : null;
    }
    function e6eMapNeoVitaeIngredient(value) {
        if (typeof value !== 'string') return null;
        const isTag = value.startsWith('#');
        const raw = isTag ? value.substring(1) : value;
        let mapped;
        if (isTag) {
            if (raw === 'bloodmagic:crystals/demon') {
                mapped = '#neovitae:crystals/demon';
            } else if (raw.startsWith('bloodmagic:')) {
                return e6eAttemptAllPortedRecipesEnabled() ? value : null;
            } else {
                mapped = value;
            }
        } else {
            mapped = e6eMapNeoVitaeItem(raw);
        }
        if (!mapped) return null;
        return e6eRecipeIngredientExists(mapped) ? mapped : null;
    }
    function e6eNeoVitaeRecipeId(sourceId) {
        if (sourceId.startsWith(id_prefix)) return sourceId;
        let oldPrefix = '';
        if (sourceId.startsWith('neovitae:alchemytable/')) oldPrefix = 'neovitae:alchemytable/';
        if (sourceId.startsWith('enigmatica:base/bloodmagic/alchemytable/')) oldPrefix = 'enigmatica:base/bloodmagic/alchemytable/';
        if (sourceId.startsWith('enigmatica:expert/bloodmagic/alchemytable/')) oldPrefix = 'enigmatica:expert/bloodmagic/alchemytable/';
        if (oldPrefix) {
            let path = sourceId.substring(oldPrefix.length);
            if (path === 'intermediatecuttingfluid') path = 'intermediate_cutting_fluid';
            if (path === 'plantoil_from_taters') path = 'plantoil_from_potatoes';
            if (path.startsWith('melee_anointment_')) path = 'melee_damage_anointment_' + path.substring('melee_anointment_'.length);
            if (nativeAlchemyRecipePaths.indexOf(path) >= 0 || /^(holy_water|looting|melee_damage|hidden_knowledge|fortune|bow_power|bow_velocity|smelting|silk_touch|quick_draw)_anointment_(l|2)$/.test(path)) {
                return 'neovitae:alchemytable/' + path;
            }
            return id_prefix + path.replace(/[^a-zA-Z0-9_/-]/g, '_');
        }
        return id_prefix + sourceId.replace(/[^a-zA-Z0-9_.-]+/g, '_');
    }
    const recipes = [
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
            id: 'neovitae:alchemytable/basic_cutting_fluid'
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
            id: 'neovitae:alchemytable/reagent_lava'
        },
        {
            inputs: ['#minecraft:saplings', '#minecraft:saplings', 'minecraft:sugar_cane', 'thermal:phytogro'],
            output: 'bloodmagic:reagentgrowth',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 2,
            id: 'neovitae:alchemytable/reagent_growth'
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
            id: 'neovitae:alchemytable/reagent_void'
        },
        {
            inputs: ['quark:bottled_cloud', 'alexsmobs:tarantula_hawk_wing_fragment', 'ars_nouveau:wilden_wing'],
            output: 'bloodmagic:reagentair',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 2,
            id: 'neovitae:alchemytable/reagent_air'
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
            id: 'neovitae:alchemytable/reagent_water'
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
            id: 'neovitae:alchemytable/reagent_holding'
        },
        {
            inputs: ['minecraft:lodestone', 'ars_nouveau:mana_fiber', 'eidolon_repraised:gold_inlay'],
            output: 'bloodmagic:reagentmagnetism',
            count: 1,
            syphon: 1000,
            ticks: 200,
            orbLevel: 3,
            id: 'neovitae:alchemytable/reagent_magnetism'
        },
        {
            inputs: [
                'occultism:afrit_essence',
                null,
                'eidolon_repraised:crimson_essence'
            ],
            output: 'bloodmagic:weakbloodshard',
            count: 1,
            syphon: 20000,
            ticks: 200,
            orbLevel: 3,
            id: `${id_prefix}weakbloodshard_from_vial`
        },
        {
            inputs: [
                'occultism:afrit_essence',
                null,
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
                null,
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
                null,
                '#forge:nuggets/silver',
                'undergarden:shimmerweed'
            ],
            output: 'bloodmagic:holy_water_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/holy_water_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/regalium',
                'undergarden:underbeans'
            ],
            output: 'bloodmagic:looting_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/looting_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/froststeel',
                'undergarden:dweller_steak'
            ],
            output: 'bloodmagic:melee_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/melee_damage_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/cloggrum',
                'undergarden:veil_mushroom'
            ],
            output: 'bloodmagic:hidden_knowledge_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/hidden_knowledge_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/regalium',
                'undergarden:indigo_mushroom'
            ],
            output: 'bloodmagic:fortune_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/fortune_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/iron',
                'undergarden:depthrock_pebble'
            ],
            output: 'bloodmagic:bow_power_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/bow_power_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/uranium',
                'undergarden:ditchbulb'
            ],
            output: 'bloodmagic:smelting_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/smelting_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/cloggrum',
                'undergarden:goo_ball'
            ],
            output: 'bloodmagic:silk_touch_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/silk_touch_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                '#forge:nuggets/aluminum',
                'undergarden:raw_gloomper_leg'
            ],
            output: 'bloodmagic:quick_draw_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/quick_draw_anointment'
        },
        {
            inputs: [
                'bloodmagic:slate_vial',
                null,
                'undergarden:utheric_shard',
                'undergarden:raw_gwibling'
            ],
            output: 'bloodmagic:bow_velocity_anointment',
            count: 1,
            syphon: 500,
            ticks: 100,
            orbLevel: 1,
            id: 'neovitae:alchemytable/bow_velocity_anointment'
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
            id: 'neovitae:alchemytable/reagent_sight'
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
            id: 'neovitae:alchemytable/reagent_fastminer'
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
            id: 'neovitae:alchemytable/reagent_blood_light'
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
            id: 'neovitae:alchemytable/reagent_binding'
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
                null,
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
                null,
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
                null,
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
                null,
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
                null,
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
                null,
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
                null,
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
                null,
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
                null,
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
                null,
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
            id: `neovitae:alchemytable/${anointmentType}_l`
        });
        if (anointmentType !== 'smelting_anointment' && anointmentType !== 'silk_touch_anointment') {
            recipes.push({
                inputs: [`bloodmagic:${anointmentType}`, 'bloodmagic:strong_tau'],
                output: `bloodmagic:${anointmentType}_2`,
                count: 1,
                syphon: 1000,
                ticks: 100,
                orbLevel: 3,
                id: `neovitae:alchemytable/${anointmentType}_2`
            });
        }
    });

    recipes.forEach((recipe) => {
        if (!Array.isArray(recipe.inputs) || recipe.inputs.some((input) => input == null)) return;
        const mappedInputs = recipe.inputs.map(e6eMapNeoVitaeIngredient);
        if (mappedInputs.some((input) => input == null)) return;
        const mappedOutput = e6eMapNeoVitaeItem(recipe.output);
        if (!mappedOutput || !e6ePortedItemExists(mappedOutput)) return;

        event.recipes.neovitae.alchemytable(
            mappedInputs,
            Item.of(mappedOutput, recipe.count || 1),
            recipe.syphon,
            recipe.ticks,
            recipe.orbLevel
        ).id(e6eNeoVitaeRecipeId(recipe.id));
    });
});

}
})();
