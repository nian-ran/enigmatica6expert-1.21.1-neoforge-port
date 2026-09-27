// 配方类型：create:mechanical_crafting
// 中文名称：机械合成器合成
// 用途：用于登记机械动力的机械合成器合成配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.result, recipe.pattern, recipe.key);
    });
});
})();

(function () {
// MythicBotany 未安装时，使用高阶 Create 合成替代符文仪式制作世界塑形器齿轮。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false || !e6ePortedRecipeModLoaded('create') || !e6ePortedRecipeModLoaded('kubejs_create')) return;

    const output = 'kubejs:worldshaper_cog';
    const key = {
        A: 'kubejs:laputian_ingot',
        B: 'astralsorcery:resonating_gem',
        C: 'mekanism:pellet_antimatter',
        D: 'create:precision_mechanism',
        E: 'minecraft:netherite_ingot',
        F: 'powah:ender_core',
        G: 'create:large_cogwheel'
    };
    if (!e6eCreateCanRegisterRecipe(output, Object.values(key))) return;

    event.recipes.create.mechanical_crafting(
        output,
        ['AABAA', 'BCDCB', 'EFGFE', 'BCDCB', 'AABAA'],
        key
    ).id('enigmatica:expert/create/kubejs_worldshaper_cog_fallback');
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mechanical_crafting/';
    const recipes = [
        {
            output: 'refinedstorage:controller',
            pattern: ['ACACA', 'CDBDC', 'AFEFA', 'CDBDC', 'ACACA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:ingots/slimesteel',
                C: 'xnet:netcable_blue',
                D: 'refinedstorage:quartz_enriched_iron',
                E: 'refinedstorage:machine_casing',
                F: 'immersiveengineering:logic_unit'
            },
            id: 'refinedstorage:controller'
        },
        {
            output: Item.of('create:crushing_wheel', 2),
            pattern: [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
            key: {
                A: 'create:andesite_alloy',
                S: 'create:shaft',
                P: 'create:brass_casing'
            },
            id: 'create:mechanical_crafting/crushing_wheel'
        },
        {
            output: 'refinedstorage:disk_drive',
            pattern: ['ABCBA', 'BDEDB', 'CFGFC', 'BDEDB', 'ABCBA'],
            key: {
                A: '#forge:circuits/basic',
                B: 'refinedstorage:advanced_processor',
                C: 'refinedstorage:quartz_enriched_iron',
                D: 'occultism:storage_stabilizer_tier1',
                E: '#xnet:advanced_connectors',
                F: 'immersiveengineering:logic_unit',
                G: 'refinedstorage:machine_casing'
            },
            id: 'refinedstorage:disk_drive'
        },
        {
            output: 'pneumaticcraft:assembly_drill',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: 'pneumaticcraft:drill_bit_diamond',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pneumatic_dynamo'
            },
            id: `${id_prefix}assembly_drill`
        },
        {
            output: 'pneumaticcraft:assembly_laser',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: '#powah:energizing_rod',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pneumatic_dynamo'
            },
            id: `${id_prefix}assembly_laser`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_import',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: 'create:brass_hand',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pneumatic_dynamo'
            },
            id: `${id_prefix}assembly_io_unit_import`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_export',
            pattern: [' AAA', 'ACCB', 'AC  ', 'DEDD'],
            key: {
                A: 'prettypipes:pipe',
                B: 'create:brass_hand',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pneumatic_dynamo'
            },
            id: `${id_prefix}assembly_io_unit_export`
        },
        {
            output: 'pneumaticcraft:assembly_controller',
            pattern: [' AAA', 'ACCB', 'AC  ', 'DEDD'],
            key: {
                A: 'prettypipes:pipe',
                B: 'computercraft:monitor_normal',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pneumatic_dynamo'
            },
            id: `${id_prefix}assembly_controller`
        },
        {
            output: 'pneumaticcraft:assembly_platform',
            pattern: [' AA ', 'BCCB', 'DDDD'],
            key: {
                A: '#pneumaticcraft:plastic_sheets',
                B: '#forge:ingots/compressed_iron',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab'
            },
            id: `${id_prefix}assembly_platform`
        },
        {
            output: 'pneumaticcraft:aerial_interface',
            pattern: ['AABAA', 'ACDEA', 'BCFGB', 'ACHEA', 'AABAA'],
            key: {
                A: 'pneumaticcraft:pressure_chamber_wall',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: 'powah:capacitor_blazing',
                D: 'pneumaticcraft:omnidirectional_hopper',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#industrialforegoing:machine_frame/supreme',
                G: 'extrastorage:neural_processor',
                H: 'powah:player_aerial_pearl'
            },
            id: `${id_prefix}aerial_interface`
        },
        {
            output: 'integrateddynamics:logic_programmer',
            pattern: ['ABBBA', 'CDEDC', 'CFGFC', 'CIHJC', 'ABBBA'],
            key: {
                A: 'pneumaticcraft:logistics_core',
                B: 'integrateddynamics:crystalized_menril_block',
                C: 'integrateddynamics:menril_wood',
                D: 'extrastorage:neural_processor',
                E: 'kubejs:cpu_core_as_81221',
                F: 'pneumaticcraft:smart_chest',
                G: 'refinedstorage:machine_casing',
                H: 'pneumaticcraft:upgrade_matrix',
                I: 'pneumaticcraft:network_io_port',
                J: 'pneumaticcraft:network_data_storage'
            },
            id: 'integrateddynamics:crafting/logic_programmer'
        },
        {
            output: 'mekanismgenerators:rotational_complex',
            pattern: ['ABCCC', 'BDBFC', 'CBGBC', 'CEBDB', 'CCCBA'],
            key: {
                A: '#forge:circuits/elite',
                B: '#forge:gears/compressed_iron',
                C: '#xnet:cables',
                D: '#mekanism:alloys/reinforced',
                E: 'rftoolscontrol:node',
                F: 'rftoolsbase:tablet',
                G: '#industrialforegoing:machine_frame/advanced'
            },
            id: 'mekanismgenerators:rotational_complex'
        },
        {
            output: 'mekanismgenerators:fusion_reactor_controller',
            pattern: ['  ABA  ', ' ACDCA ', 'ACEFECA', 'BDGHGDB', 'ACEIECA', ' ACDCA ', '  ABA  '],
            key: {
                A: 'mekanismgenerators:reactor_glass',
                B: '#xnet:cables',
                C: 'mekanismgenerators:fusion_reactor_frame',
                D: '#xnet:advanced_connectors',
                E: 'mekanism:ultimate_chemical_tank',
                F: 'rftoolsutility:environmental_controller',
                G: '#forge:circuits/ultimate',
                H: 'mekanism:ultimate_fluid_tank',
                I: 'rftoolsbase:tablet'
            },
            id: 'mekanismgenerators:reactor/controller'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['ABCBA', 'BDCDB', 'ECFCE', 'BGHGB', 'ABIBA'],
            key: {
                A: '#forge:alloys/elite',
                B: '#forge:plastic',
                C: 'mekanism:elite_mechanical_pipe',
                D: '#forge:gears/enderium',
                E: 'mekanism:elite_fluid_tank',
                F: 'pneumaticcraft:smart_chest',
                G: 'mekanism:superheating_element',
                H: 'immersiveengineering:capacitor_hv',
                I: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:dissolution_chamber'
        }
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let casingMaterial = `#forge:storage_blocks/${tier}`;
        if (tier == 'basic') {
            casingMaterial = '#forge:storage_blocks/lead';
        } else if (tier == 'hardened') {
            casingMaterial = '#forge:storage_blocks/energized_steel';
        }

        recipes.push({
            output: Item.of(`powah:reactor_${tier}`, 36),
            pattern: ['ABBBA', 'CPPPP', 'CDDDE', 'FGMLE', 'NGOKE', 'HIIKJ', 'ABBBA'],
            key: {
                A: 'powah:dielectric_casing',
                B: casingMaterial,
                C: Ingredient.of(`powah:energy_cell_${tier}`),
                D: Ingredient.of(`powah:thermo_generator_${tier}`),
                E: 'thermal:fluid_cell_frame',
                F: 'xnet:advanced_connector_green',
                G: 'xnet:netcable_green',
                H: 'xnet:advanced_connector_red',
                I: 'xnet:netcable_red',
                J: 'xnet:advanced_connector_blue',
                K: 'xnet:netcable_blue',
                L: 'pneumaticcraft:heat_pipe',
                M: 'kubejs:spirit_entropic_gateway',
                N: 'xnet:controller',
                O: Ingredient.of(`powah:furnator_${tier}`),
                P: 'create:fluid_pipe'
            },
            id: `powah:crafting/reactor_${tier}`
        });
    });

    // 原专家版六级蜂巢块分别对应森林、铝、锌、铀、钴、勤劳；这里改用目标整合包中的 Productive Bees 蜜蜂类型。
    const compactmachines = [
        { tier: 'tiny', bee: 'coal' },
        { tier: 'small', bee: 'aluminum', blockTag: '#c:storage_blocks/aluminum' },
        { tier: 'normal', bee: 'zinc', blockTag: '#c:storage_blocks/zinc' },
        { tier: 'large', bee: 'uraninite', blockTag: '#c:storage_blocks/uraninite' },
        { tier: 'giant', bee: 'osmium', blockTag: '#c:storage_blocks/osmium' },
        { tier: 'maximum', bee: 'netherite' }
    ];

    if (e6ePortedItemExists('productivebees:configurable_comb')) compactmachines.forEach((compactmachine) => {
        if (compactmachine.blockTag && !e6eRecipeIngredientExists(compactmachine.blockTag)) return;
        recipes.push({
            output: `compactmachines:machine_${compactmachine.tier}`,
            pattern: ['AABAA', 'ACCCA', 'DCECF', 'ACCCA', 'AAGAA'],
            key: {
                A: 'compactmachines:wall',
                B: 'portality:module_energy',
                C: Ingredient.of(`productivebees:configurable_comb[productivebees:bee_type="productivebees:${compactmachine.bee}"]`),
                D: 'portality:module_items',
                E: 'portality:controller',
                F: 'portality:module_fluids',
                G: 'portality:module_interdimensional'
            },
            id: `${id_prefix}compact_machine_${compactmachine.tier}`
        });
    });
    recipes.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
})();
