// 配方类型：e6e_mbd2:thermal_press
// 中文名称：仿热力系列压制机加工
// 用途：用于登记 E6E MBD2 对应多方块机器的加工或产出配方。

(function () {
// Lychee 提供过热材料配方；MBD2 替代原 Oritech 装配机。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "e6e_mbd2:thermal_press", true, ["e6e_mbd2:thermal_press","lychee:item_exploding"]);
    if (global.isExpertMode == false) return;

    const steelIngot = e6eRegisteredItemTagHasItems('#c:ingots/steel')
        ? '#c:ingots/steel' : 'immersiveengineering:ingot_steel';
    const steelBlock = e6eRegisteredItemTagHasItems('#c:storage_blocks/steel')
        ? '#c:storage_blocks/steel' : 'immersiveengineering:storage_steel';
    const bitumen = 'immersivepetroleum:bitumen';

    if (e6ePortedRecipeModLoaded('lychee') && e6eRecipeIngredientExists(steelIngot)
        && e6eRecipeIngredientExists(steelBlock) && e6eRecipeIngredientExists(bitumen)
        && e6eRecipeOutputExists('kubejs:superheated_steel_ingot')
        && e6eRecipeOutputExists('kubejs:superheated_steel_block')) {
        event.custom({
            type: 'lychee:item_exploding',
            item_in: [`2x ${steelIngot}`, `2x ${bitumen}`, '2x minecraft:obsidian'],
            post: 'drop 4x kubejs:superheated_steel_ingot'
        }).id('enigmatica:expert/lychee/superheated_steel_ingot');

        event.custom({
            type: 'lychee:item_exploding',
            item_in: [`2x ${steelBlock}`, `18x ${bitumen}`, '18x minecraft:obsidian'],
            post: 'drop 4x kubejs:superheated_steel_block'
        }).id('enigmatica:expert/lychee/superheated_steel_block');
    }

    if (!e6ePortedRecipeModLoaded('e6e_mbd2')) return;
    const pressed = [
        ['kubejs:superheated_steel_ingot', '2x kubejs:hot_compressed_iron_ingot', 'hot_compressed_iron_ingot', 1000],
        ['kubejs:superheated_steel_block', '2x kubejs:hot_compressed_iron_block', 'hot_compressed_iron_block', 9000]
    ];
    pressed.forEach(([input, output, name, fe]) => {
        if (!e6eRecipeIngredientExists(input) || !e6eRecipeOutputExists(output)) return;
        event.recipes.e6e_mbd2.thermal_press()
            .id('enigmatica:expert/mbd2/press/' + name)
            .duration(120)
            .inputItems('4x ' + input)
            .outputItems(output)
            .inputFE(fe);
    });
});
})();

(function () {
// 将原普通模式的材料统一配方加入专家版，并以 MBD2 热力压榨机替代热力压机。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "e6e_mbd2:thermal_press", false, ["create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:smelting"]);
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
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "e6e_mbd2:thermal_press", false, ["botania:mana_infusion","create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","interactio:item_fluid_transform","interactio:item_lightning","mekanism:smelting","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","naturesaura:altar","neovitae:ara_vitae_recipe"]);
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
// E6E MBD2 多方块机器中的热力加工配方。
// 在此文件中修改输入、输出、能量、概率或耗时。
// 这些配方不依赖热力系列或 Oritech。

const e6eThermalMbd2Recipes = [
    // 粉碎机
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/end_stone', ticks: 120, fe: 2400,
        itemInputs: ['#forge:end_stones'],
        itemOutputs: ['4x occultism:crushed_end_stone']
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/petcoke_dust', ticks: 80, fe: 1600,
        itemInputs: ['#forge:coal_petcoke'],
        itemOutputs: ['immersivepetroleum:petcoke_dust']
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/petcoke_dust_from_block', ticks: 160, fe: 14400,
        itemInputs: ['#forge:storage_blocks/coal_petcoke'],
        itemOutputs: ['9x immersivepetroleum:petcoke_dust']
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/coke_dust_from_block', ticks: 160, fe: 14400,
        itemInputs: ['#forge:storage_blocks/coal_coke'],
        itemOutputs: ['9x immersiveengineering:dust_coke']
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/netherite_ore', ticks: 120, fe: 2400,
        itemInputs: ['#forge:ores/netherite'], itemOutputs: ['2x minecraft:netherite_scrap']
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/grain_to_flour', ticks: 60, fe: 1200,
        itemInputs: ['#forge:grain'],
        itemOutputs: ['create:wheat_flour', { stack: 'create:wheat_flour', chance: 0.25 }]
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/sugar_cane', ticks: 60, fe: 1200,
        itemInputs: ['minecraft:sugar_cane'],
        itemOutputs: ['2x minecraft:sugar', { stack: 'minecraft:sugar', chance: 0.1 }]
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/blaze_rod', ticks: 80, fe: 1600,
        itemInputs: ['#forge:rods/blaze'],
        itemOutputs: ['3x minecraft:blaze_powder', { stack: 'mekanism:dust_sulfur', chance: 0.25 }]
    },
    {
        machine: 'thermal_pulverizer', id: 'pulverizer/obsidian', ticks: 100, fe: 2000,
        itemInputs: ['#forge:obsidian'], itemOutputs: ['4x mekanism:dust_obsidian']
    },
    // 锯木机
    {
        machine: 'thermal_sawmill', id: 'sawmill/sticks_from_planks', ticks: 60, fe: 1000,
        itemInputs: ['#minecraft:planks'],
        itemOutputs: ['6x minecraft:stick', { stack: 'immersiveengineering:sawdust', chance: 0.25 }]
    },
    {
        machine: 'thermal_sawmill', id: 'sawmill/sticks_from_slabs', ticks: 45, fe: 800,
        itemInputs: ['#minecraft:wooden_slabs'],
        itemOutputs: ['3x minecraft:stick', { stack: 'immersiveengineering:sawdust', chance: 0.125 }]
    },
    {
        machine: 'thermal_sawmill', id: 'sawmill/sticks_from_stairs', ticks: 70, fe: 1200,
        itemInputs: ['#minecraft:wooden_stairs'],
        itemOutputs: ['9x minecraft:stick', { stack: 'immersiveengineering:sawdust', chance: 0.375 }]
    },
    {
        machine: 'thermal_sawmill', id: 'sawmill/aphorism_tile', ticks: 100, fe: 1800,
        itemInputs: ['#c:storage_blocks/quartz'],
        itemOutputs: ['2x pneumaticcraft:aphorism_tile', { stack: 'mekanism:dust_quartz', chance: 0.375 }]
    },
    {
        machine: 'thermal_sawmill', id: 'sawmill/dimensional_storage_crystal', ticks: 120, fe: 2400,
        itemInputs: ['occultism:dimensional_matrix'], itemOutputs: ['2x occultism:storage_crystal']
    },
    {
        machine: 'thermal_sawmill', id: 'sawmill/blank_plate', ticks: 100, fe: 1800,
        itemInputs: ['occultism:otherstone'],
        itemOutputs: ['8x darkutils:blank_plate', { stack: 'darkutils:blank_plate', chance: 0.5 }]
    },

    // 红石熔炉
    {
        machine: 'thermal_redstone_furnace', id: 'furnace/raw_iron', ticks: 100, fe: 2000,
        itemInputs: ['minecraft:raw_iron'], itemOutputs: ['minecraft:iron_ingot']
    },

    // 红石熔炉
    {
        machine: 'thermal_redstone_furnace', id: 'furnace/raw_copper', ticks: 100, fe: 2000,
        itemInputs: ['minecraft:raw_copper'], itemOutputs: ['minecraft:copper_ingot']
    },
    {
        machine: 'thermal_redstone_furnace', id: 'furnace/raw_gold', ticks: 100, fe: 2000,
        itemInputs: ['minecraft:raw_gold'], itemOutputs: ['minecraft:gold_ingot']
    },
    {
        machine: 'thermal_redstone_furnace', id: 'furnace/sand_to_glass', ticks: 120, fe: 2400,
        itemInputs: ['#forge:sand'], itemOutputs: ['minecraft:glass']
    },

    // 感应炉
    {
        machine: 'thermal_induction_smelter', id: 'smelter/netherite_ingot', ticks: 160, fe: 10000,
        itemInputs: ['4x minecraft:netherite_scrap', '2x minecraft:gold_ingot'],
        itemOutputs: ['minecraft:netherite_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/tinkers_bronze', ticks: 120, fe: 6000,
        itemInputs: ['#forge:glass', '3x #forge:ingots/copper'],
        itemOutputs: ['3x tconstruct:tinkers_bronze_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/hepatizon', ticks: 140, fe: 8000,
        itemInputs: ['2x #forge:ingots/copper', '#forge:ingots/cobalt', '4x #forge:dusts/quartz'],
        itemOutputs: ['2x tconstruct:hepatizon_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/queens_slime', ticks: 140, fe: 8000,
        itemInputs: ['#forge:ingots/gold', '#forge:ingots/cobalt', 'minecraft:magma_cream'],
        itemOutputs: ['2x tconstruct:queens_slime_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/pig_iron', ticks: 120, fe: 6000,
        itemInputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
        itemOutputs: ['2x tconstruct:pig_iron_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/slimesteel', ticks: 120, fe: 6000,
        itemInputs: ['#forge:ingots/iron', 'tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
        itemOutputs: ['2x tconstruct:slimesteel_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/manyullyn', ticks: 160, fe: 10000,
        itemInputs: ['3x #forge:ingots/cobalt', 'minecraft:netherite_scrap'],
        itemOutputs: ['4x tconstruct:manyullyn_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/refined_obsidian', ticks: 100, fe: 3000,
        itemInputs: ['#forge:dusts/refined_obsidian', '#forge:ingots/osmium'],
        itemOutputs: ['mekanism:ingot_refined_obsidian']
    },
    {
        machine: 'thermal_induction_smelter', id: 'smelter/refined_glowstone', ticks: 100, fe: 3000,
        itemInputs: ['#forge:dusts/glowstone', '#forge:ingots/osmium'],
        itemOutputs: ['mekanism:ingot_refined_glowstone']
    },
    // 其余原 E6E 感应炉配方。这些配方保留原有的
    // 即使某些原版专属物品在 1.21.1 中不存在，也保留多输入组合。
    {
        machine: 'thermal_induction_smelter', id: 'source_normal/smelter/compact_machines_wall', ticks: 100, fe: 5000,
        itemInputs: ['#forge:ingots/enderium', '8x fluxnetworks:flux_dust'],
        itemOutputs: ['32x compactmachines:wall']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/froststeel_ingot', ticks: 120, fe: 6000,
        itemInputs: ['3x #forge:ingots/cobalt', 'thermal:blizz_powder'],
        itemOutputs: ['3x undergarden:froststeel_ingot']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/crystal_glass', ticks: 120, fe: 6000,
        itemInputs: ['glassential:glass_ghostly', 'quark:white_crystal_cluster', 'atum:sand'],
        itemOutputs: ['2x atum:crystal_glass']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/seared_brick', ticks: 100, fe: 5000,
        itemInputs: ['#forge:clay', '#forge:sand', '#forge:gravel'],
        itemOutputs: ['2x tconstruct:seared_brick']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/seared_brick_from_grout', ticks: 100, fe: 5000,
        itemInputs: ['tconstruct:grout'], itemOutputs: ['tconstruct:seared_brick']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/scorched_brick', ticks: 100, fe: 5000,
        itemInputs: ['minecraft:magma_cream', '#minecraft:soul_fire_base_blocks', '#forge:gravel'],
        itemOutputs: ['2x tconstruct:scorched_brick']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/scorched_brick_from_nether_grout', ticks: 100, fe: 5000,
        itemInputs: ['tconstruct:nether_grout'], itemOutputs: ['tconstruct:scorched_brick']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/alloy_reinforced', ticks: 120, fe: 6000,
        itemInputs: ['4x #forge:dusts/lithium', '3x #forge:ingots/aluminum', '#forge:ingots/copper'],
        itemOutputs: ['4x mekanism:alloy_reinforced']
    },
    {
        machine: 'thermal_induction_smelter', id: 'source_expert/smelter/compact_machines_wall', ticks: 120, fe: 6000,
        itemInputs: ['6x ars_nouveau:warding_stone', 'immersiveengineering:coil_mv', '3x fluxnetworks:flux_dust'],
        itemOutputs: ['6x compactmachines:wall']
    },

    // 压缩机：材料打包配方也定义在 enigmatica/packing_unpacking.js。
    {
        machine: 'thermal_compactor', id: 'compactor/copper_block', ticks: 80, fe: 1600,
        itemInputs: ['9x #forge:ingots/copper'], itemOutputs: ['minecraft:copper_block']
    },
    {
        machine: 'thermal_compactor', id: 'compactor/copper_ingots', ticks: 80, fe: 1600,
        itemInputs: ['minecraft:copper_block'], itemOutputs: ['9x minecraft:copper_ingot']
    },

    // 压榨机：原热力冲压配方不再需要热力模具。
    {
        machine: 'thermal_press', id: 'press/basic_processor', ticks: 80, fe: 3000,
        itemInputs: ['refinedstorage:raw_basic_processor'], itemOutputs: ['refinedstorage:basic_processor']
    },
    {
        machine: 'thermal_press', id: 'press/improved_processor', ticks: 120, fe: 6000,
        itemInputs: ['refinedstorage:raw_improved_processor'], itemOutputs: ['refinedstorage:improved_processor']
    },
    {
        machine: 'thermal_press', id: 'press/advanced_processor', ticks: 160, fe: 9000,
        itemInputs: ['refinedstorage:raw_advanced_processor'], itemOutputs: ['refinedstorage:advanced_processor']
    },
    {
        machine: 'thermal_press', id: 'press/neural_processor', ticks: 200, fe: 12000,
        itemInputs: ['extrastorage:raw_neural_processor'], itemOutputs: ['extrastorage:neural_processor']
    },
    {
        machine: 'thermal_press', id: 'press/thermoelectric_plate', ticks: 100, fe: 2000,
        itemInputs: ['immersiveengineering:thermoelectric_generator'], itemOutputs: ['powah:thermoelectric_plate']
    },

    // 离心机与坩埚
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/honey_bottle', ticks: 80,
        itemInputs: ['minecraft:honey_bottle'], itemOutputs: ['minecraft:glass_bottle'],
        fluidOutputs: ['250x productivebees:honey']
    },
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/honey_block_to_honey', ticks: 100,
        itemInputs: ['minecraft:honey_block'], fluidOutputs: ['1000x productivebees:honey']
    },
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/menril_resin_from_logs', ticks: 120, fe: 2400,
        itemInputs: ['#integrateddynamics:menril_logs'],
        itemOutputs: ['4x integrateddynamics:crystalized_menril_chunk'],
        fluidOutputs: ['1000x integrateddynamics:menril_resin']
    },
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/menril_resin_from_planks', ticks: 80, fe: 1600,
        itemInputs: ['integrateddynamics:menril_planks'],
        itemOutputs: ['integrateddynamics:crystalized_menril_chunk'],
        fluidOutputs: ['250x integrateddynamics:menril_resin']
    },
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/liquid_chorus_from_chorus_fruit', ticks: 100, fe: 2000,
        itemInputs: ['minecraft:popped_chorus_fruit'],
        itemOutputs: ['4x integrateddynamics:crystalized_chorus_chunk'],
        fluidOutputs: ['125x integrateddynamics:liquid_chorus']
    },
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/liquid_chorus_from_proto_chorus', ticks: 100, fe: 2000,
        itemInputs: ['integrateddynamics:proto_chorus'],
        itemOutputs: ['2x integrateddynamics:crystalized_chorus_chunk'],
        fluidOutputs: ['125x integrateddynamics:liquid_chorus']
    },
    {
        machine: 'thermal_centrifuge', id: 'centrifuge/ground_meat', ticks: 100, fe: 2000,
        itemInputs: ['kubejs:ground_meat'],
        itemOutputs: [{ stack: 'minecraft:bone_meal', chance: 0.15 }],
        fluidOutputs: ['100x industrialforegoing:meat']
    },
    {
        machine: 'thermal_crucible', id: 'crucible/honey_block_to_honey', ticks: 100,
        itemInputs: ['minecraft:honey_block'], fluidOutputs: ['1000x productivebees:honey']
    },

    // 精炼机、冷却机与灌装机
    {
        machine: 'thermal_refinery', id: 'refinery/dryrubber', ticks: 120, fe: 12000,
        fluidInputs: ['900x industrialforegoing:latex'], itemOutputs: ['industrialforegoing:dryrubber']
    },
    {
        machine: 'thermal_refinery', id: 'refinery/pneumatic_oil_to_crude', ticks: 180, fe: 18000,
        fluidInputs: ['1000x pneumaticcraft:oil'],
        fluidOutputs: ['750x immersivepetroleum:crudeoil'],
        itemOutputs: [{ stack: 'immersivepetroleum:bitumen', chance: 0.1 }]
    },
    {
        machine: 'thermal_chiller', id: 'chiller/honey_block', ticks: 100,
        fluidInputs: ['1000x productivebees:honey'], itemOutputs: ['minecraft:honey_block']
    },
    {
        machine: 'thermal_chiller', id: 'chiller/crystalized_menril_block', ticks: 100, fe: 4000,
        fluidInputs: ['1000x integrateddynamics:menril_resin'],
        itemOutputs: ['integrateddynamics:crystalized_menril_block']
    },
    {
        machine: 'thermal_chiller', id: 'chiller/crystalized_chorus_block', ticks: 100, fe: 4000,
        fluidInputs: ['1000x integrateddynamics:liquid_chorus'],
        itemOutputs: ['integrateddynamics:crystalized_chorus_block']
    },
    {
        machine: 'thermal_bottler', id: 'bottler/menril_glass', ticks: 100,
        itemInputs: ['#c:glass_blocks'], fluidInputs: ['1000x integrateddynamics:menril_resin'],
        itemOutputs: ['integratedterminals:menril_glass']
    },
    {
        machine: 'thermal_bottler', id: 'bottler/chorus_glass', ticks: 100,
        itemInputs: ['#c:glass_blocks'], fluidInputs: ['1000x integrateddynamics:liquid_chorus'],
        itemOutputs: ['integratedterminals:chorus_glass']
    },
    {
        machine: 'thermal_bottler', id: 'bottler/honey_bottle', ticks: 80,
        itemInputs: ['minecraft:glass_bottle'], fluidInputs: ['250x productivebees:honey'],
        itemOutputs: ['minecraft:honey_bottle']
    },
    {
        machine: 'thermal_bottler', id: 'bottler/milk_bottle', ticks: 80,
        itemInputs: ['minecraft:glass_bottle'], fluidInputs: ['250x minecraft:milk'],
        itemOutputs: ['farmersdelight:milk_bottle']
    },
    {
        machine: 'thermal_bottler', id: 'bottler/hot_cocoa', ticks: 80,
        itemInputs: ['farmersdelight:milk_bottle'], fluidInputs: ['250x create:chocolate'],
        itemOutputs: ['farmersdelight:hot_cocoa']
    },
    // 热解炉与有机灌注器
    {
        machine: 'thermal_pyrolyzer', id: 'pyrolyzer/coal', ticks: 240, fe: 12000,
        itemInputs: ['minecraft:coal'], itemOutputs: ['immersiveengineering:coal_coke'],
        fluidOutputs: ['250x immersiveengineering:creosote']
    },
    {
        machine: 'thermal_pyrolyzer', id: 'pyrolyzer/coal_block', ticks: 480, fe: 96000,
        itemInputs: ['minecraft:coal_block'], itemOutputs: ['9x immersiveengineering:coal_coke'],
        fluidOutputs: ['2250x immersiveengineering:creosote']
    },
    {
        machine: 'thermal_pyrolyzer', id: 'pyrolyzer/logs', ticks: 120, fe: 6000,
        itemInputs: ['#minecraft:logs'], itemOutputs: ['minecraft:charcoal'],
        fluidOutputs: ['125x immersiveengineering:creosote']
    },
    // 原 E6E 热解炉配方含焦炭或焦油副产物；保留
    // 按原样保留这些产物（包括旧版 ID），以确保每条原配方都
    // 使原配方完整保留，并可在后续运行修复时排查。
    {
        machine: 'thermal_pyrolyzer', id: 'source_expert/pyrolyzer/coal', ticks: 240, fe: 12000,
        itemInputs: ['minecraft:coal'],
        itemOutputs: ['emendatusenigmatica:coke_gem', 'thermal:tar'],
        fluidOutputs: ['250x immersiveengineering:creosote']
    },
    {
        machine: 'thermal_pyrolyzer', id: 'source_expert/pyrolyzer/coal_block', ticks: 480, fe: 96000,
        itemInputs: ['minecraft:coal_block'],
        itemOutputs: ['emendatusenigmatica:coke_block', 'thermal:tar_block'],
        fluidOutputs: ['2250x immersiveengineering:creosote']
    },
    {
        machine: 'thermal_pyrolyzer', id: 'source_expert/pyrolyzer/bitumen', ticks: 240, fe: 12000,
        itemInputs: ['#forge:gems/bitumen'],
        itemOutputs: ['emendatusenigmatica:coke_gem', 'thermal:tar'],
        fluidOutputs: ['50x thermal:heavy_oil']
    },
    {
        machine: 'thermal_phytogenic_insolator', id: 'insolator/sunmetal_blend', ticks: 160, fe: 10000,
        itemInputs: ['#forge:dusts/silver'], itemOutputs: ['architects_palette:sunmetal_blend']
    },

    // 分馏塔将当前安装的沉浸石油原油分离为不同馏分。
    {
        machine: 'thermal_fractionating_still', id: 'fractionating_still/crude_oil', ticks: 240, fe: 12000,
        fluidInputs: ['1000x immersivepetroleum:crudeoil'],
        fluidOutputs: [
            '150x immersivepetroleum:petroleum_gas', '150x immersivepetroleum:naphtha',
            '200x immersivepetroleum:benzol', '250x immersivepetroleum:kerosene',
            '250x immersivepetroleum:diesel'
        ]
    },

    // 坩埚与冷却机的入门配方：石头变熔岩，熔岩加水再变黑曜石。
    {
        machine: 'thermal_crucible', id: 'crucible/cobblestone_to_lava', ticks: 160, fe: 12000,
        itemInputs: ['minecraft:cobblestone'], fluidOutputs: ['250x minecraft:lava']
    },
    {
        machine: 'thermal_chiller', id: 'chiller/lava_to_obsidian', ticks: 160, fe: 12000,
        fluidInputs: ['1000x minecraft:lava', '1000x minecraft:water'], itemOutputs: ['minecraft:obsidian']
    },

    // 自动合成机与酿造机的入门配方。
    {
        machine: 'thermal_sequential_fabricator', id: 'sequential_fabricator/repeater', ticks: 100, fe: 3000,
        itemInputs: ['2x minecraft:iron_ingot', 'minecraft:redstone'], itemOutputs: ['minecraft:repeater']
    },
    {
        machine: 'thermal_brewer', id: 'brewer/water_bucket', ticks: 80,
        itemInputs: ['minecraft:water_bucket'], itemOutputs: ['minecraft:bucket'],
        fluidOutputs: ['1000x minecraft:water']
    },

    // 能源炉燃料配方。可在这里调整 FE 产量，无需修改多方块定义。
    {
        machine: 'thermal_dynamo_stirling', id: 'dynamo/stirling/coal', ticks: 100,
        itemInputs: ['minecraft:coal'], feOutputs: 16000
    },
    {
        machine: 'thermal_dynamo_compression', id: 'dynamo/compression/biofuel', ticks: 100,
        fluidInputs: ['1000x industrialforegoing:biofuel'], feOutputs: 1000000
    },
    {
        machine: 'thermal_dynamo_magmatic', id: 'dynamo/magmatic/lava', ticks: 100,
        fluidInputs: ['1000x minecraft:lava'], feOutputs: 50000
    },
    {
        machine: 'thermal_dynamo_numismatic', id: 'dynamo/numismatic/gold_ingot', ticks: 100,
        itemInputs: ['minecraft:gold_ingot'], feOutputs: 24000
    },
    {
        machine: 'thermal_dynamo_lapidary', id: 'dynamo/lapidary/diamond', ticks: 100,
        itemInputs: ['minecraft:diamond'], feOutputs: 32000
    },
    {
        machine: 'thermal_dynamo_disenchantment', id: 'dynamo/disenchantment/enchanted_book', ticks: 100,
        itemInputs: ['minecraft:enchanted_book'], feOutputs: 32000
    },

    // 熔岩挤压机与水源机器的对应配方。
    {
        machine: 'thermal_rock_generator', id: 'rock_generator/cobblestone', ticks: 80,
        fluidInputs: ['1000x minecraft:water', '1000x minecraft:lava'], itemOutputs: ['minecraft:cobblestone']
    },
    {
        machine: 'thermal_water_generator', id: 'water_generator/from_ice', ticks: 60,
        itemInputs: ['minecraft:ice'], fluidOutputs: ['1000x minecraft:water']
    }
];

// 基础模式热力加工定义用于当前版本的
// MBD2 替代配方。旧版专属原料仍以物品 ID 或标签保留；
e6eThermalMbd2Recipes.push(
    // 基础模式的粉碎机配方。
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/netherite_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/netherite'], itemOutputs: ['2x minecraft:netherite_scrap'] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/pink_sandstone', ticks: 100, fe: 2000, itemInputs: ['byg:pink_sandstone'], itemOutputs: ['2x byg:pink_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/purple_sandstone', ticks: 100, fe: 2000, itemInputs: ['byg:purple_sandstone'], itemOutputs: ['2x byg:purple_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/blue_sandstone', ticks: 100, fe: 2000, itemInputs: ['byg:blue_sandstone'], itemOutputs: ['2x byg:blue_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/white_sandstone', ticks: 100, fe: 2000, itemInputs: ['byg:white_sandstone'], itemOutputs: ['2x byg:white_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/black_sandstone', ticks: 100, fe: 2000, itemInputs: ['byg:black_sandstone'], itemOutputs: ['2x byg:black_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/arid_sandstone', ticks: 100, fe: 2000, itemInputs: ['atmospheric:arid_sandstone'], itemOutputs: ['2x atmospheric:arid_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/red_arid_sandstone', ticks: 100, fe: 2000, itemInputs: ['atmospheric:red_arid_sandstone'], itemOutputs: ['2x atmospheric:red_arid_sand', { stack: 'emendatusenigmatica:potassium_nitrate_dust', chance: 0.3 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/limesand', ticks: 100, fe: 2000, itemInputs: ['create:limesand'], itemOutputs: [{ stack: 'emendatusenigmatica:silicon_gem', chance: 0.5 }, { stack: 'emendatusenigmatica:silicon_gem', chance: 0.25 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/aurora', ticks: 100, fe: 2000, itemInputs: ['#forge:storage_blocks/aurora'], itemOutputs: ['4x betterendforge:crystal_shards'] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/emmer_flour', ticks: 100, fe: 2000, itemInputs: ['atum:emmer'], itemOutputs: ['atum:emmer_flour', { stack: 'atum:emmer_flour', chance: 0.25 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/quartzite_sand', ticks: 100, fe: 2000, itemInputs: ['byg:raw_quartz_block'], itemOutputs: ['2x byg:quartzite_sand', { stack: 'byg:quartzite_sand', chance: 0.5 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/quartzite_to_quartz', ticks: 100, fe: 2000, itemInputs: ['byg:quartzite_sand'], itemOutputs: ['minecraft:sand', { stack: 'minecraft:quartz', chance: 0.2 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/obsidian_dust', ticks: 100, fe: 2000, itemInputs: ['#forge:obsidian'], itemOutputs: ['4x emendatusenigmatica:obsidian_dust'] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/blaze_rod', ticks: 100, fe: 2000, itemInputs: ['#forge:rods/blaze'], itemOutputs: ['3x minecraft:blaze_powder', { stack: 'emendatusenigmatica:sulfur_dust', chance: 0.25 }] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/petcoke_dust', ticks: 100, fe: 2000, itemInputs: ['#forge:coal_petcoke'], itemOutputs: ['immersivepetroleum:petcoke_dust'] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/petcoke_block', ticks: 100, fe: 2000, itemInputs: ['#forge:storage_blocks/coal_petcoke'], itemOutputs: ['9x immersivepetroleum:petcoke_dust'] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/coke_block', ticks: 100, fe: 2000, itemInputs: ['#forge:storage_blocks/coal_coke'], itemOutputs: ['9x emendatusenigmatica:coke_dust'] },
    { machine: 'thermal_pulverizer', id: 'source_base/pulverizer/starmetal_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/starmetal'], itemOutputs: ['2x astralsorcery:stardust', { stack: 'astralsorcery:stardust', chance: 0.1 }, { stack: 'minecraft:gravel', chance: 0.2 }] },

    // 基础模式的锯木机配方。
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/sticks_from_planks', ticks: 100, fe: 2000, itemInputs: ['#minecraft:planks'], itemOutputs: ['6x minecraft:stick', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/sticks_from_slabs', ticks: 100, fe: 2000, itemInputs: ['#minecraft:wooden_slabs'], itemOutputs: ['3x minecraft:stick', { stack: 'emendatusenigmatica:wood_dust', chance: 0.125 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/sticks_from_stairs', ticks: 100, fe: 2000, itemInputs: ['#minecraft:wooden_stairs'], itemOutputs: ['9x minecraft:stick', { stack: 'emendatusenigmatica:wood_dust', chance: 0.375 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/ancient_log', ticks: 100, fe: 2000, itemInputs: ['naturesaura:ancient_log'], itemOutputs: ['6x naturesaura:ancient_planks', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/ancient_bark', ticks: 100, fe: 2000, itemInputs: ['naturesaura:ancient_bark'], itemOutputs: ['6x naturesaura:ancient_planks', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/livingwood', ticks: 100, fe: 2000, itemInputs: ['botania:livingwood'], itemOutputs: ['6x botania:livingwood_planks', { stack: 'emendatusenigmatica:wood_dust', chance: 0.25 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/infused_wood', ticks: 100, fe: 2000, itemInputs: ['astralsorcery:infused_wood'], itemOutputs: ['6x astralsorcery:infused_wood_planks', { stack: 'astralsorcery:stardust', chance: 0.01 }] },
    { machine: 'thermal_sawmill', id: 'source_base/sawmill/aphorism_tile', ticks: 100, fe: 2000, itemInputs: ['#forge:storage_blocks/quartz'], itemOutputs: ['2x pneumaticcraft:aphorism_tile', { stack: 'emendatusenigmatica:quartz_dust', chance: 0.375 }] },

    // 带流体输入或输出的基础模式机器配方。
    { machine: 'thermal_centrifuge', id: 'source_base/centrifuge/bitumen_ore', ticks: 100, fe: 400, itemInputs: ['#forge:ores/bitumen'], itemOutputs: [{ stack: 'minecraft:gravel', chance: 0.75 }, 'emendatusenigmatica:bitumen_gem', { stack: 'emendatusenigmatica:bitumen_gem', chance: 0.5 }, 'thermal:tar'], fluidOutputs: ['100x pneumaticcraft:oil'] },
    { machine: 'thermal_centrifuge', id: 'source_base/centrifuge/blood_slime_leaves', ticks: 100, fe: 400, itemInputs: ['tconstruct:blood_slime_leaves'], itemOutputs: ['minecraft:nether_wart', { stack: 'minecraft:nether_wart', chance: 0.5 }, { stack: 'tconstruct:blood_slime_sapling', chance: 0.1 }, { stack: 'tconstruct:ichor_slime_ball', chance: 0.25 }], fluidOutputs: ['50x tconstruct:blood'] },
    { machine: 'thermal_crucible', id: 'source_base/crucible/magma_cream', ticks: 100, fe: 5000, itemInputs: ['minecraft:magma_cream'], fluidOutputs: ['250x tconstruct:magma'] },
    { machine: 'thermal_refinery', id: 'source_base/refinery/oil_cracking', ticks: 100, itemOutputs: [{ stack: 'emendatusenigmatica:bitumen_gem', chance: 0.1 }], fluidInputs: ['100x pneumaticcraft:oil'], fluidOutputs: ['40x thermal:heavy_oil', '60x thermal:light_oil'] },
    { machine: 'thermal_refinery', id: 'source_base/refinery/syrup_to_sugar', ticks: 100, itemOutputs: ['2x minecraft:sugar'], fluidInputs: ['25x thermal:syrup'] },
    { machine: 'thermal_pyrolyzer', id: 'source_base/pyrolyzer/coal', ticks: 100, fe: 4000, itemInputs: ['#forge:gems/coal'], itemOutputs: ['emendatusenigmatica:coke_gem', { stack: 'thermal:tar', chance: 0.25 }], fluidOutputs: ['250x immersiveengineering:creosote'] },
    { machine: 'thermal_pyrolyzer', id: 'source_base/pyrolyzer/bitumen', ticks: 100, fe: 4000, itemInputs: ['#forge:gems/bitumen'], itemOutputs: ['emendatusenigmatica:coke_gem', { stack: 'thermal:tar', chance: 0.5 }], fluidOutputs: ['50x thermal:heavy_oil'] },
    { machine: 'thermal_chiller', id: 'source_base/chiller/magma_cream_from_blazing_blood', ticks: 100, fe: 2000, itemInputs: ['#forge:slimeballs'], fluidInputs: ['50x tconstruct:blazing_blood'], itemOutputs: ['minecraft:magma_cream'] },
    { machine: 'thermal_chiller', id: 'source_base/chiller/magma_cream_from_magma', ticks: 100, fe: 2000, itemInputs: ['thermal:chiller_ball_cast'], fluidInputs: ['250x tconstruct:magma'], itemOutputs: ['minecraft:magma_cream'] },
    { machine: 'thermal_chiller', id: 'source_base/chiller/slime_ball_from_earth_slime', ticks: 100, fe: 2000, itemInputs: ['thermal:chiller_ball_cast'], fluidInputs: ['250x tconstruct:earth_slime'], itemOutputs: ['minecraft:slime_ball'] },
    { machine: 'thermal_chiller', id: 'source_base/chiller/blood_slime_ball', ticks: 100, fe: 2000, itemInputs: ['thermal:chiller_ball_cast'], fluidInputs: ['250x tconstruct:blood'], itemOutputs: ['tconstruct:blood_slime_ball'] },
    { machine: 'thermal_chiller', id: 'source_base/chiller/ender_slime_ball', ticks: 100, fe: 2000, itemInputs: ['thermal:chiller_ball_cast'], fluidInputs: ['250x tconstruct:ender_slime'], itemOutputs: ['tconstruct:ender_slime_ball'] },
    { machine: 'thermal_chiller', id: 'source_base/chiller/sky_slime_ball', ticks: 100, fe: 2000, itemInputs: ['thermal:chiller_ball_cast'], fluidInputs: ['250x tconstruct:sky_slime'], itemOutputs: ['tconstruct:sky_slime_ball'] },
);

// 资源蜜蜂的各品种在原整合包中会展开成明确的热力配方，
// 原整合包中的定义。MBD2 配方清单也应保留每条生成的配方。
honeyVarieties.forEach((honeyVariety) => {
    const honey = honeyVariety.split(':')[1];
    const bottleOutput = honeyVariety === 'resourcefulbees:honey'
        ? 'minecraft:honey_bottle'
        : honeyVariety + '_bottle';
    const blockOutput = honeyVariety === 'resourcefulbees:honey'
        ? 'minecraft:honey_block'
        : honeyVariety + '_block';

    e6eThermalMbd2Recipes.push(
        {
            machine: 'thermal_bottler', id: 'source_base/bottler/' + honey + '_bottle', ticks: 100,
            itemInputs: ['minecraft:glass_bottle'], fluidInputs: ['250x ' + honeyVariety], itemOutputs: [bottleOutput]
        },
        {
            machine: 'thermal_chiller', id: 'source_base/chiller/' + honey + '_block', ticks: 100,
            fluidInputs: ['1000x ' + honeyVariety], itemOutputs: [blockOutput]
        },
        {
            machine: 'thermal_crucible', id: 'source_base/crucible/' + honey + '_block_to_honey', ticks: 100,
            itemInputs: [blockOutput], fluidOutputs: ['1000x ' + honeyVariety]
        }
    );

    if (honeyVariety !== 'resourcefulbees:honey') {
        e6eThermalMbd2Recipes.push({
            machine: 'thermal_centrifuge', id: 'source_base/centrifuge/' + honey + '_bottle', ticks: 100,
            itemInputs: [bottleOutput], itemOutputs: ['minecraft:glass_bottle'], fluidOutputs: ['250x ' + honeyVariety]
        });
    }
});

e6eThermalMbd2Recipes.push(
    // 基础模式中尚未由通用合金配方覆盖的感应炉配方。
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/nickel_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/nickel'], itemOutputs: ['emendatusenigmatica:nickel_ingot', { stack: 'minecraft:iron_ingot', chance: 0.2 }, { stack: 'thermal:rich_slag', chance: 0.2 }] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/aluminum_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/aluminum'], itemOutputs: ['emendatusenigmatica:aluminum_ingot', { stack: 'minecraft:iron_ingot', chance: 0.2 }, { stack: 'thermal:rich_slag', chance: 0.2 }] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/uranium_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/uranium'], itemOutputs: ['emendatusenigmatica:uranium_ingot', { stack: 'emendatusenigmatica:lead_ingot', chance: 0.2 }, { stack: 'thermal:rich_slag', chance: 0.2 }] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/osmium_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/osmium'], itemOutputs: ['emendatusenigmatica:osmium_ingot', { stack: 'emendatusenigmatica:tin_ingot', chance: 0.2 }, { stack: 'thermal:rich_slag', chance: 0.2 }] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/zinc_ore', ticks: 100, fe: 2000, itemInputs: ['#forge:ores/zinc'], itemOutputs: ['emendatusenigmatica:zinc_ingot', { stack: 'minecraft:gold_ingot', chance: 0.2 }, { stack: 'thermal:rich_slag', chance: 0.2 }] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/steel_from_coke', ticks: 100, fe: 2000, itemInputs: ['#forge:ingots/iron', '#forge:dusts/coal_coke'], itemOutputs: ['emendatusenigmatica:steel_ingot'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/steel_from_petcoke', ticks: 100, fe: 2000, itemInputs: ['#forge:ingots/iron', '#forge:dusts/coal_petcoke'], itemOutputs: ['emendatusenigmatica:steel_ingot'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/pewter_ingot', ticks: 100, fe: 2000, itemInputs: ['#forge:ingots/iron', '#forge:ingots/lead'], itemOutputs: ['2x eidolon:pewter_ingot'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/terminite_from_iron', ticks: 100, fe: 2000, itemInputs: ['#forge:ingots/iron', '#forge:dusts/ender'], itemOutputs: ['betterendforge:terminite_ingot'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/terminite_from_thallasium', ticks: 100, fe: 2000, itemInputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'], itemOutputs: ['betterendforge:terminite_ingot'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/aeternium_ingot', ticks: 100, fe: 2000, itemInputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'], itemOutputs: ['betterendforge:aeternium_ingot'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/quartz_from_quartzite_sand', ticks: 100, fe: 2000, itemInputs: ['byg:quartzite_sand'], itemOutputs: ['minecraft:quartz', 'thermal:slag'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/cured_rubber', ticks: 100, fe: 2000, itemInputs: ['2x industrialforegoing:dryrubber', '#forge:dusts/sulfur'], itemOutputs: ['2x thermal:cured_rubber'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/invar_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:bee_jar', 'resourcefulbees:nickel_honeycomb_block', '2x resourcefulbees:iron_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:invar_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/steel_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:bee_jar', '#forge:storage_blocks/coal_coke', 'resourcefulbees:iron_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:steel_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/brass_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:bee_jar', 'resourcefulbees:zinc_honeycomb_block', '3x resourcefulbees:copper_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:brass_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/bronze_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:bee_jar', 'resourcefulbees:tin_honeycomb_block', '3x resourcefulbees:copper_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:bronze_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/constantan_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:bee_jar', 'resourcefulbees:nickel_honeycomb_block', 'resourcefulbees:copper_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:constantan_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/lumium_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:silver_honeycomb_block', '3x resourcefulbees:tin_honeycomb_block', '2x resourcefulbees:glowstone_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:lumium_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/signalum_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:silver_honeycomb_block', '3x resourcefulbees:copper_honeycomb_block', '4x resourcefulbees:redstone_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:signalum_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/enderium_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:diamond_honeycomb_block', '3x resourcefulbees:lead_honeycomb_block', '2x resourcefulbees:ender_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:enderium_bee"}]'] },
    { machine: 'thermal_induction_smelter', id: 'source_base/smelter/electrum_bee_jar', ticks: 100, fe: 2000, itemInputs: ['resourcefulbees:bee_jar', 'resourcefulbees:silver_honeycomb_block', 'resourcefulbees:gold_honeycomb_block'], itemOutputs: ['resourcefulbees:bee_jar[minecraft:custom_data={Entity:"resourcefulbees:electrum_bee"}]'] },

    // 基础模式中不依赖蜜蜂专用动态循环的热力压榨机配方。
    { machine: 'thermal_press', id: 'source_base/press/mold_plate', ticks: 100, fe: 2400, itemInputs: ['3x #forge:plates/steel', '#forge:plates/steel'], itemOutputs: ['immersiveengineering:mold_plate'] },
    { machine: 'thermal_press', id: 'source_base/press/mold_wire', ticks: 100, fe: 2400, itemInputs: ['3x #forge:plates/steel', '#forge:wires/steel'], itemOutputs: ['immersiveengineering:mold_wire'] },
    { machine: 'thermal_press', id: 'source_base/press/mold_gear', ticks: 100, fe: 2400, itemInputs: ['3x #forge:plates/steel', '#forge:gears/steel'], itemOutputs: ['immersiveengineering:mold_gear'] },
    { machine: 'thermal_press', id: 'source_base/press/mold_rod', ticks: 100, fe: 2400, itemInputs: ['3x #forge:plates/steel', '#forge:rods/steel'], itemOutputs: ['immersiveengineering:mold_rod'] },
    { machine: 'thermal_press', id: 'source_base/press/empty_casing', ticks: 100, fe: 2400, itemInputs: ['#forge:ingots/copper', '#thermal:crafting/dies/bullet_casing'], itemOutputs: ['2x immersiveengineering:empty_casing'] },
    { machine: 'thermal_press', id: 'source_base/press/pink_sand', ticks: 100, fe: 2400, itemInputs: ['byg:pink_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x byg:pink_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/purple_sand', ticks: 100, fe: 2400, itemInputs: ['byg:purple_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x byg:purple_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/blue_sand', ticks: 100, fe: 2400, itemInputs: ['byg:blue_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x byg:blue_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/white_sand', ticks: 100, fe: 2400, itemInputs: ['byg:white_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x byg:white_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/black_sand', ticks: 100, fe: 2400, itemInputs: ['byg:black_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x byg:black_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/arid_sand', ticks: 100, fe: 2400, itemInputs: ['atmospheric:arid_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x atmospheric:arid_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/red_arid_sand', ticks: 100, fe: 2400, itemInputs: ['atmospheric:red_arid_sandstone', '#thermal:crafting/dies/unpacking'], itemOutputs: ['4x atmospheric:red_arid_sand'] },
    { machine: 'thermal_press', id: 'source_base/press/snow_block', ticks: 100, fe: 2400, itemInputs: ['betterendforge:dense_snow', '#thermal:crafting/dies/unpacking'], itemOutputs: ['9x minecraft:snow_block'] },
    { machine: 'thermal_press', id: 'source_base/press/dense_snow', ticks: 100, fe: 2400, itemInputs: ['9x minecraft:snow_block', '#thermal:crafting/dies/packing_3x3'], itemOutputs: ['betterendforge:dense_snow'] },
    { machine: 'thermal_press', id: 'source_base/press/honeycomb_block', ticks: 100, fe: 2400, itemInputs: ['9x minecraft:honeycomb', '#thermal:crafting/dies/unpacking'], itemOutputs: ['minecraft:honeycomb_block'] },
    { machine: 'thermal_press', id: 'source_base/press/honeycomb', ticks: 100, fe: 2400, itemInputs: ['minecraft:honeycomb_block', '#thermal:crafting/dies/unpacking'], itemOutputs: ['9x minecraft:honeycomb'] },
    { machine: 'thermal_press', id: 'source_base/press/hdpe_sheet', ticks: 100, fe: 2400, itemInputs: ['mekanism:hdpe_pellet'], itemOutputs: ['mekanism:hdpe_sheet'] },
    { machine: 'thermal_press', id: 'source_base/press/vine_to_latex', ticks: 100, fe: 400, itemInputs: ['minecraft:vine'], fluidOutputs: ['50x industrialforegoing:latex'] },
    { machine: 'thermal_press', id: 'source_base/press/dandelion_to_latex', ticks: 100, fe: 400, itemInputs: ['minecraft:dandelion'], fluidOutputs: ['50x industrialforegoing:latex'] },
    { machine: 'thermal_press', id: 'source_base/press/osmium_block', ticks: 100, fe: 2400, itemInputs: ['9x emendatusenigmatica:osmium_ingot', '#thermal:crafting/dies/packing_3x3'], itemOutputs: ['emendatusenigmatica:osmium_block'] },
    { machine: 'thermal_press', id: 'source_base/press/aluminum_block', ticks: 100, fe: 2400, itemInputs: ['9x emendatusenigmatica:aluminum_ingot', '#thermal:crafting/dies/packing_3x3'], itemOutputs: ['emendatusenigmatica:aluminum_block'] },
    { machine: 'thermal_press', id: 'source_base/press/uranium_block', ticks: 100, fe: 2400, itemInputs: ['9x emendatusenigmatica:uranium_ingot', '#thermal:crafting/dies/packing_3x3'], itemOutputs: ['emendatusenigmatica:uranium_block'] },
);

combVariants.forEach((e6eSourceComb) => {
    e6eThermalMbd2Recipes.push(
        {
            machine: 'thermal_press', id: 'source_base/press/' + e6eSourceComb + '_honeycomb_block', ticks: 100, fe: 2400,
            itemInputs: ['9x resourcefulbees:' + e6eSourceComb + '_honeycomb', '#thermal:crafting/dies/packing_3x3'],
            itemOutputs: ['resourcefulbees:' + e6eSourceComb + '_honeycomb_block']
        },
        {
            machine: 'thermal_press', id: 'source_base/press/' + e6eSourceComb + '_honeycomb', ticks: 100, fe: 2400,
            itemInputs: ['resourcefulbees:' + e6eSourceComb + '_honeycomb_block', '#thermal:crafting/dies/unpacking'],
            itemOutputs: ['9x resourcefulbees:' + e6eSourceComb + '_honeycomb']
        }
    );
});

// 热力系列的四种可配置燃料表改为明确的 MBD2 能源炉配方。
const e6eSourceThermalFuelRecipes = [
    // 压缩能源炉：输入 1000 mB，FE 产量采用原配方乘以 10 后的数值。
    ['thermal_dynamo_compression', 'compression/pneumaticcraft_diesel', 'fluid', 'pneumaticcraft:diesel', 10000000],
    ['thermal_dynamo_compression', 'compression/immersivepetroleum_diesel', 'fluid', 'immersivepetroleum:diesel', 10000000],
    ['thermal_dynamo_compression', 'compression/pneumaticcraft_biodiesel', 'fluid', 'pneumaticcraft:biodiesel', 10000000],
    ['thermal_dynamo_compression', 'compression/immersiveengineering_biodiesel', 'fluid', 'immersiveengineering:biodiesel', 10000000],
    ['thermal_dynamo_compression', 'compression/pneumaticcraft_kerosene', 'fluid', 'pneumaticcraft:kerosene', 11000000],
    ['thermal_dynamo_compression', 'compression/pneumaticcraft_gasoline', 'fluid', 'pneumaticcraft:gasoline', 15000000],
    ['thermal_dynamo_compression', 'compression/immersivepetroleum_gasoline', 'fluid', 'immersivepetroleum:gasoline', 15000000],
    ['thermal_dynamo_compression', 'compression/pneumaticcraft_lpg', 'fluid', 'pneumaticcraft:lpg', 18000000],
    ['thermal_dynamo_compression', 'compression/mekanism_ethene', 'fluid', 'mekanism:ethene', 18000000],
    ['thermal_dynamo_compression', 'compression/pneumaticcraft_ethanol', 'fluid', 'pneumaticcraft:ethanol', 4000000],
    ['thermal_dynamo_compression', 'compression/mekanismgenerators_bioethanol', 'fluid', 'mekanismgenerators:bioethanol', 4000000],
    ['thermal_dynamo_compression', 'compression/immersiveengineering_ethanol', 'fluid', 'immersiveengineering:ethanol', 4000000],
    ['thermal_dynamo_compression', 'compression/thermal_tree_oil', 'fluid', 'thermal:tree_oil', 1000000],
    ['thermal_dynamo_compression', 'compression/thermal_creosote', 'fluid', 'thermal:creosote', 200000],
    ['thermal_dynamo_compression', 'compression/immersiveengineering_creosote', 'fluid', 'immersiveengineering:creosote', 200000],
    ['thermal_dynamo_compression', 'compression/thermal_refined_fuel', 'fluid', 'thermal:refined_fuel', 15000000],
    ['thermal_dynamo_compression', 'compression/resourcefulbees_rocket_honey', 'fluid', 'resourcefulbees:rocket_honey', 15000000],
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
        machine: fuel[0], id: 'source_base/dynamo/' + fuel[1], ticks: 100, feOutputs: fuel[4]
    };
    if (fuel[2] === 'fluid') definition.fluidInputs = ['1000x ' + fuel[3]];
    else definition.itemInputs = [fuel[3]];
    e6eThermalMbd2Recipes.push(definition);
});

e6eThermalMbd2Recipes.push(
    // 原专家模式专属的燃料和机器配方。
    { machine: 'thermal_dynamo_compression', id: 'source_expert/dynamo/compression_biofuel', ticks: 100, fluidInputs: ['1000x industrialforegoing:biofuel'], feOutputs: 10000000 },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/dryrubber', ticks: 100, fe: 12000, itemInputs: ['#forge:dusts/sulfur'], fluidInputs: ['900x industrialforegoing:latex'], itemOutputs: ['industrialforegoing:dryrubber'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/foundry_controller_from_superheated_steel', ticks: 100, fe: 10000, itemInputs: ['#forge:ingots/superheated_steel'], fluidInputs: ['1152x tconstruct:scorched_stone'], itemOutputs: ['tconstruct:foundry_controller'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/foundry_controller_from_hot_compressed_iron', ticks: 100, fe: 10000, itemInputs: ['#forge:ingots/hot_compressed_iron'], fluidInputs: ['1152x tconstruct:scorched_stone'], itemOutputs: ['tconstruct:foundry_controller'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/reinforced_stone', ticks: 100, fe: 8000, itemInputs: ['minecraft:light_gray_concrete_powder'], fluidInputs: ['18x kubejs:molten_compressed_iron'], itemOutputs: ['pneumaticcraft:reinforced_stone'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/memory_basic', ticks: 100, fe: 8000, itemInputs: ['kubejs:memory_basic_empty'], fluidInputs: ['8000x pneumaticcraft:memory_essence'], itemOutputs: ['kubejs:memory_basic_filled'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/memory_advanced', ticks: 100, fe: 16000, itemInputs: ['kubejs:memory_advanced_empty'], fluidInputs: ['16000x pneumaticcraft:memory_essence'], itemOutputs: ['kubejs:memory_advanced_filled'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/memory_elite', ticks: 100, fe: 32000, itemInputs: ['kubejs:memory_elite_empty'], fluidInputs: ['32000x pneumaticcraft:memory_essence'], itemOutputs: ['kubejs:memory_elite_filled'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/memory_ultimate', ticks: 100, fe: 64000, itemInputs: ['kubejs:memory_ultimate_empty'], fluidInputs: ['64000x pneumaticcraft:memory_essence'], itemOutputs: ['kubejs:memory_ultimate_filled'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/blaze_bullet', ticks: 100, fe: 100, itemInputs: ['gunswithoutroses:iron_bullet'], fluidInputs: ['5x tconstruct:blazing_blood'], itemOutputs: ['gunswithoutroses:blaze_bullet'] },
    { machine: 'thermal_bottler', id: 'source_expert/bottler/flare_chakram', ticks: 100, fe: 15000, itemInputs: ['botania:thorn_chakram'], fluidInputs: ['1000x tconstruct:blazing_blood'], itemOutputs: ['botania:flare_chakram'] },
    { machine: 'thermal_phytogenic_insolator', id: 'source_expert/insolator/sunmetal_blend', ticks: 100, fe: 10000, itemInputs: ['#forge:dusts/silver'], fluidInputs: ['1000x minecraft:water'], itemOutputs: ['architects_palette:sunmetal_blend'] },
    { machine: 'thermal_press', id: 'source_expert/press/hot_compressed_iron_ingot', ticks: 100, fe: 1000, itemInputs: ['4x kubejs:superheated_steel_ingot', '#thermal:crafting/dies/packing_2x2'], itemOutputs: ['2x kubejs:hot_compressed_iron_ingot'] },
    { machine: 'thermal_press', id: 'source_expert/press/hot_compressed_iron_block', ticks: 100, fe: 9000, itemInputs: ['4x kubejs:superheated_steel_block', '#thermal:crafting/dies/packing_2x2'], itemOutputs: ['2x kubejs:hot_compressed_iron_block'] },
    { machine: 'thermal_press', id: 'source_expert/press/saw_blade', ticks: 100, fe: 9000, itemInputs: ['tconstruct:large_plate[minecraft:custom_data={Material:"tconstruct:invar"}]', 'immersiveengineering:mold_gear'], itemOutputs: ['thermal:saw_blade'] }
);

// 原热力树液提取机使用树干与树叶配对的配方；其
// 肥料催化剂改为第二条配方，保留原版 1.7 倍产量。
treeRegistry.forEach((e6eSourceTreeCategory, e6eSourceTreeCategoryIndex) => {
    e6eSourceTreeCategory.trees.forEach((e6eSourceTree, e6eSourceTreeIndex) => {
        if (!e6eSourceTree.sap || !e6eSourceTree.rate || e6eSourceTree.rate.living <= 0) return;
        const sourceTreeId = e6eSourceTreeCategoryIndex + '/' + e6eSourceTreeIndex;
        e6eThermalMbd2Recipes.push({
            machine: 'thermal_tree_extractor', id: 'source_base/tree_extractor/' + sourceTreeId,
            ticks: 100, itemInputs: [e6eSourceTree.trunk, e6eSourceTree.leaf],
            fluidOutputs: [e6eSourceTree.rate.living + 'x ' + e6eSourceTree.sap]
        });
        e6eThermalMbd2Recipes.push({
            machine: 'thermal_tree_extractor', id: 'source_base/tree_extractor/' + sourceTreeId + '_fertilizer_boost',
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
    { name: 'refined_glowstone', fluid: 'materialis:molten_refined_glowstone', forms: ['block', 'ingot', 'nugget'] },
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
    { fluid: 'tconstruct:molten_netherite', amount: 144, mold: 'tconstruct:ingot_cast', output: 'minecraft:netherite_ingot' },
    { fluid: 'tconstruct:molten_debris', amount: 144, mold: 'tconstruct:ingot_cast', output: 'minecraft:netherite_scrap' },
    { fluid: 'tconstruct:molten_netherite', amount: 16, mold: 'tconstruct:nugget_cast', output: 'tconstruct:netherite_nugget' },
    { fluid: 'tconstruct:molten_debris', amount: 16, mold: 'tconstruct:nugget_cast', output: 'tconstruct:debris_nugget' },
    { fluid: 'materialis:molten_shadow_steel', amount: 144, mold: 'tconstruct:ingot_cast', output: 'create:shadow_steel' },
    { fluid: 'materialis:molten_refined_radiance', amount: 144, mold: 'tconstruct:ingot_cast', output: 'create:refined_radiance' },
    { fluid: 'materialis:molten_forgotten_metal', amount: 144, mold: 'tconstruct:ingot_cast', output: 'undergarden:forgotten_ingot' },
    { fluid: 'materialis:molten_forgotten_metal', amount: 16, mold: 'tconstruct:nugget_cast', output: 'undergarden:forgotten_nugget' },
    { fluid: 'materialis:molten_fairy', amount: 144, mold: 'tconstruct:ingot_cast', output: 'materialis:fairy_ingot' },
    { fluid: 'materialis:molten_fairy', amount: 16, mold: 'tconstruct:nugget_cast', output: 'materialis:fairy_nugget' },
    { fluid: 'materialis:molten_arcane_gold', amount: 144, mold: 'tconstruct:ingot_cast', output: 'eidolon_repraised:arcane_gold_ingot' },
    { fluid: 'materialis:molten_arcane_gold', amount: 16, mold: 'tconstruct:nugget_cast', output: 'eidolon_repraised:arcane_gold_nugget' },
    { fluid: 'tconstruct:molten_refined_obsidian', amount: 144, mold: 'tconstruct:ingot_cast', output: 'mekanism:ingot_refined_obsidian' },
    { fluid: 'tconstruct:molten_refined_obsidian', amount: 16, mold: 'tconstruct:nugget_cast', output: 'mekanism:nugget_refined_obsidian' },
    { fluid: 'tconstruct:molten_refined_glowstone', amount: 144, mold: 'tconstruct:ingot_cast', output: 'mekanism:ingot_refined_glowstone' },
    { fluid: 'tconstruct:molten_refined_glowstone', amount: 16, mold: 'tconstruct:nugget_cast', output: 'mekanism:nugget_refined_glowstone' },
    { fluid: 'materialis:molten_pink_slime', amount: 144, mold: 'tconstruct:ingot_cast', output: 'industrialforegoing:pink_slime_ingot' },
    { fluid: 'materialis:molten_neptunium', amount: 144, mold: 'tconstruct:ingot_cast', output: 'aquaculture:neptunium_ingot' },
    { fluid: 'materialis:molten_neptunium', amount: 16, mold: 'tconstruct:nugget_cast', output: 'aquaculture:neptunium_nugget' },
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
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "e6e_mbd2:thermal_press", false, ["e6e_mbd2:thermal_bottler","e6e_mbd2:thermal_brewer","e6e_mbd2:thermal_centrifuge","e6e_mbd2:thermal_chiller","e6e_mbd2:thermal_compactor","e6e_mbd2:thermal_crucible","e6e_mbd2:thermal_dynamo_compression","e6e_mbd2:thermal_dynamo_disenchantment","e6e_mbd2:thermal_dynamo_lapidary","e6e_mbd2:thermal_dynamo_magmatic","e6e_mbd2:thermal_dynamo_numismatic","e6e_mbd2:thermal_dynamo_stirling","e6e_mbd2:thermal_fractionating_still","e6e_mbd2:thermal_induction_smelter","e6e_mbd2:thermal_phytogenic_insolator","e6e_mbd2:thermal_press","e6e_mbd2:thermal_pulverizer","e6e_mbd2:thermal_pyrolyzer","e6e_mbd2:thermal_redstone_furnace","e6e_mbd2:thermal_refinery","e6e_mbd2:thermal_rock_generator","e6e_mbd2:thermal_sawmill","e6e_mbd2:thermal_sequential_fabricator","e6e_mbd2:thermal_tree_extractor","e6e_mbd2:thermal_water_generator","minecraft:crafting_shaped"]);
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
        let errors = 0;
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

            const availableItems = itemInputs.every(e6eRecipeIngredientExists)
                && itemOutputs.every((value) => e6eRecipeOutputExists(typeof value === 'string' ? value : value.stack));
            const availableFluids = fluidInputs.concat(fluidOutputs).every((value) =>
                e6ePortedFluidExists(String(value).replace(/^\d+x\s+/, '')));
            if (!availableItems || !availableFluids) {
                unavailableIngredients++;
                return;
            }

            try {
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
            } catch (error) {
                errors++;
                if (errors === 1) console.error('[E6E MBD2 Thermal] Could not add ' + entry.id + ': ' + error);
            }
        });

        console.info('[E6E MBD2 Thermal] attempted ' + added + ' recipe definitions; unavailable machine builders: '
            + unavailableMachines + '; unavailable ingredients: ' + unavailableIngredients);
        if (errors) console.error('[E6E MBD2 Thermal] failed to build ' + errors + ' recipes');

        const controllerInputs = {
            mechanical: {
                pattern: ['ABA', 'CDE', 'FFF'],
                key: {
                    A: 'minecraft:iron_ingot', B: 'minecraft:piston', C: 'e6e_mbd2:energy_input',
                    D: 'e6e_mbd2:item_input', E: 'e6e_mbd2:item_output', F: 'create:andesite_casing'
                }
            },
            heat: {
                pattern: ['ABA', 'CDE', 'FFF'],
                key: {
                    A: 'minecraft:copper_ingot', B: 'minecraft:blast_furnace', C: 'e6e_mbd2:energy_input',
                    D: 'e6e_mbd2:item_input', E: 'e6e_mbd2:item_output', F: 'immersiveengineering:blastbrick'
                }
            },
            fluid: {
                pattern: ['ABA', 'CDE', 'FFF'],
                key: {
                    A: 'minecraft:glass_pane', B: 'minecraft:bucket', C: 'e6e_mbd2:fluid_input',
                    D: 'e6e_mbd2:energy_input', E: 'e6e_mbd2:fluid_output', F: 'create:copper_casing'
                }
            }
        };

        e6eThermalControllerRecipes.forEach(([controller, category]) => {
            const recipe = controllerInputs[category];
            const ingredients = Object.values(recipe.key);
            if (!Item.exists('e6e_mbd2:' + controller) || !ingredients.every((id) => Item.exists(id))) return;
            event.shaped('e6e_mbd2:' + controller, recipe.pattern, recipe.key)
                .id('e6e_mbd2:controllers/' + controller);
        });
    });
}
})();
