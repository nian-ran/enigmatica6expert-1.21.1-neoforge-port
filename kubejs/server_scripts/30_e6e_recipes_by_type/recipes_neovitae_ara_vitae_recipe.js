// 配方类型：neovitae:ara_vitae_recipe
// 中文名称：Ara Vitae 仪式
// 用途：用于登记Neovitae的Ara Vitae 仪式配方。

(function () {
if (e6ePortedRecipeModLoaded('neovitae')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/neovitae/ara_vitae/';
    const recipes = [
        {
            input: 'eidolon_repraised:unholy_symbol',
            output: 'bloodmagic:weakbloodorb',
            syphon: 7000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 1,
            id: 'bloodmagic:altar/weakbloodorb'
        },
        {
            input: 'meetyourfight:caged_heart',
            output: 'bloodmagic:apprenticebloodorb',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/apprenticebloodorb'
        },
        {
            input: 'botania:mana_tablet',
            output: 'bloodmagic:magicianbloodorb',
            syphon: 50000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'bloodmagic:altar/magicianbloodorb'
        },
        {
            input: 'occultism:otherstone_tablet',
            output: 'bloodmagic:blankslate',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 50,
            drainRate: 5,
            id: 'bloodmagic:altar/slate'
        },
        {
            input: 'bloodmagic:blankslate',
            output: 'bloodmagic:reinforcedslate',
            syphon: 2000,
            altarLevel: 1,
            consumptionRate: 100,
            drainRate: 5,
            id: 'bloodmagic:altar/reinforcedslate'
        },
        {
            input: 'bloodmagic:reinforcedslate',
            output: 'bloodmagic:infusedslate',
            syphon: 5000,
            altarLevel: 2,
            consumptionRate: 250,
            drainRate: 10,
            id: 'bloodmagic:altar/imbuedslate'
        },
        {
            input: 'bloodmagic:infusedslate',
            output: 'bloodmagic:demonslate',
            syphon: 15000,
            altarLevel: 3,
            consumptionRate: 750,
            drainRate: 20,
            id: 'bloodmagic:altar/demonicslate'
        },
        {
            input: 'bloodmagic:demonslate',
            output: 'bloodmagic:etherealslate',
            syphon: 200000,
            altarLevel: 4,
            consumptionRate: 1000,
            drainRate: 1000,
            id: `${id_prefix}etherealslate`
        },
        {
            input: 'occultism:chalk_white_impure',
            output: 'occultism:chalk_white',
            syphon: 7000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 1,
            id: 'occultism:spirit_fire/chalk_white'
        },
        {
            input: 'occultism:chalk_gold_impure',
            output: 'occultism:chalk_gold',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: 'occultism:spirit_fire/chalk_gold'
        },
        {
            input: 'occultism:chalk_purple_impure',
            output: 'occultism:chalk_purple',
            syphon: 25000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'occultism:spirit_fire/chalk_purple'
        },
        {
            input: 'occultism:chalk_red_impure',
            output: 'occultism:chalk_red',
            syphon: 40000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 50,
            id: 'occultism:spirit_fire/chalk_red'
        },
        {
            input: 'ars_nouveau:mana_fiber',
            output: 'bloodmagic:soulsnare',
            syphon: 500,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 1,
            id: 'bloodmagic:altar/soul_snare'
        },
        {
            input: 'kubejs:firmament',
            output: 'architects_palette:moonstone',
            syphon: 5000,
            altarLevel: 0,
            consumptionRate: 250,
            drainRate: 1,
            id: `${id_prefix}moonstone`
        },
        {
            input: 'eidolon_repraised:sapping_sword',
            output: 'bloodmagic:sacrificialdagger',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:sacrificial_dagger'
        },
        {
            input: 'create:shadow_steel',
            output: 'bloodmagic:masterbloodorb',
            syphon: 80000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 50,
            id: 'bloodmagic:altar/masterbloodorb'
        },
        {
            input: '#botania:runes/air',
            output: 'bloodmagic:airscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/air_tool'
        },
        {
            input: '#botania:runes/fire',
            output: 'bloodmagic:firescribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/fire_tool'
        },
        {
            input: '#botania:runes/water',
            output: 'bloodmagic:waterscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/water_tool'
        },
        {
            input: '#botania:runes/earth',
            output: 'bloodmagic:earthscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/earth_tool'
        },
        {
            input: '#botania:runes/nidavellir',
            output: 'bloodmagic:duskscribetool',
            syphon: 2000,
            altarLevel: 3,
            consumptionRate: 20,
            drainRate: 10,
            id: 'bloodmagic:altar/dusk_tool'
        },
        {
            input: 'botania:livingwood_planks',
            output: 'eidolon_repraised:polished_planks',
            syphon: 50,
            altarLevel: 0,
            consumptionRate: 25,
            drainRate: 5,
            id: `${id_prefix}polished_planks`
        },
        {
            input: 'ars_nouveau:ritual_warping',
            output: 'waystones:warp_stone',
            syphon: 25000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'waystones:warp_stone'
        },
        {
            input: 'undergarden:gloom_o_lantern',
            output: 'botania:fel_pumpkin',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 5,
            id: `${id_prefix}fel_pumpkin`
        },
        {
            input: 'eidolon_repraised:void_amulet',
            output: 'botania:blood_pendant',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: `${id_prefix}blood_pendant`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.input == null || recipe.output == null) return;
        const input = e6eMapNeoVitaeIngredient(recipe.input);
        const output = e6eMapNeoVitaeItemId(recipe.output);
        if (!input || !output) return;

        event.recipes.neovitae.ara_vitae_recipe(
            input,
            Item.of(output, recipe.count || 1),
            recipe.altarLevel,
            recipe.syphon,
            recipe.consumptionRate,
            recipe.drainRate
        ).id(recipe.id);
    });
});

}
})();

(function () {
// Botania/Interactio 缺失时，用 Create、Lychee 与 NeoVitae 补齐 E6E 的自定义矿物处理链。
// 保留四阶段加工次序；只有目标端确实注册了对应矿物及输入标签时才添加配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "neovitae:ara_vitae_recipe", false, ["create:crushing","create:mixing","lychee:lightning_channeling","neovitae:ara_vitae_recipe"]);
    if (global.isExpertMode == false) return;
    if (e6ePortedRecipeModLoaded('botania') && e6ePortedRecipeModLoaded('interactio')) return;

    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');
    const hasLychee = e6ePortedRecipeModLoaded('lychee');
    const hasNeoVitae = e6ePortedRecipeModLoaded('neovitae');
    if (!hasCreate && !hasLychee && !hasNeoVitae) return;

    function firstExistingTag(tags) {
        for (let i = 0; i < tags.length; i++) {
            if (e6eRecipeIngredientExists(tags[i])) return tags[i];
        }
        return null;
    }

    function preferredItem(tag) {
        if (!tag) return null;
        try {
            const item = getPreferredItemInTag(Ingredient.of(tag));
            const id = item && item.id ? String(item.id) : null;
            return id && e6eRecipeOutputExists(id) ? id : null;
        } catch (error) {
            return null;
        }
    }

    const similarMaterialFallbacks = {
        cloggrum: { input: 'minecraft:iron_ingot', output: 'iron' },
        cobalt: { input: 'mekanism:ingot_osmium', output: 'osmium' },
        froststeel: { input: 'minecraft:iron_ingot', output: 'iron' },
        nebu: { input: 'minecraft:gold_ingot', output: 'gold' },
        regalium: { input: 'minecraft:gold_ingot', output: 'gold' },
        utherium: { input: 'minecraft:iron_ingot', output: 'iron' }
    };

    metals.forEach((metal) => {
        const suffused = `kubejs:suffused_${metal}`;
        const fulminated = `kubejs:fulminated_${metal}`;
        const levigated = `kubejs:levigated_${metal}`;
        const sliver = `kubejs:sliver_${metal}`;
        if (![suffused, fulminated, levigated, sliver].every(e6eRecipeOutputExists)) return;

        let baseInput = firstExistingTag([
            `#c:ores/${metal}`,
            `#forge:ores/${metal}`,
            `#c:raw_materials/${metal}`,
            `#forge:raw_materials/${metal}`,
            `#c:ingots/${metal}`,
            `#forge:ingots/${metal}`,
            `#c:gems/${metal}`,
            `#forge:gems/${metal}`
        ]);
        if (!baseInput && similarMaterialFallbacks[metal]
            && e6eRecipeIngredientExists(similarMaterialFallbacks[metal].input)) {
            baseInput = similarMaterialFallbacks[metal].input;
        }
        if (!baseInput) return;

        if (hasCreate && e6eRecipeIngredientExists('astralsorcery:stardust')) {
            event.recipes.create.mixing(suffused, [baseInput, 'astralsorcery:stardust'])
                .heated()
                .id(`enigmatica:expert/unification/magical_fallback/suffused/${metal}`);
        }

        if (hasLychee && e6eRecipeIngredientExists(suffused)) {
            event.custom({
                type: 'lychee:lightning_channeling',
                item_in: [suffused],
                post: `drop ${fulminated}`
            }).id(`enigmatica:expert/unification/magical_fallback/fulminated/${metal}`);
        }

        if (hasCreate && e6eRecipeIngredientExists(fulminated)) {
            event.recipes.create.crushing(levigated, fulminated)
                .processingTime(200)
                .id(`enigmatica:expert/unification/magical_fallback/levigated/${metal}`);
        }

        if (hasLychee && e6eRecipeIngredientExists(levigated)
            && e6eRecipeIngredientExists('astralsorcery:stardust')) {
            event.custom({
                type: 'lychee:lightning_channeling',
                item_in: [levigated, 'astralsorcery:stardust'],
                post: `drop ${sliver}`
            }).id(`enigmatica:expert/unification/magical_fallback/sliver/${metal}`);
        }

        if (hasNeoVitae && e6eRecipeIngredientExists(sliver)) {
            const fallbackMaterial = similarMaterialFallbacks[metal]
                ? similarMaterialFallbacks[metal].output
                : metal;
            const nuggetTag = firstExistingTag([
                `#c:nuggets/${metal}`,
                `#forge:nuggets/${metal}`,
                `#c:nuggets/${fallbackMaterial}`,
                `#forge:nuggets/${fallbackMaterial}`
            ]);
            const ingotTag = firstExistingTag([
                `#c:ingots/${metal}`,
                `#forge:ingots/${metal}`,
                `#c:ingots/${fallbackMaterial}`,
                `#forge:ingots/${fallbackMaterial}`
            ]);
            const finalOutput = preferredItem(nuggetTag) || preferredItem(ingotTag);
            if (finalOutput) {
                event.recipes.neovitae.ara_vitae_recipe(
                    `#enigmatica:crystalline_slivers/${metal}`,
                    Item.of(finalOutput),
                    4,
                    18,
                    18,
                    9
                ).id(`enigmatica:expert/unification/magical_fallback/ara_vitae/${metal}`);
            }
        }
    });
});
})();

(function () {
// 专家版材料统一与矿石加工；可选配方按目标端实际安装的模组分别注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "neovitae:ara_vitae_recipe", false, ["botania:mana_infusion","create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","interactio:item_fluid_transform","interactio:item_lightning","mekanism:smelting","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","naturesaura:altar","neovitae:ara_vitae_recipe"]);
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
