// 配方类型：mekanism:crushing
// 中文名称：粉碎加工
// 用途：用于登记通用机械的粉碎加工配方。

(function () {
if (['byg', 'simplefarming'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/crushing/';
    const recipes = [
        {
            input: 'byg:purple_sandstone',
            output: Item.of('byg:purple_sand', 2),
            id: `${id_prefix}purple_sand`
        },
        {
            input: 'byg:blue_sandstone',
            output: Item.of('byg:blue_sand', 2),
            id: `${id_prefix}blue_sand`
        },
        {
            input: 'byg:white_sandstone',
            output: Item.of('byg:white_sand', 2),
            id: `${id_prefix}white_sand`
        },
        {
            input: 'byg:black_sandstone',
            output: Item.of('byg:black_sand', 2),
            id: `${id_prefix}black_sand`
        },
        {
            input: 'atmospheric:arid_sandstone',
            output: item.of('atmospheric:arid_sand', 2),
            id: `${id_prefix}arid_sand`
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            output: item.of('atmospheric:red_arid_sand', 2),
            id: `${id_prefix}red_arid_sand`
        },
        {
            input: '#forge:stone',
            output: 'minecraft:cobblestone',
            id: `${id_prefix}cobblestone`
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            output: Item.of('buildinggadgets:construction_paste', 3),
            id: `${id_prefix}construction_paste`
        },
        {
            input: Item.of('create:limesand', 3),
            output: Item.of('emendatusenigmatica:silicon_gem'),
            id: `${id_prefix}silicon_gem`
        },
        {
            input: '#forge:end_stones',
            output: Item.of('occultism:crushed_end_stone', 4),
            id: `${id_prefix}crushed_end_stone`
        },
        {
            input: 'byg:raw_quartz_block',
            output: Item.of('byg:quartzite_sand', 2),
            id: `${id_prefix}quartzite_sand`
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('mekanism:dirty_netherite_scrap', 3),
            id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'
        },
        {
            input: '#forge:coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            output: Item.of('9x immersivepetroleum:petcoke_dust'),
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            output: Item.of('9x emendatusenigmatica:coke_dust'),
            id: `${id_prefix}coke_dust_from_block`
        }
    ];

    const biofuels = [
        {
            count: 2,
            inputs: [
                '#minecraft:leaves',
                'byg:flower_patch',
                'byg:clover_patch',
                'byg:leaf_pile',
                'byg:beach_grass',
                'byg:short_beach_grass',
                'byg:wilted_grass',
                'byg:weed_grass',
                'byg:winter_grass',
                'byg:winter_succulent',
                'byg:water_silk',
                'byg:tiny_lilypads',
                'byg:tall_prairie_grass',
                'byg:short_grass',
                'byg:reeds',
                'byg:prairie_grass',
                'byg:poison_ivy',
                'byg:horseweed',
                'byg:cattail',
                'projectvibrantjourneys:cattail',
                'environmental:cattail',
                'byg:black_puff',
                'byg:shulkren_moss_blanket',
                'byg:shulkren_fungus',
                'byg:vermilion_sculk_growth',
                'byg:oddity_bush',
                'byg:nightshade_berries',
                'byg:ether_bush',
                'byg:ether_grass',
                'byg:ender_lily',
                'byg:ivis_sprout',
                'byg:ivis_roots',
                'byg:embur_lily',
                'byg:tall_embur_roots',
                'byg:embur_roots',
                'byg:embur_sprouts',
                'byg:hanging_sythian_roots',
                'byg:sythian_stalk_block',
                'byg:sythian_sprout',
                'byg:sythian_roots',
                'byg:nether_bristle',
                'byg:weeping_roots',
                'byg:soul_shroom_spore_end',
                'byg:scorched_grass',
                'byg:scorched_bush',
                'byg:whaling_grass',
                'byg:warped_bush',
                'byg:crimson_berries',
                'byg:tall_crimson_roots',
                'byg:blueberries',
                'byg:crimson_berries',
                'simplefarming:strawberries',
                'simplefarming:raspberries',
                'simplefarming:blueberries',
                'simplefarming:blackberries',
                'byg:holly_berries'
            ]
        },
        {
            count: 4,
            inputs: [
                'byg:warped_cactus',
                'byg:red_glowcane',
                'byg:purple_glowcane',
                'byg:pink_glowcane',
                'byg:blue_glowcane',
                'byg:shulkren_vine',
                'byg:whaling_vine',
                'byg:embur_gel_vines',
                'byg:skyris_vine',
                'byg:lament_vine'
            ]
        },
        {
            count: 5,
            inputs: [
                '#minecraft:small_flowers',
                '#minecraft:tall_flowers',
                '#forge:mushroom_stems',
                '#forge:mushrooms',
                'byg:green_apple',
                'farmersdelight:cabbage_leaf',
                'farmersdelight:onion',
                'farmersdelight:tomato',
                'farmersdelight:cabbage',
                'simplefarming:rice',
                'simplefarming:rye',
                'simplefarming:oat',
                'simplefarming:barley',
                'simplefarming:cotton',
                'simplefarming:zucchini',
                'simplefarming:yam',
                'simplefarming:turnip',
                'simplefarming:tomato',
                'simplefarming:sweet_potato',
                'simplefarming:squash',
                'simplefarming:spinach',
                'simplefarming:soybean',
                'simplefarming:sorghum',
                'simplefarming:radish',
                'simplefarming:pepper',
                'simplefarming:peanut',
                'simplefarming:pea_pod',
                'simplefarming:onion',
                'simplefarming:lettuce',
                'simplefarming:ginger',
                'simplefarming:eggplant',
                'simplefarming:cucumber',
                'simplefarming:corn',
                'simplefarming:cassava',
                'simplefarming:broccoli',
                'simplefarming:honeydew',
                'simplefarming:cantaloupe'
            ]
        },
        {
            count: 7,
            inputs: ['#forge:mushroom_caps']
        }
    ];

    biofuels.forEach((biofuel) => {
        biofuel.inputs.forEach((input) => {
            recipes.push({
                input: input,
                output: Item.of('mekanism:bio_fuel', biofuel.count),
                id: `${id_prefix}bio_fuel_from_${input.split(':')[0].replace('#', '')}_${input.split(':')[1]}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(recipe.id);
    });
});

}
})();

(function () {
// 仅在目标端对应物品、标签和配方附属可用时注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "mekanism:crushing", false, ["ars_nouveau:crush","create:crushing","create:milling","create:splashing","immersiveengineering:crusher","immersiveengineering:metal_press","mekanism:crushing","mekanism:enriching","minecraft:blasting","minecraft:crafting_shapeless","minecraft:smelting","occultism:crushing"]);
    const idPrefix = 'enigmatica:base/unification/unify_materials/';
    const hasCreate = e6ePortedRecipeModLoaded('create') && e6ePortedRecipeModLoaded('kubejs_create');
    const hasIE = e6ePortedRecipeModLoaded('immersiveengineering') && e6ePortedRecipeModLoaded('immersive_engineering_js');
    const hasMekanism = e6ePortedRecipeModLoaded('mekanism') && e6ePortedRecipeModLoaded('kubejs_mekanism');
    const hasOccultism = e6ePortedRecipeModLoaded('occultism') && e6ePortedRecipeModLoaded('occultism_kubejs');
    const hasArs = e6ePortedRecipeModLoaded('ars_nouveau') && e6ePortedRecipeModLoaded('kubejsarsnouveau');

    function tagFor(type, material, namespaces) {
        const ns = namespaces || ['c', 'forge'];
        for (let i = 0; i < ns.length; i++) {
            const candidate = `#${ns[i]}:${type}/${material}`;
            if (e6eRecipeIngredientExists(candidate)) return candidate;
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

    function propertyOutput(properties, dust, gem, shard) {
        if (!properties) return null;
        if (properties.output === 'dust') return dust !== air ? dust : null;
        if (properties.output === 'gem') return gem !== air ? gem : null;
        if (properties.output === 'shard') return shard !== air ? shard : null;
        return null;
    }

    materialsToUnify.forEach((material) => {
        const oreTag = tagFor('ores', material);
        const ingotTag = tagFor('ingots', material);
        const nuggetTag = tagFor('nuggets', material);
        const gemTag = tagFor('gems', material);
        const blockTag = tagFor('storage_blocks', material);
        const dustTag = tagFor('dusts', material);
        const shardTag = tagFor('shards', material);
        const crushedOreTag = tagFor('crushed_ores', material, ['create']);
        const ore = preferred(oreTag);
        const ingot = preferred(ingotTag);
        const nugget = preferred(nuggetTag);
        const gem = preferred(gemTag);
        const dust = preferred(dustTag);
        const shard = preferred(shardTag);
        const crushedOre = preferred(crushedOreTag);

        if (hasCreate) {
            createMetalOre(material, oreTag, ore, ingot, crushedOreTag, crushedOre);
            createGemOre(material, oreTag, ore, dust, gem, shard);
            createIngotGemMilling(material, ingotTag, ingot, gemTag, gem, dust);
            createMetalBlock(material, blockTag, ingot, nugget, crushedOreTag, crushedOre);
        }

        if (hasIE) {
            immersiveEngineeringGemOre(material, oreTag, ore, dust, gem, shard);
            immersiveEngineeringGemCrushing(material, gemTag, gem, dust);
            immersiveEngineeringSpecialIngotCrushing(material, ingotTag, ingot, dust);
            immersiveEngineeringHammerCrushing(material, oreTag, ore, gemTag, gem, dust);
            immersiveEngineeringPacking(material, blockTag, ingotTag, ingot, nuggetTag, nugget, gemTag, gem);
        }

        if (hasMekanism) {
            mekanismIngotGemCrushing(material, ingotTag, ingot, gemTag, gem, dust);
            mekanismGemOre(material, oreTag, ore, dust, gem, shard);
        }

        vanillaOreAndDustSmelting(material, oreTag, ore, gem, dustTag, dust, ingot);

        if (hasOccultism) {
            occultismGemOre(material, oreTag, ore, dust, gem, shard);
            occultismMetalOre(material, oreTag, ore, ingot, dust);
            occultismIngotGem(material, ingotTag, ingot, gemTag, gem, dust);
        }

        if (hasArs) {
            arsGemOre(material, oreTag, ore, dust, gem, shard);
            arsMetalOre(material, oreTag, ore, ingot, dust);
            arsIngotGem(material, ingotTag, ingot, gemTag, gem, dust);
        }
    });

    function createMetalOre(material, oreTag, ore, ingot, crushedTag, crushedOre) {
        if (ore === air || ingot === air || crushedOre === air || !oreTag || !crushedTag) return;

        let secondary = null;
        let processingTime = 400;
        let hasSecondaryConfig = false;
        try {
            const properties = oreProcessingSecondaries[material];
            if (properties) {
                hasSecondaryConfig = true;
                const secondaryTag = tagFor('crushed_ores', properties.secondary, ['create']);
                const found = preferred(secondaryTag);
                if (found !== air) secondary = found;
                if (Number(properties.createProcessingTime) > 0) processingTime = Number(properties.createProcessingTime);
            }
        } catch (error) {
            // 没有副产物配置时沿用该矿石本身作为副产物。
        }
        if (!hasSecondaryConfig) secondary = crushedOre;

        const millingOutputs = [
            Item.of(crushedOre),
            Item.of(crushedOre, 2).withChance(0.25)
        ];
        const crushingOutputs = [
            Item.of(crushedOre),
            Item.of(crushedOre, 2).withChance(0.6)
        ];
        if (secondary !== null) {
            millingOutputs.push(Item.of(secondary, 2).withChance(0.05));
            crushingOutputs.push(Item.of(secondary, 2).withChance(0.1));
        }
        crushingOutputs.push(Item.of('minecraft:cobblestone').withChance(0.125));

        event.recipes.create.milling(millingOutputs, oreTag)
            .processingTime(processingTime).id(`create:milling/${material}_ore`);

        event.recipes.create.crushing(crushingOutputs, oreTag)
            .processingTime(processingTime).id(`create:crushing/${material}_ore`);
    }

    function createGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.create) return;

        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        const stone = properties.stoneOutput;
        if (!e6eRecipeOutputExists(stone)) return;

        const outputs = [Item.of(output, properties.create.primaryCount)];
        if (properties.secondary) {
            if (e6eRecipeOutputExists(properties.secondary)) {
                outputs.push(Item.of(properties.secondary, properties.create.secondaryCount)
                    .withChance(properties.create.secondaryChance));
            }
        } else {
            outputs.push(Item.of(output, properties.create.secondaryCount)
                .withChance(properties.create.secondaryChance));
        }
        outputs.push(Item.of(stone).withChance(0.125));

        const time = Number(properties.create.processingTime) > 0 ? Number(properties.create.processingTime) : 300;
        event.recipes.create.crushing(outputs, oreTag)
            .processingTime(time)
            .id(`create:crushing/${material}_ore`);
    }

    function createIngotGemMilling(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        let input = ingotTag;
        if (ingot === air) input = gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.create.milling([Item.of(dust)], input)
            .processingTime(300)
            .id(`${idPrefix}create/milling/${material}_dust`);
    }

    function createMetalBlock(material, blockTag, ingot, nugget, crushedTag, crushedOre) {
        if (ingot === air || crushedOre === air || !blockTag || !crushedTag) return;
        event.recipes.create.crushing(Item.of(crushedOre, 5), blockTag)
            .processingTime(400)
            .id(`create:crushing/${material}_block`);
        if (nugget !== air) {
            event.recipes.create.splashing([
                Item.of(nugget, 10),
                Item.of(nugget, 5).withChance(0.5)
            ], crushedOre).id(`create:splashing/crushed_${material}`);
        }
        event.blasting(ingot, crushedTag).xp(0.1).id(`create:blasting/${material}_ingot_from_crushed`);
        event.smelting(ingot, crushedTag).xp(0.1).id(`create:smelting/${material}_ingot_from_crushed`);
    }

    function immersiveEngineeringGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.immersiveengineering) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output || !e6eRecipeOutputExists(output)) return;

        const secondary = properties.secondary;
        const secondaryChance = Number(properties.immersiveengineering.secondaryChance);
        const byproducts = e6eRecipeOutputExists(secondary) && secondaryChance >= 0 && secondaryChance <= 1
            ? [Item.of(secondary).withChance(secondaryChance)] : [];
        event.recipes.immersiveengineering.crusher(
            Item.of(output, properties.immersiveengineering.count), oreTag, byproducts
        ).energy(2000).id(`immersiveengineering:crusher/ore_${material}`);
    }

    function immersiveEngineeringGemCrushing(material, gemTag, gem, dust) {
        if (dust === air) return;
        let input = gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.immersiveengineering.crusher(dust, input)
            .energy(2000).id(`${idPrefix}immersiveengineering/gem_to_dust/${material}`);
    }

    function immersiveEngineeringSpecialIngotCrushing(material, ingotTag, ingot, dust) {
        if (!['signalum', 'lumium', 'enderium'].includes(material) || ingot === air || dust === air || !ingotTag) return;
        event.recipes.immersiveengineering.crusher(dust, ingotTag)
            .energy(2000).id(`${idPrefix}immersiveengineering/ingot_to_dust/${material}`);
    }

    function immersiveEngineeringHammerCrushing(material, oreTag, ore, gemTag, gem, dust) {
        if (ore === air || dust === air || !oreTag) return;
        let hammer = null;
        const hammerTags = ['#c:tools/crafting_hammer', '#c:tools/hammers', '#forge:tools/crafting_hammer'];
        for (let i = 0; i < hammerTags.length; i++) {
            if (e6eRecipeIngredientExists(hammerTags[i])) {
                hammer = hammerTags[i];
                break;
            }
        }
        if (!hammer) return;
        event.shapeless(dust, [oreTag, hammer])
            .id(`enigmatica:base/enigmatica/${material}_dust_from_ore`);
        if (gem !== air && gemTag) {
            event.shapeless(dust, [gemTag, hammer])
                .id(`${idPrefix}immersiveengineering/hammer/gem_to_dust/${material}`);
        }
    }

    function immersiveEngineeringPacking(material, blockTag, ingotTag, ingot, nuggetTag, nugget, gemTag, gem) {
        if (['ender', 'amber', 'quartz'].includes(material)) return;
        const packingMold = 'immersiveengineering:mold_packing_9';
        const unpackingMold = 'immersiveengineering:mold_unpacking';
        if (!e6ePortedItemExists(packingMold) || !e6ePortedItemExists(unpackingMold)) return;
        const block = preferred(blockTag);

        if (block !== air && blockTag && ingotTag && ingot !== air) {
            event.recipes.immersiveengineering.metal_press(
                block, `9x ${ingotTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/ingots_to_block`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${ingot}`, blockTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/block_to_ingots`);
        }

        if (block !== air && blockTag && gemTag && gem !== air) {
            event.recipes.immersiveengineering.metal_press(
                block, `9x ${gemTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/gems_to_block`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${gem}`, blockTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/block_to_gems`);
        }

        if (ingotTag && nuggetTag && ingot !== air && nugget !== air) {
            event.recipes.immersiveengineering.metal_press(
                ingot, `9x ${nuggetTag}`, packingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/nuggets_to_ingot`);
            event.recipes.immersiveengineering.metal_press(
                `9x ${nugget}`, ingotTag, unpackingMold
            ).id(`${idPrefix}immersiveengineering/packing/${material}/ingot_to_nuggets`);
        }
    }

    function mekanismIngotGemCrushing(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.remove({ input: input, mod: 'mekanism', type: 'mekanism:crushing' });
        event.recipes.mekanism.crushing(dust, input).id(`mekanism:processing/${material}/to_dust`);
    }

    function mekanismGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.mekanism) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        event.recipes.mekanism.enriching(Item.of(output, properties.mekanism.count), oreTag)
            .id(`mekanism:processing/${material}/from_ore`);
    }

    function vanillaOreAndDustSmelting(material, oreTag, ore, gem, dustTag, dust, ingot) {
        if (ore !== air && gem !== air && !['amber', 'ender'].includes(material) && oreTag) {
            event.smelting(gem, oreTag).xp(0.7).id(`${idPrefix}smelting/${material}/gem/from_ore`);
            event.blasting(gem, oreTag).xp(0.7).id(`${idPrefix}blasting/${material}/gem/from_ore`);
        }
        if (ingot !== air && dust !== air && !['starmetal'].includes(material) && dustTag) {
            event.smelting(ingot, dustTag).xp(0.7).id(`${idPrefix}smelting/${material}/ingot/from_dust`);
            event.blasting(ingot, dustTag).xp(0.7).id(`${idPrefix}blasting/${material}/ingot/from_dust`);
        }
    }

    function occultismGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.occultism) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(oreTag).toJson(),
            result: { type: 'occultism:item', id: output, count: properties.occultism.count },
            crushing_time: 100,
            ignore_crushing_multiplier: false
        }).id(`${idPrefix}occultism_crushing/${material}/${properties.output}/from_ore`);
    }

    function occultismMetalOre(material, oreTag, ore, ingot, dust) {
        if (ore === air || ingot === air || dust === air || !oreTag) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(oreTag).toJson(),
            result: { type: 'occultism:item', id: dust, count: 2 },
            crushing_time: 100,
            ignore_crushing_multiplier: false
        }).id(`occultism:crushing/${material}_dust`);
    }

    function occultismIngotGem(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air || (material === 'silver')) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.custom({
            type: 'occultism:crushing',
            ingredient: Ingredient.of(input).toJson(),
            result: { type: 'occultism:item', id: dust, count: 1 },
            crushing_time: 100,
            ignore_crushing_multiplier: true
        }).id(`${idPrefix}occultism_crushing/${material}_dust`);
    }

    function arsGemOre(material, oreTag, ore, dust, gem, shard) {
        if (ore === air || !oreTag) return;
        let properties;
        try {
            properties = gemProcessingProperties[material];
        } catch (error) {
            return;
        }
        if (!properties || !properties.ars_nouveau) return;
        const output = propertyOutput(properties, dust, gem, shard);
        if (!output) return;
        const outputs = [
            { stack: Item.of(output, properties.ars_nouveau.primaryCount), chance: 1.0, maxRange: 1 }
        ];
        if (properties.secondary) {
            if (e6eRecipeOutputExists(properties.secondary)) {
                outputs.push({
                    stack: Item.of(properties.secondary, properties.ars_nouveau.secondaryCount),
                    chance: properties.ars_nouveau.secondaryChance,
                    maxRange: 1
                });
            }
        } else {
            outputs.push({
                stack: Item.of(output, properties.ars_nouveau.secondaryCount),
                chance: properties.ars_nouveau.secondaryChance,
                maxRange: 1
            });
        }
        event.recipes.ars_nouveau.crush(oreTag, outputs)
            .id(`ars_nouveau:crushing/${material}_from_ore`);
    }

    function arsMetalOre(material, oreTag, ore, ingot, dust) {
        if (ore === air || ingot === air || dust === air || !oreTag) return;
        let secondary = null;
        let hasSecondaryConfig = false;
        try {
            const properties = oreProcessingSecondaries[material];
            if (properties) {
                hasSecondaryConfig = true;
                const secondaryDust = preferred(tagFor('dusts', properties.secondary));
                if (secondaryDust !== air) secondary = secondaryDust;
            }
        } catch (error) {
            // 缺少副产物映射时只产出主粉尘。
        }
        if (!hasSecondaryConfig) secondary = dust;
        const outputs = [{ stack: Item.of(dust, 2), chance: 1.0, maxRange: 1 }];
        if (secondary !== null) outputs.push({ stack: Item.of(secondary), chance: 0.1, maxRange: 1 });
        event.recipes.ars_nouveau.crush(oreTag, outputs)
            .id(`ars_nouveau:crushing/${material}_dust_from_ore`);
    }

    function arsIngotGem(material, ingotTag, ingot, gemTag, gem, dust) {
        if (dust === air) return;
        const input = ingot !== air ? ingotTag : gem !== air ? gemTag : null;
        if (!input || !e6eRecipeIngredientExists(input)) return;
        event.recipes.ars_nouveau.crush(input, [
            { stack: Item.of(dust), chance: 1.0, maxRange: 1 }
        ]).id(`ars_nouveau:crushing/${material}_dust`);
    }
});
})();
