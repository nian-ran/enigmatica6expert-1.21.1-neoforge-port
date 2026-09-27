// 配方类型：pneumaticcraft:thermo_plant
// 中文名称：热力加工机加工
// 用途：用于登记气动工艺的热力加工机加工配方。

(function () {
if (e6ePortedRecipeModLoaded('thermal')) {
    ServerEvents.recipes((event) => {
        const id_prefix = 'enigmatica:base/pneumaticcraft/thermo_plant/';
        const recipes = [
            {
                fluidInput: { fluid: 'sophisticatedbackpacks:xp_still', amount: 1000 },
                fluidOutput: { id: 'industrialforegoing:essence', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false,
                id: `${id_prefix}if_memory_essence_from_sbp_essence`
            },
            {
                fluidInput: { fluid: 'industrialforegoing:essence', amount: 1000 },
                fluidOutput: { id: 'cofh_core:experience', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false,
                id: `${id_prefix}cofh_experience_from_if_essence`
            },
            {
                fluidInput: { fluid: 'cofh_core:experience', amount: 1000 },
                fluidOutput: { id: 'pneumaticcraft:memory_essence', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false,
                id: `${id_prefix}pnc_essence_from_cofh_experience`
            },
            {
                fluidInput: { fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
                fluidOutput: { id: 'sophisticatedbackpacks:xp_still', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false,
                id: `${id_prefix}sbp_essence_from_pnc_experience`
            },
            {
                itemInput: { tag: 'forge:terracotta' },
                fluidInput: { fluid: 'minecraft:water', amount: 10 },
                itemOutput: { id: 'minecraft:clay', count: 1 },
                pressure: 2.0,
                speed: 2.0,
                exothermic: false,
                temperature: { min: 373 },
                id: `${id_prefix}clay`
            },
            {
                fluidInput: { fluid: 'thermal:sap', amount: 20 },
                fluidOutput: { id: 'thermal:syrup', amount: 1 },
                speed: 10.0,
                exothermic: false,
                temperature: { min: 377 },
                id: `${id_prefix}syrup`
            },
            {
                fluidInput: { fluid: 'thermal:syrup', amount: 25 },
                itemOutput: { id: 'minecraft:sugar', count: 2 },
                speed: 10.0,
                exothermic: false,
                temperature: { min: 377 },
                id: `${id_prefix}sugar`
            },
            {
                fluidInput: { fluid: 'thermal:resin', amount: 400 },
                fluidOutput: { id: 'thermal:tree_oil', amount: 200 },
                itemOutput: { id: 'thermal:rosin', count: 1 },
                exothermic: false,
                temperature: { min: 377 },
                id: `${id_prefix}tree_oil_with_rosin`
            }
        ];

        recipes.forEach((recipe) => {
            if (recipe.fluidInput && !e6ePortedFluidExists(recipe.fluidInput.fluid)) return;
            if (recipe.fluidOutput && !e6ePortedFluidExists(recipe.fluidOutput.id)) return;
            if (recipe.itemInput && !e6eRecipeIngredientExists(recipe.itemInput)) return;
            if (recipe.itemOutput && !e6ePortedItemExists(recipe.itemOutput.id)) return;

            const inputs = {
                fluid: recipe.fluidInput || [],
                item: recipe.itemInput || []
            };
            const outputs = {};
            if (recipe.fluidOutput) outputs.fluid_output = recipe.fluidOutput;
            if (recipe.itemOutput) outputs.item_output = recipe.itemOutput;

            const data = {
                type: 'pneumaticcraft:thermo_plant',
                inputs,
                outputs,
                exothermic: recipe.exothermic
            };
            if (recipe.pressure !== undefined) data.pressure = recipe.pressure;
            if (recipe.speed !== undefined) data.speed = recipe.speed;
            if (recipe.temperature) data.temperature = recipe.temperature;

            event.custom(data).id(recipe.id);
        });
    });
}
})();

(function () {
// 专家版纳入源 normal 目录的热力植物配方。
if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        // 源专家配方会覆盖这些相同原料的 Chorus 与玻璃加工。
        const hasLegacyExpertThermoRecipes = [
            'astralsorcery',
            'atum',
            'bloodmagic',
            'mythicbotany',
            'resourcefulbees',
            'tconstruct',
            'thermal'
        ].every((modId) => e6ePortedRecipeModLoaded(modId));

        const recipes = [
            {
                itemInput: { tag: 'integrateddynamics:menril_logs' },
                itemOutput: { id: 'integrateddynamics:crystalized_menril_chunk', count: 4 },
                fluidOutput: { id: 'integrateddynamics:menril_resin', amount: 1000 },
                pressure: 3.0,
                exothermic: false,
                id: 'enigmatica:normal/pneumaticcraft/thermo_plant/crystalized_menril_chunk_with_resin_from_logs'
            },
            {
                itemInput: { item: 'integrateddynamics:menril_planks' },
                itemOutput: { id: 'integrateddynamics:crystalized_menril_chunk', count: 1 },
                fluidOutput: { id: 'integrateddynamics:menril_resin', amount: 250 },
                pressure: 3.0,
                exothermic: false,
                id: 'enigmatica:normal/pneumaticcraft/thermo_plant/crystalized_menril_chunk_with_resin_from_planks'
            },
            {
                itemInput: { item: 'minecraft:popped_chorus_fruit' },
                itemOutput: { id: 'integrateddynamics:crystalized_chorus_chunk', count: 4 },
                fluidOutput: { id: 'integrateddynamics:liquid_chorus', amount: 125 },
                pressure: 3.0,
                exothermic: false,
                skipIfLegacyExpert: true,
                id: 'enigmatica:normal/pneumaticcraft/thermo_plant/crystalized_chorus_chunk_with_liquid_from_chorus_fruit'
            },
            {
                itemInput: { item: 'integrateddynamics:proto_chorus' },
                itemOutput: { id: 'integrateddynamics:crystalized_chorus_chunk', count: 2 },
                fluidOutput: { id: 'integrateddynamics:liquid_chorus', amount: 125 },
                pressure: 3.0,
                exothermic: false,
                skipIfLegacyExpert: true,
                id: 'enigmatica:normal/pneumaticcraft/thermo_plant/crystalized_chorus_chunk_with_liquid_from_proto_chorus'
            },
            {
                itemInput: { tag: 'forge:glass/colorless' },
                itemOutput: { id: 'integratedterminals:menril_glass', count: 1 },
                fluidInput: { fluid: 'integrateddynamics:menril_resin', amount: 1000 },
                pressure: 3.0,
                exothermic: false,
                temperature: { min: 1273 },
                skipIfLegacyExpert: true,
                id: 'enigmatica:normal/pneumaticcraft/thermo_plant/menril_glass'
            },
            {
                itemInput: { tag: 'forge:glass/colorless' },
                itemOutput: { id: 'integratedterminals:chorus_glass', count: 1 },
                fluidInput: { fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
                pressure: 3.0,
                exothermic: false,
                temperature: { min: 1273 },
                skipIfLegacyExpert: true,
                id: 'enigmatica:normal/pneumaticcraft/thermo_plant/chorus_glass'
            }
        ];

        recipes.forEach((recipe) => {
            if (recipe.skipIfLegacyExpert && hasLegacyExpertThermoRecipes) return;
            if (recipe.itemInput && !e6eRecipeIngredientExists(recipe.itemInput)) return;
            if (recipe.itemOutput && !e6ePortedItemExists(recipe.itemOutput.id)) return;
            if (recipe.fluidInput && !e6ePortedFluidExists(recipe.fluidInput.fluid)) return;
            if (recipe.fluidOutput && !e6ePortedFluidExists(recipe.fluidOutput.id)) return;

            const inputs = { item: recipe.itemInput };
            if (recipe.fluidInput) inputs.fluid = recipe.fluidInput;
            const outputs = {};
            if (recipe.fluidOutput) outputs.fluid_output = recipe.fluidOutput;
            if (recipe.itemOutput) outputs.item_output = recipe.itemOutput;

            const data = {
                inputs,
                outputs,
                pressure: recipe.pressure,
                exothermic: recipe.exothermic
            };
            if (recipe.temperature) data.temperature = recipe.temperature;

            event.recipes.pneumaticcraft.thermo_plant(data).id(recipe.id);
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
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';
    const recipes = [
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'undergarden:virulent_mix_source', amount: 4000 },
            item_input: { item: 'occultism:spirit_attuned_gem' },
            item_output: { item: 'occultism:spirit_attuned_crystal', count: 1 },
            pressure: 4.8,
            speed: 0.5,
            exothermic: false,
            temperature: { min_temp: 1973 },
            id: 'occultism:crafting/spirit_attuned_crystal'
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:plastic', amount: 1000 },
            item_input: { item: 'kubejs:rough_machine_frame_top', count: 1 },
            item_output: { item: 'kubejs:coated_machine_frame_top', count: 1 },
            pressure: 4.5,
            speed: 0.8,
            exothermic: false,
            temperature: { min_temp: 1873 },
            id: `${id_prefix}coated_machine_frame_top`
        },
        /*
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:etching_acid', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:corrosivecrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}corrosivecrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:blood', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:vengefulcrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}vengefulcrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:blazing_blood', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:destructivecrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}destructivecrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:molten_obsidian', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:steadfastcrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}steadfastcrystal`
        },
        */
        {
            fluid_input: { type: 'pneumaticcraft:fluid', tag: 'forge:experience', amount: 8000 },
            item_input: { item: 'bloodmagic:corrupted_dust', count: 1 },
            item_output: { item: 'bloodmagic:defaultcrystal', count: 2 },
            pressure: 4.8,
            speed: 0.8,
            exothermic: true,
            temperature: { min_temp: 1173, max_temp: 1273 },
            id: `${id_prefix}defaultcrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 },
            item_input: { item: 'kubejs:smoldering_lapis_lazuli_compound', count: 1 },
            item_output: { item: 'pneumaticcraft:upgrade_matrix', count: 4 },
            pressure: 2.0,
            speed: 0.8,
            id: 'pneumaticcraft:thermo_plant/upgrade_matrix'
        },
        {
            item_input: { item: 'atum:crystal_glass' },
            item_output: { item: 'integratedterminals:menril_glass' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 1000 },
            pressure: 4.0,
            speed: 0.5,
            exothermic: false,
            temperature: { min_temp: 1273 },
            id: `${id_prefix}menril_glass`
        },
        {
            item_input: { item: 'atum:crystal_glass' },
            item_output: { item: 'integratedterminals:chorus_glass' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
            pressure: 4.0,
            speed: 0.5,
            exothermic: false,
            temperature: { min_temp: 1273 },
            id: `${id_prefix}chorus_glass`
        },
        {
            item_input: { item: 'minecraft:popped_chorus_fruit' },
            fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}liquid_chorus_from_chorus_fruit`
        },
        {
            item_input: { item: 'integrateddynamics:proto_chorus' },
            fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}liquid_chorus_from_proto_chorus`
        },
        {
            item_input: { item: 'rftoolsbase:machine_base' },
            item_output: { item: 'rftoolspower:power_core1' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 9000 },
            pressure: 2.0,
            exothermic: false,
            temperature: { min_temp: 1973 },
            id: 'rftoolspower:power_core1'
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'mekanism:lithium', amount: 100 },
            item_output: { item: 'emendatusenigmatica:lithium_dust', count: 1 },
            pressure: 2.0,
            exothermic: true,
            temperature: { max_temp: 453 },
            id: `${id_prefix}lithium_dust`
        },
        {
            fluid_input: {
                type: 'pneumaticcraft:fluid',
                fluid: 'productivebees:honey',
                amount: 250
            },
            item_input: { item: 'mythicbotany:kvasir_blood' },
            item_output: { item: 'mythicbotany:kvasir_mead', count: 1 },
            pressure: 4.0,
            exothermic: false,
            speed: 0.1,
            temperature: { max_temp: 1973 },
            id: `${id_prefix}kvasir_mead`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'astralsorcery:liquid_starlight', amount: 1000 },
            item_input: { item: 'kubejs:astrogro' },
            item_output: { item: 'astralsorcery:celestial_crystal', count: 1 },
            pressure: 4.5,
            exothermic: true,
            speed: 0.1,
            temperature: { max_temp: 100 },
            id: `${id_prefix}celestial_crystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'industrialforegoing:latex', amount: 900 },
            item_input: { tag: 'forge:dusts/sulfur' },
            item_output: { item: 'industrialforegoing:dryrubber', count: 1 },
            pressure: 3.0,
            exothermic: false,
            speed: 1.1,
            temperature: { min_temp: 433 },
            id: `${id_prefix}dryrubber`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 100 },
            item_input: { item: 'minecraft:spider_eye' },
            fluid_output: { fluid: 'tconstruct:venom', amount: 100 },
            pressure: 2.0,
            exothermic: false,
            speed: 0.5,
            temperature: { min_temp: 373 },
            id: `${id_prefix}venom_from_spider_eye`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 200 },
            item_input: { item: 'minecraft:fermented_spider_eye' },
            fluid_output: { fluid: 'tconstruct:venom', amount: 200 },
            pressure: 2.0,
            exothermic: false,
            speed: 0.5,
            temperature: { min_temp: 373 },
            id: `${id_prefix}venom_from_fermented_spider_eye`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:plastic', amount: 1000 },
            item_input: { item: 'kubejs:monster_mash' },
            fluid_output: { fluid: 'pneumaticcraft:etching_acid', amount: 1000 },
            pressure: 1.0,
            exothermic: false,
            speed: 0.5,
            id: `${id_prefix}etching_acid_from_monster_mash`
        }
    ];

    let crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

    crystal_colors.forEach((crystal_color) => {
        recipes.push({
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:molten_aluminum', amount: 18 },
            item_input: { item: `quark:${crystal_color}_crystal_cluster` },
            item_output: { item: `quark:${crystal_color}_crystal_pane`, count: 1 },
            pressure: 4.8,
            exothermic: false,
            speed: 0.25,
            temperature: { min_temp: 2200 },
            id: `${id_prefix}${crystal_color}_crystal_pane`
        });
    });

    recipes.forEach((recipe) => {
        const fluidInput = recipe.fluid_input;
        const fluidId = fluidInput && fluidInput.fluid;
        const fluidOutputId = recipe.fluid_output && recipe.fluid_output.fluid;
        const itemInput = recipe.item_input;
        const itemOutputId = recipe.item_output && recipe.item_output.item;

        if (fluidId && !e6ePortedFluidExists(fluidId)) return;
        if (fluidOutputId && !e6ePortedFluidExists(fluidOutputId)) return;
        if (itemInput && !e6eRecipeIngredientExists(itemInput)) return;
        if (itemOutputId && !e6ePortedItemExists(itemOutputId)) return;

        const inputs = {};
        if (fluidInput) {
            inputs.fluid = fluidInput.tag
                ? { tag: fluidInput.tag, amount: fluidInput.amount }
                : { fluid: fluidInput.fluid, amount: fluidInput.amount };
        }
        if (itemInput) inputs.item = itemInput;
        const outputs = {};
        if (recipe.fluid_output) {
            outputs.fluid_output = { id: recipe.fluid_output.fluid, amount: recipe.fluid_output.amount };
        }
        if (recipe.item_output) {
            outputs.item_output = {
                id: recipe.item_output.item,
                count: recipe.item_output.count || 1
            };
        }

        const migratedRecipe = {
            type: 'pneumaticcraft:thermo_plant',
            inputs,
            outputs,
            exothermic: recipe.exothermic === undefined ? false : recipe.exothermic
        };
        ['pressure', 'speed'].forEach((key) => {
            if (recipe[key] !== undefined) migratedRecipe[key] = recipe[key];
        });
        if (recipe.temperature) {
            migratedRecipe.temperature = {};
            if (recipe.temperature.min_temp !== undefined) migratedRecipe.temperature.min = recipe.temperature.min_temp;
            if (recipe.temperature.max_temp !== undefined) migratedRecipe.temperature.max = recipe.temperature.max_temp;
            if (recipe.temperature.min !== undefined) migratedRecipe.temperature.min = recipe.temperature.min;
            if (recipe.temperature.max !== undefined) migratedRecipe.temperature.max = recipe.temperature.max;
        }

        event.custom(migratedRecipe).id(recipe.id);
    });
});

}
})();
