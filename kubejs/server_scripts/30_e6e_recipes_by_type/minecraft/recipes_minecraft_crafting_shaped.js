// 配方类型：minecraft:crafting_shaped
// 中文名称：工作台有序合成
// 用途：材料须按指定位置摆放。

// ===== 配方输入替换 =====
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', true, [
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless'
    ]);
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
    safeReplaceInput({ id: 'compactmachines:personal_shrinking_device' }, 'minecraft:book', 'shrink:shrinking_device');
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
            event
                .shaped(Item.of(`minecraft:${color}_carpet`, 3), ['WW'], {
                    W: `minecraft:${color}_wool`
                })
                .id(`${id_prefix}${color}_carpet_from_wool`);
        }

        if (
            e6ePortedItemExists(`minecraft:${color}_stained_glass_pane`) &&
            e6ePortedItemExists('minecraft:glass_pane')
        ) {
            event
                .shaped(Item.of(`minecraft:${color}_stained_glass_pane`, 8), ['GGG', 'GDG', 'GGG'], {
                    G: 'minecraft:glass_pane',
                    D: dyeTag
                })
                .id(`${id_prefix}${color}_stained_glass_pane_from_glass_panes`);
        }

        if (e6ePortedItemExists(`minecraft:${color}_stained_glass`) && e6ePortedItemExists('minecraft:glass')) {
            event
                .shaped(Item.of(`minecraft:${color}_stained_glass`, 8), ['GGG', 'GDG', 'GGG'], {
                    G: 'minecraft:glass',
                    D: dyeTag
                })
                .id(`${id_prefix}${color}_stained_glass_from_glass`);
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

                event
                    .shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                        S: itemTag,
                        D: dyeTag
                    })
                    .id(`${id_prefix}${color}_${blockName}_bulk`);
                event.shapeless(Item.of(block, 1), [dyeTag, itemTag]).id(`${id_prefix}${color}_${blockName}`);
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
            event
                .shapeless(Item.of(`minecraft:${color}_concrete_powder`, 8), [
                    dyeTag,
                    '#forge:sand',
                    '#forge:sand',
                    '#forge:sand',
                    '#forge:sand',
                    '#forge:gravel',
                    '#forge:gravel',
                    '#forge:gravel',
                    '#forge:gravel'
                ])
                .id(`${id_prefix}${color}_concrete_powder_from_sand_gravel`);
        }
    });

    const alt_material_tag_replacements = [
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
            replaceWith: 'tin',
            items: ['pneumaticcraft:memory_stick']
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

// ===== 基础模式有序合成（按模组顺序） =====

ServerEvents.recipes((event) => {
    const id_prefix = 'architects_palette:base/shaped/';
    const recipes = [
        {
            output: '8x architects_palette:limestone',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:stone',
                B: '#forge:mushrooms'
            },
            id: `${id_prefix}limestone`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'ars_nouveau:novice_spell_book',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:nuggets/gold',
                B: 'minecraft:purple_carpet',
                C: 'minecraft:book'
            },
            id: 'ars_nouveau:novice_spell_book'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['astralsorcery'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const id_prefix = 'enigmatica:base/astralsorcery/shaped/';
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: '8x astralsorcery:infused_wood_stairs',
                pattern: ['A  ', 'AA ', 'AAA'],
                key: {
                    A: 'astralsorcery:infused_wood_planks'
                },
                id: `${id_prefix}infused_wood_stairs`
            },
            {
                output: '2x astralsorcery:infused_wood_arch',
                pattern: ['AA '],
                key: {
                    A: 'astralsorcery:infused_wood_planks'
                },
                id: `${id_prefix}infused_wood_arch`
            },
            {
                output: '6x astralsorcery:infused_wood_slab',
                pattern: ['AAA'],
                key: {
                    A: 'astralsorcery:infused_wood_planks'
                },
                id: `${id_prefix}infused_wood_slab`
            },
            {
                output: '2x astralsorcery:infused_wood_column',
                pattern: ['A', 'A'],
                key: {
                    A: 'astralsorcery:infused_wood_planks'
                },
                id: `${id_prefix}infused_wood_column`
            },
            {
                output: '4x astralsorcery:infused_wood_engraved',
                pattern: [' A ', 'A A', ' A '],
                key: {
                    A: 'astralsorcery:infused_wood_planks'
                },
                id: `${id_prefix}infused_wood_engraved`
            },
            {
                output: '4x astralsorcery:infused_wood_enriched',
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: 'astralsorcery:infused_wood_planks',
                    B: '#forge:gems/aquamarine'
                },
                id: `${id_prefix}infused_wood_enriched`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['atum'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const id_prefix = 'enigmatica:base/atum/shaped/';
        const recipes = [
            {
                output: Item.of('6x atum:sand_layer'),
                pattern: ['AAA'],
                key: {
                    A: 'atum:sand'
                },
                id: `${id_prefix}sand_layer`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const id_prefix = 'enigmatica:base/eidolon/shaped/';
        const recipes = [
            {
                output: 'eidolon_repraised:polished_planks_stairs',
                pattern: ['A  ', 'AA ', 'AAA'],
                key: {
                    A: 'eidolon_repraised:polished_planks'
                },
                id: `${id_prefix}polished_planks_stairs`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/shaped/';
    // Productive Bees 用一个带蜂种数据的可配置蜜脾物品；旧版蜜脾输入改用通用蜜脾。
    const resourcefulBeesReplacements = {
        'resourcefulbees:wax': 'productivebees:wax',
        'resourcefulbees:blaze_honeycomb': 'productivebees:configurable_honeycomb',
        'resourcefulbees:coal_honeycomb': 'productivebees:configurable_honeycomb',
        'resourcefulbees:forest_honeycomb': 'productivebees:configurable_honeycomb',
        'resourcefulbees:rgbee_honeycomb': 'productivebees:configurable_honeycomb'
    };

    function resolveEnigmaticaShapedIngredient(value) {
        if (Array.isArray(value)) {
            return value.map(resolveEnigmaticaShapedIngredient).filter((ingredient) => ingredient != null);
        }
        if (typeof value !== 'string') return value;

        const stackMatch = value.match(/^(\d+\s*x\s*)(.+)$/i);
        const countPrefix = stackMatch ? stackMatch[1] : '';
        let descriptor = stackMatch ? stackMatch[2] : value;

        if (descriptor.startsWith('#bloodmagic:')) {
            descriptor = e6eMapNeoVitaeIngredient(descriptor);
        } else if (descriptor.startsWith('#eidolon:')) {
            descriptor = `#eidolon_repraised:${descriptor.substring('#eidolon:'.length)}`;
        } else if (descriptor.startsWith('#forge:')) {
            if (e6eRecipeIngredientExists(`#c:${descriptor.substring('#forge:'.length)}`)) {
                descriptor = `#c:${descriptor.substring('#forge:'.length)}`;
            }
        } else if (!descriptor.startsWith('#')) {
            if (resourcefulBeesReplacements[descriptor]) {
                descriptor = resourcefulBeesReplacements[descriptor];
            } else if (descriptor.startsWith('bloodmagic:') || descriptor.startsWith('eidolon:')) {
                descriptor = e6eMapNeoVitaeItemId(descriptor);
            }
        }

        return descriptor ? `${countPrefix}${descriptor}` : null;
    }

    function registerEnigmaticaShaped(output, pattern, sourceKey, id) {
        const resolvedOutput = resolveEnigmaticaShapedIngredient(output);
        const key = {};
        Object.keys(sourceKey).forEach((symbol) => {
            key[symbol] = resolveEnigmaticaShapedIngredient(sourceKey[symbol]);
        });

        if (
            !e6eCanRegisterRecipe(
                resolvedOutput,
                Object.keys(key).map((symbol) => key[symbol])
            )
        )
            return false;
        event.shaped(resolvedOutput, pattern, key).id(id);
        return true;
    }

    const morphToolEntries = {
        blockcarpentry: { id: 'blockcarpentry:texture_wrench', Count: 1 },
        powah: { id: 'powah:wrench', Count: 1 },
        astralsorcery: { id: 'astralsorcery:wand', Count: 1 },
        pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', Count: 1 },
        immersiveengineering: { id: 'immersiveengineering:hammer', Count: 1 },
        transport: { id: 'transport:rail_breaker', Count: 1 },
        botania: { id: 'botania:twig_wand', Count: 1, tag: { color1: 0, color2: 0 } },
        ars_nouveau: { id: 'ars_nouveau:dominion_wand', Count: 1 },
        mekanism: { id: 'mekanism:configurator', Count: 1 },
        bloodmagic: { id: 'bloodmagic:ritualtinkerer', Count: 1 },
        rftoolsbase: { id: 'rftoolsbase:smartwrench', Count: 1 },
        create: { id: 'create:wrench', Count: 1 },
        chiselsandbits: { id: 'chiselsandbits:wrench_wood', Count: 1 },
        refinedstorage: { id: 'refinedstorage:wrench', Count: 1 },
        prettypipes: { id: 'prettypipes:wrench', Count: 1 },
        storagedrawers: { id: 'storagedrawers:drawer_key', Count: 1 },
        fluxnetworks: { id: 'fluxnetworks:flux_configurator', Count: 1 },
        integratedtunnels: { id: 'integrateddynamics:wrench', Count: 1 },
        compactmachines: { id: 'compactmachines:personal_shrinking_device', Count: 1 }
    };
    const morphToolContentItems = [];
    Object.keys(morphToolEntries).forEach((modId) => {
        const entry = morphToolEntries[modId];
        const itemId = resolveEnigmaticaShapedIngredient(entry.id);
        if (!itemId || !e6ePortedItemExists(itemId)) return;
        const resolvedEntry = { id: itemId, count: entry.Count };
        if (entry.tag) resolvedEntry.components = { 'minecraft:custom_data': entry.tag };
        morphToolContentItems.push(resolvedEntry);
    });

    const recipes = [
        {
            output: '8x atum:linen_thread',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:crops/flax',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}atum/linen_thread_from_flax`
        },
        {
            output: '4x atum:linen_thread',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'atum:cloth_scrap',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}atum/linen_thread_from_cloth_scrap`
        },
        {
            output: '6x eidolon_repraised:lead_ingot',
            pattern: ['AA', 'AA', 'AA'],
            key: {
                A: '#forge:ingots/lead'
            },
            id: `${id_prefix}eidolon/lead_ingot_conversion`
        },
        {
            output: '4x atum:marl',
            pattern: ['AB', 'BA'],
            key: {
                A: 'atum:sand',
                B: 'minecraft:clay'
            },
            id: `${id_prefix}atum/marl_from_clay`
        },

        {
            output: '4x bloodmagic:dungeon_polished',
            pattern: ['AA', 'AA'],
            key: {
                A: 'bloodmagic:dungeon_stone'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished`
        },
        {
            output: '4x bloodmagic:dungeon_brick1',
            pattern: ['AA', 'AA'],
            key: {
                A: 'bloodmagic:dungeon_polished'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick1`
        },
        {
            output: '4x bloodmagic:dungeon_polished_stairs',
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_polished'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished_stairs`
        },
        {
            output: '4x bloodmagic:dungeon_brick_stairs',
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_brick1'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_stairs`
        },
        {
            output: '2x bloodmagic:dungeon_pillar_center',
            pattern: ['A', 'A'],
            key: {
                A: 'bloodmagic:dungeon_stone'
            },
            id: `${id_prefix}bloodmagic/dungeon_pillar_center`
        },
        {
            output: '1x bloodmagic:dungeon_eye',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'bloodmagic:dungeon_stone',
                B: '#bloodmagic:crystals/demon'
            },
            id: `${id_prefix}bloodmagic/dungeon_eye`
        },
        {
            output: '6x bloodmagic:dungeon_polished_wall',
            pattern: ['AAA', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_polished'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished_wall`
        },
        {
            output: '4x bloodmagic:dungeon_tile',
            pattern: ['AA', 'AA'],
            key: {
                A: 'bloodmagic:dungeon_brick1'
            },
            id: `${id_prefix}bloodmagic/dungeon_tile`
        },
        {
            output: '6x bloodmagic:dungeon_tile_slab',
            pattern: ['AAA'],
            key: {
                A: 'bloodmagic:dungeon_tile'
            },
            id: `${id_prefix}bloodmagic/dungeon_tile_slab`
        },
        {
            output: '6x bloodmagic:dungeon_brick_slab',
            pattern: ['AAA'],
            key: {
                A: 'bloodmagic:dungeon_brick1'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_slab`
        },
        {
            output: '6x bloodmagic:dungeon_brick_wall',
            pattern: ['AAA', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_brick1'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_wall`
        },
        {
            output: 'bloodmagic:dungeon_polished_gate',
            pattern: ['BAB', 'BAB'],
            key: {
                A: 'bloodmagic:dungeon_polished',
                B: 'minecraft:stick'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished_gate`
        },
        {
            output: 'bloodmagic:dungeon_brick_gate',
            pattern: ['BAB', 'BAB'],
            key: {
                A: 'bloodmagic:dungeon_brick1',
                B: 'minecraft:stick'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_gate`
        },
        {
            output: '8x projectvibrantjourneys:bones',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'minecraft:bone'
            },
            id: `${id_prefix}projectvibrantjourneys/bones`
        },
        {
            output: '8x projectvibrantjourneys:charred_bones',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:bone',
                B: 'minecraft:charcoal'
            },
            id: `${id_prefix}projectvibrantjourneys/charred_bones`
        },
        {
            output: '8x projectvibrantjourneys:seashells',
            pattern: ['AAA', 'ABA', 'AAC'],
            key: {
                A: 'minecraft:prismarine_shard',
                B: 'minecraft:nautilus_shell',
                C: 'minecraft:prismarine_crystals'
            },
            id: `${id_prefix}projectvibrantjourneys/seashells`
        },
        {
            output: 'minecraft:hopper',
            pattern: ['ABA', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/iron',
                B: '#minecraft:logs'
            },
            id: `${id_prefix}minecraft/hopper`
        },
        {
            output: 'minecraft:tube_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:tube_coral_fan'
            },
            id: `${id_prefix}minecraft/tube_coral_block_from_fan`
        },
        {
            output: 'minecraft:brain_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:brain_coral_fan'
            },
            id: `${id_prefix}minecraft/brain_coral_block_from_fan`
        },
        {
            output: 'minecraft:bubble_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:bubble_coral_fan'
            },
            id: `${id_prefix}minecraft/bubble_coral_block_from_fan`
        },
        {
            output: 'minecraft:fire_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:fire_coral_fan'
            },
            id: `${id_prefix}minecraft/fire_coral_block_from_fan`
        },
        {
            output: 'minecraft:horn_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:horn_coral_fan'
            },
            id: `${id_prefix}minecraft/horn_coral_block_from_fan`
        },
        {
            output: 'minecraft:tube_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:tube_coral'
            },
            id: `${id_prefix}minecraft/tube_coral_block`
        },
        {
            output: 'minecraft:brain_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:brain_coral'
            },
            id: `${id_prefix}minecraft/brain_coral_block`
        },
        {
            output: 'minecraft:bubble_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:bubble_coral'
            },
            id: `${id_prefix}minecraft/bubble_coral_block`
        },
        {
            output: 'minecraft:fire_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:fire_coral'
            },
            id: `${id_prefix}minecraft/fire_coral_block`
        },
        {
            output: 'minecraft:horn_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:horn_coral'
            },
            id: `${id_prefix}minecraft/horn_coral_block`
        },
        {
            output: '4x minecraft:ladder',
            pattern: ['A A', 'ABA', 'A A'],
            key: {
                A: '#forge:rods/wooden',
                B: '#enigmatica:ladder_planks'
            },
            id: `${id_prefix}minecraft/ladder`
        },
        {
            output: '3x byg:embur_hyphae',
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:embur_pedu'
            },
            id: `${id_prefix}byg/embur_hyphae`
        },
        {
            output: '1x byg:pollen_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:pollen_dust'
            },
            id: `${id_prefix}byg/pollen_dust`
        },
        {
            output: '1x quark:turf',
            pattern: ['A', 'A'],
            key: {
                A: 'quark:turf_slab'
            },
            id: `${id_prefix}quark/turf_from_slab`
        },
        {
            output: '8x thermal:white_rockwool',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#enigmatica:washables/rockwool',
                B: 'minecraft:water_bucket'
            },
            id: `${id_prefix}thermal/white_rockwool_from_washing`
        },
        {
            output: 'mekanism:block_refined_obsidian',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:ingots/refined_obsidian'
            },
            id: `${id_prefix}refined_obsidian_block_from_ingots`
        },
        {
            output: 'mekanism:ingot_refined_obsidian',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:nuggets/refined_obsidian'
            },
            id: `${id_prefix}refined_obsidian_ingot_from_nuggets`
        },
        {
            output: 'mekanism:block_refined_glowstone',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:ingots/refined_glowstone'
            },
            id: `${id_prefix}refined_glowstone_block_from_ingots`
        },
        {
            output: 'mekanism:ingot_refined_glowstone',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:nuggets/refined_glowstone'
            },
            id: `${id_prefix}refined_glowstone_ingot_from_nuggets`
        },
        {
            output: 'occultism:iesnium_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:ingots/iesnium'
            },
            id: `${id_prefix}iesnium_block_from_ingots`
        },
        {
            output: 'occultism:iesnium_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:nuggets/iesnium'
            },
            id: `${id_prefix}iesnium_ingot_from_nuggets`
        },
        {
            output: Item.of('morphtool:tool', { 'morphtool:tool_content': morphToolContentItems }),
            pattern: ['ABA', 'CFD', 'AEA'],
            key: {
                A: 'minecraft:redstone_block',
                B: '#forge:gears/gold',
                C: '#forge:gears/iron',
                D: '#forge:gears/silver',
                E: '#forge:gears/copper',
                F: 'morphtool:tool'
            },
            id: `${id_prefix}morphtool/tool_filled`
        }
    ];

    recipes.forEach((recipe) => {
        registerEnigmaticaShaped(recipe.output, recipe.pattern, recipe.key, recipe.id);
    });

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }

        // 此处处理使用原木的配方。
        var chest = wood.modId + ':' + wood.logType + '_chest';
        if (!e6ePortedItemExists(chest)) {
            registerEnigmaticaShaped(
                '4x minecraft:chest',
                ['AAA', 'A A', 'AAA'],
                { A: wood.logBlock },
                `${id_prefix}chest_from_${wood.logBlock.replace(':', '_')}`
            );
        } else {
            registerEnigmaticaShaped(
                `4x ${chest}`,
                ['AAA', 'A A', 'AAA'],
                { A: wood.logBlock },
                `${id_prefix}${chest.replace(':', '_')}_from_${wood.logBlock.replace(':', '_')}`
            );
        }

        var dupes = [
            'palo_verde',
            'withering_oak',
            'blue_archwood',
            'green_archwood',
            'purple_archwood',
            'menril_filled',
            'watchful_aspen',
            'crustose',
            'sappy_maple',
            'avocado'
        ];

        if (dupes.includes(wood.logType)) {
            return;
        }

        // 此处处理使用木板的配方。

        let craftingTable = wood.modId + ':' + wood.logType + '_crafting_table';
        if (!e6ePortedItemExists(craftingTable)) {
            registerEnigmaticaShaped(
                'minecraft:crafting_table',
                ['AA', 'AA'],
                { A: wood.plankBlock },
                `${id_prefix}crafting_table_from_${wood.plankBlock.replace(':', '_')}`
            );
        }

        if (!sign_wood_type_blacklist.includes(wood.logType)) {
            registerEnigmaticaShaped(
                'minecraft:oak_sign',
                ['AAA', 'AAA', ' B '],
                { A: wood.plankBlock, B: '#forge:rods/wooden' },
                `${id_prefix}oak_sign_from_${wood.plankBlock.replace(':', '_')}`
            );
        }

        if (!chest_wood_type_blacklist.includes(wood.logType)) {
            registerEnigmaticaShaped(
                'minecraft:chest',
                ['AAA', 'A A', 'AAA'],
                { A: wood.plankBlock },
                `${id_prefix}chest_from_${wood.plankBlock.replace(':', '_')}`
            );
        }
    });

    // 为除橡木外的树种生成森林蜜脾配方；橡木配方已在 newRecipes 中处理。
    treeRegistry.forEach((treeCategories) => {
        if (treeCategories.type == 'tree') {
            treeCategories.trees.forEach((tree) => {
                if (tree.trunk != 'minecraft:oak_log') {
                    registerEnigmaticaShaped(
                        `8x ${tree.trunk}`,
                        ['BCB', 'CAC', 'BCB'],
                        {
                            A: tree.sapling,
                            C: 'resourcefulbees:forest_honeycomb',
                            B: 'resourcefulbees:wax'
                        },
                        `${id_prefix}${tree.trunk.replace(':', '_')}_from_${tree.sapling.replace(':', '_')}`
                    );
                }
                if (tree.sapling != 'minecraft:oak_sapling') {
                    registerEnigmaticaShaped(
                        `4x ${tree.sapling}`,
                        [' C ', 'BAB', ' C '],
                        {
                            A: tree.sapling,
                            C: 'resourcefulbees:forest_honeycomb',
                            B: 'resourcefulbees:wax'
                        },
                        `${id_prefix}${tree.sapling.replace(':', '_')}_from_${tree.sapling.replace(':', '_')}`
                    );
                }
                if (tree.leaf != 'minecraft:oak_leaves') {
                    registerEnigmaticaShaped(
                        `16x ${tree.leaf}`,
                        ['   ', 'BAC', '   '],
                        {
                            A: tree.sapling,
                            C: 'resourcefulbees:forest_honeycomb',
                            B: 'resourcefulbees:wax'
                        },
                        `${id_prefix}${tree.leaf.replace(':', '_')}_from_${tree.sapling.replace(':', '_')}`
                    );
                }
            });
        }
    });

    colors.forEach((color) => {
        // 根据 dyeSources 中相应的花朵，为每种染料生成 RGBee 蜜脾配方。
        let flowers = dyeSources.filter((dyeSource) => dyeSource.primary == `minecraft:${color}_dye`);
        let ingredients = flowers.map((flower) => flower.input);
        registerEnigmaticaShaped(
            `8x minecraft:${color}_dye`,
            ['BCB', 'CAC', 'BCB'],
            {
                A: ingredients,
                C: 'resourcefulbees:rgbee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            `${id_prefix}${color}_dye_from_rgbee_honeycomb`
        );

        if (color != 'white') {
            // 生成羊毛砖染色配方。
            registerEnigmaticaShaped(
                `8x thermal:${color}_rockwool`,
                ['AAA', 'ABA', 'AAA'],
                {
                    A: 'thermal:white_rockwool',
                    B: `#forge:dyes/${color}`
                },
                `${id_prefix}${color}_rockwool_batch`
            );

            // 生成陶瓷染色配方。
            registerEnigmaticaShaped(
                `8x atum:ceramic_${color}`,
                ['AAA', 'ABA', 'AAA'],
                {
                    A: 'atum:ceramic_white',
                    B: `#forge:dyes/${color}`
                },
                `${id_prefix}${color}_ceramic_batch`
            );
        }
    });
});

if (['byg'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const id_prefix = 'enigmatica:base/environmental/shaped/';
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: Item.of('environmental:mud_ball', 16),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:dirt',
                    B: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 }
                },
                id: 'environmental:building/mud_balls_from_dirt'
            },
            {
                output: Item.of('8x environmental:ice_chain'),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:chain',
                    B: '#forge:ices/packed'
                },
                id: 'environmental:building/ice_chain'
            },
            {
                output: Item.of('4x environmental:willow_chest'),
                pattern: ['AAA', 'A A', 'AAA'],
                key: {
                    A: ['byg:willow_log', 'environmental:willow_log', 'projectvibrantjourneys:willow_log']
                },
                id: `${id_prefix}willow_chest_from_logs`
            },
            {
                output: Item.of('4x environmental:cherry_chest'),
                pattern: ['AAA', 'A A', 'AAA'],
                key: {
                    A: ['byg:cherry_log', 'environmental:cherry_log', 'projectvibrantjourneys:sakura_log']
                },
                id: `${id_prefix}cherry_chest_from_logs`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: Item.of('farmersdelight:pie_crust', 3),
            pattern: ['A A', 'AAA'],
            key: {
                A: 'farmersdelight:wheat_dough'
            },
            id: 'farmersdelight:pie_crust'
        },
        {
            output: 'farmersdelight:chocolate_pie',
            pattern: ['DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                D: 'create:bar_of_chocolate'
            },
            id: 'farmersdelight:chocolate_pie'
        },
        {
            output: 'farmersdelight:apple_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'minecraft:apple'
            },
            id: 'farmersdelight:apple_pie'
        },
        {
            output: 'farmersdelight:wheat_dough',
            pattern: ['A', 'B'],
            key: {
                A: '#forge:dusts/flour',
                B: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 }
            },
            id: 'create:crafting/appliances/dough'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: Item.of('fluxnetworks:flux_core', 8),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'fluxnetworks:flux_dust',
                B: '#forge:obsidian',
                C: 'powah:ender_core'
            },
            id: 'fluxnetworks:fluxcore'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: Item.of('immersiveengineering:sawdust', 6),
            pattern: ['AAA', 'AAA'],
            key: {
                A: '#c:dusts/wood'
            },
            id: 'immersiveengineering:crafting/sawdust'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

// 中文：迁入 E6E 工业先锋基础工作台配方，按目标物品逐条筛选。
if (e6ePortedRecipeModLoaded('industrialforegoing')) {
    ServerEvents.recipes((event) => {
        const recipes = [
            {
                output: 'industrialforegoing:animal_feeder',
                pattern: ['PAP', 'CMC', 'DGD'],
                key: {
                    P: '#c:plastics',
                    A: 'minecraft:golden_apple',
                    C: 'minecraft:golden_carrot',
                    G: '#c:gears/iron_invar',
                    D: '#c:dyes/purple',
                    M: '#industrialforegoing:machine_frame/pity'
                },
                id: 'industrialforegoing:animal_feeder'
            },
            {
                output: 'industrialforegoing:biofuel_generator',
                pattern: ['PDP', 'SMS', 'ASA'],
                key: {
                    P: '#c:plastics',
                    D: 'minecraft:furnace',
                    S: 'minecraft:piston',
                    A: '#c:gears/gold_bronze',
                    M: '#industrialforegoing:machine_frame/pity'
                },
                id: 'industrialforegoing:biofuel_generator'
            },
            {
                output: '6x industrialforegoing:conveyor',
                pattern: ['ppp', 'iri', 'ppp'],
                key: {
                    p: '#c:plastics',
                    i: '#c:ingots/iron_aluminum',
                    r: 'minecraft:redstone'
                },
                id: 'industrialforegoing:conveyor'
            },
            {
                output: 'industrialforegoing:conveyor_blinking_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: 'minecraft:chorus_fruit',
                    D: 'minecraft:piston',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_blinking_upgrade'
            },
            {
                output: 'industrialforegoing:conveyor_bouncing_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: 'minecraft:slime_block',
                    D: 'minecraft:piston',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_bouncing_upgrade'
            },
            {
                output: 'industrialforegoing:conveyor_detection_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: 'minecraft:stone_pressure_plate',
                    D: 'minecraft:comparator',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_detection_upgrade'
            },
            {
                output: 'industrialforegoing:conveyor_dropping_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: 'minecraft:iron_bars',
                    D: 'minecraft:dropper',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_dropping_upgrade'
            },
            {
                output: 'industrialforegoing:conveyor_extraction_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: '#c:plastics',
                    D: 'minecraft:dispenser',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_extraction_upgrade'
            },
            {
                output: 'industrialforegoing:conveyor_insertion_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: '#c:plastics',
                    D: 'minecraft:hopper',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_insertion_upgrade'
            },
            {
                output: 'industrialforegoing:conveyor_splitting_upgrade',
                pattern: ['IPI', 'IDI', 'ICI'],
                key: {
                    I: '#c:ingots/iron_aluminum',
                    P: 'industrialforegoing:conveyor',
                    D: 'minecraft:hopper',
                    C: 'industrialforegoing:conveyor'
                },
                id: 'industrialforegoing:conveyor_splitting_upgrade'
            },
            {
                output: 'industrialforegoing:dye_mixer',
                pattern: ['PDP', 'DMD', 'PRP'],
                key: {
                    P: '#c:plastics',
                    D: '#c:dyes',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: '#c:gears/gold_copper'
                },
                id: 'industrialforegoing:dye_mixer'
            },
            {
                output: 'industrialforegoing:meat_feeder',
                pattern: ['pip', 'gig', ' i '],
                key: {
                    p: 'industrialforegoing:plastic',
                    i: '#c:ingots/iron_aluminum',
                    g: 'minecraft:glass_bottle'
                },
                id: 'industrialforegoing:meat_feeder'
            },
            {
                output: 'industrialforegoing:resourceful_furnace',
                pattern: ['PBP', 'LML', 'PRP'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:bucket',
                    L: 'minecraft:furnace',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: '#c:gears/gold_copper'
                },
                id: 'industrialforegoing:resourceful_furnace'
            },
            {
                output: '3x industrialforegoing:tinydryrubber',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:vine',
                    B: 'minecraft:water_bucket'
                },
                id: 'industrialforegoing:rubber_from_vine'
            },
            {
                output: '3x industrialforegoing:tinydryrubber',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:dandelion',
                    B: 'minecraft:water_bucket'
                },
                id: 'industrialforegoing:rubber_from_dandelion'
            },
            {
                output: 'industrialforegoing:common_black_hole_unit',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: 'industrialforegoing:plastic',
                    B: 'minecraft:ender_eye',
                    C: 'minecraft:ender_pearl',
                    D: '#c:chests/wooden',
                    E: 'create:brass_casing'
                },
                id: 'industrialforegoing:common_black_hole_unit'
            }
        ];

        const resolveBaseIfIngredient = (ingredient) => {
            if (Array.isArray(ingredient)) {
                return ingredient.map(resolveBaseIfIngredient).filter(e6eRecipeIngredientExists);
            }
            if (typeof ingredient === 'string' && ingredient.startsWith('#c:')) {
                const legacyTag = '#forge:' + ingredient.substring(3);
                if (e6eRecipeIngredientExists(ingredient)) return ingredient;
                if (e6eRecipeIngredientExists(legacyTag)) return legacyTag;
            }
            return ingredient;
        };

        recipes.forEach((recipe) => {
            const key = {};
            Object.keys(recipe.key).forEach((symbol) => {
                key[symbol] = resolveBaseIfIngredient(recipe.key[symbol]);
            });
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(key))) return;
            event.shaped(recipe.output, recipe.pattern, key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/kubejs/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'kubejs:amadron_survey_tools',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:reinforced_chest',
                C: 'mekanismtools:steel_paxel',
                D: 'mekanism:cardboard_box',
                E: 'minecraft:compass',
                F: 'immersiveengineering:survey_tools'
            },
            id: `${id_prefix}amadron_survey_tools`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: Item.of('minecraft:paper', 3),
            pattern: ['AAA'],
            key: {
                A: '#c:dusts/wood'
            },
            id: 'mekanism:paper'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const id_prefix = 'enigmatica:base/minecraft/shaped/';
        const recipes = [
            {
                output: 'minecraft:pumpkin_pie',
                pattern: ['CDC', 'BAB'],
                key: {
                    A: 'farmersdelight:pie_crust',
                    B: 'minecraft:sugar',
                    C: '#forge:eggs',
                    D: 'minecraft:pumpkin'
                },
                id: 'minecraft:pumpkin_pie'
            },
            {
                output: 'minecraft:beehive',
                pattern: ['AAA', 'BBB', 'AAA'],
                key: {
                    A: '#minecraft:planks',
                    B: '#resourcefulbees:resourceful_honeycomb'
                },
                id: 'minecraft:beehive'
            },
            {
                output: Item.of('minecraft:honeycomb_block'),
                pattern: ['AAA', 'AAA', 'AAA'],
                key: {
                    A: 'minecraft:honeycomb'
                },
                id: 'minecraft:honeycomb_block'
            },
            {
                output: Item.of('4x minecraft:stone_bricks'),
                pattern: ['AA', 'AA'],
                key: {
                    A: 'minecraft:stone'
                },
                id: 'minecraft:stone_bricks'
            },
            {
                output: Item.of('2x minecraft:stick'),
                pattern: ['A', 'A'],
                key: {
                    A: 'naturesaura:ancient_stick'
                },
                id: `${id_prefix}stick`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// E6E 本地数据配方：用专家模式金铜配方替换气动工艺默认的金配方。
// E6E 本地数据配方：用专家版金青铜配方替换 PneumaticCraft 默认的金锭配方。
if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
    ServerEvents.recipes((event) => {
        event.remove({ id: 'pneumaticcraft:medium_tank' });

        var goldBronzeTags = ['c:ingots/gold_bronze', 'forge:ingots/gold_bronze'];
        var goldBronzeTag = goldBronzeTags.find((tag) => e6eRecipeIngredientExists(`#${tag}`));
        if (!goldBronzeTag) return;
        if (!e6eRecipeIngredientExists('#pneumaticcraft:plastic_sheets')) return;
        if (!e6ePortedItemExists('pneumaticcraft:small_tank') || !e6ePortedItemExists('pneumaticcraft:pressure_tube'))
            return;
        if (!e6ePortedItemExists('pneumaticcraft:medium_tank')) return;

        event
            .custom({
                type: 'minecraft:crafting_shaped',
                category: 'misc',
                pattern: ['PSP', 'ITI', 'PSP'],
                key: {
                    P: { tag: 'pneumaticcraft:plastic_sheets' },
                    S: {
                        type: 'neoforge:components',
                        items: 'pneumaticcraft:small_tank',
                        strict: true,
                        components: {
                            'minecraft:attribute_modifiers': { modifiers: [] },
                            'minecraft:enchantments': { levels: {} },
                            'minecraft:lore': [],
                            'minecraft:max_stack_size': 64,
                            'minecraft:rarity': 'common',
                            'minecraft:repair_cost': 0
                        }
                    },
                    I: { tag: goldBronzeTag },
                    T: { item: 'pneumaticcraft:pressure_tube' }
                },
                result: { count: 1, id: 'pneumaticcraft:medium_tank' }
            })
            .id('pneumaticcraft:medium_tank');
    });
}

ServerEvents.recipes((event) => {
    const id_prefix = 'powah:base/shaped/';
    const recipes = [];

    powahTiers.forEach(function (tier) {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier,
            cable = 'powah:energy_cable_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let lower_tiers = lowerTiers(powahTiers, tier);

        recipes.push(
            {
                output: Item.of(`powah:energy_cell_${tier}`),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:energy_cell_${item}`))
                },
                id: `${id_prefix}energy_cell_${tier}`
            },
            {
                output: Item.of(`powah:battery_${tier}`),
                pattern: [' A ', 'BCB', ' B '],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:battery_${item}`))
                },
                id: `${id_prefix}battery_${tier}`
            },

            {
                output: Item.of(`powah:solar_panel_${tier}`),
                pattern: ['BCB', 'AAA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:solar_panel_${item}`))
                },
                id: `${id_prefix}solar_panel_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const recipes = [
            {
                output: Item.of('ppfluids:medium_fluid_extraction_module', 1),
                pattern: [' C ', 'ABA', ' A '],
                key: {
                    A: '#forge:nuggets/aluminum',
                    B: 'ppfluids:low_fluid_extraction_module',
                    C: '#forge:ingots/aluminum'
                },
                id: 'ppfluids:medium_fluid_extraction_module'
            },
            {
                output: Item.of('ppfluids:high_fluid_extraction_module', 1),
                pattern: [' C ', 'ABA', ' A '],
                key: {
                    A: '#forge:nuggets/bronze',
                    B: 'ppfluids:medium_fluid_extraction_module',
                    C: '#forge:ingots/bronze'
                },
                id: 'ppfluids:high_fluid_extraction_module'
            },
            {
                output: Item.of('ppfluids:medium_fluid_filter_module', 1),
                pattern: [' C ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/aluminum',
                    B: 'ppfluids:low_fluid_filter_module',
                    C: 'minecraft:iron_bars'
                },
                id: 'ppfluids:medium_fluid_filter_module'
            },
            {
                output: Item.of('ppfluids:high_fluid_filter_module', 1),
                pattern: [' C ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/bronze',
                    B: 'ppfluids:medium_fluid_filter_module',
                    C: 'minecraft:iron_bars'
                },
                id: 'ppfluids:high_fluid_filter_module'
            },
            {
                output: Item.of('ppfluids:medium_fluid_retrieval_module', 1),
                pattern: [' A ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/aluminum',
                    B: 'ppfluids:low_fluid_retrieval_module',
                    C: '#forge:ingots/aluminum'
                },
                id: 'ppfluids:medium_fluid_retrieval_module'
            },
            {
                output: Item.of('ppfluids:high_fluid_retrieval_module', 1),
                pattern: [' A ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/bronze',
                    B: 'ppfluids:medium_fluid_retrieval_module',
                    C: '#forge:ingots/bronze'
                },
                id: 'ppfluids:high_fluid_retrieval_module'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// 中文：迁入 E6E 基础 Pretty Pipes 工作台配方；Thermal 材料映射或逐条跳过。
if (e6ePortedRecipeModLoaded('prettypipes')) {
    ServerEvents.recipes((event) => {
        const recipes = [
            {
                output: Item.of('prettypipes:wrench', 1),
                pattern: [' A ', 'AB ', '  B'],
                key: {
                    A: '#forge:nuggets/iron',
                    B: 'prettypipes:pipe'
                },
                id: 'prettypipes:wrench'
            },
            {
                output: Item.of('prettypipes:blank_module', 3),
                pattern: [' A ', 'BBB', 'CCC'],
                key: {
                    A: '#forge:dusts/redstone',
                    B: '#enigmatica:crafting_slabs',
                    C: '#forge:nuggets/copper'
                },
                id: 'prettypipes:blank_module'
            },
            {
                output: Item.of('prettypipes:medium_extraction_module', 1),
                pattern: [' C ', 'ABA', ' A '],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_extraction_module',
                    C: '#forge:ingots/invar'
                },
                id: 'prettypipes:medium_extraction_module'
            },
            {
                output: Item.of('prettypipes:high_extraction_module', 1),
                pattern: [' C ', 'ABA', ' A '],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_extraction_module',
                    C: '#forge:ingots/electrum'
                },
                id: 'prettypipes:high_extraction_module'
            },
            {
                output: Item.of('prettypipes:medium_filter_module', 1),
                pattern: [' C ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_filter_module',
                    C: 'minecraft:iron_bars'
                },
                id: 'prettypipes:medium_filter_module'
            },
            {
                output: Item.of('prettypipes:high_filter_module', 1),
                pattern: [' C ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_filter_module',
                    C: 'minecraft:iron_bars'
                },
                id: 'prettypipes:high_filter_module'
            },
            {
                output: Item.of('prettypipes:medium_speed_module', 1),
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_speed_module',
                    C: 'minecraft:sugar'
                },
                id: 'prettypipes:medium_speed_module'
            },
            {
                output: Item.of('prettypipes:high_speed_module', 1),
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_speed_module',
                    C: 'minecraft:sugar'
                },
                id: 'prettypipes:high_speed_module'
            },
            {
                output: Item.of('prettypipes:medium_low_priority_module', 1),
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_low_priority_module',
                    C: '#forge:nuggets/lead'
                },
                id: 'prettypipes:medium_low_priority_module'
            },
            {
                output: Item.of('prettypipes:high_low_priority_module', 1),
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_low_priority_module',
                    C: '#forge:nuggets/lead'
                },
                id: 'prettypipes:high_low_priority_module'
            },
            {
                output: Item.of('prettypipes:medium_high_priority_module', 1),
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_high_priority_module',
                    C: '#forge:nuggets/silver'
                },
                id: 'prettypipes:medium_high_priority_module'
            },
            {
                output: Item.of('prettypipes:high_high_priority_module', 1),
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_high_priority_module',
                    C: '#forge:nuggets/silver'
                },
                id: 'prettypipes:high_high_priority_module'
            },
            {
                output: Item.of('prettypipes:medium_retrieval_module', 1),
                pattern: [' A ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_retrieval_module',
                    C: '#forge:ingots/invar'
                },
                id: 'prettypipes:medium_retrieval_module'
            },
            {
                output: Item.of('prettypipes:high_retrieval_module', 1),
                pattern: [' A ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_retrieval_module',
                    C: '#forge:ingots/electrum'
                },
                id: 'prettypipes:high_retrieval_module'
            },
            {
                output: Item.of('prettypipes:medium_crafting_module', 1),
                pattern: [' A ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/invar',
                    B: 'prettypipes:low_crafting_module',
                    C: '#forge:ingots/invar'
                },
                id: 'prettypipes:medium_crafting_module'
            },
            {
                output: Item.of('prettypipes:high_crafting_module', 1),
                pattern: [' A ', 'ABA', ' C '],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: 'prettypipes:medium_crafting_module',
                    C: '#forge:ingots/electrum'
                },
                id: 'prettypipes:high_crafting_module'
            }
        ];

        const resolveBasePrettyPipesIngredient = (ingredient) => {
            if (Array.isArray(ingredient)) {
                return ingredient.map(resolveBasePrettyPipesIngredient).filter(e6eRecipeIngredientExists);
            }
            if (typeof ingredient !== 'string') return ingredient;

            const replacements = {
                'thermal:machine_frame': 'create:brass_casing',
                'thermal:rf_coil': 'e6e_mbd2:energy_input',
                'thermal:redstone_servo': 'e6e_mbd2:item_input',
                'thermal:charge_bench': 'e6e_mbd2:energy_output',
                'thermal:cured_rubber': 'industrialforegoing:dryrubber',
                '#thermal:glass/hardened': 'mekanism:structural_glass'
            };
            if (replacements[ingredient]) return replacements[ingredient];

            if (ingredient.startsWith('#forge:')) {
                const commonTag = '#c:' + ingredient.substring(7);
                if (e6eRecipeIngredientExists(commonTag)) return commonTag;
            }
            return ingredient;
        };

        recipes.forEach((recipe) => {
            const key = {};
            Object.keys(recipe.key).forEach((symbol) => {
                key[symbol] = resolveBasePrettyPipesIngredient(recipe.key[symbol]);
            });
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(key))) return;
            event.shaped(recipe.output, recipe.pattern, key).id(recipe.id);
        });
    });
}

if (['atum', 'byg'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        const recipes = [
            {
                output: Item.of('4x quark:turf'),
                pattern: ['AA', 'AA'],
                key: {
                    A: [
                        'minecraft:grass',
                        'atum:oasis_grass',
                        'byg:short_grass',
                        'byg:weed_grass',
                        'byg:wilted_grass',
                        'projectvibrantjourneys:beach_grass',
                        'projectvibrantjourneys:prairie_grass',
                        'projectvibrantjourneys:short_grass'
                    ]
                },
                id: 'quark:building/crafting/turf'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// 蜜蜂配方使用 Productive Bees 的原料和蜂巢物品。
if (e6ePortedRecipeModLoaded('productivebees')) {
    ServerEvents.recipes((event) => {
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */
        const id_prefix = 'enigmatica:base/resourcefulbees/';
        const newRecipes = [
            {
                output: 'resourcefulbees:t4_hive_upgrade',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#resourcefulbees:resourceful_honeycomb_block',
                    B: ['minecraft:honey_block', '#resourcefulbees:resourceful_honey_block'],
                    C: 'resourcefulbees:t3_hive_upgrade'
                },
                id: 'resourcefulbees:t4_hive_upgrade'
            },
            {
                output: 'resourcefulbees:t1_apiary',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#resourcefulbees:resourceful_honeycomb_block',
                    B: ['minecraft:honey_block', '#resourcefulbees:resourceful_honey_block'],
                    C: 'resourcefulbees:t4_hive_upgrade'
                },
                id: 'resourcefulbees:t1_apiary'
            },
            {
                // Native Bee Nest Recipes - gated behind resourceful combs（原生蜂巢配方，需对应资源蜜脾）
                output: 'resourcefulbees:bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:oak_planks',
                    B: 'resourcefulbees:forest_honeycomb'
                },
                id: `${id_prefix}bee_next`
            },
            {
                output: 'resourcefulbees:jungle_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:jungle_planks',
                    B: 'resourcefulbees:forest_honeycomb'
                },
                id: `${id_prefix}jungle_bee_next`
            },
            {
                output: 'resourcefulbees:nether_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: ['minecraft:crimson_planks', 'minecraft:warped_planks'],
                    B: 'resourcefulbees:glowstone_honeycomb',
                    C: 'resourcefulbees:pigman_honeycomb'
                },
                id: `${id_prefix}nether_bee_next`
            },
            {
                output: 'resourcefulbees:prismarine_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:prismarine',
                    B: 'resourcefulbees:water_honeycomb',
                    C: 'resourcefulbees:rocky_honeycomb'
                },
                id: `${id_prefix}prismarine_bee_next`
            },
            {
                output: 'resourcefulbees:purpur_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:purpur_block',
                    B: 'resourcefulbees:ender_honeycomb',
                    C: 'resourcefulbees:obsidian_honeycomb'
                },
                id: `${id_prefix}purpur_bee_next`
            },
            {
                output: 'resourcefulbees:birch_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:birch_planks',
                    B: 'resourcefulbees:forest_honeycomb'
                },
                id: `${id_prefix}birch_bee_next`
            },
            {
                output: 'resourcefulbees:wither_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'architects_palette:withered_bone_block',
                    B: 'resourcefulbees:wither_honeycomb'
                },
                id: `${id_prefix}wither_bee_next`
            },
            {
                output: 'resourcefulbees:brown_mushroom_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:brown_mushroom_block',
                    B: 'resourcefulbees:soup_honeycomb'
                },
                id: `${id_prefix}brown_mushroom_bee_nest`
            },
            {
                output: 'resourcefulbees:crimson_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:crimson_stem',
                    B: 'resourcefulbees:glowstone_honeycomb',
                    C: 'resourcefulbees:pigman_honeycomb'
                },
                id: `${id_prefix}crimson_bee_nest`
            },
            {
                output: 'resourcefulbees:crimson_nylium_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:crimson_nylium',
                    B: 'resourcefulbees:glowstone_honeycomb',
                    C: 'resourcefulbees:pigman_honeycomb'
                },
                id: `${id_prefix}crimson_nylium_bee_nest`
            },
            {
                output: 'resourcefulbees:dark_oak_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:dark_oak_planks',
                    B: 'resourcefulbees:forest_honeycomb'
                },
                id: `${id_prefix}dark_oak_bee_nest`
            },
            {
                output: 'resourcefulbees:red_mushroom_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:red_mushroom_block',
                    B: 'resourcefulbees:soup_honeycomb'
                },
                id: `${id_prefix}red_mushroom_bee_nest`
            },
            {
                output: 'resourcefulbees:spruce_bee_nest',
                pattern: ['AAA', 'BBB', 'ABA'],
                key: {
                    A: 'minecraft:spruce_planks',
                    B: 'resourcefulbees:forest_honeycomb'
                },
                id: `${id_prefix}spruce_bee_nest`
            },
            {
                output: 'resourcefulbees:warped_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:warped_stem',
                    B: 'resourcefulbees:glowstone_honeycomb',
                    C: 'resourcefulbees:pigman_honeycomb'
                },
                id: `${id_prefix}warped_bee_nest`
            },
            {
                output: 'resourcefulbees:warped_nylium_bee_nest',
                pattern: ['AAA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:warped_nylium',
                    B: 'resourcefulbees:glowstone_honeycomb',
                    C: 'resourcefulbees:pigman_honeycomb'
                },
                id: `${id_prefix}warped_nylium_bee_nest`
            },
            {
                output: 'atum:godforge',
                pattern: ['ACA', 'CBC', 'ACA'],
                key: {
                    A: 'resourcefulbees:dusty_mummbee_honeycomb_block',
                    B: '#forge:furnace',
                    C: '#forge:ingots/nebu'
                },
                id: `${id_prefix}godforge`
            },
            {
                output: 'atum:godforged_block',
                pattern: ['BAB', 'CAC', 'BAB'],
                key: {
                    A: 'resourcefulbees:dusty_mummbee_honeycomb',
                    B: '#forge:ingots/nebu',
                    C: '#atum:godshards'
                },
                id: `${id_prefix}godforged_block`
            }
        ];

        function mapResourcefulBeesValue(value) {
            const amount = value.match(/^(\d+\s*x\s*)/i);
            const prefix = amount ? amount[1] : '';
            const raw = amount ? value.substring(amount[0].length) : value;
            const isTag = raw.startsWith('#');
            const ingredient = isTag ? raw.substring(1) : raw;
            const componentIndex = ingredient.indexOf('[');
            const itemId = componentIndex >= 0 ? ingredient.substring(0, componentIndex) : ingredient;
            const componentSuffix = componentIndex >= 0 ? ingredient.substring(componentIndex) : '';

            if (itemId.startsWith('resourcefulbees:')) {
                let mapped = null;
                if (isTag && itemId === 'resourcefulbees:resourceful_honeycomb') {
                    mapped = 'productivebees:configurable_honeycomb';
                } else if (isTag && itemId === 'resourcefulbees:resourceful_honeycomb_block') {
                    mapped = 'productivebees:configurable_comb';
                } else if (isTag && itemId === 'resourcefulbees:resourceful_honey_block') {
                    mapped = 'minecraft:honey_block';
                } else if (!isTag && itemId === 'resourcefulbees:wax') {
                    mapped = 'productivebees:wax';
                } else if (!isTag && itemId === 'resourcefulbees:wax_block') {
                    mapped = 'productivebees:wax_block';
                } else if (!isTag && itemId === 'resourcefulbees:bee_nest') {
                    mapped = 'productivebees:oak_wood_nest';
                } else if (!isTag && itemId === 'resourcefulbees:acacia_bee_nest') {
                    mapped = 'productivebees:acacia_wood_nest';
                } else if (
                    !isTag &&
                    (itemId === 'resourcefulbees:grass_bee_nest' || itemId === 'resourcefulbees:birch_bee_nest')
                ) {
                    mapped = 'productivebees:birch_wood_nest';
                } else if (!isTag && itemId === 'resourcefulbees:jungle_bee_nest') {
                    mapped = 'productivebees:jungle_wood_nest';
                } else if (!isTag && itemId === 'resourcefulbees:nether_bee_nest') {
                    mapped = 'productivebees:nether_brick_nest';
                } else if (!isTag && itemId === 'resourcefulbees:prismarine_bee_nest') {
                    mapped = 'productivebees:stone_nest';
                } else if (!isTag && itemId === 'resourcefulbees:purpur_bee_nest') {
                    mapped = 'productivebees:end_stone_nest';
                } else if (!isTag && itemId === 'resourcefulbees:wither_bee_nest') {
                    mapped = 'productivebees:soul_sand_nest';
                } else if (
                    !isTag &&
                    (itemId === 'resourcefulbees:crimson_bee_nest' ||
                        itemId === 'resourcefulbees:crimson_nylium_bee_nest')
                ) {
                    mapped = 'productivebees:crimson_bee_nest';
                } else if (!isTag && itemId === 'resourcefulbees:dark_oak_bee_nest') {
                    mapped = 'productivebees:dark_oak_wood_nest';
                } else if (
                    !isTag &&
                    (itemId === 'resourcefulbees:warped_bee_nest' ||
                        itemId === 'resourcefulbees:warped_nylium_bee_nest')
                ) {
                    mapped = 'productivebees:warped_bee_nest';
                } else if (!isTag && itemId.endsWith('_honeycomb_block')) {
                    mapped = 'productivebees:configurable_comb';
                } else if (!isTag && itemId.endsWith('_honeycomb')) {
                    mapped = 'productivebees:configurable_honeycomb';
                }

                return mapped ? prefix + mapped + componentSuffix : null;
            }

            if (isTag && itemId.startsWith('forge:')) {
                const commonTag = '#c:' + itemId.substring('forge:'.length);
                if (e6eRecipeIngredientExists(commonTag)) return prefix + commonTag;
            }
            return prefix + raw;
        }

        function resolveResourcefulBeesIngredient(value) {
            if (Array.isArray(value)) {
                const alternatives = [];
                value.forEach((entry) => {
                    const resolved = resolveResourcefulBeesIngredient(entry);
                    if (Array.isArray(resolved)) {
                        resolved.forEach((nested) => alternatives.push(nested));
                    } else if (resolved !== null) {
                        alternatives.push(resolved);
                    }
                });
                return alternatives.length > 0 ? alternatives : null;
            }
            if (typeof value !== 'string') return null;

            const resolved = mapResourcefulBeesValue(value);
            return resolved && e6eRecipeIngredientExists(resolved) ? resolved : null;
        }

        function resolveResourcefulBeesOutput(value) {
            if (typeof value === 'string') {
                const resolved = mapResourcefulBeesValue(value);
                return resolved && e6eRecipeOutputExists(resolved) ? resolved : null;
            }
            if (value && typeof value.id === 'string') {
                const mapped = mapResourcefulBeesValue(value.id);
                if (!mapped) return null;
                const result = Object.assign({}, value, { id: mapped });
                return e6eRecipeOutputExists(result) ? result : null;
            }
            return e6eRecipeOutputExists(value) ? value : null;
        }

        newRecipes.forEach((recipe) => {
            var output = resolveResourcefulBeesOutput(recipe.output);
            if (!output) return;

            var key = {};
            var validIngredients = true;
            Object.keys(recipe.key).forEach((symbol) => {
                var ingredient = resolveResourcefulBeesIngredient(recipe.key[symbol]);
                if (!ingredient) {
                    validIngredients = false;
                    return;
                }
                key[symbol] = ingredient;
            });
            if (!validIngredients) return;

            event.shaped(Item.of(output), recipe.pattern, key).noMirror().id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'rftoolscontrol:workbench',
            pattern: ['C', 'F', 'X'],
            key: {
                C: '#forge:workbenches',
                X: '#forge:chests/wooden',
                F: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolscontrol:workbench'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/storagedrawers/';
    const recipes = [
        {
            output: 'storagedrawers:shroud_key',
            pattern: ['AB ', ' B ', ' C '],
            key: {
                A: '#forge:nuggets/gold',
                B: '#forge:ingots/gold',
                C: '#minecraft:signs'
            },
            id: `${id_prefix}shroud_key`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'supplementaries:candle_holder',
            pattern: ['A', 'B'],
            key: {
                A: '#quark:candles',
                B: '#forge:nuggets/pewter'
            },
            id: 'supplementaries:candle_holder'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'upgrade_aquatic:mulberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'upgrade_aquatic:mulberry'
            },
            id: 'upgrade_aquatic:mulberry_pie'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/valhelsia_structures/shaped';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'valhelsia_structures:dungeon_door',
            pattern: ['ABA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:iron_bars',
                B: 'minecraft:spruce_door',
                C: 'minecraft:iron_door'
            },
            id: `${id_prefix}dungeon_door`
        },
        {
            output: Item.of('valhelsia_structures:oak_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:oak_log'
            },
            id: `${id_prefix}oak_post`
        },
        {
            output: Item.of('valhelsia_structures:spruce_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:spruce_log'
            },
            id: `${id_prefix}spruce_post`
        },
        {
            output: Item.of('valhelsia_structures:birch_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:birch_log'
            },
            id: `${id_prefix}birch_post`
        },
        {
            output: Item.of('valhelsia_structures:jungle_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:jungle_log'
            },
            id: `${id_prefix}jungle_post`
        },
        {
            output: Item.of('valhelsia_structures:dark_oak_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:dark_oak_log'
            },
            id: `${id_prefix}dark_oak_post`
        },
        {
            output: Item.of('valhelsia_structures:acacia_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:acacia_log'
            },
            id: `${id_prefix}acacia_post`
        },
        {
            output: Item.of('valhelsia_structures:warped_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:warped_stem'
            },
            id: `${id_prefix}warped_post`
        },
        {
            output: Item.of('valhelsia_structures:crimson_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:crimson_stem'
            },
            id: `${id_prefix}crimson_post`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

// ===== 专家模式有序合成（按模组顺序） =====
// 将源 normal 目录的 Quark 蜡烛配方映射到 Minecraft 1.21.1 原版白蜡烛。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', true, [
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless'
    ]);
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

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'architects_palette:sunstone',

        'ars_nouveau:dull_trinket',
        'ars_nouveau:moonfall_2',
        'ars_nouveau:mundane_belt',
        'ars_nouveau:ring_of_potential',
        'ars_nouveau:stone_2',
        'ars_nouveau:sunrise_2',

        'astralsorcery:altar/black_marble_raw',
        'astralsorcery:shaped/black_marble/black_marble_raw',
        'astralsorcery:shaped/wand',

        'atum:blast_furnace',
        'atum:book',
        'atum:ore_brewing_stand',

        'betterendforge:leather_to_stripes',
        'betterendforge:terminite_ingot',

        'bloodmagic:arc/weakbloodshard_tau',
        /bloodmagic:alchemytable\/melee_damage_anointment/,

        'botania:mana_infusion/mana_diamond_block',
        'byg:compat/create/black_sand_from_crushing',

        'computercraft:computer_advanced_upgrade',
        'computercraft:turtle_advanced_upgrade',
        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced',
        'computercraft:pocket_computer_advanced_upgrade',

        /compactmachines:machine_/,
        /create:pressing\/\w*_ingot/,

        /dankstorage:\w_to_\w/,

        'darkutils:crafting/rune_damage_player',
        'darkutils:crafting/blank_plate',
        /darkutils:crafting\/export_plate/,

        'eidolon_repraised:crucible',
        'eidolon_repraised:wooden_brewing_stand',
        'eidolon_repraised:worktable',

        'farmersdelight:book_from_canvas',

        'fluxnetworks:fluxcontroller',
        'fluxnetworks:fluxplug',
        'fluxnetworks:fluxpoint',

        'immersiveengineering:crafting/component_iron',
        'immersiveengineering:crafting/component_steel',
        'immersiveengineering:crafting/concrete',
        'immersiveengineering:crafting/concrete2',
        'immersiveengineering:mixer/concrete',
        /immersiveengineering:crafting\/plate_/,
        'immersiveengineering:crafting/cokebrick',
        'immersiveengineering:crafting/blastbrick',
        'immersiveengineering:crafting/alloybrick',
        'immersiveengineering:generator_fuel/biodiesel',
        'immersiveengineering:generator_fuel/creosote',

        'industrialforegoing:mob_slaughter_factory',
        /industrialforegoing:mycelial/,
        'industrialforegoing:dissolution_chamber/mycelial_reactor',

        'integrateddynamics:crafting/cable',
        'integrateddynamics:crafting/cable_rotated',
        'integrateddynamics:crafting/energy_battery',
        'integrateddynamics:crafting/mechanical_drying_basin',
        'integrateddynamics:crafting/mechanical_squeezer',
        'integrateddynamics:crafting/drying_basin',
        'integrateddynamics:crafting/squeezer',
        'integrateddynamics:crafting/coal_generator',
        'integrateddynamics:crafting/logic_director',
        'integrateddynamics:crafting/variable_transformer_output',
        'integrateddynamics:crafting/variable_transformer_input',

        'materialis:smeltery/alloys/molten_pink_slime',

        'mekanism:metallurgic_infusing/alloy/reinforced',
        'mekanism:metallurgic_infusing/alloy/atomic',
        'mekanism:enriching/conversion/basalt_to_polished_basalt',
        'mekanism:processing/refined_glowstone/ingot_to_dust',
        'mekanism:processing/refined_obsidian/dust/from_ingot',
        'mekanism:osmium_compressor',
        /mekanism:factory/,
        'mekanism:robit',
        /mekanism:mekasuit/,
        'mekanism:upgrade/filter',

        'mekanismgenerators:separator/heavy_water',
        'mekanismgenerators:activating/tritium',

        'minecraft:book',
        'minecraft:leather_to_stripes',
        'minecraft:stick',
        'minecraft:golden_carrot',
        'minecraft:glistering_melon_slice',
        'minecraft:golden_apple',
        'minecraft:lodestone',

        'mininggadgets:upgrade_empty',

        'modularrouters:energy_upgrade',
        'modularrouters:sender_module_1_alt',

        /naturesaura:animal_spawner\/sheep_/,

        'pedestals:ingot_gold_from_upgrades',
        'pedestals:upgrades/breaker2',
        'pedestals:upgrades/crafter1mk2',
        'pedestals:upgrades/recycler',
        'pedestals:upgrades/rfexpgen',
        'pedestals:upgrades/rffuelgen',

        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:speed_upgrade',
        'pneumaticcraft:reinforced_stone',

        'powah:crafting/dielectric_paste_2',
        'powah:energizing/blazing_crystal_2',
        'powah:crafting/capacitor_basic',
        'powah:crafting/capacitor_basic_tiny',
        'powah:crafting/thermoelectric_plate',
        /powah:crafting\/cable_/,

        'quark:building/crafting/candles/candle_basic',
        'quark:building/crafting/red_nether_bricks_util',
        'quark:tools/crafting/runes/rainbow_rune',

        'refinedstorage:quartz_enriched_iron',
        'refinedstorage:1k_storage_part',
        'refinedstorage:4k_storage_part',
        'refinedstorage:64k_fluid_storage_part',
        'refinedstorage:256k_fluid_storage_part',

        'rftoolscontrol:cpu_core_500',
        'rftoolscontrol:cpu_core_1000',
        'rftoolscontrol:cpu_core_2000',

        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:advanced_feeding_upgrade',
        'sophisticatedbackpacks:auto_smelting_upgrade',
        'sophisticatedbackpacks:pump_upgrade',
        'sophisticatedbackpacks:advanced_pump_upgrade',
        'sophisticatedbackpacks:xp_pump_upgrade',
        'sophisticatedbackpacks:advanced_compacting_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:refill_upgrade',

        'tconstruct:smeltery/scorched/scorched_brick',
        'tconstruct:smeltery/scorched/scorched_brick_kiln',
        'tconstruct:smeltery/seared/melter',
        'tconstruct:smeltery/seared/seared_brick',
        'tconstruct:smeltery/seared/seared_brick_kiln',
        'tconstruct:tables/book_substitute',
        'tconstruct:smeltery/melting/metal/netherite/lodestone',
        'tconstruct:compat/refined_obsidian_ingot',
        'tconstruct:smeltery/alloys/molten_refined_obsidian',
        'tconstruct:compat/refined_glowstone_ingot',
        'tconstruct:smeltery/melting/metal/gold/produce',

        'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron',

        'tomeofblood:glyph_sentientharm',

        'waystones:warp_dust',

        /create:crafting\/materials\/andesite_alloy/,
        /emendatusenigmatica:alloy_dust/
    ];

    const outputRemovals = [
        'tiab:timeinabottle',
        'minecraft:nautilus_shell',
        'bloodmagic:intermediatecuttingfluid',
        'engineersdecor:factory_placer'
    ];

    const patchouli_safe_removals = [
        { output: 'ars_nouveau:mycelial_sourcelink', id: 'ars_nouveau:mycelial_sourcelink' },
        { output: 'ars_nouveau:vitalic_sourcelink', id: 'ars_nouveau:vitalic_sourcelink' },
        { output: 'ars_nouveau:alchemical_sourcelink', id: 'ars_nouveau:alchemical_sourcelink' },
        { output: 'naturesaura:calling_spirit', id: 'naturesaura:calling_spirit' },
        { output: 'naturesaura:animal_spawner', id: 'naturesaura:animal_spawner' },
        { output: 'naturesaura:gold_fiber', id: 'naturesaura:gold_fiber' },
        { output: 'naturesaura:gold_brick', id: 'naturesaura:gold_brick' },
        { output: 'naturesaura:generator_limit_remover', id: 'naturesaura:generator_limit_remover' },
        { output: 'naturesaura:shockwave_creator', id: 'naturesaura:shockwave_creator' },
        { output: 'naturesaura:death_ring', id: 'naturesaura:death_ring' },
        { output: 'naturesaura:ender_crate', id: 'naturesaura:ender_crate' },
        { output: 'naturesaura:ender_access', id: 'naturesaura:ender_access' },
        { output: 'naturesaura:gold_nether_brick', id: 'naturesaura:gold_nether_brick' },

        { output: 'pneumaticcraft:air_compressor', id: 'pneumaticcraft:air_compressor' },
        { output: 'pneumaticcraft:advanced_air_compressor', id: 'pneumaticcraft:advanced_air_compressor' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x1' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x4' },
        { output: 'pneumaticcraft:flux_compressor', id: 'pneumaticcraft:flux_compressor' },
        { output: 'pneumaticcraft:printed_circuit_board', id: 'pneumaticcraft:printed_circuit_board' },
        { output: 'pneumaticcraft:assembly_drill', id: 'pneumaticcraft:assembly_drill' },
        { output: 'pneumaticcraft:assembly_laser', id: 'pneumaticcraft:assembly_laser' },
        { output: 'pneumaticcraft:assembly_io_unit_import', id: 'pneumaticcraft:assembly_io_unit_import' },
        { output: 'pneumaticcraft:assembly_io_unit_export', id: 'pneumaticcraft:assembly_io_unit_export' },
        { output: 'pneumaticcraft:assembly_controller', id: 'pneumaticcraft:assembly_controller' },
        { output: 'pneumaticcraft:assembly_platform', id: 'pneumaticcraft:assembly_platform' },
        { output: 'pneumaticcraft:aerial_interface', id: 'pneumaticcraft:aerial_interface' },
        { output: 'pneumaticcraft:spawner_extractor', id: 'pneumaticcraft:spawner_extractor' }
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        if (!e6ePortedItemExists(output)) return;
        event.remove({ output: output });
    });

    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'thermal' });
    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'immersiveengineering' });
    event.remove({ type: 'integrateddynamics:drying_basin' });
    event.remove({ type: 'integrateddynamics:mechanical_drying_basin' });
    event.remove({ type: 'integrateddynamics:squeezer' });
    event.remove({ type: 'integrateddynamics:mechanical_squeezer' });

    patchouli_safe_removals.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeIngredientExists('kubejs:altered_recipe_indicator'))
            return;
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });
});

if (
    ['bloodmagic', 'botania', 'dustrial_decor', 'eidolon_repraised', 'tconstruct'].every((modId) =>
        e6ePortedRecipeModLoaded(modId)
    )
) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'advancedperipherals:peripheral_casing',
                pattern: ['CDC', 'BAB', 'CEC'],
                key: {
                    A: 'rftoolsbase:machine_frame',
                    B: 'create:redstone_link',
                    C: '#forge:sheetmetals/iron',
                    D: 'integrateddynamics:part_world_reader',
                    E: 'integratedtunnels:part_player_simulator'
                },
                id: 'advancedperipherals:peripheral_casing'
            },
            {
                output: 'advancedperipherals:end_automata_core',
                pattern: ['B B', ' A ', 'B B'],
                key: {
                    A: 'advancedperipherals:weak_automata_core',
                    B: Item.of(
                        'pneumaticcraft:spawner_core',
                        '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}'
                    )
                },
                id: 'advancedperipherals:end_automata_core'
            },
            {
                output: 'advancedperipherals:husbandry_automata_core',
                pattern: ['B C', ' A ', 'D E'],
                key: {
                    A: 'advancedperipherals:weak_automata_core',
                    B: Item.of(
                        'pneumaticcraft:spawner_core',
                        '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:cow":100}}'
                    ),
                    C: Item.of(
                        'pneumaticcraft:spawner_core',
                        '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:sheep":100}}'
                    ),
                    D: Item.of(
                        'pneumaticcraft:spawner_core',
                        '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:pig":100}}'
                    ),
                    E: Item.of(
                        'pneumaticcraft:spawner_core',
                        '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:chicken":100}}'
                    )
                },
                id: 'advancedperipherals:husbandry_automata_core'
            },
            {
                output: 'advancedperipherals:overpowered_weak_automata_core',
                pattern: [' B ', 'CAD', ' E '],
                key: {
                    A: 'advancedperipherals:weak_automata_core',
                    B: 'bloodmagic:weakbloodshard',
                    C: 'eidolon_repraised:shadow_gem',
                    D: 'botania:dragonstone',
                    E: 'minecraft:nether_star'
                },
                id: 'advancedperipherals:overpowered_weak_automata_core'
            },
            {
                output: 'advancedperipherals:overpowered_husbandry_automata_core',
                pattern: [' B ', 'CAD', ' E '],
                key: {
                    A: 'advancedperipherals:husbandry_automata_core',
                    B: 'bloodmagic:weakbloodshard',
                    C: 'eidolon_repraised:shadow_gem',
                    D: 'botania:dragonstone',
                    E: 'minecraft:nether_star'
                },
                id: 'advancedperipherals:overpowered_husbandry_automata_core'
            },
            {
                output: 'advancedperipherals:overpowered_end_automata_core',
                pattern: [' B ', 'CAD', ' E '],
                key: {
                    A: 'advancedperipherals:end_automata_core',
                    B: 'bloodmagic:weakbloodshard',
                    C: 'eidolon_repraised:shadow_gem',
                    D: 'botania:dragonstone',
                    E: 'minecraft:nether_star'
                },
                id: 'advancedperipherals:overpowered_end_automata_core'
            }
        ];
        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: 'architects_palette:sunmetal_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'architects_palette:sunmetal_brick'
            },
            id: 'architects_palette:sunmetal_block'
        }
    ];

    newRecipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'ars_nouveau:basic_spell_turret',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'eidolon_repraised:enchanted_ash',
                    B: 'quark:gold_bars',
                    C: '#forge:storage_blocks/mana'
                },
                id: 'ars_nouveau:basic_spell_turret'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            const output = recipe.count ? Item.of(recipe.output, recipe.count) : recipe.output;
            event.shaped(output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['bloodmagic', 'botania', 'eidolon_repraised', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const newRecipes = [
            {
                output: Item.of('2x bloodmagic:ritualstone'),
                pattern: ['CBC', 'BAB', 'CBC'],
                key: {
                    A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
                    B: 'bloodmagic:reinforcedslate',
                    C: 'architects_palette:abyssaline'
                },
                id: 'bloodmagic:ritual_stone_blank'
            },
            {
                output: 'bloodmagic:masterritualstone',
                pattern: ['CBC', 'BAB', 'CBC'],
                key: {
                    A: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
                    B: 'bloodmagic:ritualstone',
                    C: 'architects_palette:abyssaline'
                },
                id: 'bloodmagic:ritual_stone_master'
            },
            {
                output: Item.of('bloodmagic:dungeon_stone', 8),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'naturesaura:infused_stone',
                    B: '#bloodmagic:crystals/demon'
                },
                id: 'bloodmagic:dungeon_stone'
            },
            {
                output: 'bloodmagic:alchemicalreactionchamber',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: 'bloodmagic:dungeon_stone',
                    B: 'bloodmagic:infusedslate',
                    C: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
                    D: '#forge:storage_blocks/blazing',
                    E: 'minecraft:blast_furnace'
                },
                id: 'bloodmagic:arc'
            }
        ];

        newRecipes.forEach((recipe) => {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['atum', 'botania', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'botania:vine_ball',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:vine',
                    B: '#forge:slimeballs'
                },
                id: 'botania:vine_ball'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'computercraft:wired_modem',
                pattern: [' A ', ' B ', ' C '],
                key: {
                    A: '#forge:sheetmetals/aluminum',
                    B: 'rftoolscontrol:network_card',
                    C: 'rftoolsbase:machine_base'
                },
                id: 'computercraft:wired_modem'
            },
            {
                output: 'computercraft:monitor_normal',
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: 'immersiveengineering:slab_sheetmetal_aluminum',
                    B: 'rftoolsbase:information_screen'
                },
                id: 'computercraft:monitor_normal'
            },
            {
                output: Item.of('computercraft:cable', 8),
                pattern: [' B ', 'BAB', ' B '],
                key: {
                    A: 'immersiveengineering:wirecoil_redstone',
                    B: '#forge:plastic'
                },
                id: 'computercraft:cable'
            },
            {
                output: 'computercraft:wireless_modem_normal',
                pattern: ['AB', 'CD'],
                key: {
                    A: 'computercraft:wired_modem',
                    B: 'refinedstorage:wireless_transmitter',
                    C: 'pneumaticcraft:network_api',
                    D: 'refinedstorage:range_upgrade'
                },
                id: 'computercraft:wireless_modem_normal'
            },
            {
                output: 'computercraft:wireless_modem_advanced',
                pattern: ['AB', 'C '],
                key: {
                    A: 'computercraft:wireless_modem_normal',
                    B: 'rftoolsbase:infused_enderpearl',
                    C: 'rsinfinitybooster:infinity_card'
                },
                id: 'computercraft:wireless_modem_advanced'
            }
        ];
        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'create:millstone',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: '#forge:gears/copper',
                B: '#forge:ingots/andesite_alloy',
                C: 'create:cogwheel',
                D: 'minecraft:smooth_stone_slab'
            },
            id: 'create:crafting/kinetics/millstone'
        },
        {
            output: 'create:windmill_bearing',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:turntable',
                B: 'minecraft:sticky_piston',
                C: 'create:shaft'
            },
            id: 'create:crafting/kinetics/windmill_bearing'
        },
        {
            output: Item.of('create:white_sail', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'create:sail_frame',
                B: '#thermal:rockwool'
            },
            id: 'create:crafting/kinetics/white_sail'
        },
        {
            output: Item.of('create:brass_casing', 4),
            pattern: ['ABA', 'BBB', 'ABA'],
            key: {
                A: '#forge:plates/brass',
                B: 'eidolon_repraised:polished_planks'
            },
            id: 'create:crafting/materials/brass_casing'
        },
        {
            output: Item.of('create:encased_chain_drive', 2),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'minecraft:chain',
                B: 'create:shaft',
                C: 'create:andesite_casing'
            },
            id: 'create:crafting/kinetics/encased_chain_drive'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['astralsorcery', 'bloodmagic', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: Item.of('6x darkutils:vector_plate_fast'),
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'darkutils:vector_plate',
                    B: '#botania:runes/air',
                    C: '#forge:nuggets/queens_slime'
                },
                id: 'darkutils:crafting/vector_plate_fast'
            },
            {
                output: Item.of('4x darkutils:import_plate'),
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: 'darkutils:vector_plate',
                    B: 'naturesaura:grated_chute'
                },
                id: 'darkutils:crafting/import_plate'
            },
            {
                output: Item.of('4x darkutils:import_plate_fast'),
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: 'darkutils:vector_plate_fast',
                    B: 'naturesaura:grated_chute'
                },
                id: 'darkutils:crafting/import_plate_fast'
            },
            {
                output: Item.of('4x darkutils:import_plate_extreme'),
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: 'darkutils:vector_plate_extreme',
                    B: 'naturesaura:grated_chute'
                },
                id: 'darkutils:crafting/import_plate_extreme'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['atum', 'bloodmagic', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/eidolon/shaped/';

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'eidolon_repraised:wooden_altar',
                pattern: ['AAA', 'B B', 'B B'],
                key: {
                    A: 'eidolon_repraised:polished_planks_slab',
                    B: 'eidolon_repraised:polished_planks'
                },
                id: 'eidolon_repraised:wooden_altar'
            },
            {
                output: 'eidolon_repraised:brazier',
                pattern: ['AAA', 'CBC', 'D D'],
                key: {
                    A: '#forge:ingots/pewter',
                    B: 'minecraft:conduit',
                    C: 'eidolon_repraised:ender_calx',
                    D: 'minecraft:nether_brick_fence'
                },
                id: 'eidolon_repraised:brazier'
            },
            {
                output: Item.of('6x eidolon_repraised:wicked_weave'),
                pattern: ['ABA', 'ACA', 'ABA'],
                key: {
                    A: 'atum:linen_cloth',
                    B: 'minecraft:potion[minecraft:potion_contents={potion:"ars_nouveau:spell_damage"}]',
                    C: { type: 'bloodmagic:bloodorb', orb_tier: 1 }
                },
                id: `${id_prefix}wicked_weave`
            },
            {
                output: Item.of('eidolon_repraised:bonechill_wand'),
                pattern: [' AB', 'CDA', 'EC '],
                key: {
                    A: '#forge:ingots/pewter',
                    B: 'eidolon_repraised:wraith_heart',
                    C: '#forge:rods/silver',
                    D: 'minecraft:bone',
                    E: '#forge:inlays/pewter'
                },
                id: `${id_prefix}bonechill_wand`
            },
            {
                output: Item.of('eidolon_repraised:soulfire_wand'),
                pattern: [' AB', 'CDA', 'EC '],
                key: {
                    A: '#forge:ingots/arcane_gold',
                    B: 'atum:anubis_godshard',
                    C: '#forge:rods/electrum',
                    D: '#forge:bones/wither',
                    E: '#forge:inlays/arcane_gold'
                },
                id: `${id_prefix}soulfire_wand`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['engineersdecor'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: Item.of('12x engineersdecor:metal_bar'),
                pattern: ['  A', ' A ', 'A B'],
                key: {
                    A: '#forge:rods/aluminum',
                    B: 'fluxnetworks:flux_dust'
                },
                id: 'engineersdecor:dependent/metal_bar_recipe'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'farmersdelight:basket',
                pattern: ['A A', 'B B', 'ABA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: 'farmersdelight:canvas'
                },
                id: 'farmersdelight:basket'
            },
            {
                output: 'farmersdelight:cooking_pot',
                pattern: ['ABA', 'CDC', 'CEC'],
                key: {
                    A: 'minecraft:brick',
                    B: 'kubejs:scented_stick',
                    C: '#forge:ingots/iron',
                    D: 'minecraft:conduit',
                    E: '#forge:plates/copper'
                },
                id: 'farmersdelight:cooking_pot'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['eidolon_repraised', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/immersiveengineering/';
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            /*{
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:stones/basalt',
                B: 'create:cinder_flour',
                C: '#forge:clay'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        },*/
            {
                output: 'immersiveengineering:workbench',
                pattern: ['A  ', 'BCC', 'E D'],
                key: {
                    A: '#forge:rods/steel',
                    B: '#forge:plates/steel',
                    C: '#forge:treated_wood_slab',
                    D: 'immersiveengineering:treated_fence',
                    E: 'immersiveengineering:craftingtable'
                },
                id: 'immersiveengineering:crafting/workbench'
            },
            {
                output: 'immersiveengineering:turntable',
                pattern: ['ABA', 'CDC'],
                key: {
                    A: '#forge:plates/iron',
                    B: 'create:brass_casing',
                    C: '#forge:dusts/redstone',
                    D: 'immersiveengineering:coil_lv'
                },
                id: 'immersiveengineering:crafting/turntable'
            },

            {
                output: Item.of('2x immersiveengineering:rs_engineering'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'thermal:signalum_glass',
                    B: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                    C: 'immersiveengineering:wirecoil_redstone',
                    D: '#forge:sheetmetals/aluminum'
                },
                id: 'immersiveengineering:crafting/rs_engineering'
            },
            {
                output: Item.of('2x immersiveengineering:heavy_engineering'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: '#forge:gears/steel',
                    B: 'immersiveengineering:component_steel',
                    C: 'immersiveengineering:wirecoil_electrum',
                    D: '#forge:sheetmetals/steel'
                },
                id: 'immersiveengineering:crafting/heavy_engineering'
            },
            {
                output: Item.of('2x immersiveengineering:light_engineering'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: '#forge:gears/invar',
                    B: 'immersiveengineering:component_iron',
                    C: 'immersiveengineering:wirecoil_copper',
                    D: '#forge:sheetmetals/aluminum'
                },
                id: 'immersiveengineering:crafting/light_engineering'
            },
            {
                output: 'immersiveengineering:capacitor_mv',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#forge:treated_wood',
                    B: 'immersiveengineering:connector_mv',
                    C: 'immersiveengineering:capacitor_lv',
                    D: '#forge:plates/lead',
                    E: '#forge:storage_blocks/electrum'
                },
                id: 'immersiveengineering:crafting/capacitor_mv'
            },
            {
                output: 'immersiveengineering:capacitor_hv',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#forge:treated_wood',
                    B: 'immersiveengineering:connector_hv',
                    C: 'immersiveengineering:capacitor_mv',
                    D: '#forge:plates/lead',
                    E: '#forge:storage_blocks/steel'
                },
                id: 'immersiveengineering:crafting/capacitor_hv'
            },
            {
                output: 'immersiveengineering:windmill_blade',
                pattern: ['AA ', 'BBA', 'BB '],
                key: {
                    A: 'eidolon_repraised:polished_planks',
                    B: 'create:sail_frame'
                },
                id: 'immersiveengineering:crafting/windmill_blade'
            },
            {
                output: 'immersiveengineering:windmill',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'immersiveengineering:windmill_blade',
                    B: 'create:mechanical_bearing'
                },
                id: 'immersiveengineering:crafting/windmill'
            },
            {
                output: 'immersiveengineering:watermill',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'immersiveengineering:waterwheel_segment',
                    B: 'create:mechanical_bearing'
                },
                id: 'immersiveengineering:crafting/watermill'
            },
            {
                output: 'immersiveengineering:waterwheel_segment',
                pattern: [' A ', 'ABA', 'BAB'],
                key: {
                    A: '#forge:rods/brass',
                    B: 'eidolon_repraised:polished_planks'
                },
                id: 'immersiveengineering:crafting/waterwheel_segment'
            },
            {
                output: 'immersiveengineering:radiator',
                pattern: ['BBB', 'BAB', 'BCB'],
                key: {
                    A: '#forge:sheetmetals/steel',
                    B: 'create:fluid_pipe',
                    C: {
                        type: 'immersiveengineering:fluid',
                        tag: 'minecraft:water',
                        amount: 1000
                    }
                },
                id: 'immersiveengineering:crafting/radiator'
            },
            {
                output: 'immersiveengineering:generator',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: '#forge:sheetmetals/steel',
                    B: 'immersiveengineering:coil_mv',
                    C: 'immersiveengineering:dynamo'
                },
                id: 'immersiveengineering:crafting/generator'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// 中文：迁入 E6E 工业先锋专家工作台配方，仅专家模式注册并逐条筛选材料。
if (e6ePortedRecipeModLoaded('industrialforegoing')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/industrialforegoing/shaped/';

        const recipes = [
            {
                output: 'industrialforegoing:machine_frame_pity',
                pattern: ['CDC', 'ABA', 'CDC'],
                key: {
                    A: 'immersiveengineering:concrete_leaded',
                    B: 'create:brass_casing',
                    C: 'create:andesite_casing',
                    D: 'immersiveengineering:component_iron'
                },
                id: 'industrialforegoing:machine_frame_pity'
            },
            {
                output: 'industrialforegoing:laser_drill',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: '#c:plastics',
                    B: 'mekanismgenerators:laser_focus_matrix',
                    C: '#c:gears/enderium',
                    D: 'mekanism:laser'
                },
                id: 'industrialforegoing:laser_drill'
            },
            {
                output: 'industrialforegoing:ore_laser_base',
                pattern: ['ABA', 'CDC', 'BEB'],
                key: {
                    A: '#c:plastics',
                    B: '#c:gears/lumium',
                    C: 'thermal:enderium_glass',
                    D: '#industrialforegoing:machine_frame/supreme',
                    E: 'pneumaticcraft:smart_chest'
                },
                id: 'industrialforegoing:ore_laser_base'
            },
            {
                output: 'industrialforegoing:fluid_laser_base',
                pattern: ['ABA', 'CDC', 'BEB'],
                key: {
                    A: '#c:plastics',
                    B: '#c:gears/lumium',
                    C: 'thermal:enderium_glass',
                    D: '#industrialforegoing:machine_frame/advanced',
                    E: 'mekanism:dynamic_tank'
                },
                id: 'industrialforegoing:fluid_laser_base'
            },
            {
                output: 'industrialforegoing:plant_fertilizer',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: ['#c:plastics', 'mekanism:hdpe_sheet'],
                    B: 'naturesaura:aura_bottle[minecraft:custom_data={stored_type:"naturesaura:overworld"}]',
                    C: 'create:mechanical_pump',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'create:nozzle',
                    F: '#c:gears/lumium',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:plant_fertilizer'
            },
            {
                output: 'industrialforegoing:hydroponic_bed',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: ['#c:plastics', 'mekanism:hdpe_sheet'],
                    B: 'industrialforegoing:fertilizer',
                    C: 'mekanism:dynamic_tank',
                    D: 'supplementaries:planter_rich',
                    E: '#industrialforegoing:machine_frame/pity',
                    F: '#c:gears/lumium'
                },
                id: 'industrialforegoing:hydroponic_bed'
            },
            {
                output: 'industrialforegoing:potion_brewer',
                pattern: [' B ', 'ACA', 'DED'],
                key: {
                    A: '#c:plastics',
                    B: 'minecraft:brewing_stand',
                    C: '#industrialforegoing:machine_frame/pity',
                    D: '#c:gears/constantan',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:potion_brewer'
            },
            {
                output: 'industrialforegoing:marine_fisher',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: '#c:plastics',
                    B: 'aquaculture:neptunium_fishing_rod[minecraft:damage=0]',
                    C: 'aquaculture:nether_star_hook',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: 'aquaculture:worm',
                    F: '#c:gears/bronze',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:marine_fisher'
            },
            {
                output: 'industrialforegoing:enchantment_extractor',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: '#c:plastics',
                    B: '#botania:runes/mana',
                    C: 'botania:pump',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: '#c:gears/osmium',
                    F: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:enchantment_extractor'
            },
            {
                output: 'industrialforegoing:washing_factory',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: '#c:plastics',
                    B: '#c:ingots/slimesteel',
                    C: 'create:fluid_tank',
                    D: 'create:brass_casing',
                    E: '#c:gears/compressed_iron',
                    F: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:washing_factory'
            },
            {
                output: 'industrialforegoing:fermentation_station',
                pattern: ['ABA', 'CDC', 'CEC'],
                key: {
                    A: '#c:plastics',
                    B: '#c:ingots/slimesteel',
                    C: 'pneumaticcraft:reinforced_bricks',
                    D: 'sushigocrafting:fermentation_barrel',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:fermentation_station'
            },
            {
                output: 'industrialforegoing:fluid_sieving_machine',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: '#c:plastics',
                    B: '#c:ingots/slimesteel',
                    C: 'create:fluid_tank',
                    D: 'create:brass_casing',
                    E: 'create:smart_fluid_pipe',
                    F: '#c:gears/compressed_iron',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:fluid_sieving_machine'
            },
            {
                output: 'industrialforegoing:material_stonework_factory',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: '#c:plastics',
                    B: 'rftoolsutility:crafter1',
                    C: 'immersiveengineering:drillhead_steel',
                    D: '#industrialforegoing:machine_frame/advanced',
                    E: 'mekanism:energized_smelter',
                    F: '#c:gears/compressed_iron',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:material_stonework_factory'
            },
            {
                output: 'industrialforegoing:stasis_chamber',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: '#c:plastics',
                    B: 'rftoolsutility:regenerationplus_module',
                    C: 'rftoolsutility:noteleport_module',
                    D: '#industrialforegoing:machine_frame/advanced',
                    E: 'rftoolsutility:slowness_module',
                    F: '#c:gears/uranium',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:stasis_chamber'
            },
            {
                output: 'industrialforegoing:mob_crusher',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: '#c:plastics',
                    B: 'thermal:device_collector',
                    C: 'create:mechanical_arm',
                    D: '#industrialforegoing:machine_frame/advanced',
                    E: 'industrialforegoing:infinity_hammer',
                    F: '#c:gears/uranium',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:mob_crusher'
            },
            {
                output: 'industrialforegoing:black_hole_controller',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#c:plastics',
                    B: 'portality:module_items',
                    C: 'portality:frame',
                    D: 'enderstorage:ender_chest',
                    E: 'portality:controller'
                },
                id: 'industrialforegoing:black_hole_controller'
            },
            {
                output: 'industrialforegoing:infinity_charger',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: '#c:plastics',
                    B: 'mekanism:ultimate_universal_cable',
                    C: 'mekanism:ultimate_induction_cell',
                    D: '#c:gears/signalum',
                    E: '#industrialforegoing:machine_frame/advanced'
                },
                id: 'industrialforegoing:infinity_charger'
            },
            {
                output: 'industrialforegoing:enchantment_applicator',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: '#c:plastics',
                    B: 'betterendforge:aeternium_anvil',
                    C: 'kubejs:memory_ultimate_filled',
                    D: 'mekanism:dynamic_tank',
                    E: '#c:gears/osmium',
                    F: '#industrialforegoing:machine_frame/simple'
                },
                id: 'industrialforegoing:enchantment_applicator'
            },
            {
                output: 'industrialforegoing:mob_imprisonment_tool',
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: '#c:plastics',
                    B: 'pneumaticcraft:spawner_core'
                },
                id: 'industrialforegoing:mob_imprisonment_tool'
            },
            {
                output: 'industrialforegoing:wither_builder',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: 'ars_nouveau:glyph_wither',
                    B: 'rftoolsutility:matter_beamer',
                    C: 'rftoolsutility:spawner',
                    D: 'rftoolsutility:syringe[minecraft:custom_data={mobName:"minecraft:wither",mobId:"minecraft:wither",level:10}]',
                    E: '#industrialforegoing:machine_frame/supreme'
                },
                id: 'industrialforegoing:wither_builder'
            },
            {
                output: 'industrialforegoing:sewer',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: 'quark:grate',
                    B: 'create:fluid_pipe',
                    C: 'industrialforegoing:common_black_hole_tank',
                    D: 'environmental:mud_bricks',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:sewer'
            },
            {
                output: 'industrialforegoing:animal_baby_separator',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: 'immersiveengineering:sheetmetal_colored_white',
                    B: 'minecraft:golden_carrot',
                    C: 'minecraft:tripwire_hook',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'create:weighted_ejector',
                    F: '#c:gears/invar',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:animal_baby_separator'
            },
            {
                output: 'industrialforegoing:animal_rancher',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: 'immersiveengineering:sheetmetal_colored_white',
                    B: 'minecraft:milk_bucket',
                    C: 'minecraft:shears',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'create:deployer',
                    F: '#c:gears/invar',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:animal_rancher'
            },
            {
                output: 'industrialforegoing:range_addon_tier_0',
                pattern: [' A ', 'BCB', ' A '],
                key: {
                    A: '#c:dyes/gray',
                    B: '#c:dusts/redstone',
                    C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
                },
                id: `${id_prefix}range_addon0`
            },
            {
                output: 'industrialforegoing:range_addon_tier_1',
                pattern: [' A ', 'BCB', ' A '],
                key: {
                    A: '#c:dyes/blue',
                    B: '#c:dusts/redstone',
                    C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
                },
                id: `${id_prefix}range_addon1`
            },
            {
                output: 'industrialforegoing:range_addon_tier_2',
                pattern: [' A ', 'BCB', ' A '],
                key: {
                    A: '#c:dyes/light_gray',
                    B: '#c:dusts/redstone',
                    C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
                },
                id: `${id_prefix}range_addon2`
            },
            {
                output: 'industrialforegoing:fluid_placer',
                pattern: ['AAA', 'ABC', 'DED'],
                key: {
                    A: 'immersiveengineering:fluid_pipe',
                    B: 'create:propeller',
                    C: 'industrialforegoing:common_black_hole_tank',
                    D: 'minecraft:smooth_stone',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:fluid_placer'
            },
            {
                output: 'industrialforegoing:water_condensator',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#c:sheetmetals/aluminum',
                    B: 'industrialforegoing:common_black_hole_tank',
                    C: 'create:fluid_pipe',
                    D: 'create:mechanical_pump',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:water_condensator'
            },
            {
                output: 'industrialforegoing:block_placer',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#c:plastics',
                    B: 'minecraft:dispenser',
                    C: 'industrialforegoing:dryrubber',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:block_placer'
            },
            {
                output: 'industrialforegoing:block_breaker',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#c:plastics',
                    B: 'immersiveengineering:drillhead_steel',
                    C: '#c:gears/steel',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:block_breaker'
            },
            {
                output: 'industrialforegoing:spores_recreator',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: '#c:plastics',
                    B: 'astralsorcery:nocturnal_powder',
                    C: '#c:mushrooms',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'minecraft:mycelium',
                    F: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:spores_recreator'
            },
            {
                output: 'industrialforegoing:plant_sower',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: '#c:plastics',
                    B: 'create:weighted_ejector',
                    C: '#c:slimeballs',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: '#c:gears/lumium',
                    F: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:plant_sower'
            },
            {
                output: 'industrialforegoing:plant_gatherer',
                pattern: ['ABA', 'CDE', 'FGF'],
                key: {
                    A: '#c:plastics',
                    B: 'create:mechanical_arm',
                    C: 'naturesaura:infused_iron_axe',
                    D: '#industrialforegoing:machine_frame/pity',
                    E: 'naturesaura:infused_iron_hoe',
                    F: '#c:gears/lumium',
                    G: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:plant_gatherer'
            },
            {
                output: 'industrialforegoing:sludge_refiner',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: '#c:plastics',
                    B: '#c:plates/brass',
                    C: 'immersiveengineering:alloybrick',
                    D: 'create:basin',
                    E: '#c:gears/uranium',
                    F: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:sludge_refiner'
            },
            {
                output: 'industrialforegoing:fluid_extractor',
                pattern: ['AAA', 'BCD', 'AEA'],
                key: {
                    A: 'immersiveengineering:sheetmetal_colored_white',
                    B: 'industrialforegoing:common_black_hole_tank',
                    C: 'tconstruct:seared_channel',
                    D: 'create:mechanical_drill',
                    E: '#industrialforegoing:machine_frame/pity'
                },
                id: 'industrialforegoing:fluid_extractor'
            },
            {
                output: 'industrialforegoing:latex_processing_unit',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: 'immersiveengineering:fluid_pipe',
                    B: 'industrialforegoing:common_black_hole_tank',
                    C: '#industrialforegoing:machine_frame/pity',
                    D: '#c:gears/uranium',
                    E: 'e6e_mbd2:energy_input'
                },
                id: 'industrialforegoing:latex_processing_unit'
            },
            {
                output: 'industrialforegoing:infinity_backpack',
                pattern: ['AAA', 'BCB', 'DED'],
                key: {
                    A: 'mekanism:hdpe_sheet',
                    B: 'e6e_mbd2:fluid_input',
                    C: 'tconstruct:piggy_backpack',
                    D: 'dankstorage:dank_3',
                    E: 'powah:capacitor_basic'
                },
                id: 'industrialforegoing:dissolution_chamber/infinity_backpack'
            }
        ];

        const resolveExpertIfIngredient = (ingredient) => {
            if (Array.isArray(ingredient)) {
                return ingredient.map(resolveExpertIfIngredient).filter(e6eRecipeIngredientExists);
            }
            if (typeof ingredient === 'string' && ingredient.startsWith('#c:')) {
                const legacyTag = '#forge:' + ingredient.substring(3);
                if (e6eRecipeIngredientExists(ingredient)) return ingredient;
                if (e6eRecipeIngredientExists(legacyTag)) return legacyTag;
            }
            return ingredient;
        };

        recipes.forEach((recipe) => {
            const key = {};
            Object.keys(recipe.key).forEach((symbol) => {
                key[symbol] = resolveExpertIfIngredient(recipe.key[symbol]);
            });
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(key))) return;
            event.shaped(recipe.output, recipe.pattern, key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedcrafting/';
    const recipes = [
        {
            output: Item.of('3x integratedcrafting:part_interface_crafting'),
            pattern: [' A ', 'BAC', ' A '],
            key: {
                A: 'create:mechanical_crafter',
                B: 'integrateddynamics:variable_transformer_output',
                C: 'integrateddynamics:variable_transformer_input'
            },
            id: 'integratedcrafting:crafting/part_interface_crafting'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['atum', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/integrateddynamics/';
        const recipes = [
            {
                output: Item.of('integrateddynamics:variable', 24),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'integrateddynamics:crystalized_menril_chunk',
                    B: 'pneumaticcraft:upgrade_matrix'
                },
                id: 'integrateddynamics:crafting/variable'
            },
            {
                output: 'integrateddynamics:variablestore',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'extrastorage:neural_processor',
                    B: 'integrateddynamics:crystalized_menril_block',
                    C: 'integrateddynamics:menril_wood',
                    D: 'pneumaticcraft:smart_chest',
                    E: 'pneumaticcraft:upgrade_matrix',
                    F: 'kubejs:memory_advanced_filled'
                },
                id: 'integrateddynamics:crafting/variablestore'
            },
            {
                output: 'integrateddynamics:part_static_light_panel',
                pattern: ['AB', 'CD', 'AB'],
                key: {
                    A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                    B: 'integrateddynamics:menril_wood',
                    C: '#forge:plates/lumium',
                    D: 'atum:white_stained_crystal_glass_pane'
                },
                id: 'integrateddynamics:crafting/part_static_light_panel'
            },
            {
                output: 'integrateddynamics:part_display_panel',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
                    B: 'integrateddynamics:part_static_light_panel'
                },
                id: 'integrateddynamics:crafting/part_display_panel'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['botania', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/integratedtunnels/';
        const recipes = [
            {
                output: Item.of('integratedtunnels:part_interface_fluid', 2),
                pattern: ['ABA', 'CDC'],
                key: {
                    A: 'integrateddynamics:menril_wood',
                    B: 'pneumaticcraft:large_tank',
                    C: 'integratedterminals:menril_glass',
                    D: 'pneumaticcraft:logistics_core'
                },
                id: 'integratedtunnels:crafting/part_interface_fluid'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/ironjetpacks/';
        const recipes = [
            ,
            {
                output: 'ironjetpacks:hardened_jetpack',
                pattern: ['ABA', 'ECE', 'DFD'],
                key: {
                    A: 'mekanism:electrolytic_core',
                    B: 'powah:battery_hardened',
                    C: 'mekanism:jetpack',
                    D: 'ironjetpacks:hardened_thruster',
                    E: 'powah:energy_hopper_hardened',
                    F: Item.of(
                        'minecraft:water_bucket',
                        '{Enchantments:[{lvl:1s,id:"minecraft:infinity"}],display:{Name:\'{"text":"#MLG-YOLO"}\'}}'
                    ).weakNBT()
                },
                id: `${id_prefix}hardened_jetpack`
            },
            {
                output: 'ironjetpacks:hardened_thruster',
                pattern: [' B ', 'BDB', 'ACA'],
                key: {
                    A: 'powah:steel_energized',
                    B: 'powah:capacitor_hardened',
                    C: 'powah:furnator_hardened',
                    D: 'powah:energy_hopper_hardened'
                },
                id: `${id_prefix}hardened_thruster`
            },
            {
                output: 'ironjetpacks:blazing_jetpack',
                pattern: ['ABA', 'ECE', 'D D'],
                key: {
                    A: 'powah:crystal_blazing',
                    B: 'powah:battery_blazing',
                    C: 'ironjetpacks:invar_jetpack',
                    D: 'ironjetpacks:blazing_thruster',
                    E: 'powah:energy_hopper_blazing'
                },
                id: `${id_prefix}blazing_jetpack`
            },
            {
                output: 'ironjetpacks:blazing_thruster',
                pattern: [' B ', 'BDB', 'ACA'],
                key: {
                    A: 'powah:crystal_blazing',
                    B: 'powah:capacitor_blazing',
                    C: 'powah:furnator_blazing',
                    D: 'powah:energy_hopper_blazing'
                },
                id: `${id_prefix}blazing_thruster`
            },
            {
                output: 'ironjetpacks:niotic_jetpack',
                pattern: ['ABA', 'ECE', 'D D'],
                key: {
                    A: 'powah:crystal_niotic',
                    B: 'powah:battery_niotic',
                    C: 'ironjetpacks:signalum_jetpack',
                    D: 'ironjetpacks:niotic_thruster',
                    E: 'powah:energy_hopper_niotic'
                },
                id: `${id_prefix}niotic_jetpack`
            },
            {
                output: 'ironjetpacks:niotic_thruster',
                pattern: [' B ', 'BDB', 'ACA'],
                key: {
                    A: 'powah:crystal_niotic',
                    B: 'powah:capacitor_niotic',
                    C: 'powah:furnator_niotic',
                    D: 'powah:energy_hopper_niotic'
                },
                id: `${id_prefix}niotic_thruster`
            },

            {
                output: 'ironjetpacks:lumium_jetpack',
                pattern: ['ABA', 'ECE', 'D D'],
                key: {
                    A: '#forge:plates/lumium',
                    B: '#forge:gears/lumium',
                    C: 'ironjetpacks:niotic_jetpack',
                    D: 'ironjetpacks:lumium_thruster',
                    E: 'thermal:dynamo_fuel_augment'
                },
                id: `${id_prefix}lumium_jetpack`
            },
            {
                output: 'ironjetpacks:lumium_thruster',
                pattern: [' B ', 'BDB', 'ACA'],
                key: {
                    A: '#forge:plates/lumium',
                    B: 'powah:capacitor_niotic',
                    C: 'powah:furnator_niotic',
                    D: 'thermal:dynamo_fuel_augment'
                },
                id: `${id_prefix}lumium_thruster`
            },

            {
                output: 'ironjetpacks:spirited_jetpack',
                pattern: ['ABA', 'ECE', 'D D'],
                key: {
                    A: 'powah:crystal_spirited',
                    B: 'powah:battery_spirited',
                    C: 'ironjetpacks:lumium_jetpack',
                    D: 'ironjetpacks:spirited_thruster',
                    E: 'powah:energy_hopper_spirited'
                },
                id: `${id_prefix}spirited_jetpack`
            },
            {
                output: 'ironjetpacks:spirited_thruster',
                pattern: [' B ', 'BDB', 'ACA'],
                key: {
                    A: 'powah:crystal_spirited',
                    B: 'powah:capacitor_spirited',
                    C: 'powah:furnator_spirited',
                    D: 'powah:energy_hopper_spirited'
                },
                id: `${id_prefix}spirited_thruster`
            },
            {
                output: 'ironjetpacks:nitro_jetpack',
                pattern: ['ABA', 'ECE', 'D D'],
                key: {
                    A: 'powah:crystal_nitro',
                    B: 'powah:battery_nitro',
                    C: 'ironjetpacks:enderium_jetpack',
                    D: 'ironjetpacks:nitro_thruster',
                    E: 'powah:energy_hopper_nitro'
                },
                id: `${id_prefix}nitro_jetpack`
            },
            {
                output: 'ironjetpacks:nitro_thruster',
                pattern: [' B ', 'BDB', 'ACA'],
                key: {
                    A: 'powah:crystal_nitro',
                    B: 'powah:capacitor_nitro',
                    C: 'powah:furnator_nitro',
                    D: 'powah:energy_hopper_nitro'
                },
                id: `${id_prefix}nitro_thruster`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/shaped/';
    const astralCrystalAvailable = e6eRegisteredItemExists('astralsorcery:attuned_celestial_crystal');
    const attunedCrystal = (constellation) =>
        `astralsorcery:attuned_celestial_crystal[astralsorcery:attuned_constellation={constellation:"${constellation}"}]`;
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'kubejs:basic_circuit_package',
            pattern: ['AA ', 'BB ', 'CCD'],
            key: {
                A: 'refinedstorage:improved_processor',
                B: 'kubejs:memory_basic_filled',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}basic_circuit_package`
        },
        {
            output: 'kubejs:basic_lenses_package',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'minecraft:purple_stained_glass',
                B: 'occultism:spirit_attuned_gem',
                C: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}basic_lenses_package`
        },
        {
            output: '2x kubejs:red_nether_brick',
            pattern: ['AB', 'BA'],
            key: {
                A: 'minecraft:nether_brick',
                B: 'minecraft:nether_wart'
            },
            id: `${id_prefix}red_nether_brick`
        },
        {
            output: 'kubejs:basic_memory_package',
            pattern: ['AAA', 'AAA', 'BC '],
            key: {
                A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                B: 'mekanism:cardboard_box',
                C: 'pneumaticcraft:unassembled_pcb'
            },
            id: `${id_prefix}basic_memory_package`
        },
        // 中文：用原版绒球葱替代旧版蜂蜜脾，为 KubeJS 香棒提供非蜜蜂配方。
        // 用原版绒球葱代替旧版蜂巢，为 KubeJS 香薰棒提供不依赖蜜蜂的配方。
        {
            output: Item.of('8x kubejs:scented_stick'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:stick',
                B: 'minecraft:allium'
            },
            id: `${id_prefix}scented_stick`
        },
        {
            output: 'kubejs:cpu_core_500_package',
            pattern: ['BAB', 'ADA', 'BCB'],
            key: {
                A: '#forge:wires/lead',
                B: 'refinedstorage:basic_processor',
                C: 'pneumaticcraft:unassembled_pcb',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}cpu_core_500`
        },
        {
            output: 'kubejs:cpu_core_1000_package',
            pattern: ['BAB', 'ADA', 'BCB'],
            key: {
                A: '#forge:wires/copper',
                B: 'refinedstorage:improved_processor',
                C: 'pneumaticcraft:unassembled_pcb',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}cpu_core_1000`
        },
        {
            output: 'kubejs:cpu_core_2000_package',
            pattern: ['BAB', 'ADA', 'BCB'],
            key: {
                A: '#forge:wires/electrum',
                B: 'refinedstorage:advanced_processor',
                C: 'pneumaticcraft:unassembled_pcb',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}cpu_core_2000`
        },
        {
            output: 'kubejs:mekasuit_bodyarmor_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: e6eRegisteredItemExists('betterendforge:crystalite_chestplate')
                    ? 'betterendforge:crystalite_chestplate[minecraft:damage=0]'
                    : 'mekanism:mekasuit_bodyarmor',
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_bodyarmor`
        },
        {
            output: 'kubejs:mekasuit_pants_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: e6eRegisteredItemExists('betterendforge:crystalite_leggings')
                    ? 'betterendforge:crystalite_leggings[minecraft:damage=0]'
                    : 'mekanism:mekasuit_pants',
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_pants`
        },
        {
            output: 'kubejs:mekasuit_boots_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: e6eRegisteredItemExists('betterendforge:crystalite_boots')
                    ? 'betterendforge:crystalite_boots[minecraft:damage=0]'
                    : 'mekanism:mekasuit_boots',
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_boots`
        },

        // 储存部件
        {
            output: 'kubejs:16k_storage_part_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'minecraft:tinted_glass',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'refinedstorage:quartz_enriched_iron',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'refinedstorage:16k_storage_part'
        },
        {
            output: 'kubejs:64k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:basic_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:16k_storage_part'
            },
            id: 'refinedstorage:64k_storage_part'
        },
        {
            output: 'kubejs:256k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:improved_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:64k_storage_part'
            },
            id: 'extrastorage:part/storagepart_256k'
        },
        {
            output: 'kubejs:1024k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_256k'
            },
            id: 'extrastorage:part/storagepart_1024k'
        },
        {
            output: 'kubejs:4096k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_1024k'
            },
            id: 'extrastorage:part/storagepart_4096k'
        },
        {
            output: 'kubejs:16384k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_4096k'
            },
            id: 'extrastorage:part/storagepart_16384k'
        },

        // 流体储存部件
        {
            output: 'kubejs:1024k_fluid_storage_part_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'mekanism:dynamic_tank',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'refinedstorage:quartz_enriched_iron',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'refinedstorage:1024k_fluid_storage_part'
        },
        {
            output: 'kubejs:4096k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:basic_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:1024b_fluid_storage_part'
            },
            id: 'refinedstorage:4096k_fluid_storage_part'
        },
        {
            output: 'kubejs:16384k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:improved_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:4096b_fluid_storage_part'
            },
            id: 'extrastorage:part/storagepart_16384k_fluid'
        },
        {
            output: 'kubejs:65536k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_16384b_fluid'
            },
            id: 'extrastorage:part/storagepart_65536k_fluid'
        },
        {
            output: 'kubejs:262144k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_65536b_fluid'
            },
            id: 'extrastorage:part/storagepart_262144k_fluid'
        },
        {
            output: 'kubejs:1048576k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_262144b_fluid'
            },
            id: 'extrastorage:part/storagepart_1048576k_fluid'
        },
        {
            output: 'kubejs:imaharas_indelible_electrodes',
            pattern: ['AAA', ' B '],
            key: {
                A: 'immersiveengineering:graphite_electrode',
                B: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}imaharas_indelible_electrodes`
        }
    ];

    if (astralCrystalAvailable) {
        recipes.push({
            output: 'kubejs:bright_constellation_box',
            pattern: ['ABC', 'DEF'],
            key: {
                A: 'mekanism:cardboard_box',
                B: attunedCrystal('astralsorcery:aevitas'),
                C: attunedCrystal('astralsorcery:armara'),
                D: attunedCrystal('astralsorcery:discidia'),
                E: attunedCrystal('astralsorcery:evorsio'),
                F: attunedCrystal('astralsorcery:vicio')
            },
            id: `${id_prefix}bright_constellation_box`
        });

        recipes.push({
            output: 'kubejs:dim_constellation_box',
            pattern: ['ABC', 'DEF', 'GHI'],
            key: {
                A: 'mekanism:cardboard_box',
                // 原配方的 Naritis 来自未安装的 Nature's Starlight，改为任意已共鸣天体水晶。
                B: 'astralsorcery:attuned_celestial_crystal',
                C: attunedCrystal('astralsorcery:octans'),
                D: attunedCrystal('astralsorcery:horologium'),
                E: attunedCrystal('astralsorcery:lucerna'),
                F: attunedCrystal('astralsorcery:mineralis'),
                G: attunedCrystal('astralsorcery:bootes'),
                H: attunedCrystal('astralsorcery:fornax'),
                I: attunedCrystal('astralsorcery:pelotrio')
            },
            id: `${id_prefix}dim_constellation_box`
        });
    }

    recipes.forEach((recipe) => {
        Object.keys(recipe.key).forEach((symbol) => {
            let ingredient = recipe.key[symbol];
            if (typeof ingredient !== 'string') return;
            if (ingredient.startsWith('#forge:')) {
                const commonTag = ingredient.replace('#forge:', '#c:');
                if (e6eRegisteredItemTagHasItems(commonTag)) {
                    recipe.key[symbol] = commonTag;
                    ingredient = commonTag;
                }
            }
            if (!e6eRecipeIngredientExists(ingredient) && ingredient === '#forge:gems/silicon') {
                recipe.key[symbol] = 'minecraft:quartz';
            }
        });
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['botania', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/littlelogistics/';
        const recipes = [
            {
                output: 'littlelogistics:barge',
                pattern: ['ABA', 'CCC'],
                key: {
                    A: '#forge:plates/aluminum',
                    B: '#forge:chests',
                    C: 'immersiveengineering:sheetmetal_colored_red'
                },
                id: 'littlelogistics:barge'
            },
            {
                output: 'littlelogistics:fishing_barge',
                pattern: ['D D', 'ABA', 'CCC'],
                key: {
                    A: '#forge:plates/aluminum',
                    B: Ingredient.of('aquaculture:tackle_box'),
                    C: 'immersiveengineering:sheetmetal_colored_red',
                    D: 'farmersdelight:safety_net'
                },
                id: 'littlelogistics:fishing_barge'
            },
            {
                output: 'littlelogistics:fluid_barge',
                pattern: ['ABA', 'CCC'],
                key: {
                    A: '#forge:plates/aluminum',
                    B: 'create:fluid_tank',
                    C: 'immersiveengineering:sheetmetal_colored_red'
                },
                id: 'littlelogistics:fluid_barge'
            },
            {
                output: 'littlelogistics:seater_barge',
                pattern: ['ABA', 'CCC'],
                key: {
                    A: '#forge:plates/aluminum',
                    B: '#create:seats',
                    C: 'immersiveengineering:sheetmetal_colored_red'
                },
                id: 'littlelogistics:seater_barge'
            },
            {
                output: 'littlelogistics:spring',
                pattern: ['  A', ' B ', 'A  '],
                key: {
                    A: '#forge:ingots/andesite_alloy',
                    B: 'minecraft:chain'
                },
                id: 'littlelogistics:spring'
            },
            {
                output: 'littlelogistics:fluid_hopper',
                pattern: ['A', 'B'],
                key: {
                    A: 'create:fluid_tank',
                    B: 'minecraft:hopper'
                },
                id: 'littlelogistics:fluid_hopper'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (
    ['astralsorcery', 'atum', 'bloodmagic', 'botania', 'eidolon_repraised', 'mythicbotany', 'thermal'].every((modId) =>
        e6ePortedRecipeModLoaded(modId)
    )
) {
    ServerEvents.recipes((event) => {
        if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/masterful_machinery/shaped';
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'masterfulmachinery:stellar_neutron_activator_fluid_port_fluids_input',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: 'immersiveengineering:hempcrete',
                    B: 'mekanism:ultimate_mechanical_pipe',
                    C: 'industrialforegoing:supreme_black_hole_tank',
                    D: 'xnet:advanced_connector_green',
                    E: 'mekanism:hdpe_sheet'
                },
                id: `${id_prefix}stellar_neutron_activator_fluid_port_fluids_input`
            },
            {
                output: 'masterfulmachinery:stellar_neutron_activator_fluid_port_fluids_output',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: 'immersiveengineering:hempcrete',
                    B: 'mekanism:ultimate_mechanical_pipe',
                    C: 'industrialforegoing:supreme_black_hole_tank',
                    D: 'xnet:advanced_connector_red',
                    E: 'mekanism:hdpe_sheet'
                },
                id: `${id_prefix}stellar_neutron_activator_fluid_port_fluids_output`
            },
            {
                output: 'masterfulmachinery:stellar_neutron_activator_energy_port_energy_input',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: 'immersiveengineering:hempcrete',
                    B: 'mekanism:ultimate_universal_cable',
                    C: 'mekanism:ultimate_induction_provider',
                    D: 'xnet:advanced_connector_green',
                    E: 'mekanism:hdpe_sheet'
                },
                id: `${id_prefix}stellar_neutron_activator_energy_port_energy_input`
            },
            {
                output: 'masterfulmachinery:gaia_reactor_energy_port_energy_input',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'mekanism:ultimate_universal_cable',
                    C: 'mekanism:ultimate_induction_provider',
                    D: 'xnet:advanced_connector_green',
                    E: '#forge:ingots/terrasteel'
                },
                id: `${id_prefix}gaia_reactor_energy_port_energy_input`
            },
            {
                output: 'masterfulmachinery:gaia_reactor_high_pressure_port_pncr_pressure_input',
                pattern: ['BDB', 'ACA', 'BAB'],
                key: {
                    A: '#forge:alloys/elite',
                    B: 'pneumaticcraft:advanced_pressure_tube',
                    C: '#industrialforegoing:machine_frame/simple',
                    D: '#forge:ingots/terrasteel'
                },
                id: `${id_prefix}gaia_reactor_high_pressure_port_pncr_pressure_input`
            },
            {
                output: 'masterfulmachinery:gaia_reactor_fluid_port_fluids_input',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'mekanism:ultimate_mechanical_pipe',
                    C: 'industrialforegoing:supreme_black_hole_tank',
                    D: 'xnet:advanced_connector_green',
                    E: '#forge:ingots/terrasteel'
                },
                id: `${id_prefix}gaia_reactor_fluid_port_fluids_input`
            },
            {
                output: 'masterfulmachinery:gaia_reactor_item_port_items_output',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'mekanism:ultimate_logistical_transporter',
                    C: 'pneumaticcraft:smart_chest',
                    D: 'xnet:advanced_connector_red',
                    E: '#forge:ingots/terrasteel'
                },
                id: `${id_prefix}gaia_reactor_item_port_items_output`
            },
            {
                output: 'masterfulmachinery:industrial_deuterium_plant_fluid_port_fluids_input',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'mekanism:ultimate_mechanical_pipe',
                    C: 'industrialforegoing:supreme_black_hole_tank',
                    D: 'xnet:advanced_connector_green',
                    E: '#forge:circuits/elite'
                },
                id: `${id_prefix}industrial_deuterium_plant_fluid_port_fluids_input`
            },
            {
                output: 'masterfulmachinery:industrial_deuterium_plant_fluid_port_fluids_output',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'mekanism:ultimate_mechanical_pipe',
                    C: 'industrialforegoing:supreme_black_hole_tank',
                    D: 'xnet:advanced_connector_red',
                    E: '#forge:circuits/elite'
                },
                id: `${id_prefix}industrial_deuterium_plant_fluid_port_fluids_output`
            },
            {
                output: 'masterfulmachinery:industrial_deuterium_plant_energy_port_energy_input',
                pattern: ['BEB', 'ACA', 'BDB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'mekanism:ultimate_universal_cable',
                    C: 'mekanism:ultimate_induction_provider',
                    D: 'xnet:advanced_connector_green',
                    E: '#forge:circuits/elite'
                },
                id: `${id_prefix}industrial_deuterium_plant_energy_port_energy_input`
            },
            {
                output: 'masterfulmachinery:industrial_deuterium_plant_pressure_port_pncr_pressure_input',
                pattern: ['BDB', 'ACA', 'BEB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'pneumaticcraft:advanced_pressure_tube',
                    C: 'pneumaticcraft:reinforced_air_canister',
                    D: '#forge:circuits/elite',
                    E: 'xnet:advanced_connector_green'
                },
                id: `${id_prefix}industrial_deuterium_plant_pressure_port_pncr_pressure_input`
            },
            {
                output: 'masterfulmachinery:industrial_deuterium_plant_spinny_port_create_rotation_input',
                pattern: ['BDB', 'ACA', 'BEB'],
                key: {
                    A: '#forge:plates/steel',
                    B: 'create:brass_casing',
                    C: 'create:rotation_speed_controller',
                    D: '#forge:circuits/elite',
                    E: 'xnet:advanced_connector_green'
                },
                id: `${id_prefix}industrial_deuterium_plant_spinny_port_create_rotation_input`
            },
            {
                output: 'masterfulmachinery:wicked_altar_controller',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'eidolon_repraised:polished_wood_pillar',
                    B: 'bloodmagic:blankslate',
                    C: 'minecraft:conduit'
                },
                id: `${id_prefix}wicked_altar_controller`
            },
            {
                output: 'masterfulmachinery:wicked_altar_fluid_port_fluids_input',
                pattern: ['ABA', 'BCB', 'ADA'],
                key: {
                    A: 'eidolon_repraised:polished_wood_pillar',
                    B: '#forge:ingots/silicon_bronze',
                    C: 'pneumaticcraft:small_tank',
                    D: 'atum:linen_lime'
                },
                id: `${id_prefix}wicked_altar_fluid_port_fluids_input`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// 专家 Mekanism 配方依赖条件不满足时，使用源 normal 目录的储物箱配方。
if (!['engineersdecor', 'resourcefulbees', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const tiers = [
            { tier: 'basic', ingredient: '#forge:ingots/copper' },
            { tier: 'advanced', ingredient: '#forge:dusts/redstone' },
            { tier: 'elite', ingredient: '#forge:ingots/osmium' },
            { tier: 'ultimate', ingredient: '#forge:obsidian' }
        ];

        tiers.forEach(({ tier, ingredient }) => {
            const recipe = {
                output: `mekanism:${tier}_bin`,
                pattern: ['ABA', 'A A', 'AAA'],
                key: {
                    A: 'minecraft:smooth_stone',
                    B: ingredient
                },
                id: `mekanism:bin/${tier}`
            };

            if (e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) {
                event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
            }
        });
    });
}

if (e6ePortedRecipeModLoaded('mekanism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/mekanism/';
        const thermalMbd2Replacements = {
            'thermal:machine_frame': 'create:brass_casing',
            'thermal:rf_coil': 'e6e_mbd2:energy_input',
            '#thermal:glass/hardened': 'mekanism:structural_glass',
            'thermal:fluid_cell': 'e6e_mbd2:fluid_input',
            'thermal:machine_chiller': 'e6e_mbd2:thermal_chiller'
        };

        function resolveMekanismIngredient(ingredient) {
            if (typeof ingredient !== 'string') return ingredient;
            if (thermalMbd2Replacements[ingredient]) return thermalMbd2Replacements[ingredient];
            if (ingredient.startsWith('#forge:')) {
                const commonTag = `#c:${ingredient.substring('#forge:'.length)}`;
                if (e6eRecipeIngredientExists(commonTag)) return commonTag;
            }
            return ingredient;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'mekanism:resistive_heater',
                pattern: ['BEB', 'CDC', 'BAB'],
                key: {
                    A: '#forge:circuits/advanced',
                    B: 'immersiveengineering:blastbrick_reinforced',
                    C: 'immersiveengineering:coil_hv',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: 'pneumaticcraft:heat_sink'
                },
                id: 'mekanism:resistive_heater'
            },
            {
                output: 'mekanism:metallurgic_infuser',
                pattern: ['ACA', 'BDB', 'AEA'],
                key: {
                    A: '#forge:gears/osmium',
                    B: '#forge:circuits/basic',
                    C: 'rftoolspower:blazing_agitator',
                    D: 'thermal:machine_bottler',
                    E: 'rftoolspower:cell1'
                },
                id: 'mekanism:metallurgic_infuser'
            },
            {
                output: 'mekanism:thermal_evaporation_controller',
                pattern: ['AAA', 'BCD', 'AAA'],
                key: {
                    A: 'mekanism:thermal_evaporation_block',
                    B: '#forge:circuits/elite',
                    C: '#industrialforegoing:machine_frame/advanced',
                    D: 'rftoolsbase:tablet'
                },
                id: 'mekanism:thermal_evaporation/controller'
            },
            {
                output: Item.of('2x mekanism:thermal_evaporation_block'),
                pattern: ['ADA', 'BCB', 'ADA'],
                key: {
                    A: '#forge:plates/bronze',
                    B: 'pneumaticcraft:heat_pipe',
                    C: 'immersiveengineering:alloybrick',
                    D: '#mekanism:alloys/reinforced'
                },
                id: 'mekanism:thermal_evaporation/block'
            },
            {
                output: 'mekanism:thermal_evaporation_valve',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:thermal_evaporation_block',
                    B: 'create:copper_valve_handle',
                    C: 'create:fluid_pipe',
                    D: 'create:fluid_valve',
                    E: '#forge:circuits/elite'
                },
                id: 'mekanism:thermal_evaporation/valve'
            },
            {
                output: Item.of('5x mekanism:structural_glass'),
                pattern: ['CBC', 'BCB', 'CBC'],
                key: {
                    B: '#forge:plates/aluminum',
                    C: '#thermal:glass/hardened'
                },
                id: 'mekanism:structural_glass'
            },
            {
                output: 'mekanism:boiler_valve',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:boiler_casing',
                    B: 'create:copper_valve_handle',
                    C: 'create:fluid_pipe',
                    D: 'create:fluid_valve',
                    E: '#forge:circuits/elite'
                },
                id: 'mekanism:boiler_valve'
            },
            {
                output: Item.of('2x mekanism:boiler_casing'),
                pattern: ['ADA', 'BCB', 'ADA'],
                key: {
                    A: '#forge:plates/constantan',
                    B: 'pneumaticcraft:heat_pipe',
                    C: 'mekanism:steel_casing',
                    D: '#mekanism:alloys/reinforced'
                },
                id: 'mekanism:boiler_casing'
            },
            {
                output: 'mekanism:superheating_element',
                pattern: ['AAA', 'DCD', 'BDB'],
                key: {
                    A: 'pneumaticcraft:heat_sink',
                    B: 'pneumaticcraft:heat_pipe',
                    C: 'immersiveengineering:alloybrick',
                    D: 'immersiveengineering:coil_mv'
                },
                id: 'mekanism:superheating_element'
            },
            {
                output: 'mekanism:pressure_disperser',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'pneumaticcraft:advanced_pressure_tube',
                    B: 'mekanism:steel_casing'
                },
                id: 'mekanism:pressure_disperser'
            },
            {
                output: Item.of('8x mekanism:dynamic_tank'),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'immersiveengineering:sheetmetal_colored_black',
                    B: '#immersiveengineering:scaffoldings/aluminum'
                },
                id: 'mekanism:dynamic_tank'
            },
            {
                output: Item.of('2x mekanismgenerators:turbine_casing'),
                pattern: ['ADA', 'BCB', 'ADA'],
                key: {
                    A: '#forge:plates/aluminum',
                    B: 'mekanism:hdpe_sheet',
                    C: 'mekanism:steel_casing',
                    D: '#mekanism:alloys/reinforced'
                },
                id: 'mekanismgenerators:turbine/casing'
            },
            {
                output: 'mekanismgenerators:turbine_valve',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanismgenerators:turbine_casing',
                    B: 'create:copper_valve_handle',
                    C: 'create:fluid_pipe',
                    D: 'create:fluid_valve',
                    E: '#forge:circuits/elite'
                },
                id: 'mekanismgenerators:turbine/valve'
            },
            {
                output: Item.of('2x mekanismgenerators:turbine_vent'),
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'mekanismgenerators:turbine_casing',
                    B: 'create:fluid_pipe',
                    C: 'engineersdecor:straight_pipe_valve'
                },
                id: 'mekanismgenerators:turbine/vent'
            },
            {
                output: 'mekanismgenerators:saturating_condenser',
                pattern: ['BAB', 'BCB', 'BBB'],
                key: {
                    A: 'pneumaticcraft:heat_sink',
                    B: 'create:fluid_pipe',
                    C: 'mekanism:steel_casing'
                },
                id: 'mekanismgenerators:saturating_condenser'
            },
            {
                output: 'mekanismgenerators:electromagnetic_coil',
                pattern: ['CAC', 'ABA', 'CAC'],
                key: {
                    A: 'immersiveengineering:coil_lv',
                    B: '#industrialforegoing:machine_frame/supreme',
                    C: 'mekanism:basic_induction_cell'
                },
                id: 'mekanismgenerators:electromagnetic_coil'
            },
            {
                output: Item.of('2x mekanism:sps_port'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'mekanism:sps_casing',
                    B: 'mekanism:ultimate_universal_cable',
                    C: 'mekanism:ultimate_pressurized_tube',
                    D: '#forge:circuits/ultimate'
                },
                id: 'mekanism:sps_port'
            },
            {
                output: 'mekanismgenerators:fission_reactor_port',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanismgenerators:fission_reactor_casing',
                    B: 'create:copper_valve_handle',
                    C: 'create:fluid_pipe',
                    D: 'create:fluid_valve',
                    E: '#forge:circuits/elite'
                },
                id: 'mekanismgenerators:fission_reactor/port'
            },
            {
                output: 'mekanism:laser',
                pattern: [' A ', 'BAB', 'CDC'],
                key: {
                    A: '#forge:gems/nitro',
                    B: '#mekanism:alloys/infused',
                    C: 'mekanism:advanced_induction_cell',
                    D: '#industrialforegoing:machine_frame/simple'
                },
                id: 'mekanism:laser'
            },
            {
                output: Item.of('2x mekanism:induction_port'),
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'mekanism:induction_casing',
                    B: '#forge:circuits/elite',
                    C: 'rftoolsbase:tablet'
                },
                id: 'mekanism:induction/port'
            },
            {
                output: 'mekanism:jetpack_armored',
                pattern: ['A A', 'BCB', ' D '],
                key: {
                    A: '#forge:gears/aluminum',
                    B: '#forge:plates/signalum',
                    C: ['mekanismtools:steel_chestplate', 'immersiveengineering:armor_steel_chest'],
                    D: 'mekanism:jetpack'
                },
                id: 'mekanism:jetpack_armored'
            },
            {
                output: 'mekanismgenerators:solar_panel',
                pattern: ['AAA', 'AAA', 'BBB'],
                key: {
                    A: 'quark:blue_framed_glass_pane',
                    B: 'powah:thermoelectric_plate'
                },
                id: 'mekanismgenerators:solar_panel'
            },
            {
                output: Item.of('2x mekanismgenerators:fusion_reactor_port'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'mekanismgenerators:fusion_reactor_frame',
                    B: 'mekanism:ultimate_universal_cable',
                    C: 'mekanism:ultimate_pressurized_tube',
                    D: '#forge:circuits/ultimate'
                },
                id: 'mekanismgenerators:reactor/port'
            },
            {
                output: 'mekanism:laser_amplifier',
                pattern: ['ABA', 'BCD', 'ABA'],
                key: {
                    A: '#mekanism:alloys/infused',
                    B: 'mekanismgenerators:laser_focus_matrix',
                    C: 'mekanism:basic_induction_cell',
                    D: industrialforegoing.laser_lens.red
                },
                id: 'mekanism:laser_amplifier'
            },
            {
                output: 'mekanismgenerators:laser_focus_matrix',
                pattern: [' B ', 'BAB', ' B '],
                key: {
                    A: 'mekanismgenerators:reactor_glass',
                    B: industrialforegoing.laser_lens.red
                },
                id: 'mekanismgenerators:laser_focus_matrix'
            },
            {
                output: 'mekanism:enrichment_chamber',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'immersiveengineering:graphite_electrode[minecraft:damage=0]',
                    B: 'minecraft:cauldron',
                    C: 'mekanism:basic_induction_cell',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: '#forge:circuits/basic',
                    F: 'rftoolspower:cell1'
                },
                id: 'mekanism:enrichment_chamber'
            },
            {
                output: 'mekanism:energized_smelter',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'immersiveengineering:blastbrick_reinforced',
                    B: 'minecraft:cauldron',
                    C: 'immersiveengineering:coil_hv',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: '#forge:circuits/basic',
                    F: 'rftoolspower:cell1'
                },
                id: 'mekanism:energized_smelter'
            },
            {
                output: 'mekanism:precision_sawmill',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'create:rotation_speed_controller',
                    B: 'immersiveengineering:rockcutter',
                    C: 'immersiveengineering:heavy_engineering',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: '#forge:circuits/basic',
                    F: 'rftoolspower:cell1'
                },
                id: 'mekanism:precision_sawmill'
            },
            {
                output: 'mekanism:nutritional_liquifier',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'immersiveengineering:steel_wallmount',
                    B: 'immersiveengineering:turntable',
                    C: 'mekanism:advanced_chemical_tank',
                    D: '#industrialforegoing:machine_frame/simple',
                    E: '#forge:circuits/basic',
                    F: 'rftoolspower:cell1'
                },
                id: 'mekanism:nutritional_liquifier'
            },
            {
                output: 'mekanism:electric_pump',
                pattern: ['ABC', 'ADC', 'AEC'],
                key: {
                    A: 'mekanism:dynamic_tank',
                    B: 'create:mechanical_pump',
                    C: 'create:fluid_pipe',
                    D: 'supplementaries:cog_block',
                    E: 'immersiveengineering:turntable'
                },
                id: 'mekanism:electric_pump'
            },
            {
                output: 'mekanism:fluidic_plenisher',
                pattern: ['AEC', 'ADC', 'ABC'],
                key: {
                    A: 'mekanism:dynamic_tank',
                    B: 'create:mechanical_pump',
                    C: 'create:fluid_pipe',
                    D: 'supplementaries:cog_block',
                    E: 'immersiveengineering:turntable'
                },
                id: 'mekanism:fluidic_plenisher'
            },
            {
                output: 'mekanism:chemical_injection_chamber',
                pattern: ['ABB', 'CDG', 'EFE'],
                key: {
                    A: 'immersiveengineering:toolupgrade_chemthrower_focus',
                    B: 'mekanism:advanced_pressurized_tube',
                    C: 'create:basin',
                    D: '#industrialforegoing:machine_frame/advanced',
                    E: '#forge:circuits/advanced',
                    F: 'rftoolspower:cell2',
                    G: 'mekanism:advanced_chemical_tank'
                },
                id: 'mekanism:chemical_injection_chamber'
            },
            {
                output: 'mekanism:chemical_crystallizer',
                pattern: ['ABC', 'DEF', 'GHG'],
                key: {
                    A: 'mekanism:advanced_pressurized_tube',
                    B: 'mekanismgenerators:saturating_condenser',
                    C: 'create:basin',
                    D: 'mekanism:advanced_chemical_tank',
                    E: '#industrialforegoing:machine_frame/advanced',
                    F: 'thermal:machine_chiller',
                    G: '#forge:circuits/advanced',
                    H: 'rftoolspower:cell2'
                },
                id: 'mekanism:chemical_crystallizer'
            },
            {
                output: 'mekanism:isotopic_centrifuge',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'resourcefulbees:elite_centrifuge_casing',
                    B: 'mekanism:elite_chemical_tank',
                    C: 'mekanismgenerators:reactor_glass',
                    D: 'resourcefulbees:elite_centrifuge_controller',
                    E: '#forge:circuits/elite',
                    F: 'rftoolspower:cell3'
                },
                id: 'mekanism:isotopic_centrifuge'
            },
            {
                output: 'mekanism:chemical_oxidizer',
                pattern: ['ABC', 'DEC', 'FGF'],
                key: {
                    A: 'mekanism:elite_mechanical_pipe',
                    B: 'mekanism:electrolytic_separator',
                    C: 'mekanism:elite_pressurized_tube',
                    D: 'thermal:device_water_gen',
                    E: 'mekanism:chemical_injection_chamber',
                    F: '#forge:circuits/elite',
                    G: 'rftoolspower:cell3'
                },
                id: 'mekanism:chemical_oxidizer'
            },
            {
                output: 'mekanism:chemical_infuser',
                pattern: ['ABA', 'BCB', 'DED'],
                key: {
                    A: 'rftoolspower:blazing_agitator',
                    B: 'mekanism:elite_chemical_tank',
                    C: '#industrialforegoing:machine_frame/advanced',
                    D: '#forge:circuits/elite',
                    E: 'rftoolspower:cell3'
                },
                id: 'mekanism:chemical_infuser'
            },
            {
                output: 'mekanism:chemical_dissolution_chamber',
                pattern: ['ABB', 'CDB', 'EFE'],
                key: {
                    A: 'mekanism:elite_chemical_tank',
                    B: 'mekanism:elite_pressurized_tube',
                    C: 'industrialforegoing:dissolution_chamber',
                    D: '#industrialforegoing:machine_frame/advanced',
                    E: '#forge:circuits/elite',
                    F: 'rftoolspower:cell3'
                },
                id: 'mekanism:chemical_dissolution_chamber'
            },
            {
                output: 'mekanism:chemical_washer',
                pattern: ['ABB', 'CDA', 'EFE'],
                key: {
                    A: 'mekanism:elite_chemical_tank',
                    B: 'mekanism:elite_pressurized_tube',
                    C: 'mekanism:elite_fluid_tank',
                    D: '#industrialforegoing:machine_frame/supreme',
                    E: '#forge:circuits/elite',
                    F: 'mekanism:elite_induction_provider'
                },
                id: 'mekanism:chemical_washer'
            },
            {
                output: 'mekanism:antiprotonic_nucleosynthesizer',
                pattern: ['ABA', 'CDC', 'EBE'],
                key: {
                    A: '#forge:pellets/antimatter',
                    B: '#forge:circuits/ultimate',
                    C: 'mekanism:supercharged_coil',
                    D: 'mekanism:sps_casing',
                    E: 'mekanism:ultimate_induction_provider'
                },
                id: 'mekanism:antiprotonic_nucleosynthesizer'
            },
            {
                output: 'mekanismgenerators:heat_generator',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'immersiveengineering:blastbrick_reinforced',
                    B: 'powah:thermoelectric_plate',
                    C: 'minecraft:blast_furnace'
                },
                id: 'mekanismgenerators:generator/heat'
            },
            {
                output: 'mekanism:free_runners',
                pattern: ['ABA', 'CDC', 'EFE'],
                key: {
                    A: 'create:precision_mechanism',
                    B: 'immersiveengineering:capacitor_lv',
                    C: '#forge:gears/bronze',
                    D: 'immersiveengineering:toolupgrade_drill_lube',
                    E: 'immersiveengineering:component_steel',
                    F: 'immersiveengineering:armor_faraday_feet'
                },
                id: 'mekanism:free_runners'
            },
            {
                output: 'mekanism:electric_bow',
                pattern: [' BC', 'A C', ' BC'],
                key: {
                    A: 'powah:dielectric_rod',
                    B: 'powah:capacitor_hardened',
                    C: '#forge:wires/aluminum'
                },
                id: 'mekanism:electric_bow'
            },
            {
                output: Item.of('8x mekanism:crafting_formula'),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:paper',
                    B: 'create:electron_tube'
                },
                id: 'mekanism:crafting_formula'
            },
            {
                output: `mekanism:basic_bin`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:lime_terracotta',
                    B: 'minecraft:smooth_stone',
                    C: '#forge:ingots/copper'
                },
                id: `mekanism:bin/basic`
            },
            {
                output: `mekanism:advanced_bin`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:red_terracotta',
                    B: 'minecraft:smooth_stone',
                    C: '#forge:ingots/bronze'
                },
                id: `mekanism:bin/advanced`
            },
            {
                output: `mekanism:elite_bin`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:light_blue_terracotta',
                    B: 'minecraft:smooth_stone',
                    C: '#forge:ingots/brass'
                },
                id: `mekanism:bin/elite`
            },
            {
                output: `mekanism:ultimate_bin`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:blue_terracotta',
                    B: 'minecraft:smooth_stone',
                    C: '#forge:ingots/hepatizon'
                },
                id: `mekanism:bin/ultimate`
            },
            {
                output: `mekanism:logistical_sorter`,
                pattern: ['ABA', 'ACA', 'EDE'],
                key: {
                    A: 'immersiveengineering:sheetmetal_colored_black',
                    B: 'prettypipes:medium_extraction_module',
                    C: 'prettypipes:medium_filter_module',
                    D: 'prettypipes:round_robin_sorting_modifier',
                    E: '#forge:plates/iron_osmium'
                },
                id: `mekanism:logistical_sorter`
            },
            {
                output: Item.of(`8x mekanism:basic_logistical_transporter`),
                pattern: ['ABA'],
                key: {
                    A: '#forge:ingots/steel',
                    B: 'pneumaticcraft:logistics_core'
                },
                id: `mekanism:transmitter/logistical_transporter/basic`
            },
            {
                output: `mekanism:security_desk`,
                pattern: [' A ', 'BCB', 'DED'],
                key: {
                    A: 'rftoolsbase:tablet',
                    B: 'refinedstorage:security_card',
                    C: '#industrialforegoing:machine_frame/simple',
                    D: '#forge:circuits/advanced',
                    E: 'rftoolspower:cell1'
                },
                id: `mekanism:security_desk`
            },
            {
                output: `mekanism:modification_station`,
                pattern: [' A ', 'BCB', 'DED'],
                key: {
                    A: 'rftoolsbase:tablet',
                    B: 'pneumaticcraft:assembly_io_unit_import',
                    C: '#industrialforegoing:machine_frame/simple',
                    D: '#forge:circuits/advanced',
                    E: 'rftoolspower:cell1'
                },
                id: `mekanism:modification_station`
            }
        ];

        // 原普通模式中的四级储物箱配方并入专家模式。
        const binTiers = [
            { ingredient: '#forge:ingots/copper', tier: 'basic' },
            { ingredient: '#forge:dusts/redstone', tier: 'advanced' },
            { ingredient: '#forge:ingots/osmium', tier: 'elite' },
            { ingredient: '#forge:obsidian', tier: 'ultimate' }
        ];
        binTiers.forEach((bin) => {
            recipes.push({
                output: `mekanism:${bin.tier}_bin`,
                pattern: ['ABA', 'A A', 'AAA'],
                key: {
                    A: 'minecraft:smooth_stone',
                    B: bin.ingredient
                },
                id: `mekanism:bin/${bin.tier}`
            });
        });

        recipes.forEach((recipe) => {
            const key = {};
            Object.keys(recipe.key).forEach((symbol) => {
                key[symbol] = resolveMekanismIngredient(recipe.key[symbol]);
            });
            if (
                !e6eCanRegisterRecipe(
                    recipe.output,
                    Object.keys(key).map((symbol) => key[symbol])
                )
            )
                return;
            event.shaped(recipe.output, recipe.pattern, key).id(recipe.id);
        });
    });
}

// 专家模式下，缺少 Eidolon: Repraised 时启用源 normal 目录的熔炉配方。
if (!e6ePortedRecipeModLoaded('eidolon_repraised')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const recipe = {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#quark:stone_tool_materials'
            },
            id: 'minecraft:furnace'
        };

        if (e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        }
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipe = {
        output: Item.of('minecraft:stick', 16),
        pattern: ['A', 'A'],
        key: {
            A: '#minecraft:logs'
        },
        id: 'enigmatica:normal/sticks_16'
    };

    if (e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    }
});

if (['eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'minecraft:furnace',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: '#quark:stone_tool_materials',
                    B: '#minecraft:coals'
                },
                id: 'minecraft:furnace'
            },
            {
                output: 'minecraft:piston',
                pattern: ['EBE', 'ADA', 'ACA'],
                key: {
                    A: 'minecraft:smooth_stone',
                    B: ['#forge:ingots/iron', '#forge:ingots/aluminum', '#forge:ingots/copper', '#forge:ingots/tin'],
                    C: '#forge:dusts/redstone',
                    D: ['#forge:rods/iron', '#forge:rods/aluminum', '#forge:rods/copper', '#forge:rods/tin'],
                    E: '#minecraft:planks'
                },
                id: 'minecraft:piston'
            },
            {
                output: Item.of('minecraft:piston', 2),
                pattern: ['EBE', 'ADA', 'ACA'],
                key: {
                    A: 'minecraft:smooth_stone',
                    B: [
                        '#forge:ingots/silver',
                        '#forge:ingots/lead',
                        '#forge:ingots/gold',
                        '#forge:ingots/nickel',
                        '#forge:ingots/zinc'
                    ],
                    C: '#forge:dusts/redstone',
                    D: [
                        '#forge:rods/silver',
                        '#forge:rods/lead',
                        '#forge:rods/gold',
                        '#forge:rods/nickel',
                        '#forge:rods/zinc'
                    ],
                    E: '#minecraft:planks'
                },
                id: 'minecraft:piston_alternative'
            },
            {
                output: 'minecraft:observer',
                pattern: ['BBB', 'ACA', 'BBB'],
                key: {
                    A: 'create:andesite_alloy',
                    B: '#enigmatica:crafting_slabs',
                    C: 'minecraft:comparator'
                },
                id: 'minecraft:observer'
            },
            {
                output: Item.of('minecraft:blast_furnace'),
                pattern: ['DDD', 'DBD', 'ACA'],
                key: {
                    A: 'minecraft:smooth_stone',
                    B: 'minecraft:furnace',
                    C: 'minecraft:campfire',
                    D: 'minecraft:terracotta'
                },
                id: 'minecraft:blast_furnace'
            },
            {
                output: Item.of('minecraft:smoker'),
                pattern: ['DAD', 'ABA', 'DCD'],
                key: {
                    A: '#minecraft:logs',
                    B: 'minecraft:furnace',
                    C: 'minecraft:campfire',
                    D: '#forge:rods/wooden'
                },
                id: 'minecraft:smoker'
            },
            {
                output: Item.of('minecraft:red_nether_bricks'),
                pattern: ['AA', 'AA'],
                key: {
                    A: 'kubejs:red_nether_brick'
                },
                id: 'minecraft:red_nether_bricks'
            },
            {
                output: 'minecraft:enchanting_table',
                pattern: [' A ', 'BCB', 'DED'],
                key: {
                    A: 'ars_nouveau:novice_spell_book',
                    B: '#forge:gems/prismarine',
                    C: 'eidolon_repraised:stone_altar',
                    D: 'minecraft:crying_obsidian',
                    E: 'minecraft:conduit'
                },
                id: 'minecraft:enchanting_table'
            },
            {
                output: 'minecraft:brewing_stand',
                pattern: ['ABA', ' B ', 'CCC'],
                key: {
                    A: '#forge:nuggets/invar',
                    B: '#forge:rods/brass',
                    C: '#forge:ingots/pewter'
                },
                id: 'minecraft:brewing_stand'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['atum', 'bloodmagic', 'tconstruct', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'mininggadgets:upgrade_void_junk',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: 'trashcans:item_trash_can',
                    B: '#forge:circuits/basic',
                    C: '#forge:ingots/andesite_alloy',
                    D: 'mekanism:module_base'
                },
                id: 'mininggadgets:upgrade_void_junk'
            },
            {
                output: 'mininggadgets:upgrade_freezing',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: 'cookingforblockheads:preservation_chamber',
                    B: '#forge:circuits/basic',
                    C: 'powah:dry_ice',
                    D: 'mekanism:module_base'
                },
                id: 'mininggadgets:upgrade_freezing'
            },
            {
                output: 'mininggadgets:upgrade_range_1',
                pattern: ['ABA', 'ADA', 'ACA'],
                key: {
                    A: 'immersiveengineering:coil_lv',
                    B: '#forge:circuits/basic',
                    C: 'mekanism:laser_amplifier',
                    D: 'mekanism:module_base'
                },
                id: 'mininggadgets:upgrade_range_1'
            },
            {
                output: 'mininggadgets:upgrade_range_2',
                pattern: ['ABA', 'ADA', 'ACA'],
                key: {
                    A: 'immersiveengineering:coil_mv',
                    B: '#forge:circuits/advanced',
                    C: 'mekanism:laser_amplifier',
                    D: 'mininggadgets:upgrade_range_1'
                },
                id: 'mininggadgets:upgrade_range_2'
            },
            {
                output: 'mininggadgets:upgrade_range_3',
                pattern: ['ABA', 'ADA', 'ACA'],
                key: {
                    A: 'immersiveengineering:coil_hv',
                    B: '#forge:circuits/elite',
                    C: 'mekanism:laser_amplifier',
                    D: 'mininggadgets:upgrade_range_2'
                },
                id: 'mininggadgets:upgrade_range_3'
            },

            {
                output: 'mininggadgets:upgrade_battery_1',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: 'immersiveengineering:insulating_glass',
                    B: '#forge:circuits/basic',
                    C: 'mekanism:basic_energy_cube',
                    D: 'mekanism:module_base'
                },
                id: 'mininggadgets:upgrade_battery_1'
            },
            {
                output: 'mininggadgets:upgrade_battery_2',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: 'immersiveengineering:insulating_glass',
                    B: '#forge:circuits/advanced',
                    C: 'mekanism:advanced_energy_cube',
                    D: 'mininggadgets:upgrade_battery_1'
                },
                id: 'mininggadgets:upgrade_battery_2'
            },
            {
                output: 'mininggadgets:upgrade_battery_3',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: 'immersiveengineering:insulating_glass',
                    B: '#forge:circuits/elite',
                    C: 'mekanism:elite_energy_cube',
                    D: 'mininggadgets:upgrade_battery_2'
                },
                id: 'mininggadgets:upgrade_battery_3'
            },

            {
                output: 'mininggadgets:upgrade_efficiency_1',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:basic_thermodynamic_conductor',
                    B: '#forge:circuits/basic',
                    C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                    D: 'mekanism:module_base',
                    E: 'powah:energizing_rod_hardened'
                },
                id: 'mininggadgets:upgrade_efficiency_1'
            },
            {
                output: 'mininggadgets:upgrade_efficiency_2',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:advanced_thermodynamic_conductor',
                    B: '#forge:circuits/advanced',
                    C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                    D: 'mininggadgets:upgrade_efficiency_1',
                    E: 'powah:energizing_rod_blazing'
                },
                id: 'mininggadgets:upgrade_efficiency_2'
            },
            {
                output: 'mininggadgets:upgrade_efficiency_3',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:advanced_thermodynamic_conductor',
                    B: '#forge:circuits/advanced',
                    C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                    D: 'mininggadgets:upgrade_efficiency_2',
                    E: 'powah:energizing_rod_niotic'
                },
                id: 'mininggadgets:upgrade_efficiency_3'
            },
            {
                output: 'mininggadgets:upgrade_efficiency_4',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:elite_thermodynamic_conductor',
                    B: '#forge:circuits/elite',
                    C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                    D: 'mininggadgets:upgrade_efficiency_3',
                    E: 'powah:energizing_rod_spirited'
                },
                id: 'mininggadgets:upgrade_efficiency_4'
            },
            {
                output: 'mininggadgets:upgrade_efficiency_5',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: 'mekanism:elite_thermodynamic_conductor',
                    B: '#forge:circuits/elite',
                    C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                    D: 'mininggadgets:upgrade_efficiency_4',
                    E: 'powah:energizing_rod_nitro'
                },
                id: 'mininggadgets:upgrade_efficiency_5'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/modularrouters/shaped/';
        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: Item.of('4x modularrouters:speed_upgrade'),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'modularrouters:blank_upgrade',
                    B: 'pneumaticcraft:glycerol',
                    C: {
                        type: 'immersiveengineering:fluid',
                        tag: 'forge:lubricant',
                        amount: 1000
                    }
                },
                id: 'modularrouters:speed_upgrade'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['botania', 'mythicbotany'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/mythicbotany/shaped/';
        const recipes = [,];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['atum', 'botania', 'resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'naturesaura:grated_chute',
                pattern: ['A A', 'ABA', ' A '],
                key: {
                    A: 'naturesaura:infused_iron',
                    B: '#forge:chests'
                },
                id: 'naturesaura:grated_chute'
            },
            {
                output: 'naturesaura:offering_table',
                pattern: ['BAB', 'CED', 'EFE'],
                key: {
                    A: 'ars_nouveau:wilden_tribute',
                    B: 'naturesaura:infused_stone',
                    C: 'naturesaura:token_fear',
                    D: 'naturesaura:token_sorrow',
                    E: 'naturesaura:ancient_bark',
                    F: 'minecraft:conduit'
                },
                id: 'naturesaura:offering_table'
            },
            {
                output: 'naturesaura:pickup_stopper',
                pattern: ['CAC', 'CBC', 'CAC'],
                key: {
                    A: '#forge:ingots/infused_iron',
                    B: '#forge:storage_blocks/lead',
                    C: 'naturesaura:gold_brick'
                },
                id: 'naturesaura:pickup_stopper'
            },
            {
                output: 'naturesaura:hopper_upgrade',
                pattern: ['BAB', 'ACA', 'BAB'],
                key: {
                    A: '#forge:ingots/infused_iron',
                    B: '#forge:plates/lead',
                    C: 'minecraft:lodestone'
                },
                id: 'naturesaura:hopper_upgrade'
            },
            {
                output: 'naturesaura:spring',
                pattern: ['ACA', 'ABA', 'AAA'],
                key: {
                    A: '#upgrade_aquatic:coralstone/infused',
                    B: Item.of(
                        'minecraft:water_bucket',
                        '{Enchantments:[{lvl:1s,id:"minecraft:infinity"}],display:{Name:\'{"text":"#MLG-YOLO"}\'}}'
                    ).weakNBT(),
                    C: 'naturesaura:token_euphoria'
                },
                id: 'naturesaura:spring'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['atum', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const id_prefix = 'enigmatica:expert/occultism/shaped/';
        const newRecipes = [
            {
                output: 'occultism:sacrificial_bowl',
                pattern: ['ABA', 'CAC'],
                key: {
                    A: 'occultism:otherstone_slab',
                    B: '#forge:dusts/mana',
                    C: '#forge:inlays/pewter'
                },
                id: 'occultism:crafting/sacrificial_bowl'
            }
        ];

        newRecipes.forEach((recipe) => {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/pneumaticcraft/shaped';

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'kubejs:pneumatic_helmet_package',
                pattern: ['ABA', 'ACA', 'ADA'],
                key: {
                    A: 'pneumaticcraft:air_canister',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'pneumaticcraft:compressed_iron_helmet',
                    D: 'mekanism:cardboard_box'
                },
                id: 'pneumaticcraft:pneumatic_helmet'
            },
            {
                output: 'kubejs:pneumatic_chestplate_package',
                pattern: ['ABA', 'ACA', 'ADA'],
                key: {
                    A: 'pneumaticcraft:air_canister',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'pneumaticcraft:compressed_iron_chestplate',
                    D: 'mekanism:cardboard_box'
                },
                id: 'pneumaticcraft:pneumatic_chestplate'
            },
            {
                output: 'kubejs:pneumatic_leggings_package',
                pattern: ['ABA', 'ACA', 'ADA'],
                key: {
                    A: 'pneumaticcraft:air_canister',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'pneumaticcraft:compressed_iron_leggings',
                    D: 'mekanism:cardboard_box'
                },
                id: 'pneumaticcraft:pneumatic_leggings'
            },
            {
                output: 'kubejs:pneumatic_boots_package',
                pattern: ['ABA', 'ACA', ' D '],
                key: {
                    A: 'pneumaticcraft:air_canister',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'pneumaticcraft:compressed_iron_boots',
                    D: 'mekanism:cardboard_box'
                },
                id: 'pneumaticcraft:pneumatic_boots'
            },
            {
                output: 'pneumaticcraft:armor_upgrade',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#pneumaticcraft:upgrade_components',
                    B: '#mekanism:enriched/diamond',
                    C: '#forge:ingots/compressed_iron'
                },
                id: 'pneumaticcraft:armor_upgrade'
            },
            {
                output: Item.of('12x pneumaticcraft:pressure_tube'),
                pattern: ['ABA'],
                key: {
                    A: '#forge:ingots/compressed_iron',
                    B: '#thermal:glass/hardened'
                },
                id: 'pneumaticcraft:pressure_tube'
            },
            {
                output: 'pneumaticcraft:small_tank',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'create:andesite_alloy',
                    B: '#thermal:glass/hardened',
                    C: 'mekanism:basic_fluid_tank'
                },
                id: 'pneumaticcraft:small_tank'
            },
            {
                output: 'pneumaticcraft:pressure_gauge',
                pattern: ['AB ', 'BCB', ' BA'],
                key: {
                    A: 'minecraft:paper',
                    B: '#forge:nuggets/signalum',
                    C: '#forge:nuggets/iron'
                },
                id: 'pneumaticcraft:pressure_gauge'
            },
            {
                output: 'pneumaticcraft:pressure_gauge_module',
                pattern: [' A ', 'BCB'],
                key: {
                    A: 'pneumaticcraft:pressure_gauge',
                    B: '#forge:nuggets/signalum',
                    C: 'pneumaticcraft:pressure_tube'
                },
                id: 'pneumaticcraft:pressure_gauge_module'
            },
            {
                output: Item.of('pneumaticcraft:thermal_compressor'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: '#forge:ingots/compressed_iron',
                    B: 'pneumaticcraft:pressure_tube',
                    C: 'powah:thermoelectric_plate',
                    D: '#industrialforegoing:machine_frame/pity'
                },
                id: 'pneumaticcraft:thermal_compressor'
            },
            {
                output: Item.of('24x pneumaticcraft:programming_puzzle'),
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: '#pneumaticcraft:plastic_sheets',
                    B: 'pneumaticcraft:printed_circuit_board'
                },
                id: 'pneumaticcraft:programming_puzzle'
            },
            {
                output: 'pneumaticcraft:refinery',
                pattern: ['ADA', 'BCB', 'ABA'],
                key: {
                    A: 'pneumaticcraft:reinforced_bricks',
                    B: 'mekanism:superheating_element',
                    C: 'mekanism:dynamic_tank',
                    D: 'mekanism:basic_mechanical_pipe'
                },
                id: 'pneumaticcraft:refinery'
            },
            {
                output: 'pneumaticcraft:refinery_output',
                pattern: ['ABA', 'ACA', 'ABA'],
                key: {
                    A: 'pneumaticcraft:reinforced_bricks',
                    B: 'mekanism:basic_mechanical_pipe',
                    C: 'mekanism:dynamic_tank'
                },
                id: 'pneumaticcraft:refinery_output'
            },
            {
                output: 'pneumaticcraft:jet_boots_upgrade_1',
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'pneumaticcraft:upgrade_matrix',
                    B: 'pneumaticcraft:advanced_pressure_tube',
                    C: 'pneumaticcraft:vortex_cannon',
                    D: 'pneumaticcraft:pressure_chamber_valve'
                },
                id: 'pneumaticcraft:jet_boots_upgrade_1'
            },
            {
                output: 'pneumaticcraft:spawner_core_shell',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'kubejs:dimensional_storage_crystal',
                    B: 'pneumaticcraft:pressure_chamber_glass',
                    C: 'naturesaura:calling_spirit'
                },
                id: 'pneumaticcraft:spawner_core_shell'
            },
            {
                output: Item.of('6x pneumaticcraft:heat_pipe'),
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'pneumaticcraft:thermal_lagging',
                    B: '#forge:storage_blocks/compressed_iron',
                    C: '#forge:storage_blocks/copper'
                },
                id: 'pneumaticcraft:heat_pipe'
            },
            {
                output: Item.of('4x pneumaticcraft:speed_upgrade'),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'pneumaticcraft:upgrade_matrix',
                    B: 'pneumaticcraft:glycerol',
                    C: {
                        type: 'immersiveengineering:fluid',
                        tag: 'forge:lubricant',
                        amount: 1000
                    }
                },
                id: 'pneumaticcraft:speed_upgrade_from_glycerol'
            },
            {
                output: Item.of('4x pneumaticcraft:volume_upgrade'),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'pneumaticcraft:upgrade_matrix',
                    B: 'pneumaticcraft:air_canister',
                    C: '#thermal:glass/hardened'
                },
                id: 'pneumaticcraft:volume_upgrade'
            },
            {
                output: Item.of('pneumaticcraft:vacuum_pump'),
                pattern: ['AEA', 'CBC', 'DFD'],
                key: {
                    A: 'pneumaticcraft:pressure_gauge',
                    B: 'pneumaticcraft:turbine_rotor',
                    C: 'pneumaticcraft:pressure_tube',
                    D: 'pneumaticcraft:reinforced_stone_slab',
                    E: 'pneumaticcraft:pressure_chamber_glass',
                    F: 'create:brass_casing'
                },
                id: 'pneumaticcraft:vacuum_pump'
            },
            {
                output: 'pneumaticcraft:night_vision_upgrade',
                pattern: ['ADA', 'BCB', 'ADA'],
                key: {
                    A: 'pneumaticcraft:upgrade_matrix',
                    B: 'apotheosis:potion_charm',
                    C: 'occultism:infused_lenses',
                    D: '#forge:wires/copper'
                },
                id: 'pneumaticcraft:night_vision_upgrade'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/portality/shaped/';
        const recipes = [
            {
                output: Item.of('4x portality:frame'),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#enigmatica:stonecuttables/arcane_stone',
                    B: 'immersiveengineering:coil_lv',
                    C: 'immersiveengineering:electron_tube'
                },
                id: 'portality:frame'
            },
            {
                output: Item.of('portality:module_items'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'portality:frame',
                    B: 'immersiveengineering:sorter',
                    C: 'pneumaticcraft:logistics_core',
                    D: 'xnet:wireless_router'
                },
                id: 'portality:items_input'
            },
            {
                output: Item.of('portality:module_fluids'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'portality:frame',
                    B: 'immersiveengineering:fluid_sorter',
                    C: 'pneumaticcraft:logistics_core',
                    D: 'xnet:wireless_router'
                },
                id: 'portality:fluids_input'
            },
            {
                output: Item.of('portality:module_interdimensional'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'portality:frame',
                    B: 'occultism:stable_wormhole',
                    C: 'pneumaticcraft:logistics_core',
                    D: 'xnet:wireless_router'
                },
                id: 'portality:interdimensional'
            },
            {
                output: Item.of('portality:controller'),
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: 'portality:frame',
                    B: 'immersiveengineering:coil_hv',
                    C: 'immersiveengineering:current_transformer',
                    D: '#industrialforegoing:machine_frame/simple'
                },
                id: `${id_prefix}controller_alternate`
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/';
    const recipes = [
        {
            output: Item.of('powah:dielectric_rod', 8),
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel'
            },
            id: 'powah:crafting/dielectric_rod'
        },
        {
            output: Item.of('powah:dielectric_rod_horizontal', 8),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel'
            },
            id: 'powah:crafting/dielectric_rod_h'
        },
        {
            output: `powah:player_transmitter_basic`,
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'powah:player_aerial_pearl',
                B: 'powah:capacitor_basic_large',
                C: 'immersiveengineering:tesla_coil',
                D: 'powah:dielectric_casing'
            },
            id: `powah:crafting/player_tranmitter_basic`
        }
    ];

    powahTiers.forEach(function (tier, index) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }

        let wire_coil = 'immersiveengineering:coil_lv';
        if (tier == 'blazing' || tier == 'niotic') {
            wire_coil = 'immersiveengineering:coil_mv';
        } else if (tier == 'spirited' || tier == 'nitro') {
            wire_coil = 'immersiveengineering:coil_hv';
        }

        let lower_tiers = lowerTiers(powahTiers, tier);

        // 主要合成
        recipes.push(
            {
                output: `powah:furnator_${tier}`,
                pattern: ['AAA', 'BCB', 'ADA'],
                key: {
                    A: 'immersiveengineering:blastbrick_reinforced',
                    B: capacitor,
                    C: 'powah:dielectric_casing',
                    D: 'thermal:dynamo_stirling'
                },
                id: `powah:crafting/furnator_${tier}`
            },
            {
                output: `powah:magmator_${tier}`,
                pattern: ['BAB', 'CDE', 'BFB'],
                key: {
                    A: 'thermal:fluid_cell',
                    B: capacitor,
                    C: 'immersiveengineering:radiator',
                    D: 'pneumaticcraft:turbine_rotor',
                    E: wire_coil,
                    F: 'powah:dielectric_casing'
                },
                id: `powah:crafting/magmator_${tier}`
            },
            {
                output: `powah:thermo_generator_${tier}`,
                pattern: ['BAB', 'BCB', 'DDD'],
                key: {
                    A: `powah:magmator_${tier}`,
                    B: capacitor,
                    C: 'pneumaticcraft:heat_pipe',
                    D: 'powah:thermoelectric_plate'
                },
                id: `powah:crafting/thermo_generator_${tier}`
            },
            {
                output: `powah:energy_discharger_${tier}`,
                pattern: ['BAB', 'DCD', 'DBD'],
                key: {
                    A: `powah:energy_hopper_${tier}`,
                    B: capacitor,
                    C: `powah:energy_cell_${tier}`,
                    D: 'powah:dielectric_rod'
                },
                id: `powah:crafting/energy_discharger_${tier}`
            },
            {
                output: `powah:energy_hopper_${tier}`,
                pattern: ['BDB', 'BCB', 'DAD'],
                key: {
                    A: 'thermal:rf_coil',
                    B: capacitor,
                    C: 'powah:dielectric_casing',
                    D: 'powah:dielectric_rod'
                },
                id: `powah:crafting/energy_hopper_${tier}`
            },
            {
                output: `powah:ender_cell_${tier}`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'fluxnetworks:flux_core',
                    B: capacitor,
                    C: 'fluxnetworks:flux_block'
                },
                id: `powah:crafting/ender_cell_${tier}`
            }
        );

        // 升级合成
        if (tier != 'basic') {
            recipes.push(
                {
                    output: Item.of(`powah:furnator_${tier}`),
                    pattern: ['BCB'],
                    key: {
                        B: capacitor,
                        C: lower_tiers.map((item) => `powah:furnator_${item}`).filter(e6eRecipeIngredientExists)
                    },
                    id: `${id_prefix}furnator_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:magmator_${tier}`),
                    pattern: ['BAB', 'BCB'],
                    key: {
                        A: wire_coil,
                        B: capacitor,
                        C: lower_tiers.map((item) => `powah:magmator_${item}`).filter(e6eRecipeIngredientExists)
                    },
                    id: `${id_prefix}magmator_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:thermo_generator_${tier}`),
                    pattern: ['BAB', 'BCB'],
                    key: {
                        A: `powah:magmator_${tier}`,
                        B: capacitor,
                        C: lower_tiers.map((item) => `powah:thermo_generator_${item}`).filter(e6eRecipeIngredientExists)
                    },
                    id: `${id_prefix}thermo_generator_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:energy_discharger_${tier}`),
                    pattern: ['ABA', ' C ', ' A '],
                    key: {
                        A: capacitor,
                        B: lower_tiers
                            .map((item) => `powah:energy_discharger_${item}`)
                            .filter(e6eRecipeIngredientExists),
                        C: `powah:energy_cell_${tier}`
                    },
                    id: `${id_prefix}energy_discharger_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:energy_hopper_${tier}`),
                    pattern: ['A A', 'ABA'],
                    key: {
                        A: capacitor,
                        B: lower_tiers.map((item) => `powah:energy_hopper_${item}`).filter(e6eRecipeIngredientExists)
                    },
                    id: `${id_prefix}energy_hopper_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:ender_cell_${tier}`),
                    pattern: [' A ', 'ABA', ' A '],
                    key: {
                        A: capacitor,
                        B: lower_tiers.map((item) => `powah:ender_cell_${item}`).filter(e6eRecipeIngredientExists)
                    },
                    id: `${id_prefix}ender_cell_${tier}_upgrade`
                }
            );
        }

        let previousTierRod, previousTierTransmitter;
        if (index > 1) {
            previousTierRod = `powah:energizing_rod_${powahTiers[index - 1]}`;
            previousTierTransmitter = `powah:player_transmitter_${powahTiers[index - 1]}`;

            recipes.push(
                {
                    output: `powah:player_transmitter_${tier}`,
                    pattern: ['BCB', 'BDB'],
                    key: {
                        B: capacitor,
                        C: previousTierTransmitter,
                        D: 'powah:dielectric_casing'
                    },
                    id: `powah:crafting/player_tranmitter_${tier}`
                },
                {
                    output: `powah:energizing_rod_${tier}`,
                    pattern: [' A ', 'BCB', 'BDB'],
                    key: {
                        A: 'refinedstorage:quartz_enriched_iron_block',
                        B: capacitor,
                        C: previousTierRod,
                        D: wire_coil
                    },
                    id: `powah:crafting/energizing_rod_${tier}`
                }
            );
        }
    });

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

// 中文：迁入 E6E 专家 Pretty Pipes 工作台配方；Thermal 材料映射或逐条跳过。
if (e6ePortedRecipeModLoaded('prettypipes')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        const recipes = [
            {
                output: Item.of('prettypipes:pipe', 8),
                pattern: ['CCC', 'ABA', 'CCC'],
                key: {
                    A: '#forge:plates/tin',
                    B: '#forge:glass/colorless',
                    C: 'create:shaft'
                },
                id: 'prettypipes:pipe'
            }
        ];

        const resolveExpertPrettyPipesIngredient = (ingredient) => {
            if (Array.isArray(ingredient)) {
                return ingredient.map(resolveExpertPrettyPipesIngredient).filter(e6eRecipeIngredientExists);
            }
            if (typeof ingredient !== 'string') return ingredient;

            const replacements = {
                'thermal:machine_frame': 'create:brass_casing',
                'thermal:rf_coil': 'e6e_mbd2:energy_input',
                'thermal:redstone_servo': 'e6e_mbd2:item_input',
                'thermal:charge_bench': 'e6e_mbd2:energy_output',
                'thermal:cured_rubber': 'industrialforegoing:dryrubber',
                '#thermal:glass/hardened': 'mekanism:structural_glass'
            };
            if (replacements[ingredient]) return replacements[ingredient];

            if (ingredient.startsWith('#forge:')) {
                const commonTag = '#c:' + ingredient.substring(7);
                if (e6eRecipeIngredientExists(commonTag)) return commonTag;
            }
            return ingredient;
        };

        recipes.forEach((recipe) => {
            const key = {};
            Object.keys(recipe.key).forEach((symbol) => {
                key[symbol] = resolveExpertPrettyPipesIngredient(recipe.key[symbol]);
            });
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(key))) return;
            event.shaped(recipe.output, recipe.pattern, key).id(recipe.id);
        });
    });
}

if (['refinedcrafterproxy'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/refinedcrafterproxy/shaped/';

        const recipes = [
            {
                output: 'refinedcrafterproxy:crafter_proxy_card',
                pattern: ['ABA', 'ACA', 'ADA'],
                key: {
                    A: 'refinedstorage:quartz_enriched_iron',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'refinedstorage:crafting_upgrade',
                    D: 'refinedstorage:advanced_processor'
                },
                id: `refinedcrafterproxy:crafter_proxy_card`
            }
        ];

        for (let tier of ['iron', 'gold', 'diamond', 'netherite']) {
            recipes.push({
                output: Item.of('refinedcrafterproxy:crafter_proxy', { Tier: `extrastorage_${tier}` }),
                pattern: ['CTC', 'LXR', 'CBC'],
                key: {
                    C: 'refinedstorage:quartz_enriched_iron',
                    X: `extrastorage:${tier}_crafter`,
                    L: 'refinedstorage:improved_processor',
                    R: 'rftoolscontrol:network_card',
                    T: 'extrastorage:neural_processor',
                    B: 'refinedstorage:cable'
                },
                id: `${id_prefix}${tier}_crafter_proxy`
            });
        }

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/refinedstorage/shaped/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: Item.of('8x refinedstorage:cable'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone',
                D: 'prettypipes:pipe'
            },
            id: 'refinedstorage:cable'
        },
        {
            output: Item.of('8x refinedstorage:cable'),
            pattern: ['DBD', 'ACA', 'DBD'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone',
                D: 'integrateddynamics:cable'
            },
            id: `${id_prefix}cable_alt`
        },
        {
            output: 'refinedstorage:importer',
            pattern: [' C ', 'ADB', ' C '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:destruction_core',
                D: '#xnet:connectors'
            },
            id: 'refinedstorage:importer'
        },
        {
            output: 'refinedstorage:exporter',
            pattern: [' C ', 'ADB', ' C '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:construction_core',
                D: '#xnet:connectors'
            },
            id: 'refinedstorage:exporter'
        },
        {
            output: 'refinedstorage:external_storage',
            pattern: [' C ', 'AEB', ' D '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:destruction_core',
                E: '#xnet:connectors'
            },
            id: 'refinedstorage:external_storage'
        },
        {
            output: 'refinedstorage:wireless_transmitter',
            pattern: [' AC', 'ABA', 'BA '],
            key: {
                A: '#forge:wires/aluminum',
                B: '#forge:rods/aluminum',
                C: 'refinedstorage:advanced_processor'
            },
            id: 'refinedstorage:wireless_transmitter'
        },
        {
            output: 'refinedstorage:range_upgrade',
            pattern: ['ADA', 'CBC', 'AAA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'refinedstorage:upgrade',
                C: 'refinedstorage:basic_processor',
                D: 'refinedstorage:wireless_transmitter'
            },
            id: 'refinedstorage:range_upgrade'
        },
        {
            output: Item.of('4x refinedstorage:speed_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'refinedstorage:upgrade',
                B: 'pneumaticcraft:glycerol',
                C: {
                    type: 'immersiveengineering:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'refinedstorage:speed_upgrade'
        },
        {
            output: 'refinedstorage:network_card',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'refinedstorage:upgrade',
                D: 'refinedstorage:advanced_processor'
            },
            id: 'refinedstorage:network_card'
        },
        {
            output: 'refinedstorage:network_transmitter',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolsutility:matter_transmitter',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:machine_casing',
                E: 'refinedstorage:destruction_core',
                F: '#forge:ingots/aeternium',
                G: 'kubejs:cpu_core_as_81221'
            },
            id: 'refinedstorage:network_transmitter'
        },
        {
            output: 'refinedstorage:network_receiver',
            pattern: ['FGF', 'CDE', 'ABA'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolsutility:matter_receiver',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:machine_casing',
                E: 'refinedstorage:destruction_core',
                F: '#forge:ingots/aeternium',
                G: 'kubejs:cpu_core_as_81221'
            },
            id: 'refinedstorage:network_receiver'
        },
        {
            output: 'refinedstorage:disk_drive',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:circuits/elite',
                B: 'extrastorage:neural_processor',
                C: 'immersiveengineering:logic_unit',
                D: 'refinedstorage:machine_casing'
            },
            id: `${id_prefix}disk_drive_alternate`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['resourcefulbees', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'resourcefulbees:elite_centrifuge_controller',
                pattern: ['EBE', 'CAC', 'EDE'],
                key: {
                    A: 'industrialforegoing:machine_frame_advanced',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'occultism:iesnium_ingot',
                    D: 'resourcefulbees:centrifuge_controller',
                    E: 'resourcefulbees:elite_centrifuge_casing'
                },
                id: 'resourcefulbees:elite_centrifuge_controller'
            },
            {
                //一级蜂巢升级需在开启自然灵气后解锁
                output: 'resourcefulbees:t1_hive_upgrade',
                pattern: ['ACA', 'ABA', 'ACA'],
                key: {
                    A: 'minecraft:grass',
                    B: '#minecraft:planks',
                    C: 'naturesaura:gold_powder'
                },
                id: 'resourcefulbees:t1_hive_upgrade'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// 中文：迁入 E6E 专家 RFTools 工作台配方；按目标物品和标签逐条筛选。
if (e6ePortedRecipeModLoaded('rftoolsbase')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        const recipes = [
            {
                output: 'rftoolsutility:screen_controller',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#forge:gears/signalum',
                    B: '#forge:glass/black',
                    C: 'thermal:charge_bench'
                },
                id: 'rftoolsutility:screen_controller'
            },
            {
                output: 'rftoolsutility:module_template',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#forge:gems/dimensional',
                    B: '#forge:ingots/iron_aluminum',
                    C: 'pneumaticcraft:printed_circuit_board'
                },
                id: 'rftoolsutility:module_template'
            },
            {
                output: 'rftoolsutility:matter_receiver',
                pattern: ['ABA', 'ACA', 'ADA'],
                key: {
                    A: 'portality:frame',
                    B: 'atum:yellow_stained_crystal_glass',
                    C: 'occultism:stable_wormhole',
                    D: '#industrialforegoing:machine_frame/pity'
                },
                id: 'rftoolsutility:matter_receiver'
            },
            {
                output: 'rftoolsutility:matter_transmitter',
                pattern: ['ABA', 'ACA', 'ADA'],
                key: {
                    A: 'portality:frame',
                    B: 'atum:cyan_stained_crystal_glass',
                    C: 'occultism:stable_wormhole',
                    D: '#industrialforegoing:machine_frame/pity'
                },
                id: 'rftoolsutility:matter_transmitter'
            },
            {
                output: 'rftoolsutility:dialing_device',
                pattern: ['ABA', 'ACA', 'AAA'],
                key: {
                    A: 'portality:frame',
                    B: 'portality:controller',
                    C: 'xnet:wireless_router'
                },
                id: 'rftoolsutility:dialing_device'
            },
            {
                output: 'rftoolsutility:charged_porter',
                pattern: ['EAE', 'BCB', 'EDE'],
                key: {
                    A: 'rftoolsutility:matter_beamer',
                    B: 'portality:frame',
                    C: 'rftoolsbase:tablet',
                    D: 'rftoolsutility:matter_transmitter',
                    E: 'powah:capacitor_basic_large'
                },
                id: 'rftoolsutility:charged_porter'
            },
            {
                output: 'rftoolsbuilder:shape_card_pump',
                pattern: ['ABA', 'CDC', 'AEA'],
                key: {
                    A: '#forge:dusts/redstone',
                    B: 'minecraft:water_bucket',
                    C: 'pneumaticcraft:printed_circuit_board',
                    D: 'rftoolsbuilder:shape_card_def',
                    E: 'minecraft:lava_bucket'
                },
                id: 'rftoolsbuilder:shape_card_pump'
            },
            {
                output: 'rftoolsbase:machine_infuser',
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: '#forge:gears/enderium',
                    B: 'rftoolsbase:infused_diamond',
                    C: '#forge:storage_blocks/nitro',
                    D: '#industrialforegoing:machine_frame/advanced'
                },
                id: 'rftoolsbase:machine_infuser'
            },
            {
                output: 'rftoolsbuilder:builder',
                pattern: ['ADA', 'BCB', 'ABA'],
                key: {
                    A: 'minecraft:bricks',
                    B: 'portality:frame',
                    C: '#industrialforegoing:machine_frame/pity',
                    D: 'portality:controller'
                },
                id: 'rftoolsbuilder:builder'
            },
            {
                output: 'rftoolsutility:flight_module',
                pattern: ['ABA', 'CDC', 'EFG'],
                key: {
                    A: 'alexsmobs:mysterious_worm',
                    B: 'rftoolsutility:syringe[minecraft:custom_data={mobName:"alexsmobs:warped_mosco",mobId:"alexsmobs:warped_mosco",level:10}]',
                    C: 'meetyourfight:aether_glazed_cupcake',
                    D: 'rftoolsutility:moduleplus_template',
                    E: 'rftoolsutility:syringe[minecraft:custom_data={mobName:"upgrade_aquatic:flare",mobId:"upgrade_aquatic:flare",level:10}]',
                    F: 'alexsmobs:tarantula_hawk_elytra',
                    G: 'rftoolsutility:syringe[minecraft:custom_data={mobName:"alexsmobs:void_worm",mobId:"alexsmobs:void_worm",level:10}]'
                },
                id: 'rftoolsutility:flight_module'
            },
            {
                output: 'rftoolspower:blazing_agitator',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'rftoolspower:blazing_rod',
                    B: 'powah:energizing_rod_blazing',
                    C: 'rftoolsbase:machine_base'
                },
                id: 'rftoolspower:blazing_agitator'
            },
            {
                output: 'rftoolspower:cell1',
                pattern: ['ABA', 'CDC', 'ACA'],
                key: {
                    A: 'rftoolspower:power_core1',
                    B: 'immersiveengineering:transformer_hv',
                    C: 'mekanism:basic_universal_cable',
                    D: 'rftoolsbase:machine_frame'
                },
                id: 'rftoolspower:cell1'
            },
            {
                output: 'rftoolscontrol:program_card',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'pneumaticcraft:plastic',
                    B: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                    C: 'pneumaticcraft:printed_circuit_board'
                },
                id: 'rftoolscontrol:program_card'
            },
            {
                output: 'rftoolscontrol:ram_chip',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'redstonepen:relay',
                    B: ['#forge:wires/copper', '#forge:wires/lead'],
                    C: 'immersiveengineering:circuit_board'
                },
                id: 'rftoolscontrol:ram_chip'
            },
            {
                output: 'rftoolscontrol:token',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:paper',
                    B: 'pneumaticcraft:programming_puzzle'
                },
                id: 'rftoolscontrol:token'
            },
            {
                output: 'rftoolscontrol:craftingstation',
                pattern: ['ABA', 'CDE', 'ABA'],
                key: {
                    A: 'create:mechanical_crafter',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'refinedstorage:destruction_core',
                    D: 'rftoolsbase:machine_frame',
                    E: 'refinedstorage:construction_core'
                },
                id: 'rftoolscontrol:craftingstation'
            },
            {
                output: 'rftoolscontrol:processor',
                pattern: [' A ', 'BCB', ' A '],
                key: {
                    A: 'immersiveengineering:logic_unit',
                    B: 'pneumaticcraft:smart_chest',
                    C: 'rftoolsbase:machine_frame'
                },
                id: 'rftoolscontrol:processor'
            },
            {
                output: 'rftoolscontrol:graphics_card',
                pattern: ['ABA', 'CDA', 'EEE'],
                key: {
                    A: 'pneumaticcraft:heat_sink',
                    B: 'pneumaticcraft:turbine_rotor',
                    C: 'pneumaticcraft:printed_circuit_board',
                    D: 'refinedstorage:advanced_processor',
                    E: '#forge:nuggets/copper'
                },
                id: 'rftoolscontrol:graphics_card'
            },
            {
                output: 'rftoolscontrol:network_card',
                pattern: ['ABC', 'DDD'],
                key: {
                    A: 'refinedstorage:wireless_transmitter',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'refinedstorage:advanced_processor',
                    D: '#forge:nuggets/copper'
                },
                id: 'rftoolscontrol:network_card'
            },
            {
                output: 'rftoolscontrol:network_identifier',
                pattern: ['AAA', 'A A', 'AAA'],
                key: {
                    A: 'rftoolscontrol:token'
                },
                id: 'rftoolscontrol:network_identifier'
            },
            {
                output: 'rftoolscontrol:advanced_network_card',
                pattern: ['ABC'],
                key: {
                    A: 'refinedstorage:range_upgrade',
                    B: 'rftoolscontrol:network_card',
                    C: 'extrastorage:neural_processor'
                },
                id: 'rftoolscontrol:advanced_network_card'
            },
            {
                output: 'rftoolscontrol:node',
                pattern: [' A ', 'BCB'],
                key: {
                    A: 'rftoolscontrol:network_card',
                    B: 'pneumaticcraft:printed_circuit_board',
                    C: 'rftoolsbase:machine_frame'
                },
                id: 'rftoolscontrol:node'
            },
            {
                output: 'rftoolsutility:syringe',
                pattern: ['  A', ' B ', 'C  '],
                key: {
                    A: '#forge:rods/steel',
                    B: 'minecraft:glass_bottle',
                    C: 'pneumaticcraft:plastic'
                },
                id: 'rftoolsutility:syringe'
            },
            {
                output: 'rftoolsbase:tablet',
                pattern: ['AAA', 'BCD', 'EEE'],
                key: {
                    A: 'rftoolsbase:information_screen',
                    B: 'rftoolscontrol:advanced_network_card',
                    C: 'kubejs:cpu_core_as_81221',
                    D: 'rftoolscontrol:graphics_card',
                    E: 'rftoolsbase:machine_base'
                },
                id: 'rftoolsbase:tablet'
            },
            {
                output: 'rftoolspower:dimensionalcell_simple',
                pattern: ['AEA', 'BCB', 'ADA'],
                key: {
                    A: 'rftoolspower:power_core1',
                    B: 'kubejs:dimensional_storage_crystal',
                    C: 'rftoolsbase:machine_frame',
                    D: 'powah:ender_core',
                    E: 'rftoolscontrol:advanced_network_card'
                },
                id: 'rftoolspower:dimensionalcell_simple'
            },
            {
                output: 'rftoolspower:dimensionalcell',
                pattern: ['ADA', 'BCB', 'ADA'],
                key: {
                    A: 'rftoolspower:power_core2',
                    B: 'kubejs:dimensional_storage_crystal',
                    C: 'rftoolspower:dimensionalcell_simple',
                    D: 'rftoolsbase:infused_diamond'
                },
                id: 'rftoolspower:dimensionalcell'
            },
            {
                output: 'rftoolspower:dimensionalcell_advanced',
                pattern: ['ADA', 'BCB', 'ADA'],
                key: {
                    A: 'rftoolspower:power_core3',
                    B: 'kubejs:dimensional_storage_crystal',
                    C: 'rftoolspower:dimensionalcell',
                    D: '#forge:gems/mana_diamond'
                },
                id: 'rftoolspower:dimensionalcell_advanced'
            },
            {
                output: 'rftoolsutility:crafter1',
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                    B: 'pneumaticcraft:smart_chest',
                    C: 'rftoolscontrol:craftingstation',
                    D: 'rftoolsbase:machine_frame'
                },
                id: 'rftoolsutility:crafter1'
            },
            {
                output: 'rftoolsutility:crafter2',
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                    B: 'powah:capacitor_blazing',
                    C: 'rftoolscontrol:craftingstation',
                    D: 'rftoolsutility:crafter1'
                },
                id: 'rftoolsutility:crafter2'
            },
            {
                output: 'rftoolsutility:crafter3',
                pattern: ['ABA', 'CDC', 'ABA'],
                key: {
                    A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                    B: 'powah:capacitor_nitro',
                    C: 'rftoolscontrol:craftingstation',
                    D: 'rftoolsutility:crafter2'
                },
                id: 'rftoolsutility:crafter3'
            },
            {
                output: 'rftoolsstorage:storage_module0',
                pattern: ['ADA', 'CBC', 'ADA'],
                key: {
                    A: '#thermal:glass/hardened',
                    B: 'ironchest:copper_chest',
                    C: 'buildinggadgets:construction_paste',
                    D: '#forge:gears/osmium'
                },
                id: 'rftoolsstorage:storage_module0'
            },
            {
                // 中文：后面的专家配方替换同 ID 的基础配方，只保留专家版。
                // 专家配方会替换同 ID 的基础配方，因此只注册专家版。

                output: 'rftoolsbuilder:shape_card_quarry',
                pattern: [' A ', 'BCB', 'DED'],
                key: {
                    A: 'mekanism:robit',
                    B: 'mekanism:teleportation_core',
                    C: 'rftoolsbuilder:shape_card_def',
                    D: '#forge:circuits/ultimate',
                    E: 'mekanismtools:refined_obsidian_paxel'
                },
                id: 'rftoolsbuilder:shape_card_quarry'
            }
        ];

        const resolveExpertRFToolsIngredient = (ingredient) => {
            if (Array.isArray(ingredient)) {
                return ingredient.map(resolveExpertRFToolsIngredient).filter(e6eRecipeIngredientExists);
            }
            if (typeof ingredient !== 'string') return ingredient;

            const replacements = {
                'thermal:machine_frame': 'create:brass_casing',
                'thermal:rf_coil': 'e6e_mbd2:energy_input',
                'thermal:redstone_servo': 'e6e_mbd2:item_input',
                'thermal:charge_bench': 'e6e_mbd2:energy_output',
                'thermal:cured_rubber': 'industrialforegoing:dryrubber',
                '#thermal:glass/hardened': 'mekanism:structural_glass'
            };
            if (replacements[ingredient]) return replacements[ingredient];

            if (ingredient.startsWith('#forge:')) {
                const commonTag = '#c:' + ingredient.substring(7);
                if (e6eRecipeIngredientExists(commonTag)) return commonTag;
            }
            return ingredient;
        };

        recipes.forEach((recipe) => {
            const key = {};
            Object.keys(recipe.key).forEach((symbol) => {
                key[symbol] = resolveExpertRFToolsIngredient(recipe.key[symbol]);
            });
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(key))) return;
            event.shaped(recipe.output, recipe.pattern, key).id(recipe.id);
        });
    });
}

if (['bloodmagic', 'botania', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'sophisticatedbackpacks:upgrade_base',
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: 'farmersdelight:canvas'
                },
                id: 'sophisticatedbackpacks:upgrade_base'
            },
            {
                output: 'sophisticatedbackpacks:stack_upgrade_tier_1',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#forge:ingots/pig_iron',
                    B: 'immersiveengineering:hemp_fabric',
                    C: '#sophisticatedbackpacks:upgrades/base'
                },
                id: 'sophisticatedbackpacks:stack_upgrade_tier_1'
            },
            {
                output: 'sophisticatedbackpacks:crafting_upgrade',
                pattern: ['A A', 'BDB', 'C C'],
                key: {
                    A: 'create:precision_mechanism',
                    B: 'create:crafting_blueprint',
                    C: 'minecraft:barrel',
                    D: '#sophisticatedbackpacks:upgrades/base'
                },
                id: 'sophisticatedbackpacks:crafting_upgrade'
            },
            {
                output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
                pattern: [' A ', 'BCB', 'DDD'],
                key: {
                    A: 'naturesaura:hopper_upgrade',
                    B: '#forge:gears/lumium',
                    C: '#sophisticatedbackpacks:upgrades/magnet',
                    D: 'create:electron_tube'
                },
                id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic'
            },
            {
                output: 'sophisticatedbackpacks:advanced_pickup_upgrade',
                pattern: [' A ', 'BCB', 'DDD'],
                key: {
                    A: 'naturesaura:hopper_upgrade',
                    B: '#forge:gears/lumium',
                    C: '#sophisticatedbackpacks:upgrades/pickup',
                    D: 'create:electron_tube'
                },
                id: 'sophisticatedbackpacks:advanced_pickup_upgrade'
            },
            {
                output: 'sophisticatedbackpacks:advanced_void_upgrade',
                pattern: ['EAE', 'BCB', 'DDD'],
                key: {
                    A: '#sophisticatedbackpacks:upgrades/advanced_filter',
                    B: '#forge:gears/lumium',
                    C: '#sophisticatedbackpacks:upgrades/void',
                    D: 'create:electron_tube',
                    E: 'create:precision_mechanism'
                },
                id: 'sophisticatedbackpacks:advanced_void_upgrade'
            },
            {
                output: 'sophisticatedbackpacks:tank_upgrade',
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'create:fluid_pipe',
                    B: 'create:fluid_tank',
                    C: '#sophisticatedbackpacks:upgrades/base'
                },
                id: 'sophisticatedbackpacks:tank_upgrade'
            },
            {
                output: 'sophisticatedbackpacks:everlasting_upgrade',
                pattern: ['ABA', 'CDE', 'AFA'],
                key: {
                    A: 'quark:bottled_cloud',
                    B: Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1),
                    C: Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1),
                    D: '#sophisticatedbackpacks:upgrades/base',
                    E: Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1),
                    F: Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1)
                },
                id: 'sophisticatedbackpacks:everlasting_upgrade'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

if (['pedestals', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const id_prefix = 'enigmatica:expert/storagedrawers/';
        const recipes = [
            {
                output: 'storagedrawers:iron_storage_upgrade',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: '#forge:ingots/andesite_alloy',
                    C: 'storagedrawers:obsidian_storage_upgrade'
                },
                id: 'storagedrawers:iron_storage_upgrade'
            },
            {
                output: 'storagedrawers:gold_storage_upgrade',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: '#forge:gems/blazing',
                    C: 'storagedrawers:iron_storage_upgrade'
                },
                id: 'storagedrawers:gold_storage_upgrade'
            },
            {
                output: 'storagedrawers:diamond_storage_upgrade',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: '#forge:gems/niotic',
                    C: 'storagedrawers:gold_storage_upgrade'
                },
                id: 'storagedrawers:diamond_storage_upgrade'
            },
            {
                output: 'storagedrawers:emerald_storage_upgrade',
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: '#forge:gems/spirited',
                    C: 'storagedrawers:diamond_storage_upgrade'
                },
                id: 'storagedrawers:emerald_storage_upgrade'
            },
            {
                output: Item.of('2x storagedrawers:void_upgrade'),
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'kubejs:scented_stick',
                    B: 'storagedrawers:upgrade_template',
                    C: 'trashcans:item_trash_can'
                },
                id: 'storagedrawers:void_upgrade'
            },
            {
                output: 'storagedrawers:controller',
                pattern: ['AAA', 'ABA', 'ACA'],
                key: {
                    A: '#forge:sheetmetals/aluminum',
                    B: '#storagedrawers:drawers',
                    C: 'rftoolscontrol:processor'
                },
                id: 'storagedrawers:controller'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/supplementaries/';

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'supplementaries:bellows',
            pattern: ['AAA', 'B B', 'AAA'],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:fabric_hemp'
            },
            id: 'supplementaries:bellows'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['astralsorcery', 'resourcefulbees', 'tanknull'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }
        const recipes = [
            {
                pattern: ['ABA', 'C1C', 'ABA'],
                key: {
                    A: { item: 'resourcefulbees:glowstone_honeycomb_block' },
                    B: { item: 'ars_nouveau:marvelous_clay' },
                    C: { tag: 'forge:storage_blocks/dimensional' },
                    1: { item: 'tanknull:tank_2' }
                },
                result: { item: 'tanknull:tank_3' },
                id: 'tanknull:3'
            },
            {
                pattern: ['ABA', 'C1C', 'ABA'],
                key: {
                    A: { item: 'resourcefulbees:infused_honeycomb_block' },
                    B: { item: 'ars_nouveau:mythical_clay' },
                    C: { item: 'occultism:storage_stabilizer_tier1' },
                    1: { item: 'tanknull:tank_3' }
                },
                result: { item: 'tanknull:tank_4' },
                id: 'tanknull:4'
            },
            {
                pattern: ['ABA', 'C1C', 'ABA'],
                key: {
                    A: { item: 'resourcefulbees:sky_honeycomb_block' },
                    B: { tag: 'forge:ingots/iesnium' },
                    C: { item: 'occultism:storage_stabilizer_tier2' },
                    1: { item: 'tanknull:tank_4' }
                },
                result: { item: 'tanknull:tank_5' },
                id: 'tanknull:5'
            },
            {
                pattern: ['ABA', 'C1C', 'ABA'],
                key: {
                    A: { item: 'resourcefulbees:industrious_honeycomb_block' },
                    B: { tag: 'forge:alloys/ultimate' },
                    C: { item: 'occultism:storage_stabilizer_tier3' },
                    1: { item: 'tanknull:tank_5' }
                },
                result: { item: 'tanknull:tank_6' },
                id: 'tanknull:6'
            },
            {
                pattern: ['ABA', 'C1C', 'ADA'],
                key: {
                    A: { item: 'resourcefulbees:pcbee_honeycomb_block' },
                    B: { item: 'astralsorcery:shifting_star' },
                    C: { item: 'occultism:storage_stabilizer_tier4' },
                    D: { item: 'mekanism:module_gravitational_modulating_unit' },
                    1: { item: 'tanknull:tank_6' }
                },
                result: { item: 'tanknull:tank_7' },
                id: 'tanknull:7'
            }
        ];

        recipes.forEach((recipe) => {
            recipe.type = 'tanknull:upgrade';
            event.shaped(recipe).id(recipe.id);
        });
    });
}

if (['tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'tconstruct:travelers_chestplate',
                pattern: [' A ', 'BCB'],
                key: {
                    A: '#forge:slimeball/sky',
                    B: '#forge:plates/copper',
                    C: 'minecraft:leather_chestplate[minecraft:damage=0]'
                },
                id: 'tconstruct:armor/building/travelers_chestplate'
            },
            {
                output: 'tconstruct:travelers_leggings',
                pattern: [' A ', 'BCB'],
                key: {
                    A: '#forge:slimeball/sky',
                    B: '#forge:plates/copper',
                    C: 'minecraft:leather_leggings[minecraft:damage=0]'
                },
                id: 'tconstruct:armor/building/travelers_pants'
            },
            {
                output: 'tconstruct:travelers_boots',
                pattern: [' A ', 'BCB'],
                key: {
                    A: '#forge:slimeball/sky',
                    B: '#forge:plates/copper',
                    C: 'minecraft:leather_boots[minecraft:damage=0]'
                },
                id: 'tconstruct:armor/building/travelers_boots'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'thermal:device_tree_extractor',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:andesite_casing',
                B: 'supplementaries:faucet',
                C: 'create:fluid_pipe',
                D: 'create:fluid_tank',
                E: 'create:tree_fertilizer'
            },
            id: 'thermal:device_tree_extractor'
        },
        {
            output: 'thermal:device_rock_gen',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: 'immersiveengineering:toolupgrade_drill_lube',
                B: 'immersiveengineering:rockcutter',
                C: 'minecraft:observer',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'powah:thermoelectric_plate'
            },
            id: 'thermal:device_rock_gen'
        },
        {
            output: 'thermal:device_water_gen',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:brass_casing',
                B: 'bloodmagic:reagentwater',
                C: 'create:fluid_pipe',
                D: 'create:fluid_tank',
                E: 'create:mechanical_pump'
            },
            id: 'thermal:device_water_gen'
        },
        {
            output: 'thermal:machine_chiller',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'cookingforblockheads:ice_unit',
                B: 'engineersdecor:small_freezer',
                C: 'create:propeller',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'mekanismgenerators:saturating_condenser',
                F: '#forge:circuits/basic'
            },
            id: 'thermal:machine_chiller'
        },
        {
            output: 'thermal:machine_insolator',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'architects_palette:abyssaline_lamp',
                B: '#botania:runes/midgard',
                C: '#botanypots:botany_pots/simple',
                D: '#forge:gears/lumium',
                E: '#industrialforegoing:machine_frame/supreme'
            },
            id: 'thermal:machine_insolator'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

// 专家版纳入源 normal 目录的 Torchmaster 合成配方。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            output: 'torchmaster:megatorch',
            pattern: ['AAA', 'BCB', 'DCD'],
            key: {
                A: 'torchmaster:feral_flare_lantern',
                B: '#enigmatica:crafting_materials/diamond',
                C: '#minecraft:logs',
                D: '#forge:storage_blocks/gold'
            },
            id: 'enigmatica:normal/torchmaster/shaped/megatorch'
        },
        {
            output: 'torchmaster:feral_flare_lantern',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:glass',
                C: '#forge:storage_blocks/glowstone'
            },
            id: 'enigmatica:normal/torchmaster/shaped/feral_flare_lantern'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) {
            return;
        }

        /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

        const recipes = [
            {
                output: 'xnet:antenna',
                pattern: ['ABA', 'ABA', ' B '],
                key: {
                    A: 'minecraft:iron_bars',
                    B: '#forge:rods/iron_osmium'
                },
                id: 'xnet:antenna'
            },
            {
                output: 'xnet:antenna_base',
                pattern: [' B ', ' B ', 'CAC'],
                key: {
                    A: '#forge:storage_blocks/iron_osmium',
                    B: '#forge:rods/iron_osmium',
                    C: '#forge:plates/iron_osmium'
                },
                id: 'xnet:antenna_base'
            },
            {
                output: 'xnet:antenna_base',
                pattern: [' B ', ' B ', 'CAC'],
                key: {
                    A: '#forge:storage_blocks/iron_osmium',
                    B: '#forge:rods/iron_osmium',
                    C: '#forge:plates/iron_osmium'
                },
                id: 'xnet:antenna_base'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });

        ['red', 'green', 'blue', 'yellow'].forEach((color) => {
            event
                .shaped(Item.of(`xnet:netcable_${color}`, 16), [' A ', 'ACA', 'BAB'], {
                    A: '#forge:dusts/redstone',
                    B: `thermal:${color}_rockwool`,
                    C: '#forge:ingots/signalum'
                })
                .id(`xnet:netcable_${color}`);

            event
                .shaped(Item.of(`xnet:connector_${color}`, 2), ['ADA', 'CBC', 'ADA'], {
                    A: '#forge:ingots/uranium',
                    B: `thermal:${color}_rockwool`,
                    C: '#forge:dusts/redstone',
                    D: 'minecraft:hopper'
                })
                .id(`xnet:connector_${color}`);
        });
    });
}

// 将原普通模式的材料统一配方加入专家版，并以 MBD2 热力压榨机替代热力压机。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', false, [
        'create:pressing',
        'e6e_mbd2:thermal_press',
        'immersiveengineering:crusher',
        'immersiveengineering:metal_press',
        'minecraft:blasting',
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless',
        'minecraft:smelting'
    ]);
    if (global.isExpertMode == false) return;

    const idPrefix = 'enigmatica:expert/unification/normal/';
    const hasMbd2 = e6ePortedRecipeModLoaded('e6e_mbd2');
    const hasImmersiveEngineering =
        e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
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
        if (!tag || !e6eRegisteredItemTagHasItems(tag)) return air;
        return getPreferredItemInTag(Ingredient.of(tag)).id;
    }

    function hasInputs(inputs) {
        return inputs.every((input) => input && e6eRecipeIngredientExists(input));
    }

    function addMbd2PressWithMold(output, firstInput, mold, recipeId) {
        if (!hasMbd2 || !e6ePortedItemExists(mold) || !e6eRecipeOutputExists(output) || !hasInputs([firstInput]))
            return;
        event.recipes.e6e_mbd2
            .thermal_press()
            .id(recipeId)
            .duration(100)
            .inputItems(firstInput)
            .inputItems(mold)
            .outputItems(output)
            .inputFE(2400);
    }

    function addMbd2Press(output, input, recipeId) {
        if (!hasMbd2 || !e6eRecipeOutputExists(output) || !hasInputs([input])) return;
        event.recipes.e6e_mbd2
            .thermal_press()
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
                event.recipes.immersiveengineering
                    .metal_press(gear, `4x ${materialTag}`, gearMold)
                    .id(`${idPrefix}immersiveengineering/gear/${material}`);
            }
            if (e6eRecipeIngredientExists(nuggetIronTag)) {
                event
                    .shaped(gear, [' B ', 'BAB', ' B '], { A: nuggetIronTag, B: materialTag })
                    .id(`${idPrefix}crafting/gear/${material}`);
            }
        }

        if (rod !== air && materialTag) {
            event.remove({ output: rod });
            const rodMold = 'immersiveengineering:mold_rod';
            addMbd2PressWithMold(rod, materialTag, rodMold, `${idPrefix}mbd2/press/rod/${material}`);
            if (hasImmersiveEngineering && e6ePortedItemExists(rodMold)) {
                event.recipes.immersiveengineering
                    .metal_press(rod, materialTag, rodMold)
                    .id(`${idPrefix}immersiveengineering/rod/${material}`);
            }
            event.shaped(rod, ['A', 'A'], { A: materialTag }).id(`${idPrefix}crafting/rod/${material}`);
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
                event.recipes.immersiveengineering
                    .metal_press(plate, materialTag, plateMold)
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
                event.recipes.immersiveengineering
                    .metal_press(`2x ${wire}`, materialTag, wireMold)
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
        if (
            e6ePortedRecipeModLoaded('immersiveengineering') &&
            e6ePortedRecipeModLoaded('immersive_engineering_js') &&
            ore !== air &&
            dust !== air &&
            secondary
        ) {
            const secondaryDustTag = tagFor('dusts', secondary.secondary);
            const secondaryDust = preferred(secondaryDustTag);
            const byproduct = secondaryDust !== air ? secondaryDust : dust;
            event.recipes.immersiveengineering
                .crusher(`2x ${dust}`, oreTag, [Item.of(byproduct).withChance(0.1)])
                .id(`${idPrefix}immersiveengineering/crusher/${material}`);
        }
    });
});

// 专家版材料统一与矿石加工；可选配方按目标端实际安装的模组分别注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', false, [
        'botania:mana_infusion',
        'create:pressing',
        'e6e_mbd2:thermal_press',
        'immersiveengineering:crusher',
        'immersiveengineering:metal_press',
        'interactio:item_fluid_transform',
        'interactio:item_lightning',
        'mekanism:smelting',
        'minecraft:blasting',
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless',
        'naturesaura:altar',
        'neovitae:ara_vitae_recipe'
    ]);
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/unification/unify_materials/';
    const hasMbd2 = e6ePortedRecipeModLoaded('e6e_mbd2');
    const hasImmersiveEngineering =
        e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');

    function tagFor(type, material) {
        const candidates = [`#c:${type}/${material}`, `#forge:${type}/${material}`];
        for (let i = 0; i < candidates.length; i++) {
            if (e6eRecipeIngredientExists(candidates[i])) return candidates[i];
        }
        return null;
    }

    function preferred(tag) {
        if (!tag || !e6eRegisteredItemTagHasItems(tag)) return air;
        return getPreferredItemInTag(Ingredient.of(tag)).id;
    }

    function firstExistingTag(candidates) {
        for (var i = 0; i < candidates.length; i++) {
            if (e6eRecipeIngredientExists(candidates[i])) return candidates[i];
        }
        return null;
    }

    function addMbd2ThermalPress(output, input, recipeId) {
        if (!hasMbd2 || !e6eRecipeOutputExists(output) || !e6eRecipeIngredientExists(input)) return;
        event.recipes.e6e_mbd2
            .thermal_press()
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
            ? `#create:crushed_ores/${material}`
            : null;
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

        immersiveengineering_ore_processing_with_secondary_outputs(
            event,
            material,
            ore,
            crushed_ore,
            ingot,
            oreTag,
            crushedOreTag
        );

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
            event
                .shaped(output, ['CAC', 'ABA', 'CAC'], { A: input, B: centerPlate, C: sideNuggets })
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
        const hammer = firstExistingTag([
            '#c:tools/crafting_hammer',
            '#c:tools/hammers',
            '#forge:tools/crafting_hammer'
        ]);

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

        const wireCutters = firstExistingTag([
            '#c:tools/wirecutters',
            '#c:tools/wire_cutter',
            '#forge:tools/wirecutter'
        ]);
        if (wireCutters) {
            event
                .shapeless(Item.of(output, 2), [plateTag, plateTag, wireCutters])
                .id(`${id_prefix}crafting/wire/${material}`);
        }
    }

    function immersiveengineering_ore_processing_with_secondary_outputs(
        event,
        material,
        ore,
        crushed_ore,
        ingot,
        oreTag,
        crushedOreTag
    ) {
        if (!hasImmersiveEngineering || !oreTag || !crushedOreTag || ore == air || crushed_ore == air || ingot == air) {
            return;
        }

        var primaryOutput = crushed_ore,
            input = oreTag,
            materialProperties = oreProcessingSecondaries[material];
        if (!materialProperties) return;

        secondaryOutput = preferred(`#create:crushed_ores/${materialProperties.secondary}`);
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
        if (
            !e6ePortedRecipeModLoaded('botania') ||
            !e6ePortedRecipeModLoaded('interactio') ||
            !e6ePortedRecipeModLoaded('naturesaura') ||
            !e6ePortedRecipeModLoaded('neovitae')
        )
            return;
        if (
            !oreTag ||
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

        secondary_fulminated_cluster = preferred(
            `#enigmatica:fulminated_clusters/${oreProcessingSecondaries[material].secondary}`
        );
        if (secondary_fulminated_cluster == air) {
            secondary_fulminated_cluster = preferred(`#mekanism:fulminated_clusters/${material}`);
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
        event.recipes.neovitae
            .ara_vitae_recipe(fusing_input, Item.of(nugget), 4, 18, 18, 9)
            .id(`enigmatica:expert/magical_ore_processing/blood/${material}`);
    }
});

// 将原普通版 Botany Pots 工作台配方纳入专家版。
if (e6ePortedRecipeModLoaded('botanypots')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const recipes = [];

        colors.forEach((color) => {
            recipes.push({
                output: `botanypots:${color}_botany_pot`,
                pattern: ['ADA', 'ABA', 'ACA'],
                key: {
                    A: `minecraft:${color}_terracotta`,
                    B: 'minecraft:flower_pot',
                    C: 'minecraft:bone_block',
                    D: 'minecraft:water_bucket'
                },
                id: `botanypots:crafting/${color}_botany_pot`
            });
        });

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });

        colors.forEach((color) => {
            event.remove({ id: `botanypots:crafting/compact_hopper_${color}_botany_pot` });
        });
    });
}

// ===== 专家模式继承的普通配方 =====
// 专家模式也包含普通模式的有序合成配方。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const idPrefix = 'enigmatica:normal/enigmatica/';
    const recipes = [];

    // 原文件为每个非入门级 Powah 等级添加 8 条有序合成：5 个等级共 40 条原配方。
    // 源文件为 starter/basic 以外的每个 Powah 阶级添加八种有序合成：五阶各八种，共 40 条源配方。
    powahTiers.forEach((tier) => {
        if (tier === 'starter' || tier === 'basic') return;

        let crystal = `powah:crystal_${tier}`;
        if (tier === 'hardened') crystal = 'powah:steel_energized';

        const lower = lowerTiers(powahTiers, tier);
        const lowerIngredient = (itemPrefix) => {
            const available = lower.map((lowerTier) => `${itemPrefix}${lowerTier}`);
            return available.length ? Ingredient.of(available) : null;
        };

        const lowerRods = lowerIngredient('powah:energizing_rod_');
        const lowerFurnators = lowerIngredient('powah:furnator_');
        const lowerMagmators = lowerIngredient('powah:magmator_');
        const lowerThermoGenerators = lowerIngredient('powah:thermo_generator_');
        const lowerHoppers = lowerIngredient('powah:energy_hopper_');
        const lowerDischargers = lowerIngredient('powah:energy_discharger_');
        const lowerGates = lowerIngredient('powah:ender_gate_');
        const lowerReactors = lowerIngredient('powah:reactor_');

        recipes.push(
            {
                output: `powah:energizing_rod_${tier}`,
                pattern: ['   ', 'ACA', ' B '],
                key: { A: `powah:capacitor_${tier}`, B: `powah:energy_cable_${tier}`, C: lowerRods },
                id: `${idPrefix}powah/energizing_rod_${tier}`
            },
            {
                output: `powah:furnator_${tier}`,
                pattern: ['AAA', 'BCB', 'A A'],
                key: { A: crystal, B: `powah:capacitor_${tier}`, C: lowerFurnators },
                id: `${idPrefix}powah/furnator_${tier}`
            },
            {
                output: `powah:magmator_${tier}`,
                pattern: ['AAA', 'BCB', 'A A'],
                key: { A: crystal, B: `powah:capacitor_${tier}`, C: lowerMagmators },
                id: `${idPrefix}powah/magmator_${tier}`
            },
            {
                output: `powah:thermo_generator_${tier}`,
                pattern: [' A ', 'BCB'],
                key: { A: crystal, B: `powah:capacitor_${tier}`, C: lowerThermoGenerators },
                id: `${idPrefix}powah/thermo_generator_${tier}`
            },
            {
                output: `powah:energy_hopper_${tier}`,
                pattern: ['ABA'],
                key: { A: `powah:capacitor_${tier}`, B: lowerHoppers },
                id: `${idPrefix}powah/energy_hopper_${tier}`
            },
            {
                output: `powah:energy_discharger_${tier}`,
                pattern: [' A ', ' B ', ' A '],
                key: { A: `powah:capacitor_${tier}`, B: lowerDischargers },
                id: `${idPrefix}powah/energy_discharger_${tier}`
            },
            {
                output: `powah:ender_gate_${tier}`,
                count: 4,
                pattern: ['BAB', 'A A', 'BAB'],
                key: { A: `powah:energy_cable_${tier}`, B: lowerGates },
                id: `${idPrefix}powah/ender_gate_${tier}`
            },
            {
                output: `powah:reactor_${tier}`,
                count: 4,
                pattern: ['BAB', 'A A', 'BAB'],
                key: { A: `powah:capacitor_${tier}`, B: lowerReactors },
                id: `${idPrefix}powah/reactor_${tier}`
            }
        );
    });

    // 每种受支持木材保留原版的六条储物抽屉配方。
    // 保留源文件中每种可用木材对应的六条 Storage Drawers 配方。
    // 原箱子标签缩小为原版箱子，避免 NeoForge 1.21.1 中旧 Forge 标签为空时配方不可用。
    // 将源文件的箱子标签收窄为原版箱子，避免旧 Forge 标签在 NeoForge 1.21.1 中为空时无法使用。
    const duplicateWoodTypes = [
        'palo_verde',
        'withering_oak',
        'blue_archwood',
        'green_archwood',
        'purple_archwood',
        'menril_filled',
        'watchful_aspen',
        'crustose',
        'sappy_maple',
        'avocado'
    ];

    buildWoodVariants.forEach((wood) => {
        if (wood.modId === 'minecraft' || duplicateWoodTypes.includes(wood.logType)) return;

        recipes.push(
            {
                output: 'storagedrawers:oak_full_drawers_1',
                pattern: ['AAA', ' C ', 'AAA'],
                key: { A: wood.plankBlock, C: 'minecraft:chest' },
                id: `${idPrefix}wood/${wood.modId}/oak_full_drawers_1_from_${wood.logType}_planks`
            },
            {
                output: 'storagedrawers:oak_full_drawers_2',
                count: 2,
                pattern: ['ACA', 'AAA', 'ACA'],
                key: { A: wood.plankBlock, C: 'minecraft:chest' },
                id: `${idPrefix}wood/${wood.modId}/oak_full_drawers_2_from_${wood.logType}_planks`
            },
            {
                output: 'storagedrawers:oak_full_drawers_4',
                count: 4,
                pattern: ['CAC', 'AAA', 'CAC'],
                key: { A: wood.plankBlock, C: 'minecraft:chest' },
                id: `${idPrefix}wood/${wood.modId}/oak_full_drawers_4_from_${wood.logType}_planks`
            },
            {
                output: 'storagedrawers:oak_half_drawers_1',
                pattern: ['AAA', ' C ', 'AAA'],
                key: { A: wood.slabBlock, C: 'minecraft:chest' },
                id: `${idPrefix}wood/${wood.modId}/oak_half_drawers_1_from_${wood.logType}_slab`
            },
            {
                output: 'storagedrawers:oak_half_drawers_2',
                count: 2,
                pattern: ['ACA', 'AAA', 'ACA'],
                key: { A: wood.slabBlock, C: 'minecraft:chest' },
                id: `${idPrefix}wood/${wood.modId}/oak_half_drawers_2_from_${wood.logType}_slab`
            },
            {
                output: 'storagedrawers:oak_half_drawers_4',
                count: 4,
                pattern: ['CAC', 'AAA', 'CAC'],
                key: { A: wood.slabBlock, C: 'minecraft:chest' },
                id: `${idPrefix}wood/${wood.modId}/oak_half_drawers_4_from_${wood.logType}_slab`
            }
        );
    });

    recipes.forEach((recipe) => {
        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(Item.of(recipe.output, recipe.count || 1), recipe.pattern, recipe.key).id(recipe.id);
    });
});

// 将原普通版 Flux Networks 工作台配方纳入专家版。
if (['fluxnetworks', 'powah'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const recipe = {
            output: 'fluxnetworks:flux_controller',
            count: 1,
            pattern: ['ABA', 'CDC', 'AAA'],
            key: {
                A: 'fluxnetworks:flux_block',
                B: 'fluxnetworks:flux_core',
                C: 'fluxnetworks:flux_dust',
                D: 'powah:player_transmitter_nitro'
            },
            id: 'fluxnetworks:fluxcontroller'
        };

        if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.shaped(Item.of(recipe.output, recipe.count), recipe.pattern, recipe.key).id(recipe.id);
    });
}

// 将 E6E 普通模式的 IF 配方加入专家模式。
if (e6ePortedRecipeModLoaded('industrialforegoing')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;
        const recipes = [
            {
                output: 'industrialforegoing:mob_slaughter_factory',
                pattern: ['PDP', 'SMS', 'ARA'],
                key: {
                    P: '#c:plastics',
                    D: '#c:gears/gold',
                    S: 'minecraft:iron_sword',
                    A: 'minecraft:iron_axe',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: 'minecraft:redstone'
                },
                id: 'industrialforegoing:mob_slaughter_factory'
            },
            {
                output: 'industrialforegoing:dissolution_chamber',
                pattern: ['PCP', 'BMB', 'GDG'],
                key: {
                    P: '#c:plastics',
                    C: '#c:chests/wooden',
                    B: 'minecraft:bucket',
                    M: '#industrialforegoing:machine_frame/pity',
                    G: '#c:ingots/gold',
                    D: '#c:gears/diamond'
                },
                id: 'industrialforegoing:dissolution_chamber'
            },
            {
                output: 'industrialforegoing:animal_baby_separator',
                pattern: ['PAP', 'CMC', 'DGD'],
                key: {
                    P: '#c:plastics',
                    A: 'minecraft:golden_carrot',
                    C: 'minecraft:wheat',
                    G: '#c:gears/gold',
                    D: '#c:dyes/purple',
                    M: '#industrialforegoing:machine_frame/pity'
                },
                id: 'industrialforegoing:animal_baby_separator'
            },
            {
                output: 'industrialforegoing:animal_rancher',
                pattern: ['PPP', 'SBS', 'GMG'],
                key: {
                    P: '#c:plastics',
                    G: '#c:gears/gold',
                    S: 'minecraft:shears',
                    B: 'minecraft:bucket',
                    M: '#industrialforegoing:machine_frame/pity'
                },
                id: 'industrialforegoing:animal_rancher'
            },
            {
                output: 'industrialforegoing:block_breaker',
                pattern: ['PGP', 'IMD', 'SRS'],
                key: {
                    P: '#c:plastics',
                    I: 'minecraft:iron_pickaxe',
                    D: 'minecraft:iron_shovel',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: 'minecraft:redstone',
                    G: '#c:gears/gold',
                    S: '#c:gears/iron'
                },
                id: 'industrialforegoing:block_breaker'
            },
            {
                output: 'industrialforegoing:fluid_extractor',
                pattern: ['IGI', 'CMC', 'IPI'],
                key: {
                    I: '#c:ingots/iron',
                    G: 'minecraft:light_weighted_pressure_plate',
                    C: '#c:cobblestones',
                    M: '#industrialforegoing:machine_frame/pity',
                    P: 'minecraft:piston'
                },
                id: 'industrialforegoing:fluid_extractor'
            },
            {
                output: 'industrialforegoing:laser_drill',
                pattern: ['pfp', 'bmb', 'grg'],
                key: {
                    p: '#c:plastics',
                    f: '#c:gears/diamond',
                    b: 'minecraft:piston',
                    m: '#industrialforegoing:machine_frame/simple',
                    g: '#c:gears/diamond',
                    r: 'minecraft:redstone'
                },
                id: 'industrialforegoing:laser_drill'
            },
            {
                output: 'industrialforegoing:latex_processing_unit',
                pattern: ['IGI', 'BMB', 'IFI'],
                key: {
                    I: '#c:ingots/iron',
                    G: '#c:storage_blocks/redstone',
                    B: 'minecraft:bucket',
                    M: '#industrialforegoing:machine_frame/pity',
                    F: 'minecraft:furnace'
                },
                id: 'industrialforegoing:latex_processing_unit'
            },
            {
                output: 'industrialforegoing:machine_frame_pity',
                pattern: ['WIW', 'IRI', 'WIW'],
                key: {
                    W: '#minecraft:logs',
                    I: '#c:ingots/iron',
                    R: '#c:storage_blocks/redstone'
                },
                id: 'industrialforegoing:machine_frame_pity'
            },
            {
                output: 'industrialforegoing:marine_fisher',
                pattern: ['pfp', 'bmb', 'grg'],
                key: {
                    p: '#c:plastics',
                    f: 'minecraft:fishing_rod',
                    b: 'minecraft:bucket',
                    m: '#industrialforegoing:machine_frame/simple',
                    g: '#c:gears/iron',
                    r: 'minecraft:redstone'
                },
                id: 'industrialforegoing:marine_fisher'
            },
            {
                output: 'industrialforegoing:material_stonework_factory',
                pattern: ['pcp', 'gmf', 'aba'],
                key: {
                    p: '#c:plastics',
                    c: 'minecraft:crafting_table',
                    g: 'minecraft:diamond_pickaxe',
                    m: '#industrialforegoing:machine_frame/advanced',
                    f: 'minecraft:furnace',
                    a: '#c:gears/gold',
                    b: 'industrialforegoing:pink_slime'
                },
                id: 'industrialforegoing:material_stonework_factory'
            },
            {
                output: 'industrialforegoing:mob_crusher',
                pattern: ['PSP', 'BMB', 'GRG'],
                key: {
                    P: '#c:plastics',
                    S: 'minecraft:iron_sword',
                    B: 'minecraft:book',
                    M: '#industrialforegoing:machine_frame/advanced',
                    R: 'minecraft:redstone',
                    G: '#c:gears/gold'
                },
                id: 'industrialforegoing:mob_crusher'
            },
            {
                output: 'industrialforegoing:plant_fertilizer',
                pattern: ['PBP', 'LML', 'GRG'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:glass_bottle',
                    L: 'minecraft:leather',
                    M: '#industrialforegoing:machine_frame/simple',
                    R: 'minecraft:redstone',
                    G: '#c:gears/iron'
                },
                id: 'industrialforegoing:plant_fertilizer'
            },
            {
                output: 'industrialforegoing:plant_gatherer',
                pattern: ['PHP', 'AMA', 'GRG'],
                key: {
                    P: '#c:plastics',
                    H: 'minecraft:iron_hoe',
                    A: 'minecraft:iron_axe',
                    M: '#industrialforegoing:machine_frame/pity',
                    G: '#c:gears/gold',
                    R: 'minecraft:redstone'
                },
                id: 'industrialforegoing:plant_gatherer'
            },
            {
                output: 'industrialforegoing:plant_sower',
                pattern: ['PBP', 'LML', 'GRG'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:flower_pot',
                    L: 'minecraft:piston',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: 'minecraft:redstone',
                    G: '#c:gears/iron'
                },
                id: 'industrialforegoing:plant_sower'
            },
            {
                output: 'industrialforegoing:sewage_composter',
                pattern: ['PFP', 'DMD', 'BGB'],
                key: {
                    P: '#c:plastics',
                    F: 'minecraft:furnace',
                    D: 'minecraft:piston',
                    B: 'minecraft:brick',
                    M: '#industrialforegoing:machine_frame/pity',
                    G: '#c:gears/iron'
                },
                id: 'industrialforegoing:sewage_composter'
            },
            {
                output: 'industrialforegoing:sewer',
                pattern: ['PEP', 'BMB', 'BGB'],
                key: {
                    P: '#c:plastics',
                    E: 'minecraft:bucket',
                    B: 'minecraft:brick',
                    M: '#industrialforegoing:machine_frame/pity',
                    G: '#c:gears/iron'
                },
                id: 'industrialforegoing:sewer'
            },
            {
                output: 'industrialforegoing:sludge_refiner',
                pattern: ['PBP', 'LML', 'GRG'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:bucket',
                    L: 'minecraft:furnace',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: '#c:gears/gold',
                    G: '#c:gears/iron'
                },
                id: 'industrialforegoing:sludge_refiner'
            },
            {
                output: 'industrialforegoing:spores_recreator',
                pattern: ['PSP', 'IMI', 'PSP'],
                key: {
                    P: '#c:plastics',
                    I: '#c:mushrooms',
                    M: '#industrialforegoing:machine_frame/pity',
                    S: '#c:gears/iron'
                },
                id: 'industrialforegoing:spores_recreator'
            },
            {
                output: 'industrialforegoing:stasis_chamber',
                pattern: ['sss', 'gmg', 'ipi'],
                key: {
                    s: 'minecraft:soul_sand',
                    g: 'minecraft:ghast_tear',
                    m: '#industrialforegoing:machine_frame/advanced',
                    i: '#c:gears/gold',
                    p: 'minecraft:piston'
                },
                id: 'industrialforegoing:stasis_chamber'
            },
            {
                output: 'industrialforegoing:water_condensator',
                pattern: ['PBP', 'LML', 'GRG'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:bucket',
                    L: 'minecraft:piston',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: 'minecraft:redstone',
                    G: '#c:gears/iron'
                },
                id: 'industrialforegoing:water_condensator'
            },
            {
                output: 'industrialforegoing:fluid_placer',
                pattern: ['PBP', 'BMB', 'SRS'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:bucket',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: 'minecraft:redstone',
                    S: '#c:gears/iron'
                },
                id: 'industrialforegoing:fluid_placer'
            },
            {
                output: 'industrialforegoing:fluid_collector',
                pattern: ['PBP', 'BMB', 'SRS'],
                key: {
                    P: '#c:plastics',
                    B: 'minecraft:bucket',
                    M: '#industrialforegoing:machine_frame/pity',
                    R: 'minecraft:redstone',
                    S: '#c:gears/iron'
                },
                id: 'industrialforegoing:fluid_collector'
            }
        ];
        recipes.forEach((recipe) => {
            if (!e6ePortedItemExists(recipe.output)) return;
            if (!Object.values(recipe.key).every((input) => e6eRecipeIngredientExists(input))) return;
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        });
    });
}

// 将 E6E 普通目录的恶魔石配方映射到 NeoVitae，供专家模式使用。
if (e6ePortedRecipeModLoaded('neovitae')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;
        if (!e6ePortedItemExists('neovitae:dungeon_stone') || !e6ePortedItemExists('neovitae:raw_crystal_shard'))
            return;

        event
            .shaped(Item.of('neovitae:dungeon_stone', 8), ['AAA', 'ABA', 'AAA'], {
                A: '#forge:stone',
                B: '#neovitae:crystals/demon'
            })
            .id('enigmatica:normal/neovitae/shaped/dungeon_stone');
    });
}

// 将原普通版 Powah 能量线缆与末影单元升级配方纳入专家版。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [];
    powahTiers.forEach((tier) => {
        let crystal = `powah:crystal_${tier}`;
        if (tier === 'starter' || tier === 'basic') return;
        if (tier === 'hardened') crystal = 'powah:steel_energized';

        const lowerTiersForUpgrade = lowerTiers(powahTiers, tier);
        const lowerCables = lowerTiersForUpgrade.map((lowerTier) => `powah:energy_cable_${lowerTier}`);
        const lowerEnderCells = lowerTiersForUpgrade.map((lowerTier) => `powah:ender_cell_${lowerTier}`);

        recipes.push(
            {
                output: `powah:energy_cable_${tier}`,
                count: 6,
                pattern: ['CCC', 'BAB', 'CCC'],
                key: {
                    A: `powah:capacitor_${tier}`,
                    B: lowerCables,
                    C: 'powah:dielectric_rod_horizontal'
                },
                id: `powah:crafting/cable_${tier}`
            },
            {
                output: `powah:ender_cell_${tier}`,
                count: 1,
                pattern: [' A ', 'ABA', ' A '],
                key: { A: crystal, B: lowerEnderCells },
                id: `enigmatica:normal/powah/shaped/ender_cell_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(Item.of(recipe.output, recipe.count), recipe.pattern, recipe.key).id(recipe.id);
    });
});

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', false, [
        'bloodmagic:altar',
        'bloodmagic:arc',
        'botania:mana_infusion',
        'botania:terra_plate',
        'create:blockzapper_upgrade',
        'create:crushing',
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless',
        'minecraft:stonecutting',
        'mythicbotany:infusion',
        'naturesaura:altar',
        'occultism:crushing',
        'occultism:spirit_trade',
        'resourcefulbees:hive_upgrade_recipe'
    ]);

    // 自然灵气祭坛：用当前物品堆 JSON 格式保留原配方消耗与产物。
    if (
        e6ePortedRecipeModLoaded('kubejs_naturesaura') &&
        e6ePortedItemExists('compactmachines:wall') &&
        e6eRecipeIngredientExists('#c:ingots/enderium')
    ) {
        event
            .custom({
                type: 'naturesaura:altar',
                input: { tag: 'c:ingots/enderium' },
                output: { id: 'compactmachines:wall', count: 32 },
                aura_type: 'naturesaura:overworld',
                aura: 15000,
                time: 100
            })
            .id('enigmatica:normal/naturesaura/altar/compactmachines_wall');
    }

    // 神秘学配方替换旧 BYG 黑沙产物；目标命名空间为 Biomes We've Gone。
    if (e6ePortedRecipeModLoaded('occultism') && e6ePortedItemExists('biomeswevegone:black_sand')) {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: { item: 'minecraft:basalt' },
                result: { type: 'occultism:item', item: 'biomeswevegone:black_sand', count: 1 },
                crushing_time: 200,
                ignore_crushing_multiplier: true
            })
            .id('enigmatica:normal/occultism/crushing/black_sand_from_basalt');
    }

    // 当前整合包没有这个原版产物；仍将原配方保留为兼容项。
    if (e6ePortedRecipeModLoaded('emendatusenigmatica')) {
        event
            .shapeless('4x emendatusenigmatica:signalum_dust', [
                '#c:dusts/silver',
                '#c:dusts/copper',
                '#c:dusts/copper',
                '#c:dusts/copper',
                '#c:dusts/redstone',
                '#c:dusts/redstone',
                '#c:dusts/redstone',
                '#c:dusts/redstone'
            ])
            .id('emendatusenigmatica:alloy_dust/signalum');
    }

    if (e6ePortedRecipeModLoaded('atum')) {
    }

    // 将旧版紧凑机械隧道配置保留为新版自定义数据物品堆。
    if (
        e6ePortedRecipeModLoaded('compactmachines') &&
        e6ePortedRecipeModLoaded('occultism') &&
        e6ePortedItemExists('compactmachines:tunnel')
    ) {
        event
            .custom({
                type: 'minecraft:crafting_shaped',
                pattern: ['ABA', 'BCB', 'DBD'],
                key: {
                    A: { item: 'minecraft:hopper' },
                    B: { tag: 'c:gems/dimensional' },
                    C: { item: 'occultism:wormhole_frame' },
                    D: { tag: 'c:chests' }
                },
                result: {
                    id: 'compactmachines:tunnel',
                    count: 1,
                    components: { 'minecraft:custom_data': { definition: { id: 'compactmachines:item' } } }
                }
            })
            .id('compactmachines:tunnel/item');
        event
            .custom({
                type: 'minecraft:crafting_shaped',
                pattern: ['ABA', 'BCB', 'DBD'],
                key: {
                    A: { item: 'glassential:glass_redstone' },
                    B: { tag: 'c:gems/dimensional' },
                    C: { item: 'occultism:wormhole_frame' },
                    D: { item: 'minecraft:redstone_torch' }
                },
                result: {
                    id: 'compactmachines:tunnel',
                    count: 1,
                    components: { 'minecraft:custom_data': { definition: { id: 'compactmachines:redstone_in' } } }
                }
            })
            .id('compactmachines:tunnel/redstone');
    }

    if (
        e6ePortedRecipeModLoaded('refinedcrafterproxy') &&
        e6ePortedRecipeModLoaded('refinedstorage') &&
        e6ePortedRecipeModLoaded('extrastorage')
    ) {
        ['iron', 'gold', 'diamond', 'netherite'].forEach((tier) => {
            var id = `enigmatica:normal/refinedcrafterproxy/shaped/${tier}_crafter_proxy`;
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
            event
                .shaped(`resourcefulbees:${recipe.to}`, ['ACA', 'BDB', 'ACA'], {
                    A: '#resourcefulbees:resourceful_honeycomb_block',
                    B: 'resourcefulbees:t4_hive_upgrade',
                    C: `resourcefulbees:${recipe.from}`,
                    D: 'minecraft:nether_star'
                })
                .id(recipe.id);
        });

        [
            { from: 't1_apiary', to: 't2_apiary', id: 'enigmatica:normal/resourcefulbees/t2_apiary_nest' },
            { from: 't2_apiary', to: 't3_apiary', id: 'enigmatica:normal/resourcefulbees/t3_apiary_nest' },
            { from: 't3_apiary', to: 't4_apiary', id: 'enigmatica:normal/resourcefulbees/t4_apiary_nest' }
        ].forEach((recipe) => {
            event
                .custom({
                    type: 'resourcefulbees:hive_upgrade_recipe',
                    pattern: ['ACA', 'BDB', 'ACA'],
                    key: {
                        A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                        B: { type: 'resourcefulbees:hive', tier: 4 },
                        C: { item: `resourcefulbees:${recipe.from}` },
                        D: { item: 'minecraft:nether_star' }
                    },
                    result: { id: `resourcefulbees:${recipe.to}` }
                })
                .id(recipe.id);
        });
    }

    // 植物魔法与神话植物学配方使用 1.21 物品堆产物字段（id/count）。
    if (e6ePortedRecipeModLoaded('botania') && e6ePortedRecipeModLoaded('resourcefulbees')) {
        [
            {
                input: 'resourcefulbees:mana_honeycomb',
                output: 'botania:manasteel_ingot',
                mana: 2000,
                id: 'enigmatica:normal/botania/mana_infusion/manasteel_ingot'
            },
            {
                input: 'resourcefulbees:mana_honeycomb_block',
                output: 'botania:manasteel_block',
                mana: 19000,
                id: 'enigmatica:normal/botania/mana_infusion/manasteel_block'
            }
        ].forEach((recipe) => {
            event
                .custom({
                    type: 'botania:mana_infusion',
                    input: { item: recipe.input },
                    output: { id: recipe.output, count: 1 },
                    mana: recipe.mana
                })
                .id(recipe.id);
        });
    }

    if (
        e6ePortedRecipeModLoaded('mythicbotany') &&
        e6ePortedRecipeModLoaded('botania') &&
        e6ePortedRecipeModLoaded('resourcefulbees')
    ) {
        event
            .custom({
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
            })
            .id('enigmatica:normal/botania/terrasteel_ingot_honeycomb');

        event
            .custom({
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
            })
            .id('enigmatica:normal/mythicbotany/alfsteel_ingot_honeycomb');
    }

    if (e6ePortedRecipeModLoaded('mythicbotany') && e6ePortedRecipeModLoaded('resourcefulbees')) {
        var manaBeeJar = {
            id: 'resourcefulbees:bee_jar',
            count: 1,
            components: {
                'minecraft:custom_data': { Entity: 'resourcefulbees:mana_bee', BeeType: 'mana', Color: '#4c97ff' }
            }
        };
        var terrestrialBeeJar = {
            id: 'resourcefulbees:bee_jar',
            count: 1,
            components: {
                'minecraft:custom_data': {
                    Entity: 'resourcefulbees:terrestrial_bee',
                    BeeType: 'terrestrial',
                    Color: '#5bf23d'
                }
            }
        };
        event
            .custom({
                type: 'mythicbotany:infusion',
                group: 'infuser',
                ingredients: [{ item: manaBeeJar.id, components: manaBeeJar.components }],
                output: terrestrialBeeJar,
                mana: 2000000,
                fromColor: 255,
                toColor: 65280
            })
            .id('enigmatica:normal/resourcefulbees/terrestrial_bee_spawn_egg_infusion');
    }

    // 即使附属模组的配方序列化器不可用，也保留 JSON 候选配方。
    // Create Blockzapper 附属的源数据配方；附属序列化器缺失时也保留六条候选。
    if (e6ePortedRecipeModLoaded('create') && e6ePortedItemExists('create:handheld_blockzapper')) {
        var blockzapperRecipes = [
            {
                id: 'create:blockzapper_upgrade/gold_accelerator',
                pattern: ['SE', 'BS'],
                key: {
                    B: { tag: 'c:ingots/brass' },
                    S: { item: 'minecraft:sugar' },
                    E: { item: 'create:handheld_blockzapper' }
                },
                component: 'Accelerator',
                tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_amplifier',
                pattern: ['E ', 'BR'],
                key: {
                    B: { tag: 'c:ingots/brass' },
                    R: { item: 'create:refined_radiance' },
                    E: { item: 'create:handheld_blockzapper' }
                },
                component: 'Amplifier',
                tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_body',
                pattern: [' B ', 'BEB', ' B '],
                key: { B: { tag: 'c:ingots/brass' }, E: { item: 'create:handheld_blockzapper' } },
                component: 'Body',
                tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_retriever',
                pattern: ['E ', 'BR'],
                key: {
                    B: { tag: 'c:ingots/brass' },
                    R: { tag: 'c:dusts/redstone' },
                    E: { item: 'create:handheld_blockzapper' }
                },
                component: 'Retriever',
                tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/gold_scope',
                pattern: ['GBG', ' E '],
                key: {
                    B: { tag: 'c:ingots/brass' },
                    G: { tag: 'c:glass_blocks' },
                    E: { item: 'create:handheld_blockzapper' }
                },
                component: 'Scope',
                tier: 'Brass'
            },
            {
                id: 'create:blockzapper_upgrade/purpur_scope',
                pattern: ['GBG', ' E '],
                key: {
                    B: { item: 'create:chromatic_compound' },
                    G: { tag: 'c:glass_blocks' },
                    E: { item: 'create:handheld_blockzapper' }
                },
                component: 'Scope',
                tier: 'Chromatic'
            }
        ];
        blockzapperRecipes.forEach((recipe) => {
            event
                .custom({
                    type: 'create:blockzapper_upgrade',
                    pattern: recipe.pattern,
                    key: recipe.key,
                    result: { id: 'create:handheld_blockzapper', count: 1 },
                    component: recipe.component,
                    tier: recipe.tier
                })
                .id(recipe.id);
        });
    }

    // Tetra 原版锤子配方使用 1.16 NBT；保留其模块化物品数据，
    // 改用 1.21.1 的 minecraft:custom_data 组件。
    // Tetra 源锤配方使用旧 NBT；改用 1.21.1 minecraft:custom_data 组件保留模块数据。
    if (e6ePortedRecipeModLoaded('tetra') && e6ePortedItemExists('tetra:modular_double'))
        event
            .custom({
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
            })
            .id('tetra:hammer/oak');

    // E6E 数据配方会覆盖神秘学中同 ID 的原生交易配方。
    // E6E 数据配方会覆盖 Occultism 中同 ID 的原生交易配方。
    if (e6ePortedRecipeModLoaded('occultism')) {
        var occultismStoneTradeId = 'occultism:spirit_trade/4x_stone_to_otherstone';
        event.remove({ id: occultismStoneTradeId });
        event
            .custom({
                type: 'occultism:spirit_trade',
                trader_id: 'occultism:trader_otherrock',
                ingredient: { item: 'minecraft:stone' },
                result: {
                    type: 'occultism:weighted_item',
                    stack: { id: 'occultism:otherstone', count: 1 },
                    weight: 1
                }
            })
            .id(occultismStoneTradeId);
    }
});

// 血魔法奥术配方联动：由旧 KubeJS 构造器改写为 1.21 JSON 格式。
if (['bloodmagic', 'botania', 'eidolon_repraised', 'meetyourfight'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
    ServerEvents.recipes((__e6eOriginalEvent) => {
        const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', false, [
            'bloodmagic:altar',
            'bloodmagic:arc',
            'botania:mana_infusion',
            'botania:terra_plate',
            'create:blockzapper_upgrade',
            'create:crushing',
            'minecraft:crafting_shaped',
            'minecraft:crafting_shapeless',
            'minecraft:stonecutting',
            'mythicbotany:infusion',
            'naturesaura:altar',
            'occultism:crushing',
            'occultism:spirit_trade',
            'resourcefulbees:hive_upgrade_recipe'
        ]);

        if (global.isExpertMode == false) return;

        var recipes = [
            {
                output: { id: 'eidolon_repraised:unholy_symbol' },
                input: { item: 'bloodmagic:weakbloodorb' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'bloodmagic:arc/reversion/weak_blood_orb'
            },
            {
                output: { id: 'botania:mana_tablet' },
                input: { item: 'bloodmagic:magicianbloodorb' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'bloodmagic:arc/reversion/magician_blood_orb'
            },
            {
                output: { id: 'create:shadow_steel' },
                input: { item: 'bloodmagic:masterbloodorb' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'bloodmagic:arc/reversion/master_blood_orb'
            },
            {
                output: { id: 'botania:mana_diamond' },
                input: { item: 'botania:dragonstone' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'enigmatica:expert/bloodmagic/arc/mana_diamond_from_dragonstone'
            },
            {
                output: { id: 'botania:mana_diamond_block' },
                input: { item: 'botania:dragonstone_block' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'enigmatica:expert/bloodmagic/arc/mana_diamond_block_from_dragonstone_block'
            },
            {
                output: { id: 'waystones:warp_stone' },
                input: { tag: 'waystones:waystone' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'enigmatica:expert/bloodmagic/arc/warp_stone_from_waystone'
            },
            {
                output: { id: 'waystones:warp_stone' },
                input: { tag: 'waystones:sharestone' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'enigmatica:expert/bloodmagic/arc/warp_stone_from_sharestone'
            },
            {
                output: { id: 'waystones:warp_stone' },
                input: { item: 'waystones:portstone' },
                tool: { tag: 'bloodmagic:arc/reverter' },
                id: 'enigmatica:expert/bloodmagic/arc/warp_stone_from_portstone'
            }
        ];

        recipes.forEach((recipe) => {
            event
                .custom({
                    type: 'bloodmagic:arc',
                    input: recipe.input,
                    tool: recipe.tool,
                    output: recipe.output,
                    extraOutputs: [],
                    consume: true
                })
                .id(recipe.id);
        });

        event
            .custom({
                type: 'create:crushing',
                ingredients: [{ tag: 'bloodmagic:crystals/demon' }],
                results: [
                    { id: 'neovitae:corrupted_tiny_dust', count: 6 },
                    { id: 'neovitae:corrupted_tiny_dust', chance: 0.15 }
                ],
                processingTime: 200
            })
            .id('enigmatica:expert/bloodmagic/arc/corrupted_tinydust_from_demon_crystals');
    });
}

// ===== MBD2 控制器与多方块配方 =====
// Rhino 需要函数作用域隔离此处的顶层常量。
(function () {
    // e6e_mbd2 的 MBD2 机器所用的 E6E 自定义多方块配方。
    // 由 e6e-mbd2-addon/generate-recipe-data.js 根据以下文件生成：
    // kubejs/config/e6e_mbd2/{legacy,adapted}_recipes.json；修改这些文件后需重新运行生成器。
    // 51 条记录，涉及 4 台机器。
    //
    // 运行时用 JsonIO.read() 读取 kubejs/config 路径会返回 null；因此将数据嵌入
    // 同一个脚本中，可避免 KubeJS 加载时访问文件或跨脚本赋值全局变量。
    const e6eMbd2Recipes = [
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:astronomy_mastery_shard',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:observatory',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'astralsorcery:crystals/attuned',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:mantle',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:marble_raw',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'thermal:device_rock_gen',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:mechanical_saw',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'astralsorcery:stars/irradiant',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'astralsorcery:liquid_starlight',
                        'amount': 1024
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/astronomy_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:alchemy_mastery_shard',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_mixer',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_bottling_machine',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:stim_pack',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:death_ring',
                        'count': 5
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:pet_reviver',
                        'count': 5
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/alchemy_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:aura_mastery_shard',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:aura_trove',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:firework_generator',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:big_box_o_boom',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:generator_limit_remover',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:projectile_generator',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:mimirs_memory_box',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:altar_of_birthing_kit',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:aura_detector',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:mover_cart',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:powered_rail',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:rail',
                        'count': 32
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:activator_rail',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/aura_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:engineering_mastery_shard',
                        'count': 2
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:advanced_pressure_tube',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:advanced_liquid_compressor',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:rotation_speed_controller',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:large_cogwheel',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:shaft',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:encased_chain_drive',
                        'count': 32
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_arc_furnace',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:imaharas_indelible_electrodes',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_pumpjack',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_distillation_tower',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_pressure_chamber',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_furnace_engine_kit',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'pneumaticcraft:lubricant',
                        'amount': 1024
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/engineering_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:energistics_mastery_shard',
                        'count': 50
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:fusion_reactor_controller',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:fusion_reactor_frame',
                        'count': 36
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:fusion_reactor_port',
                        'count': 5
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:reactor_glass',
                        'count': 24
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:electromagnetic_coil',
                        'count': 5
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:pressure_disperser',
                        'count': 224
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:rotational_complex',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:saturating_condenser',
                        'count': 293
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:structural_glass',
                        'count': 598
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:turbine_casing',
                        'count': 417
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:turbine_rotor',
                        'count': 10
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:turbine_blade',
                        'count': 20
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:turbine_valve',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanismgenerators:turbine_vent',
                        'count': 585
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:induction_casing',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:induction_port',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:ultimate_induction_provider',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:ultimate_induction_cell',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'fluxnetworks:flux_controller',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'fluxnetworks:flux_point',
                        'count': 50
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'fluxnetworks:flux_plug',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'mekanismgenerators:tritium',
                        'amount': 25600
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'mekanismgenerators:deuterium',
                        'amount': 25600
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 750000
                    }
                }
            ],
            'ticks': 1500,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/energistics_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:dimensional_mastery_shard',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'extrastorage:block_4096k',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'extrastorage:block_262144k_fluid',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:quantum_entangloporter',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'rsinfinitybooster:dimension_card',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:network_receiver',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:network_transmitter',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:network_card',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:teleporter',
                        'count': 5
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:portable_teleporter',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/dimensional_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:battle_mastery_shard',
                        'count': 5
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_mekasuit_helmet',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_mekasuit_bodyarmor',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_mekasuit_pants',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_mekasuit_boots',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_meka_tool',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/battle_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:excavation_mastery_shard',
                        'count': 2
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'industrialforegoing:fluid_laser_base',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'industrialforegoing:ore_laser_base',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'industrialforegoing:laser_drill',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'occultism:dimensional_mineshaft',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:miner_marid_irradiated',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_excavator',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'immersiveengineering:survey_tools',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:mining_gadget_kit',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:flux_bore_kit',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_pedestal_quarry',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/excavation_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:culinary_mastery_shard',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:engineering_student_meals',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:box_of_thankful_dinners',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/culinary_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:automation_mastery_shard',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:controller',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'extrastorage:netherite_crafter',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:interface',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:pattern_grid',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:pattern',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:cable',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:deployer',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:mechanical_arm',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:content_observer',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:stockpile_switch',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'botania:auto_crafting_halo',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:field_creator',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:placer',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'entangled:block',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:universal_sensor',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:diy_drone_kit',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:assorted_router_kit',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'consumeInstantly': true,
                    'data': {
                        'amount': 30000
                    }
                }
            ],
            'ticks': 60,
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/automation_mastery_shard',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'enigmatic_tree_of_life_structure',
            'controllerId': 'enigmatic_tree_of_life'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'chance': 1,
                    'data': {
                        'item': 'botania:life_essence',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'chance': 0.5,
                    'data': {
                        'item': 'botania:life_essence',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'chance': 0.25,
                    'data': {
                        'item': 'botania:life_essence',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:botania_mana',
                    'data': {
                        'amount': 2700000
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 2000000
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'pneumaticcraft:memory_essence',
                        'amount': 16000
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'astralsorcery:liquid_starlight',
                        'amount': 1000
                    }
                },
                {
                    'type': 'masterfulmachinery:pncr_pressure',
                    'perTick': true,
                    'data': {
                        'air': 1200
                    }
                }
            ],
            'ticks': 300,
            'id': 'enigmatica:expert/masterful_machinery/gaia_reactor/gaia_spirit',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'gaia_reactor_structure',
            'controllerId': 'gaia_reactor'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'mekanismgenerators:deuterium',
                        'amount': 640
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 10000
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'emendatusenigmatica:molten_sulfur',
                        'amount': 10
                    }
                },
                {
                    'type': 'masterfulmachinery:pncr_pressure',
                    'perTick': true,
                    'data': {
                        'air': 100
                    }
                },
                {
                    'type': 'masterfulmachinery:create_rotation',
                    'data': {
                        'speed': 256
                    }
                }
            ],
            'ticks': 4000,
            'id': 'enigmatica:expert/masterful_machinery/industrial_deuterium_plant/deuterium',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'industrial_deuterium_plant_structure',
            'controllerId': 'industrial_deuterium_plant'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:prestigious_palm',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:wicked_weave',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:ender_calx',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:lesser_soul_gem',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:reagentvoid',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:warped_sprouts',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/prestigious_palm',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:lesser_soul_gem',
                        'count': 4
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'occultism:spirit_attuned_gem',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:ender_calx',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'atum:nepthys_godshard',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 4000
                    }
                }
            ],
            'ticks': 400,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/lesser_soul_gem',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'alexsmobs:dimensional_carver',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:reversal_pick',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'alexsmobs:void_worm_mandible',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'alexsmobs:void_worm_eye',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:ingots/netherite',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'perTick': true,
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 5000
                    }
                }
            ],
            'ticks': 500,
            'id': 'alexsmobs:dimensional_carver',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:glass_hand',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:basic_amulet',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:brass_hand',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:zombie_heart',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:lesser_soul_gem',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:wraith_heart',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'glassential:glass_dark_ethereal_reverse',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 10000
                    }
                }
            ],
            'ticks': 1000,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/glass_hand',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:void_amulet',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:basic_amulet',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'alexsmobs:emu_feather',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:inlays/pewter',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:soul_shard',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:ingots/silver',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 10000
                    }
                }
            ],
            'ticks': 1000,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/void_amulet',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:componentframeparts',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:gears/osmium',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'tconstruct:ender_slime_crystal',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:nuggets/utherium',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/componentframeparts',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemrouterfilterexact',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:componentframeparts',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'atum:red_stained_crystal_glass_pane',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:nuggets/arcane_gold',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfilterexact',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemrouterfilteroredict',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:componentframeparts',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'atum:lime_stained_crystal_glass_pane',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:chunks',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfilteroredict',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemrouterfilterenchant',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:componentframeparts',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'atum:green_stained_crystal_glass_pane',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:enchanted_book',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfilterenchant',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemrouterfiltermoditems',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:componentframeparts',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'atum:yellow_stained_crystal_glass_pane',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:enchanted_ash',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfiltermoditems',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemrouterfiltercomposite',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:componentframeparts',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'atum:white_stained_crystal_glass_pane',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:nuggets/silicon_bronze',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 1000
                    }
                }
            ],
            'ticks': 100,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfiltercomposite',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:noderouter',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'upgrade_aquatic:elder_eye',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'occultism:spirit_attuned_gem',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:rods/prismarine',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:inlays/arcane_gold',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 50000
                    }
                }
            ],
            'ticks': 1000,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/noderouter',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:inputroutingnode',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemroutingnode',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:nuggets/lumium',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:dusts/fluorite',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 500
                    }
                }
            ],
            'ticks': 50,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/inputroutingnode',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:outputroutingnode',
                        'count': 1
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'bloodmagic:itemroutingnode',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:nuggets/signalum',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:dusts/fluorite',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 500
                    }
                }
            ],
            'ticks': 50,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/outputroutingnode',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon:ender_calx',
                        'count': 8
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:dusts/ender_pearl',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 80
                    }
                }
            ],
            'ticks': 10,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/ender_calx',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:golden_apple',
                        'count': 4
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:apple',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:dusts/gold',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 150
                    }
                }
            ],
            'ticks': 10,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/golden_apple',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:golden_carrot',
                        'count': 4
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:carrot',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:dusts/gold',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 150
                    }
                }
            ],
            'ticks': 10,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/golden_carrot',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:glistering_melon_slice',
                        'count': 4
                    }
                }
            ],
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:melon_slice',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'tag': 'forge:dusts/gold',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'bloodmagic:life_essence_fluid',
                        'amount': 150
                    }
                }
            ],
            'ticks': 10,
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/glistering_melon_slice',
            'type': 'masterfulmachinery:machine_process',
            'structureId': 'wicked_altar_structure',
            'controllerId': 'wicked_altar'
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_botanical_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:oak_leaves',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:stardust',
                        'count': 16
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:resonating_gem',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:deployer',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 40000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:botanical_mastery_shard',
                        'count': 2
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_astronomy_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:observatory_lens',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:attuned_celestial_crystal',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:resonating_gem',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'astralsorcery:stardust',
                        'count': 32
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 45000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:astronomy_mastery_shard',
                        'count': 1
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_alchemy_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:mechanical_mixer',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:spout',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:glass_bottle',
                        'count': 32
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:blaze_powder',
                        'count': 16
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:death_ring',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 35000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:alchemy_mastery_shard',
                        'count': 1
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_ritual_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon_repraised:unholy_symbol',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'neovitae:hellfire_forge',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'neovitae:rune_charging',
                        'count': 16
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'neovitae:rune_acceleration',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'neovitae:rune_dislocation',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'occultism:chalk_gold',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 40000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:ritual_mastery_shard',
                        'count': 5
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_aura_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:aura_trove',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:firework_generator',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:generator_limit_remover',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:projectile_generator',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'naturesaura:aura_detector',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 35000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:aura_mastery_shard',
                        'count': 1
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_engineering_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:advanced_pressure_tube',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:advanced_liquid_compressor',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:rotation_speed_controller',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:large_cogwheel',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:assembly_drill',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:assembly_laser',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 45000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:engineering_mastery_shard',
                        'count': 2
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_energistics_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:ultimate_induction_provider',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:ultimate_induction_cell',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:pellet_antimatter',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:ultimate_control_circuit',
                        'count': 16
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'powah:ender_core',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:controller',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 50000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:energistics_mastery_shard',
                        'count': 50
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_dimensional_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:quantum_entangloporter',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:network_receiver',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:network_transmitter',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:network_card',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:teleporter',
                        'count': 5
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'powah:ender_core',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 45000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:dimensional_mastery_shard',
                        'count': 1
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_battle_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:netherite_helmet',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:netherite_chestplate',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:netherite_leggings',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:netherite_boots',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:pellet_antimatter',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:ultimate_control_circuit',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 45000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:battle_mastery_shard',
                        'count': 5
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_excavation_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'industrialforegoing:ore_laser_base',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'industrialforegoing:laser_drill',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'occultism:dimensional_mineshaft',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'immersiveengineering:survey_tools',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'mekanism:atomic_disassembler',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 40000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:excavation_mastery_shard',
                        'count': 2
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_culinary_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'farmersdelight:roast_chicken',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'farmersdelight:beef_stew',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'farmersdelight:vegetable_soup',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'farmersdelight:stuffed_pumpkin',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 25000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:culinary_mastery_shard',
                        'count': 1
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_automation_mastery_shard',
            'controllerId': 'enigmatic_tree_of_life',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:controller',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:pattern_grid',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'refinedstorage:pattern',
                        'count': 64
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:deployer',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'create:mechanical_arm',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'pneumaticcraft:universal_sensor',
                        'count': 4
                    }
                },
                {
                    'type': 'masterfulmachinery:energy',
                    'perTick': true,
                    'data': {
                        'amount': 40000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'kubejs:automation_mastery_shard',
                        'count': 1
                    }
                }
            ]
        },
        {
            'id': 'enigmatica:expert/masterful_machinery/wicked_altar/adapted_reaper_scythe',
            'controllerId': 'wicked_altar',
            'ticks': 200,
            'inputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon_repraised:soul_shard',
                        'count': 8
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:netherite_ingot',
                        'count': 2
                    }
                },
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'minecraft:nether_star',
                        'count': 1
                    }
                },
                {
                    'type': 'masterfulmachinery:fluids',
                    'data': {
                        'fluid': 'neovitae:essentia_vitae_source',
                        'amount': 1000
                    }
                }
            ],
            'outputs': [
                {
                    'type': 'masterfulmachinery:items',
                    'data': {
                        'item': 'eidolon_repraised:reaper_scythe',
                        'count': 1
                    }
                }
            ]
        }
    ];

    // E6E 的 Masterful Machinery 配方转换为 MBD2 机器配方。
    //
    // 机器定义（控制器、接口、方块结构）来自 e6e-mbd2-1.0.0.jar；本文件
    // 只负责注册加工配方。数据数组由该模板上方的内容生成，
    // 由 generate-recipe-data.js 根据 kubejs/config/e6e_mbd2/*.json 生成。
    //

    if (Platform.isLoaded('e6e_mbd2')) {
        ServerEvents.recipes((__e6eOriginalEvent) => {
            const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', false, [
                'e6e_mbd2:enigmatic_tree_of_life',
                'e6e_mbd2:gaia_reactor',
                'e6e_mbd2:industrial_deuterium_plant',
                'e6e_mbd2:wicked_altar',
                'minecraft:crafting_shaped'
            ]);
            if (global.isExpertMode == false) return;

            const oldRecipes = e6eMbd2Recipes;
            if (!oldRecipes || oldRecipes.length === 0) {
                console.error('[E6E MBD2] Recipe data is empty - run e6e-mbd2-addon/generate-recipe-data.js');
                return;
            }

            function itemId(id) {
                if (id === 'botania:life_essence') return 'kubejs:gaia_spirit';
                if (id.startsWith('eidolon:')) {
                    const replacement = id.replace('eidolon:', 'eidolon_repraised:');
                    if (Item.exists(replacement)) return replacement;
                }
                if (id.startsWith('bloodmagic:')) {
                    const replacement = id.replace('bloodmagic:', 'neovitae:');
                    if (Item.exists(replacement)) return replacement;
                }
                return id;
            }

            function itemIngredient(data) {
                if (data.item) {
                    const id = itemId(data.item);
                    return Item.exists(id) ? (data.count || 1) + 'x ' + id : null;
                }
                if (data.tag) {
                    const original = '#' + data.tag;
                    if (e6eRecipeIngredientExists(original)) return (data.count || 1) + 'x ' + original;
                    const common = '#' + data.tag.replace(/^forge:/, 'c:');
                    if (e6eRecipeIngredientExists(common)) return (data.count || 1) + 'x ' + common;
                }
                return null;
            }

            function fluidId(id) {
                if (id === 'bloodmagic:life_essence_fluid') {
                    return Fluid.exists('neovitae:essentia_vitae_source') ? 'neovitae:essentia_vitae_source' : null;
                }
                if (id === 'emendatusenigmatica:molten_sulfur') {
                    if (Fluid.exists('mekanism:sulfuric_acid')) return 'mekanism:sulfuric_acid';
                    return null;
                }
                return Fluid.exists(id) ? id : null;
            }

            function usable(content) {
                if (content.type === 'masterfulmachinery:items') {
                    if (content.data.item) return Item.exists(itemId(content.data.item));
                    return itemIngredient(content.data) !== null;
                }
                if (content.type === 'masterfulmachinery:fluids') return fluidId(content.data.fluid) !== null;
                return true;
            }

            function add(target, content, input) {
                const type = content.type;
                const data = content.data;
                if (type === 'masterfulmachinery:items') {
                    const stack = itemIngredient(data);
                    if (input) target.inputItems(stack);
                    else target.outputItems((data.count || 1) + 'x ' + itemId(data.item));
                } else if (type === 'masterfulmachinery:fluids') {
                    const stack = data.amount + 'x ' + fluidId(data.fluid);
                    if (input) target.inputFluids(stack);
                    else target.outputFluids(stack);
                } else if (type === 'masterfulmachinery:energy') {
                    if (input) target.inputFE(data.amount);
                    else target.outputFE(data.amount);
                } else if (type === 'masterfulmachinery:pncr_pressure') {
                    if (input) target.inputPNCAir(data.air);
                } else if (type === 'masterfulmachinery:botania_mana') {
                    // 植物魔法未安装；1 点旧版魔力折算为 4 FE。
                    if (input) target.inputFE(data.amount * 4);
                    else target.outputFE(data.amount * 4);
                } else if (type === 'masterfulmachinery:astral_starlight') {
                    // 当前安装的 MBD2 不支持星辉魔法的星光能力。
                    if (input) target.inputFE(data.amount * 100);
                } else if (type === 'masterfulmachinery:create_rotation') {
                    // MBD2 的旋转处理器需要动能机器定义；
                    // 旧版转速消耗改用额外 FE 消耗表示。
                    if (input) target.inputFE(data.speed * 100);
                } else {
                    throw new Error('[E6E MBD2] Unsupported capability ' + type);
                }
            }

            // MBD2 的 chance()/perTick() 接收一个以配方自身为参数的回调，因此修饰逻辑
            // 因此每次调用都必须重新构造内容，不能预先只构造一次。
            function addWithModifiers(targetRecipe, content, input) {
                function body(r) {
                    if (content.perTick) r.perTick((tick) => add(tick, content, input));
                    else add(r, content, input);
                }
                if (content.chance !== undefined) targetRecipe.chance(content.chance, body);
                else body(targetRecipe);
            }

            let added = 0;
            let unavailable = 0;
            const perMachine = {};
            const missingMachines = {};
            var mbdRecipe;
            oldRecipes.forEach((recipe) => {
                const machine = recipe.controllerId;
                if (typeof event.recipes.e6e_mbd2[machine] !== 'function') {
                    missingMachines[machine] = (missingMachines[machine] || 0) + 1;
                    return;
                }
                if (!recipe.inputs.every(usable) || !recipe.outputs.every(usable)) {
                    unavailable++;
                    return;
                }
                const oldPath = recipe.id.includes('/masterful_machinery/')
                    ? recipe.id.split('/masterful_machinery/')[1]
                    : machine + '/' + recipe.id.split(':').pop();
                mbdRecipe = event.recipes.e6e_mbd2[machine]()
                    .id('enigmatica:expert/mbd2/' + oldPath)
                    .duration(recipe.ticks);
                recipe.inputs.forEach((content) => addWithModifiers(mbdRecipe, content, true));
                recipe.outputs.forEach((content) => addWithModifiers(mbdRecipe, content, false));
                added++;
                perMachine[machine] = (perMachine[machine] || 0) + 1;
            });
            console.info(
                '[E6E MBD2] registered ' +
                    added +
                    ' machine recipes; ' +
                    unavailable +
                    ' require unavailable legacy content'
            );
            console.info('[E6E MBD2] per machine: ' + JSON.stringify(perMachine));
            if (Object.keys(missingMachines).length > 0) {
                console.error('[E6E MBD2] e6e_mbd2 has no recipe type for: ' + JSON.stringify(missingMachines));
            }

            const parts = [
                ['item_input', 'minecraft:hopper', 'minecraft:chest'],
                ['item_output', 'minecraft:hopper', 'minecraft:barrel'],
                ['fluid_input', 'minecraft:bucket', 'minecraft:iron_block'],
                ['fluid_output', 'minecraft:bucket', 'minecraft:copper_block'],
                ['energy_input', 'minecraft:redstone_block', 'minecraft:iron_block'],
                ['energy_output', 'minecraft:redstone_block', 'minecraft:copper_block'],
                ['pressure_input', 'pneumaticcraft:advanced_pressure_tube', 'minecraft:iron_block']
            ];
            parts.forEach((part) => {
                if (!Item.exists(part[1]) || !Item.exists(part[2])) return;
                event
                    .shaped('e6e_mbd2:' + part[0], ['ABA', 'BCB', 'ABA'], {
                        A: 'minecraft:iron_ingot',
                        B: part[1],
                        C: part[2]
                    })
                    .id('e6e_mbd2:parts/' + part[0]);
            });

            const controllers = [
                ['enigmatic_tree_of_life', 'minecraft:oak_sapling'],
                ['gaia_reactor', 'minecraft:beacon'],
                ['industrial_deuterium_plant', 'mekanism:electrolytic_separator'],
                ['wicked_altar', 'eidolon_repraised:stone_altar']
            ];
            controllers.forEach((entry) => {
                if (!Item.exists(entry[1])) return;
                event
                    .shaped('e6e_mbd2:' + entry[0], ['ABA', 'CDC', 'AEA'], {
                        A: 'minecraft:iron_block',
                        B: entry[1],
                        C: 'e6e_mbd2:item_input',
                        D: 'e6e_mbd2:item_output',
                        E: 'e6e_mbd2:energy_input'
                    })
                    .id('e6e_mbd2:controllers/' + entry[0]);
            });
        });
    }
})();

// ===== MBD2 热力加工配方 =====
// Rhino 需要函数作用域隔离此处的顶层常量。
(function () {
    // E6E MBD2 多方块机器中的热力加工配方。
    // 在此文件中修改输入、输出、能量、概率或耗时。
    // 这些配方不依赖热力系列或 Oritech。

    const e6eThermalMbd2Recipes = [
        // 粉碎机
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/end_stone',
            ticks: 120,
            fe: 2400,
            itemInputs: ['#forge:end_stones'],
            itemOutputs: ['4x occultism:crushed_end_stone']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/petcoke_dust',
            ticks: 80,
            fe: 1600,
            itemInputs: ['#forge:coal_petcoke'],
            itemOutputs: ['immersivepetroleum:petcoke_dust']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/petcoke_dust_from_block',
            ticks: 160,
            fe: 14400,
            itemInputs: ['#forge:storage_blocks/coal_petcoke'],
            itemOutputs: ['9x immersivepetroleum:petcoke_dust']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/coke_dust_from_block',
            ticks: 160,
            fe: 14400,
            itemInputs: ['#forge:storage_blocks/coal_coke'],
            itemOutputs: ['9x immersiveengineering:dust_coke']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/netherite_ore',
            ticks: 120,
            fe: 2400,
            itemInputs: ['#forge:ores/netherite'],
            itemOutputs: ['2x minecraft:netherite_scrap']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/grain_to_flour',
            ticks: 60,
            fe: 1200,
            itemInputs: ['#forge:grain'],
            itemOutputs: ['create:wheat_flour', { stack: 'create:wheat_flour', chance: 0.25 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/sugar_cane',
            ticks: 60,
            fe: 1200,
            itemInputs: ['minecraft:sugar_cane'],
            itemOutputs: ['2x minecraft:sugar', { stack: 'minecraft:sugar', chance: 0.1 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/blaze_rod',
            ticks: 80,
            fe: 1600,
            itemInputs: ['#forge:rods/blaze'],
            itemOutputs: ['3x minecraft:blaze_powder', { stack: 'mekanism:dust_sulfur', chance: 0.25 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'pulverizer/obsidian',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:obsidian'],
            itemOutputs: ['4x mekanism:dust_obsidian']
        },
        // 锯木机
        {
            machine: 'thermal_sawmill',
            id: 'sawmill/sticks_from_planks',
            ticks: 60,
            fe: 1000,
            itemInputs: ['#minecraft:planks'],
            itemOutputs: ['6x minecraft:stick', { stack: 'immersiveengineering:sawdust', chance: 0.25 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'sawmill/sticks_from_slabs',
            ticks: 45,
            fe: 800,
            itemInputs: ['#minecraft:wooden_slabs'],
            itemOutputs: ['3x minecraft:stick', { stack: 'immersiveengineering:sawdust', chance: 0.125 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'sawmill/sticks_from_stairs',
            ticks: 70,
            fe: 1200,
            itemInputs: ['#minecraft:wooden_stairs'],
            itemOutputs: ['9x minecraft:stick', { stack: 'immersiveengineering:sawdust', chance: 0.375 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'sawmill/aphorism_tile',
            ticks: 100,
            fe: 1800,
            itemInputs: ['#c:storage_blocks/quartz'],
            itemOutputs: ['2x pneumaticcraft:aphorism_tile', { stack: 'mekanism:dust_quartz', chance: 0.375 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'sawmill/dimensional_storage_crystal',
            ticks: 120,
            fe: 2400,
            itemInputs: ['occultism:dimensional_matrix'],
            itemOutputs: ['2x occultism:storage_crystal']
        },
        {
            machine: 'thermal_sawmill',
            id: 'sawmill/blank_plate',
            ticks: 100,
            fe: 1800,
            itemInputs: ['occultism:otherstone'],
            itemOutputs: ['8x darkutils:blank_plate', { stack: 'darkutils:blank_plate', chance: 0.5 }]
        },

        // 红石熔炉
        {
            machine: 'thermal_redstone_furnace',
            id: 'furnace/raw_iron',
            ticks: 100,
            fe: 2000,
            itemInputs: ['minecraft:raw_iron'],
            itemOutputs: ['minecraft:iron_ingot']
        },

        // 红石熔炉
        {
            machine: 'thermal_redstone_furnace',
            id: 'furnace/raw_copper',
            ticks: 100,
            fe: 2000,
            itemInputs: ['minecraft:raw_copper'],
            itemOutputs: ['minecraft:copper_ingot']
        },
        {
            machine: 'thermal_redstone_furnace',
            id: 'furnace/raw_gold',
            ticks: 100,
            fe: 2000,
            itemInputs: ['minecraft:raw_gold'],
            itemOutputs: ['minecraft:gold_ingot']
        },
        {
            machine: 'thermal_redstone_furnace',
            id: 'furnace/sand_to_glass',
            ticks: 120,
            fe: 2400,
            itemInputs: ['#forge:sand'],
            itemOutputs: ['minecraft:glass']
        },

        // 感应炉
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/netherite_ingot',
            ticks: 160,
            fe: 10000,
            itemInputs: ['4x minecraft:netherite_scrap', '2x minecraft:gold_ingot'],
            itemOutputs: ['minecraft:netherite_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/tinkers_bronze',
            ticks: 120,
            fe: 6000,
            itemInputs: ['#forge:glass', '3x #forge:ingots/copper'],
            itemOutputs: ['3x tconstruct:tinkers_bronze_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/hepatizon',
            ticks: 140,
            fe: 8000,
            itemInputs: ['2x #forge:ingots/copper', '#forge:ingots/cobalt', '4x #forge:dusts/quartz'],
            itemOutputs: ['2x tconstruct:hepatizon_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/queens_slime',
            ticks: 140,
            fe: 8000,
            itemInputs: ['#forge:ingots/gold', '#forge:ingots/cobalt', 'minecraft:magma_cream'],
            itemOutputs: ['2x tconstruct:queens_slime_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/pig_iron',
            ticks: 120,
            fe: 6000,
            itemInputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
            itemOutputs: ['2x tconstruct:pig_iron_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/manyullyn',
            ticks: 160,
            fe: 10000,
            itemInputs: ['3x #forge:ingots/cobalt', 'minecraft:netherite_scrap'],
            itemOutputs: ['4x tconstruct:manyullyn_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/refined_obsidian',
            ticks: 100,
            fe: 3000,
            itemInputs: ['#forge:dusts/refined_obsidian', '#forge:ingots/osmium'],
            itemOutputs: ['mekanism:ingot_refined_obsidian']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'smelter/refined_glowstone',
            ticks: 100,
            fe: 3000,
            itemInputs: ['#forge:dusts/glowstone', '#forge:ingots/osmium'],
            itemOutputs: ['mekanism:ingot_refined_glowstone']
        },
        // 其余原 E6E 感应炉配方。这些配方保留原有的
        // 即使某些原版专属物品在 1.21.1 中不存在，也保留多输入组合。
        {
            machine: 'thermal_induction_smelter',
            id: 'source_normal/smelter/compact_machines_wall',
            ticks: 100,
            fe: 5000,
            itemInputs: ['#forge:ingots/enderium', '8x fluxnetworks:flux_dust'],
            itemOutputs: ['32x compactmachines:wall']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/froststeel_ingot',
            ticks: 120,
            fe: 6000,
            itemInputs: ['3x #forge:ingots/cobalt', 'thermal:blizz_powder'],
            itemOutputs: ['3x undergarden:froststeel_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/crystal_glass',
            ticks: 120,
            fe: 6000,
            itemInputs: ['glassential:glass_ghostly', 'quark:white_crystal_cluster', 'atum:sand'],
            itemOutputs: ['2x atum:crystal_glass']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/seared_brick',
            ticks: 100,
            fe: 5000,
            itemInputs: ['#forge:clay', '#forge:sand', '#forge:gravel'],
            itemOutputs: ['2x tconstruct:seared_brick']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/scorched_brick',
            ticks: 100,
            fe: 5000,
            itemInputs: ['minecraft:magma_cream', '#minecraft:soul_fire_base_blocks', '#forge:gravel'],
            itemOutputs: ['2x tconstruct:scorched_brick']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/scorched_brick_from_nether_grout',
            ticks: 100,
            fe: 5000,
            itemInputs: ['tconstruct:nether_grout'],
            itemOutputs: ['tconstruct:scorched_brick']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/alloy_reinforced',
            ticks: 120,
            fe: 6000,
            itemInputs: ['4x #forge:dusts/lithium', '3x #forge:ingots/aluminum', '#forge:ingots/copper'],
            itemOutputs: ['4x mekanism:alloy_reinforced']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_expert/smelter/compact_machines_wall',
            ticks: 120,
            fe: 6000,
            itemInputs: ['6x ars_nouveau:warding_stone', 'immersiveengineering:coil_mv', '3x fluxnetworks:flux_dust'],
            itemOutputs: ['6x compactmachines:wall']
        },

        // 压缩机：材料打包配方也定义在 enigmatica/packing_unpacking.js。
        {
            machine: 'thermal_compactor',
            id: 'compactor/copper_block',
            ticks: 80,
            fe: 1600,
            itemInputs: ['9x #forge:ingots/copper'],
            itemOutputs: ['minecraft:copper_block']
        },
        {
            machine: 'thermal_compactor',
            id: 'compactor/copper_ingots',
            ticks: 80,
            fe: 1600,
            itemInputs: ['minecraft:copper_block'],
            itemOutputs: ['9x minecraft:copper_ingot']
        },

        // 压榨机：原热力冲压配方不再需要热力模具。
        {
            machine: 'thermal_press',
            id: 'press/basic_processor',
            ticks: 80,
            fe: 3000,
            itemInputs: ['refinedstorage:raw_basic_processor'],
            itemOutputs: ['refinedstorage:basic_processor']
        },
        {
            machine: 'thermal_press',
            id: 'press/improved_processor',
            ticks: 120,
            fe: 6000,
            itemInputs: ['refinedstorage:raw_improved_processor'],
            itemOutputs: ['refinedstorage:improved_processor']
        },
        {
            machine: 'thermal_press',
            id: 'press/advanced_processor',
            ticks: 160,
            fe: 9000,
            itemInputs: ['refinedstorage:raw_advanced_processor'],
            itemOutputs: ['refinedstorage:advanced_processor']
        },
        {
            machine: 'thermal_press',
            id: 'press/neural_processor',
            ticks: 200,
            fe: 12000,
            itemInputs: ['extrastorage:raw_neural_processor'],
            itemOutputs: ['extrastorage:neural_processor']
        },
        {
            machine: 'thermal_press',
            id: 'press/thermoelectric_plate',
            ticks: 100,
            fe: 2000,
            itemInputs: ['immersiveengineering:thermoelectric_generator'],
            itemOutputs: ['powah:thermoelectric_plate']
        },

        // 离心机与坩埚
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/honey_bottle',
            ticks: 80,
            itemInputs: ['minecraft:honey_bottle'],
            itemOutputs: ['minecraft:glass_bottle'],
            fluidOutputs: ['250x productivebees:honey']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/honey_block_to_honey',
            ticks: 100,
            itemInputs: ['minecraft:honey_block'],
            fluidOutputs: ['1000x productivebees:honey']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/menril_resin_from_logs',
            ticks: 120,
            fe: 2400,
            itemInputs: ['#integrateddynamics:menril_logs'],
            itemOutputs: ['4x integrateddynamics:crystalized_menril_chunk'],
            fluidOutputs: ['1000x integrateddynamics:menril_resin']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/menril_resin_from_planks',
            ticks: 80,
            fe: 1600,
            itemInputs: ['integrateddynamics:menril_planks'],
            itemOutputs: ['integrateddynamics:crystalized_menril_chunk'],
            fluidOutputs: ['250x integrateddynamics:menril_resin']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/liquid_chorus_from_chorus_fruit',
            ticks: 100,
            fe: 2000,
            itemInputs: ['minecraft:popped_chorus_fruit'],
            itemOutputs: ['4x integrateddynamics:crystalized_chorus_chunk'],
            fluidOutputs: ['125x integrateddynamics:liquid_chorus']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/liquid_chorus_from_proto_chorus',
            ticks: 100,
            fe: 2000,
            itemInputs: ['integrateddynamics:proto_chorus'],
            itemOutputs: ['2x integrateddynamics:crystalized_chorus_chunk'],
            fluidOutputs: ['125x integrateddynamics:liquid_chorus']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'centrifuge/ground_meat',
            ticks: 100,
            fe: 2000,
            itemInputs: ['kubejs:ground_meat'],
            itemOutputs: [{ stack: 'minecraft:bone_meal', chance: 0.15 }],
            fluidOutputs: ['100x industrialforegoing:meat']
        },
        {
            machine: 'thermal_crucible',
            id: 'crucible/honey_block_to_honey',
            ticks: 100,
            itemInputs: ['minecraft:honey_block'],
            fluidOutputs: ['1000x productivebees:honey']
        },

        // 精炼机、冷却机与灌装机
        {
            machine: 'thermal_refinery',
            id: 'refinery/dryrubber',
            ticks: 120,
            fe: 12000,
            fluidInputs: ['900x industrialforegoing:latex'],
            itemOutputs: ['industrialforegoing:dryrubber']
        },
        {
            machine: 'thermal_refinery',
            id: 'refinery/pneumatic_oil_to_crude',
            ticks: 180,
            fe: 18000,
            fluidInputs: ['1000x pneumaticcraft:oil'],
            fluidOutputs: ['750x immersivepetroleum:crudeoil'],
            itemOutputs: [{ stack: 'immersivepetroleum:bitumen', chance: 0.1 }]
        },
        {
            machine: 'thermal_chiller',
            id: 'chiller/honey_block',
            ticks: 100,
            fluidInputs: ['1000x productivebees:honey'],
            itemOutputs: ['minecraft:honey_block']
        },
        {
            machine: 'thermal_chiller',
            id: 'chiller/crystalized_menril_block',
            ticks: 100,
            fe: 4000,
            fluidInputs: ['1000x integrateddynamics:menril_resin'],
            itemOutputs: ['integrateddynamics:crystalized_menril_block']
        },
        {
            machine: 'thermal_chiller',
            id: 'chiller/crystalized_chorus_block',
            ticks: 100,
            fe: 4000,
            fluidInputs: ['1000x integrateddynamics:liquid_chorus'],
            itemOutputs: ['integrateddynamics:crystalized_chorus_block']
        },
        {
            machine: 'thermal_bottler',
            id: 'bottler/menril_glass',
            ticks: 100,
            itemInputs: ['#c:glass_blocks'],
            fluidInputs: ['1000x integrateddynamics:menril_resin'],
            itemOutputs: ['integratedterminals:menril_glass']
        },
        {
            machine: 'thermal_bottler',
            id: 'bottler/chorus_glass',
            ticks: 100,
            itemInputs: ['#c:glass_blocks'],
            fluidInputs: ['1000x integrateddynamics:liquid_chorus'],
            itemOutputs: ['integratedterminals:chorus_glass']
        },
        {
            machine: 'thermal_bottler',
            id: 'bottler/honey_bottle',
            ticks: 80,
            itemInputs: ['minecraft:glass_bottle'],
            fluidInputs: ['250x productivebees:honey'],
            itemOutputs: ['minecraft:honey_bottle']
        },
        {
            machine: 'thermal_bottler',
            id: 'bottler/milk_bottle',
            ticks: 80,
            itemInputs: ['minecraft:glass_bottle'],
            fluidInputs: ['250x minecraft:milk'],
            itemOutputs: ['farmersdelight:milk_bottle']
        },
        {
            machine: 'thermal_bottler',
            id: 'bottler/hot_cocoa',
            ticks: 80,
            itemInputs: ['farmersdelight:milk_bottle'],
            fluidInputs: ['250x create:chocolate'],
            itemOutputs: ['farmersdelight:hot_cocoa']
        },
        // 热解炉与有机灌注器
        {
            machine: 'thermal_pyrolyzer',
            id: 'pyrolyzer/coal',
            ticks: 240,
            fe: 12000,
            itemInputs: ['minecraft:coal'],
            itemOutputs: ['immersiveengineering:coal_coke'],
            fluidOutputs: ['250x immersiveengineering:creosote']
        },
        {
            machine: 'thermal_pyrolyzer',
            id: 'pyrolyzer/coal_block',
            ticks: 480,
            fe: 96000,
            itemInputs: ['minecraft:coal_block'],
            itemOutputs: ['9x immersiveengineering:coal_coke'],
            fluidOutputs: ['2250x immersiveengineering:creosote']
        },
        {
            machine: 'thermal_pyrolyzer',
            id: 'pyrolyzer/logs',
            ticks: 120,
            fe: 6000,
            itemInputs: ['#minecraft:logs'],
            itemOutputs: ['minecraft:charcoal'],
            fluidOutputs: ['125x immersiveengineering:creosote']
        },
        // 原 E6E 热解炉配方含焦炭或焦油副产物；保留
        // 按原样保留这些产物（包括旧版 ID），以确保每条原配方都
        // 使原配方完整保留，并可在后续运行修复时排查。
        {
            machine: 'thermal_pyrolyzer',
            id: 'source_expert/pyrolyzer/coal',
            ticks: 240,
            fe: 12000,
            itemInputs: ['minecraft:coal'],
            itemOutputs: ['emendatusenigmatica:coke_gem', 'thermal:tar'],
            fluidOutputs: ['250x immersiveengineering:creosote']
        },
        {
            machine: 'thermal_pyrolyzer',
            id: 'source_expert/pyrolyzer/bitumen',
            ticks: 240,
            fe: 12000,
            itemInputs: ['#forge:gems/bitumen'],
            itemOutputs: ['emendatusenigmatica:coke_gem', 'thermal:tar'],
            fluidOutputs: ['50x thermal:heavy_oil']
        },
        {
            machine: 'thermal_phytogenic_insolator',
            id: 'insolator/sunmetal_blend',
            ticks: 160,
            fe: 10000,
            itemInputs: ['#forge:dusts/silver'],
            itemOutputs: ['architects_palette:sunmetal_blend']
        },

        // 分馏塔将当前安装的沉浸石油原油分离为不同馏分。
        {
            machine: 'thermal_fractionating_still',
            id: 'fractionating_still/crude_oil',
            ticks: 240,
            fe: 12000,
            fluidInputs: ['1000x immersivepetroleum:crudeoil'],
            fluidOutputs: [
                '150x immersivepetroleum:petroleum_gas',
                '150x immersivepetroleum:naphtha',
                '200x immersivepetroleum:benzol',
                '250x immersivepetroleum:kerosene',
                '250x immersivepetroleum:diesel'
            ]
        },

        // 坩埚与冷却机的入门配方：石头变熔岩，熔岩加水再变黑曜石。
        {
            machine: 'thermal_crucible',
            id: 'crucible/cobblestone_to_lava',
            ticks: 160,
            fe: 12000,
            itemInputs: ['minecraft:cobblestone'],
            fluidOutputs: ['250x minecraft:lava']
        },
        {
            machine: 'thermal_chiller',
            id: 'chiller/lava_to_obsidian',
            ticks: 160,
            fe: 12000,
            fluidInputs: ['1000x minecraft:lava', '1000x minecraft:water'],
            itemOutputs: ['minecraft:obsidian']
        },

        // 自动合成机与酿造机的入门配方。
        {
            machine: 'thermal_sequential_fabricator',
            id: 'sequential_fabricator/repeater',
            ticks: 100,
            fe: 3000,
            itemInputs: ['2x minecraft:iron_ingot', 'minecraft:redstone'],
            itemOutputs: ['minecraft:repeater']
        },
        {
            machine: 'thermal_brewer',
            id: 'brewer/water_bucket',
            ticks: 80,
            itemInputs: ['minecraft:water_bucket'],
            itemOutputs: ['minecraft:bucket'],
            fluidOutputs: ['1000x minecraft:water']
        },

        // 能源炉燃料配方。可在这里调整 FE 产量，无需修改多方块定义。
        {
            machine: 'thermal_dynamo_stirling',
            id: 'dynamo/stirling/coal',
            ticks: 100,
            itemInputs: ['minecraft:coal'],
            feOutputs: 16000
        },
        {
            machine: 'thermal_dynamo_compression',
            id: 'dynamo/compression/biofuel',
            ticks: 100,
            fluidInputs: ['1000x industrialforegoing:biofuel'],
            feOutputs: 1000000
        },
        {
            machine: 'thermal_dynamo_magmatic',
            id: 'dynamo/magmatic/lava',
            ticks: 100,
            fluidInputs: ['1000x minecraft:lava'],
            feOutputs: 50000
        },
        {
            machine: 'thermal_dynamo_numismatic',
            id: 'dynamo/numismatic/gold_ingot',
            ticks: 100,
            itemInputs: ['minecraft:gold_ingot'],
            feOutputs: 24000
        },
        {
            machine: 'thermal_dynamo_lapidary',
            id: 'dynamo/lapidary/diamond',
            ticks: 100,
            itemInputs: ['minecraft:diamond'],
            feOutputs: 32000
        },
        {
            machine: 'thermal_dynamo_disenchantment',
            id: 'dynamo/disenchantment/enchanted_book',
            ticks: 100,
            itemInputs: ['minecraft:enchanted_book'],
            feOutputs: 32000
        },

        // 熔岩挤压机与水源机器的对应配方。
        {
            machine: 'thermal_rock_generator',
            id: 'rock_generator/cobblestone',
            ticks: 80,
            fluidInputs: ['1000x minecraft:water', '1000x minecraft:lava'],
            itemOutputs: ['minecraft:cobblestone']
        },
        {
            machine: 'thermal_water_generator',
            id: 'water_generator/from_ice',
            ticks: 60,
            itemInputs: ['minecraft:ice'],
            fluidOutputs: ['1000x minecraft:water']
        }
    ];

    // 基础模式热力加工定义用于当前版本的
    // MBD2 替代配方。旧版专属原料仍以物品 ID 或标签保留；
    e6eThermalMbd2Recipes.push(
        // 基础模式的粉碎机配方。
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/netherite_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/netherite'],
            itemOutputs: ['2x minecraft:netherite_scrap']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/pink_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:pink_sandstone'],
            itemOutputs: ['2x byg:pink_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/purple_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:purple_sandstone'],
            itemOutputs: ['2x byg:purple_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/blue_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:blue_sandstone'],
            itemOutputs: ['2x byg:blue_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/white_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:white_sandstone'],
            itemOutputs: ['2x byg:white_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/black_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:black_sandstone'],
            itemOutputs: ['2x byg:black_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/arid_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['atmospheric:arid_sandstone'],
            itemOutputs: [
                '2x atmospheric:arid_sand',
                { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }
            ]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/red_arid_sandstone',
            ticks: 100,
            fe: 2000,
            itemInputs: ['atmospheric:red_arid_sandstone'],
            itemOutputs: [
                '2x atmospheric:red_arid_sand',
                { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }
            ]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/limesand',
            ticks: 100,
            fe: 2000,
            itemInputs: ['create:limesand'],
            itemOutputs: [
                { stack: 'emendatusenigmatica:silicon_gem', chance: 0.5 },
                { stack: 'emendatusenigmatica:silicon_gem', chance: 0.25 }
            ]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/aurora',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:storage_blocks/aurora'],
            itemOutputs: ['4x betterendforge:crystal_shards']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/emmer_flour',
            ticks: 100,
            fe: 2000,
            itemInputs: ['atum:emmer'],
            itemOutputs: ['atum:emmer_flour', { stack: 'atum:emmer_flour', chance: 0.25 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/quartzite_sand',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:raw_quartz_block'],
            itemOutputs: ['2x byg:quartzite_sand', { stack: 'byg:quartzite_sand', chance: 0.5 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/quartzite_to_quartz',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:quartzite_sand'],
            itemOutputs: ['minecraft:sand', { stack: 'minecraft:quartz', chance: 0.2 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/obsidian_dust',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:obsidian'],
            itemOutputs: ['4x emendatusenigmatica:obsidian_dust']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/blaze_rod',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:rods/blaze'],
            itemOutputs: ['3x minecraft:blaze_powder', { stack: 'emendatusenigmatica:sulfur_dust', chance: 0.25 }]
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/petcoke_dust',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:coal_petcoke'],
            itemOutputs: ['immersivepetroleum:petcoke_dust']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/petcoke_block',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:storage_blocks/coal_petcoke'],
            itemOutputs: ['9x immersivepetroleum:petcoke_dust']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/coke_block',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:storage_blocks/coal_coke'],
            itemOutputs: ['9x emendatusenigmatica:coke_dust']
        },
        {
            machine: 'thermal_pulverizer',
            id: 'source_base/pulverizer/starmetal_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/starmetal'],
            itemOutputs: [
                '2x astralsorcery:stardust',
                { stack: 'astralsorcery:stardust', chance: 0.1 },
                { stack: 'minecraft:gravel', chance: 0.2 }
            ]
        },

        // 基础模式的锯木机配方。
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/sticks_from_planks',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#minecraft:planks'],
            itemOutputs: ['6x minecraft:stick', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/sticks_from_slabs',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#minecraft:wooden_slabs'],
            itemOutputs: ['3x minecraft:stick', { stack: 'emendatusenigmatica:wood_dust', chance: 0.125 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/sticks_from_stairs',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#minecraft:wooden_stairs'],
            itemOutputs: ['9x minecraft:stick', { stack: 'emendatusenigmatica:wood_dust', chance: 0.375 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/ancient_log',
            ticks: 100,
            fe: 2000,
            itemInputs: ['naturesaura:ancient_log'],
            itemOutputs: ['6x naturesaura:ancient_planks', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/ancient_bark',
            ticks: 100,
            fe: 2000,
            itemInputs: ['naturesaura:ancient_bark'],
            itemOutputs: ['6x naturesaura:ancient_planks', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/livingwood',
            ticks: 100,
            fe: 2000,
            itemInputs: ['botania:livingwood'],
            itemOutputs: ['6x botania:livingwood_planks', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/infused_wood',
            ticks: 100,
            fe: 2000,
            itemInputs: ['astralsorcery:infused_wood'],
            itemOutputs: ['6x astralsorcery:infused_wood_planks', { stack: 'astralsorcery:stardust', chance: 0.01 }]
        },
        {
            machine: 'thermal_sawmill',
            id: 'source_base/sawmill/aphorism_tile',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:storage_blocks/quartz'],
            itemOutputs: [
                '2x pneumaticcraft:aphorism_tile',
                { stack: 'emendatusenigmatica:quartz_dust', chance: 0.375 }
            ]
        },

        // 带流体输入或输出的基础模式机器配方。
        {
            machine: 'thermal_centrifuge',
            id: 'source_base/centrifuge/bitumen_ore',
            ticks: 100,
            fe: 400,
            itemInputs: ['#forge:ores/bitumen'],
            itemOutputs: [
                { stack: 'minecraft:gravel', chance: 0.75 },
                'emendatusenigmatica:bitumen_gem',
                { stack: 'emendatusenigmatica:bitumen_gem', chance: 0.5 },
                'thermal:tar'
            ],
            fluidOutputs: ['100x pneumaticcraft:oil']
        },
        {
            machine: 'thermal_centrifuge',
            id: 'source_base/centrifuge/blood_slime_leaves',
            ticks: 100,
            fe: 400,
            itemInputs: ['tconstruct:blood_slime_leaves'],
            itemOutputs: [
                'minecraft:nether_wart',
                { stack: 'minecraft:nether_wart', chance: 0.5 },
                { stack: 'tconstruct:blood_slime_sapling', chance: 0.1 },
                { stack: 'tconstruct:ichor_slime_ball', chance: 0.25 }
            ],
            fluidOutputs: ['50x tconstruct:blood']
        },
        {
            machine: 'thermal_crucible',
            id: 'source_base/crucible/magma_cream',
            ticks: 100,
            fe: 5000,
            itemInputs: ['minecraft:magma_cream'],
            fluidOutputs: ['250x tconstruct:magma']
        },
        {
            machine: 'thermal_refinery',
            id: 'source_base/refinery/oil_cracking',
            ticks: 100,
            itemOutputs: [{ stack: 'emendatusenigmatica:bitumen_gem', chance: 0.1 }],
            fluidInputs: ['100x pneumaticcraft:oil'],
            fluidOutputs: ['40x thermal:heavy_oil', '60x thermal:light_oil']
        },
        {
            machine: 'thermal_refinery',
            id: 'source_base/refinery/syrup_to_sugar',
            ticks: 100,
            itemOutputs: ['2x minecraft:sugar'],
            fluidInputs: ['25x thermal:syrup']
        },
        {
            machine: 'thermal_pyrolyzer',
            id: 'source_base/pyrolyzer/coal',
            ticks: 100,
            fe: 4000,
            itemInputs: ['#forge:gems/coal'],
            itemOutputs: ['emendatusenigmatica:coke_gem', { stack: 'thermal:tar', chance: 0.25 }],
            fluidOutputs: ['250x immersiveengineering:creosote']
        },
        {
            machine: 'thermal_pyrolyzer',
            id: 'source_base/pyrolyzer/bitumen',
            ticks: 100,
            fe: 4000,
            itemInputs: ['#forge:gems/bitumen'],
            itemOutputs: ['emendatusenigmatica:coke_gem', { stack: 'thermal:tar', chance: 0.5 }],
            fluidOutputs: ['50x thermal:heavy_oil']
        },
        {
            machine: 'thermal_chiller',
            id: 'source_base/chiller/magma_cream_from_blazing_blood',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:slimeballs'],
            fluidInputs: ['50x tconstruct:blazing_blood'],
            itemOutputs: ['minecraft:magma_cream']
        },
        {
            machine: 'thermal_chiller',
            id: 'source_base/chiller/magma_cream_from_magma',
            ticks: 100,
            fe: 2000,
            itemInputs: ['thermal:chiller_ball_cast'],
            fluidInputs: ['250x tconstruct:magma'],
            itemOutputs: ['minecraft:magma_cream']
        },
        {
            machine: 'thermal_chiller',
            id: 'source_base/chiller/slime_ball_from_earth_slime',
            ticks: 100,
            fe: 2000,
            itemInputs: ['thermal:chiller_ball_cast'],
            fluidInputs: ['250x tconstruct:earth_slime'],
            itemOutputs: ['minecraft:slime_ball']
        },
        {
            machine: 'thermal_chiller',
            id: 'source_base/chiller/blood_slime_ball',
            ticks: 100,
            fe: 2000,
            itemInputs: ['thermal:chiller_ball_cast'],
            fluidInputs: ['250x tconstruct:blood'],
            itemOutputs: ['tconstruct:blood_slime_ball']
        },
        {
            machine: 'thermal_chiller',
            id: 'source_base/chiller/ender_slime_ball',
            ticks: 100,
            fe: 2000,
            itemInputs: ['thermal:chiller_ball_cast'],
            fluidInputs: ['250x tconstruct:ender_slime'],
            itemOutputs: ['tconstruct:ender_slime_ball']
        },
        {
            machine: 'thermal_chiller',
            id: 'source_base/chiller/sky_slime_ball',
            ticks: 100,
            fe: 2000,
            itemInputs: ['thermal:chiller_ball_cast'],
            fluidInputs: ['250x tconstruct:sky_slime'],
            itemOutputs: ['tconstruct:sky_slime_ball']
        }
    );

    // 资源蜜蜂的各品种在原整合包中会展开成明确的热力配方，
    // 原整合包中的定义。MBD2 配方清单也应保留每条生成的配方。
    honeyVarieties.forEach((honeyVariety) => {
        const honey = honeyVariety.split(':')[1];
        const bottleOutput =
            honeyVariety === 'resourcefulbees:honey' ? 'minecraft:honey_bottle' : honeyVariety + '_bottle';
        const blockOutput =
            honeyVariety === 'resourcefulbees:honey' ? 'minecraft:honey_block' : honeyVariety + '_block';

        e6eThermalMbd2Recipes.push(
            {
                machine: 'thermal_bottler',
                id: 'source_base/bottler/' + honey + '_bottle',
                ticks: 100,
                itemInputs: ['minecraft:glass_bottle'],
                fluidInputs: ['250x ' + honeyVariety],
                itemOutputs: [bottleOutput]
            },
            {
                machine: 'thermal_chiller',
                id: 'source_base/chiller/' + honey + '_block',
                ticks: 100,
                fluidInputs: ['1000x ' + honeyVariety],
                itemOutputs: [blockOutput]
            },
            {
                machine: 'thermal_crucible',
                id: 'source_base/crucible/' + honey + '_block_to_honey',
                ticks: 100,
                itemInputs: [blockOutput],
                fluidOutputs: ['1000x ' + honeyVariety]
            }
        );

        if (honeyVariety !== 'resourcefulbees:honey') {
            e6eThermalMbd2Recipes.push({
                machine: 'thermal_centrifuge',
                id: 'source_base/centrifuge/' + honey + '_bottle',
                ticks: 100,
                itemInputs: [bottleOutput],
                itemOutputs: ['minecraft:glass_bottle'],
                fluidOutputs: ['250x ' + honeyVariety]
            });
        }
    });

    e6eThermalMbd2Recipes.push(
        // 基础模式中尚未由通用合金配方覆盖的感应炉配方。
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/nickel_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/nickel'],
            itemOutputs: [
                'emendatusenigmatica:nickel_ingot',
                { stack: 'minecraft:iron_ingot', chance: 0.2 },
                { stack: 'thermal:rich_slag', chance: 0.2 }
            ]
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/aluminum_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/aluminum'],
            itemOutputs: [
                'emendatusenigmatica:aluminum_ingot',
                { stack: 'minecraft:iron_ingot', chance: 0.2 },
                { stack: 'thermal:rich_slag', chance: 0.2 }
            ]
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/uranium_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/uranium'],
            itemOutputs: [
                'emendatusenigmatica:uranium_ingot',
                { stack: 'emendatusenigmatica:lead_ingot', chance: 0.2 },
                { stack: 'thermal:rich_slag', chance: 0.2 }
            ]
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/osmium_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/osmium'],
            itemOutputs: [
                'emendatusenigmatica:osmium_ingot',
                { stack: 'emendatusenigmatica:tin_ingot', chance: 0.2 },
                { stack: 'thermal:rich_slag', chance: 0.2 }
            ]
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/zinc_ore',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ores/zinc'],
            itemOutputs: [
                'emendatusenigmatica:zinc_ingot',
                { stack: 'minecraft:gold_ingot', chance: 0.2 },
                { stack: 'thermal:rich_slag', chance: 0.2 }
            ]
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/steel_from_coke',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ingots/iron', '#forge:dusts/coal_coke'],
            itemOutputs: ['emendatusenigmatica:steel_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/steel_from_petcoke',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ingots/iron', '#forge:dusts/coal_petcoke'],
            itemOutputs: ['emendatusenigmatica:steel_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/pewter_ingot',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
            itemOutputs: ['2x eidolon:pewter_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/terminite_from_iron',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
            itemOutputs: ['betterendforge:terminite_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/terminite_from_thallasium',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'],
            itemOutputs: ['betterendforge:terminite_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/aeternium_ingot',
            ticks: 100,
            fe: 2000,
            itemInputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'],
            itemOutputs: ['betterendforge:aeternium_ingot']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/quartz_from_quartzite_sand',
            ticks: 100,
            fe: 2000,
            itemInputs: ['byg:quartzite_sand'],
            itemOutputs: ['minecraft:quartz', 'thermal:slag']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/cured_rubber',
            ticks: 100,
            fe: 2000,
            itemInputs: ['2x industrialforegoing:dryrubber', '#forge:dusts/sulfur'],
            itemOutputs: ['2x thermal:cured_rubber']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/invar_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:bee_jar',
                'resourcefulbees:nickel_honeycomb_block',
                '2x resourcefulbees:iron_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:invar_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/steel_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:bee_jar',
                '#forge:storage_blocks/coal_coke',
                'resourcefulbees:iron_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:steel_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/brass_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:bee_jar',
                'resourcefulbees:zinc_honeycomb_block',
                '3x resourcefulbees:copper_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:brass_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/bronze_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:bee_jar',
                'resourcefulbees:tin_honeycomb_block',
                '3x resourcefulbees:copper_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:bronze_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/constantan_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:bee_jar',
                'resourcefulbees:nickel_honeycomb_block',
                'resourcefulbees:copper_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:constantan_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/lumium_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:silver_honeycomb_block',
                '3x resourcefulbees:tin_honeycomb_block',
                '2x resourcefulbees:glowstone_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:lumium_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/signalum_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:silver_honeycomb_block',
                '3x resourcefulbees:copper_honeycomb_block',
                '4x resourcefulbees:redstone_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:signalum_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/enderium_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:diamond_honeycomb_block',
                '3x resourcefulbees:lead_honeycomb_block',
                '2x resourcefulbees:ender_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:enderium_bee"}]']
        },
        {
            machine: 'thermal_induction_smelter',
            id: 'source_base/smelter/electrum_bee_jar',
            ticks: 100,
            fe: 2000,
            itemInputs: [
                'resourcefulbees:bee_jar',
                'resourcefulbees:silver_honeycomb_block',
                'resourcefulbees:gold_honeycomb_block'
            ],
            itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:electrum_bee"}]']
        },

        // 基础模式中不依赖蜜蜂专用动态循环的热力压榨机配方。
        {
            machine: 'thermal_press',
            id: 'source_base/press/mold_plate',
            ticks: 100,
            fe: 2400,
            itemInputs: ['3x #forge:plates/steel', '#forge:plates/steel'],
            itemOutputs: ['immersiveengineering:mold_plate']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/mold_wire',
            ticks: 100,
            fe: 2400,
            itemInputs: ['3x #forge:plates/steel', '#forge:wires/steel'],
            itemOutputs: ['immersiveengineering:mold_wire']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/mold_gear',
            ticks: 100,
            fe: 2400,
            itemInputs: ['3x #forge:plates/steel', '#forge:gears/steel'],
            itemOutputs: ['immersiveengineering:mold_gear']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/mold_rod',
            ticks: 100,
            fe: 2400,
            itemInputs: ['3x #forge:plates/steel', '#forge:rods/steel'],
            itemOutputs: ['immersiveengineering:mold_rod']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/empty_casing',
            ticks: 100,
            fe: 2400,
            itemInputs: ['#forge:ingots/copper', '#thermal:crafting/dies/bullet_casing'],
            itemOutputs: ['2x immersiveengineering:empty_casing']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/pink_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['byg:pink_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x byg:pink_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/purple_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['byg:purple_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x byg:purple_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/blue_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['byg:blue_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x byg:blue_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/white_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['byg:white_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x byg:white_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/black_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['byg:black_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x byg:black_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/arid_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['atmospheric:arid_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x atmospheric:arid_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/red_arid_sand',
            ticks: 100,
            fe: 2400,
            itemInputs: ['atmospheric:red_arid_sandstone', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['4x atmospheric:red_arid_sand']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/snow_block',
            ticks: 100,
            fe: 2400,
            itemInputs: ['betterendforge:dense_snow', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['9x minecraft:snow_block']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/dense_snow',
            ticks: 100,
            fe: 2400,
            itemInputs: ['9x minecraft:snow_block', '#thermal:crafting/dies/packing_3x3'],
            itemOutputs: ['betterendforge:dense_snow']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/honeycomb_block',
            ticks: 100,
            fe: 2400,
            itemInputs: ['9x minecraft:honeycomb', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['minecraft:honeycomb_block']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/honeycomb',
            ticks: 100,
            fe: 2400,
            itemInputs: ['minecraft:honeycomb_block', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['9x minecraft:honeycomb']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/hdpe_sheet',
            ticks: 100,
            fe: 2400,
            itemInputs: ['mekanism:hdpe_pellet'],
            itemOutputs: ['mekanism:hdpe_sheet']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/vine_to_latex',
            ticks: 100,
            fe: 400,
            itemInputs: ['minecraft:vine'],
            fluidOutputs: ['50x industrialforegoing:latex']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/dandelion_to_latex',
            ticks: 100,
            fe: 400,
            itemInputs: ['minecraft:dandelion'],
            fluidOutputs: ['50x industrialforegoing:latex']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/osmium_block',
            ticks: 100,
            fe: 2400,
            itemInputs: ['9x emendatusenigmatica:osmium_ingot', '#thermal:crafting/dies/packing_3x3'],
            itemOutputs: ['emendatusenigmatica:osmium_block']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/aluminum_block',
            ticks: 100,
            fe: 2400,
            itemInputs: ['9x emendatusenigmatica:aluminum_ingot', '#thermal:crafting/dies/packing_3x3'],
            itemOutputs: ['emendatusenigmatica:aluminum_block']
        },
        {
            machine: 'thermal_press',
            id: 'source_base/press/uranium_block',
            ticks: 100,
            fe: 2400,
            itemInputs: ['9x emendatusenigmatica:uranium_ingot', '#thermal:crafting/dies/packing_3x3'],
            itemOutputs: ['emendatusenigmatica:uranium_block']
        }
    );

    combVariants.forEach((e6eSourceComb) => {
        e6eThermalMbd2Recipes.push(
            {
                machine: 'thermal_press',
                id: 'source_base/press/' + e6eSourceComb + '_honeycomb_block',
                ticks: 100,
                fe: 2400,
                itemInputs: [
                    '9x resourcefulbees:' + e6eSourceComb + '_honeycomb',
                    '#thermal:crafting/dies/packing_3x3'
                ],
                itemOutputs: ['resourcefulbees:' + e6eSourceComb + '_honeycomb_block']
            },
            {
                machine: 'thermal_press',
                id: 'source_base/press/' + e6eSourceComb + '_honeycomb',
                ticks: 100,
                fe: 2400,
                itemInputs: [
                    'resourcefulbees:' + e6eSourceComb + '_honeycomb_block',
                    '#thermal:crafting/dies/unpacking'
                ],
                itemOutputs: ['9x resourcefulbees:' + e6eSourceComb + '_honeycomb']
            }
        );
    });

    // 热力系列的四种可配置燃料表改为明确的 MBD2 能源炉配方。
    const e6eSourceThermalFuelRecipes = [
        // 压缩能源炉：输入 1000 mB，FE 产量采用原配方乘以 10 后的数值。
        ['thermal_dynamo_compression', 'compression/pneumaticcraft_diesel', 'fluid', 'pneumaticcraft:diesel', 10000000],
        [
            'thermal_dynamo_compression',
            'compression/immersivepetroleum_diesel',
            'fluid',
            'immersivepetroleum:diesel',
            10000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/pneumaticcraft_biodiesel',
            'fluid',
            'pneumaticcraft:biodiesel',
            10000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/immersiveengineering_biodiesel',
            'fluid',
            'immersiveengineering:biodiesel',
            10000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/pneumaticcraft_kerosene',
            'fluid',
            'pneumaticcraft:kerosene',
            11000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/pneumaticcraft_gasoline',
            'fluid',
            'pneumaticcraft:gasoline',
            15000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/immersivepetroleum_gasoline',
            'fluid',
            'immersivepetroleum:gasoline',
            15000000
        ],
        ['thermal_dynamo_compression', 'compression/pneumaticcraft_lpg', 'fluid', 'pneumaticcraft:lpg', 18000000],
        ['thermal_dynamo_compression', 'compression/mekanism_ethene', 'fluid', 'mekanism:ethene', 18000000],
        [
            'thermal_dynamo_compression',
            'compression/pneumaticcraft_ethanol',
            'fluid',
            'pneumaticcraft:ethanol',
            4000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/mekanismgenerators_bioethanol',
            'fluid',
            'mekanismgenerators:bioethanol',
            4000000
        ],
        [
            'thermal_dynamo_compression',
            'compression/immersiveengineering_ethanol',
            'fluid',
            'immersiveengineering:ethanol',
            4000000
        ],
        ['thermal_dynamo_compression', 'compression/thermal_tree_oil', 'fluid', 'thermal:tree_oil', 1000000],
        ['thermal_dynamo_compression', 'compression/thermal_creosote', 'fluid', 'thermal:creosote', 200000],
        [
            'thermal_dynamo_compression',
            'compression/immersiveengineering_creosote',
            'fluid',
            'immersiveengineering:creosote',
            200000
        ],
        ['thermal_dynamo_compression', 'compression/thermal_refined_fuel', 'fluid', 'thermal:refined_fuel', 15000000],
        [
            'thermal_dynamo_compression',
            'compression/resourcefulbees_rocket_honey',
            'fluid',
            'resourcefulbees:rocket_honey',
            15000000
        ],
        // 珠宝能源炉：采用原版数值的 40 倍。
        ['thermal_dynamo_lapidary', 'lapidary/lapis', 'item', '#forge:gems/lapis', 1600000],
        ['thermal_dynamo_lapidary', 'lapidary/prismarine', 'item', '#forge:gems/prismarine', 1600000],
        ['thermal_dynamo_lapidary', 'lapidary/quartz', 'item', '#forge:gems/quartz', 1600000],
        ['thermal_dynamo_lapidary', 'lapidary/diamond', 'item', '#forge:gems/diamond', 20000000],
        ['thermal_dynamo_lapidary', 'lapidary/emerald', 'item', '#forge:gems/emerald', 5000000],
        ['thermal_dynamo_lapidary', 'lapidary/mana_diamond', 'item', '#forge:gems/mana_diamond', 25000000],
        ['thermal_dynamo_lapidary', 'lapidary/dragonstone', 'item', '#forge:gems/dragonstone', 30000000],
        ['thermal_dynamo_lapidary', 'lapidary/mana', 'item', '#forge:gems/mana', 400000],
        ['thermal_dynamo_lapidary', 'lapidary/fluorite', 'item', '#forge:gems/fluorite', 1600000],
        ['thermal_dynamo_lapidary', 'lapidary/dimensional', 'item', '#forge:gems/dimensional', 28000000],
        ['thermal_dynamo_lapidary', 'lapidary/apatite', 'item', '#forge:gems/apatite', 1600000],
        ['thermal_dynamo_lapidary', 'lapidary/aquarmarine', 'item', '#forge:gems/aquarmarine', 400000],
        ['thermal_dynamo_lapidary', 'lapidary/amber', 'item', '#forge:gems/amber', 6400000],
        // 熔岩能源炉。
        ['thermal_dynamo_magmatic', 'magmatic/blazing_blood', 'fluid', 'tconstruct:blazing_blood', 10000000],
        // 货币能源炉：采用原版数值的 40 倍。
        ['thermal_dynamo_numismatic', 'numismatic/gold_coin', 'item', '#forge:coins/gold', 2560000],
        ['thermal_dynamo_numismatic', 'numismatic/invar_coin', 'item', '#forge:coins/invar', 1920000],
        ['thermal_dynamo_numismatic', 'numismatic/iron_coin', 'item', '#forge:coins/iron', 1280000],
        ['thermal_dynamo_numismatic', 'numismatic/enderium_coin', 'item', '#forge:coins/enderium', 6400000],
        ['thermal_dynamo_numismatic', 'numismatic/lead_coin', 'item', '#forge:coins/lead', 1920000],
        ['thermal_dynamo_numismatic', 'numismatic/lumium_coin', 'item', '#forge:coins/lumium', 3200000],
        ['thermal_dynamo_numismatic', 'numismatic/nickel_coin', 'item', '#forge:coins/nickel', 2560000],
        ['thermal_dynamo_numismatic', 'numismatic/signalum_coin', 'item', '#forge:coins/signalum', 3200000],
        ['thermal_dynamo_numismatic', 'numismatic/silver_coin', 'item', '#forge:coins/silver', 1920000],
        ['thermal_dynamo_numismatic', 'numismatic/tin_coin', 'item', '#forge:coins/tin', 1280000],
        ['thermal_dynamo_numismatic', 'numismatic/bronze_coin', 'item', '#forge:coins/bronze', 1600000],
        ['thermal_dynamo_numismatic', 'numismatic/constantan_coin', 'item', '#forge:coins/constantan', 2240000],
        ['thermal_dynamo_numismatic', 'numismatic/copper_coin', 'item', '#forge:coins/copper', 1280000],
        ['thermal_dynamo_numismatic', 'numismatic/electrum_coin', 'item', '#forge:coins/electrum', 2400000],
        ['thermal_dynamo_numismatic', 'numismatic/netherite_coin', 'item', '#forge:coins/netherite', 12800000]
    ];
    e6eSourceThermalFuelRecipes.forEach((fuel) => {
        const definition = {
            machine: fuel[0],
            id: 'source_base/dynamo/' + fuel[1],
            ticks: 100,
            feOutputs: fuel[4]
        };
        if (fuel[2] === 'fluid') definition.fluidInputs = ['1000x ' + fuel[3]];
        else definition.itemInputs = [fuel[3]];
        e6eThermalMbd2Recipes.push(definition);
    });

    e6eThermalMbd2Recipes.push(
        // 原专家模式专属的燃料和机器配方。
        {
            machine: 'thermal_dynamo_compression',
            id: 'source_expert/dynamo/compression_biofuel',
            ticks: 100,
            fluidInputs: ['1000x industrialforegoing:biofuel'],
            feOutputs: 10000000
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/dryrubber',
            ticks: 100,
            fe: 12000,
            itemInputs: ['#forge:dusts/sulfur'],
            fluidInputs: ['900x industrialforegoing:latex'],
            itemOutputs: ['industrialforegoing:dryrubber']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/foundry_controller_from_superheated_steel',
            ticks: 100,
            fe: 10000,
            itemInputs: ['#forge:ingots/superheated_steel'],
            fluidInputs: ['1152x tconstruct:scorched_stone'],
            itemOutputs: ['tconstruct:foundry_controller']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/foundry_controller_from_hot_compressed_iron',
            ticks: 100,
            fe: 10000,
            itemInputs: ['#forge:ingots/hot_compressed_iron'],
            fluidInputs: ['1152x tconstruct:scorched_stone'],
            itemOutputs: ['tconstruct:foundry_controller']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/reinforced_stone',
            ticks: 100,
            fe: 8000,
            itemInputs: ['minecraft:light_gray_concrete_powder'],
            fluidInputs: ['18x kubejs:molten_compressed_iron'],
            itemOutputs: ['pneumaticcraft:reinforced_stone']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/memory_basic',
            ticks: 100,
            fe: 8000,
            itemInputs: ['kubejs:memory_basic_empty'],
            fluidInputs: ['8000x pneumaticcraft:memory_essence'],
            itemOutputs: ['kubejs:memory_basic_filled']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/memory_advanced',
            ticks: 100,
            fe: 16000,
            itemInputs: ['kubejs:memory_advanced_empty'],
            fluidInputs: ['16000x pneumaticcraft:memory_essence'],
            itemOutputs: ['kubejs:memory_advanced_filled']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/memory_elite',
            ticks: 100,
            fe: 32000,
            itemInputs: ['kubejs:memory_elite_empty'],
            fluidInputs: ['32000x pneumaticcraft:memory_essence'],
            itemOutputs: ['kubejs:memory_elite_filled']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/memory_ultimate',
            ticks: 100,
            fe: 64000,
            itemInputs: ['kubejs:memory_ultimate_empty'],
            fluidInputs: ['64000x pneumaticcraft:memory_essence'],
            itemOutputs: ['kubejs:memory_ultimate_filled']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/blaze_bullet',
            ticks: 100,
            fe: 100,
            itemInputs: ['gunswithoutroses:iron_bullet'],
            fluidInputs: ['5x tconstruct:blazing_blood'],
            itemOutputs: ['gunswithoutroses:blaze_bullet']
        },
        {
            machine: 'thermal_bottler',
            id: 'source_expert/bottler/flare_chakram',
            ticks: 100,
            fe: 15000,
            itemInputs: ['botania:thorn_chakram'],
            fluidInputs: ['1000x tconstruct:blazing_blood'],
            itemOutputs: ['botania:flare_chakram']
        },
        {
            machine: 'thermal_phytogenic_insolator',
            id: 'source_expert/insolator/sunmetal_blend',
            ticks: 100,
            fe: 10000,
            itemInputs: ['#forge:dusts/silver'],
            fluidInputs: ['1000x minecraft:water'],
            itemOutputs: ['architects_palette:sunmetal_blend']
        },
        {
            machine: 'thermal_press',
            id: 'source_expert/press/hot_compressed_iron_ingot',
            ticks: 100,
            fe: 1000,
            itemInputs: ['4x kubejs:superheated_steel_ingot', '#thermal:crafting/dies/packing_2x2'],
            itemOutputs: ['2x kubejs:hot_compressed_iron_ingot']
        },
        {
            machine: 'thermal_press',
            id: 'source_expert/press/hot_compressed_iron_block',
            ticks: 100,
            fe: 9000,
            itemInputs: ['4x kubejs:superheated_steel_block', '#thermal:crafting/dies/packing_2x2'],
            itemOutputs: ['2x kubejs:hot_compressed_iron_block']
        },
        {
            machine: 'thermal_press',
            id: 'source_expert/press/saw_blade',
            ticks: 100,
            fe: 9000,
            itemInputs: [
                'tconstruct:large_plate[minecraft:custom_data={Material:"tconstruct:invar"}]',
                'immersiveengineering:mold_gear'
            ],
            itemOutputs: ['thermal:saw_blade']
        }
    );

    // 原热力树液提取机使用树干与树叶配对的配方；其
    // 肥料催化剂改为第二条配方，保留原版 1.7 倍产量。
    treeRegistry.forEach((e6eSourceTreeCategory, e6eSourceTreeCategoryIndex) => {
        e6eSourceTreeCategory.trees.forEach((e6eSourceTree, e6eSourceTreeIndex) => {
            if (!e6eSourceTree.sap || !e6eSourceTree.rate || e6eSourceTree.rate.living <= 0) return;
            const sourceTreeId = e6eSourceTreeCategoryIndex + '/' + e6eSourceTreeIndex;
            e6eThermalMbd2Recipes.push({
                machine: 'thermal_tree_extractor',
                id: 'source_base/tree_extractor/' + sourceTreeId,
                ticks: 100,
                itemInputs: [e6eSourceTree.trunk, e6eSourceTree.leaf],
                fluidOutputs: [e6eSourceTree.rate.living + 'x ' + e6eSourceTree.sap]
            });
            e6eThermalMbd2Recipes.push({
                machine: 'thermal_tree_extractor',
                id: 'source_base/tree_extractor/' + sourceTreeId + '_fertilizer_boost',
                ticks: 100,
                itemInputs: [e6eSourceTree.trunk, e6eSourceTree.leaf, 'industrialforegoing:fertilizer'],
                fluidOutputs: [Math.round(e6eSourceTree.rate.living * 1.7) + 'x ' + e6eSourceTree.sap]
            });
        });
    });

    // 由原热力系列联动改写的额外坩埚熔炼和冷却机铸造配方。
    const e6eThermalCrucibleMaterials = [
        { name: 'shadow_steel', fluid: 'materialis:molten_shadow_steel', forms: ['ingot'] },
        { name: 'refined_radiance', fluid: 'materialis:molten_refined_radiance', forms: ['ingot'] },
        { name: 'forgotten_metal', fluid: 'materialis:molten_forgotten_metal', forms: ['block', 'ingot', 'nugget'] },
        { name: 'fairy', fluid: 'materialis:molten_fairy', forms: ['block', 'ingot', 'nugget'] },
        { name: 'arcane_gold', fluid: 'materialis:molten_arcane_gold', forms: ['block', 'ingot', 'nugget'] },
        { name: 'refined_obsidian', fluid: 'materialis:molten_refined_obsidian', forms: ['block', 'ingot', 'nugget'] },
        {
            name: 'refined_glowstone',
            fluid: 'materialis:molten_refined_glowstone',
            forms: ['block', 'ingot', 'nugget']
        },
        { name: 'pink_slime', fluid: 'materialis:molten_pink_slime', forms: ['ingot'] },
        { name: 'neptunium', fluid: 'materialis:molten_neptunium', forms: ['block', 'ingot', 'nugget'] },
        { name: 'netherite', fluid: 'tconstruct:molten_netherite', forms: ['ingot', 'nugget'] }
    ];
    e6eThermalCrucibleMaterials.forEach((material) => {
        material.forms.forEach((form) => {
            const amount = form === 'block' ? 1296 : form === 'ingot' ? 144 : 16;
            const tag = form === 'block' ? 'storage_blocks' : form === 'ingot' ? 'ingots' : 'nuggets';
            e6eThermalMbd2Recipes.push({
                machine: 'thermal_crucible',
                id: 'crucible/' + material.name + '_' + form,
                ticks: form === 'block' ? 240 : 120,
                fe: form === 'block' ? 40000 : form === 'ingot' ? 5000 : 555,
                itemInputs: ['#forge:' + tag + '/' + material.name],
                fluidOutputs: [amount + 'x ' + material.fluid]
            });
        });
    });

    const e6eThermalChillerCastings = [
        { fluid: 'tconstruct:molten_clay', amount: 144, mold: 'tconstruct:ingot_cast', output: 'minecraft:brick' },
        {
            fluid: 'tconstruct:molten_netherite',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'minecraft:netherite_ingot'
        },
        {
            fluid: 'tconstruct:molten_debris',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'minecraft:netherite_scrap'
        },
        {
            fluid: 'tconstruct:molten_netherite',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'tconstruct:netherite_nugget'
        },
        {
            fluid: 'tconstruct:molten_debris',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'tconstruct:debris_nugget'
        },
        {
            fluid: 'materialis:molten_shadow_steel',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'create:shadow_steel'
        },
        {
            fluid: 'materialis:molten_refined_radiance',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'create:refined_radiance'
        },
        {
            fluid: 'materialis:molten_forgotten_metal',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'undergarden:forgotten_ingot'
        },
        {
            fluid: 'materialis:molten_forgotten_metal',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'undergarden:forgotten_nugget'
        },
        {
            fluid: 'materialis:molten_fairy',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'materialis:fairy_ingot'
        },
        {
            fluid: 'materialis:molten_fairy',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'materialis:fairy_nugget'
        },
        {
            fluid: 'materialis:molten_arcane_gold',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'eidolon_repraised:arcane_gold_ingot'
        },
        {
            fluid: 'materialis:molten_arcane_gold',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'eidolon_repraised:arcane_gold_nugget'
        },
        {
            fluid: 'tconstruct:molten_refined_obsidian',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'mekanism:ingot_refined_obsidian'
        },
        {
            fluid: 'tconstruct:molten_refined_obsidian',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'mekanism:nugget_refined_obsidian'
        },
        {
            fluid: 'tconstruct:molten_refined_glowstone',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'mekanism:ingot_refined_glowstone'
        },
        {
            fluid: 'tconstruct:molten_refined_glowstone',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'mekanism:nugget_refined_glowstone'
        },
        {
            fluid: 'materialis:molten_pink_slime',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'industrialforegoing:pink_slime_ingot'
        },
        {
            fluid: 'materialis:molten_neptunium',
            amount: 144,
            mold: 'tconstruct:ingot_cast',
            output: 'aquaculture:neptunium_ingot'
        },
        {
            fluid: 'materialis:molten_neptunium',
            amount: 16,
            mold: 'tconstruct:nugget_cast',
            output: 'aquaculture:neptunium_nugget'
        },
        { fluid: 'tconstruct:blazing_blood', amount: 100, mold: 'tconstruct:rod_cast', output: 'minecraft:blaze_rod' }
    ];
    e6eThermalChillerCastings.forEach((casting, index) => {
        e6eThermalMbd2Recipes.push({
            machine: 'thermal_chiller',
            id: 'chiller/casting_' + index,
            ticks: 100,
            fe: 5000,
            fluidInputs: [casting.amount + 'x ' + casting.fluid],
            itemInputs: [casting.mold],
            itemOutputs: [casting.mold, casting.output]
        });
    });

    // 热力机器控制器共用附属模组 README 中记录的三种实体结构。
    // 这些机器物品的合成配方与全部 MBD2 加工配方一起由 KubeJS 注册。
    const e6eThermalControllerRecipes = [
        ['thermal_pulverizer', 'mechanical'],
        ['thermal_sawmill', 'mechanical'],
        ['thermal_redstone_furnace', 'heat'],
        ['thermal_induction_smelter', 'heat'],
        ['thermal_press', 'mechanical'],
        ['thermal_compactor', 'mechanical'],
        ['thermal_centrifuge', 'fluid'],
        ['thermal_refinery', 'fluid'],
        ['thermal_fractionating_still', 'fluid'],
        ['thermal_pyrolyzer', 'heat'],
        ['thermal_phytogenic_insolator', 'heat'],
        ['thermal_crucible', 'heat'],
        ['thermal_chiller', 'fluid'],
        ['thermal_bottler', 'fluid'],
        ['thermal_brewer', 'fluid'],
        ['thermal_sequential_fabricator', 'mechanical'],
        ['thermal_tree_extractor', 'fluid'],
        ['thermal_rock_generator', 'heat'],
        ['thermal_water_generator', 'fluid'],
        ['thermal_dynamo_stirling', 'heat'],
        ['thermal_dynamo_compression', 'heat'],
        ['thermal_dynamo_magmatic', 'heat'],
        ['thermal_dynamo_numismatic', 'mechanical'],
        ['thermal_dynamo_lapidary', 'mechanical'],
        ['thermal_dynamo_disenchantment', 'heat']
    ];

    if (Platform.isLoaded('e6e_mbd2')) {
        ServerEvents.recipes((__e6eOriginalEvent) => {
            const event = e6eRecipeTypeView(__e6eOriginalEvent, 'minecraft:crafting_shaped', false, [
                'e6e_mbd2:thermal_bottler',
                'e6e_mbd2:thermal_brewer',
                'e6e_mbd2:thermal_centrifuge',
                'e6e_mbd2:thermal_chiller',
                'e6e_mbd2:thermal_compactor',
                'e6e_mbd2:thermal_crucible',
                'e6e_mbd2:thermal_dynamo_compression',
                'e6e_mbd2:thermal_dynamo_disenchantment',
                'e6e_mbd2:thermal_dynamo_lapidary',
                'e6e_mbd2:thermal_dynamo_magmatic',
                'e6e_mbd2:thermal_dynamo_numismatic',
                'e6e_mbd2:thermal_dynamo_stirling',
                'e6e_mbd2:thermal_fractionating_still',
                'e6e_mbd2:thermal_induction_smelter',
                'e6e_mbd2:thermal_phytogenic_insolator',
                'e6e_mbd2:thermal_press',
                'e6e_mbd2:thermal_pulverizer',
                'e6e_mbd2:thermal_pyrolyzer',
                'e6e_mbd2:thermal_redstone_furnace',
                'e6e_mbd2:thermal_refinery',
                'e6e_mbd2:thermal_rock_generator',
                'e6e_mbd2:thermal_sawmill',
                'e6e_mbd2:thermal_sequential_fabricator',
                'e6e_mbd2:thermal_tree_extractor',
                'e6e_mbd2:thermal_water_generator',
                'minecraft:crafting_shaped'
            ]);
            if (global.isExpertMode == false) return;

            function normalizedIngredient(value) {
                const match = String(value).match(/^(\d+x\s+)?(.+)$/);
                if (!match) return String(value);
                const prefix = match[1] || '';
                const ingredient = match[2];
                if (ingredient.startsWith('#forge:')) {
                    const commonTag = '#' + ingredient.substring('#forge:'.length);
                    if (e6eRecipeIngredientExists(commonTag)) return prefix + commonTag;
                }
                return prefix + ingredient;
            }

            function fluidStack(value) {
                const match = String(value).match(/^(\d+)x\s+([a-z0-9_.-]+:[a-z0-9_./-]+)$/);
                if (!match) return String(value);
                return match[1] + 'x ' + match[2];
            }

            function addItemOutput(recipe, value) {
                const stack = typeof value === 'string' ? value : value.stack;
                if (value.chance === undefined) recipe.outputItems(stack);
                else recipe.chance(value.chance, (chanceRecipe) => chanceRecipe.outputItems(stack));
            }

            let added = 0;
            let unavailableMachines = 0;
            let unavailableIngredients = 0;
            e6eThermalMbd2Recipes.forEach((entry) => {
                const machineBuilder = event.recipes.e6e_mbd2[entry.machine];
                if (typeof machineBuilder !== 'function') {
                    unavailableMachines++;
                    return;
                }

                const itemInputs = (entry.itemInputs || []).map(normalizedIngredient);
                const fluidInputs = (entry.fluidInputs || []).map(fluidStack);
                const itemOutputs = entry.itemOutputs || [];
                const fluidOutputs = (entry.fluidOutputs || []).map(fluidStack);

                const availableItems =
                    itemInputs.every(e6eRecipeIngredientExists) &&
                    itemOutputs.every((value) =>
                        e6eRecipeOutputExists(typeof value === 'string' ? value : value.stack)
                    );
                const availableFluids = fluidInputs
                    .concat(fluidOutputs)
                    .every((value) => e6ePortedFluidExists(String(value).replace(/^\d+x\s+/, '')));
                if (!availableItems || !availableFluids) {
                    unavailableIngredients++;
                    return;
                }

                let recipe = machineBuilder()
                    .id('enigmatica:thermal/mbd2/' + entry.id)
                    .duration(entry.ticks || 100);
                itemInputs.forEach((stack) => recipe.inputItems(stack));
                fluidInputs.forEach((stack) => recipe.inputFluids(stack));
                itemOutputs.forEach((stack) => addItemOutput(recipe, stack));
                fluidOutputs.forEach((stack) => recipe.outputFluids(stack));
                if (entry.fe) recipe.inputFE(entry.fe);
                if (entry.feOutputs) recipe.outputFE(entry.feOutputs);
                added++;
            });

            console.info(
                '[E6E MBD2 Thermal] attempted ' +
                    added +
                    ' recipe definitions; unavailable machine builders: ' +
                    unavailableMachines +
                    '; unavailable ingredients: ' +
                    unavailableIngredients
            );

            const controllerInputs = {
                mechanical: {
                    pattern: ['ABA', 'CDE', 'FFF'],
                    key: {
                        A: 'minecraft:iron_ingot',
                        B: 'minecraft:piston',
                        C: 'e6e_mbd2:energy_input',
                        D: 'e6e_mbd2:item_input',
                        E: 'e6e_mbd2:item_output',
                        F: 'create:andesite_casing'
                    }
                },
                heat: {
                    pattern: ['ABA', 'CDE', 'FFF'],
                    key: {
                        A: 'minecraft:copper_ingot',
                        B: 'minecraft:blast_furnace',
                        C: 'e6e_mbd2:energy_input',
                        D: 'e6e_mbd2:item_input',
                        E: 'e6e_mbd2:item_output',
                        F: 'immersiveengineering:blastbrick'
                    }
                },
                fluid: {
                    pattern: ['ABA', 'CDE', 'FFF'],
                    key: {
                        A: 'minecraft:glass_pane',
                        B: 'minecraft:bucket',
                        C: 'e6e_mbd2:fluid_input',
                        D: 'e6e_mbd2:energy_input',
                        E: 'e6e_mbd2:fluid_output',
                        F: 'create:copper_casing'
                    }
                }
            };

            e6eThermalControllerRecipes.forEach(([controller, category]) => {
                const recipe = controllerInputs[category];
                const ingredients = Object.values(recipe.key);
                if (!Item.exists('e6e_mbd2:' + controller) || !ingredients.every((id) => Item.exists(id))) return;
                event
                    .shaped('e6e_mbd2:' + controller, recipe.pattern, recipe.key)
                    .id('e6e_mbd2:controllers/' + controller);
            });
        });
    }
})();
