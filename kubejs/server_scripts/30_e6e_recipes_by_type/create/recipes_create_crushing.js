// 配方类型：create:crushing
// 中文名称：粉碎加工
// 用途：用于登记机械动力的粉碎加工配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/crushing/';
    const recipes = [
        {
            outputs: [
                { item: 'buildinggadgets:construction_paste', count: 3 },
                { item: 'buildinggadgets:construction_paste', chance: 0.75 },
                { item: 'buildinggadgets:construction_paste', chance: 0.5 }
            ],
            input: 'buildinggadgets:construction_block_dense',
            id: `${id_prefix}construction_paste`
        },
        {
            outputs: [
                { item: 'betterendforge:crystal_shards', count: 3 },
                { item: 'betterendforge:crystal_shards', chance: 0.5 }
            ],
            input: '#forge:storage_blocks/aurora',
            id: `${id_prefix}crystal_shards`
        },
        {
            outputs: [
                { item: 'byg:quartzite_sand', count: 2 },
                { item: 'byg:quartzite_sand', chance: 0.5 }
            ],
            input: 'byg:raw_quartz_block',
            id: `${id_prefix}quartzite_sand`
        },
        {
            outputs: [
                { item: 'minecraft:sand' },
                { item: 'minecraft:quartz', chance: 0.1 }
            ],
            input: 'byg:quartzite_sand',
            id: `${id_prefix}quartz`
        },
        {
            outputs: [
                { item: 'atum:emmer_flour' },
                { item: 'atum:emmer_flour', count: 2, chance: 0.25 },
                { item: 'atum:emmer_seeds', chance: 0.25 }
            ],
            input: 'atum:emmer',
            id: `${id_prefix}emmer_flour`
        },
        {
            outputs: [
                { item: 'minecraft:iron_ingot', count: 2 },
                { item: 'minecraft:leather', count: 2, chance: 0.5 },
                { item: 'minecraft:iron_ingot', count: 2, chance: 0.5 },
                { item: 'minecraft:string', count: 2, chance: 0.25 },
                { item: 'minecraft:iron_nugget', count: 8, chance: 0.25 }
            ],
            input: 'atum:camel_iron_armor',
            id: `${id_prefix}iron_from_camel_iron_armor`
        },
        {
            outputs: [
                { item: 'minecraft:gold_ingot', count: 2 },
                { item: 'minecraft:leather', count: 2, chance: 0.5 },
                { item: 'minecraft:gold_ingot', count: 2, chance: 0.5 },
                { item: 'minecraft:string', count: 2, chance: 0.25 },
                { item: 'minecraft:gold_nugget', count: 8, chance: 0.25 }
            ],
            input: 'atum:camel_gold_armor',
            id: `${id_prefix}gold_from_camel_gold_armor`
        },
        {
            outputs: [
                { item: 'minecraft:diamond' },
                { item: 'minecraft:leather', count: 2, chance: 0.5 },
                { item: 'minecraft:diamond', count: 3, chance: 0.1 },
                { item: 'minecraft:string', count: 2, chance: 0.25 }
            ],
            input: 'atum:camel_diamond_armor',
            id: `${id_prefix}diamond_from_camel_diamond_armor`
        },
        {
            outputs: [
                { item: 'minecraft:iron_ingot', count: 2 },
                { item: 'minecraft:leather', chance: 0.5 },
                { item: 'minecraft:iron_ingot', chance: 0.5 },
                { item: 'minecraft:string', count: 2, chance: 0.25 },
                { item: 'minecraft:iron_nugget', count: 4, chance: 0.25 }
            ],
            input: 'atum:desert_wolf_iron_armor',
            id: `${id_prefix}iron_from_desert_wolf_iron_armor`
        },
        {
            outputs: [
                { item: 'minecraft:gold_ingot', count: 2 },
                { item: 'minecraft:leather', count: 2, chance: 0.5 },
                { item: 'minecraft:gold_ingot', count: 2, chance: 0.5 },
                { item: 'minecraft:string', count: 2, chance: 0.25 },
                { item: 'minecraft:gold_nugget', count: 8, chance: 0.25 }
            ],
            input: 'atum:desert_wolf_gold_armor',
            id: `${id_prefix}gold_from_desert_wolf_gold_armor`
        },
        {
            outputs: [
                { item: 'minecraft:diamond' },
                { item: 'minecraft:leather', count: 2, chance: 0.5 },
                { item: 'minecraft:diamond', count: 3, chance: 0.1 },
                { item: 'minecraft:string', count: 2, chance: 0.25 }
            ],
            input: 'atum:desert_wolf_diamond_armor',
            id: `${id_prefix}diamond_from_desert_wolf_diamond_armor`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeIngredientExists(recipe.input)) return;
        if (!recipe.outputs.every((output) => e6ePortedItemExists(output.item))) return;

        const outputs = recipe.outputs.map((output) =>
            CreateItem.of(Item.of(output.item, output.count || 1), output.chance == null ? 1 : output.chance)
        );
        event.recipes.create.crushing(outputs, recipe.input).id(recipe.id);
    });
});
})();

(function () {
// 仅在目标端对应物品、标签和配方附属可用时注册。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:crushing", false, ["ars_nouveau:crush","create:crushing","create:milling","create:splashing","immersiveengineering:crusher","immersiveengineering:metal_press","mekanism:crushing","mekanism:enriching","minecraft:blasting","minecraft:crafting_shapeless","minecraft:smelting","occultism:crushing"]);
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

    const id_prefix = 'enigmatica:expert/create/crushing/';
    const recipes = [];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
})();

(function () {
// Botania/Interactio 缺失时，用 Create、Lychee 与 NeoVitae 补齐 E6E 的自定义矿物处理链。
// 保留四阶段加工次序；只有目标端确实注册了对应矿物及输入标签时才添加配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:crushing", true, ["create:crushing","create:mixing","lychee:lightning_channeling","neovitae:ara_vitae_recipe"]);
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

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:crushing", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
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
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:crushing", false, ["bloodmagic:altar","bloodmagic:arc","botania:mana_infusion","botania:terra_plate","create:blockzapper_upgrade","create:crushing","minecraft:crafting_shaped","minecraft:crafting_shapeless","minecraft:stonecutting","mythicbotany:infusion","naturesaura:altar","occultism:crushing","occultism:spirit_trade","resourcefulbees:hive_upgrade_recipe"]);
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
