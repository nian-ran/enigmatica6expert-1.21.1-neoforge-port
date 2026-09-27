// 配方类型：mekanism:mek_data
// 中文名称：通用机械附加数据
// 用途：用于登记通用机械的通用机械附加数据配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: 'mekanism:elite_energy_cube',
            pattern: ['AEA', 'IPI', 'AEA'],
            key: {
                P: { item: 'mekanism:advanced_energy_cube' },
                E: { item: 'mekanism:energy_tablet' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:energy_cube/elite'
        },
        {
            output: 'mekanism:basic_fluid_tank',
            pattern: ['AIA', 'I I', 'AIA'],
            key: {
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/basic' }
            },
            id: 'mekanism:fluid_tank/basic'
        },
        {
            output: 'mekanism:advanced_fluid_tank',
            pattern: ['AIA', 'IPI', 'AIA'],
            key: {
                P: { item: 'mekanism:basic_fluid_tank' },
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/infused' }
            },
            id: 'mekanism:fluid_tank/advanced'
        },
        {
            output: 'mekanism:elite_fluid_tank',
            pattern: ['AIA', 'IPI', 'AIA'],
            key: {
                P: { item: 'mekanism:advanced_fluid_tank' },
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:fluid_tank/elite'
        },
        {
            output: 'mekanism:ultimate_fluid_tank',
            pattern: ['AIA', 'IPI', 'AIA'],
            key: {
                P: { item: 'mekanism:elite_fluid_tank' },
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/atomic' }
            },
            id: 'mekanism:fluid_tank/ultimate'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mekanism:mek_data',
            result: Item.of(recipe.output).toJson(),
            pattern: recipe.pattern,
            key: recipe.key
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/shaped_data/';
    const recipes = [
        {
            result: 'mekanism:basic_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_blazing' },
                B: { tag: 'industrialforegoing:machine_frame/simple' },
                C: {
                    item: 'immersiveengineering:graphite_electrode'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'forge:ingots/signalum' }
            },
            id: 'mekanism:energy_cube/basic'
        },
        {
            result: 'mekanism:advanced_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_energy_cube' },
                C: {
                    item: 'immersiveengineering:graphite_electrode'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'mekanism:alloys/infused' }
            },
            id: 'mekanism:energy_cube/advanced'
        },
        {
            result: 'mekanism:elite_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_energy_cube' },
                C: {
                    item: 'immersiveengineering:graphite_electrode'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:energy_cube/elite'
        },
        {
            result: 'mekanism:ultimate_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_energy_cube' },
                C: {
                    item: 'immersiveengineering:graphite_electrode'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'mekanism:alloys/atomic' }
            },
            id: 'mekanism:energy_cube/ultimate'
        },
        {
            result: 'mekanism:basic_induction_cell',
            pattern: ['AAA', 'DCD', 'BBB'],
            key: {
                A: { item: 'powah:capacitor_blazing' },
                B: { item: 'immersiveengineering:coil_hv' },
                C: { item: 'mekanism:basic_energy_cube' },
                D: { tag: 'forge:alloys/elite' }
            },
            id: 'mekanism:induction/cell/basic'
        },
        {
            result: 'mekanism:advanced_induction_cell',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_induction_cell' },
                C: { item: 'mekanism:advanced_energy_cube' }
            },
            id: 'mekanism:induction/cell/advanced'
        },
        {
            result: 'mekanism:advanced_induction_cell',
            pattern: ['AAA', 'DCD', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_induction_cell' },
                C: { item: 'mekanism:advanced_energy_cube' },
                D: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}advanced_induction_cell_alt`
        },

        {
            result: 'mekanism:elite_induction_cell',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_induction_cell' },
                C: { item: 'mekanism:elite_energy_cube' }
            },
            id: 'mekanism:induction/cell/elite'
        },
        {
            result: 'mekanism:elite_induction_cell',
            pattern: ['AAA', 'DCD', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_induction_cell' },
                C: { item: 'mekanism:elite_energy_cube' },
                D: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}elite_induction_cell_alt`
        },

        {
            result: 'mekanism:ultimate_induction_cell',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_induction_cell' },
                C: { item: 'mekanism:ultimate_energy_cube' }
            },
            id: 'mekanism:induction/cell/ultimate'
        },
        {
            result: 'mekanism:ultimate_induction_cell',
            pattern: ['AAA', 'DCD', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_induction_cell' },
                C: { item: 'mekanism:ultimate_energy_cube' },
                D: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}ultimate_induction_cell_alt`
        },

        {
            result: 'mekanism:advanced_induction_provider',
            pattern: ['BAB', 'ECE', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/advanced' },
                B: { item: 'mekanism:basic_induction_provider' },
                C: { item: 'mekanism:advanced_energy_cube' },
                D: { item: 'powah:capacitor_niotic' },
                E: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}advanced_induction_provider_alt`
        },
        {
            result: 'mekanism:elite_induction_provider',
            pattern: ['BAB', 'ECE', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/elite' },
                B: { item: 'mekanism:advanced_induction_provider' },
                C: { item: 'mekanism:elite_energy_cube' },
                D: { item: 'powah:capacitor_spirited' },
                E: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}elite_induction_provider_alt`
        },
        {
            result: 'mekanism:ultimate_induction_provider',
            pattern: ['BAB', 'ECE', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/ultimate' },
                B: { item: 'mekanism:elite_induction_provider' },
                C: { item: 'mekanism:ultimate_energy_cube' },
                D: { item: 'powah:capacitor_nitro' },
                E: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}ultimate_induction_provider_alt`
        },

        {
            result: 'mekanism:basic_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/basic' },
                B: { tag: 'forge:alloys/elite' },
                C: { item: 'mekanism:basic_energy_cube' },
                D: { item: 'powah:capacitor_blazing' }
            },
            id: 'mekanism:induction/provider/basic'
        },
        {
            result: 'mekanism:advanced_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/advanced' },
                B: { item: 'mekanism:basic_induction_provider' },
                C: { item: 'mekanism:advanced_energy_cube' },
                D: { item: 'powah:capacitor_niotic' }
            },
            id: 'mekanism:induction/provider/advanced'
        },
        {
            result: 'mekanism:elite_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/elite' },
                B: { item: 'mekanism:advanced_induction_provider' },
                C: { item: 'mekanism:elite_energy_cube' },
                D: { item: 'powah:capacitor_spirited' }
            },
            id: 'mekanism:induction/provider/elite'
        },
        {
            result: 'mekanism:ultimate_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/ultimate' },
                B: { item: 'mekanism:elite_induction_provider' },
                C: { item: 'mekanism:ultimate_energy_cube' },
                D: { item: 'powah:capacitor_nitro' }
            },
            id: 'mekanism:induction/provider/ultimate'
        }
    ];

    recipes.forEach((recipe) => {
        // 此 1.21.1 配方路径不再提供旧版气动工艺流体原料序列化器。
        if (Object.values(recipe.key).some((ingredient) => ingredient.type === 'pneumaticcraft:fluid')) return;
        recipe.type = 'mekanism:mek_data';
        recipe.result = Item.of(recipe.result).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
})();

(function () {
// 将原 normal 版 Mekanism 精英工厂升级配方纳入专家版。
if (e6ePortedRecipeModLoaded('mekanism') && e6ePortedRecipeModLoaded('kubejs_mekanism')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const recipes = [
            {
                output: 'mekanism:elite_combining_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_combining_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/combining'
            },
            {
                output: 'mekanism:elite_enriching_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_enriching_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/enriching'
            },
            {
                output: 'mekanism:elite_crushing_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_crushing_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/crushing'
            },
            {
                output: 'mekanism:elite_compressing_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_compressing_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/compressing'
            },
            {
                output: 'mekanism:elite_smelting_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_smelting_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/smelting'
            },
            {
                output: 'mekanism:elite_sawing_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_sawing_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/sawing'
            },
            {
                output: 'mekanism:elite_purifying_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_purifying_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/purifying'
            },
            {
                output: 'mekanism:elite_injecting_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_injecting_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/injecting'
            },
            {
                output: 'mekanism:elite_infusing_factory',
                pattern: ['ACA', 'IPI', 'ACA'],
                key: {
                    P: { item: 'mekanism:advanced_infusing_factory' },
                    C: { tag: 'forge:circuits/elite' },
                    I: { tag: 'forge:ingots/gold_bronze' },
                    A: { tag: 'mekanism:alloys/reinforced' }
                },
                id: 'mekanism:factory/elite/infusing'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6eCanRegisterRecipe(recipe.output, Object.values(recipe.key))) return;
            event.custom({
                type: 'mekanism:mek_data',
                result: Item.of(recipe.output).toJson(),
                pattern: recipe.pattern,
                key: recipe.key
            }).id(recipe.id);
        });
    });
}
})();
