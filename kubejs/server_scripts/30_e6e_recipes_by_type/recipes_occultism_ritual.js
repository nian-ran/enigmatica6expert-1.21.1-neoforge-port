// 配方类型：occultism:ritual
// 中文名称：仪式合成
// 用途：用于登记神秘学的仪式合成配方。

(function () {
if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/ritual/';
    const recipes = [
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_afrit',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:rain_weather',
            entity_to_sacrifice: { tag: 'forge:cows', display_name: 'ritual.occultism.sacrifice.cows' },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_rain_weather',
            ingredients: ['#forge:sand', '#forge:gems/diamond', 'minecraft:cactus', 'minecraft:dead_bush'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_afrit_rain_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_afrit',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:thunder_weather',
            entity_to_sacrifice: { tag: 'forge:cows', display_name: 'ritual.occultism.sacrifice.cows' },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_thunder_weather',
            ingredients: ['#forge:bones', '#forge:gunpowder', '#forge:gunpowder', 'minecraft:ghast_tear'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_afrit_thunder_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:clear_weather',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_clear_weather',
            ingredients: ['#forge:crops/beetroot', '#forge:crops/carrot', '#forge:crops/potato', '#forge:crops/wheat'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_clear_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:day_time',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_day_time',
            ingredients: ['minecraft:torch', '#minecraft:saplings', 'minecraft:wheat', '#forge:dyes/yellow'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_day_time'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:night_time',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_night_time',
            ingredients: ['#minecraft:beds', 'minecraft:rotten_flesh', '#forge:bones', '#forge:dyes/black'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_night_time'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherstone_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_otherstone_trader',
            ingredients: ['minecraft:stone', 'minecraft:granite', 'minecraft:diorite', 'minecraft:andesite'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_otherstone_trader'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherworld_saplings_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_sapling_trader',
            ingredients: [
                'minecraft:oak_sapling',
                'minecraft:birch_sapling',
                'minecraft:spruce_sapling',
                'minecraft:jungle_sapling'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_sapling_trader'
        },

        {
            ritual_type: 'occultism:craft',
            activation_item: 'resourcefulbees:illuminating_honey_bottle',
            pentacle_id: 'occultism:craft_foliot',
            duration: 30,
            ritual_dummy: 'kubejs:craft_otherworldly_honey_bottle',
            ingredients: [
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb'
            ],
            result: 'resourcefulbees:otherworldly_honey_bottle',
            id: `${id_prefix}craft_otherworldly_honey_bottle`
        }
    ];

    /*
        JEI 中显示的原料
            ingredients: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
// Occultism 仪式按当前可用内容逐条注册。
if (e6ePortedRecipeModLoaded('occultism') && e6ePortedRecipeModLoaded('occultism_kubejs')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_infused_pickaxe',
            ingredients: [
                'occultism:spirit_attuned_pickaxe_head',
                'betterendforge:leather_wrapped_stick',
                'eidolon_repraised:ender_calx',
                'betterendforge:leather_wrapped_stick',
                '#forge:nuggets/nebu',
                '#forge:nuggets/nebu'
            ],
            result: 'occultism:infused_pickaxe',
            id: 'occultism:ritual/craft_infused_pickaxe'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_soul_gem',
            ingredients: [
                'eidolon_repraised:lesser_soul_gem',
                'eidolon_repraised:gold_inlay',
                'bloodmagic:reagentholding',
                'eidolon_repraised:gold_inlay',
                'glassential:glass_ghostly',
                'glassential:glass_ghostly',
                'glassential:glass_ghostly',
                'glassential:glass_ghostly'
            ],
            result: 'occultism:soul_gem',
            id: 'occultism:ritual/craft_soul_gem'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:camels',
                display_name: 'ritual.occultism.sacrifice.camels'
            },
            entity_to_summon: 'occultism:afrit_wild',
            ritual_dummy: 'occultism:ritual_dummy/summon_wild_afrit',
            ingredients: [
                'eidolon_repraised:gold_inlay',
                '#botania:runes/fire',
                'eidolon_repraised:crimson_essence',
                '#botania:runes/fire',
                'ars_nouveau:red_archwood_wood',
                'ars_nouveau:red_archwood_wood',
                'ars_nouveau:red_archwood_wood',
                'ars_nouveau:red_archwood_wood'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_wild_afrit'
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_dimensional_matrix',
            ingredients: [
                '#quark:crystal_clusters',
                '#quark:crystal_clusters',
                '#quark:crystal_clusters',
                '#quark:crystal_clusters',
                'eidolon_repraised:ender_calx',
                'eidolon_repraised:ender_calx',
                'eidolon_repraised:ender_calx',
                'eidolon_repraised:ender_calx',
                'atum:crystal_glass',
                'atum:crystal_glass',
                'atum:crystal_glass',
                'atum:crystal_glass'
            ],
            result: 'occultism:dimensional_matrix',
            id: 'occultism:ritual/craft_dimensional_matrix'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_stabilizer_tier1',
            ingredients: [
                'occultism:otherstone_pedestal',
                '#forge:storage_blocks/bronze',
                'ars_nouveau:glyph_ender_inventory',
                '#forge:storage_blocks/bronze',
                '#quark:runes',
                '#quark:runes',
                '#quark:runes',
                '#quark:runes',
                'atum:crystal_glass',
                'atum:crystal_glass',
                'atum:crystal_glass',
                'atum:crystal_glass'
            ],
            result: 'occultism:storage_stabilizer_tier1',
            id: 'occultism:ritual/craft_stabilizer_tier1'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_stabilizer_tier2',
            ingredients: [
                'occultism:storage_stabilizer_tier1',
                '#forge:storage_blocks/silver',
                'tconstruct:ender_slime_crystal',
                '#forge:storage_blocks/silver',
                '#forge:gems/dimensional',
                '#forge:gems/dimensional',
                '#forge:gems/dimensional',
                '#forge:gems/dimensional',
                '#atum:godshards',
                '#atum:godshards',
                '#atum:godshards',
                '#atum:godshards'
            ],
            result: 'occultism:storage_stabilizer_tier2',
            id: 'occultism:ritual/craft_stabilizer_tier2'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:craft_afrit',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_stabilizer_tier3',
            ingredients: [
                'occultism:storage_stabilizer_tier2',
                '#forge:storage_blocks/electrum',
                '#botania:runes/greed',
                '#forge:storage_blocks/electrum',
                'occultism:spirit_attuned_crystal',
                'occultism:spirit_attuned_crystal',
                'betterendforge:eternal_crystal',
                'betterendforge:eternal_crystal',
                'bloodmagic:defaultcrystal',
                'bloodmagic:defaultcrystal',
                'bloodmagic:defaultcrystal',
                'bloodmagic:defaultcrystal'
            ],
            result: 'occultism:storage_stabilizer_tier3',
            id: 'occultism:ritual/craft_stabilizer_tier3'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_marid',
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_stabilizer_tier4',
            ingredients: [
                'occultism:storage_stabilizer_tier3',
                '#forge:storage_blocks/iesnium',
                '#botania:runes/envy',
                '#forge:storage_blocks/iesnium',
                'occultism:spirit_attuned_crystal',
                'occultism:spirit_attuned_crystal',
                'astralsorcery:celestial_crystal',
                'astralsorcery:celestial_crystal',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:steadfastcrystal'
            ],
            result: 'occultism:storage_stabilizer_tier4',
            id: 'occultism:ritual/craft_stabilizer_tier4'
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_miner_djinni_ores',
            ingredients: [
                'occultism:magic_lamp_empty',
                'occultism:iesnium_pickaxe[minecraft:damage=0]',
                'atum:ptah_godforged_block',
                '#forge:storage_blocks/iesnium',
                'occultism:spirit_attuned_crystal'
            ],
            result: 'occultism:miner_djinni_ores',
            id: 'occultism:ritual/craft_miner_djinni_ores'
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_miner_foliot_unspecialized',
            ingredients: [
                'occultism:magic_lamp_empty',
                'naturesaura:infused_iron_pickaxe[minecraft:damage=0]',
                '#atum:relic_non_dirty/brooch',
                'atum:limestone_gravel'
            ],
            result: 'occultism:miner_foliot_unspecialized',
            id: 'occultism:ritual/craft_miner_foliot_unspecialized'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_dimensional_mineshaft',
            ingredients: [
                'bloodmagic:infusedslate',
                'bloodmagic:infusedslate',
                'bloodmagic:infusedslate',
                'bloodmagic:infusedslate',
                'atum:scarab',
                '#forge:storage_blocks/iesnium',
                'occultism:spirit_attuned_crystal',
                'atum:scarab'
            ],
            result: 'occultism:dimensional_mineshaft',
            id: 'occultism:ritual/craft_dimensional_mineshaft'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 90,
            ritual_dummy: 'occultism:ritual_dummy/craft_familiar_ring',
            ingredients: [
                'occultism:soul_gem',
                'eidolon_repraised:gold_inlay',
                '#atum:relic_non_dirty/ring',
                'eidolon_repraised:gold_inlay'
            ],
            result: 'occultism:familiar_ring',
            id: 'occultism:ritual/craft_familiar_ring'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_storage_controller_base',
            ingredients: [
                'occultism:otherstone_pedestal',
                'eidolon_repraised:gold_inlay',
                '#forge:ingots/nebu',
                'eidolon_repraised:gold_inlay',
                'botania:corporea_spark_master'
            ],
            result: 'occultism:storage_controller_base',
            id: 'occultism:ritual/craft_storage_controller_base'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_stable_wormhole',
            ingredients: [
                'occultism:wormhole_frame',
                'botania:corporea_spark',
                'botania:corporea_funnel',
                'botania:corporea_spark'
            ],
            result: 'occultism:stable_wormhole',
            id: 'occultism:ritual/craft_stable_wormhole'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_storage_remote',
            ingredients: [
                'occultism:storage_remote_inert',
                'botania:corporea_spark',
                'atum:scarab',
                'botania:corporea_spark'
            ],
            result: 'occultism:storage_remote',
            id: 'occultism:ritual/craft_storage_remote'
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_satchel',
            ingredients: [
                'ironchest:silver_chest',
                'ars_nouveau:end_fiber',
                'alexsmobs:kangaroo_hide',
                'ars_nouveau:end_fiber',
                '#forge:ingots/infused_iron'
            ],
            result: 'occultism:satchel',
            id: 'occultism:ritual/craft_satchel'
        },

        // 1x Ore Processing（1 倍矿石处理）
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ingredients: [
                'naturesaura:crushing_catalyst',
                '#forge:ingots/nebu',
                'atum:nebu_hammer',
                '#forge:ingots/nebu',
                '#botania:runes/earth',
                '#botania:runes/earth',
                '#botania:runes/water',
                '#botania:runes/water'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_crusher'
        },

        // 2x Ore Processing（2 倍矿石处理）
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 90,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier2',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_crusher',
            ingredients: [
                'naturesaura:crushing_catalyst',
                '#forge:ingots/sky',
                'naturesaura:sky_pickaxe[minecraft:damage=0]',
                '#forge:ingots/sky',
                '#botania:runes/earth',
                '#botania:runes/earth',
                '#botania:runes/water',
                '#botania:runes/water'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_crusher'
        },
        // 3x Ore Processing（3 倍矿石处理）
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_afrit',
            duration: 120,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier3',
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_crusher',
            ingredients: [
                'naturesaura:crushing_catalyst',
                '#botania:runes/joetunheim',
                'botania:terra_pick[minecraft:damage=0]',
                '#botania:runes/joetunheim',
                '#botania:runes/earth',
                '#botania:runes/earth',
                '#botania:runes/water',
                '#botania:runes/water'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_afrit_crusher'
        },

        // 4x Ore Processing（4 倍矿石处理）
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_marid',
            pentacle_id: 'occultism:summon_marid',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier4',
            entity_to_summon: 'occultism:marid',
            ritual_dummy: 'occultism:ritual_dummy/summon_marid_crusher',
            ingredients: [
                'naturesaura:crushing_catalyst',
                '#botania:runes/vanaheim',
                'mythicbotany:alfsteel_pick[minecraft:damage=0]',
                '#botania:runes/vanaheim',
                '#botania:runes/earth',
                '#botania:runes/earth',
                '#botania:runes/water',
                '#botania:runes/water'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_marid_crusher'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'occultism:humans',
                display_name: 'ritual.occultism.sacrifice.humans'
            },
            entity_to_summon: 'occultism:greedy_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_greedy',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'ironchest:silver_chest',
                '#forge:storage_blocks/silver',
                'minecraft:lodestone',
                'meetyourfight:spectres_grasp'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_greedy'
        },
        {
            ritual_type: 'occultism:summon_tamed',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'forge:parrots',
                display_name: 'ritual.occultism.sacrifice.parrots'
            },
            entity_to_summon: 'occultism:otherworld_bird',
            ritual_dummy: 'occultism:ritual_dummy/familiar_otherworld_bird',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'tconstruct:sky_cake',
                'simplefarming:raw_chicken_wings',
                'naturesaura:token_anger',
                'simplefarming:raw_chicken_wings'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_otherworld_bird'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'forge:bats',
                display_name: 'ritual.occultism.sacrifice.bats'
            },
            entity_to_summon: 'occultism:bat_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_bat',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'atum:golden_date',
                'ars_nouveau:wilden_wing',
                '#forge:fruits/banana',
                'ars_nouveau:wilden_wing'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_bat'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'enigmatica:deer',
                display_name: 'ritual.occultism.sacrifice.deer'
            },
            entity_to_summon: 'occultism:deer_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_deer',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_apple',
                'minecraft:golden_apple'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_deer'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'enigmatica:thrashers',
                display_name: 'ritual.occultism.sacrifice.thrashers'
            },
            entity_to_summon: 'occultism:cthulhu_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_cthulhu',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'aquaculture:neptunium_helmet[minecraft:damage=0]',
                '#forge:heads',
                'sushigocrafting:shrimp_nigiri',
                'sushigocrafting:shrimp_nigiri'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_cthulhu'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'enigmatica:dropbears',
                display_name: 'ritual.occultism.sacrifice.dropbears'
            },
            entity_to_summon: 'occultism:devil_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_devil',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'botania:cosmetic_devil_horns',
                'botania:cosmetic_devil_tail',
                'quark:soul_bead',
                'quark:soul_bead',
                'byg:hanging_bones',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores',
                'byg:hanging_bones'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_devil'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'enigmatica:rattlesnakes',
                display_name: 'ritual.occultism.sacrifice.rattlesnakes'
            },
            entity_to_summon: 'occultism:dragon_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_dragon',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                '#forge:clusters/emerald',
                '#forge:clusters/emerald',
                'alexsmobs:lava_bottle',
                '#forge:clusters/arcane',
                '#forge:clusters/arcane',
                'alexsmobs:lava_bottle'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_dragon'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'forge:golems/snow',
                display_name: 'ritual.occultism.sacrifice.snow_golem'
            },
            entity_to_summon: 'occultism:headless_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_headless',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'simplefarming:scarecrow',
                'sushigocrafting:cleaver_knife',
                'simplefarming:cheese_block',
                'simplefarming:cheese_block',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_headless'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'enigmatica:canines',
                display_name: 'ritual.occultism.sacrifice.canines'
            },
            entity_to_summon: 'occultism:chimera_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_chimera',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'alexsmobs:gazelle_horn',
                'alexsmobs:gazelle_horn',
                'alexsmobs:rattlesnake_rattle',
                'alexsmobs:bear_fur',
                'farmersdelight:horse_feed',
                'farmersdelight:dog_food',
                'farmersdelight:dog_food',
                'farmersdelight:horse_feed'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_chimera'
        },
        {
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:possess_afrit',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'occultism:humans',
                display_name: 'ritual.occultism.sacrifice.humans'
            },
            entity_to_summon: 'occultism:guardian_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_guardian',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                '#forge:gems/mana',
                '#forge:gems/mana',
                'ars_nouveau:warding_stone',
                'ars_nouveau:warding_stone',
                'ars_nouveau:warding_stone',
                'ars_nouveau:mythical_clay',
                'ars_nouveau:mythical_clay',
                'ars_nouveau:warding_stone'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_guardian'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'forge:zombies',
                display_name: 'ritual.occultism.sacrifice.zombies'
            },
            entity_to_summon: 'occultism:blacksmith_familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_blacksmith',
            ingredients: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'betterendforge:terminite_anvil',
                'betterendforge:terminite_hammer[minecraft:damage=0]',
                'minecraft:blast_furnace',
                'supplementaries:bellows',
                '#forge:storage_blocks/coal',
                '#forge:storage_blocks/coal',
                '#forge:storage_blocks/coal',
                '#forge:storage_blocks/coal'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/familiar_blacksmith'
        },

        /// Custom Rituals（自定义仪式）
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: 'kubejs:craft_magicfeather',
            ingredients: [
                'alexsmobs:roadrunner_feather',
                '#forge:ingots/sky',
                'ars_nouveau:belt_of_levitation',
                '#forge:ingots/sky',
                'bloodmagic:reagentair',
                'bloodmagic:reagentair',
                '#botania:runes/air',
                '#botania:runes/air'
            ],
            result: 'magicfeather:magicfeather',
            id: `${id_prefix}magicfeather`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'materialis:fairy_block',
            pentacle_id: 'occultism:craft_marid',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:dragons',
                display_name: 'ritual.occultism.sacrifice.dragons'
            },
            ritual_dummy: 'kubejs:craft_magical_feathers',
            ingredients: [
                'botania:flight_tiara',
                'astralsorcery:shifting_star_vicio',
                'ars_nouveau:wilden_tribute',
                'astralsorcery:shifting_star_vicio',
                'magicfeather:magicfeather',
                'magicfeather:magicfeather',
                'magicfeather:magicfeather',
                'magicfeather:magicfeather',
                '#forge:ingots/gaia',
                'bloodmagic:steadfastcrystal',
                '#forge:ingots/gaia',
                'bloodmagic:steadfastcrystal'
            ],
            result: 'losttrinkets:magical_feathers',
            id: `${id_prefix}magical_feathers`
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'occultism:humans',
                display_name: 'ritual.occultism.sacrifice.humans'
            },
            entity_to_summon: 'atum:pharaoh',
            ritual_dummy: 'kubejs:summon_pharaoh',
            ingredients: [
                '#atum:godshards',
                'atum:golden_date_enchanted',
                '#forge:ingots/nebu',
                '#forge:heads',
                '#atum:godshards',
                '#atum:godshards',
                '#forge:ingots/nebu',
                '#forge:ingots/nebu',
                'atum:linen_bandage',
                'atum:linen_bandage',
                'atum:linen_bandage',
                'atum:linen_bandage'
            ],
            result: 'occultism:jei_dummy/none',
            id: `${id_prefix}pharaoh`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 100,
            ritual_dummy: 'kubejs:craft_spirit_entropic_gateway',
            ingredients: [
                'ars_nouveau:void_jar',
                'atum:shu_godshard',
                'powah:thermoelectric_plate',
                'atum:shu_godshard',
                '#botania:runes/fire',
                '#botania:runes/fire',
                '#botania:runes/water',
                '#botania:runes/water'
            ],
            result: 'kubejs:spirit_entropic_gateway',
            id: `${id_prefix}spirit_entropic_gateway`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'kubejs:craft_soulsword',
            ingredients: [
                'undergarden:forgotten_sword[minecraft:damage=0]',
                'bloodmagic:soulgempetty',
                '#botania:runes/helheim',
                '#forge:ingots/iesnium'
            ],
            result: 'bloodmagic:soulsword',
            id: `${id_prefix}soulsword`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'kubejs:craft_soulaxe',
            ingredients: [
                'undergarden:forgotten_axe[minecraft:damage=0]',
                'bloodmagic:soulgempetty',
                '#botania:runes/helheim',
                '#forge:ingots/iesnium'
            ],
            result: 'bloodmagic:soulaxe',
            id: `${id_prefix}soulaxe`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'kubejs:craft_soulpickaxe',
            ingredients: [
                'undergarden:forgotten_pickaxe[minecraft:damage=0]',
                'bloodmagic:soulgempetty',
                '#botania:runes/helheim',
                '#forge:ingots/iesnium'
            ],
            result: {
                item: 'bloodmagic:soulpickaxe',
                nbt: { 'occultism:otherworldToolTier': 2 }
            },
            id: `${id_prefix}soulpickaxe`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'kubejs:craft_soulshovel',
            ingredients: [
                'undergarden:forgotten_shovel[minecraft:damage=0]',
                'bloodmagic:soulgempetty',
                '#botania:runes/helheim',
                '#forge:ingots/iesnium'
            ],
            result: 'bloodmagic:soulshovel',
            id: `${id_prefix}soulshovel`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'kubejs:craft_soulscythe',
            ingredients: [
                'undergarden:forgotten_hoe[minecraft:damage=0]',
                'bloodmagic:soulgempetty',
                '#botania:runes/helheim',
                '#forge:ingots/iesnium'
            ],
            result: 'bloodmagic:soulscythe',
            id: `${id_prefix}soulscythe`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'botania:runic_altar',
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'enigmatica:gaia_guardian',
                display_name: 'ritual.occultism.sacrifice.gaia_guardian'
            },
            ritual_dummy: 'kubejs:craft_attunement_altar',
            ingredients: [
                'mythicbotany:kvasir_blood',
                '#botania:runes/asgard',
                '#botania:runes/mana',
                '#botania:runes/midgard',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:corrosivecrystal',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:destructivecrystal',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:vengefulcrystal',
                '#forge:ingots/gaia_spirit'
            ],
            result: 'astralsorcery:attunement_altar',
            id: `${id_prefix}attunement_altar`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: '#botania:runes/midgard',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'enigmatica:pharaohs',
                display_name: 'ritual.occultism.sacrifice.pharaohs'
            },
            ritual_dummy: 'kubejs:craft_mana_collector',
            ingredients: [
                '#botania:runes/asgard',
                'botania:gaia_spreader',
                '#botania:runes/niflheim',
                'botania:gaia_spreader',
                '#botania:runes/muspelheim',
                '#botania:runes/nidavellir',
                '#forge:ingots/gaia_spirit',
                '#botania:runes/joetunheim',
                '#botania:runes/alfheim',
                '#botania:runes/helheim',
                '#forge:ingots/gaia_spirit',
                '#botania:runes/vanaheim'
            ],
            result: 'mythicbotany:mana_collector',
            id: `${id_prefix}mana_collector`
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: 'botania:goddess_charm',
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:wither',
                display_name: 'ritual.occultism.sacrifice.wither'
            },
            entity_to_summon: 'botania:pink_wither',
            ritual_dummy: 'kubejs:summon_pink_wither',
            ingredients: [
                'minecraft:brain_coral_block',
                '#forge:storage_blocks/fairy',
                'tconstruct:silky_cloth',
                '#forge:storage_blocks/fairy',
                'minecraft:brain_coral_block',
                'atum:anubis_godshard',
            'minecraft:potion[minecraft:potion_contents={potion:"upgrade_aquatic:vibing"}]',
                'quark:pink_rune',
                'minecraft:brain_coral_block',
                'quark:pink_rune',
            'minecraft:potion[minecraft:potion_contents={potion:"upgrade_aquatic:vibing"}]',
                'atum:anubis_godshard'
            ],
            result: 'occultism:jei_dummy/none',
            id: `${id_prefix}pink_wither`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'kubejs:craft_robit',
            ingredients: [
                '#industrialforegoing:machine_frame/pity',
                'create:belt_connector',
                '#forge:dusts/salt',
                'create:belt_connector',
                '#forge:circuits/basic',
                '#forge:gears/osmium',
                'create:encased_chain_drive',
                '#forge:gears/osmium',
                '#forge:circuits/basic',
                '#forge:gears/osmium',
                'create:encased_chain_drive',
                '#forge:gears/osmium'
            ],
            result: 'mekanism:robit',
            id: `${id_prefix}robit`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_feeding_upgrade',
            ingredients: [
                'create:mechanical_arm',
                'farmersdelight:netherite_knife[minecraft:damage=0]',
                '#sophisticatedbackpacks:upgrades/base',
                'tconstruct:silky_cloth'
            ],
            result: 'sophisticatedbackpacks:feeding_upgrade',
            id: `${id_prefix}feeding_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_marid',
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            ritual_dummy: 'kubejs:craft_advanced_feeding_upgrade',
            ingredients: [
                '#sophisticatedbackpacks:upgrades/feeding',
                '#botania:runes/gluttony',
                'botania:pixie_dust',
                '#botania:runes/gluttony'
            ],
            result: 'sophisticatedbackpacks:advanced_feeding_upgrade',
            id: `${id_prefix}advanced_feeding_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_auto_smelting_upgrade',
            ingredients: [
                '#sophisticatedbackpacks:upgrades/smelting',
                'create:brass_funnel',
                'create:mechanical_arm',
                'create:brass_funnel'
            ],
            result: 'sophisticatedbackpacks:auto_smelting_upgrade',
            id: `${id_prefix}auto_smelting_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'kubejs:craft_pump_upgrade',
            ingredients: [
                'create:mechanical_pump',
                'create:fluid_pipe',
                '#sophisticatedbackpacks:upgrades/base',
                'create:fluid_pipe',
                'create:cogwheel',
                'create:hand_crank'
            ],
            result: 'sophisticatedbackpacks:pump_upgrade',
            id: `${id_prefix}pump_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_advanced_pump_upgrade',
            ingredients: [
                'create:smart_fluid_pipe',
                'create:fluid_pipe',
                '#sophisticatedbackpacks:upgrades/pump',
                'create:fluid_pipe',
                '#sophisticatedbackpacks:upgrades/advanced_filter'
            ],
            result: 'sophisticatedbackpacks:advanced_pump_upgrade',
            id: `${id_prefix}advanced_pump_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_xp_pump_upgrade',
            ingredients: [
                'create:smart_fluid_pipe',
                'create:fluid_pipe',
                '#sophisticatedbackpacks:upgrades/pump',
                'create:fluid_pipe',
                '#sophisticatedbackpacks:upgrades/filter',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:greater_experience_gem',
                'ars_nouveau:greater_experience_gem'
            ],
            result: 'sophisticatedbackpacks:xp_pump_upgrade',
            id: `${id_prefix}xp_pump_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_advanced_compacting_upgrade',
            ingredients: [
                'sophisticatedbackpacks:compacting_upgrade',
                'create:precision_mechanism',
                '#sophisticatedbackpacks:upgrades/advanced_filter',
                'create:precision_mechanism',
                '#forge:gears/lumium',
                '#forge:gears/lumium',
                '#forge:gears/lumium',
                '#forge:gears/lumium'
            ],
            result: 'sophisticatedbackpacks:advanced_compacting_upgrade',
            id: `${id_prefix}advanced_compacting_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'kubejs:craft_tool_swapper_upgrade',
            ingredients: [
                'create:deployer',
                'create:hand_crank',
                'meetyourfight:spectres_eye',
                '#sophisticatedbackpacks:upgrades/base',
                'create:large_cogwheel',
                'create:cogwheel'
            ],
            result: 'sophisticatedbackpacks:tool_swapper_upgrade',
            id: `${id_prefix}tool_swapper_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_advanced_tool_swapper_upgrade',
            ingredients: [
                '#sophisticatedbackpacks:upgrades/tool_swapper',
                'create:precision_mechanism',
                '#sophisticatedbackpacks:upgrades/advanced_filter',
                'create:precision_mechanism',
                '#forge:gears/lumium',
                '#forge:gears/lumium',
                '#forge:gears/lumium',
                '#forge:gears/lumium'
            ],
            result: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
            id: `${id_prefix}advanced_tool_swapper_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'kubejs:craft_refill_upgrade',
            ingredients: [
                'create:chute',
                'rsgauges:oldfancy_bistableswitch1',
                'meetyourfight:spectres_eye',
                '#sophisticatedbackpacks:upgrades/base'
            ],
            result: 'sophisticatedbackpacks:refill_upgrade',
            id: `${id_prefix}refill_upgrade`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'kubejs:craft_glyph_sentientharm',
            ingredients: [
                'ars_nouveau:marvelous_clay',
                'bloodmagic:soulgempetty',
                'tomeofblood:blood_gem',
                'ars_nouveau:blank_parchment'
            ],
            result: 'ars_nouveau:glyph_sentientharm',
            id: `${id_prefix}glyph_sentientharm`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_turtle_normal',
            ingredients: [
                'aquaculture:box_turtle',
                'computercraft:computer_normal',
                'create:deployer',
                'minecraft:furnace',
                'mekanism:jetpack',
                'pneumaticcraft:reinforced_chest'
            ],
            result: 'computercraft:turtle_normal',
            id: `${id_prefix}turtle_normal`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'kubejs:craft_turtle_advanced',
            ingredients: [
                'aquaculture:box_turtle',
                'computercraft:computer_advanced',
                'create:deployer',
                'minecraft:blast_furnace',
                'mekanism:jetpack',
                'mekanism:jetpack',
                'pneumaticcraft:reinforced_chest'
            ],
            result: 'computercraft:turtle_advanced',
            id: `${id_prefix}turtle_advanced`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'kubejs:craft_ender_dagger',
            ingredients: [
                'bloodmagic:daggerofsacrifice',
                'eidolon_repraised:shadow_gem',
                '#botania:runes/nidavellir',
                'powah:ender_core',
                '#forge:inlays/arcane_gold',
                '#forge:inlays/arcane_gold',
                'botania:mana_pearl',
                'botania:mana_pearl'
            ],
            result: { id: 'botania:ender_dagger', count: 1, components: { 'minecraft:unbreakable': {} } },
            id: `${id_prefix}ender_dagger`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'kubejs:dimensional_storage_crystal',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            entity_to_sacrifice: {
                tag: 'enigmatica:apes',
                display_name: 'ritual.occultism.sacrifice.apes'
            },
            ritual_dummy: 'kubejs:craft_enchantment_library',
            ingredients: [
                'minecraft:enchanting_table',
                '#tconstruct:scorched_blocks',
                ['byg:green_enchanted_bookshelf', 'byg:blue_enchanted_bookshelf'],
                '#tconstruct:scorched_blocks',
                'botania:mana_pylon',
                'botania:mana_pylon',
                'botania:mana_pylon',
                'botania:mana_pylon',
                '#forge:fruits/banana',
                '#forge:fruits/banana',
                '#forge:fruits/banana',
                '#forge:fruits/banana'
            ],
            result: 'apotheosis:enchantment_library',
            id: `${id_prefix}enchantment_library`
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 60,
            ritual_dummy: 'kubejs:craft_fisher_foliot',
            ingredients: [
                'occultism:magic_lamp_empty',
                'atum:atems_bounty[minecraft:damage=0]',
                'minecraft:heart_of_the_sea',
                'aquaculture:nether_star_hook'
            ],
            result: { id: 'kubejs:fisher_foliot', count: 1, components: { 'minecraft:custom_data': { rollsPerOperation: 1, maxMiningTime: 400 } } },
            id: `${id_prefix}craft_fisher_foliot`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'industrialforegoing:stasis_chamber',
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'enigmatica:gaia_guardian',
                display_name: 'ritual.occultism.sacrifice.gaia_guardian'
            },
            ritual_dummy: 'kubejs:craft_gaia_reactor_controller',
            ingredients: [
                '#forge:pellets/antimatter',
                '#botania:runes/wrath',
                '#botania:runes/vanaheim',
                '#botania:runes/greed',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:corrosivecrystal',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:destructivecrystal',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:vengefulcrystal',
                '#forge:ingots/gaia_spirit'
            ],
            result: 'masterfulmachinery:gaia_reactor_controller',
            id: `${id_prefix}gaia_reactor_controller`
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: 'occultism:book_of_binding_bound_marid',
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            ritual_dummy: 'kubejs:craft_miner_marid_irradiated',
            ingredients: [
                'occultism:magic_lamp_empty',
                'occultism:iesnium_pickaxe[minecraft:damage=0]',
                'atum:ptah_godforged_block',
                '#forge:storage_blocks/iesnium',
                '#forge:clusters/fluorite',
                '#forge:clusters/sulfur',
                '#forge:clusters/uranium',
                '#forge:clusters/uranium',
                '#forge:clusters/uranium',
                '#forge:clusters/uranium',
                '#forge:clusters/uranium',
                '#forge:clusters/uranium'
            ],
            result: { id: 'kubejs:miner_marid_irradiated', count: 1, components: { 'minecraft:custom_data': { rollsPerOperation: 4, maxMiningTime: 300 } } },
            id: `${id_prefix}miner_marid_irradiated`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:summon_focus',
            pentacle_id: 'occultism:craft_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/fire',
                display_name: 'ritual.occultism.sacrifice.elemental.fire'
            },
            ritual_dummy: 'kubejs:craft_fire_focus',
            ingredients: [
                '#botania:runes/fire',
                'minecraft:fire_charge',
                'minecraft:fire_charge',
                'minecraft:fire_charge',

                'atum:ra_godshard',
                'atum:ra_godshard',
                'atum:ra_godshard',
                'atum:ra_godshard',

                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb'
            ],
            result: 'ars_elemental:fire_focus',
            id: `${id_prefix}fire_focus`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:summon_focus',
            pentacle_id: 'occultism:craft_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/water',
                display_name: 'ritual.occultism.sacrifice.elemental.water'
            },
            ritual_dummy: 'kubejs:craft_water_focus',
            ingredients: [
                '#botania:runes/water',
                'thermal:ice_charge',
                'thermal:ice_charge',
                'thermal:ice_charge',

                'atum:tefnut_godshard',
                'atum:tefnut_godshard',
                'atum:tefnut_godshard',
                'atum:tefnut_godshard',

                'resourcefulbees:blizz_honeycomb',
                'resourcefulbees:blizz_honeycomb',
                'resourcefulbees:blizz_honeycomb',
                'resourcefulbees:blizz_honeycomb'
            ],
            result: 'ars_elemental:water_focus',
            id: `${id_prefix}water_focus`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:summon_focus',
            pentacle_id: 'occultism:craft_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/air',
                display_name: 'ritual.occultism.sacrifice.elemental.air'
            },
            ritual_dummy: 'kubejs:craft_air_focus',
            ingredients: [
                '#botania:runes/air',
                'thermal:lightning_charge',
                'thermal:lightning_charge',
                'thermal:lightning_charge',

                'atum:horus_godshard',
                'atum:horus_godshard',
                'atum:horus_godshard',
                'atum:horus_godshard',

                'resourcefulbees:blitz_honeycomb',
                'resourcefulbees:blitz_honeycomb',
                'resourcefulbees:blitz_honeycomb',
                'resourcefulbees:blitz_honeycomb'
            ],
            result: 'ars_elemental:air_focus',
            id: `${id_prefix}air_focus`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:summon_focus',
            pentacle_id: 'occultism:craft_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/earth',
                display_name: 'ritual.occultism.sacrifice.elemental.earth'
            },
            ritual_dummy: 'kubejs:craft_earth_focus',
            ingredients: [
                '#botania:runes/earth',
                'thermal:earth_charge',
                'thermal:earth_charge',
                'thermal:earth_charge',

                'atum:osiris_godshard',
                'atum:osiris_godshard',
                'atum:osiris_godshard',
                'atum:osiris_godshard',

                'resourcefulbees:basalz_honeycomb',
                'resourcefulbees:basalz_honeycomb',
                'resourcefulbees:basalz_honeycomb',
                'resourcefulbees:basalz_honeycomb'
            ],
            result: 'ars_elemental:earth_focus',
            id: `${id_prefix}earth_focus`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:summon_focus',
            pentacle_id: 'occultism:craft_afrit',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'enigmatica:wither',
                display_name: 'ritual.occultism.sacrifice.wither'
            },
            ritual_dummy: 'kubejs:craft_necrotic_focus',
            ingredients: [
                '#botania:runes/helheim',
                'eidolon_repraised:death_essence',
                'eidolon_repraised:death_essence',
                'eidolon_repraised:death_essence',

                'atum:nepthys_godshard',
                'atum:nepthys_godshard',
                'atum:nepthys_godshard',
                'atum:nepthys_godshard',

                'resourcefulbees:wither_honeycomb',
                'resourcefulbees:wither_honeycomb',
                'resourcefulbees:wither_honeycomb',
                'resourcefulbees:wither_honeycomb'
            ],
            result: 'ars_elemental:necrotic_focus',
            id: `${id_prefix}necrotic_focus`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'kubejs:craft_masterroutingnode',
            ingredients: [
                'eidolon_repraised:shadow_gem',
                'botania:corporea_spark',
                'architects_palette:moonstone',
                'botania:corporea_spark'
            ],
            result: 'bloodmagic:masterroutingnode',
            id: `${id_prefix}masterroutingnode`
        }
    ];

    /*
        Ingredient Display in JEI（JEI 中显示的原料位置）
            ingredients: [
                 '12 o'clock' , // 12 点钟方向
                 '3 o'clock' , // 3 点钟方向
                 '6 o'clock' , // 6 点钟方向
                 '9 o'clock' , // 9 点钟方向

                 '1 o'clock', // 1 点钟方向
                 '2 o'clock' , // 2 点钟方向
                 '7 o'clock' , // 7 点钟方向
                 '8 o'clock' , // 8 点钟方向

                 '11 o'clock' , // 11 点钟方向
                 '4 o'clock' , // 4 点钟方向
                 '5 o'clock' , // 5 点钟方向
                 '10 o'clock', // 10 点钟方向
            ],
    */
    let mycelial_generators = [
        { name: 'netherstar', ingredients: ['ars_nouveau:glyph_wither', 'minecraft:nether_star'] },
        { name: 'halitosis', ingredients: ['botania:dragonstone', 'minecraft:dragon_breath'] },
        { name: 'meatallurgic', ingredients: ['kubejs:meat_ingot', 'artifacts:eternal_steak'] },
        { name: 'potion', ingredients: ['atum:anputs_fingers_spores', 'botania:brewery'] },
        { name: 'magma', ingredients: ['tconstruct:magma_cake', 'minecraft:magma_block'] },
        { name: 'slimey', ingredients: ['tconstruct:earth_cake', 'botania:slime_bottle'] },
        { name: 'crimed', ingredients: ['minecraft:warped_wart_block', 'minecraft:shroomlight'] },
        { name: 'ender', ingredients: ['tconstruct:ender_cake', 'powah:ender_core'] },
        { name: 'explosive', ingredients: ['thermal:fire_tnt', 'industrialforegoing:infinity_nuke'] },
        { name: 'disenchantment', ingredients: ['apotheosis:draconic_endshelf', 'botania:rosa_arcana'] },
        {
            name: 'rocket',
            ingredients: ['minecraft:firework_rocket', 'alexsmobs:frontier_cap[minecraft:damage=0]']
        },
        {
            name: 'death',
            ingredients: ['eidolon_repraised:reaper_scythe[minecraft:damage=0]', 'naturesaura:chorus_generator']
        },
        { name: 'frosty', ingredients: ['thermal:ice_tnt', 'betterendforge:ancient_emerald_ice'] },
        { name: 'culinary', ingredients: ['create:builders_tea', 'nethers_delight:stuffed_hoglin_item'] },
        { name: 'pink', ingredients: ['industrialforegoing:pink_slime_ingot', 'botania:pinkinator'] },
        { name: 'furnace', ingredients: ['create:encased_fan', 'industrialforegoing:resourceful_furnace'] }
    ];
    mycelial_generators.forEach((mycelial_generator) => {
        recipes.push({
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:dimensional_matrix',
            pentacle_id: 'occultism:craft_marid',
            duration: 300,
            entity_to_sacrifice: {
                tag: 'enigmatica:mungus',
                display_name: 'ritual.occultism.sacrifice.mungus'
            },
            ritual_dummy: `industrialforegoing:mycelial_${mycelial_generator.name}`,
            ingredients: [
                mycelial_generator.ingredients[1],
                'mekanismgenerators:fusion_reactor_frame',
                '#industrialforegoing:machine_frame/supreme',
                'mekanismgenerators:fusion_reactor_frame',

                mycelial_generator.ingredients[0],
                'kubejs:celestial_mycelium_filaments',
                '#forge:circuits/ultimate',
                'kubejs:celestial_mycelium_filaments',

                mycelial_generator.ingredients[0],
                'kubejs:celestial_mycelium_filaments',
                '#forge:circuits/ultimate',
                'kubejs:celestial_mycelium_filaments'
            ],
            result: `industrialforegoing:mycelial_${mycelial_generator.name}`,
            id: `${id_prefix}mycelial_${mycelial_generator.name}`
        });
    });

    function resolveOccultismItemId(value) {
        var amount = value.match(/^(\d+\s*x\s*)/i);
        var prefix = amount ? amount[1] : '';
        var raw = amount ? value.substring(amount[0].length) : value;
        var componentIndex = raw.indexOf('[');
        var itemId = componentIndex >= 0 ? raw.substring(0, componentIndex) : raw;
        var componentSuffix = componentIndex >= 0 ? raw.substring(componentIndex) : '';

        if (itemId.startsWith('bloodmagic:') || itemId.startsWith('#bloodmagic:')) {
            const mapped = e6eMapNeoVitaeIngredient(itemId) || itemId;
            return prefix + mapped + componentSuffix;
        }
        if (itemId.startsWith('eidolon:')) {
            const mapped = e6eMapNeoVitaeItemId(itemId) || itemId;
            return prefix + mapped + componentSuffix;
        }
        if (itemId.startsWith('resourcefulbees:')) {
            if (itemId === 'resourcefulbees:wax') return prefix + 'productivebees:wax' + componentSuffix;
            if (itemId.endsWith('_honeycomb')) return prefix + 'productivebees:configurable_honeycomb' + componentSuffix;
            return e6eAttemptAllPortedRecipesEnabled() ? prefix + raw : null;
        }
        if (itemId.startsWith('#forge:')) {
            const commonTag = '#c:' + itemId.substring('#forge:'.length);
            if (e6eRecipeIngredientExists(commonTag)) return prefix + commonTag;
        }
        return prefix + raw;
    }

    function resolveOccultismIngredient(value) {
        if (Array.isArray(value)) {
            var occultismIngredientQueue = value.slice();
            var occultismResolvedAlternatives = [];
            for (var occultismIngredientIndex = 0; occultismIngredientIndex < occultismIngredientQueue.length; occultismIngredientIndex++) {
                var occultismCandidate = occultismIngredientQueue[occultismIngredientIndex];
                if (Array.isArray(occultismCandidate)) {
                    occultismCandidate.forEach((occultismNestedIngredient) => occultismIngredientQueue.push(occultismNestedIngredient));
                    continue;
                }
                if (typeof occultismCandidate !== 'string') continue;
                var occultismResolvedIngredient = resolveOccultismItemId(occultismCandidate);
                if (occultismResolvedIngredient && e6eRecipeIngredientExists(occultismResolvedIngredient)) {
                    occultismResolvedAlternatives.push(occultismResolvedIngredient);
                }
            }
            return occultismResolvedAlternatives.length > 0 ? occultismResolvedAlternatives : null;
        }
        if (typeof value !== 'string') return null;

        const resolvedIngredient = resolveOccultismItemId(value);
        return resolvedIngredient && e6eRecipeIngredientExists(resolvedIngredient) ? resolvedIngredient : null;
    }

    function resolveOccultismOutput(value) {
        if (typeof value === 'string') {
            var resolved = resolveOccultismItemId(value);
            return resolved && e6eRecipeOutputExists(resolved) ? resolved : null;
        }
        if (value && typeof value.id === 'string') {
            var mapped = resolveOccultismItemId(value.id);
            if (!mapped) return null;
            var result = Object.assign({}, value, { id: mapped });
            return e6eRecipeOutputExists(result) ? result : null;
        }
        return e6eRecipeOutputExists(value) ? value : null;
    }

    recipes.forEach((recipe) => {
        try {
        var activationItem = resolveOccultismIngredient(recipe.activation_item);
        var ritualDummy = resolveOccultismOutput(recipe.ritual_dummy);
        var ingredients = recipe.ingredients.map((input) => resolveOccultismIngredient(input));
        var result = resolveOccultismOutput(recipe.result);

        if (!activationItem || !ritualDummy || ingredients.some((input) => input === null) || !result) return;
        if (recipe.entity_to_summon) {
            var entityNamespace = recipe.entity_to_summon.split(':')[0];
            if (entityNamespace !== 'minecraft' && !e6ePortedRecipeModLoaded(entityNamespace)) return;
        }

        var recipeId = recipe.id;
        delete recipe.id;
        recipe.type = 'occultism:ritual';
        recipe.activation_item = Ingredient.of(activationItem).toJson();
        if (recipe.item_to_use) {
            var itemToUse = resolveOccultismIngredient(recipe.item_to_use);
            if (!itemToUse) return;
            recipe.item_to_use = Ingredient.of(itemToUse).toJson();
        }
        recipe.ritual_dummy = Item.of(ritualDummy).toJson();
        recipe.ingredients = ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(result).toJson();

        event.custom(recipe).id(recipeId);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id || 'occultism:ritual'}: ${error}`);
        }
    });
});

}
})();

(function () {
// 将 E6E 普通模式的 Occultism 仪式配方加入专家模式。
if (['occultism', 'aquaculture'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            spirit_job_type: 'occultism:crush_tier1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ingredients: ['#c:ores/iron', '#c:ores/gold', '#c:ores/copper', '#c:ores/silver'],
            result: {
                id: 'occultism:spawn_egg/foliot',
                count: 1,
                components: {
                    'minecraft:item_name': '{"translate":"item.occultism.ritual_dummy.summon_foliot_crusher"}',
                    'minecraft:lore': ['{"translate":"item.occultism.ritual_dummy.summon_foliot_crusher.tooltip"}']
                }
            },
            id: 'occultism:ritual/summon_foliot_crusher'
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 60,
            ritual_dummy: 'kubejs:craft_fisher_foliot',
            ingredients: [
                'occultism:magic_lamp_empty',
                'aquaculture:diamond_fishing_rod',
                'minecraft:sea_lantern',
                'aquaculture:diamond_hook'
            ],
            result: {
                id: 'kubejs:fisher_foliot',
                count: 1,
                components: {
                    'minecraft:custom_data': { rollsPerOperation: 3, maxMiningTime: 400 }
                }
            },
            id: 'enigmatica:normal/occultism/ritual/craft_fisher_foliot'
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: 'occultism:book_of_binding_bound_marid',
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            ritual_dummy: 'kubejs:craft_miner_marid_irradiated',
            ingredients: [
                'occultism:magic_lamp_empty',
                '#c:storage_blocks/iesnium',
                'occultism:iesnium_pickaxe',
                '#c:storage_blocks/iesnium',
                '#c:clusters/fluorite',
                '#c:clusters/sulfur',
                '#c:clusters/uranium',
                '#c:clusters/uranium',
                '#c:clusters/uranium',
                '#c:clusters/uranium',
                '#c:clusters/uranium',
                '#c:clusters/uranium'
            ],
            result: {
                id: 'kubejs:miner_marid_irradiated',
                count: 1,
                components: {
                    'minecraft:custom_data': { rollsPerOperation: 4, maxMiningTime: 300 }
                }
            },
            id: 'enigmatica:normal/occultism/ritual/miner_marid_irradiated'
        }
    ];

    recipes.forEach((recipe) => {
        const inputs = [recipe.activation_item, recipe.ritual_dummy].concat(recipe.ingredients);
        if (!inputs.every((input) => e6eRecipeIngredientExists(input))) return;
        if (!e6eRecipeOutputExists(recipe.result)) return;
        recipe.type = 'occultism:ritual';
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        if (typeof recipe.result === 'string') recipe.result = Item.of(recipe.result).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
}
})();
