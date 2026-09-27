// 配方类型：pneumaticcraft:pressure_chamber
// 中文名称：压力室加工
// 用途：用于登记气动工艺的压力室加工配方。

(function () {
if (['atum', 'resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            ingredients: [{ type: 'pneumaticcraft:stacked_item', tag: 'forge:grain', count: 1 }],
            pressure: 1.5,
            output: [{ item: 'create:wheat_flour', count: 2 }],
            id: 'pneumaticcraft:pressure_chamber/wheat_flour'
        },
        {
            ingredients: [{ type: 'pneumaticcraft:stacked_item', item: 'atum:emmer', count: 1 }],
            pressure: 1.5,
            output: [{ item: 'atum:emmer_flour', count: 2 }],
            id: `${id_prefix}emmer_flour`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.ingredients,
                pressure: recipe.pressure,
                results: recipe.output
            })
            .id(recipe.id);
    });
});

}
})();

(function () {
// Masterful Machinery 未安装时，用气动工艺压力室代替批量装配台及生命之树。
// 仅补回 E6E 专家版的 KubeJS 自定义输出，不包含蜜蜂物品。
if (e6ePortedRecipeModLoaded('pneumaticcraft') && !e6ePortedRecipeModLoaded('masterfulmachinery')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const idPrefix = 'enigmatica:expert/pneumaticcraft/kubejs_fallback/';
        const recipes = [];

        [
            { source: 'kubejs:basic_circuit_package', output: 'kubejs:batch_basic_circuit_package', count: 32 },
            { source: 'kubejs:basic_memory_package', output: 'kubejs:batch_basic_memory_package', count: 32 },
            { source: 'kubejs:cpu_core_500_package', output: 'kubejs:batch_cpu_core_500_package', count: 32 },
            { source: 'kubejs:cpu_core_1000_package', output: 'kubejs:batch_cpu_core_1000_package', count: 32 },
            { source: 'kubejs:cpu_core_2000_package', output: 'kubejs:batch_cpu_core_2000_package', count: 32 }
        ].forEach((entry) => {
            recipes.push({
                inputs: [{ item: entry.source, count: entry.count }],
                results: [{ item: entry.output, count: 1 }],
                pressure: 4.0,
                id: `${idPrefix}${entry.output.substring('kubejs:'.length)}`
            });
        });

        const storageParts = [
            { mod: 'refinedstorage', sizes: ['1k', '4k', '16k', '64k', '64k_fluid', '256k_fluid', '1024k_fluid', '4096k_fluid'] },
            { mod: 'extrastorage', sizes: ['256k', '1024k', '4096k', '16384k', '16384k_fluid', '65536k_fluid', '262144k_fluid', '1048576k_fluid'] }
        ];
        storageParts.forEach((group) => {
            group.sizes.forEach((size) => {
                const suffix = size.replace('k_fluid', 'b_fluid');
                const input = group.mod === 'extrastorage'
                    ? `extrastorage:storagepart_${suffix}`
                    : `refinedstorage:${suffix}_storage_part`;
                recipes.push({
                    inputs: [{ item: `kubejs:${size}_storage_part_package`, count: 30 }],
                    results: [{ item: `kubejs:batch_${size}_storage_part_package`, count: 1 }],
                    pressure: 4.0,
                    id: `${idPrefix}batch_${size}_storage_part_package`
                });
                if (['1k', '4k', '64k_fluid', '256k_fluid'].includes(size)) {
                    recipes.push({
                        inputs: [{ item: input, count: 1 }, { item: 'mekanism:cardboard_box', count: 1 }],
                        results: [{ item: `kubejs:${size}_storage_part_package`, count: 1 }],
                        pressure: 2.5,
                        id: `${idPrefix}${size}_storage_part_package`
                    });
                }
            });
        });

        recipes.push(
            {
                inputs: [
                    { item: 'astralsorcery:stardust', count: 16 },
                    { item: 'astralsorcery:resonating_gem', count: 4 },
                    { item: 'minecraft:netherite_ingot', count: 4 },
                    { item: 'mekanism:pellet_antimatter', count: 1 }
                ],
                results: [{ item: 'kubejs:laputian_ingot', count: 1 }],
                pressure: 4.5,
                id: `${idPrefix}laputian_ingot`
            },
            {
                inputs: [{ item: 'pneumaticcraft:empty_pcb', count: 32 }],
                results: [{ item: 'kubejs:batch_unassembled_pcb', count: 1 }],
                pressure: 4.0,
                id: `${idPrefix}batch_unassembled_pcb`
            },
            {
                inputs: [{ item: 'pneumaticcraft:compressed_iron_block', count: 32 }],
                results: [{ item: 'kubejs:batch_unassembled_advanced_pressure_tube', count: 1 }],
                pressure: 4.0,
                id: `${idPrefix}batch_unassembled_advanced_pressure_tube`
            },
            {
                inputs: [{ item: 'kubejs:rough_machine_frame', count: 32 }],
                results: [{ item: 'kubejs:batch_unassembled_machine_frame', count: 1 }],
                pressure: 4.0,
                id: `${idPrefix}batch_unassembled_machine_frame`
            }
        );

        const masteryRecipes = [
            {
                name: 'botanical', count: 2, pressure: 4.0,
                inputs: [
                    { item: 'minecraft:oak_leaves', count: 64 },
                    { item: 'astralsorcery:stardust', count: 16 },
                    { item: 'astralsorcery:resonating_gem', count: 4 },
                    { item: 'create:deployer', count: 4 }
                ]
            },
            {
                name: 'astronomy', count: 1, pressure: 4.5,
                inputs: [
                    { item: 'kubejs:observatory_lens', count: 1 },
                    { item: 'astralsorcery:attuned_celestial_crystal', count: 1 },
                    { item: 'astralsorcery:resonating_gem', count: 8 },
                    { item: 'astralsorcery:stardust', count: 32 }
                ]
            },
            {
                name: 'alchemy', count: 1, pressure: 3.5,
                inputs: [
                    { item: 'create:mechanical_mixer', count: 1 },
                    { item: 'create:spout', count: 1 },
                    { item: 'minecraft:glass_bottle', count: 32 },
                    { item: 'minecraft:blaze_powder', count: 16 },
                    { item: 'naturesaura:death_ring', count: 2 }
                ]
            },
            {
                name: 'ritual', count: 5, pressure: 4.0,
                inputs: [
                    { item: 'eidolon_repraised:unholy_symbol', count: 1 },
                    { item: 'neovitae:hellfire_forge', count: 1 },
                    { item: 'neovitae:rune_charging', count: 16 },
                    { item: 'neovitae:rune_acceleration', count: 8 },
                    { item: 'neovitae:rune_dislocation', count: 8 },
                    { item: 'occultism:chalk_gold', count: 8 }
                ]
            },
            {
                name: 'aura', count: 1, pressure: 3.5,
                inputs: [
                    { item: 'naturesaura:aura_trove', count: 1 },
                    { item: 'naturesaura:firework_generator', count: 1 },
                    { item: 'naturesaura:generator_limit_remover', count: 1 },
                    { item: 'naturesaura:projectile_generator', count: 1 },
                    { item: 'naturesaura:aura_detector', count: 8 }
                ]
            },
            {
                name: 'engineering', count: 2, pressure: 4.5,
                inputs: [
                    { item: 'pneumaticcraft:advanced_pressure_tube', count: 64 },
                    { item: 'pneumaticcraft:advanced_liquid_compressor', count: 1 },
                    { item: 'create:rotation_speed_controller', count: 4 },
                    { item: 'create:large_cogwheel', count: 4 },
                    { item: 'pneumaticcraft:assembly_drill', count: 1 },
                    { item: 'pneumaticcraft:assembly_laser', count: 1 }
                ]
            },
            {
                name: 'energistics', count: 50, pressure: 5.0,
                inputs: [
                    { item: 'mekanism:ultimate_induction_provider', count: 1 },
                    { item: 'mekanism:ultimate_induction_cell', count: 8 },
                    { item: 'mekanism:pellet_antimatter', count: 4 },
                    { item: 'mekanism:ultimate_control_circuit', count: 16 },
                    { item: 'powah:ender_core', count: 8 },
                    { item: 'refinedstorage:controller', count: 1 }
                ]
            },
            {
                name: 'dimensional', count: 1, pressure: 4.5,
                inputs: [
                    { item: 'mekanism:quantum_entangloporter', count: 4 },
                    { item: 'refinedstorage:network_receiver', count: 4 },
                    { item: 'refinedstorage:network_transmitter', count: 4 },
                    { item: 'refinedstorage:network_card', count: 4 },
                    { item: 'mekanism:teleporter', count: 5 },
                    { item: 'powah:ender_core', count: 4 }
                ]
            },
            {
                name: 'battle', count: 5, pressure: 4.5,
                inputs: [
                    { item: 'minecraft:netherite_helmet', count: 1 },
                    { item: 'minecraft:netherite_chestplate', count: 1 },
                    { item: 'minecraft:netherite_leggings', count: 1 },
                    { item: 'minecraft:netherite_boots', count: 1 },
                    { item: 'mekanism:pellet_antimatter', count: 2 },
                    { item: 'mekanism:ultimate_control_circuit', count: 8 }
                ]
            },
            {
                name: 'excavation', count: 2, pressure: 4.0,
                inputs: [
                    { item: 'industrialforegoing:ore_laser_base', count: 1 },
                    { item: 'industrialforegoing:laser_drill', count: 4 },
                    { item: 'occultism:dimensional_mineshaft', count: 1 },
                    { item: 'immersiveengineering:survey_tools', count: 1 },
                    { item: 'mekanism:atomic_disassembler', count: 1 }
                ]
            },
            {
                name: 'culinary', count: 1, pressure: 2.5,
                inputs: [
                    { item: 'farmersdelight:roast_chicken', count: 4 },
                    { item: 'farmersdelight:beef_stew', count: 8 },
                    { item: 'farmersdelight:vegetable_soup', count: 8 },
                    { item: 'farmersdelight:stuffed_pumpkin', count: 4 }
                ]
            },
            {
                name: 'automation', count: 1, pressure: 4.0,
                inputs: [
                    { item: 'refinedstorage:controller', count: 1 },
                    { item: 'refinedstorage:pattern_grid', count: 1 },
                    { item: 'refinedstorage:pattern', count: 64 },
                    { item: 'create:deployer', count: 8 },
                    { item: 'create:mechanical_arm', count: 4 },
                    { item: 'pneumaticcraft:universal_sensor', count: 4 }
                ]
            }
        ];

        masteryRecipes.forEach((recipe) => {
            recipes.push({
                inputs: recipe.inputs,
                results: [{ item: `kubejs:${recipe.name}_mastery_shard`, count: recipe.count }],
                pressure: recipe.pressure,
                id: `${idPrefix}${recipe.name}_mastery_shard`
            });
        });

        recipes.forEach((recipe) => {
            if (!recipe.inputs.every(e6eRecipeIngredientExists)) return;
            if (!recipe.results.every(e6eRecipeOutputExists)) return;
            event.custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.inputs,
                pressure: recipe.pressure,
                results: recipe.results.map((result) => ({ item: result.item, count: result.count || 1 }))
            }).id(recipe.id);
        });
    });
}
})();

(function () {
// 专家版纳入源 normal 目录的压力室配方。
if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
    ServerEvents.recipes((event) => {
        // 这三条普通配方的 ID 均由专家配方覆盖，仅在非专家模式注册。
        if (global.isExpertMode != false) return;

        const recipes = [
            {
                inputs: [
                    { tag: 'forge:nuggets/gold_copper', count: 2 },
                    { tag: 'forge:slimeballs', count: 1 },
                    { item: 'pneumaticcraft:plastic', count: 1 }
                ],
                pressure: 1.0,
                results: [{ id: 'pneumaticcraft:capacitor', count: 1 }],
                id: 'pneumaticcraft:pressure_chamber/capacitor'
            },
            {
                inputs: [
                    { tag: 'forge:nuggets/gold_copper', count: 3 },
                    { tag: 'forge:dusts/redstone', count: 1 },
                    { item: 'pneumaticcraft:plastic', count: 1 }
                ],
                pressure: 1.0,
                results: [{ id: 'pneumaticcraft:transistor', count: 1 }],
                id: 'pneumaticcraft:pressure_chamber/transistor'
            },
            {
                inputs: [
                    { tag: 'forge:nuggets/gold_copper', count: 3 },
                    { item: 'minecraft:redstone_torch', count: 2 },
                    { item: 'pneumaticcraft:plastic', count: 1 }
                ],
                pressure: 1.5,
                results: [{ id: 'pneumaticcraft:empty_pcb', count: 3 }],
                id: 'pneumaticcraft:pressure_chamber/empty_pcb'
            }
        ];

        recipes.forEach((recipe) => {
            if (!recipe.inputs.every(e6eRecipeIngredientExists)) return;
            if (!recipe.results.every((result) => e6ePortedItemExists(result.id))) return;

            event.recipes.pneumaticcraft
                .pressure_chamber(recipe.results, recipe.inputs, recipe.pressure)
                .id(recipe.id);
        });
    });
}
})();

(function () {
if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: [
                { tag: 'forge:ingots/steel', count: 2 },
                { tag: 'forge:tar', count: 2 },
                { tag: 'forge:obsidian', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 4 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/steel', count: 2 },
                { tag: 'forge:tar', count: 18 },
                { tag: 'forge:obsidian', count: 9 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_block', count: 4 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: [{ item: 'minecraft:snow_block', count: 4 }],
            pressure: 1.5,
            results: [{ item: 'betterendforge:dense_snow', count: 1 }],
            id: `${id_prefix}dense_snow`
        },
        {
            inputs: [{ item: 'betterendforge:dense_snow', count: 4 }],
            pressure: 1.5,
            results: [{ item: 'minecraft:ice', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/ice'
        },
        {
            inputs: [
                { tag: 'forge:ingots/pewter', count: 4 },
                { item: 'refinedstorage:quartz_enriched_iron', count: 4 },
                { item: 'tconstruct:seared_brick', count: 4 },
                { item: 'create:brass_casing', count: 1 }
            ],
            pressure: 2.5,
            results: [{ item: 'refinedstorage:machine_casing', count: 2 }],
            id: 'refinedstorage:machine_casing'
        },
        {
            inputs: [
                { item: 'powah:blank_card', count: 1 },
                { tag: 'mekanism:enriched/redstone', count: 1 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'powah:binding_card', count: 1 }],
            id: 'powah:crafting/binding_card'
        },
        {
            inputs: [
                { tag: 'forge:alloys/ultimate', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { item: 'rftoolsbase:infused_enderpearl', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'powah:aerial_pearl', count: 1 }],
            id: 'powah:crafting/aerial_pearl'
        },
        {
            inputs: [
                { tag: 'forge:wires/electrum', count: 1 },
                { item: 'refinedstorage:raw_basic_processor', count: 2 },
                { item: 'powah:dielectric_paste', count: 1 },
                { tag: 'pneumaticcraft:plastic_sheets', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:transistor', count: 2 }],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                { tag: 'forge:wires/electrum', count: 1 },
                { tag: 'forge:plates/signalum', count: 1 },
                { tag: 'forge:plates/aluminum', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { tag: 'pneumaticcraft:plastic_sheets', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:capacitor', count: 2 }],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:unassembled_pcb', count: 1 },
                { item: 'pneumaticcraft:capacitor', count: 2 },
                { item: 'pneumaticcraft:transistor', count: 2 },
                { item: 'refinedstorage:basic_processor', count: 1 },
                { tag: 'forge:wires/lead', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'pneumaticcraft:printed_circuit_board', count: 1 }],
            id: `${id_prefix}printed_circuit_board`
        },
        {
            inputs: [
                { tag: 'forge:plates/copper', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 6 },
                { tag: 'pneumaticcraft:plastic_sheets', count: 2 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:empty_pcb', count: 6 }],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            inputs: [
                { tag: 'forge:plates/invar', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 },
                { item: 'thermal:redstone_servo', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:turbine_blade', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/turbine_blade'
        },
        {
            inputs: [
                { item: 'tconstruct:ichor_slime_crystal', count: 1 },
                { item: 'refinedstorage:basic_processor', count: 1 },
                { item: 'botania:corporea_spark', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:destruction_core', count: 1 }],
            id: 'refinedstorage:destruction_core'
        },
        {
            inputs: [
                { item: 'tconstruct:sky_slime_crystal', count: 1 },
                { item: 'refinedstorage:basic_processor', count: 1 },
                { item: 'botania:corporea_spark', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:construction_core', count: 1 }],
            id: 'refinedstorage:construction_core'
        },
        {
            inputs: [
                { tag: 'forge:coins/tin', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:raw_basic_processor', count: 1 }],
            id: 'refinedstorage:raw_basic_processor'
        },
        {
            inputs: [
                { tag: 'forge:coins/lumium', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:raw_improved_processor', count: 1 }],
            id: 'refinedstorage:raw_improved_processor'
        },
        {
            inputs: [
                { tag: 'forge:coins/enderium', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:raw_advanced_processor', count: 1 }],
            id: 'refinedstorage:raw_advanced_processor'
        },
        {
            inputs: [
                { item: 'integrateddynamics:variable', count: 3 },
                { item: 'refinedstorage:construction_core', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'integrateddynamics:variable_transformer_output', count: 3 }],
            id: `${id_prefix}variable_transformer_output`
        },
        {
            inputs: [
                { item: 'integrateddynamics:variable', count: 3 },
                { item: 'refinedstorage:destruction_core', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'integrateddynamics:variable_transformer_input', count: 3 }],
            id: `${id_prefix}variable_transformer_input`
        },
        {
            inputs: [
                { item: 'kubejs:memory_basic_empty', count: 2 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:memory_advanced_empty', count: 1 }],
            id: `${id_prefix}memory_advanced_empty`
        },
        {
            inputs: [
                { item: 'kubejs:memory_advanced_empty', count: 2 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:memory_elite_empty', count: 1 }],
            id: `${id_prefix}memory_elite_empty`
        },
        {
            inputs: [
                { item: 'kubejs:memory_elite_empty', count: 2 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:memory_ultimate_empty', count: 1 }],
            id: `${id_prefix}memory_ultimate_empty`
        },
        {
            inputs: [
                { tag: 'mekanism:alloys/reinforced', count: 3 },
                { item: 'pneumaticcraft:turbine_rotor', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'mekanismgenerators:turbine_blade', count: 1 }],
            id: 'mekanismgenerators:turbine/blade'
        },
        {
            inputs: [
                { item: 'astralsorcery:celestial_crystal', count: 1 },
                { tag: 'forge:dusts/starmetal', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:astrogro', count: 3 }],
            id: `${id_prefix}astrogro`
        },
        {
            inputs: [
                { item: 'immersiveengineering:blastbrick_reinforced', count: 27 },
                { item: 'immersiveengineering:light_engineering', count: 10 },
                { item: 'immersiveengineering:heavy_engineering', count: 5 },
                { tag: 'immersiveengineering:scaffoldings/steel', count: 5 },
                { tag: 'forge:storage_blocks/steel', count: 6 },
                { tag: 'forge:sheetmetals/steel', count: 15 },
                { item: 'minecraft:cauldron', count: 1 },
                { item: 'immersiveengineering:rs_engineering', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_arc_furnace', count: 1 }],
            id: `${id_prefix}diy_arc_furnace`
        },
        {
            inputs: [
                { tag: 'immersiveengineering:scaffoldings/steel', count: 11 },
                { item: 'immersiveengineering:light_engineering', count: 2 },
                { item: 'immersiveengineering:treated_fence', count: 6 },
                { item: 'immersiveengineering:rs_engineering', count: 1 },
                { item: 'immersiveengineering:heavy_engineering', count: 2 },
                { tag: 'forge:storage_blocks/steel', count: 2 },
                { tag: 'forge:sheetmetals/steel', count: 4 },
                { item: 'immersiveengineering:fluid_pipe', count: 4 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_pumpjack', count: 1 }],
            id: `${id_prefix}diy_pumpjack`
        },
        {
            inputs: [
                { tag: 'immersiveengineering:scaffoldings/steel', count: 40 },
                { item: 'immersiveengineering:heavy_engineering', count: 4 },
                { item: 'immersiveengineering:rs_engineering', count: 1 },
                { tag: 'forge:sheetmetals/iron', count: 60 },
                { item: 'immersiveengineering:fluid_pipe', count: 17 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_distillation_tower', count: 1 }],
            id: `${id_prefix}diy_distillation_tower`
        },
        {
            inputs: [
                { tag: 'immersiveengineering:scaffoldings/steel', count: 26 },
                { tag: 'forge:sheetmetals/steel', count: 16 },
                { item: 'immersiveengineering:radiator', count: 3 },
                { item: 'immersiveengineering:light_engineering', count: 9 },
                { item: 'immersiveengineering:rs_engineering', count: 1 },
                { item: 'immersiveengineering:heavy_engineering', count: 4 },
                { tag: 'forge:storage_blocks/steel', count: 9 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_excavator', count: 1 }],
            id: `${id_prefix}diy_excavator`
        },
        {
            inputs: [
                { tag: 'mininggadgets:mininggadgets', count: 1 },
                { item: 'mininggadgets:upgrade_fortune_3', count: 1 },
                { item: 'mininggadgets:upgrade_efficiency_5', count: 1 },
                { item: 'mininggadgets:upgrade_battery_3', count: 1 },
                { item: 'mininggadgets:upgrade_silk', count: 1 },
                { item: 'mininggadgets:upgrade_three_by_three', count: 1 },
                { item: 'mininggadgets:upgrade_magnet', count: 1 },
                { item: 'mininggadgets:upgrade_range_3', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:mining_gadget_kit', count: 1 }],
            id: `${id_prefix}mining_gadget_kit`
        },
        {
            inputs: [
                { item: 'e6e_mbd2:thermal_rock_generator', count: 1 },
                { item: 'e6e_mbd2:energy_input', count: 1 },
                { item: 'e6e_mbd2:thermal_pulverizer', count: 3 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:flux_bore_kit', count: 1 }],
            id: `${id_prefix}flux_bore_kit`
        },
        {
            inputs: [
                { item: 'rftoolsbuilder:builder', count: 1 },
                { item: 'rftoolsbuilder:shape_card_quarry_fortune', count: 1 },
                { item: 'rftoolsbuilder:shape_card_quarry_clear_fortune', count: 1 },
                { item: 'rftoolsbuilder:shape_card_quarry_silk', count: 1 },
                { item: 'rftoolsbuilder:shape_card_quarry_clear_silk', count: 1 },
                { item: 'rftoolsbuilder:shape_card_void', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_pedestal_quarry', count: 1 }],
            id: `${id_prefix}diy_pedestal_quarry`
        },
        {
            inputs: [
                { item: 'mekanism:mekasuit_helmet', count: 1 },
                { item: 'mekanism:module_energy_unit', count: 2 },
                { item: 'mekanism:module_vision_enhancement_unit', count: 4 },
                { item: 'mekanism:module_inhalation_purification_unit', count: 1 },
                { item: 'mekanism:module_nutritional_injection_unit', count: 1 },
                { item: 'mekanism:module_electrolytic_breathing_unit', count: 4 },
                { item: 'mekanism:module_laser_dissipation_unit', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_mekasuit_helmet', count: 1 }],
            id: `${id_prefix}diy_mekasuit_helmet`
        },
        {
            inputs: [
                { item: 'mekanism:mekasuit_bodyarmor', count: 1 },
                { item: 'mekanism:module_energy_unit', count: 2 },
                { item: 'mekanism:module_geiger_unit', count: 1 },
                { item: 'mekanism:module_gravitational_modulating_unit', count: 1 },
                { item: 'mekanism:module_dosimeter_unit', count: 1 },
                { item: 'mekanism:module_laser_dissipation_unit', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_mekasuit_bodyarmor', count: 1 }],
            id: `${id_prefix}diy_mekasuit_bodyarmor`
        },
        {
            inputs: [
                { item: 'mekanism:mekasuit_pants', count: 1 },
                { item: 'mekanism:module_energy_unit', count: 2 },
                { item: 'mekanismgenerators:module_geothermal_generator_unit', count: 8 },
                { item: 'mekanism:module_laser_dissipation_unit', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_mekasuit_pants', count: 1 }],
            id: `${id_prefix}diy_mekasuit_pants`
        },
        {
            inputs: [
                { item: 'mekanism:mekasuit_boots', count: 1 },
                { item: 'mekanism:module_energy_unit', count: 2 },
                { item: 'mekanism:module_hydraulic_propulsion_unit', count: 4 },
                { item: 'mekanism:module_laser_dissipation_unit', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_mekasuit_boots', count: 1 }],
            id: `${id_prefix}diy_mekasuit_boots`
        },
        {
            inputs: [
                { item: 'mekanism:meka_tool', count: 1 },
                { item: 'mekanism:module_energy_unit', count: 2 },
                { item: 'mekanism:module_attack_amplification_unit', count: 4 },
                { item: 'mekanism:module_vein_mining_unit', count: 4 },
                { item: 'mekanism:module_excavation_escalation_unit', count: 4 },
                { item: 'mekanism:module_teleportation_unit', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_meka_tool', count: 1 }],
            id: `${id_prefix}diy_meka_tool`
        },
        {
            inputs: [
                { item: 'minecraft:skeleton_skull', count: 4 },
                { item: 'minecraft:wither_skeleton_skull', count: 4 },
                { item: 'eidolon_repraised:candlestick', count: 8 },
                { item: 'occultism:spirit_attuned_crystal', count: 8 },
                { item: 'occultism:golden_sacrificial_bowl', count: 1 },
                { item: 'occultism:sacrificial_bowl', count: 12 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:artisinal_ritual_kit', count: 1 }],
            id: `${id_prefix}artisinal_ritual_kit`
        },
        {
            inputs: [
                { item: 'occultism:chalk_white', count: 1 },
                { item: 'occultism:chalk_gold', count: 1 },
                { item: 'occultism:chalk_purple', count: 1 },
                { item: 'occultism:chalk_red', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:artisinal_chalk_set', count: 1 }],
            id: `${id_prefix}artisinal_chalk_set`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:transistor', count: 4 },
                { tag: 'forge:alloys/elite', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:advanced_ram_chip', count: 16 }],
            id: `${id_prefix}advanced_ram_chip`
        },
        {
            inputs: [
                { item: industrialforegoing.laser_lens.purple, count: 1 },
                { item: 'industrialforegoing:fluid_laser_base', count: 1 },
                { item: 'industrialforegoing:laser_drill', count: 4 },
                { item: 'industrialforegoing:speed_addon_2', count: 4 },
                { item: 'industrialforegoing:efficiency_addon_2', count: 4 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:fluid_drill_package', count: 1 }],
            id: `${id_prefix}fluid_drill_package`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:pneumatic_cylinder', count: 6 },
                { item: 'prettypipes:pipe', count: 10 },
                { item: 'pneumaticcraft:reinforced_stone_slab', count: 6 },
                { item: 'pneumaticcraft:pneumatic_dynamo', count: 1 },
                { item: 'create:brass_hand', count: 2 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'kubejs:assembly_io_package', count: 1 }],
            id: `${id_prefix}assembly_io_package`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:pneumatic_cylinder', count: 3 },
                { item: 'prettypipes:pipe', count: 5 },
                { item: 'pneumaticcraft:reinforced_stone_slab', count: 3 },
                { item: 'pneumaticcraft:pneumatic_dynamo', count: 1 },
                { tag: 'powah:energizing_rod', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'kubejs:assembly_laser_package', count: 1 }],
            id: `${id_prefix}assembly_laser_package`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:pneumatic_cylinder', count: 3 },
                { item: 'prettypipes:pipe', count: 5 },
                { item: 'pneumaticcraft:reinforced_stone_slab', count: 3 },
                { item: 'pneumaticcraft:pneumatic_dynamo', count: 1 },
                { item: 'pneumaticcraft:drill_bit_diamond', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'kubejs:assembly_drill_package', count: 1 }],
            id: `${id_prefix}assembly_drill_package`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:pneumatic_cylinder', count: 2 },
                { item: 'pneumaticcraft:plastic', count: 2 },
                { item: 'pneumaticcraft:reinforced_stone_slab', count: 4 },
                { tag: 'forge:ingots/compressed_iron', count: 2 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'kubejs:assembly_platform_package', count: 1 }],
            id: `${id_prefix}assembly_platform_package`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:printed_circuit_board', count: 3 },
                { item: 'prettypipes:pipe', count: 5 },
                { item: 'computercraft:monitor_normal', count: 1 },
                { item: 'pneumaticcraft:reinforced_stone_slab', count: 3 },
                { item: 'pneumaticcraft:pneumatic_dynamo', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'kubejs:assembly_controller_package', count: 1 }],
            id: `${id_prefix}assembly_controller_package`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:pressure_chamber_valve', count: 1 },
                { item: 'pneumaticcraft:pressure_chamber_interface', count: 2 },
                { item: 'pneumaticcraft:pressure_chamber_glass', count: 36 },
                { item: 'pneumaticcraft:pressure_chamber_wall', count: 59 },
                { item: 'pneumaticcraft:speed_upgrade', count: 40 },
                { item: 'pneumaticcraft:volume_upgrade', count: 50 },
                { item: 'pneumaticcraft:regulator_tube_module', count: 2 },
                { item: 'pneumaticcraft:vacuum_pump', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_pressure_chamber', count: 1 }],
            id: `${id_prefix}diy_pressure_chamber`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:drone', count: 1 },
                { item: 'pneumaticcraft:charging_station', count: 1 },
                { item: 'pneumaticcraft:programmer', count: 1 },
                { item: 'pneumaticcraft:programming_puzzle', count: 64 },
                { item: 'pneumaticcraft:programming_puzzle', count: 64 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_drone_kit', count: 1 }],
            id: `${id_prefix}diy_drone_kit`
        },
        {
            inputs: [
                { item: 'modularrouters:item_router', count: 16 },
                { item: 'modularrouters:distributor_module', count: 4 },
                { item: 'modularrouters:sender_module_2', count: 4 },
                { item: 'modularrouters:puller_module_2', count: 4 },
                { item: 'modularrouters:vacuum_module', count: 1 },
                { item: 'modularrouters:player_module', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:assorted_router_kit', count: 1 }],
            id: `${id_prefix}assorted_router_kit`
        },
        {
            inputs: [
                { item: 'naturesaura:animal_spawner', count: 1 },
                { item: 'naturesaura:ancient_planks', count: 4 },
                { item: 'naturesaura:infused_brick', count: 16 },
                { item: 'minecraft:hay_block', count: 16 },
                { item: 'naturesaura:birth_spirit', count: 64 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:altar_of_birthing_kit', count: 1 }],
            id: `${id_prefix}altar_of_birthing_kit`
        },
        {
            inputs: [
                { item: 'mekanism:resistive_heater', count: 1 },
                { item: 'pneumaticcraft:heat_pipe', count: 1 },
                { item: 'minecraft:blast_furnace', count: 1 },
                { item: 'create:flywheel', count: 1 },
                { item: 'create:furnace_engine', count: 1 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_furnace_engine_kit', count: 1 }],
            id: `${id_prefix}diy_furnace_engine_kit`
        },
        {
            inputs: [
                { item: 'immersiveengineering:fluid_pipe', count: 3 },
                { item: 'immersiveengineering:light_engineering', count: 4 },
                { item: 'immersiveengineering:rs_engineering', count: 1 },
                { item: 'immersiveengineering:sheetmetal_iron', count: 4 },
                { item: 'immersiveengineering:steel_fence', count: 1 },
                { item: 'immersiveengineering:steel_scaffolding_standard', count: 5 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_mixer', count: 1 }],
            id: `${id_prefix}diy_mixer`
        },
        {
            inputs: [
                { item: 'immersiveengineering:conveyor_basic', count: 3 },
                { item: 'immersiveengineering:fluid_pump', count: 2 },
                { item: 'immersiveengineering:light_engineering', count: 2 },
                { item: 'immersiveengineering:rs_engineering', count: 1 },
                { item: 'immersiveengineering:sheetmetal_steel', count: 2 },
                { item: 'immersiveengineering:steel_scaffolding_standard', count: 3 },
                { item: 'mekanism:cardboard_box', count: 1 }
            ],
            pressure: 4.5,
            results: [{ item: 'kubejs:diy_bottling_machine', count: 1 }],
            id: `${id_prefix}diy_bottling_machine`
        }
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }

        // let lower_tiers = lowerTiers(powahTiers, tier);

        // 主要合成
        recipes.push({
            inputs: [
                { item: 'powah:blank_card', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { item: capacitor, count: 2 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: `powah:ender_gate_${tier}`, count: 1 }],
            id: `powah:crafting/ender_gate_${tier}`
        });

        // 拆解合成
        if (tier != 'basic') {
            recipes.push({
                inputs: [{ item: `powah:reactor_${tier}`, count: 36 }],
                pressure: -0.9,
                results: [
                    { item: `powah:thermo_generator_${tier}`, count: 1 },
                    { item: `powah:thermo_generator_${tier}`, count: 1 },
                    { item: `powah:thermo_generator_${tier}`, count: 1 },
                    { item: `powah:energy_cell_${tier}`, count: 1 },
                    { item: `powah:energy_cell_${tier}`, count: 1 },
                    { item: `powah:furnator_${tier}`, count: 1 }
                ],
                id: `${id_prefix}disassemble_reactor_${tier}`
            });
        }
    });

    recipes.forEach((recipe) => {
        if (!recipe.inputs.every((input) => e6eRecipeIngredientExists(input))) return;
        if (!recipe.results.every((result) => e6eRecipeOutputExists(result))) return;

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.inputs,
                pressure: recipe.pressure,
                results: recipe.results.map((result) => ({ id: result.item, count: result.count || 1 }))
            })
            .id(recipe.id);
    });
});

}
})();
