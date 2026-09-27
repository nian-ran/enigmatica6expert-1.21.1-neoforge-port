// 配方类型：pneumaticcraft:assembly_drill
// 中文名称：组装钻头加工
// 用途：用于登记气动工艺的组装钻头加工配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/assembly_/';

    const recipes = [
        {
            input: '#c:ingots/compressed_iron',
            input_count: 4,
            output: { item: 'pneumaticcraft:elevator_frame', count: 8 },
            program: 'drill',
            id: `${id_prefix}elevator_frame`
        },
        {
            input: 'pneumaticcraft:reinforced_brick_wall',
            input_count: 6,
            output: { item: 'pneumaticcraft:cannon_barrel', count: 2 },
            program: 'drill',
            id: `${id_prefix}cannon_barrel`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(recipe.output.item)) return;

        const constructed_input = recipe.input.charAt(0) == '#'
            ? { tag: recipe.input.slice(1), count: recipe.input_count || 1 }
            : { item: recipe.input, count: recipe.input_count || 1 };

        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: constructed_input,
                result: {
                    id: recipe.output.item,
                    count: recipe.output.count || 1
                },
                program: recipe.program
            })
            .id(recipe.id.replace('assembly_', `assembly_${recipe.program}`));
    });
});
})();

(function () {
if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "pneumaticcraft:assembly_drill", true, ["pneumaticcraft:assembly_drill","pneumaticcraft:assembly_laser"]);
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly/';
    const recipes = [
        {
            input: { item: 'create:brass_casing', count: 2 },
            output: { item: 'kubejs:rough_machine_frame_top', count: 1 },
            program: 'drill',
            id: `${id_prefix}rough_machine_frame_top`
        },
        {
            input: { item: 'kubejs:rough_machine_frame', count: 1 },
            output: { item: 'rftoolsbase:machine_frame', count: 1 },
            program: 'laser',
            id: 'rftoolsbase:machine_frame'
        },
        {
            input: { tag: 'forge:storage_blocks/gold', count: 1 },
            output: { item: 'supplementaries:gold_trapdoor', count: 5 },
            program: 'drill',
            id: `${id_prefix}gold_trapdoor`
        },
        {
            input: { item: 'supplementaries:gold_trapdoor', count: 5 },
            output: { item: 'pedestals:coin/default', count: 10 },
            program: 'laser',
            id: 'pedestals:upgrades/itempedestalupgradedefault'
        },
        {
            input: { item: 'kubejs:basic_circuit_package', count: 1 },
            output: { item: 'kubejs:basic_circuit_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}basic_circuit_assembly`
        },
        {
            input: { item: 'kubejs:basic_circuit_assembly', count: 1 },
            output: { item: 'mekanism:basic_control_circuit', count: 2 },
            program: 'laser',
            id: 'mekanism:control_circuit/basic'
        },
        {
            input: { item: 'kubejs:batch_basic_circuit_package', count: 1 },
            output: { item: 'kubejs:batch_basic_circuit_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_basic_circuit_assembly`
        },
        {
            input: { item: 'kubejs:batch_basic_circuit_assembly', count: 1 },
            output: { item: 'mekanism:basic_control_circuit', count: 64 },
            program: 'laser',
            id: `${id_prefix}batch_basic_control_circuit`
        },
        {
            input: { item: 'kubejs:basic_lenses_package', count: 1 },
            output: { item: 'occultism:lenses', count: 3 },
            program: 'laser',
            id: 'occultism:crafting/lenses'
        },
        {
            input: { item: 'kubejs:basic_memory_package', count: 1 },
            output: { item: 'kubejs:basic_memory_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}basic_memory_assembly`
        },
        {
            input: { item: 'kubejs:basic_memory_assembly', count: 1 },
            output: { item: 'kubejs:memory_basic_empty', count: 2 },
            program: 'laser',
            id: `${id_prefix}memory_basic_empty`
        },
        {
            input: { item: 'kubejs:batch_basic_memory_package', count: 1 },
            output: { item: 'kubejs:batch_basic_memory_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_basic_memory_assembly`
        },
        {
            input: { item: 'kubejs:batch_basic_memory_assembly', count: 1 },
            output: { item: 'kubejs:memory_basic_empty', count: 64 },
            program: 'laser',
            id: `${id_prefix}batch_memory_basic_empty`
        },
        {
            input: { item: 'kubejs:cpu_core_500_package', count: 1 },
            output: { item: 'kubejs:cpu_core_500_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}cpu_core_500_assembly`
        },
        {
            input: { item: 'kubejs:cpu_core_500_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_mk_1026', count: 1 },
            program: 'laser',
            id: `${id_prefix}cpu_core_mk_1026`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_500_package', count: 1 },
            output: { item: 'kubejs:batch_cpu_core_500_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_500_assembly`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_500_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_mk_1026', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_mk_1026`
        },
        {
            input: { item: 'kubejs:cpu_core_1000_package', count: 1 },
            output: { item: 'kubejs:cpu_core_1000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}cpu_core_1000_assembly`
        },
        {
            input: { item: 'kubejs:cpu_core_1000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_eg_28222', count: 1 },
            program: 'laser',
            id: `${id_prefix}cpu_core_eg_28222`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_1000_package', count: 1 },
            output: { item: 'kubejs:batch_cpu_core_1000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_1000_assembly`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_1000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_eg_28222', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_eg_28222`
        },
        {
            input: { item: 'kubejs:cpu_core_2000_package', count: 1 },
            output: { item: 'kubejs:cpu_core_2000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}cpu_core_2000_assembly`
        },
        {
            input: { item: 'kubejs:cpu_core_2000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_as_81221', count: 1 },
            program: 'laser',
            id: `${id_prefix}cpu_core_as_81221`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_2000_package', count: 1 },
            output: { item: 'kubejs:batch_cpu_core_2000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_2000_assembly`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_2000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_as_81221', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_as_81221`
        },
        {
            input: { item: 'kubejs:batch_unassembled_pcb', count: 1 },
            output: { item: 'pneumaticcraft:unassembled_pcb', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_unassembled_pcb`
        },

        {
            input: { item: 'kubejs:batch_unassembled_advanced_pressure_tube', count: 1 },
            output: { item: 'pneumaticcraft:advanced_pressure_tube', count: 256 },
            program: 'drill',
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            input: { item: 'kubejs:batch_unassembled_machine_frame', count: 1 },
            output: { item: 'rftoolsbase:machine_frame', count: 32 },
            program: 'drill',
            id: `${id_prefix}batch_unassembled_machine_frame`
        },

        {
            input: { item: 'kubejs:assembly_io_package', count: 1 },
            output: { item: 'kubejs:assembly_io_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_io_assembly`
        },
        {
            input: { item: 'kubejs:assembly_io_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_io_unit_import', count: 2 },

            program: 'laser',
            id: `${id_prefix}assembly_io_alternate`
        },
        {
            input: { item: 'kubejs:assembly_laser_package', count: 1 },
            output: { item: 'kubejs:assembly_laser_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_laser_assembly`
        },
        {
            input: { item: 'kubejs:assembly_laser_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_laser', count: 1 },

            program: 'laser',
            id: `${id_prefix}assembly_laser_alternate`
        },
        {
            input: { item: 'kubejs:assembly_drill_package', count: 1 },
            output: { item: 'kubejs:assembly_drill_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_drill_assembly`
        },
        {
            input: { item: 'kubejs:assembly_drill_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_drill', count: 1 },

            program: 'laser',
            id: `${id_prefix}assembly_drill_alternate`
        },
        {
            input: { item: 'kubejs:assembly_platform_package', count: 1 },
            output: { item: 'kubejs:assembly_platform_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_platform_assembly`
        },
        {
            input: { item: 'kubejs:assembly_platform_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_platform', count: 1 },

            program: 'laser',
            id: `${id_prefix}assembly_platform_alternate`
        },
        {
            input: { item: 'kubejs:assembly_controller_package', count: 1 },
            output: { item: 'kubejs:assembly_controller_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_controller_assembly`
        },
        {
            input: { item: 'kubejs:assembly_controller_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_controller', count: 1 },
            program: 'laser',
            id: `${id_prefix}assembly_controller_alternate`
        },
        {
            input: { tag: 'forge:storage_blocks/brass', count: 1 },
            output: { item: 'create:furnace_engine', count: 1 },
            program: 'drill',
            id: `${id_prefix}furnace_engine_alternate`
        },
        {
            input: { tag: 'forge:ingots/brass', count: 32 },
            output: { item: 'create:flywheel', count: 1 },
            program: 'drill',
            id: `${id_prefix}flywheel_alternate`
        }
    ];

    let armorSets = [
        {
            modID: 'pneumaticcraft',
            armorPieces: ['pneumatic_helmet', 'pneumatic_chestplate', 'pneumatic_leggings', 'pneumatic_boots']
        },
        {
            modID: 'mekanism',
            armorPieces: ['mekasuit_helmet', 'mekasuit_bodyarmor', 'mekasuit_pants', 'mekasuit_boots']
        }
    ];
    armorSets.forEach((armorSet) => {
        armorSet.armorPieces.forEach((armorPiece) => {
            recipes.push(
                {
                    input: { item: `kubejs:${armorPiece}_package`, count: 1 },
                    output: { item: `kubejs:${armorPiece}_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}${armorPiece}_assembly`
                },
                {
                    input: { item: `kubejs:${armorPiece}_assembly`, count: 1 },
                    output: { item: `${armorSet.modID}:${armorPiece}`, count: 1 },
                    program: 'laser',
                    id: `${id_prefix}${armorPiece}`
                }
            );
        });
    });

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
            const currentPartSize = partSize.replace('k_fluid', 'b_fluid');
            let storagePartID = `${storagePart.modID}:${currentPartSize}_storage_part`;

            if (storagePart.modID == 'extrastorage') {
                storagePartID = `${storagePart.modID}:storagepart_${currentPartSize}`;
            }
            recipes.push(
                {
                    input: { item: `kubejs:${partSize}_storage_part_package`, count: 1 },
                    output: { item: `kubejs:${partSize}_storage_part_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}${partSize}_storage_part_assembly`
                },
                {
                    input: { item: `kubejs:${partSize}_storage_part_assembly`, count: 1 },
                    output: { item: storagePartID, count: 1 },
                    program: 'laser',
                    id: `${id_prefix}${partSize}_storage_part`
                },

                {
                    input: { item: `kubejs:batch_${partSize}_storage_part_package`, count: 1 },
                    output: { item: `kubejs:batch_${partSize}_storage_part_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}batch_${partSize}_storage_part_assembly`
                },
                {
                    input: { item: `kubejs:batch_${partSize}_storage_part_assembly`, count: 1 },
                    output: { item: storagePartID, count: 30 },
                    program: 'laser',
                    id: `${id_prefix}batch_${partSize}_storage_part`
                }
            );
        });
    });

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input) || !e6eRecipeOutputExists(recipe.output)) return;
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: { id: recipe.output.item, count: recipe.output.count || 1 },
                program: recipe.program
            })
            .id(recipe.id);
    });
});

}
})();
