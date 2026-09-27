// 配方类型：naturesaura:altar
// 中文名称：祭坛加工
// 用途：用于登记自然灵气的祭坛加工配方。

(function () {
if (['byg', 'resourcefulbees', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/naturesaura/altar/';

    const recipes = [
        {
            input: 'resourcefulbees:infused_honeycomb_block',
            output: { item: 'naturesaura:infused_iron_block' },
            aura_type: 'naturesaura:overworld',
            aura: 90000,
            time: 540,
            id: `${id_prefix}infused_iron_block_from_comb_block`
        },
        {
            input: 'resourcefulbees:tainted_honeycomb',
            output: { item: 'naturesaura:tainted_gold' },
            aura_type: 'naturesaura:nether',
            aura: 10000,
            time: 60,
            id: `${id_prefix}tainted_gold_from_comb`
        },
        {
            input: 'resourcefulbees:tainted_honeycomb_block',
            output: { item: 'naturesaura:tainted_gold_block' },
            aura_type: 'naturesaura:nether',
            aura: 90000,
            time: 540,
            id: `${id_prefix}tainted_gold_block_from_comb_block`
        },
        {
            input: 'undergarden:blood_mushroom',
            output: { item: 'byg:soul_shroom' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}soul_shroom`
        },
        {
            input: 'undergarden:veil_mushroom',
            output: { item: 'byg:death_cap' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}death_cap`
        },
        {
            input: 'undergarden:indigo_mushroom',
            output: { item: 'byg:sythian_fungus' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}sythian_fungus`
        },
        {
            input: 'undergarden:ink_mushroom',
            output: { item: 'byg:embur_wart' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}embur_wart`
        },
        {
            input: 'minecraft:bamboo',
            output: { item: 'byg:sythian_stalk_block' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}sythian_stalk_block`
        },
        {
            input: 'minecraft:flint',
            output: { item: 'minecraft:gunpowder' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 10000,
            time: 60,
            id: `${id_prefix}gunpowder`
        },
        {
            input: 'supplementaries:flint_block',
            output: { item: 'thermal:gunpowder_block' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 80000,
            time: 480,
            id: `${id_prefix}gunpowder_block`
        },
        {
            input: 'thermal:basalz_rod',
            output: { item: 'thermal:basalz_powder', count: 4 },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 60,
            id: `${id_prefix}basalz_powder`
        },
        {
            input: 'thermal:blizz_rod',
            output: { item: 'thermal:blizz_powder', count: 4 },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 60,
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'thermal:blitz_rod',
            output: { item: 'thermal:blitz_powder', count: 4 },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 60,
            id: `${id_prefix}blitz_powder`
        },
        {
            input: 'minecraft:vine',
            output: { item: 'quark:root' },
            aura_type: 'naturesaura:nether',
            aura: 30000,
            time: 250,
            id: `${id_prefix}root`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'bloodmagic', 'botania', 'eidolon_repraised', 'tconstruct', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // 祭坛每刻最多注入 300 点灵气。配方消耗超过此速率仍能运行，但处理大批量时会受此速率限制。
    const id_prefix = 'enigmatica:expert/naturesaura/altar/';
    const recipes = [
        {
            input: 'architects_palette:sunmetal_brick',
            output: { item: 'naturesaura:infused_iron' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 50,
            id: 'naturesaura:altar/infused_iron'
        },
        {
            input: 'architects_palette:sunmetal_block',
            output: { item: 'naturesaura:infused_iron_block' },
            aura_type: 'naturesaura:overworld',
            aura: 15000 * 8,
            time: 50 * 8,
            id: 'naturesaura:altar/infused_iron_block'
        },
        {
            input: '#forge:ingots/arcane_gold',
            output: { item: 'naturesaura:tainted_gold' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 50,
            id: 'naturesaura:altar/tainted_gold'
        },
        {
            input: '#forge:storage_blocks/arcane_gold',
            output: { item: 'naturesaura:tainted_gold_block' },
            aura_type: 'naturesaura:nether',
            aura: 15000 * 8,
            time: 50 * 8,
            id: 'naturesaura:altar/tainted_gold_block'
        },
        {
            input: 'eidolon_repraised:candle',
            output: { item: 'occultism:candle_white' },
            aura_type: 'naturesaura:nether',
            aura: 18000,
            time: 60,
            id: 'occultism:crafting/candle'
        },
        {
            input: 'kubejs:firmament',
            output: { item: 'architects_palette:sunstone' },
            aura_type: 'naturesaura:overworld',
            aura: 5000,
            time: 20,
            id: `${id_prefix}sunstone`
        },
        {
            input: 'minecraft:glass',
            output: { item: 'glassential:glass_ghostly' },
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: `${id_prefix}glass_ghostly`
        },
        {
            input: 'minecraft:ender_pearl',
            output: { item: 'integrateddynamics:proto_chorus' },
            aura_type: 'naturesaura:nether',
            aura: 5000,
            time: 20,
            id: 'integrateddynamics:crafting/proto_chorus'
        },
        {
            input: '#minecraft:fishes',
            output: { item: 'aquaculture:fish_bones' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 1000,
            time: 60,
            id: `${id_prefix}fish_bones`
        },
        {
            input: 'minecraft:pufferfish',
            output: { item: 'upgrade_aquatic:lionfish' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 80,
            id: `${id_prefix}lionfish`
        },
        {
            input: 'integrateddynamics:part_static_light_panel',
            output: { item: 'integrateddynamics:part_display_panel' },
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: `${id_prefix}part_display_panel`
        },
        {
            input: 'botania:redstone_root',
            output: { item: 'botania:root' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:overworld',
            aura: 1500,
            time: 20,
            id: `${id_prefix}root`
        },
        {
            input: 'minecraft:lily_pad',
            output: { item: 'environmental:duckweed' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: `${id_prefix}duckweed`
        },
        {
            input: '#forge:gems/mana',
            output: { item: 'botania:mana_powder', count: 4 },
            aura_type: 'naturesaura:overworld',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 6000,
            time: 20,
            id: `${id_prefix}mana_powder`
        },
        {
            input: 'thermal:phytogro',
            output: { item: 'botania:fertilizer', count: 32 },
            aura_type: 'naturesaura:overworld',
            aura: 50000,
            time: 200,
            id: `${id_prefix}floral_fertilizer`
        },
        {
            input: 'minecraft:slime_ball',
            output: { item: 'tconstruct:ichor_slime_ball' },
            aura_type: 'naturesaura:nether',
            aura: 5000,
            time: 20,
            id: `${id_prefix}ichor_slime_ball`
        },
        {
            input: 'minecraft:slime_ball',
            output: { item: 'tconstruct:sky_slime_ball' },
            aura_type: 'naturesaura:overworld',
            aura: 5000,
            time: 20,
            id: `${id_prefix}sky_slime_ball`
        },
        {
            input: 'tconstruct:earth_congealed_slime',
            output: { item: 'tconstruct:ichor_congealed_slime' },
            aura_type: 'naturesaura:nether',
            aura: 5000 * 3,
            time: 20 * 3,
            id: `${id_prefix}ichor_congealed_slime`
        },
        {
            input: 'tconstruct:earth_congealed_slime',
            output: { item: 'tconstruct:sky_congealed_slime' },
            aura_type: 'naturesaura:overworld',
            aura: 5000 * 3,
            time: 20 * 3,
            id: `${id_prefix}sky_congealed_slime`
        },
        {
            input: 'create:rose_quartz',
            output: { item: 'create:polished_rose_quartz' },
            aura_type: 'naturesaura:overworld',
            aura: 5000,
            time: 20,
            id: `${id_prefix}polished_rose_quartz`
        },
        {
            input: 'botania:vine_ball',
            output: { item: 'botania:thorn_chakram', count: 2 },
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 500,
            id: `${id_prefix}thorn_chakram`
        },
        {
            input: 'ars_nouveau:mana_bloom_crop',
            output: { item: 'botania:overgrowth_seed' },
            aura_type: 'naturesaura:overworld',
            aura: 500000,
            time: 1000,
            id: `${id_prefix}overgrowth_seed`
        },
        {
            input: 'ars_nouveau:magic_clay',
            output: { item: 'ars_nouveau:marvelous_clay' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 50,
            id: 'ars_nouveau:marvelous_clay'
        },
        {
            input: 'eidolon_repraised:soul_shard',
            output: { item: 'bloodmagic:slate_ampoule' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 50,
            id: `${id_prefix}slate_ampoule`
        },
        {
            input: 'ars_nouveau:ritual_fertility',
            output: { item: 'naturesaura:birth_spirit', count: 8 },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:overworld',
            aura: 300000,
            time: 1000,
            id: `${id_prefix}birth_spirit`
        },
        {
            input: 'astralsorcery:infused_wood',
            output: { item: 'astralsorcery:infused_wood_infused' },
            aura_type: 'naturesaura:overworld',
            aura: 500,
            time: 100,
            id: `astralsorcery:infuser/infused_wood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
// 专家版材料统一与矿石加工；可选配方按目标端实际安装的模组分别注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "naturesaura:altar", false, ["botania:mana_infusion","create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","interactio:item_fluid_transform","interactio:item_lightning","mekanism:smelting","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","naturesaura:altar","neovitae:ara_vitae_recipe"]);
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

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "naturesaura:altar", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
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
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "naturesaura:altar", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
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
