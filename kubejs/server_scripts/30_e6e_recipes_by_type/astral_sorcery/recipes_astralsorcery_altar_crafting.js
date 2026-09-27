// 配方类型：astralsorcery:altar_crafting
// 中文名称：祭坛合成
// 用途：用于登记星辉魔法的祭坛合成配方。

(function () {
if (['astralsorcery', 'resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/altar/';

    const recipes = [
        
    ];

    recipes.forEach((recipe) => {
        var constructed_recipe = e6eAstralAltarRecipe(recipe);
        if (!constructed_recipe) return;

        event.custom(constructed_recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'atum', 'botania', 'eidolon_repraised', 'resourcefulbees', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    /*
    注意：星光最大值只是理论值；实际可达到的合理上限约为 95%。

    明亮工作台
    altar_type: 0
    max_starlight: 1000 
    */
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        {
            output: Item.of('astralsorcery:spectral_relay'),
            pattern: ['_____', '_ABA_', '_DCD_', '_____', '_____'],
            key: {
                A: { item: 'eidolon_repraised:gold_inlay' },
                B: { item: 'astralsorcery:glass_lens' },
                C: { item: 'create:refined_radiance' },
                D: { tag: 'botania:runes/air' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: 'astralsorcery:altar/spectral_relay'
        },
        {
            output: Item.of('astralsorcery:glass_lens', 2),
            pattern: ['_____', '__A__', '_ABA_', '__A__', '_____'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: { item: 'occultism:infused_lenses' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: 'astralsorcery:altar/glass_lens'
        },
        {
            output: Item.of('astralsorcery:altar_attunement'),
            pattern: ['_____', '_BAB_', '_CDC_', '_BEB_', '_____'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'astralsorcery:marble_pillar' },
                C: { item: 'create:refined_radiance' },
                D: {
                    type: 'astralsorcery:fluid',
                    fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]
                },
                E: { tag: 'botania:runes/mana' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 500,
            recipe_class: 'astralsorcery:attunement_upgrade',
            effects: ['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar'],
            id: 'astralsorcery:altar/altar_attunement'
        },
        {
            output: Item.of('botania:runic_altar'),
            pattern: ['_____', '_AAA_', '_ABA_', '_CDC_', '_____'],
            key: {
                A: { item: 'botania:livingrock' },
                B: { item: 'minecraft:conduit' },
                C: { tag: 'forge:ingots/infused_iron' },
                D: {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_cache',
                    count: 1,
                    nbt: '{aura:400000}'
                }
            },
            altar_type: 0,
            duration: 100,
            starlight: 500,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: `${id_prefix}runic_altar`
        },
        {
            output: Item.of('botania:mana_spreader'),
            pattern: ['_____', '_ABA_', '_CDE_', '_ABA_', '_____'],
            key: {
                A: { item: 'botania:livingwood' },
                B: { item: 'botania:glimmering_livingwood' },
                C: { tag: 'forge:ingots/infused_iron' },
                D: { item: 'botania:spark' },
                E: { item: 'atum:crystal_glass_pane' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: `${id_prefix}mana_spreader`
        },
        {
            output: Item.of('apotheosis:hellshelf', 1),
            pattern: ['_____', '_ACF_', '_BEB_', '_FCA_', '_____'],
            key: {
                A: { item: 'tconstruct:scorched_bricks' },
                B: { tag: 'botania:runes/fire' },
                C: { item: 'resourcefulbees:ghast_honeycomb' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'ars_nouveau:blaze_fiber' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: `${id_prefix}hellshelf`
        }
    ];

    recipes.forEach((recipe) => {
        var constructed_recipe = e6eAstralAltarRecipe(recipe);
        if (!constructed_recipe) return;

        event.custom(constructed_recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'bloodmagic', 'botania', 'eidolon_repraised', 'resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    /*
    注意：星光最大值只是理论值；实际可达到的合理上限约为 95%。
   
    星光合成祭坛 
    altar_type: 1
    max_starlight: 2000
    */

    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        {
            output: Item.of('botania:alfheim_portal', 1),
            pattern: ['A___A', '__F__', '_EDG_', '_BHB_', 'C___C'],
            key: {
                A: { item: 'resourcefulbees:emerald_honeycomb' },
                B: { item: 'botania:glimmering_livingwood' },
                C: { tag: 'forge:ingots/terrasteel' },
                D: { item: 'astralsorcery:celestial_gateway' },
                E: { tag: 'botania:runes/summer' },
                F: { item: 'naturesaura:gold_leaf' },
                G: { tag: 'botania:runes/air' },
                H: { tag: 'botania:runes/lust' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}alfheim_portal`
        },
        {
            output: Item.of('astralsorcery:telescope', 1),
            pattern: ['E___E', '__B__', '_CDC_', '_AAA_', 'F___F'],
            key: {
                A: { tag: 'forge:rods/treated_wood' },
                B: { item: 'astralsorcery:hand_telescope' },
                C: { tag: 'forge:ingots/sky' },
                D: { item: 'eidolon_repraised:polished_planks' },
                E: { tag: 'botania:runes/air' },
                F: { item: 'astralsorcery:nocturnal_powder' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 800,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/telescope'
        },
        {
            output: Item.of('astralsorcery:shifting_star'),
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            pattern: ['A___A', '_ECB_', '_CDC_', '_BCE_', 'A___A'],
            key: {
                A: { tag: 'forge:gems/niotic' },
                B: { tag: 'astralsorcery:stardust' },
                C: { item: 'astralsorcery:illumination_powder' },
                D: {
                    type: 'astralsorcery:fluid',
                    fluid: [
                        {
                            fluid: 'industrialforegoing:ether_gas',
                            amount: 1000
                        }
                    ]
                },
                E: { item: 'bloodmagic:reagentbinding' }
            },
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star'
        },
        {
            output: Item.of('botania:terra_plate', 1),
            pattern: ['A___B', '_FGF_', '_IEI_', '_JHJ_', 'D___C'],
            key: {
                A: { tag: 'botania:runes/water' },
                B: { tag: 'botania:runes/earth' },
                C: { tag: 'botania:runes/fire' },
                D: { tag: 'botania:runes/air' },
                E: { tag: 'botania:runes/mana' },
                F: { item: 'pneumaticcraft:upgrade_matrix' },
                G: { tag: 'forge:storage_blocks/starmetal' },
                H: { tag: 'forge:storage_blocks/manasteel' },
                I: { item: 'kubejs:firmament' },
                J: { item: 'naturesaura:infused_stone' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:pillar_sparkle',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_lightbeams',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}terra_plate`
        },
        {
            output: Item.of('astralsorcery:ritual_pedestal'),
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            pattern: ['A___A', '_BCB_', '_GEG_', '_FFF_', 'D___D'],
            key: {
                A: { tag: 'forge:ingots/arcane_gold' },
                B: { item: 'astralsorcery:marble_chiseled' },
                C: { item: 'minecraft:conduit' },
                D: { item: 'astralsorcery:marble_pillar' },
                E: { item: 'bloodmagic:masterritualstone' },
                F: { item: 'astralsorcery:marble_runed' },
                G: { tag: 'forge:inlays/arcane_gold' }
            },
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/ritual_pedestal'
        },
        {
            output: Item.of('cookingforblockheads:sink'),
            altar_type: 1,
            duration: 200,
            starlight: 1000,
            pattern: ['A___A', '_BCB_', '_GEG_', '_GFG_', 'D___D'],
            key: {
                A: { tag: 'botania:runes/water' },
                B: { tag: 'forge:plates/steel' },
                C: { item: 'supplementaries:faucet' },
                D: { tag: 'botania:runes/mana' },
                E: { item: 'naturesaura:spring' },
                F: {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_trove',
                    count: 1,
                    nbt: '{aura:1200000}'
                },
                G: { item: 'minecraft:terracotta' }
            },
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'cookingforblockheads:sink'
        },
        {
            output: Item.of('industrialforegoing:fluid_laser_base', 1),
            pattern: ['A___A', '_BCB_', '_DED_', '_FGF_', 'A___A'],
            key: {
                A: { item: 'astralsorcery:glass_lens' },
                B: { tag: 'forge:plastic' },
                C: { tag: 'industrialforegoing:machine_frame/simple' },
                D: { tag: 'forge:gears/lumium' },
                E: { item: 'mekanism:basic_induction_cell' },
                F: { tag: 'botania:runes/fire' },
                G: { item: 'bloodmagic:soulgemlesser' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1200,
            effects: [
                'astralsorcery:pillar_sparkle',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_lightbeams',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}fluid_laser_base`
        },
        {
            output: Item.of('apotheosis:seashelf', 1),
            pattern: ['G___G', '_ACF_', '_BEB_', '_FCA_', 'G___G'],
            key: {
                A: { item: 'minecraft:prismarine_bricks' },
                B: { tag: 'botania:runes/water' },
                C: { item: 'resourcefulbees:icy_honeycomb' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'powah:crystal_niotic' },
                G: { item: 'bloodmagic:reagentwater' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}seashelf`
        },

        /// 指南书相关的安全移除

        {
            output: Item.of('astralsorcery:attunement_altar'),
            pattern: ['_____', '_____', '__A__', '_____', '_____'],
            key: {
                A: { item: 'kubejs:altered_recipe_indicator' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: ['astralsorcery:pillar_sparkle'],
            id: 'astralsorcery:altar/attunement_altar'
        }
    ];

    recipes.forEach((recipe) => {
        var constructed_recipe = e6eAstralAltarRecipe(recipe);
        if (!constructed_recipe) return;

        event.custom(constructed_recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'atum', 'bloodmagic', 'botania', 'eidolon_repraised', 'mythicbotany', 'resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    /*
    注意：星光最大值只是理论值；实际可达到的合理上限约为 95%。

    天体祭坛
    altar_type: 2
    max_starlight: 4000
    */

    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        /// 天体祭坛配方
        {
            output: Item.of('astralsorcery:altar_radiance', 1),
            pattern: ['BC_CB', 'DEFED', '_JAK_', 'DGHGD', 'BC_CB'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'create:shadow_steel_casing' },
                C: { item: 'eidolon_repraised:shadow_gem' },
                D: { item: 'astralsorcery:resonating_gem' },
                E: { item: 'astralsorcery:colored_lens_spectral' },
                F: { tag: 'botania:runes/asgard' },
                G: { item: 'bloodmagic:etherealslate' },
                H: { tag: 'botania:runes/niflheim' },
                J: { tag: 'botania:runes/alfheim' },
                K: { tag: 'botania:runes/midgard' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3500,
            recipe_class: 'astralsorcery:trait_upgrade',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:pillar_sparkle',
                'astralsorcery:luminescence_flare',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/altar_radiance'
        },
        {
            output: Item.of('apotheosis:endshelf', 1),
            pattern: ['AG__A', 'G_BC_', '_DED_', '_FB_G', 'A__GA'],
            key: {
                A: { item: 'betterendforge:flavolite_runed' },
                B: { tag: 'botania:runes/mana' },
                C: { item: 'resourcefulbees:enderium_honeycomb' },
                D: { tag: 'botania:runes/nidavellir' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'betterendforge:eternal_crystal' },
                G: { item: 'bloodmagic:reagentvoid' }
            },
            altar_type: 2,
            duration: 200,
            starlight: 3000,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}endshelf`
        },
        {
            output: Item.of('mythicbotany:mana_infuser', 1),
            pattern: ['AE_EB', 'EGHGE', '_IJI_', 'FKLKF', 'CF_FD'],
            key: {
                A: { tag: 'botania:runes/spring' },
                B: { tag: 'botania:runes/summer' },
                C: { tag: 'botania:runes/winter' },
                D: { tag: 'botania:runes/autumn' },
                E: { tag: 'forge:ingots/refined_radiance' },
                F: { tag: 'forge:ingots/shadow_steel' },
                G: { tag: 'forge:ingots/elementium' },
                H: { tag: 'botania:runes/muspelheim' },
                I: { item: 'kubejs:firmament' },
                J: { tag: 'botania:runes/asgard' },
                K: { item: 'botania:glimmering_dreamwood' },
                L: { tag: 'botania:runes/niflheim' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3500,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}mana_infuser`
        },
        {
            output: Item.of('botania:flight_tiara', '{variant:0}'),
            pattern: ['B___B', '_CDC_', '_EAE_', '_FEG_', 'B___B'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: true,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'botania:life_essence' },
                C: { tag: 'botania:runes/mana' },
                D: { item: 'magicfeather:magicfeather' },
                E: { tag: 'forge:ingots/elementium' },
                F: { item: 'bloodmagic:airsigil' },
                G: { item: 'ars_nouveau:ritual_flight' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3500,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:pillar_sparkle',
                'astralsorcery:luminescence_flare',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}flight_tiara`
        },
        {
            output: Item.of('astralsorcery:colored_lens_regeneration', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_S_S_', 'R_Q_R', '_ALA_', 'S_Q_S', 'R___R'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:holy_water_anointment_l' },
                Q: { item: 'quark:pink_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_regeneration'
        },
        {
            output: Item.of('astralsorcery:colored_lens_damage', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_S_S_', 'R_Q_R', '_ALA_', '_SQS_', 'R___R'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:melee_anointment_l' },
                Q: { item: 'quark:red_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_damage'
        },
        {
            output: Item.of('astralsorcery:colored_lens_fire', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_S_S_', 'S_Q_S', '_ALA_', 'R_Q_R', '_R_R_'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:smelting_anointment_l' },
                Q: { item: 'quark:orange_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_fire'
        },
        {
            output: Item.of('astralsorcery:colored_lens_break', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['R___R', 'RSQSR', '_ALA_', '_SQS_', '_____'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:hidden_knowledge_anointment_l' },
                Q: { item: 'quark:yellow_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_break'
        },
        {
            output: Item.of('astralsorcery:colored_lens_growth', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_R_R_', 'R_Q_R', '_ALA_', '_SQS_', 'S___S'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'naturesaura:gold_powder' },
                A: { item: 'bloodmagic:fortune_anointment_l' },
                Q: { item: 'quark:lime_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_growth'
        },
        {
            output: Item.of('astralsorcery:colored_lens_push', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['___R_', 'SSQR_', '_ALA_', '_RQSS', '_R___'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:bow_velocity_anointment_l' },
                Q: { item: 'quark:light_blue_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_push'
        },
        {
            output: Item.of('astralsorcery:colored_lens_spectral', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['S___S', '_SQS_', '_ALA_', 'R_Q_R', '_R_R_'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'atum:ectoplasm' },
                A: { item: 'bloodmagic:silk_touch_anointment_l' },
                Q: { item: 'quark:purple_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_spectral'
        },
        {
            output: Item.of('botania:elven_spreader'),
            pattern: ['_C_C_', 'CADAC', '_FEG_', 'CBDBC', '_C_C_'],
            key: {
                A: { tag: 'botania:runes/air' },
                B: { tag: 'botania:runes/summer' },
                C: { item: 'botania:dreamwood' },
                D: { item: 'botania:glimmering_dreamwood' },
                E: { item: 'botania:spark' },
                F: { tag: 'forge:ingots/elementium' },
                G: { item: 'astralsorcery:colored_lens_push' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3500,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}elven_spreader`
        }
    ];

    recipes.forEach((recipe) => {
        var constructed_recipe = e6eAstralAltarRecipe(recipe);
        if (!constructed_recipe) return;

        event.custom(constructed_recipe).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    /*
    注意：星光最大值只是理论值；实际可达到的合理上限约为 95%。

    虹彩祭坛
    altar_type: 3
    max_starlight: 8000

    */

    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const missingModItemReplacements = {
        'botania:balance_cloak': 'astralsorcery:infuser',
        'botania:bifrost_perm': 'astralsorcery:stardust',
        'botania:dreamwood': 'minecraft:cherry_wood',
        'botania:gaia_pylon': 'astralsorcery:infuser',
        'botania:gaia_spreader': 'astralsorcery:resonating_gem',
        'botania:lens_gravity': 'astralsorcery:colored_lens_spectral',
        'botania:lens_influence': 'astralsorcery:colored_lens_spectral',
        'botania:lens_warp': 'astralsorcery:colored_lens_spectral',
        'botania:life_essence': 'astralsorcery:stardust',
        'botania:rune_envy': 'astralsorcery:resonating_gem',
        'botania:rune_pride': 'astralsorcery:resonating_gem',
        'mythicbotany:alfsteel_pylon': 'astralsorcery:infuser',
        'mythicbotany:dream_cherry': 'minecraft:cherry_wood',
        'mythicbotany:midgard_rune': 'astralsorcery:resonating_gem',
        'mythicbotany:yggdrasil_branch': 'minecraft:cherry_wood'
    };
    const missingModTagItemReplacements = {
        'botania:runes/air': 'astralsorcery:resonating_gem',
        'botania:runes/mana': 'astralsorcery:resonating_gem',
        'botania:runes/vanaheim': 'astralsorcery:resonating_gem',
        'forge:dusts/starmetal': 'astralsorcery:stardust',
        'forge:gems/niotic': 'powah:niotic_crystal',
        'forge:pellets/polonium': 'mekanism:pellet_polonium',
        'forge:pellets/antimatter': 'mekanism:pellet_antimatter',
        'forge:circuits/ultimate': 'mekanism:ultimate_control_circuit'
    };
    // 保留源物品 ID；缺失注册内容也在全量定义阶段尝试，后续统一修正注册错误。
    const outputItemIfRegistered = (item, count = 1) => ({ id: item, count });
    const recipes = [
        /// 虹彩祭坛配方
        {
            output: outputItemIfRegistered('kubejs:observatory_lens', 1),
            pattern: ['_DCD_', 'DEBED', 'CBABC', 'DEBED', '_DCD_'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: true,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'astralsorcery:resonating_gem' },
                C: { tag: 'botania:runes/air' },
                D: { item: 'create:shadow_steel' },
                E: { item: 'astralsorcery:colored_lens_spectral' }
            },
            relay_inputs: [
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/observatory'
        },
        {
            // 中文：Pedestals 未安装时，在构造物品堆之前跳过这条旧版产物。
            // 当 Pedestals 未安装时，在构造 ItemStack 前跳过这个旧版产物。
            output: outputItemIfRegistered('pedestals:coin/xpenchanter', 1),
            pattern: ['AA_AA', 'ACB_A', '_DED_', 'A_FCA', 'AA_AA'],
            key: {
                A: { item: 'ars_nouveau:greater_experience_gem' },
                B: { item: 'botania:gaia_pylon' },
                C: { tag: 'botania:runes/vanaheim' },
                D: { tag: 'botania:runes/mana' },
                E: { item: 'pedestals:coin/default' },
                F: { item: 'ars_nouveau:glyph_pickup' }
            },
            relay_inputs: [
                { item: 'eidolon_repraised:shadow_gem' },
                { item: 'eidolon_repraised:gold_inlay' },
                { item: 'eidolon_repraised:gold_inlay' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'pedestals:upgrades/enchanter'
        },
        {
            // 中文：Pedestals 未安装时，在构造物品堆之前跳过这条旧版产物。
            // 当 Pedestals 未安装时，在构造 ItemStack 前跳过这个旧版产物。
            output: outputItemIfRegistered('pedestals:coin/xpanvil', 1),
            pattern: ['AA_AA', 'ACB_A', '_DED_', 'A_FCA', 'AA_AA'],
            key: {
                A: { item: 'ars_nouveau:greater_experience_gem' },
                B: { item: 'mythicbotany:alfsteel_pylon' },
                C: { tag: 'botania:runes/vanaheim' },
                D: { tag: 'botania:runes/mana' },
                E: { item: 'pedestals:coin/default' },
                F: { item: 'ars_nouveau:glyph_pickup' }
            },
            relay_inputs: [
                { item: 'betterendforge:aeternium_hammer' },
                { item: 'minecraft:netherite_ingot' },
                { item: 'minecraft:netherite_ingot' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'pedestals:upgrades/anvil'
        },
        {
            output: outputItemIfRegistered('astralsorcery:mantle', 1),
            pattern: ['_____', 'A_B_A', 'ACDCA', 'ECFCE', 'E___E'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                C: { item: 'astralsorcery:illumination_powder' },
                D: { item: 'botania:balance_cloak' },
                E: { tag: 'astralsorcery:stardust' },
                F: { tag: 'botania:runes/mana' }
            },
            relay_inputs: [
                { item: 'astralsorcery:starmetal' },
                { item: 'botania:rune_envy' },
                { item: 'magicfeather:magicfeather' },
                { item: 'botania:rune_pride' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/mantle'
        },

        {
            output: outputItemIfRegistered('astralsorcery:shifting_star_armara'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentbinding' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:armara',
            relay_inputs: [
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_armara'
        },
        {
            output: outputItemIfRegistered('astralsorcery:shifting_star_discidia'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentlava' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:discidia',
            relay_inputs: [
                { item: 'bloodmagic:vengefulcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'bloodmagic:vengefulcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_discidia'
        },
        {
            output: outputItemIfRegistered('astralsorcery:shifting_star_evorsio'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentfastminer' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'bloodmagic:destructivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'bloodmagic:destructivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_evorsio'
        },
        {
            output: outputItemIfRegistered('astralsorcery:shifting_star_vicio'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentair' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:vicio',
            relay_inputs: [
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_vicio'
        },
        {
            output: outputItemIfRegistered('astralsorcery:shifting_star_aevitas'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentgrowth' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:aevitas',
            relay_inputs: [
                { item: 'bloodmagic:corrosivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'bloodmagic:corrosivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_aevitas'
        },
        {
            output: outputItemIfRegistered('botania:gaia_spreader'),
            altar_type: 3,
            duration: 720,
            starlight: 6400,
            pattern: ['_____', '_AAA_', '_BCD_', '_AAA_', '_____'],
            key: {
                A: { item: 'botania:bifrost_perm' },
                B: { tag: 'forge:gems/dragonstone' },
                C: { item: 'botania:elven_spreader' },
                D: { item: 'astralsorcery:colored_lens_spectral' }
            },
            focus_constellation: 'naturesstarlight:naritis',
            relay_inputs: [
                { item: 'mythicbotany:dream_cherry' },
                { item: 'botania:life_essence' },
                { item: 'mythicbotany:midgard_rune' },
                { item: 'botania:life_essence' },
                { item: 'naturesaura:ancient_sapling' },
                { item: 'botania:life_essence' },
                { item: 'mythicbotany:midgard_rune' },
                { item: 'botania:life_essence' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}gaia_spreader`
        },
        {
            output: outputItemIfRegistered('mekanism:solar_neutron_activator', 2),
            altar_type: 3,
            duration: 720,
            starlight: 7500,
            pattern: ['A___A', 'BAAAB', 'CBBBC', '_CCC_', 'DEFED'],
            key: {
                A: { item: 'kubejs:observatory_lens' },
                B: { item: 'powah:solar_panel_niotic' },
                C: { item: 'mekanism:hdpe_sheet' },
                D: { tag: 'forge:plates/enderium' },
                E: { tag: 'forge:circuits/elite' },
                F: { tag: 'industrialforegoing:machine_frame/advanced' }
            },
            focus_constellation: 'astralsorcery:horologium',
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'occultism:crushed_end_stone' },
                { item: 'occultism:iesnium_dust' },
                { item: 'astralsorcery:stardust' },
                { item: 'occultism:crushed_end_stone' },
                { item: 'occultism:iesnium_dust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'mekanism:solar_neutron_activator'
        },
        {
            output: outputItemIfRegistered('masterfulmachinery:auto_iridescent_altar_starlight_port_astral_starlight_input', 1),
            pattern: ['ABCBA', 'BADAB', 'CDEDC', 'BADAB', 'ABCBA'],
            key: {
                A: { tag: 'forge:dusts/starmetal' },
                B: { tag: 'forge:gems/niotic' },
                C: { item: 'bloodmagic:etherealslate' },
                D: { tag: 'forge:pellets/polonium' },
                E: { item: 'astralsorcery:shifting_star_vicio' }
            },
            relay_inputs: [
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}auto_iridescent_altar_starlight_port_astral_starlight_input`
        },
        {
            output: outputItemIfRegistered('kubejs:worldshaper_handle'),
            altar_type: 3,
            duration: 600,
            starlight: 7000,
            pattern: ['AA___', 'ABA__', '_ACA_', '__ABA', '___AA'],
            key: {
                A: { item: 'botania:dreamwood' },
                B: { item: 'kubejs:laputian_ingot' },
                C: { tag: 'botania:runes/vanaheim' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}worldshaper_handle`
        },
        {
            output: outputItemIfRegistered('kubejs:worldshaper_barrel'),
            altar_type: 3,
            duration: 600,
            starlight: 7000,
            pattern: ['_____', 'AAAAA', 'BCDEF', 'AAAAA', '_____'],
            key: {
                A: { item: 'kubejs:laputian_ingot' },
                B: { item: 'botania:lens_gravity' },
                C: { item: 'botania:lens_influence' },
                D: { item: 'botania:lens_warp' },
                E: { item: 'mekanism:laser_tractor_beam' },
                F: { item: 'industrialforegoing:laser_drill' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'bloodmagic:chargingrune' },
                { item: 'bloodmagic:dislocationrune' },
                { item: 'bloodmagic:accelerationrune' },
                { item: 'bloodmagic:chargingrune' },
                { item: 'bloodmagic:dislocationrune' },
                { item: 'bloodmagic:accelerationrune' },
                { item: 'bloodmagic:chargingrune' },
                { item: 'bloodmagic:dislocationrune' },
                { item: 'bloodmagic:accelerationrune' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}worldshaper_barrel`
        },
        {
            output: outputItemIfRegistered('create:handheld_worldshaper'),
            altar_type: 3,
            duration: 1200,
            starlight: 7000,
            pattern: ['_____', '_AAB_', '___C_', '_____', '_____'],
            key: {
                A: { item: 'kubejs:worldshaper_barrel' },
                B: { item: 'kubejs:worldshaper_cog' },
                C: { item: 'kubejs:worldshaper_handle' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'kubejs:automation_mastery_token' },
                { item: 'kubejs:botanical_mastery_token' },
                { item: 'kubejs:engineering_mastery_token' },
                { item: 'kubejs:astronomy_mastery_token' },
                { item: 'kubejs:energistics_mastery_token' },
                { item: 'kubejs:alchemy_mastery_token' },
                { item: 'kubejs:dimensional_mastery_token' },
                { item: 'kubejs:ritual_mastery_token' },
                { item: 'kubejs:battle_mastery_token' },
                { item: 'kubejs:aura_mastery_token' },
                { item: 'kubejs:excavation_mastery_token' },
                { item: 'kubejs:culinary_mastery_token' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}handheld_worldshaper`
        }
    ];

    function mapIngredientId(value, tag) {
        if (typeof value !== 'string') return null;
        if (!tag && missingModItemReplacements[value] && e6eRegisteredItemExists(missingModItemReplacements[value])) {
            return missingModItemReplacements[value];
        }
        if (tag) {
            const rawTag = `#${value}`;
            const commonTag = rawTag.replace(/^#forge:/, '#c:');
            if (commonTag !== rawTag && e6eRegisteredItemTagHasItems(commonTag)) return commonTag.substring(1);
            const mappedTag = e6eMapNeoVitaeIngredient(rawTag);
            if (mappedTag) return mappedTag.substring(1);
            return value;
        }
        return e6eMapNeoVitaeItemId(value) || value;
    }

    function mapAstralIngredient(ingredient) {
        if (Array.isArray(ingredient)) return ingredient.every(mapAstralIngredient);
        if (!ingredient || typeof ingredient !== 'object') return false;
        if (ingredient.item != null) {
            const mapped = mapIngredientId(String(ingredient.item), false);
            if (!mapped) return false;
            ingredient.item = mapped;
            return true;
        }
        if (ingredient.tag != null) {
            const rawTag = String(ingredient.tag).replace(/^#/, '');
            const substituteItem = missingModTagItemReplacements[rawTag];
            if (substituteItem && e6eRegisteredItemExists(substituteItem)) {
                delete ingredient.tag;
                ingredient.item = substituteItem;
                return true;
            }
            if (rawTag.startsWith('botania:runes/') && e6eRegisteredItemExists('astralsorcery:resonating_gem')) {
                delete ingredient.tag;
                ingredient.item = 'astralsorcery:resonating_gem';
                return true;
            }
            const mapped = mapIngredientId(rawTag, true);
            if (!mapped) return false;
            ingredient.tag = mapped;
            return true;
        }
        return true;
    }

    recipes.forEach((recipe) => {
        if (!Object.values(recipe.key).every(mapAstralIngredient)) return;
        if (recipe.relay_inputs && !recipe.relay_inputs.every(mapAstralIngredient)) return;

        var constructed_recipe = e6eAstralAltarRecipe(recipe);
        if (!constructed_recipe) return;

        try {
            event.custom(constructed_recipe).id(recipe.id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id}: ${error}`);
        }
    });
});
})();
