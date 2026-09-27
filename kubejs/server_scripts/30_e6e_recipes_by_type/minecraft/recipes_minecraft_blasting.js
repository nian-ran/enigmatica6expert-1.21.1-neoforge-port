// 配方类型：minecraft:blasting
// 中文名称：高炉烧炼
// 用途：用于登记原版 Minecraft的高炉烧炼配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/blasting/';
    const recipes = [
        {
            input: 'architects_palette:rotten_flesh_block',
            output: '9x occultism:tallow',
            xp: 0.5,
            id: `${id_prefix}tallow_from_flesh`
        },
        {
            input: '#forge:ores/ender',
            output: null, // 目标版本尚无已确认的末影碎片产物。
            xp: 0.5,
            id: `${id_prefix}ender_shard`
        },
        {
            input: '#forge:ores/amber',
            output: null, // 目标版本尚无已确认的琥珀碎片产物。
            xp: 0.5,
            id: `${id_prefix}amber_shard`
        },
        {
            input: '#forge:ores/netherite',
            output: 'minecraft:netherite_scrap',
            xp: 2.0,
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: 'farmersdelight:iron_knife',
            output: 'minecraft:iron_nugget',
            xp: 0.1,
            id: `${id_prefix}iron_nugget_from_iron_knife`
        },
        {
            input: 'farmersdelight:golden_knife',
            output: 'minecraft:gold_nugget',
            xp: 0.1,
            id: `${id_prefix}gold_nugget_from_gold_knife`
        },
        {
            input: '#forge:dusts/netherite',
            output: 'minecraft:netherite_ingot',
            xp: 0.5,
            id: `${id_prefix}netherite`
        },
        {
            input: 'aquaculture:tin_can',
            output: '7x mekanism:nugget_tin',
            xp: 0.7,
            id: 'aquaculture:tin_can_to_iron_nugget_from_blasting'
        },
        {
            input: '#forge:ores/aquamarine',
            output: 'astralsorcery:aquamarine',
            xp: 1.0,
            id: `${id_prefix}aquamarine`
        },
        {
            input: '#forge:dusts/hop_graphite',
            output: 'immersiveengineering:ingot_hop_graphite',
            xp: 0.5,
            id: 'immersiveengineering:ingot_hop_graphite_from_blasting'
        },
        {
            input: 'aquaculture:neptunium_helmet',
            output: '5x aquaculture:neptunium_nugget',
            xp: 5,
            id: `${id_prefix}neptunium_nugget_from_neptunium_helmet`
        },
        {
            input: 'aquaculture:neptunium_chestplate',
            output: '8x aquaculture:neptunium_nugget',
            xp: 8,
            id: `${id_prefix}neptunium_nugget_from_neptunium_chestplate`
        },
        {
            input: 'aquaculture:neptunium_leggings',
            output: '7x aquaculture:neptunium_nugget',
            xp: 7,
            id: `${id_prefix}neptunium_nugget_from_neptunium_leggings`
        },
        {
            input: 'aquaculture:neptunium_boots',
            output: '4x aquaculture:neptunium_nugget',
            xp: 4,
            id: `${id_prefix}neptunium_nugget_from_neptunium_boots`
        },
        {
            input: 'aquaculture:neptunium_pickaxe',
            output: '3x aquaculture:neptunium_nugget',
            xp: 3,
            id: `${id_prefix}neptunium_nugget_from_neptunium_pickaxe`
        },
        {
            input: 'aquaculture:neptunium_axe',
            output: '3x aquaculture:neptunium_nugget',
            xp: 3,
            id: `${id_prefix}neptunium_nugget_from_neptunium_axe`
        },
        {
            input: 'aquaculture:neptunium_shovel',
            output: 'aquaculture:neptunium_nugget',
            xp: 1,
            id: `${id_prefix}neptunium_nugget_from_neptunium_shovel`
        },
        {
            input: 'aquaculture:neptunium_sword',
            output: '2x aquaculture:neptunium_nugget',
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_sword`
        },
        {
            input: 'aquaculture:neptunium_hoe',
            output: '2x aquaculture:neptunium_nugget',
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_hoe`
        },
        {
            input: 'aquaculture:neptunium_fillet_knife',
            output: '2x aquaculture:neptunium_nugget',
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_knife`
        },
        {
            input: 'aquaculture:neptunium_fishing_rod',
            output: '2x aquaculture:neptunium_nugget',
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_fishing_rod`
        },
        {
            input: 'aquaculture:neptunium_bow',
            output: '3x aquaculture:neptunium_nugget',
            xp: 3,
            id: `${id_prefix}neptunium_nugget_from_neptunium_bow`
        },
        {
            input: 'atum:bone_ore',
            output: '2x atum:dusty_bone',
            xp: 0.7,
            id: `${id_prefix}atum_bone_ore`
        },
        {
            input: 'atum:khnumite_raw',
            output: '3x atum:khnumite',
            xp: 0.7,
            id: `${id_prefix}atum_khnumite_raw`
        },
        {
            input: '#pneumaticcraft:plastic_bricks',
            output: 'pneumaticcraft:plastic',
            xp: 0.7,
            id: 'pneumaticcraft:plastic_sheet_from_brick'
        }
    ];

    recipes.forEach((recipe) => {
        const input = typeof recipe.input === 'string' && recipe.input.startsWith('#forge:')
            && e6eRecipeIngredientExists(recipe.input.replace('#forge:', '#c:'))
            ? recipe.input.replace('#forge:', '#c:') : recipe.input;
        if (!e6eRecipeIngredientExists(input) || !e6eRecipeOutputExists(recipe.output)) return;
        const re = event.blasting(recipe.output, input).id(recipe.id);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }
    });
});
})();

(function () {
// 仅在目标端对应物品、标签和配方附属可用时注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:blasting", false, ["ars_nouveau:crush","create:crushing","create:milling","create:splashing","immersiveengineering:crusher","immersiveengineering:metal_press","mekanism:crushing","mekanism:enriching","minecraft:blasting","minecraft:crafting_shapeless","minecraft:smelting","occultism:crushing"]);
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

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/blasting/';
    const recipes = [
        {
            input: 'kubejs:coke_brick_blend',
            output: 'kubejs:coke_brick',
            xp: 0.5,
            id: `${id_prefix}coke_brick`
        },
        {
            input: 'kubejs:blast_brick_blend',
            output: 'kubejs:blast_brick',
            xp: 0.5,
            id: `${id_prefix}blast_brick`
        }
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
})();

(function () {
// 将原普通模式的材料统一配方加入专家版，并以 MBD2 热力压榨机替代热力压机。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:blasting", false, ["create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:smelting"]);
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
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "minecraft:blasting", false, ["botania:mana_infusion","create:pressing","e6e_mbd2:thermal_press","immersiveengineering:crusher","immersiveengineering:metal_press","interactio:item_fluid_transform","interactio:item_lightning","mekanism:smelting","minecraft:blasting","minecraft:crafting_shaped","minecraft:crafting_shapeless","naturesaura:altar","neovitae:ara_vitae_recipe"]);
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
