// 配方类型：masterfulmachinery:machine_process
// 中文名称：机器加工流程
// 用途：用于登记Masterful Machinery 多方块机器的机器加工流程配方。

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_basic_circuit_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:basic_circuit_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_basic_memory_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:basic_memory_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_cpu_core_500_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:cpu_core_500_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_cpu_core_1000_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:cpu_core_1000_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_cpu_core_2000_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:cpu_core_2000_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_unassembled_pcb', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:empty_pcb', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_unassembled_advanced_pressure_tube', count: 1 }
                }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_block', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_unassembled_machine_frame', count: 1 }
                }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:rough_machine_frame', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_machine_frame`
        }
    ];

    let storageParts = [
        {
            modID: 'refinedstorage',
            sizes: ['1k', '4k', '16k', '64k', '64k_fluid', '256k_fluid', '1024k_fluid', '4096k_fluid']
        },
        {
            modID: 'extrastorage',
            sizes: [
                '256k',
                '1024k',
                '4096k',
                '16384k',
                '16384k_fluid',
                '65536k_fluid',
                '262144k_fluid',
                '1048576k_fluid'
            ]
        }
    ];

    storageParts.forEach((storagePart) => {
        storagePart.sizes.forEach((partSize) => {
            recipes.push({
                outputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:batch_${partSize}_storage_part_package`, count: 1 }
                    }
                ],
                inputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:${partSize}_storage_part_package`, count: 30 }
                    },
                    { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
                ],
                ticks: 240,
                id: `${id_prefix}batch_${partSize}_storage_part_assembly`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
})();

(function () {
if (['astralsorcery', 'atum', 'bloodmagic', 'botania', 'eidolon_repraised', 'mythicbotany', 'pedestals'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', chance: 1.0, data: { item: 'kubejs:observatory_lens', count: 1 } },
                { type: 'masterfulmachinery:items', chance: 0.05, data: { item: 'kubejs:observatory_lens', count: 1 } }
            ],

            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/shadow_steel', count: 8 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/air', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:nocturnal_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:attuned_celestial_crystal', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 200,
            id: `${id_prefix}observatory_lens`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_fire', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_fire', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:orange_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:smelting_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_fire`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_break', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_break', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:yellow_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:hidden_knowledge_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_break`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_growth', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_growth', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'naturesaura:gold_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:lime_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:fortune_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_growth`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_damage', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_damage', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:red_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:melee_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_damage`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_regeneration', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_regeneration', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:pink_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:holy_water_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_regeneration`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_push', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_push', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:light_blue_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:bow_velocity_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_push`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'atum:ectoplasm', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:purple_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:silk_touch_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_spectral`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:altar_radiance', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'create:shadow_steel_casing', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'eidolon_repraised:shadow_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:etherealslate', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/asgard', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/niflheim', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/alfheim', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/midgard', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'astralsorcery:crystals/attuned', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}altar_radiance`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'botania:gaia_spreader', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:bifrost_perm', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:life_essence', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/midgard', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:elven_spreader', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'naturesaura:ancient_sapling', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mythicbotany:dream_cherry', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:gems/dragonstone', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}gaia_spreader`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'botania:elven_spreader', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/elementium', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:dreamwood', count: 8 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:glimmering_dreamwood', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:spark', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/summer', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/air', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_push', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}elven_spreader`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:gems/niotic', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentbinding', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'industrialforegoing:ether_gas_bucket', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:chalice', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/gold', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:black_marble_raw', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:gems/aquamarine', count: 5 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}chalice`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_vicio', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:defaultcrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentair', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_vicio`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_evorsio', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:destructivecrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentfastminer', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_evorsio`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_discidia', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:vengefulcrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentlava', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_discidia`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_armara', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:steadfastcrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentbinding', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_armara`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_aevitas', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:corrosivecrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentgrowth', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_aevitas`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:mantle', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:balance_cloak', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:celestial_crystal', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'magicfeather:magicfeather', count: 1 }
                },

                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/mana', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/pride', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/envy', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:storage_blocks/starmetal', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}mantle`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'pedestals:coin/xpenchanter', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pedestals:coin/default', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:gaia_pylon', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:glyph_pickup', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/mana', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/vanaheim', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:greater_experience_gem', count: 12 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:inlays/arcane_gold', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'eidolon_repraised:shadow_gem', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}coin_xpenchanter`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'pedestals:coin/xpanvil', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pedestals:coin/default', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mythicbotany:alfsteel_pylon', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:glyph_pickup', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/mana', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/vanaheim', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:greater_experience_gem', count: 12 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/netherite', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'betterendforge:aeternium_hammer', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}coin_xpanvil`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'mekanism:solar_neutron_activator', count: 2 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:observatory_lens', count: 5 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'powah:solar_panel_niotic', count: 5 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:hdpe_sheet', count: 5 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'industrialforegoing:machine_frame/advanced', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:circuits/elite', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:plates/enderium', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/iesnium', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/end_stone', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}solar_neutron_activator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'bloodmagic', 'botania', 'mythicbotany', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:botanical_mastery_shard', count: 2 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:mana_collector', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:spark', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:spark_upgrade_recessive', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_ring_greater', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:fabulous_pool', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:kekimurus', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:shulk_me_not', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:rosa_arcana', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:dandelifeon', count: 1 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}botanical_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:astronomy_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:observatory', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'astralsorcery:crystals/attuned', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:mantle', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_raw', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:device_rock_gen', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:mechanical_saw', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'astralsorcery:stars/irradiant', count: 1 } },

                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'astralsorcery:liquid_starlight', amount: 1024 }
                },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}astronomy_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:alchemy_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mixer', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_bottling_machine', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:stim_pack', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:death_ring', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:pet_reviver', count: 5 } },

                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}alchemy_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:ritual_mastery_shard', count: 5 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:altar', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:largebloodstonebrick', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sea_lantern', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:beacon', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:chargingrune', count: 48 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:accelerationrune', count: 20 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:dislocationrune', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:altarcapacityrune', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:bettercapacityrune', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:masterritualstone', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:ritualstone', count: 36 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:ritualdivinerdusk', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:ritualtinkerer', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:artisinal_ritual_kit', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:artisinal_chalk_set', count: 10 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1024 }
                },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}ritual_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:aura_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:aura_trove', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:firework_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:big_box_o_boom', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:generator_limit_remover', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:projectile_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:mimirs_memory_box', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:altar_of_birthing_kit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:aura_detector', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:mover_cart', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:powered_rail', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:rail', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:activator_rail', count: 8 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}aura_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:engineering_mastery_shard', count: 2 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pneumaticcraft:advanced_pressure_tube', count: 64 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pneumaticcraft:advanced_liquid_compressor', count: 1 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'create:rotation_speed_controller', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:large_cogwheel', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:shaft', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:encased_chain_drive', count: 32 } },

                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_arc_furnace', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:imaharas_indelible_electrodes', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_pumpjack', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_distillation_tower', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_pressure_chamber', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_furnace_engine_kit', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'pneumaticcraft:lubricant', amount: 1024 }
                },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}engineering_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:energistics_mastery_shard', count: 50 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:fusion_reactor_controller', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:fusion_reactor_frame', count: 36 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:fusion_reactor_port', count: 5 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:reactor_glass', count: 24 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:electromagnetic_coil', count: 5 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:pressure_disperser', count: 224 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:rotational_complex', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:saturating_condenser', count: 293 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:structural_glass', count: 598 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_casing', count: 417 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_rotor', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_blade', count: 20 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_valve', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_vent', count: 585 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:induction_casing', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:induction_port', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:ultimate_induction_provider', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:ultimate_induction_cell', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_controller', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_point', count: 50 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_plug', count: 2 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:tritium', amount: 25600 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:deuterium', amount: 25600 }
                },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 1500 } }
            ],
            ticks: 1500,
            id: `${id_prefix}energistics_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:dimensional_mastery_shard', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:block_4096k', count: 2 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'extrastorage:block_262144k_fluid', count: 2 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:quantum_entangloporter', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'rsinfinitybooster:dimension_card', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_receiver', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_transmitter', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_card', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:teleporter', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:portable_teleporter', count: 1 } },

                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}dimensional_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:battle_mastery_shard', count: 5 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_helmet', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_bodyarmor', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_pants', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_boots', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_meka_tool', count: 1 } },

                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}battle_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:excavation_mastery_shard', count: 2 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:fluid_laser_base', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:ore_laser_base', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:laser_drill', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:dimensional_mineshaft', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:miner_marid_irradiated', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_excavator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:survey_tools', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:mining_gadget_kit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:flux_bore_kit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_pedestal_quarry', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}excavation_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:culinary_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:engineering_student_meals', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:box_of_thankful_dinners', count: 1 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}culinary_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:automation_mastery_shard', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:controller', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:netherite_crafter', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:interface', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:pattern_grid', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:pattern', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:cable', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:deployer', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:mechanical_arm', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:content_observer', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:stockpile_switch', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:auto_crafting_halo', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:field_creator', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:placer', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'entangled:block', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:universal_sensor', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_drone_kit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:assorted_router_kit', count: 1 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 500 * 60 } }
            ],
            ticks: 60,
            id: `${id_prefix}automation_mastery_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'enigmatic_tree_of_life_structure';
        recipe.controllerId = 'enigmatic_tree_of_life';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'botania'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/gaia_reactor/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', chance: 1.0, data: { item: 'botania:life_essence', count: 8 } },
                { type: 'masterfulmachinery:items', chance: 0.5, data: { item: 'botania:life_essence', count: 4 } },
                { type: 'masterfulmachinery:items', chance: 0.25, data: { item: 'botania:life_essence', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', data: { amount: 9000 * 300 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 2000000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'pneumaticcraft:memory_essence', amount: 16000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'astralsorcery:liquid_starlight', amount: 1000 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 300,
            id: `${id_prefix}gaia_spirit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'gaia_reactor_structure';
        recipe.controllerId = 'gaia_reactor';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/industrial_deuterium_plant/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:deuterium', amount: 640 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 10000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'emendatusenigmatica:molten_sulfur', amount: 10 }
                },
                {
                    type: 'masterfulmachinery:pncr_pressure',
                    perTick: true,
                    data: {
                        air: 100
                    }
                },
                {
                    type: 'masterfulmachinery:create_rotation',
                    data: {
                        speed: 256
                    }
                }
            ],
            ticks: 4000,
            id: `${id_prefix}deuterium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'industrial_deuterium_plant_structure';
        recipe.controllerId = 'industrial_deuterium_plant';
        event.custom(recipe).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/stellar_neutron_activator/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:tritium', amount: 640 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 4000000 }
                },
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 100000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'minecraft:water', amount: 64000 }
                }
            ],
            ticks: 4000,
            id: `${id_prefix}tritium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'stellar_neutron_activator_structure';
        recipe.controllerId = 'stellar_neutron_activator';
        event.custom(recipe).id(recipe.id);
    });
});

/*
{
    type: 'masterfulmachinery:botania_mana',
    perTick: true,
    data: { amount: 8000 }
},
{
    type: 'masterfulmachinery:fluids',
    perTick: true,
    data: { fluid: 'minecraft:water', amount: 64000 }
},



{
    type: 'masterfulmachinery:mekanism_gas',
    data: { gas: 'mekanismgenerators:tritium', amount: 64000 }
}

*/
})();

(function () {
if (['alexsmobs', 'atum', 'bloodmagic', 'botania', 'eidolon_repraised', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('masterfulmachinery')) return;
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:reaper_scythe', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:tattered_cloth', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anubis_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}reaper_scythe`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:cleaving_axe', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:prismarine_crystals', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anput_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}cleaving_axe`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:prestigious_palm', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:wicked_weave', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:ender_calx', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:lesser_soul_gem', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reagentvoid', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:warped_sprouts', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}prestigious_palm`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:lesser_soul_gem', count: 4 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:ender_calx', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:nepthys_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 4000 }
                }
            ],
            ticks: 400,
            id: `${id_prefix}lesser_soul_gem`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:reversal_pick', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/hepatizon', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:lesser_soul_gem', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
                }
            ],
            ticks: 500,
            id: `${id_prefix}reversal_pick`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'alexsmobs:dimensional_carver', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:reversal_pick', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'alexsmobs:void_worm_mandible', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'alexsmobs:void_worm_eye', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/netherite', count: 2 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
                }
            ],
            ticks: 500,
            id: 'alexsmobs:dimensional_carver'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:glass_hand', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:basic_amulet', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:brass_hand', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:zombie_heart', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:lesser_soul_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:wraith_heart', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'glassential:glass_dark_ethereal_reverse', count: 1 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}glass_hand`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:void_amulet', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:basic_amulet', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'alexsmobs:emu_feather', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/silver', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}void_amulet`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:gears/osmium', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'tconstruct:ender_slime_crystal', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/utherium', count: 4 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}componentframeparts`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfilterexact', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:red_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/arcane_gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterexact`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfilteroredict', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:lime_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:chunks', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilteroredict`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfilterenchant', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:green_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:enchanted_book', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterenchant`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfiltermoditems', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'atum:yellow_stained_crystal_glass_pane', count: 1 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:enchanted_ash', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltermoditems`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfiltercomposite', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:white_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/silicon_bronze', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltercomposite`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:noderouter', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'upgrade_aquatic:elder_eye', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:rods/prismarine', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/arcane_gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 50000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}noderouter`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemroutingnode', count: 2 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:corporea_spark', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'architects_palette:moonstone', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}itemroutingnode`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:inputroutingnode', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemroutingnode', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/lumium', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/fluorite', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}inputroutingnode`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:outputroutingnode', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemroutingnode', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/signalum', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/fluorite', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}outputroutingnode`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon_repraised:ender_calx', count: 8 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/ender_pearl', count: 8 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 80 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}ender_calx`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'minecraft:golden_apple', count: 4 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:apple', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_apple`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'minecraft:golden_carrot', count: 4 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:carrot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_carrot`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:glistering_melon_slice', count: 4 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:melon_slice', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:mastercore', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:corporea_spark', count: 3 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:storage_blocks/electrum', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'glassential:glass_ghostly', count: 6 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 2000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}mastercore`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:syntheticpoint', count: 2 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'undergarden:masticator_scales', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'atum:godshards/montu', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/utherium', count: 4 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}syntheticpoint`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
