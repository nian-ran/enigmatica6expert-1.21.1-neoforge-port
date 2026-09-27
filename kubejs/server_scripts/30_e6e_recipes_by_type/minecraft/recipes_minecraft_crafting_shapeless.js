// 配方类型：minecraft:crafting_shapeless
// 中文名称：工作台无序合成
// 用途：材料不要求固定摆放位置。

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["minecraft:crafting_shaped","minecraft:crafting_shapeless"]);
    const id_prefix = 'enigmatica:base/recipes/replace_input/';

    function safeReplaceInput(target, from, to, replaceAll) {
        if (!e6eRecipeIngredientExists(from)) return;

        var replacement = to;
        if (Array.isArray(to)) {
            replacement = to.filter((ingredient) => e6eRecipeIngredientExists(ingredient));
            if (replacement.length == 0) return;
        } else if (!e6eRecipeIngredientExists(to)) {
            return;
        }

        if (replaceAll === undefined) {
            event.replaceInput(target, from, replacement);
        } else {
            event.replaceInput(target, from, replacement, replaceAll);
        }
    }

    const recipes = [
        {
            replaceTarget: { id: 'entangled:block' },
            toReplace: 'minecraft:chest',
            replaceWith: '#forge:chests/wooden'
        },
        {
            replaceTarget: { id: 'constructionwand:stone_wand' },
            toReplace: '#minecraft:stone_tool_materials',
            replaceWith: '#quark:stone_tool_materials'
        },
        {
            replaceTarget: { id: 'archers_paradox:lightning_arrow' },
            toReplace: 'minecraft:nether_star',
            replaceWith: 'thermal:lightning_charge'
        },
        {
            replaceTarget: { id: 'immersivecooking:fried_potato_cubes' },
            toReplace: 'immersivecooking:potato_slice',
            replaceWith: 'immersivecooking:potato_cubes'
        },
        {
            replaceTarget: {
                not: [{ id: 'minecraft:dried_kelp_block' }]
            },
            toReplace: 'minecraft:dried_kelp',
            replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
        },
        {
            replaceTarget: { id: 'eidolon_repraised:stone_hand' },
            toReplace: 'minecraft:stone_slab',
            replaceWith: '#enigmatica:crafting_slabs'
        },
        {
            replaceTarget: { id: 'culinaryconstruct:culinary_station' },
            toReplace: 'minecraft:stone_slab',
            replaceWith: '#enigmatica:crafting_slabs'
        },
        {
            replaceTarget: { id: 'minecraft:grindstone' },
            toReplace: 'minecraft:stone_slab',
            replaceWith: '#enigmatica:crafting_slabs'
        },
        {
            replaceTarget: {},
            toReplace: 'emendatusenigmatica:coke_block',
            replaceWith: '#forge:storage_blocks/coke'
        },
        {
            replaceTarget: {},
            toReplace: 'emendatusenigmatica:arcane_block',
            replaceWith: '#forge:storage_blocks/mana'
        },
        {
            replaceTarget: {},
            toReplace: 'emendatusenigmatica:sulfur_gem',
            replaceWith: '#forge:gems/sulfur'
        },
        {
            replaceTarget: {},
            toReplace: 'emendatusenigmatica:steel_block',
            replaceWith: '#forge:storage_blocks/steel'
        }
    ];

    // 原 normal/recipes/replace_input.js 中的普通模式输入调整也用于当前专家版。
    safeReplaceInput(
        { id: 'compactmachines:personal_shrinking_device' },
        'minecraft:book',
        'shrink:shrinking_device'
    );
    safeReplaceInput(
        { id: 'powah:crafting/player_tranmitter_basic' },
        'powah:player_transmitter_starter',
        'powah:player_aerial_pearl'
    );
    safeReplaceInput({ mod: 'powah' }, '#powah:furnator', 'minecraft:blast_furnace');
    safeReplaceInput({ mod: 'powah' }, '#powah:energy_hopper', 'minecraft:hopper');
    powahTiers.forEach((tier) => {
        safeReplaceInput(
            { id: `powah:crafting/energizing_rod_${tier}` },
            '#powah:energizing_rod',
            `powah:energy_cable_${tier}`
        );
    });

    [
        {
            output: 'botania:spark',
            from: '#forge:nuggets/gold',
            to: '#forge:nuggets/gold_silver'
        },
        {
            output: 'ars_nouveau:basic_spell_turret',
            from: '#forge:ingots/gold',
            to: '#forge:ingots/gold_brass'
        }
    ].forEach((replacement) => {
        if (e6ePortedItemExists(replacement.output)) {
            safeReplaceInput({ output: replacement.output }, replacement.from, replacement.to);
        }
    });

    safeReplaceInput({}, 'thermal:sawdust', 'emendatusenigmatica:wood_dust');
    safeReplaceInput({}, 'architects_palette:withered_bone', '#forge:bones/wither');
    safeReplaceInput({}, 'refinedstorage:silicon', '#forge:silicon');
    safeReplaceInput({}, 'refinedstorage:crafter', '#refinedstorage:crafter');
    safeReplaceInput({}, 'betterendforge:thallasium_ore', '#forge:ores/thallasium');
    safeReplaceInput({}, 'astralsorcery:starmetal_ore', '#forge:ores/starmetal');
    safeReplaceInput({}, 'mythicbotany:elementium_ore', '#forge:ores/elementium');
    safeReplaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber');
    safeReplaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    safeReplaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    safeReplaceInput({}, 'thermal:apatite', '#forge:gems/apatite');
    safeReplaceInput({}, 'thermal:niter', '#forge:gems/niter');
    safeReplaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen', true);
    safeReplaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');
    safeReplaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional');
    safeReplaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen', true);
    safeReplaceInput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana');
    safeReplaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    safeReplaceInput({}, 'thermal:slag', '#forge:slag');
    safeReplaceInput({}, 'simplefarming:cooked_egg', '#forge:cooked_eggs');
    safeReplaceInput({}, 'farmersdelight:fried_egg', '#forge:cooked_eggs');
    safeReplaceInput({}, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown');
    safeReplaceInput({}, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red');
    safeReplaceInput({}, 'betterendforge:ender_dust', '#forge:dusts/ender');
    safeReplaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron');
    safeReplaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold');
    safeReplaceInput({}, 'upgrade_aquatic:beachgrass', '#forge:beach_grass');
    safeReplaceInput({}, 'environmental:cattail', '#forge:cattails');
    safeReplaceInput({}, 'pneumaticcraft:wheat_flour', '#forge:dusts/flour');
    safeReplaceInput({}, 'create:wheat_flour', '#forge:dusts/flour');
    safeReplaceInput({}, 'pedestals:dustflour', '#forge:dusts/flour');
    safeReplaceInput({}, 'create:dough', '#forge:doughs');
    safeReplaceInput({}, 'farmersdelight:wheat_dough', '#forge:doughs');
    safeReplaceInput({}, 'create:bar_of_chocolate', '#forge:chocolate_bars');
    safeReplaceInput({}, 'simplefarming:chocolate', '#forge:chocolate_bars');
    safeReplaceInput({}, 'simplefarming:noodles', '#forge:pasta/raw_pasta');
    safeReplaceInput({}, 'simplefarming:jam', '#forge:jams');
    safeReplaceInput({}, 'simplefarming:raw_bacon', '#forge:raw_bacon');
    safeReplaceInput({}, 'simplefarming:cooked_bacon', '#forge:cooked_bacon');
    safeReplaceInput({ mod: 'simplefarming' }, 'minecraft:cooked_chicken', '#forge:cooked_chicken');
    safeReplaceInput({ id: '/simplefarming:\\w+burger/' }, 'minecraft:cooked_beef', 'farmersdelight:beef_patty');
    safeReplaceInput({}, 'tconstruct:cobalt_nugget', '#forge:nuggets/cobalt');
    safeReplaceInput(
        {
            not: [{ type: 'ars_nouveau:glyph' }]
        },
        'minecraft:nether_brick',
        '#forge:ingots/nether_brick'
    );
    safeReplaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks');
    safeReplaceInput(
        {
            type: 'minecraft:crafting_shaped',
            not: [{ id: 'minecraft:stone_slab' }, { id: 'minecraft:stone_stairs' }]
        },
        'minecraft:stone',
        '#forge:stone',
        true
    );
    safeReplaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true);
    safeReplaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');
    safeReplaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
    safeReplaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');
    safeReplaceInput({ id: 'dustrial_decor:sheet_metal' }, '#forge:ingots/iron', '#forge:plates/iron');
    safeReplaceInput({ mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');
    safeReplaceInput({ id: 'tanknull:1' }, 'minecraft:coal_block', 'minecraft:sponge');

    safeReplaceInput({ mod: 'powah' }, '#forge:ingots/iron', '#forge:ingots/iron_copper');
    safeReplaceInput({ mod: 'powah' }, '#forge:nuggets/iron', '#forge:nuggets/iron_copper');

    powahTiers.forEach(function (tier) {
        var capacitor = `powah:capacitor_${tier}`;
        safeReplaceInput({ id: `powah:crafting/energy_cell_${tier}` }, '#powah:energy_cell', capacitor);
        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }
        safeReplaceInput({ id: `powah:crafting/battery_${tier}` }, '#powah:battery', capacitor);
    });

    safeReplaceInput({ mod: 'powah' }, '#powah:magmator', 'mekanism:dynamic_tank');
    safeReplaceInput({ mod: 'powah' }, '#powah:thermo_generator', 'powah:thermoelectric_plate');
    safeReplaceInput({ mod: 'powah' }, '#powah:solar_panel', 'powah:photoelectric_pane');

    safeReplaceInput(
        { id: 'powah:crafting/solar_panel_basic' },
        'powah:solar_panel_starter',
        'powah:photoelectric_pane'
    );

    safeReplaceInput({ mod: 'astralsorcery' }, 'astralsorcery:marble_raw', '#forge:stones/marble');

    safeReplaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    ['quark:tallow', 'eidolon_repraised:tallow', 'occultism:tallow'].forEach((tallow) => {
        safeReplaceInput({}, tallow, '#forge:tallow');
    });

    safeReplaceInput(
        { id: 'dustrial_decor:iron_bar_trapdoor' },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );

    safeReplaceInput(
        { id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        'minecraft:potion[minecraft:potion_contents={potion:"minecraft:water"}]'
    );

    safeReplaceInput(
        { id: 'create:mixing/chromatic_compound' },
        'create:powdered_obsidian',
        Ingredient.of('#forge:dusts/obsidian')
    );

    safeReplaceInput({ id: 'fluxnetworks:fluxconfigurator' }, 'minecraft:ender_eye', 'powah:ender_core');

    safeReplaceInput({ id: 'fluxnetworks:fluxpoint' }, 'minecraft:redstone_block', 'powah:ender_gate_nitro');
    safeReplaceInput(
        {
            not: [{ type: 'ars_nouveau:glyph' }]
        },
        'minecraft:crafting_table',
        '#forge:workbenches'
    );

    safeReplaceInput({ id: 'minecraft:nether_bricks' }, '#forge:ingots/nether_brick', 'minecraft:nether_brick');
    safeReplaceInput(
        { id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );
    safeReplaceInput(
        { id: 'thermal:machine/press/unpacking/press_wool_unpacking' },
        'minecraft:white_wool',
        '#forge:wool'
    );

    sharedDies.forEach((die) => {
        var dieTag = `#thermal:crafting/dies/${die.thermalName}`;
        safeReplaceInput({}, `immersiveengineering:mold_${die.immersiveEngineeringName}`, dieTag);
        safeReplaceInput({}, `thermal:press_${die.thermalName}_die`, dieTag);
    });
    thermalDies.forEach((dieName) => {
        safeReplaceInput({}, `thermal:press_${dieName}_die`, `#thermal:crafting/dies/${dieName}`);
    });
    immersiveEngineeringDies.forEach((dieName) => {
        safeReplaceInput({}, `immersiveengineering:mold_${dieName}`, `#thermal:crafting/dies/${dieName}`);
    });

    colors.forEach((color) => {
        var dyeTag = `#forge:dyes/${color}`;

        // 没有对应染料标签时跳过该颜色，避免注册空标签配方。
        if (!e6eRecipeIngredientExists(dyeTag)) return;

        // 将未使用 forge:dyes 标签的输入替换为对应颜色标签。
        safeReplaceInput({}, `minecraft:${color}_dye`, dyeTag, true);

        if (e6ePortedItemExists(`minecraft:${color}_carpet`) && e6ePortedItemExists(`minecraft:${color}_wool`)) {
            event.remove({ id: `minecraft:${color}_carpet_from_white_carpet` });
            fallback_id(
                event.shaped(Item.of(`minecraft:${color}_carpet`, 3), ['WW'], {
                    W: `minecraft:${color}_wool`
                }),
                id_prefix
            );
        }

        if (e6ePortedItemExists(`minecraft:${color}_stained_glass_pane`) && e6ePortedItemExists('minecraft:glass_pane')) {
            fallback_id(
                event.shaped(Item.of(`minecraft:${color}_stained_glass_pane`, 8), ['GGG', 'GDG', 'GGG'], {
                    G: 'minecraft:glass_pane',
                    D: dyeTag
                }),
                id_prefix
            );
        }

        if (e6ePortedItemExists(`minecraft:${color}_stained_glass`) && e6ePortedItemExists('minecraft:glass')) {
            fallback_id(
                event.shaped(Item.of(`minecraft:${color}_stained_glass`, 8), ['GGG', 'GDG', 'GGG'], {
                    G: 'minecraft:glass',
                    D: dyeTag
                }),
                id_prefix
            );
        }

        ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'].forEach(
            (blockName) => {
                var itemTag = `#forge:${blockName}`;
                var block = `minecraft:${color}_${blockName}`;

                if (!e6ePortedItemExists(block) || !e6eRecipeIngredientExists(itemTag)) return;

                if (blockName == 'stained_glass_pane') {
                    event.remove({ id: `${block}_from_glass_pane` });
                } else {
                    event.remove({ id: block });
                }

                fallback_id(
                    event.shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                        S: itemTag,
                        D: dyeTag
                    }),
                    id_prefix
                );
                fallback_id(event.shapeless(Item.of(block, 1), [dyeTag, itemTag]), id_prefix);
            }
        );

        if (e6ePortedRecipeModLoaded('atum')) {
            ['linen', 'linen_carpet'].forEach((blockName) => {
                var itemTag = `#atum:${blockName}`;
                var block = `atum:${blockName}_${color}`;

                if (!e6ePortedItemExists(block) || !e6eRecipeIngredientExists(itemTag)) return;

                if (blockName == 'linen_carpet') {
                    event.remove({ id: `atum:${color}_linen_carpet_from_white_linen_carpet` });
                } else if (blockName == 'linen' && color != 'white') {
                    // linen_white 是 Atum 的亚麻布染色为亚麻方块的配方。
                    event.remove({ id: `atum:linen_${color}` });
                }

                event
                    .shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                        S: itemTag,
                        D: dyeTag
                    })
                    .id(`kubejs:${blockName}_${color}_bulk`);
                event.shapeless(Item.of(block, 1), [dyeTag, itemTag]).id(`kubejs:${blockName}_${color}`);
            });
        }

        if (
            e6ePortedItemExists(`minecraft:${color}_concrete_powder`) &&
            e6eRecipeIngredientExists('#forge:sand') &&
            e6eRecipeIngredientExists('#forge:gravel')
        ) {
            fallback_id(
                event.shapeless(Item.of(`minecraft:${color}_concrete_powder`, 8), [
                    dyeTag,
                    '#forge:sand',
                    '#forge:sand',
                    '#forge:sand',
                    '#forge:sand',
                    '#forge:gravel',
                    '#forge:gravel',
                    '#forge:gravel',
                    '#forge:gravel'
                ]),
                id_prefix
            );
        }
    });

    const alt_material_tag_replacements = [
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'aluminum',
            items: [
                'bloodmagic:soulforge',
                'mininggadgets:upgrade_fortune_1',
                'resourcefulbees:centrifuge_casing',
                'xnet:antenna_base'
            ]
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'brass',
            items: ['ars_nouveau:glyph_press']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'invar',
            items: ['resourcefulbees:centrifuge_controller']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'lead',
            items: [
                'travel_anchors:travel_anchor',
                'thermal:machine_press',
                'bloodmagic:alchemicalreactionchamber',
                'integrateddynamics:squeezer'
            ]
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'tin',
            items: ['aquaculture:tackle_box']
        },
        {
            type: 'dusts',
            replace: 'gold',
            replaceWith: 'copper',
            items: ['mekanism:upgrade_energy']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'bronze',
            items: ['thermal:upgrade_augment_1']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'copper',
            items: ['thermal:flux_drill', 'thermal:flux_saw']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['thermal:dynamo_lapidary']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'brass',
            items: [
                'ars_nouveau:arcane_core',
                'ars_nouveau:crystallizer',
                'ars_nouveau:volcanic_accumulator',
                'pneumaticcraft:gun_ammo',
                'ars_nouveau:marvelous_clay',
                'ars_nouveau:ritual',
                'ars_nouveau:sconce',
                'ars_nouveau:mycelial_sourcelink',
                'ars_nouveau:vitalic_sourcelink',
                'ars_nouveau:alchemical_sourcelink',
                'ars_nouveau:mana_condenser'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'bronze',
            items: [
                'bloodmagic:alchemytable',
                'bloodmagic:altar',
                'bloodmagic:sacrificialdagger',
                'bloodmagic:experiencebook',
                'bloodmagic:soulforge',
                'pneumaticcraft:minigun',
                'pneumaticcraft:pressure_gauge',
                'thermal:diving_helmet',
                'thermal:diving_chestplate',
                'thermal:diving_leggings',
                'thermal:diving_boots',
                'minecraft:clock'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'copper',
            items: [
                'mekanismgenerators:electromagnetic_coil',
                'mekanism:energy_tablet',
                'mininggadgets:upgrade_magnet',
                'xnet:controller',
                'thermal:rf_coil_xfer_augment',
                'thermal:rf_coil_storage_augment',
                'thermal:rf_coil_augment',
                'thermal:rf_coil',
                'rftoolsstorage:storage_scanner',
                'rftoolsbuilder:shield_block1',
                'pneumaticcraft:vortex_tube',
                'pneumaticcraft:heat_sink',
                'modularrouters:speed_upgrade',
                'xnet:connector_blue',
                'xnet:connector_red',
                'xnet:connector_green'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['torchmaster:feral_flare_lantern', 'mekanism:teleportation_core', 'botania:mana_spreader']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'tin',
            items: ['pneumaticcraft:memory_stick']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'aluminum',
            items: [
                'immersiveengineering:conveyor_splitter',
                'immersiveengineering:conveyor_vertical',
                'immersiveengineering:conveyor_basic',
                'immersiveengineering:current_transformer',
                'immersiveengineering:transformer_hv',
                'immersiveengineering:transformer',
                'immersiveengineering:dynamo',
                'immersiveengineering:furnace_heater',
                'immersiveengineering:toolupgrade_drill_lube',
                'endermail:locker',
                'endermail:package_controller',
                'cookingforblockheads:preservation_chamber',
                'minecraft:compass',
                'minecraft:piston',
                'xnet:antenna_dish',
                'xnet:antenna_base',
                'xnet:antenna',
                'transport:fluid_loader',
                'resourcefulbees:centrifuge_casing',
                'engineersdecor:metal_bar',
                'integrateddynamics:drying_basin'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'brass',
            items: ['ars_nouveau:mana_condenser', 'ars_nouveau:enchanting_apparatus']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'copper',
            items: [
                'shrink:shrinking_device',
                'immersiveengineering:charging_station',
                'cookingforblockheads:heating_unit',
                'aquaculture:tackle_box'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'lead',
            items: ['travel_anchors:travel_anchor', 'travel_anchors:travel_staff', 'integrateddynamics:squeezer']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'tin',
            items: ['bloodmagic:soulsnare', 'modularrouters:bulk_item_filter', 'chisel:auto_chisel']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'osmium',
            items: ['integrateddynamics:part_machine_reader', 'integratedcrafting:crafting/part_interface_crafting']
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'bronze',
            items: ['rftoolsstorage:storage_module0']
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'copper',
            items: [
                'xnet:connector_routing',
                'xnet:netcable_routing',
                'xnet:netcable_yellow',
                'xnet:netcable_blue',
                'xnet:netcable_green',
                'xnet:netcable_red',
                'rftoolsbase:machine_base',
                'rftoolsbase:machine_frame',
                'rftoolscontrol:card_base',
                'modularrouters:speed_upgrade',
                'modularrouters:blank_upgrade',
                'modularrouters:blank_module'
            ]
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['botania:spark', 'chisel:hitech_chisel']
        }
    ];

    alt_material_tag_replacements.forEach((recipe) => {
        recipe.items.forEach((item) => {
            if (e6ePortedItemExists(item)) {
                safeReplaceInput(
                    { output: item },
                    `#forge:${recipe.type}/${recipe.replace}`,
                    `#forge:${recipe.type}/${recipe.replace}_${recipe.replaceWith}`
                );
            }
        });
    });
    recipes.forEach((recipe) => {
        safeReplaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/shapeless/';
    const recipes = [
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
        { output: '9x powah:uraninite', inputs: ['#forge:storage_blocks/uraninite'] },
        { output: '9x betterendforge:thallasium_nugget', inputs: ['#forge:ingots/thallasium'] },
        { output: '9x betterendforge:terminite_nugget', inputs: ['#forge:ingots/terminite'] },
        { output: '9x atum:nebu_drop', inputs: ['#forge:ingots/nebu'] },
        {
            output: '4x farmersdelight:milk_bottle',
            inputs: [
                'minecraft:milk_bucket',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        },
        {
            output: 'minecraft:milk_bucket',
            inputs: [
                'minecraft:bucket',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle'
            ]
        },
        {
            output: '2x simplefarming:candy',
            inputs: ['#forge:chocolate_bars', 'minecraft:sugar', 'minecraft:sugar']
        },
        { output: 'minecraft:wheat_seeds', inputs: ['minecraft:wheat'] },

        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }),
            inputs: ['minecraft:book', '#forge:dyes/yellow']
        },
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbenches'] },
        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }),
            inputs: ['minecraft:sugar', 'minecraft:book'],
            requiresMod: 'resourcefulbees'
        },
        {
            output: (() => {
                const legacyTomeEntries = {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Industrial Foregoing's Manual" },
                            'patchouli:book': 'industrialforegoing:industrial_foregoing',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Industrial Foregoing\'s Manual"}]}'
                            }
                        }
                    },
                    tetra: {
                        id: 'tetra:holo',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Holosphere' },
                            'holo/frame': 'holo/frame',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Holosphere"}]}'
                            },
                            'holo/core_material': 'frame/dim',
                            'holo/core': 'holo/core',
                            'holo/frame_material': 'core/ancient'
                        }
                    },
                    resourcefulbees: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Fifty Shades of Bees' },
                            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Fifty Shades of Bees"}]}'
                            }
                        }
                    },
                    astralsorcery: {
                        id: 'astralsorcery:tome',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Astral Tome' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}'
                            }
                        }
                    },
                    theoneprobe: {
                        id: 'theoneprobe:probenote',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The One Probe Read Me' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The One Probe Read Me"}]}'
                            }
                        }
                    },
                    ftbquests: {
                        id: 'ftbquests:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Quest Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Quest Book"}]}'
                            }
                        }
                    },
                    alexsmobs: {
                        id: 'alexsmobs:animal_dictionary',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Animal Dictionary' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'
                            }
                        }
                    },
                    immersiveengineering: {
                        id: 'immersiveengineering:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Manual" },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Manual"}]}'
                            }
                        }
                    },
                    eidolon_repraised: {
                        id: 'eidolon_repraised:codex',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Ars Ecclesia' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}'
                            }
                        }
                    },
                    botania: {
                        id: 'botania:lexicon',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Lexica Botania' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'
                            }
                        }
                    },
                    sushigocrafting: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Becoming an Itamae (Sushi Go Crafting Manual)' },
                            'patchouli:book': 'sushigocrafting:sushigocrafting',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Becoming an Itamae (Sushi Go Crafting Manual)"}]}'
                            }
                        }
                    },
                    thermal: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Thermalpedia' },
                            'patchouli:book': 'thermal:guidebook',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Thermalpedia"}]}'
                            }
                        }
                    },
                    patchouli: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Modded for Dummies' },
                            'patchouli:book': 'patchouli:modded_for_dummies',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modded for Dummies"}]}'
                            }
                        }
                    },
                    rftoolsbase: {
                        id: 'rftoolsbase:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Technology Guide' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Technology Guide"}]}'
                            }
                        }
                    },
                    integrateddynamics: {
                        id: 'integrateddynamics:on_the_dynamics_of_integration',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'On the Dynamics of Integration' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"On the Dynamics of Integration"}]}'
                            }
                        }
                    },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Cooking for Blockheads II' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Cooking for Blockheads II"}]}'
                            }
                        }
                    },
                    powah: {
                        id: 'powah:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Manual (Powah!)' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Manual (Powah!)"}]}'
                            }
                        }
                    },
                    pneumaticcraft: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'PNC:R Manual' },
                            'patchouli:book': 'pneumaticcraft:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"PNC:R Manual"}]}'
                            }
                        }
                    },
                    naturesaura: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Book of Natural Aura' },
                            'patchouli:book': 'naturesaura:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Book of Natural Aura"}]}'
                            }
                        }
                    },
                    pedestals: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Pedestals' },
                            'patchouli:book': 'pedestals:manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Pedestals"}]}'
                            }
                        }
                    },
                    transport: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Advanced Transport' },
                            'patchouli:book': 'transport:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Transport"}]}'
                            }
                        }
                    },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Decor" },
                            'patchouli:book': 'engineersdecor:engineersdecor_manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Decor"}]}'
                            }
                        }
                    },
                    occultism: {
                        id: 'occultism:dictionary_of_spirits',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Dictionary of Spirits' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Dictionary of Spirits"}]}'
                            }
                        }
                    },
                    solcarrot: {
                        id: 'solcarrot:food_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Food Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Food Book"}]}'
                            }
                        }
                    },
                    modularrouters: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Modular Routers Manual' },
                            'patchouli:book': 'modularrouters:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modular Routers Manual"}]}'
                            }
                        }
                    },
                    ars_nouveau: {
                        id: 'ars_nouveau:worn_notebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Worn Notebook' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Worn Notebook"}]}'
                            }
                        }
                    },
                    bloodmagic: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Sanguine Scientiem' },
                            'patchouli:book': 'bloodmagic:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Sanguine Scientiem"}]}'
                            }
                        }
                    },
                    betterendforge: {
                        id: 'betterendforge:guidebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The End for Dummies' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The End for Dummies"}]}'
                            }
                        }
                    },
                    littlelogistics: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Little Logistics Guide' },
                            'patchouli:book': 'littlelogistics:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Little Logistics Guide"}]}'
                            }
                        }
                    },
                    tconstruct: {
                        id: 'tconstruct:encyclopedia',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Encyclopedia of Tinkering' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopedia of Tinkering"}]}'
                            }
                        }
                    },
                    apotheosis: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Chronicle of Shadows' },
                            'patchouli:book': 'apotheosis:apoth_chronicle',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Chronicle of Shadows"}]}'
                            }
                        }
                    },
                    advancedperipherals: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Advanced Peripherals' },
                            'patchouli:book': 'advancedperipherals:manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Peripherals"}]}'
                            }
                        }
                    }
                };
                const akashicTomeContentItems = [];
                Object.keys(legacyTomeEntries).forEach((modId) => {
                    const legacyStack = legacyTomeEntries[modId];
                    if (!e6ePortedRecipeModLoaded(modId) || !e6ePortedItemExists(legacyStack.id)) return;

                    const stackComponents = { 'akashictome:defined_mod': modId };
                    const legacyTag = legacyStack.tag || {};
                    const customData = {};
                    Object.keys(legacyTag).forEach((key) => {
                        const value = legacyTag[key];
                        if (key === 'patchouli:book') {
                            stackComponents['patchouli:book'] = value;
                        } else if (key === 'akashictome:displayName') {
                            if (value && typeof value.text === 'string') {
                                // 中文：先将名称编码为 JSON 字符串，让 KubeJS 将其还原为文本组件需要的字符串值。
                                // 将名称编码为 JSON 字符串，使 KubeJS 恢复文本组件编解码器所需的字符串值。
                                stackComponents['akashictome:custom_tome_name'] = JSON.stringify(value.text);
                            }
                        } else {
                            customData[key] = value;
                        }
                    });
                    if (Object.keys(customData).length > 0) {
                        stackComponents['minecraft:custom_data'] = customData;
                    }

                    akashicTomeContentItems.push({
                        id: legacyStack.id,
                        count: legacyStack.Count || 1,
                        components: stackComponents
                    });
                });

                return Item.of('akashictome:tome', {
                    'akashictome:tool_content': akashicTomeContentItems
                });
            })(),
            inputs: ['minecraft:book', '#forge:bookshelves']
        },
        { output: '9x occultism:tallow', inputs: ['quark:tallow_block'] },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        { output: '9x minecraft:honeycomb', inputs: ['minecraft:honeycomb_block'] },
        { output: '4x byg:pollen_dust', inputs: ['byg:pollen_block'] },

        { output: '6x betterendforge:lumecorn_seed', inputs: ['betterendforge:lumecorn_rod'] },
        { output: '4x betterendforge:bulb_vine_seed', inputs: ['betterendforge:glowing_bulb'] },
        { output: '1x betterendforge:end_lily_seed', inputs: ['betterendforge:end_lily_leaf'] },
        { output: '4x betterendforge:blue_vine_seed', inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: '4x betterendforge:glowing_pillar_seed',
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: '3x minecraft:paper',
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        },
        {
            output: 'supplementaries:flax_seeds',
            inputs: ['supplementaries:flax']
        },
        { output: 'byg:quartz_crystal', inputs: ['minecraft:quartz'] },
        { output: 'minecraft:quartz', inputs: ['byg:quartz_crystal'] },
        {
            output: 'kubejs:quintuple_alfsteel_ingot',
            inputs: [
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:dusts/mana'
            ]
        },
        {
            output: 'minecraft:quartz',
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand']
        },
        {
            output: 'botanypots:botany_pot',
            inputs: ['#botanypots:botany_pots/simple', 'minecraft:water_bucket']
        },
        {
            output: 'botanypots:hopper_botany_pot',
            inputs: ['#botanypots:botany_pots/hopper', 'minecraft:water_bucket']
        },
        {
            output: 'minecraft:terracotta',
            inputs: ['#enigmatica:washables/terracotta', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_white',
            inputs: ['#enigmatica:washables/ceramic', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_slab_white',
            inputs: ['#enigmatica:washables/ceramic_slab', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_tile_white',
            inputs: ['#enigmatica:washables/ceramic_tile', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_stairs_white',
            inputs: ['#enigmatica:washables/ceramic_stairs', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_wall_white',
            inputs: ['#enigmatica:washables/ceramic_wall', 'minecraft:water_bucket']
        },
        {
            output: 'mythicbotany:raindeletia_floating',
            inputs: ['kubejs:disabled_recipe_indicator'],
            id: 'mythicbotany:raindeletia_floating'
        },
        {
            output: 'mythicbotany:wither_aconite_floating',
            inputs: ['kubejs:disabled_recipe_indicator'],
            id: 'mythicbotany:wither_aconite_floating'
        },
        {
            output: '2x eidolon_repraised:pewter_blend',
            inputs: ['#forge:dusts/lead', '#forge:dusts/iron'],
            id: 'eidolon_repraised:pewter_blend'
        },
        {
            output: '3x minecraft:string',
            inputs: ['#forge:crops/kenaf', '#forge:crops/kenaf', '#forge:crops/kenaf'],
            id: 'simplefarming:string'
        },
        {
            output: '3x minecraft:string',
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: '2x minecraft:green_dye',
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        },
        {
            output: 'sushigocrafting:soy_seeds',
            inputs: ['sushigocrafting:soy_bean']
        },
        {
            output: '3x ars_nouveau:source_berry_roll',
            inputs: [
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                '#forge:fruits/mana_berry'
            ],
            id: 'ars_nouveau:source_berry_roll'
        },
        {
            output: '2x byg:brimstone',
            inputs: ['minecraft:netherrack', 'byg:sythian_wart_block']
        },
        {
            output: 'minecraft:charcoal',
            inputs: ['#chisel:charcoal'],
            id: `${id_prefix}charcoal`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.requiresMod && !e6ePortedRecipeModLoaded(recipe.requiresMod)) return;
        if (!e6eRecipeOutputExists(recipe.output)) return;
        if (!Array.isArray(recipe.inputs) || !recipe.inputs.every(e6eRecipeIngredientExists)) return;

        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : fallback_id(event.shapeless(recipe.output, recipe.inputs), id_prefix);
    });

    ['ender', 'amber'].forEach((material) => {
        const outputTag = `#forge:shards/${material}`;
        const oreTag = `#forge:ores/${material}`;
        const hammerTag = '#forge:tools/crafting_hammer';

        if (e6eRecipeIngredientExists(outputTag) && e6eRecipeIngredientExists(oreTag) && e6eRecipeIngredientExists(hammerTag)) {
            fallback_id(event.shapeless(Item.of(outputTag), [oreTag, hammerTag]), id_prefix);
        }
    });

    powahTiers.forEach((tier) => {
        const reactor = `powah:reactor_${tier}`;
        if (tier != 'starter' && e6ePortedItemExists(reactor)) {
            fallback_id(event.shapeless(reactor, reactor), id_prefix);
        }
    });

    colors.forEach(function (color) {
        let otherColors = colors.filter((filterColor) => filterColor !== color);

        const dyeTag = `#forge:dyes/${color}`;
        const otherSimplePots = otherColors
            .map((otherColor) => `botanypots:${otherColor}_botany_pot`)
            .concat(['botanypots:botany_pot'])
            .filter((item) => e6ePortedItemExists(item));
        const otherHopperPots = otherColors
            .map((otherColor) => `botanypots:hopper_${otherColor}_botany_pot`)
            .concat(['botanypots:hopper_botany_pot'])
            .filter((item) => e6ePortedItemExists(item));

        if (
            e6ePortedItemExists(`botanypots:${color}_botany_pot`) &&
            otherSimplePots.length > 0 &&
            e6eRecipeIngredientExists(dyeTag)
        ) {
            event
                .shapeless(`botanypots:${color}_botany_pot`, [Ingredient.of(otherSimplePots), dyeTag])
                .id(`${id_prefix}dye_botany_pot_${color}`);
        }

        if (
            e6ePortedItemExists(`botanypots:hopper_${color}_botany_pot`) &&
            otherHopperPots.length > 0 &&
            e6eRecipeIngredientExists(dyeTag)
        ) {
            event
                .shapeless(`botanypots:hopper_${color}_botany_pot`, [Ingredient.of(otherHopperPots), dyeTag])
                .id(`${id_prefix}dye_hopper_botany_pot_${color}`);
        }

        if (e6ePortedRecipeModLoaded('atum') && color != 'white') {
            const slab = `atum:ceramic_slab_${color}`;
            const tile = `atum:ceramic_tile_${color}`;
            const stairs = `atum:ceramic_stairs_${color}`;
            const wall = `atum:ceramic_wall_${color}`;
            const whiteSlab = 'atum:ceramic_slab_white';
            const whiteTile = 'atum:ceramic_tile_white';
            const whiteStairs = 'atum:ceramic_stairs_white';
            const whiteWall = 'atum:ceramic_wall_white';

            if (e6ePortedItemExists(slab) && e6ePortedItemExists(whiteSlab) && e6eRecipeIngredientExists(dyeTag)) {
                fallback_id(
                    event.shapeless(`2x ${slab}`, [whiteSlab, whiteSlab, dyeTag]),
                    id_prefix
                );
            }

            if (e6ePortedItemExists(tile) && e6ePortedItemExists(whiteTile) && e6eRecipeIngredientExists(dyeTag)) {
                fallback_id(
                    event.shapeless(`6x ${tile}`, [
                        whiteTile,
                        whiteTile,
                        whiteTile,
                        whiteTile,
                        whiteTile,
                        whiteTile,
                        dyeTag
                    ]),
                    id_prefix
                );
            }

            if (e6ePortedItemExists(stairs) && e6ePortedItemExists(whiteStairs) && e6eRecipeIngredientExists(dyeTag)) {
                fallback_id(
                    event.shapeless(`3x ${stairs}`, [whiteStairs, whiteStairs, whiteStairs, dyeTag]),
                    id_prefix
                );
            }

            if (e6ePortedItemExists(wall) && e6ePortedItemExists(whiteWall) && e6eRecipeIngredientExists(dyeTag)) {
                fallback_id(
                    event.shapeless(wall, [whiteWall, dyeTag]),
                    id_prefix
                );
            }
        }
    });

    materialsToUnify.forEach((material) => {
        const ore = `emendatusenigmatica:${material}_ore`;
        const oreTag = `#forge:ores/${material}`;
        if (e6ePortedItemExists(ore) && e6eRecipeIngredientExists(oreTag)) {
            fallback_id(event.shapeless(ore, oreTag), id_prefix);
        }
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: Item.of('patchouli:guide_book[patchouli:book="apotheosis:apoth_chronicle"]'),
            inputs: ['minecraft:book', 'minecraft:gold_ingot'],
            id: `apotheosis:book`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['astralsorcery'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/shapeless/';
    const recipes = [
        {
            output: '4x astralsorcery:infused_wood_planks',
            inputs: ['astralsorcery:infused_wood'],
            id: `${id_prefix}infused_wood_planks`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: Item.of('2x create:tree_fertilizer'),
            inputs: ['#minecraft:small_flowers', '#minecraft:small_flowers', '#forge:corals', 'minecraft:bone_meal'],
            id: 'create:crafting/appliances/tree_fertilizer'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/shapeless/';
    const recipes = [
        {
            output: '9x mekanism:ingot_refined_obsidian',
            inputs: ['#forge:storage_blocks/refined_obsidian'],
            id: `${id_prefix}refined_obsidian_ingots_from_block`
        },
        {
            output: '9x mekanism:nugget_refined_obsidian',
            inputs: ['#forge:ingots/refined_obsidian'],
            id: `${id_prefix}refined_obsidian_nuggets_from_ingot`
        },
        {
            output: '9x mekanism:ingot_refined_glowstone',
            inputs: ['#forge:storage_blocks/refined_glowstone'],
            id: `${id_prefix}refined_glowstone_ingots_from_block`
        },
        {
            output: '9x mekanism:nugget_refined_glowstone',
            inputs: ['#forge:ingots/refined_glowstone'],
            id: `${id_prefix}refined_glowstone_nuggets_from_ingot`
        },
        {
            output: '9x minecraft:gunpowder',
            inputs: ['#forge:storage_blocks/gunpowder'],
            id: `${id_prefix}gunpowder_from_block`
        },
        {
            output: '9x thermal:tar',
            inputs: ['#forge:storage_blocks/tar'],
            id: `${id_prefix}tar_from_block`
        },
        {
            output: '9x occultism:iesnium_ingot',
            inputs: ['#forge:storage_blocks/iesnium'],
            id: `${id_prefix}iesnium_ingots_from_block`
        },
        {
            output: '9x occultism:iesnium_nugget',
            inputs: ['#forge:ingots/iesnium'],
            id: `${id_prefix}iesnium_nuggets_from_ingot`
        },
        {
            output: '9x emendatusenigmatica:wood_dust',
            inputs: ['thermal:sawdust_block'],
            id: `${id_prefix}wood_dust_from_sawdust_block`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();


(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/shapeless/';
    const recipes = [
        {
            output: 'minecraft:trapped_chest',
            inputs: ['minecraft:chest', 'minecraft:tripwire_hook'],
            id: `${id_prefix}trapped_chest`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/';
    const recipes = [
        {
            output: 'occultism:stable_wormhole',
            inputs: [Ingredient.of('occultism:stable_wormhole')],
            id: `${id_prefix}stable_wormhole_reset`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();


(function () {
// 将源整合包 Resourceful Bees 的蜜脾压缩/拆分配方映射到 Productive Bees 数据组件物品。
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('productivebees')) return;
    if (!e6ePortedItemExists('productivebees:configurable_honeycomb') || !e6ePortedItemExists('productivebees:configurable_comb')) return;

    // 这些物种在目标 Productive Bees 1.21.1 配方数据中均有对应产物定义。
    const beeTypes = [
        'brass', 'bronze', 'constantan', 'electrum', 'enderium', 'invar', 'lumium', 'signalum', 'steel',
        'diamond', 'emerald', 'lapis', 'redstone', 'bloody', 'mana', 'starry',
        'aluminum', 'cobalt', 'copper', 'frosty', 'gold', 'iron', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'zinc',
        'coal', 'ender', 'obsidian', 'slimy', 'water', 'zombie', 'netherite', 'basalz', 'blitz', 'blizz'
    ];

    beeTypes.forEach((bee) => {
        const beeType = `productivebees:${bee}`;
        const honeycomb = `productivebees:configurable_honeycomb[productivebees:bee_type="${beeType}"]`;
        const combBlock = `productivebees:configurable_comb[productivebees:bee_type="${beeType}"]`;

        event.shapeless(
            Item.of(combBlock),
            Array.from({ length: 9 }, () => Ingredient.of(honeycomb))
        ).id(`enigmatica:productivebees/resourcefulbees/honeycomb_block/${bee}`);

        event.shapeless(
            Item.of(honeycomb, 9),
            [Ingredient.of(combBlock)]
        ).id(`enigmatica:productivebees/resourcefulbees/honeycomb/${bee}`);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/projectvibrantjourneys/shapeless/';
    const recipes = [
        {
            output: '4x projectvibrantjourneys:rocks',
            inputs: ['minecraft:cobblestone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}rocks`
        },
        {
            output: '4x projectvibrantjourneys:mossy_rocks',
            inputs: ['minecraft:mossy_cobblestone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}mossy_rocks`
        },
        {
            output: '4x projectvibrantjourneys:sandstone_rocks',
            inputs: ['minecraft:sandstone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}sandstone_rocks`
        },
        {
            output: '4x projectvibrantjourneys:red_sandstone_rocks',
            inputs: ['minecraft:red_sandstone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}red_sandstone_rocks`
        },
        {
            output: '4x projectvibrantjourneys:ice_chunks',
            inputs: ['minecraft:ice', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}ice_chunks`
        },
        {
            output: 'projectvibrantjourneys:glowcap',
            inputs: ['minecraft:glowstone_dust', ['minecraft:brown_mushroom', 'minecraft:red_mushroom']],
            id: `${id_prefix}glowcap`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/refinedstorage/';
    const recipes = [
        
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/resourcefulbees/';

    bees.forEach((bee) => {
        if (bee == 'catnip') return; // 这是蜂巢产物，不是蜜蜂实体。
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/rftoolsutility/';
    const recipes = [
        {
            output: 'rftoolsutility:redstone_transmitter',
            inputs: ['rftoolsutility:redstone_transmitter'],
            id: `${id_prefix}redstone_transmitter`
        },
        {
            output: 'rftoolsutility:redstone_receiver',
            inputs: ['rftoolsutility:redstone_receiver'],
            id: `${id_prefix}redstone_receiver`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['simplefarming'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/simplefarming/shapeless/';
    const recipes = [
        
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'supplementaries:present_green',
            inputs: ['supplementaries:present', '#forge:dyes/green'],
            id: 'supplementaries:jei_present_green'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/tconstruct/';
    const recipes = [
        
    ];

    const tcon_materials = [
        'rose_gold',
        'tinkers_bronze',
        'pig_iron',
        'slimesteel',
        'queens_slime',
        'manyullyn',
        'hepatizon'
    ];

    tcon_materials.forEach((material) => {
        recipes.push(
            {
                output: `tconstruct:${material}_block`,
                inputs: [`9x #forge:ingots/${material}`],
                id: `tconstruct:common/materials/${material}_block_from_ingots`
            },
            {
                output: `9x tconstruct:${material}_ingot`,
                inputs: [`#forge:storage_blocks/${material}`],
                id: `tconstruct:common/materials/${material}_ingot_from_block`
            },
            {
                output: `tconstruct:${material}_ingot`,
                inputs: [`9x #forge:nuggets/${material}`],
                id: `tconstruct:common/materials/${material}_ingot_from_nuggets`
            },
            {
                output: `9x tconstruct:${material}_nugget`,
                inputs: [`#forge:ingots/${material}`],
                id: `tconstruct:common/materials/${material}_nugget_from_ingot`
            }
        );
    });

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/valhelsia_structures/shapeless';
    const recipes = [
        {
            output: Item.of('3x valhelsia_structures:cut_oak_post'),
            inputs: ['valhelsia_structures:oak_post'],
            id: `${id_prefix}/cut_oak_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_spruce_post'),
            inputs: ['valhelsia_structures:spruce_post'],
            id: `${id_prefix}/cut_spruce_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_birch_post'),
            inputs: ['valhelsia_structures:birch_post'],
            id: `${id_prefix}/cut_birch_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_jungle_post'),
            inputs: ['valhelsia_structures:jungle_post'],
            id: `${id_prefix}/cut_jungle_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_acacia_post'),
            inputs: ['valhelsia_structures:acacia_post'],
            id: `${id_prefix}/cut_acacia_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_dark_oak_post'),
            inputs: ['valhelsia_structures:dark_oak_post'],
            id: `${id_prefix}/cut_dark_oak_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_warped_post'),
            inputs: ['valhelsia_structures:warped_post'],
            id: `${id_prefix}/cut_warped_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_crimson_post'),
            inputs: ['valhelsia_structures:crimson_post'],
            id: `${id_prefix}/cut_crimson_post`
        },
        {
            output: Item.of('9x minecraft:bone'),
            inputs: ['valhelsia_structures:bone_pile_block'],
            id: `${id_prefix}/bone_pile_block`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
// 仅为目标端实际存在的原料、染料和机器配方类型注册配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["ars_nouveau:crush","atum:quern","create:milling","e6e_mbd2:thermal_centrifuge","immersiveengineering:crusher","mekanism:enriching","mekanism:pigment_extracting","minecraft:crafting_shapeless","occultism:crushing","pedestals:pedestal_crushing"]);
    const idPrefix = 'enigmatica:base/unification/unify_dyes/';
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');
    const hasIE = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasMekanism = e6ePortedRecipeModLoaded('mekanism') && e6ePortedRecipeModLoaded('kubejs_mekanism');
    const hasArs = e6ePortedRecipeModLoaded('ars_nouveau') && e6ePortedRecipeModLoaded('kubejsarsnouveau');
    const hasOccultism = e6ePortedRecipeModLoaded('occultism') && e6ePortedRecipeModLoaded('occultism_kubejs');
    const hasBotania = e6ePortedRecipeModLoaded('botania');
    const hasMbd2 = e6ePortedRecipeModLoaded('e6e_mbd2');
    const hasPedestals = e6ePortedRecipeModLoaded('pedestals');
    const hasAtum = e6ePortedRecipeModLoaded('atum');

    dyeSources.forEach((recipe, index) => {
        if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(recipe.primary)) return;

        const multiplier = recipe.type === 'large' ? 2 : 1;
        const key = `${index}_${String(recipe.input).replace(/[^a-zA-Z0-9_/-]/g, '_')}`;
        const count = 2 * multiplier;

        if (hasBotania && recipe.type !== 'petal' && recipe.input !== 'minecraft:bone'
            && e6ePortedItemExists('botania:pestle_and_mortar')) {
            event.shapeless(Item.of(recipe.primary, count), [recipe.input, 'botania:pestle_and_mortar'])
                .id(`${idPrefix}botania/pestle_mortar/${key}`);
        }

        if (hasCreate) {
            const outputs = [Item.of(recipe.primary, count)];
            if (e6eRecipeOutputExists(recipe.secondary)) {
                outputs.push(Item.of(recipe.secondary, count).withChance(0.25));
            }
            if (e6eRecipeOutputExists(recipe.tertiary)) {
                outputs.push(Item.of(recipe.tertiary, multiplier).withChance(0.05));
            }
            event.recipes.create.milling(outputs, recipe.input)
                .id(`${idPrefix}create/milling/${key}`);
        }

        if (hasArs) {
            const outputs = [{ stack: Item.of(recipe.primary, count), chance: 1.0, maxRange: 1 }];
            if (e6eRecipeOutputExists(recipe.secondary)) {
                outputs.push({ stack: Item.of(recipe.secondary, count), chance: 0.25, maxRange: 1 });
            }
            event.recipes.ars_nouveau.crush(recipe.input, outputs)
                .id(`${idPrefix}ars_nouveau/crush/${key}`);
        }

        if (hasIE) {
            const secondary = [];
            if (e6eRecipeOutputExists(recipe.secondary)) {
                secondary.push(Item.of(recipe.secondary, count).withChance(0.25));
            }
            if (e6eRecipeOutputExists(recipe.tertiary)) {
                secondary.push(Item.of(recipe.tertiary, multiplier).withChance(0.05));
            }
            event.recipes.immersiveengineering.crusher(Item.of(recipe.primary, count), recipe.input, secondary)
                .id(`${idPrefix}immersiveengineering/crusher/${key}`);
        }

        if (hasMekanism) {
            event.recipes.mekanism.enriching(Item.of(recipe.primary, 3 * multiplier), recipe.input)
                .id(`${idPrefix}mekanism/enriching/${key}`);

            if (recipe.primary.includes('_dye')) {
                const color = recipe.primary.split(':')[1].replace('_dye', '');
                event.custom({
                    type: 'mekanism:pigment_extracting',
                    input: Ingredient.of(recipe.input).toJson(),
                    output: { id: `mekanism:${color}`, amount: 256 * 3 * multiplier }
                }).id(`${idPrefix}mekanism/pigment_extracting/${key}`);
            }
        }

        // MBD2 保留旧热力离心机的主产物和概率副产物。
        if (hasMbd2) {
            const mbdRecipe = event.recipes.e6e_mbd2.thermal_centrifuge()
                .id(`${idPrefix}mbd2/centrifuge/${key}`)
                .duration(50)
                .inputItems(recipe.input)
                .outputItems(`${count}x ${recipe.primary}`)
                .inputFE(2000);
            if (e6eRecipeOutputExists(recipe.secondary)) {
                mbdRecipe.chance(0.25, (chanceRecipe) => chanceRecipe.outputItems(`${count}x ${recipe.secondary}`));
            }
            if (e6eRecipeOutputExists(recipe.tertiary)) {
                mbdRecipe.chance(0.05, (chanceRecipe) => chanceRecipe.outputItems(`${multiplier}x ${recipe.tertiary}`));
            }
        }

        if (hasOccultism && recipe.input !== 'minecraft:bone') {
            event.custom({
                type: 'occultism:crushing',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: { type: 'occultism:item', id: recipe.primary, count: count },
                crushing_time: 50,
                ignore_crushing_multiplier: false
            }).id(`${idPrefix}occultism/crushing/${key}`);
        }

        if (hasPedestals && recipe.input !== 'minecraft:bone') {
            event.custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: { item: recipe.primary, count: count }
            }).id(`${idPrefix}pedestals/crushing/${key}`);
        }

        if (hasAtum) {
            event.custom({
                type: 'atum:quern',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: { item: recipe.primary, count: 4 * multiplier },
                rotations: multiplier
            }).id(`${idPrefix}atum/quern/${key}`);
        }

        if (recipe.input.split(':')[0] === 'atum' && e6ePortedItemExists(recipe.input)) {
            event.shapeless(recipe.primary, [recipe.input]).id(`${idPrefix}crafting/atum_dye/${key}`);
        }
    });
});
})();

(function () {
// 仅在目标端对应物品、标签和配方附属可用时注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["ars_nouveau:crush","create:crushing","create:milling","create:splashing","immersiveengineering:crusher","immersiveengineering:metal_press","mekanism:crushing","mekanism:enriching","minecraft:blasting","minecraft:crafting_shapeless","minecraft:smelting","occultism:crushing"]);
    const idPrefix = 'enigmatica:base/unification/unify_materials/';
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');
    const hasIE = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasMekanism = e6ePortedRecipeModLoaded('mekanism') && e6ePortedRecipeModLoaded('kubejs_mekanism');
    const hasOccultism = e6ePortedRecipeModLoaded('occultism') && e6ePortedRecipeModLoaded('occultism_kubejs');
    const hasArs = e6ePortedRecipeModLoaded('ars_nouveau') && e6ePortedRecipeModLoaded('kubejsarsnouveau');

    function tagFor(type, material, namespaces) {
        const ns = namespaces || ['c', 'forge'];
        for (let i = 0; i < ns.length; i++) {
            const candidate = `#${ns[i]}:${type}/${material}`;
            if (e6eRecipeIngredientExists(candidate)) return candidate;
        }
        return null;
    }

    function preferred(tag) {
        if (!tag) return air;
        try {
            return getPreferredItemInTag(Ingredient.of(tag)).id;
        } catch (error) {
            return air;
        }
    }

    function propertyOutput(properties, dust, gem, shard) {
        if (!properties) return null;
        if (properties.output === 'dust') return dust !== air ? dust : null;
        if (properties.output === 'gem') return gem !== air ? gem : null;
        if (properties.output === 'shard') return shard !== air ? shard : null;
        return null;
    }

    materialsToUnify.forEach((material) => {
        const oreTag = tagFor('ores', material);
        const ingotTag = tagFor('ingots', material);
        const nuggetTag = tagFor('nuggets', material);
        const gemTag = tagFor('gems', material);
        const blockTag = tagFor('storage_blocks', material);
        const dustTag = tagFor('dusts', material);
        const shardTag = tagFor('shards', material);
        const crushedOreTag = tagFor('crushed_ores', material, ['create']);
        const ore = preferred(oreTag);
        const ingot = preferred(ingotTag);
        const nugget = preferred(nuggetTag);
        const gem = preferred(gemTag);
        const dust = preferred(dustTag);
        const shard = preferred(shardTag);
        const crushedOre = preferred(crushedOreTag);

        if (hasCreate) {
            createMetalOre(material, oreTag, ore, ingot, crushedOreTag, crushedOre);
            createGemOre(material, oreTag, ore, dust, gem, shard);
            createIngotGemMilling(material, ingotTag, ingot, gemTag, gem, dust);
            createMetalBlock(material, blockTag, ingot, nugget, crushedOreTag, crushedOre);
        }

        if (hasIE) {
            immersiveEngineeringGemOre(material, oreTag, ore, dust, gem, shard);
            immersiveEngineeringGemCrushing(material, gemTag, gem, dust);
            immersiveEngineeringSpecialIngotCrushing(material, ingotTag, ingot, dust);
            immersiveEngineeringHammerCrushing(material, oreTag, ore, gemTag, gem, dust);
            immersiveEngineeringPacking(material, blockTag, ingotTag, ingot, nuggetTag, nugget, gemTag, gem);
        }

        if (hasMekanism) {
            mekanismIngotGemCrushing(material, ingotTag, ingot, gemTag, gem, dust);
            mekanismGemOre(material, oreTag, ore, dust, gem, shard);
        }

        vanillaOreAndDustSmelting(material, oreTag, ore, gem, dustTag, dust, ingot);

        if (hasOccultism) {
            occultismGemOre(material, oreTag, ore, dust, gem, shard);
            occultismMetalOre(material, oreTag, ore, ingot, dust);
            occultismIngotGem(material, ingotTag, ingot, gemTag, gem, dust);
        }

        if (hasArs) {
            arsGemOre(material, oreTag, ore, dust, gem, shard);
            arsMetalOre(material, oreTag, ore, ingot, dust);
            arsIngotGem(material, ingotTag, ingot, gemTag, gem, dust);
        }
    });

    function createMetalOre(material, oreTag, ore, ingot, crushedTag, crushedOre) {
        if (ore === air || ingot === air || crushedOre === air || !oreTag || !crushedTag) return;

        let secondary = null;
        let processingTime = 400;
        let hasSecondaryConfig = false;
        try {
            const properties = oreProcessingSecondaries[material];
            if (properties) {
                hasSecondaryConfig = true;
                const secondaryTag = tagFor('crushed_ores', properties.secondary, ['create']);
                const found = preferred(secondaryTag);
                if (found !== air) secondary = found;
                if (Number(properties.createProcessingTime) > 0) processingTime = Number(properties.createProcessingTime);
            }
        } catch (error) {
            // 没有副产物配置时沿用该矿石本身作为副产物。
        }
        if (!hasSecondaryConfig) secondary = crushedOre;

        const millingOutputs = [
            Item.of(crushedOre),
            Item.of(crushedOre, 2).withChance(0.25)
        ];
        const crushingOutputs = [
            Item.of(crushedOre),
            Item.of(crushedOre, 2).withChance(0.6)
        ];
        if (secondary !== null) {
            millingOutputs.push(Item.of(secondary, 2).withChance(0.05));
            crushingOutputs.push(Item.of(secondary, 2).withChance(0.1));
        }
        crushingOutputs.push(Item.of('minecraft:cobblestone').withChance(0.125));

        event.recipes.create.milling(millingOutputs, oreTag)
            .processingTime(processingTime).id(`create:milling/${material}_ore`);

        event.recipes.create.crushing(crushingOutputs, oreTag)
            .processingTime(processingTime).id(`create:crushing/${material}_ore`);
    }

    function createGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.create) return;

        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        const stone = properties.stoneOutput;
        if (!e6eRecipeOutputExists(stone)) return;

        const outputs = [Item.of(output, properties.create.primaryCount)];
        if (properties.secondary) {
            if (e6eRecipeOutputExists(properties.secondary)) {
                outputs.push(Item.of(properties.secondary, properties.create.secondaryCount)
                    .withChance(properties.create.secondaryChance));
            }
        } else {
            outputs.push(Item.of(output, properties.create.secondaryCount)
                .withChance(properties.create.secondaryChance));
        }
        outputs.push(Item.of(stone).withChance(0.125));

        const time = Number(properties.create.processingTime) > 0 ? Number(properties.create.processingTime) : 300;
        event.recipes.create.crushing(outputs, oreTag)
            .processingTime(time)
            .id(`create:crushing/${material}_ore`);
    }

    function createIngotGemMilling(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        let input = ingotTag;
        if (ingot === air) input = gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.create.milling([Item.of(dust)], input)
            .processingTime(300)
            .id(`${idPrefix}create/milling/${material}_dust`);
    }

    function createMetalBlock(material, blockTag, ingot, nugget, crushedTag, crushedOre) {
        if (ingot === air || crushedOre === air || !blockTag || !crushedTag) return;
        event.recipes.create.crushing(Item.of(crushedOre, 5), blockTag)
            .processingTime(400)
            .id(`create:crushing/${material}_block`);
        if (nugget !== air) {
            event.recipes.create.splashing([
                Item.of(nugget, 10),
                Item.of(nugget, 5).withChance(0.5)
            ], crushedOre).id(`create:splashing/crushed_${material}`);
        }
        event.blasting(ingot, crushedTag).xp(0.1).id(`create:blasting/${material}_ingot_from_crushed`);
        event.smelting(ingot, crushedTag).xp(0.1).id(`create:smelting/${material}_ingot_from_crushed`);
    }

    function immersiveEngineeringGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.immersiveengineering) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output || !e6eRecipeOutputExists(output)) return;

        const secondary = properties.secondary;
        const secondaryChance = Number(properties.immersiveengineering.secondaryChance);
        const byproducts = e6eRecipeOutputExists(secondary) && secondaryChance >= 0 && secondaryChance <= 1
            ? [Item.of(secondary).withChance(secondaryChance)] : [];
        event.recipes.immersiveengineering.crusher(
            Item.of(output, properties.immersiveengineering.count), oreTag, byproducts
        ).energy(2000).id(`immersiveengineering:crusher/ore_${material}`);
    }

    function immersiveEngineeringGemCrushing(material, gemTag, gem, dust) {
        if (dust === air) return;
        let input = gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.immersiveengineering.crusher(dust, input)
            .energy(2000).id(`${idPrefix}immersiveengineering/gem_to_dust/${material}`);
    }

    function immersiveEngineeringSpecialIngotCrushing(material, ingotTag, ingot, dust) {
        if (!['signalum', 'lumium', 'enderium'].includes(material) || ingot === air || dust === air || !ingotTag) return;
        event.recipes.immersiveengineering.crusher(dust, ingotTag)
            .energy(2000).id(`${idPrefix}immersiveengineering/ingot_to_dust/${material}`);
    }

    function immersiveEngineeringHammerCrushing(material, oreTag, ore, gemTag, gem, dust) {
        if (ore === air || dust === air || !oreTag) return;
        let hammer = null;
        const hammerTags = ['#c:tools/crafting_hammer', '#c:tools/hammers', '#forge:tools/crafting_hammer'];
        for (let i = 0; i < hammerTags.length; i++) {
            if (e6eRecipeIngredientExists(hammerTags[i])) {
                hammer = hammerTags[i];
                break;
            }
        }
        if (!hammer) return;
        event.shapeless(dust, [oreTag, hammer])
            .id(`enigmatica:base/enigmatica/${material}_dust_from_ore`);
        if (gem !== air && gemTag) {
            event.shapeless(dust, [gemTag, hammer])
                .id(`${idPrefix}immersiveengineering/hammer/gem_to_dust/${material}`);
        }
    }

    function immersiveEngineeringPacking(material, blockTag, ingotTag, ingot, nuggetTag, nugget, gemTag, gem) {
        if (['ender', 'amber', 'quartz'].includes(material)) return;
        const packingMold = 'immersiveengineering:mold_packing_9';
        const unpackingMold = 'immersiveengineering:mold_unpacking';
        if (!e6ePortedItemExists(packingMold) || !e6ePortedItemExists(unpackingMold)) return;
        const block = preferred(blockTag);

        if (block !== air && blockTag && ingotTag && ingot !== air) {
            event.recipes.immersiveengineering.metal_press(
                block, `9x ${ingotTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/ingots_to_block`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${ingot}`, blockTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/block_to_ingots`);
        }

        if (block !== air && blockTag && gemTag && gem !== air) {
            event.recipes.immersiveengineering.metal_press(
                block, `9x ${gemTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/gems_to_block`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${gem}`, blockTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/block_to_gems`);
        }

        if (ingotTag && nuggetTag && ingot !== air && nugget !== air) {
            event.recipes.immersiveengineering.metal_press(
                ingot, `9x ${nuggetTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/nuggets_to_ingot`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${nugget}`, ingotTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/ingot_to_nuggets`);
        }
    }

    function mekanismIngotGemCrushing(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.remove({ input: input, mod: 'mekanism', type: 'mekanism:crushing' });
        event.recipes.mekanism.crushing(dust, input).id(`mekanism:processing/${material}/to_dust`);
    }

    function mekanismGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.mekanism) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        event.recipes.mekanism.enriching(Item.of(output, properties.mekanism.count), oreTag)
            .id(`mekanism:processing/${material}/from_ore`);
    }

    function vanillaOreAndDustSmelting(material, oreTag, ore, gem, dustTag, dust, ingot) {
        if (ore !== air && gem !== air && !['amber', 'ender'].includes(material) && oreTag) {
            event.smelting(gem, oreTag).xp(0.7).id(`${idPrefix}smelting/${material}/gem/from_ore`);
            event.blasting(gem, oreTag).xp(0.7).id(`${idPrefix}blasting/${material}/gem/from_ore`);
        }
        if (ingot !== air && dust !== air && !['starmetal'].includes(material) && dustTag) {
            event.smelting(ingot, dustTag).xp(0.7).id(`${idPrefix}smelting/${material}/ingot/from_dust`);
            event.blasting(ingot, dustTag).xp(0.7).id(`${idPrefix}blasting/${material}/ingot/from_dust`);
        }
    }

    function occultismGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.occultism) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(oreTag).toJson(),
            result: { type: 'occultism:item', id: output, count: properties.occultism.count },
            crushing_time: 100,
            ignore_crushing_multiplier: false
        }).id(`${idPrefix}occultism_crushing/${material}/${properties.output}/from_ore`);
    }

    function occultismMetalOre(material, oreTag, ore, ingot, dust) {
        if (ore === air || ingot === air || dust === air || !oreTag) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(oreTag).toJson(),
            result: { type: 'occultism:item', id: dust, count: 2 },
            crushing_time: 100,
            ignore_crushing_multiplier: false
        }).id(`occultism:crushing/${material}_dust`);
    }

    function occultismIngotGem(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air || (material === 'silver')) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(input).toJson(),
            result: { type: 'occultism:item', id: dust, count: 1 },
            crushing_time: 100,
            ignore_crushing_multiplier: true
        }).id(`${idPrefix}occultism_crushing/${material}_dust`);
    }

    function arsGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.ars_nouveau) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        const outputs = [
            { stack: Item.of(output, properties.ars_nouveau.primaryCount), chance: 1.0, maxRange: 1 }
        ];
        if (properties.secondary) {
            if (e6eRecipeOutputExists(properties.secondary)) {
                outputs.push({
                    stack: Item.of(properties.secondary, properties.ars_nouveau.secondaryCount),
                    chance: properties.ars_nouveau.secondaryChance,
                    maxRange: 1
                });
            }
        } else {
            outputs.push({
                stack: Item.of(output, properties.ars_nouveau.secondaryCount),
                chance: properties.ars_nouveau.secondaryChance,
                maxRange: 1
            });
        }
        event.recipes.ars_nouveau.crush(oreTag, outputs)
            .id(`ars_nouveau:crushing/${material}_from_ore`);
    }

    function arsMetalOre(material, oreTag, ore, ingot, dust) {
        if (ore === air || ingot === air || dust === air || !oreTag) return;
        let secondary = null;
        let hasSecondaryConfig = false;
        try {
            const properties = oreProcessingSecondaries[material];
            if (properties) {
                hasSecondaryConfig = true;
                const secondaryDust = preferred(tagFor('dusts', properties.secondary));
                if (secondaryDust !== air) secondary = secondaryDust;
            }
        } catch (error) {
            // 缺少副产物映射时只产出主粉尘。
        }
        if (!hasSecondaryConfig) secondary = dust;
        const outputs = [{ stack: Item.of(dust, 2), chance: 1.0, maxRange: 1 }];
        if (secondary !== null) outputs.push({ stack: Item.of(secondary), chance: 0.1, maxRange: 1 });
        event.recipes.ars_nouveau.crush(oreTag, outputs)
            .id(`ars_nouveau:crushing/${material}_dust_from_ore`);
    }

    function arsIngotGem(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.ars_nouveau.crush(input, [
            { stack: Item.of(dust), chance: 1.0, maxRange: 1 }
        ]).id(`ars_nouveau:crushing/${material}_dust`);
    }
});
})();

(function () {
// 将源 normal 目录的蜡烛配方适配到 Eidolon: Repraised 和 Occultism 1.21.1 物品。
if (e6ePortedRecipeModLoaded('eidolon_repraised') && e6ePortedRecipeModLoaded('occultism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const output = 'eidolon_repraised:candle';
        const inputs = ['occultism:large_candle_white'];

        if (!e6eCanRegisterRecipe(output, inputs)) return;

        event.shapeless(output, inputs).id('enigmatica:normal/eidolon/shapeless/candle');
    });
}
})();

(function () {
// 将源 normal 目录的蜡烛转换配方适配到目标物品和蜡烛标签。
if (e6ePortedRecipeModLoaded('occultism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const output = 'occultism:large_candle_white';
        const inputs = ['#minecraft:candles'];

        if (!e6eCanRegisterRecipe(output, inputs)) return;

        event.shapeless(output, inputs).id('enigmatica:normal/occultism/shapeless/candle_white');
    });
}
})();

(function () {
// 将源 normal 目录的 Quark 蜡烛配方映射到 Minecraft 1.21.1 原版白蜡烛。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["minecraft:crafting_shaped","minecraft:crafting_shapeless"]);
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            output: Item.of('minecraft:white_candle', 4),
            pattern: ['B', 'A', 'A'],
            key: {
                A: ['minecraft:honeycomb', 'occultism:tallow'],
                B: '#forge:string'
            },
            id: 'enigmatica:normal/quark/shaped/white_candle'
        },
        {
            output: 'minecraft:white_candle',
            inputs: ['#minecraft:candles', 'minecraft:white_dye'],
            id: 'enigmatica:normal/quark/shapeless/dye_cancle_white'
        },
        {
            output: 'minecraft:white_candle',
            inputs: ['eidolon_repraised:candle'],
            id: 'enigmatica:normal/quark/shapeless/white_candle'
        }
    ];

    recipes.forEach((recipe) => {
        const ingredients = recipe.inputs ?? Object.values(recipe.key);
        if (!e6eCanRegisterRecipe(recipe.output, ingredients)) return;

        if (recipe.pattern) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
})();

(function () {
// 专家版纳入源 normal 目录的无序合成配方。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: Item.of('refinedstorage:quartz_enriched_iron', 4),
            inputs: [
                '#forge:ingots/iron',
                '#forge:ingots/iron',
                '#forge:ingots/iron',
                '#forge:gems/quartz'
            ],
            id: 'refinedstorage:quartz_enriched_iron'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/architects_palette/shapeless/';
    const recipes = [
        {
            output: Item.of('architects_palette:sunmetal_brick', 9),
            inputs: ['architects_palette:sunmetal_block'],
            id: `${id_prefix}sunmetal_bricks_from_sunmetal_block`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['bloodmagic', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'ars_nouveau:ritual_flight',
            inputs: [
                'ars_nouveau:purple_archwood_log',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            id: 'ars_nouveau:ritual_flight'
        },
        {
            output: 'ars_nouveau:ritual_cloudshaping',
            inputs: [
                'ars_nouveau:blue_archwood_log',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            id: 'ars_nouveau:ritual_cloudshaping'
        },
        {
            output: 'ars_nouveau:ritual_moonfall',
            inputs: ['ars_nouveau:blue_archwood_log', 'architects_palette:moonstone', '#forge:ingots/silver'],
            id: 'ars_nouveau:ritual_moonfall'
        },
        {
            output: 'ars_nouveau:ritual_sunrise',
            inputs: ['ars_nouveau:red_archwood_log', 'architects_palette:sunstone', '#forge:ingots/sunmetal'],
            id: 'ars_nouveau:ritual_sunrise'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
if (['atum', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/atum/shapeless/';

    const recipes = [
        {
            output: '3x atum:linen_bandage',
            inputs: [
                'atum:linen_cloth',
                'atum:linen_cloth',
                'atum:linen_cloth',
                'minecraft:potion[minecraft:potion_contents={potion:"minecraft:strong_healing"}]'
            ],
            id: `${id_prefix}linen_bandage_medium`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['bloodmagic', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        ,
        {
            output: Item.of('bloodmagic:largebloodstonebrick', 4),
            inputs: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'bloodmagic:weakbloodshard'
            ],
            id: 'bloodmagic:largebloodstonebrick'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
if (['atum', 'botania', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('botania:corporea_block', 8),
            inputs: ['naturesaura:infused_stone', 'botania:corporea_spark'],
            id: 'botania:corporea_block'
        },
        {
            output: Item.of('botania:corporea_spark_master', 1),
            inputs: ['botania:corporea_spark', '#atum:godshards'],
            id: 'botania:corporea_spark_master'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
if (['gunswithoutroses'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('48x gunswithoutroses:flint_bullet'),
            inputs: ['minecraft:flint', 'minecraft:flint', 'minecraft:gunpowder'],
            id: 'gunswithoutroses:flint_bullet'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/shapeless/';
    const recipes = [
        {
            output: 'industrialforegoing:fluid_collector',
            inputs: ['industrialforegoing:fluid_placer'],
            id: `${id_prefix}fluid_collector`
        },
        {
            output: 'industrialforegoing:fluid_placer',
            inputs: ['industrialforegoing:fluid_collector'],
            id: `${id_prefix}fluid_placer`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'integratedtunnels:part_exporter_item',
            inputs: ['integratedtunnels:part_interface_item', 'prettypipes:high_extraction_module'],
            id: 'integratedtunnels:crafting/part_exporter_item'
        },
        {
            output: 'integratedtunnels:part_importer_item',
            inputs: ['integratedtunnels:part_interface_item', 'prettypipes:high_retrieval_module'],
            id: 'integratedtunnels:crafting/part_importer_item'
        },
        {
            output: 'integratedtunnels:part_interface_filter_item',
            inputs: [
                'integratedtunnels:part_interface_item',
                'integratedtunnels:part_interface_item',
                'prettypipes:high_filter_module'
            ],
            id: 'integratedtunnels:crafting/part_interface_filter_item'
        },
        {
            output: 'integratedtunnels:part_exporter_fluid',
            inputs: ['integratedtunnels:part_interface_fluid', 'ppfluids:high_fluid_extraction_module'],
            id: 'integratedtunnels:crafting/part_exporter_fluid'
        },
        {
            output: 'integratedtunnels:part_importer_fluid',
            inputs: ['integratedtunnels:part_interface_fluid', 'ppfluids:high_fluid_retrieval_module'],
            id: 'integratedtunnels:crafting/part_importer_fluid'
        },
        {
            output: 'integratedtunnels:part_interface_filter_fluid',
            inputs: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_interface_fluid',
                'ppfluids:high_fluid_filter_module'
            ],
            id: 'integratedtunnels:crafting/part_interface_filter_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/shapeless/';
    const recipes = [
        {
            output: 'kubejs:engineers_school_project',
            inputs: [
                'kubejs:construction_tools',
                'kubejs:engineering_student_meals',
                'kubejs:landscaping_materials',
                'kubejs:foundation_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials'
            ],
            id: `${id_prefix}engineers_school_project`
        },
        {
            output: 'kubejs:engineers_school_upgrades',
            inputs: ['kubejs:computer_package', 'kubejs:fluid_drill_package'],
            id: `${id_prefix}engineers_school_upgrades`
        },
        {
            output: 'kubejs:cpu_core_mk_1026',
            inputs: ['rftoolscontrol:cpu_core_500'],
            id: `${id_prefix}cpu_tier_one_conversion`
        },
        {
            output: 'rftoolscontrol:cpu_core_500',
            inputs: ['kubejs:cpu_core_mk_1026'],
            id: `${id_prefix}cpu_tier_one_reversion`
        },
        {
            output: 'kubejs:cpu_core_eg_28222',
            inputs: ['rftoolscontrol:cpu_core_1000'],
            id: `${id_prefix}cpu_tier_two_conversion`
        },
        {
            output: 'rftoolscontrol:cpu_core_1000',
            inputs: ['kubejs:cpu_core_eg_28222'],
            id: `${id_prefix}cpu_tier_two_reversion`
        },
        {
            output: 'kubejs:cpu_core_as_81221',
            inputs: ['rftoolscontrol:cpu_core_2000'],
            id: `${id_prefix}cpu_tier_three_conversion`
        },
        {
            output: 'rftoolscontrol:cpu_core_2000',
            inputs: ['kubejs:cpu_core_as_81221'],
            id: `${id_prefix}cpu_tier_three_reversion`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['mekanism:hdpe_pellet', '#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['tconstruct', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/modularrouters/shapeless/';
    const recipes = [
        {
            output: Item.of('modularrouters:sender_module_3'),
            inputs: [Ingredient.of('modularrouters:sender_module_2'), 'integrateddynamics:logic_director'],
            id: 'modularrouters:sender_module_3'
        },
        {
            output: Item.of('4x modularrouters:sender_module_3'),
            inputs: [
                Ingredient.of('modularrouters:sender_module_2'),
                Ingredient.of('modularrouters:sender_module_2'),
                Ingredient.of('modularrouters:sender_module_2'),
                Ingredient.of('modularrouters:sender_module_2'),
                'integrateddynamics:logic_director'
            ],
            id: `${id_prefix}sender_module_3_alt`
        },
        {
            output: 'modularrouters:flinger_module',
            inputs: ['modularrouters:dropper_module', 'create:weighted_ejector'],
            id: 'modularrouters:flinger_module'
        },
        {
            output: 'modularrouters:vacuum_module',
            inputs: ['modularrouters:blank_module', 'minecraft:lodestone', 'pneumaticcraft:omnidirectional_hopper'],
            id: 'modularrouters:vacuum_module'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'naturesaura:bottle_two_the_rebottling',
            inputs: ['minecraft:glass_bottle', 'farmersdelight:tree_bark'],
            id: 'naturesaura:bottle_two_the_rebottling'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'prettypipes:crafting_terminal',
            inputs: [
                'prettypipes:item_terminal',
                'prettypipes:low_crafting_module',
                'create:super_glue',
                'minecraft:string',
                'minecraft:string'
            ],
            id: 'prettypipes:crafting_terminal'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/refinedstorage/shapeless/';
    const recipes = [
        {
            output: 'refinedstorage:16k_storage_part',
            inputs: ['refinedstorage:1k_storage_part'],
            id: `${id_prefix}1k_to_16k_conversion`
        },
        {
            output: 'refinedstorage:64k_storage_part',
            inputs: ['refinedstorage:4k_storage_part'],
            id: `${id_prefix}4k_to_64k_conversion`
        },
        {
            output: 'refinedstorage:1024b_fluid_storage_part',
            inputs: ['refinedstorage:64b_fluid_storage_part'],
            id: `${id_prefix}64k_fluid_to_1024k_fluid_conversion`
        },
        {
            output: 'refinedstorage:4096b_fluid_storage_part',
            inputs: ['refinedstorage:256b_fluid_storage_part'],
            id: `${id_prefix}256k_fluid_to_4096k_fluid_conversion`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
})();

(function () {
if (['astralsorcery', 'atum'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});

}
})();

(function () {
if (['eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            inputs: [''],
            id: ''
        }
    */

    const recipes = [
        {
            output: 'xnet:connector_upgrade',
            inputs: ['minecraft:paper', 'eidolon_repraised:ender_calx', 'minecraft:diamond', 'minecraft:diamond'],
            id: 'xnet:connector_upgrade'
        },
        {
            output: 'xnet:advanced_connector_routing',
            inputs: ['xnet:connector_routing', 'eidolon_repraised:ender_calx', 'minecraft:diamond', 'minecraft:diamond'],
            id: 'xnet:advanced_connector_routing'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });

    ['red', 'green', 'blue', 'yellow'].forEach((color) => {
        const output = `xnet:advanced_connector_${color}`;
        const inputs = [
            `xnet:connector_${color}`,
            'eidolon_repraised:ender_calx',
            'minecraft:diamond',
            'minecraft:diamond'
        ];
        if (!e6eCanRegisterRecipe(output, inputs)) return;
        event
            .shapeless(output, inputs)
            .id(`xnet:advanced_connector_${color}`);
    });
});

}
})();

(function () {
// 将原普通模式的材料统一配方加入专家版，并以 MBD2 热力压榨机替代热力压机。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:smelting"]);
    if (global.isExpertMode == false) return;

    const idPrefix = 'enigmatica:expert/unification/normal/';
    const hasMbd2 = e6ePortedRecipeModLoaded('e6e_mbd2');
    const hasImmersiveEngineering = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');

    function tagFor(type, material) {
        const candidates = [`#c:${type}/${material}`, `#forge:${type}/${material}`];
        for (let i = 0; i < candidates.length; i++) {
            if (e6eRecipeIngredientExists(candidates[i])) return candidates[i];
        }
        return null;
    }

    function firstExistingTag(candidates) {
        for (let i = 0; i < candidates.length; i++) {
            if (e6eRecipeIngredientExists(candidates[i])) return candidates[i];
        }
        return null;
    }

    function preferred(tag) {
        if (!tag) return air;
        try {
            return getPreferredItemInTag(Ingredient.of(tag)).id;
        } catch (error) {
            return air;
        }
    }

    function hasInputs(inputs) {
        return inputs.every((input) => input && e6eRecipeIngredientExists(input));
    }

    function addMbd2PressWithMold(output, firstInput, mold, recipeId) {
        if (!hasMbd2 || !e6ePortedItemExists(mold) || !e6eRecipeOutputExists(output) || !hasInputs([firstInput])) return;
        event.recipes.e6e_mbd2.thermal_press()
            .id(recipeId)
            .duration(100)
            .inputItems(firstInput)
            .inputItems(mold)
            .outputItems(output)
            .inputFE(2400);
    }

    function addMbd2Press(output, input, recipeId) {
        if (!hasMbd2 || !e6eRecipeOutputExists(output) || !hasInputs([input])) return;
        event.recipes.e6e_mbd2.thermal_press()
            .id(recipeId)
            .duration(100)
            .inputItems(`4x ${input}`)
            .outputItems(output)
            .inputFE(2400);
    }

    materialsToUnify.forEach((material) => {
        const ingotTag = tagFor('ingots', material);
        const gemTag = tagFor('gems', material);
        const nuggetIronTag = tagFor('nuggets', 'iron');
        const oreTag = tagFor('ores', material);
        const dustTag = tagFor('dusts', material);
        const plateTag = tagFor('plates', material);
        const gearTag = tagFor('gears', material);
        const rodTag = tagFor('rods', material);
        const wireTag = tagFor('wires', material);

        const ingot = preferred(ingotTag);
        const gem = preferred(gemTag);
        const ore = preferred(oreTag);
        const dust = preferred(dustTag);
        const plate = preferred(plateTag);
        const gear = preferred(gearTag);
        const rod = preferred(rodTag);
        const wire = preferred(wireTag);
        const materialTag = ingot !== air ? ingotTag : gemTag;

        if (ore !== air && ingot !== air && material !== 'ender') {
            event.smelting(ingot, oreTag).xp(0.7).id(`${idPrefix}smelting/${material}/ingot_from_ore`);
            event.blasting(ingot, oreTag).xp(0.7).id(`${idPrefix}blasting/${material}/ingot_from_ore`);
        }

        if (gear !== air && materialTag && nuggetIronTag) {
            event.remove({ output: gear });
            const gearMold = 'immersiveengineering:mold_gear';
            addMbd2Press(gear, materialTag, `${idPrefix}mbd2/press/gear/${material}`);
            if (hasImmersiveEngineering && e6ePortedItemExists(gearMold)) {
                event.recipes.immersiveengineering.metal_press(gear, `4x ${materialTag}`, gearMold)
                    .id(`${idPrefix}immersiveengineering/gear/${material}`);
            }
            if (e6eRecipeIngredientExists(nuggetIronTag)) {
                event.shaped(gear, [' B ', 'BAB', ' B '], { A: nuggetIronTag, B: materialTag })
                    .id(`${idPrefix}crafting/gear/${material}`);
            }
        }

        if (rod !== air && materialTag) {
            event.remove({ output: rod });
            const rodMold = 'immersiveengineering:mold_rod';
            addMbd2PressWithMold(rod, materialTag, rodMold, `${idPrefix}mbd2/press/rod/${material}`);
            if (hasImmersiveEngineering && e6ePortedItemExists(rodMold)) {
                event.recipes.immersiveengineering.metal_press(rod, materialTag, rodMold)
                    .id(`${idPrefix}immersiveengineering/rod/${material}`);
            }
            event.shaped(rod, ['A', 'A'], { A: materialTag })
                .id(`${idPrefix}crafting/rod/${material}`);
        }

        if (plate !== air && materialTag) {
            event.remove({ output: plate });
            const plateMold = 'immersiveengineering:mold_plate';
            const hammerTag = firstExistingTag([
                '#c:tools/crafting_hammer',
                '#c:tools/hammers',
                '#forge:tools/crafting_hammer'
            ]);
            if (hammerTag) {
                event.shapeless(plate, [materialTag, hammerTag]).id(`${idPrefix}crafting/plate/${material}`);
            }
            addMbd2PressWithMold(plate, materialTag, plateMold, `${idPrefix}mbd2/press/plate/${material}`);
            if (hasImmersiveEngineering && e6ePortedItemExists(plateMold)) {
                event.recipes.immersiveengineering.metal_press(plate, materialTag, plateMold)
                    .id(`${idPrefix}immersiveengineering/plate/${material}`);
            }
            if (hasCreate) {
                event.recipes.create.pressing(plate, materialTag).id(`${idPrefix}create/plate/${material}`);
            }
        }

        if (wire !== air && materialTag) {
            event.remove({ output: wire });
            const wireMold = 'immersiveengineering:mold_wire';
            addMbd2PressWithMold(`2x ${wire}`, materialTag, wireMold, `${idPrefix}mbd2/press/wire/${material}`);
            if (hasImmersiveEngineering && e6ePortedItemExists(wireMold)) {
                event.recipes.immersiveengineering.metal_press(`2x ${wire}`, materialTag, wireMold)
                    .id(`${idPrefix}immersiveengineering/wire/${material}`);
            }
            const cuttersTag = firstExistingTag([
                '#c:tools/wirecutters',
                '#c:tools/wire_cutter',
                '#forge:tools/wirecutter'
            ]);
            if (plate !== air && cuttersTag) {
                event.shapeless(wire, [plate, cuttersTag]).id(`${idPrefix}crafting/wire/${material}`);
            }
        }

        const secondary = oreProcessingSecondaries[material];
        if (e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js')
            && ore !== air && dust !== air && secondary) {
            const secondaryDustTag = tagFor('dusts', secondary.secondary);
            const secondaryDust = preferred(secondaryDustTag);
            const byproduct = secondaryDust !== air ? secondaryDust : dust;
            event.recipes.immersiveengineering.crusher(`2x ${dust}`, oreTag, [Item.of(byproduct).withChance(0.1)])
                .id(`${idPrefix}immersiveengineering/crusher/${material}`);
        }
    });
});
})();

(function () {
// 专家版材料统一与矿石加工；可选配方按目标端实际安装的模组分别注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["botania:mana_infusion","create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","interactio:item_fluid_transform","interactio:item_lightning","mekanism:smelting","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","naturesaura:altar","neovitae:ara_vitae_recipe"]);
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/unification/unify_materials/';
    const hasMbd2 = e6ePortedRecipeModLoaded('e6e_mbd2');
    const hasImmersiveEngineering = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');

    function tagFor(type, material) {
        const candidates = [`#c:${type}/${material}`, `#forge:${type}/${material}`];
        for (let i = 0; i < candidates.length; i++) {
            if (e6eRecipeIngredientExists(candidates[i])) return candidates[i];
        }
        return null;
    }

    function preferred(tag) {
        if (!tag) return air;
        try {
            return getPreferredItemInTag(Ingredient.of(tag)).id;
        } catch (error) {
            return air;
        }
    }

    function firstExistingTag(candidates) {
        for (var i = 0; i < candidates.length; i++) {
            if (e6eRecipeIngredientExists(candidates[i])) return candidates[i];
        }
        return null;
    }

    function addMbd2ThermalPress(output, input, recipeId) {
        if (!hasMbd2 || !e6eRecipeOutputExists(output) || !e6eRecipeIngredientExists(input)) return;
        event.recipes.e6e_mbd2.thermal_press()
            .id(recipeId)
            .duration(100)
            .inputItems(`4x ${input}`)
            .outputItems(output)
            .inputFE(2400);
    }

    materialsToUnify.forEach((material) => {
        var ingotTag = tagFor('ingots', material);
        var nuggetTag = tagFor('nuggets', material);
        var gemTag = tagFor('gems', material);
        var plateTag = tagFor('plates', material);
        var gearTag = tagFor('gears', material);
        var rodTag = tagFor('rods', material);
        var wireTag = tagFor('wires', material);
        var oreTag = tagFor('ores', material);
        var crushedOreTag = e6eRecipeIngredientExists(`#create:crushed_ores/${material}`)
            ? `#create:crushed_ores/${material}` : null;
        var manaClusterTag = `#enigmatica:mana_clusters/${material}`;
        var fulminatedClusterTag = `#enigmatica:fulminated_clusters/${material}`;
        var levigatedMaterialTag = `#enigmatica:levigated_materials/${material}`;
        var crystallineSliverTag = `#enigmatica:crystalline_slivers/${material}`;

        var ingot = preferred(ingotTag);
        var nugget = preferred(nuggetTag);
        var gem = preferred(gemTag);
        var plate = preferred(plateTag);
        var gear = preferred(gearTag);
        var rod = preferred(rodTag);
        var wire = preferred(wireTag);
        var ore = preferred(oreTag);
        var crushed_ore = preferred(crushedOreTag);
        var mana_cluster = preferred(manaClusterTag);
        var fulminated_cluster = preferred(fulminatedClusterTag);
        var levigated_material = preferred(levigatedMaterialTag);
        var crystalline_sliver = preferred(crystallineSliverTag);
        var materialTag = ingot !== air ? ingotTag : gemTag;

        ore_ingot_smelting(event, material, ore, ingot, oreTag);
        gear_unification(event, material, ingot, gem, gear, materialTag);
        rod_unification(event, material, ingot, gem, rod, plate, materialTag, plateTag);
        plate_unification(event, material, ingot, gem, plate, materialTag);
        wire_unification(event, material, ingot, gem, wire, plate, materialTag, plateTag);

        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, crushed_ore, ingot, oreTag, crushedOreTag);

        magical_ore_processing(
            event,
            material,
            ore,
            ingot,
            nugget,
            mana_cluster,
            fulminated_cluster,
            levigated_material,
            crystalline_sliver,
            oreTag
        );
    });

    function ore_ingot_smelting(event, material, ore, ingot, oreTag) {
        if (ore == air || ingot == air || !oreTag) {
            return;
        }

        const blacklistedMaterials = ['ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = ingot,
            input = oreTag;
        event.blasting(output, input).xp(0.7).id(`${id_prefix}blasting/${material}/ingot/from_ore`);

        event.recipes.mekanism.smelting(output, input).id(`${id_prefix}smelting/${material}/ingot/from_ore`);

    }

    function gear_unification(event, material, ingot, gem, gear, materialTag) {
        if (gear == air || !materialTag || (ingot == air && gem == air)) {
            return;
        }

        event.remove({ output: gear });

        var output = gear,
            input = materialTag,
            mold = 'immersiveengineering:mold_gear';

        addMbd2ThermalPress(output, input, `${id_prefix}mbd2/press/gear/${material}`);

        if (hasImmersiveEngineering && e6ePortedItemExists(mold)) {
            event.recipes.immersiveengineering
                .metal_press(`4x ${output}`, `16x ${input}`, mold)
                .id(`${id_prefix}immersiveengineering/gear/${material}`);
        }

        const centerPlate = tagFor('plates', 'iron_tin');
        const sideNuggets = tagFor('nuggets', 'aluminum');
        if (centerPlate && sideNuggets) {
            event.shaped(output, ['CAC', 'ABA', 'CAC'], { A: input, B: centerPlate, C: sideNuggets })
                .id(`${id_prefix}crafting/gear/${material}`);
        }
    }

    function rod_unification(event, material, ingot, gem, rod, plate, materialTag, plateTag) {
        if (rod == air || !materialTag || (ingot == air && gem == air)) {
            return;
        }

        event.remove({ output: rod });

        let output = rod,
            input = materialTag,
            mold = 'immersiveengineering:mold_rod';
        const hammer = firstExistingTag(['#c:tools/crafting_hammer', '#c:tools/hammers', '#forge:tools/crafting_hammer']);

        addMbd2ThermalPress(`4x ${rod}`, input, `${id_prefix}mbd2/press/rod/${material}`);

        if (hasImmersiveEngineering && e6ePortedItemExists(mold)) {
            event.recipes.immersiveengineering
                .metal_press(`4x ${rod}`, `4x ${input}`, mold)
                .id(`${id_prefix}immersiveengineering/rod/${material}`);
        }

        if (plate !== air && plateTag && hammer) {
            event.shapeless(output, [plateTag, hammer, plateTag]).id(`${id_prefix}crafting/rod/${material}`);
        }
    }

    function plate_unification(event, material, ingot, gem, plate, materialTag) {
        if (plate == air || !materialTag || (ingot == air && gem == air)) {
            return;
        }

        event.remove({ output: plate });
        const output = plate,
            mold = 'immersiveengineering:mold_plate',
            hammer = firstExistingTag(['#c:tools/crafting_hammer', '#c:tools/hammers', '#forge:tools/crafting_hammer']);
        const input = materialTag;

        if (hammer) event.shapeless(output, [input, hammer, input]).id(`${id_prefix}crafting/plate/${material}`);
        if (hasImmersiveEngineering && e6ePortedItemExists(mold)) {
            event.recipes.immersiveengineering
                .metal_press(`4x ${output}`, `4x ${input}`, mold)
                .id(`${id_prefix}immersiveengineering/plate/${material}`);
        }
        if (hasCreate) event.recipes.create.pressing(output, input).id(`${id_prefix}create/plate/${material}`);

        addMbd2ThermalPress(`4x ${output}`, input, `${id_prefix}mbd2/press/plate/${material}`);
    }

    function wire_unification(event, material, ingot, gem, wire, plate, materialTag, plateTag) {
        if (wire == air || plate == air || !materialTag || !plateTag || (ingot == air && gem == air)) {
            return;
        }

        event.remove({ output: wire });

        let output = wire,
            mold = 'immersiveengineering:mold_wire';

        addMbd2ThermalPress(`16x ${output}`, plateTag, `${id_prefix}mbd2/press/wire/${material}`);

        if (hasImmersiveEngineering && e6ePortedItemExists(mold)) {
            event.recipes.immersiveengineering
                .metal_press(`16x ${output}`, `4x ${plateTag}`, mold)
                .id(`${id_prefix}immersiveengineering/wire/${material}`);
        }

        const wireCutters = firstExistingTag(['#c:tools/wirecutters', '#c:tools/wire_cutter', '#forge:tools/wirecutter']);
        if (wireCutters) {
            event.shapeless(Item.of(output, 2), [plateTag, plateTag, wireCutters])
                .id(`${id_prefix}crafting/wire/${material}`);
        }
    }

    function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, crushed_ore, ingot, oreTag, crushedOreTag) {
        if (!hasImmersiveEngineering || !oreTag || !crushedOreTag || ore == air || crushed_ore == air || ingot == air) {
            return;
        }

        var primaryOutput = crushed_ore,
            input = oreTag,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = preferred(`#create:crushed_ores/${materialProperties.secondary}`);
        } catch (err) {
            secondaryOutput = crushed_ore;
        }
        if (secondaryOutput == air) secondaryOutput = crushed_ore;

        event.recipes.immersiveengineering
            .crusher(primaryOutput, input, [
                Item.of(primaryOutput, 2).withChance(0.6),
                Item.of(primaryOutput).withChance(0.5),
                Item.of(secondaryOutput, 2).withChance(0.35),
                Item.of('minecraft:gravel').withChance(0.18)
            ])
            .id(`immersiveengineering:crusher/ore_${material}`);
    }

    function magical_ore_processing(
        event,
        material,
        ore,
        ingot,
        nugget,
        mana_cluster,
        fulminated_cluster,
        levigated_material,
        crystalline_sliver,
        oreTag
    ) {
        if (!e6ePortedRecipeModLoaded('botania') || !e6ePortedRecipeModLoaded('interactio')
            || !e6ePortedRecipeModLoaded('naturesaura') || !e6ePortedRecipeModLoaded('neovitae')) return;
        if (!oreTag ||
            ore == air ||
            ingot == air ||
            nugget == air ||
            mana_cluster == air ||
            fulminated_cluster == air ||
            levigated_material == air ||
            crystalline_sliver == air
        ) {
            return;
        }

        var secondary_fulminated_cluster,
            infusing_input = oreTag,
            zapping_input = `#enigmatica:mana_clusters/${material}`,
            crumbling_input = `#enigmatica:fulminated_clusters/${material}`,
            freezing_input = `#enigmatica:levigated_materials/${material}`,
            fusing_input = `#enigmatica:crystalline_slivers/${material}`;

        try {
            secondary_fulminated_cluster = getPreferredItemInTag(
                Ingredient.of(`#enigmatica:fulminated_clusters/${oreProcessingSecondaries[material].secondary}`)
            ).id;
        } catch (err) {
            secondary_fulminated_cluster = getPreferredItemInTag(
                Ingredient.of(`#mekanism:fulminated_clusters/${material}`)
            ).id;
        }
        if (secondary_fulminated_cluster == air) secondary_fulminated_cluster = fulminated_cluster;

        // 第一步：注入魔力。
        event
            .custom({
                type: 'botania:mana_infusion',
                input: Ingredient.of(infusing_input).toJson(),
                output: { item: mana_cluster, count: 1 },
                catalyst: { type: 'block', block: 'naturesaura:generator_limit_remover' },
                mana: 2000
            })
            .id(`enigmatica:expert/magical_ore_processing/mana/${material}`);

        // 第二步：雷电转化。
        event
            .custom({
                type: 'interactio:item_lightning',
                inputs: [Ingredient.of(zapping_input).toJson()],
                output: {
                    entries: [
                        { result: { item: fulminated_cluster, count: 1 }, weight: 20 },
                        { result: { item: secondary_fulminated_cluster, count: 1 }, weight: 10 },
                        { result: { item: 'immersiveengineering:slag', count: 1 }, weight: 5 }
                    ],
                    empty_weight: 65,
                    rolls: 20
                }
            })
            .id(`enigmatica:expert/magical_ore_processing/lightning/${material}`);

        // 第三步：粉碎结晶。
        event
            .custom({
                type: 'naturesaura:altar',
                input: Ingredient.of(crumbling_input).toJson(),
                output: Ingredient.of(levigated_material).toJson(),
                catalyst: Ingredient.of('naturesaura:crushing_catalyst').toJson(),
                aura_type: 'naturesaura:overworld',
                aura: 300,
                time: 1
            })
            .id(`enigmatica:expert/magical_ore_processing/aura/${material}`);

        // 第四步：星光冷却。
        event
            .custom({
                type: 'interactio:item_fluid_transform',
                inputs: [
                    Ingredient.of(freezing_input).toJson(),
                    { tag: 'botania:runes/winter', count: 1, return_chance: 1.0 }
                ],
                output: {
                    entries: [
                        { result: Ingredient.of(crystalline_sliver).toJson(), weight: 75 },
                        { result: Ingredient.of('neovitae:corrupted_tiny_dust').toJson(), weight: 25 }
                    ],
                    empty_weight: 0,
                    rolls: 20
                },
                fluid: { fluid: 'astralsorcery:liquid_starlight' },
                consume_fluid: 0.05
            })
            .id(`enigmatica:expert/magical_ore_processing/starlight/${material}`);

        // 第五步：在 NeoVitae Ara Vitae 中完成血晶融合。
        event.recipes.neovitae.ara_vitae_recipe(fusing_input, Item.of(nugget), 4, 18, 18, 9)
            .id(`enigmatica:expert/magical_ore_processing/blood/${material}`);
    }
});
})();

(function () {
// 将原普通版 Pretty Pipes 无序合成配方纳入专家版。
if (e6ePortedRecipeModLoaded('prettypipes')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const output = 'prettypipes:crafting_terminal';
        const inputs = ['prettypipes:item_terminal', 'prettypipes:low_crafting_module'];
        if (!e6eCanRegisterRecipe(output, inputs)) return;

        event.shapeless(output, inputs).id('prettypipes:crafting_terminal');
    });
}
})();

(function () {

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
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
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:crafting_shapeless", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
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
