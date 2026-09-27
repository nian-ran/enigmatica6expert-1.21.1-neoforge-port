// 配方类型：interactio:item_lightning
// 中文名称：雷击转化掉落物
// 用途：用于登记Interactio 掉落物交互的雷击转化掉落物配方。

(function () {
if (['atum', 'bloodmagic', 'botania', 'byg', 'eidolon_repraised', 'interactio', 'meetyourfight', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_lightning/';
    const recipes = [
        {
            inputs: ['4x minecraft:snowball', 'quark:bottled_cloud', '#forge:gems/fluorite'],
            output: {
                entries: [{ result: { item: 'powah:charged_snowball', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}charged_snowball`
        },
        {
            inputs: ['3x #forge:storage_blocks/clay', '#forge:gems/mana', '#forge:gems/apatite'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:arcane_stone', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}arcane_stone`
        },
        {
            inputs: [
                'minecraft:heart_of_the_sea',
                '4x minecraft:nautilus_shell',
                '2x #forge:gems/lapis',
                '2x #forge:gems/fluorite',
                '#forge:gems/mana'
            ],
            output: {
                entries: [{ result: { item: 'minecraft:conduit', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'minecraft:conduit'
        },
        {
            inputs: ['eidolon_repraised:gold_inlay', 'botania:livingwood_wall', 'naturesaura:gold_leaf', '#forge:gems/apatite'],
            output: {
                entries: [{ result: { item: 'naturesaura:wood_stand', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'naturesaura:wood_stand'
        },
        {
            inputs: [
                [
                    'undergarden:music_disc_relict',
                    'undergarden:music_disc_mammoth',
                    'undergarden:music_disc_limax_maximus',
                    'undergarden:music_disc_gloomper_anthem'
                ],
                'aquaculture:fish_bones',
                '2x #forge:gems/lapis',
                '2x minecraft:fermented_spider_eye',
                '4x undergarden:raw_dweller_meat'
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:fossil_bait', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:fossil_bait'
        },
        {
            inputs: ['supplementaries:jar', '3x #forge:gems/fluorite'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:jar_of_light', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}jar_of_light`
        },
        {
            inputs: ['supplementaries:jar', '3x #forge:dusts/obsidian'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:void_jar', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}void_jar`
        },
        {
            inputs: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'naturesaura:infused_iron',
                '#botania:runes/water',
                '#botania:runes/earth',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
                'naturesaura:tainted_gold',
                '#botania:runes/fire',
                '#botania:runes/air'
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:calling_spirit', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}calling_spirit`
        },
        {
            inputs: ['#forge:storage_blocks/iron', '#forge:dusts/iron', '#forge:gems/fluorite', '#forge:dusts/copper'],
            output: {
                entries: [{ result: { item: 'minecraft:lodestone', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}lodestone`
        },
        {
            inputs: ['6x #botania:petals', '2x botania:quartz_blaze', '#forge:nuggets/nebu'],
            output: {
                entries: [{ result: { item: 'botania:spark', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}spark`
        },
        {
            inputs: [
                '2x eidolon_repraised:gold_inlay',
                'eidolon_repraised:pewter_inlay',
                '#forge:gems/mana',
                '4x architects_palette:sunmetal_blend'
            ],
            output: {
                entries: [{ result: { item: 'atum:scarab', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'atum:scarab'
        },
        {
            inputs: ['minecraft:bell', '3x atum:ectoplasm', '#forge:gems/fluorite', '#atum:relic_non_dirty'],
            output: {
                entries: [{ result: { item: 'meetyourfight:haunted_bell', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:haunted_bell'
        },
        {
            inputs: ['2x thermal:phytogro', '2x #forge:dusts/iron', '#forge:dusts/nickel'],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:invar_dust', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: ['#forge:gems/fluorite', '6x minecraft:prismarine', '6x undergarden:shiverstone'],
            output: {
                entries: [{ result: { item: 'kubejs:firmament', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}firmament`
        },
        {
            inputs: ['eidolon_repraised:soul_shard', 'minecraft:polished_andesite', '#forge:inlays/pewter'],
            output: {
                entries: [{ result: { item: 'eidolon_repraised:stone_altar', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}stone_altar`
        },
        {
            inputs: ['botania:corporea_spark', '3x #forge:nuggets/silicon_bronze', '2x bloodmagic:ritualstone'],
            output: {
                entries: [{ result: { item: 'bloodmagic:teleposer', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}teleposer`
        },
        {
            inputs: ['64x minecraft:oak_leaves', '#forge:dusts/starmetal', 'quark:green_crystal'],
            output: {
                entries: [{ result: { item: 'kubejs:crystalline_oak_leaves', count: 64 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}crystalline_oak_leaves`
        },
        {
            inputs: ['64x byg:flowering_palo_verde_leaves', '#forge:dusts/starmetal', 'quark:yellow_crystal'],
            output: {
                entries: [{ result: { item: 'kubejs:crystalline_flowering_palo_verde_leaves', count: 64 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}crystalline_flowering_palo_verde_leaves`
        },
        {
            inputs: ['64x minecraft:dark_oak_wood', '#forge:dusts/starmetal', 'quark:orange_crystal'],
            output: {
                entries: [{ result: { item: 'kubejs:crystalline_dark_oak_wood', count: 64 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}crystalline_dark_oak_wood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_lightning';

        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
// 专家版材料统一与矿石加工；可选配方按目标端实际安装的模组分别注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "interactio:item_lightning", false, ["botania:mana_infusion","create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","interactio:item_fluid_transform","interactio:item_lightning","mekanism:smelting","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","naturesaura:altar","neovitae:ara_vitae_recipe"]);
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
