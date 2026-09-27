// 配方类型：create:mixing
// 中文名称：搅拌混合
// 用途：用于登记机械动力的搅拌混合配方。

(function () {
// 搅拌
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mixing/';
    var data = {
        recipes_unheated: [
            {
                inputs: ['#minecraft:planks', '#minecraft:planks', Fluid.of('immersiveengineering:creosote', 250)],
                output: 'immersiveengineering:treated_wood_horizontal',
                outputCount: 2,
                id: `${id_prefix}treated_wood_horizontal`
            },
            {
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Fluid.of('immersiveengineering:concrete', 500),
                id: `${id_prefix}concrete`
            },
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: 'immersivepetroleum:asphalt',
                outputCount: 12,
                id: `${id_prefix}asphalt_from_sand`
            },
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 500)
                ],
                output: 'immersivepetroleum:asphalt',
                outputCount: 16,
                id: `${id_prefix}asphalt_from_slag`
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:bulbis_sprouts'],
                output: 'byg:bulbis_phycelium',
                id: `${id_prefix}bulbis_phycelium`
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:imparius_vine'],
                output: 'byg:imparius_phylium',
                id: `${id_prefix}imparius_phylium`
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:shulkren_moss_blanket'],
                output: 'byg:shulkren_phylium',
                id: `${id_prefix}shulkren_phylium`
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:nightshade_sprouts'],
                output: 'byg:nightshade_phylium',
                id: `${id_prefix}nightshade_phylium`
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:ivis_sprout'],
                output: 'byg:ivis_phylium',
                id: `${id_prefix}ivis_phylium`
            },
            {
                inputs: ['byg:ether_soil', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: 'byg:ether_phylium',
                id: `${id_prefix}ether_phylium`
            },
            {
                inputs: ['minecraft:dirt', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: 'byg:ether_soil',
                id: `${id_prefix}ether_soil`
            },
            {
                inputs: ['byg:ether_stone', 'minecraft:bone_meal', 'byg:vermilion_sculk_growth'],
                output: 'byg:vermilion_sculk',
                id: `${id_prefix}vermilion_sculk`
            },
            {
                inputs: ['#forge:dyes/red', '#forge:dyes/green'],
                output: 'minecraft:brown_dye',
                outputCount: 2,
                id: `${id_prefix}brown_dye_from_red_green`
            },
            {
                inputs: ['#forge:dyes/blue', '#forge:dyes/yellow'],
                output: 'minecraft:green_dye',
                outputCount: 2,
                id: `${id_prefix}green_dye_from_blue_yellow`
            },
            {
                inputs: ['#forge:bowls', '#forge:crops/tomato', '#forge:crops/tomato', '#forge:milk/milk_bottle'],
                output: 'simplefarming:tomato_soup',
                id: `${id_prefix}tomato_soup`
            },
            {
                inputs: ['farmersdelight:tomato_sauce', '#forge:milk/milk_bottle'],
                output: 'simplefarming:tomato_soup',
                id: `${id_prefix}tomato_soup_from_sauce`
            }
        ],
        recipes_heated: [
            {
                inputs: [
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/tin'
                ],
                output: 'emendatusenigmatica:bronze_crushed',
                outputCount: 4,
                id: `${id_prefix}bronze_crushed`
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/tin'],
                output: 'emendatusenigmatica:bronze_ingot',
                outputCount: 4,
                id: `${id_prefix}bronze_ingot`
            },
            {
                inputs: ['#create:crushed_ores/copper', '#create:crushed_ores/nickel'],
                output: 'emendatusenigmatica:constantan_crushed',
                outputCount: 2,
                id: `${id_prefix}constantan_crushed`
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/nickel'],
                output: 'emendatusenigmatica:constantan_ingot',
                outputCount: 2,
                id: `${id_prefix}constantan_ingot`
            },
            {
                inputs: ['#create:crushed_ores/gold', '#create:crushed_ores/silver'],
                output: 'emendatusenigmatica:electrum_crushed',
                outputCount: 2,
                id: `${id_prefix}electrum_crushed`
            },
            {
                inputs: ['#forge:ingots/gold', '#forge:ingots/silver'],
                output: 'emendatusenigmatica:electrum_ingot',
                outputCount: 2,
                id: `${id_prefix}electrum_ingot`
            },
            {
                inputs: ['#create:crushed_ores/iron', '#create:crushed_ores/iron', '#create:crushed_ores/nickel'],
                output: 'emendatusenigmatica:invar_crushed',
                outputCount: 3,
                id: `${id_prefix}invar_crushed`
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/nickel'],
                output: 'emendatusenigmatica:invar_ingot',
                outputCount: 3,
                id: `${id_prefix}invar_ingot`
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                output: 'eidolon_repraised:pewter_ingot',
                outputCount: 2,
                id: `${id_prefix}pewter_ingot`
            },
            {
                inputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'],
                output: 'betterendforge:terminite_ingot',
                id: `${id_prefix}terminite_ingot_from_thallasium`
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
                output: 'tconstruct:pig_iron_ingot',
                outputCount: 2,
                id: `${id_prefix}pig_iron_ingot`
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/gold'],
                output: 'tconstruct:rose_gold_ingot',
                outputCount: 4,
                id: `${id_prefix}rose_gold_ingot`
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:glass'],
                output: 'tconstruct:tinkers_bronze_ingot',
                outputCount: 4,
                id: `${id_prefix}tinkers_bronze_ingot`
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
                output: 'tconstruct:slimesteel_ingot',
                outputCount: 2,
                id: `${id_prefix}slimesteel_ingot`
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    '#forge:dusts/coal_coke',
                    '#create:crushed_ores/iron',
                    '#create:crushed_ores/iron',
                    '#create:crushed_ores/iron',
                    '#create:crushed_ores/iron'
                ],
                output: 'emendatusenigmatica:steel_crushed',
                outputCount: 4,
                id: `${id_prefix}steel_crushed`
            },
            {
                inputs: [
                    '#forge:dusts/coal_coke',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron'
                ],
                output: 'emendatusenigmatica:steel_ingot',
                outputCount: 4,
                id: `${id_prefix}steel_ingot`
            },
            {
                inputs: [
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/silver',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone'
                ],
                output: 'emendatusenigmatica:signalum_crushed',
                outputCount: 4,
                id: `${id_prefix}signalum_crushed`
            },
            {
                inputs: [
                    '#forge:ingots/copper',
                    '#forge:ingots/copper',
                    '#forge:ingots/copper',
                    '#forge:ingots/silver',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone'
                ],
                output: 'emendatusenigmatica:signalum_ingot',
                outputCount: 4,
                id: `${id_prefix}signalum_ingot`
            },
            {
                inputs: [
                    '#create:crushed_ores/tin',
                    '#create:crushed_ores/tin',
                    '#create:crushed_ores/tin',
                    '#create:crushed_ores/silver',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone'
                ],
                output: 'emendatusenigmatica:lumium_crushed',
                outputCount: 4,
                id: `${id_prefix}lumium_crushed`
            },
            {
                inputs: [
                    '#forge:ingots/tin',
                    '#forge:ingots/tin',
                    '#forge:ingots/tin',
                    '#forge:ingots/silver',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone'
                ],
                output: 'emendatusenigmatica:lumium_ingot',
                outputCount: 4,
                id: `${id_prefix}lumium_ingot`
            },
            {
                inputs: [
                    '#create:crushed_ores/lead',
                    '#create:crushed_ores/lead',
                    '#create:crushed_ores/lead',
                    '#forge:dusts/diamond',
                    '#forge:ender_pearls',
                    '#forge:ender_pearls'
                ],
                output: 'emendatusenigmatica:enderium_crushed',
                outputCount: 2,
                id: `${id_prefix}enderium_crushed`
            },
            {
                inputs: [
                    '#forge:ingots/lead',
                    '#forge:ingots/lead',
                    '#forge:ingots/lead',
                    '#forge:dusts/diamond',
                    '#forge:ender_pearls',
                    '#forge:ender_pearls'
                ],
                output: 'emendatusenigmatica:enderium_ingot',
                outputCount: 2,
                id: `${id_prefix}enderium_ingot`
            },
            {
                inputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'],
                output: 'betterendforge:aeternium_ingot',
                id: `${id_prefix}aeternium_ingot`
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/cobalt', '#forge:obsidian'],
                output: 'tconstruct:hepatizon_ingot',
                outputCount: 4,
                id: `${id_prefix}hepatizon_ingot`
            },
            {
                inputs: [
                    '#forge:ingots/cobalt',
                    '#forge:ingots/cobalt',
                    '#forge:ingots/cobalt',
                    '#forge:ingots/netherite_scrap'
                ],
                output: 'tconstruct:manyullyn_ingot',
                outputCount: 4,
                id: `${id_prefix}manyullyn_ingot`
            },
            {
                inputs: ['#forge:ingots/gold', '#forge:ingots/cobalt', 'minecraft:magma_cream'],
                output: 'tconstruct:queens_slime_ingot',
                outputCount: 2,
                id: `${id_prefix}queens_slime_ingot`
            }
        ]
    };

    if (e6ePortedRecipeModLoaded('thermal')) {
        data.recipes_heated.push({
            inputs: [Fluid.of('thermal:sap', 500)],
            output: Fluid.of('thermal:syrup', 25),
            id: `${id_prefix}syrup`
        });
    }

    data.recipes_unheated.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        const output = recipe.outputCount ? Item.of(recipe.output, recipe.outputCount) : recipe.output;
        event.recipes.create.mixing(output, recipe.inputs).id(recipe.id);
    });
    data.recipes_heated.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        const output = recipe.outputCount ? Item.of(recipe.output, recipe.outputCount) : recipe.output;
        event.recipes.create.mixing(output, recipe.inputs).id(recipe.id).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        const output = recipe.outputCount ? Item.of(recipe.output, recipe.outputCount) : recipe.output;
        event.recipes.create.mixing(output, recipe.inputs).id(recipe.id).superheated();
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            heated: true,
            inputs: ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: 'undergarden:froststeel_ingot',
            outputCount: 3,
            id: `${id_prefix}froststeel_ingot`
        },
        {
            heated: true,
            inputs: [
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/quartz',
                '#forge:dusts/quartz',
                'atum:ectoplasm',
                '#forge:tar'
            ],
            output: 'kubejs:coarse_lapis_lazuli_compound',
            id: `${id_prefix}coarse_lapis_lazuli_compound`
        },
        {
            superheated: true,
            inputs: [
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder',
                '#forge:ingots/infused_iron',
                'create:polished_rose_quartz',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:nocturnal_powder',
                '#forge:ingots/manasteel'
            ],
            output: 'create:chromatic_compound',
            outputCount: 2,
            id: 'create:mixing/chromatic_compound'
        },
        {
            superheated: true,
            inputs: [
                '#forge:sand/colorless',
                '#forge:sand/colorless',
                '#forge:gems/silicon',
                '#forge:gems/silicon',
                '#forge:gems/silicon',
                'thermal:tar',
                'thermal:tar'
            ],
            output: 'powah:dielectric_paste',
            outputCount: 24,
            id: 'powah:crafting/dielectric_paste'
        },
        {
            inputs: [
                'minecraft:clay_ball',
                'minecraft:clay_ball',
                'create:cinder_flour',
                'kubejs:basalt_powder',
                'kubejs:basalt_powder',
                Fluid.of('minecraft:water', 100)
            ],
            output: 'kubejs:coke_brick_blend',
            outputCount: 4,
            id: `${id_prefix}coke_brick_blend`
        },
        {
            inputs: [
                'atum:marl',
                '#forge:dusts/coal_coke',
                '#forge:dusts/coal_coke',
                '#forge:dusts/coal_coke',
                'minecraft:blaze_powder',
                'minecraft:gunpowder',
                'minecraft:gunpowder',
                Fluid.of('minecraft:water', 100)
            ],
            output: 'kubejs:blast_brick_blend',
            outputCount: 4,
            id: `${id_prefix}blast_brick_blend`
        },
        {
            inputs: [
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'ars_nouveau:mana_berry'
            ],
            output: 'ars_nouveau:source_berry_roll',
            outputCount: 3,
            id: `${id_prefix}source_berry_roll`
        },
        {
            heated: true,
            inputs: [
                'minecraft:spider_eye',
                'minecraft:spider_eye',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:gunpowder',
                'minecraft:gunpowder'
            ],
            output: 'kubejs:monster_mash',
            outputCount: 2,
            id: `${id_prefix}monster_mash`
        }
    ];

    if (e6ePortedFluidExists('tconstruct:blazing_blood')) {
        recipes.push({
            inputs: [
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'undergarden:ditchbulb',
                Fluid.of('tconstruct:blazing_blood', 500)
            ],
            output: 'ars_nouveau:blaze_fiber',
            outputCount: 2,
            id: 'ars_nouveau:blaze_fiber'
        });
    }

    if (e6ePortedFluidExists('integrateddynamics:liquid_chorus')) {
        recipes.push({
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                '#forge:fruits/shadow_berry',
                Fluid.of('integrateddynamics:liquid_chorus', 500)
            ],
            output: 'ars_nouveau:end_fiber',
            outputCount: 2,
            id: 'ars_nouveau:end_fiber'
        });
    }

    recipes.forEach((recipe) => {
        if (!e6eCreateCanRegisterRecipe(recipe.output, recipe.inputs)) return;
        const output = recipe.outputCount ? Item.of(recipe.output, recipe.outputCount) : recipe.output;
        const re = event.recipes.create.mixing(output, recipe.inputs).id(recipe.id);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            // 未加热
        }
    });
});
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:mixing", false, ["betterendforge:alloying","create:mixing","e6e_mbd2:thermal_induction_smelter","immersiveengineering:alloy","immersiveengineering:arc_furnace"]);
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/alloying/';

    const recipes = [
        {
            inputs: ['#forge:ingots/compressed_iron', '#forge:gems/quartz'],
            output: Item.of('refinedstorage:quartz_enriched_iron', 2)
        }
    ];
    const IEOutput = Java.loadClass('com.chen1335.immersiveEngineeringJs.api.crafting.TagOutputJS');
    const IEIngredient = Java.loadClass('com.chen1335.immersiveEngineeringJs.api.crafting.IngredientWithSizeJS');
    const TagKey = Java.loadClass('net.minecraft.tags.TagKey');
    const Registries = Java.loadClass('net.minecraft.core.registries.Registries');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

    const ieIngredient = (input) => {
        const ingredient = `${input}`;
        if (ingredient.startsWith('#')) {
            const tag = TagKey.create(Registries.ITEM, ResourceLocation.parse(ingredient.substring(1)));
            return IEIngredient.ofTag(tag);
        }
        return IEIngredient.ofItemStack(Item.of(ingredient));
    };

    const recipetypes_alloying = (event, recipe) => {
        if (!recipe.smelttime) {
            recipe.smelttime = 200;
        }
        if (!recipe.experience) {
            recipe.experience = 0.0;
        }

        // 此 1.21.1 实例已移除 BetterEnd；仅在它存在时注册对应配方。
        // 中文：当前 1.21.1 实例未安装 BetterEnd；仅在该模组加载时注册对应配方。
        if (e6ePortedRecipeModLoaded('betterendforge')) {
            fallback_id(
                event.custom({
                    type: 'betterendforge:alloying',
                    ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
                    result: recipe.output,
                    experience: recipe.experience,
                    smelttime: recipe.smelttime
                }),
                id_prefix
            );
        }

        // create
        fallback_id(event.recipes.create.mixing(recipe.output, recipe.inputs).heated(), id_prefix);

        // immersiveengineering
        const ieOutput = IEOutput.ofItemStack(recipe.output);
        const ieInputs = recipe.inputs.map(ieIngredient);
        fallback_id(
            event.recipes.immersiveengineering.alloy(ieOutput, ieInputs[0], ieInputs[1]),
            id_prefix
        );
        fallback_id(
            event.recipes.immersiveengineering.arc_furnace(
                [ieOutput],
                ieInputs[0],
                recipe.smelttime,
                recipe.energy || 51200,
                [ieInputs[1]]
            ),
            id_prefix
        );

        // MBD2 热力感应炉
        if (e6ePortedRecipeModLoaded('e6e_mbd2') && recipe.inputs.every(e6eRecipeIngredientExists)
            && e6eRecipeOutputExists(recipe.output)) {
            const builder = event.recipes.e6e_mbd2.thermal_induction_smelter;
            if (typeof builder === 'function') {
                builder()
                    .id('enigmatica:expert/thermal/induction_smelter/quartz_enriched_iron')
                    .duration(recipe.smelttime)
                    .inputItems(recipe.inputs[0])
                    .inputItems(recipe.inputs[1])
                    .outputItems(recipe.output)
                    .inputFE(recipe.energy || 51200);
            }
        }
    };

    recipes.forEach((recipe) => {
        recipetypes_alloying(event, recipe);
    });
});
})();

(function () {
// Botania/Interactio 缺失时，用 Create、Lychee 与 NeoVitae 补齐 E6E 的自定义矿物处理链。
// 保留四阶段加工次序；只有目标端确实注册了对应矿物及输入标签时才添加配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "create:mixing", false, ["create:crushing","create:mixing","lychee:lightning_channeling","neovitae:ara_vitae_recipe"]);
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
// 将原普通模式的机械动力搅拌配方一并纳入专家版。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            inputs: ['#forge:storage_blocks/coal'],
            output: 'emendatusenigmatica:coke_gem',
            outputCount: 9,
            heated: true,
            id: 'enigmatica:normal/create/mixing/coal_coke'
        },
        {
            inputs: ['#forge:clay', '#forge:gravel', '#forge:sand', '#forge:sand'],
            inputFluid: 'minecraft:water',
            inputFluidAmount: 500,
            outputFluid: 'immersiveengineering:concrete',
            outputFluidAmount: 500,
            id: 'enigmatica:normal/create/mixing/concrete'
        },
        {
            inputs: ['#minecraft:coals', '#minecraft:coals', '#forge:clay'],
            inputFluid: 'minecraft:lava',
            inputFluidAmount: 500,
            output: 'powah:dielectric_paste',
            outputCount: 16,
            id: 'enigmatica:normal/create/mixing/dielectric_paste'
        },
        {
            inputs: ['industrialforegoing:dryrubber'],
            inputFluid: 'emendatusenigmatica:molten_sulfur',
            inputFluidAmount: 72,
            output: 'thermal:cured_rubber',
            superheated: true,
            id: 'enigmatica:normal/create/mixing/cured_rubber'
        },
        {
            inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
            output: 'betterendforge:terminite_ingot',
            id: 'enigmatica:normal/create/mixing/terminite_ingot_from_iron'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.inputFluid && !e6ePortedFluidExists(recipe.inputFluid)) return;
        if (recipe.outputFluid && !e6ePortedFluidExists(recipe.outputFluid)) return;
        if (recipe.output && !e6ePortedItemExists(recipe.output)) return;
        if (!recipe.inputs.every(e6eRecipeIngredientExists)) return;

        const inputs = recipe.inputs.slice();
        if (recipe.inputFluid) inputs.push(Fluid.of(recipe.inputFluid, recipe.inputFluidAmount));
        const output = recipe.outputFluid
            ? Fluid.of(recipe.outputFluid, recipe.outputFluidAmount)
            : `${recipe.outputCount || 1}x ${recipe.output}`;
        const created = event.recipes.create.mixing(output, inputs).id(recipe.id);
        if (recipe.heated) created.heated();
        if (recipe.superheated) created.superheated();
    });
});
})();
