// 配方类型：resourcefulbees:hive_upgrade_recipe
// 中文名称：蜂巢升级
// 用途：用于登记资源蜜蜂的蜂巢升级配方。

(function () {
if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/resourcefulbees/hive_upgrade/';
    const recipes = [
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: 'resourcefulbees:hive', tier: 4 }
            },
            result: { item: 'resourcefulbees:t1_apiary' },
            id: `${id_prefix}t1_apiary_nest`
        },
        {
            //允许复用蜂巢来合成世界内升级部件
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb' },
                B: { item: 'resourcefulbees:wax' },
                C: { type: 'resourcefulbees:hive', tier: 1 }
            },
            result: { item: 'resourcefulbees:t2_hive_upgrade' },
            id: `${id_prefix}t2_hive_upgrade_nest`
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:wax_block' },
                C: { type: 'resourcefulbees:hive', tier: 2 }
            },
            result: { item: 'resourcefulbees:t3_hive_upgrade' },
            id: `${id_prefix}t3_hive_upgrade_nest`
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: 'resourcefulbees:hive', tier: 3 }
            },
            result: { item: 'resourcefulbees:t4_hive_upgrade' },
            id: `${id_prefix}t4_hive_upgrade_nest`
        },
        {
            //旧版分级蜂巢到升级部件的转换
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t1_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t1_hive_upgrade' },
            id: `${id_prefix}t1_hive_upgrade_beehive`
        },
        {
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t2_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t2_hive_upgrade' },
            id: `${id_prefix}t2_hive_upgrade_beehive`
        },
        {
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t3_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t3_hive_upgrade' },
            id: `${id_prefix}t3_hive_upgrade_beehive`
        },
        {
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t4_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t4_hive_upgrade' },
            id: `${id_prefix}t4_hive_upgrade_beehive`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'resourcefulbees:hive_upgrade_recipe',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});

}
})();

(function () {

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "resourcefulbees:hive_upgrade_recipe", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
    var attemptRecipe = (id, register) => {
        try {
            register().id(id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${id}: ${error}`);
        }
    };

    // 自然灵气祭坛：用当前物品堆 JSON 格式保留原配方消耗与产物。
    if (e6ePortedRecipeModLoaded('kubejs_naturesaura') && e6ePortedItemExists('compactmachines:wall') && e6eRecipeIngredientExists('#c:ingots/enderium')) {
        attemptRecipe('enigmatica:normal/naturesaura/altar/compactmachines_wall', () => event.custom({
            type: 'naturesaura:altar',
            input: { tag: 'c:ingots/enderium' },
            output: { id: 'compactmachines:wall', count: 32 },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 100
        }));
    }

    // 神秘学配方替换旧 BYG 黑沙产物；目标命名空间为 Biomes We've Gone。
    if (e6ePortedRecipeModLoaded('occultism') && e6ePortedItemExists('biomeswevegone:black_sand')) {
        attemptRecipe('enigmatica:normal/occultism/crushing/black_sand_from_basalt', () => event.custom({
            type: 'occultism:crushing',
            ingredient: { item: 'minecraft:basalt' },
            result: { type: 'occultism:item', item: 'biomeswevegone:black_sand', count: 1 },
            crushing_time: 200,
            ignore_crushing_multiplier: true
        }));
    }

    // 当前整合包没有这个原版产物；仍将原配方保留为兼容项。
    if (e6ePortedRecipeModLoaded('emendatusenigmatica')) {
        attemptRecipe('emendatusenigmatica:alloy_dust/signalum', () => event.shapeless('4x emendatusenigmatica:signalum_dust', [
            '#c:dusts/silver',
            '#c:dusts/copper', '#c:dusts/copper', '#c:dusts/copper',
            '#c:dusts/redstone', '#c:dusts/redstone', '#c:dusts/redstone', '#c:dusts/redstone'
        ]));
    }

    if (e6ePortedRecipeModLoaded('atum')) {
    }

    // 将旧版紧凑机械隧道配置保留为新版自定义数据物品堆。
    if (e6ePortedRecipeModLoaded('compactmachines') && e6ePortedRecipeModLoaded('occultism') && e6ePortedItemExists('compactmachines:tunnel')) {
        attemptRecipe('compactmachines:tunnel/item', () => event.custom({
            type: 'minecraft:crafting_shaped',
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: { item: 'minecraft:hopper' }, B: { tag: 'c:gems/dimensional' },
                C: { item: 'occultism:wormhole_frame' }, D: { tag: 'c:chests' }
            },
            result: {
                id: 'compactmachines:tunnel', count: 1,
                components: { 'minecraft:custom_data': { definition: { id: 'compactmachines:item' } } }
            }
        }));
        attemptRecipe('compactmachines:tunnel/redstone', () => event.custom({
            type: 'minecraft:crafting_shaped',
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: { item: 'glassential:glass_redstone' }, B: { tag: 'c:gems/dimensional' },
                C: { item: 'occultism:wormhole_frame' }, D: { item: 'minecraft:redstone_torch' }
            },
            result: {
                id: 'compactmachines:tunnel', count: 1,
                components: { 'minecraft:custom_data': { definition: { id: 'compactmachines:redstone_in' } } }
            }
        }));
    }

    if (e6ePortedRecipeModLoaded('refinedcrafterproxy') && e6ePortedRecipeModLoaded('refinedstorage') && e6ePortedRecipeModLoaded('extrastorage')) {
        ['iron', 'gold', 'diamond', 'netherite'].forEach((tier) => {
            var id = `enigmatica:normal/refinedcrafterproxy/shaped/${tier}_crafter_proxy`;
            attemptRecipe(id, () => event.custom({
                type: 'minecraft:crafting_shaped',
                pattern: ['C C', 'LXR', 'C C'],
                key: {
                    C: { item: 'refinedstorage:quartz_enriched_iron' },
                    X: { item: `extrastorage:${tier}_crafter` },
                    L: { item: 'refinedstorage:improved_processor' },
                    R: { item: 'refinedstorage:advanced_processor' }
                },
                result: {
                    id: 'refinedcrafterproxy:crafter_proxy', count: 1,
                    components: { 'minecraft:custom_data': { Tier: `extrastorage_${tier}` } }
                }
            }));
        });
    }

    // 资源蜜蜂联动配方；物品数据保存在 minecraft:custom_data 中。
    if (e6ePortedRecipeModLoaded('bloodmagic') && e6ePortedRecipeModLoaded('resourcefulbees')) {
        attemptRecipe('enigmatica:base/bloodmagic/altar/bloody_bee_jar', () => event.custom({
            type: 'bloodmagic:altar',
            input: {
                item: 'resourcefulbees:bee_jar',
                components: { 'minecraft:custom_data': { Entity: 'resourcefulbees:bronze_bee' } }
            },
            output: {
                id: 'resourcefulbees:bee_jar',
                components: { 'minecraft:custom_data': { Entity: 'resourcefulbees:bloody_bee' } }
            },
            syphon: 50000,
            altarLevel: 3,
            consumptionRate: 50,
            drainRate: 50
        }));
    }

    if (e6ePortedRecipeModLoaded('resourcefulbees')) {
        [
            { from: 't1_apiary', to: 't2_apiary', id: 'resourcefulbees:t2_apiary' },
            { from: 't2_apiary', to: 't3_apiary', id: 'resourcefulbees:t3_apiary' },
            { from: 't3_apiary', to: 't4_apiary', id: 'resourcefulbees:t4_apiary' }
        ].forEach((recipe) => {
            attemptRecipe(recipe.id, () => event.shaped(`resourcefulbees:${recipe.to}`, ['ACA', 'BDB', 'ACA'], {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: 'resourcefulbees:t4_hive_upgrade',
                C: `resourcefulbees:${recipe.from}`,
                D: 'minecraft:nether_star'
            }));
        });

        [
            { from: 't1_apiary', to: 't2_apiary', id: 'enigmatica:normal/resourcefulbees/t2_apiary_nest' },
            { from: 't2_apiary', to: 't3_apiary', id: 'enigmatica:normal/resourcefulbees/t3_apiary_nest' },
            { from: 't3_apiary', to: 't4_apiary', id: 'enigmatica:normal/resourcefulbees/t4_apiary_nest' }
        ].forEach((recipe) => {
            attemptRecipe(recipe.id, () => event.custom({
                type: 'resourcefulbees:hive_upgrade_recipe',
                pattern: ['ACA', 'BDB', 'ACA'],
                key: {
                    A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                    B: { type: 'resourcefulbees:hive', tier: 4 },
                    C: { item: `resourcefulbees:${recipe.from}` },
                    D: { item: 'minecraft:nether_star' }
                },
                result: { id: `resourcefulbees:${recipe.to}` }
            }));
        });
    }

    // 植物魔法与神话植物学配方使用 1.21 物品堆产物字段（id/count）。
    if (e6ePortedRecipeModLoaded('botania') && e6ePortedRecipeModLoaded('resourcefulbees')) {
        [
            { input: 'resourcefulbees:mana_honeycomb', output: 'botania:manasteel_ingot', mana: 2000, id: 'enigmatica:normal/botania/mana_infusion/manasteel_ingot' },
            { input: 'resourcefulbees:mana_honeycomb_block', output: 'botania:manasteel_block', mana: 19000, id: 'enigmatica:normal/botania/mana_infusion/manasteel_block' }
        ].forEach((recipe) => {
            attemptRecipe(recipe.id, () => event.custom({
                type: 'botania:mana_infusion',
                input: { item: recipe.input },
                output: { id: recipe.output, count: 1 },
                mana: recipe.mana
            }));
        });

        attemptRecipe('botania:terra_plate/terrasteel_ingot_honeycomb', () => event.custom({
            type: 'botania:terra_plate',
            ingredients: [
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' }
            ],
            result: { id: 'botania:terrasteel_ingot', count: 1 },
            mana: 300000
        }));

        attemptRecipe('mythicbotany:modified_gaia_pylon_with_alfsteel', () => event.shaped('botania:gaia_pylon', [' D ', 'EPE', ' D '], {
            P: 'botania:mana_pylon', D: 'botania:pixie_dust', E: '#c:ingots/elementium'
        }));
        attemptRecipe('botania:apothecary_default', () => event.shaped('botania:apothecary_default', ['CBC', ' A ', 'AAA'], {
            A: '#c:cobblestones', B: '#botania:petals', C: '#c:stone_slabs'
        }));
    }

    if (e6ePortedRecipeModLoaded('mythicbotany') && e6ePortedRecipeModLoaded('botania') && e6ePortedRecipeModLoaded('resourcefulbees')) {
        attemptRecipe('enigmatica:normal/botania/terrasteel_ingot_honeycomb', () => event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            ingredients: [
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' }
            ],
            output: { id: 'botania:terrasteel_ingot', count: 1 },
            mana: 300000,
            fromColor: 255,
            toColor: 65280
        }));

        attemptRecipe('enigmatica:normal/mythicbotany/alfsteel_ingot_honeycomb', () => event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            ingredients: [
                { item: 'resourcefulbees:elven_honeycomb' },
                { tag: 'c:gems/dragonstone' },
                { item: 'botania:pixie_dust' }
            ],
            output: { id: 'mythicbotany:alfsteel_ingot', count: 1 },
            mana: 1500000,
            fromColor: 16711821,
            toColor: 16750080
        }));

        attemptRecipe('mythicbotany:alfsteel_pylon', () => event.shaped('mythicbotany:alfsteel_pylon', [' n ', 'npn', ' g '], {
            n: 'mythicbotany:alfsteel_nugget', g: 'minecraft:ghast_tear', p: 'botania:gaia_pylon'
        }));
    }

    if (e6ePortedRecipeModLoaded('mythicbotany') && e6ePortedRecipeModLoaded('resourcefulbees')) {
        var manaBeeJar = {
            id: 'resourcefulbees:bee_jar', count: 1,
            components: { 'minecraft:custom_data': { Entity: 'resourcefulbees:mana_bee', BeeType: 'mana', Color: '#4c97ff' } }
        };
        var terrestrialBeeJar = {
            id: 'resourcefulbees:bee_jar', count: 1,
            components: { 'minecraft:custom_data': { Entity: 'resourcefulbees:terrestrial_bee', BeeType: 'terrestrial', Color: '#5bf23d' } }
        };
        attemptRecipe('enigmatica:normal/resourcefulbees/terrestrial_bee_spawn_egg_infusion', () => event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            ingredients: [{ item: manaBeeJar.id, components: manaBeeJar.components }],
            output: terrestrialBeeJar,
            mana: 2000000,
            fromColor: 255,
            toColor: 65280
        }));

        attemptRecipe('botania:terra_plate/terrestrial_bee_plate', () => event.custom({
            type: 'botania:terra_plate',
            ingredients: [{ item: manaBeeJar.id, components: manaBeeJar.components }],
            result: terrestrialBeeJar,
            mana: 2000000
        }));
    }

    // 即使附属模组的配方序列化器不可用，也保留 JSON 候选配方。
    // Create Blockzapper 附属的源数据配方；附属序列化器缺失时也保留六条候选。
    if (e6ePortedRecipeModLoaded('create') && e6ePortedItemExists('create:handheld_blockzapper')) {
        var blockzapperRecipes = [
            {
                id: 'create:blockzapper_upgrade/gold_accelerator',
                pattern: ['SE', 'BS'],
                key: { B: { tag: 'c:ingots/brass' }, S: { item: 'minecraft:sugar' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Accelerator', tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_amplifier',
                pattern: ['E ', 'BR'],
                key: { B: { tag: 'c:ingots/brass' }, R: { item: 'create:refined_radiance' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Amplifier', tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_body',
                pattern: [' B ', 'BEB', ' B '],
                key: { B: { tag: 'c:ingots/brass' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Body', tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_retriever',
                pattern: ['E ', 'BR'],
                key: { B: { tag: 'c:ingots/brass' }, R: { tag: 'c:dusts/redstone' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Retriever', tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_scope',
                pattern: ['GBG', ' E '],
                key: { B: { tag: 'c:ingots/brass' }, G: { tag: 'c:glass_blocks' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Scope', tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/purpur_scope',
                pattern: ['GBG', ' E '],
                key: { B: { item: 'create:chromatic_compound' }, G: { tag: 'c:glass_blocks' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Scope', tier: 'Chromatic'
            }
        ];
        blockzapperRecipes.forEach((recipe) => {
            attemptRecipe(recipe.id, () => event.custom({
                type: 'create:blockzapper_upgrade',
                pattern: recipe.pattern,
                key: recipe.key,
                result: { id: 'create:handheld_blockzapper', count: 1 },
                component: recipe.component,
                tier: recipe.tier
            }));
        });
    }

    // Tetra 原版锤子配方使用 1.16 NBT；保留其模块化物品数据，
    // 改用 1.21.1 的 minecraft:custom_data 组件。
    // Tetra 源锤配方使用旧 NBT；改用 1.21.1 minecraft:custom_data 组件保留模块数据。
    if (e6ePortedRecipeModLoaded('tetra') && e6ePortedItemExists('tetra:modular_double')) attemptRecipe('tetra:hammer/oak', () => event.custom({
        type: 'minecraft:crafting_shaped',
        pattern: [' # ', ' /#', '/  '],
        key: {
            '#': { tag: 'minecraft:planks' },
            '/': { tag: 'c:rods/wooden' }
        },
        result: {
            id: 'tetra:modular_double',
            count: 1,
            components: {
                'minecraft:custom_data': {
                    'double/head_left': 'double/basic_hammer_left',
                    'double/basic_hammer_left_material': 'basic_hammer/oak',
                    'double/head_right': 'double/basic_hammer_right',
                    'double/basic_hammer_right_material': 'basic_hammer/oak',
                    'double/handle': 'double/basic_handle',
                    'double/basic_handle_material': 'basic_handle/stick'
                }
            }
        }
    }));

    // E6E 数据配方会覆盖神秘学中同 ID 的原生交易配方。
    // E6E 数据配方会覆盖 Occultism 中同 ID 的原生交易配方。
    if (e6ePortedRecipeModLoaded('occultism')) {
        var occultismStoneTradeId = 'occultism:spirit_trade/4x_stone_to_otherstone';
        event.remove({ id: occultismStoneTradeId });
        attemptRecipe(occultismStoneTradeId, () => event.custom({
            type: 'occultism:spirit_trade',
            trader_id: 'occultism:trader_otherrock',
            ingredient: { item: 'minecraft:stone' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'occultism:otherstone', count: 1 },
                weight: 1
            }
        }));
    }
});

// 血魔法奥术配方联动：由旧 KubeJS 构造器改写为 1.21 JSON 格式。
if (['bloodmagic', 'botania', 'eidolon_repraised', 'meetyourfight'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "resourcefulbees:hive_upgrade_recipe", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
        var attemptRecipe = (id, register) => {
            try {
                register().id(id);
            } catch (error) {
                console.error(`[E6E ported recipe] ${id}: ${error}`);
            }
        };
        if (global.isExpertMode == false) return;

        var recipes = [
            { output: { id: 'eidolon_repraised:unholy_symbol' }, input: { item: 'bloodmagic:weakbloodorb' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'bloodmagic:arc/reversion/weak_blood_orb' },
            { output: { id: 'meetyourfight:caged_heart' }, input: { item: 'bloodmagic:apprenticebloodorb' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'bloodmagic:arc/reversion/apprentice_blood_orb' },
            { output: { id: 'botania:mana_tablet' }, input: { item: 'bloodmagic:magicianbloodorb' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'bloodmagic:arc/reversion/magician_blood_orb' },
            { output: { id: 'create:shadow_steel' }, input: { item: 'bloodmagic:masterbloodorb' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'bloodmagic:arc/reversion/master_blood_orb' },
            { output: { id: 'botania:mana_diamond' }, input: { item: 'botania:dragonstone' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'enigmatica:expert/bloodmagic/arc/mana_diamond_from_dragonstone' },
            { output: { id: 'botania:mana_diamond_block' }, input: { item: 'botania:dragonstone_block' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'enigmatica:expert/bloodmagic/arc/mana_diamond_block_from_dragonstone_block' },
            { output: { id: 'waystones:warp_stone' }, input: { tag: 'waystones:waystone' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'enigmatica:expert/bloodmagic/arc/warp_stone_from_waystone' },
            { output: { id: 'waystones:warp_stone' }, input: { tag: 'waystones:sharestone' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'enigmatica:expert/bloodmagic/arc/warp_stone_from_sharestone' },
            { output: { id: 'waystones:warp_stone' }, input: { item: 'waystones:portstone' }, tool: { tag: 'bloodmagic:arc/reverter' }, id: 'enigmatica:expert/bloodmagic/arc/warp_stone_from_portstone' }
        ];

        recipes.forEach((recipe) => {
            attemptRecipe(recipe.id, () => event.custom({
                type: 'bloodmagic:arc',
                input: recipe.input,
                tool: recipe.tool,
                output: recipe.output,
                extraOutputs: [],
                consume: true
            }));
        });

        attemptRecipe('enigmatica:expert/bloodmagic/arc/corrupted_tinydust_from_demon_crystals', () => event.custom({
            type: 'create:crushing',
            ingredients: [{ tag: 'bloodmagic:crystals/demon' }],
            results: [
                { id: 'neovitae:corrupted_tiny_dust', count: 6 },
                { id: 'neovitae:corrupted_tiny_dust', chance: 0.15 }
            ],
            processingTime: 200
        }));
    });
}
})();
