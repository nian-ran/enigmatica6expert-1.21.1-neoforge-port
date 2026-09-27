// 配方类型：immersiveengineering:arc_furnace
// 中文名称：电弧炉熔炼
// 用途：用于登记沉浸工程的电弧炉熔炼配方。

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('immersiveengineering')) return;
    const id_prefix = 'enigmatica:base/immersiveengineering/arc_furnace/';
    const recipes = [
        {
            input1: '#forge:ingots/copper',
            secondaries: ['#forge:ingots/zinc'],
            outputs: ['2x create:brass_ingot'],
            id: 'immersiveengineering:arcfurnace/alloy_brass'
        },
        {
            input1: '#forge:ingots/iron',
            secondaries: ['#forge:ingots/lead'],
            outputs: ['2x eidolon_repraised:pewter_ingot'],
            id: `${id_prefix}pewter_ingot`
        },
        {
            input1: '3x #forge:ingots/copper',
            secondaries: ['#forge:glass'],
            outputs: ['3x tconstruct:tinkers_bronze_ingot'],
            id: `${id_prefix}tinkers_bronze_ingot`
        },
        {
            input1: '#forge:ingots/iron',
            secondaries: ['tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
            outputs: ['2x tconstruct:slimesteel_ingot'],
            id: `${id_prefix}slimesteel_ingot`
        },
        {
            input1: '#forge:ingots/iron',
            secondaries: ['tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
            outputs: ['2x tconstruct:pig_iron_ingot'],
            id: `${id_prefix}pig_iron_ingot`
        },
        {
            input1: '2x #forge:ingots/copper',
            secondaries: ['#forge:ingots/cobalt', '4x #forge:dusts/quartz'],
            outputs: ['2x tconstruct:hepatizon_ingot'],
            id: `${id_prefix}hepatizon_ingot`
        },
        {
            input1: '1x #forge:ingots/gold',
            secondaries: ['#forge:ingots/cobalt', 'minecraft:magma_cream'],
            outputs: ['2x tconstruct:queens_slime_ingot'],
            id: `${id_prefix}queens_slime_ingot`
        },
        {
            input1: '1x #forge:sand',
            secondaries: ['#forge:obsidian', '#forge:gems/quartz'],
            outputs: ['2x thermal:obsidian_glass'],
            id: `${id_prefix}obsidian_glass`
        },
        {
            input1: '1x #forge:ingots/enderium',
            secondaries: ['2x thermal:obsidian_glass'],
            outputs: ['2x thermal:enderium_glass'],
            id: `${id_prefix}enderium_glass`
        },
        {
            input1: '1x #forge:ingots/signalum',
            secondaries: ['2x thermal:obsidian_glass'],
            outputs: ['2x thermal:signalum_glass'],
            id: `${id_prefix}signalum_glass`
        },
        {
            input1: '1x #forge:ingots/lumium',
            secondaries: ['2x thermal:obsidian_glass'],
            outputs: ['2x thermal:lumium_glass'],
            id: `${id_prefix}lumium_glass`
        },
        {
            input1: '1x minecraft:andesite',
            secondaries: [['1x #forge:nuggets/zinc', '1x #forge:nuggets/iron']],
            outputs: ['create:andesite_alloy'],
            id: `${id_prefix}andesite_alloy`
        },
        {
            input1: '3x #forge:ingots/lead',
            secondaries: ['2x #forge:dusts/ender', '1x #forge:dusts/diamond'],
            outputs: ['2x emendatusenigmatica:enderium_ingot'],
            id: `${id_prefix}enderium_ingot`
        },
        {
            input1: '1x #forge:ingots/silver',
            secondaries: ['3x #forge:ingots/tin', '2x #forge:dusts/glowstone'],
            outputs: ['4x emendatusenigmatica:lumium_ingot'],
            id: `${id_prefix}lumium_ingot`
        },
        {
            input1: '1x #forge:ingots/silver',
            secondaries: ['3x #forge:ingots/copper', '4x #forge:dusts/redstone'],
            outputs: ['4x emendatusenigmatica:signalum_ingot'],
            id: `${id_prefix}signalum_ingot`
        },
        {
            input1: '2x #forge:ingots/gold',
            secondaries: ['4x #forge:ingots/netherite_scrap'],
            outputs: ['1x minecraft:netherite_ingot'],
            id: `${id_prefix}netherite_ingot`
        }
    ];

    const resolveIngredient = (ingredient) => {
        if (Array.isArray(ingredient)) return ingredient.map(resolveIngredient);
        if (typeof ingredient !== 'string') return ingredient;
        const match = /^(\d+\s*x\s*)?#forge:(.+)$/i.exec(ingredient.trim());
        if (!match) return ingredient;
        const commonTag = `${match[1] || ''}#c:${match[2]}`;
        return e6eRecipeIngredientExists(commonTag) ? commonTag : ingredient;
    };

    recipes.forEach((recipe) => {
        const input1 = resolveIngredient(recipe.input1);
        const secondaries = recipe.secondaries.map(resolveIngredient);
        if (!e6eRecipeIngredientExists(input1)) return;
        if (!secondaries.every(e6eRecipeIngredientExists)) return;
        if (!recipe.outputs.length || !recipe.outputs.every(e6eRecipeOutputExists)) return;

        const outputs = recipe.outputs.map((output) => Item.of(output));
        event.recipes.immersiveengineering.arc_furnace(outputs, input1, secondaries).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "immersiveengineering:arc_furnace", false, ["betterendforge:alloying","create:mixing","e6e_mbd2:thermal_induction_smelter","immersiveengineering:alloy","immersiveengineering:arc_furnace"]);
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
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    if (!e6ePortedRecipeModLoaded('immersiveengineering')) return;
    const id_prefix = 'enigmatica:expert/immersiveengineering/arc_furnace/';
    var data = {
        recipes: [
            {
                input1: '3x #forge:ingots/cobalt',
                secondaries: ['thermal:blizz_powder'],
                outputs: ['3x undergarden:froststeel_ingot'],
                id: `${id_prefix}froststeel_ingot`
            },
            {
                input1: '3x #forge:ingots/aluminum',
                secondaries: ['4x #forge:dusts/lithium', '#forge:ingots/copper'],
                outputs: ['4x mekanism:alloy_reinforced'],
                id: `${id_prefix}alloy_reinforced`
            },
            {
                input1: '6x ars_nouveau:warding_stone',
                secondaries: ['immersiveengineering:coil_mv', '3x fluxnetworks:flux_dust'],
                outputs: ['6x compactmachines:wall'],
                id: `${id_prefix}cm_wall`
            },
            {
                input1: '8x industrialforegoing:dryrubber',
                secondaries: [['#forge:dusts/coal_petcoke', '#forge:dusts/coal_coke']],
                outputs: ['8x industrialforegoing:plastic', '8x immersiveengineering:slag'],
                id: `${id_prefix}plastic`
            },
            {
                input1: 'powah:energizing_rod_basic',
                secondaries: ['mekanismgenerators:laser_focus_matrix', '4x modularrouters:blank_upgrade'],
                outputs: ['4x modularrouters:energy_upgrade'],
                time: 100 * 4,
                energy: 51200 * 4,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_basic`
            },
            {
                input1: 'powah:energizing_rod_hardened',
                secondaries: ['mekanismgenerators:laser_focus_matrix', '10x modularrouters:blank_upgrade'],
                outputs: ['10x modularrouters:energy_upgrade'],
                time: 100 * 10,
                energy: 51200 * 10,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_hardened`
            },
            {
                input1: 'powah:energizing_rod_blazing',
                secondaries: ['mekanismgenerators:laser_focus_matrix', '34x modularrouters:blank_upgrade'],
                outputs: ['34x modularrouters:energy_upgrade'],
                time: 100 * 34,
                energy: 51200 * 34,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_blazing`
            },
            {
                input1: 'powah:energizing_rod_niotic',
                secondaries: ['mekanismgenerators:laser_focus_matrix', '64x modularrouters:blank_upgrade'],
                outputs: ['64x modularrouters:energy_upgrade'],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_niotic`
            },
            {
                input1: '3x modularrouters:blank_module',
                secondaries: ['3x prettypipes:high_retrieval_module'],
                outputs: ['3x modularrouters:puller_module_1'],
                id: `${id_prefix}puller_module_1`
            },
            {
                input1: '3x modularrouters:blank_module',
                secondaries: ['3x prettypipes:high_extraction_module'],
                outputs: ['3x modularrouters:sender_module_1'],
                id: `${id_prefix}sender_module_1`
            },
            {
                input1: '3x modularrouters:blank_module',
                secondaries: ['3x ppfluids:high_fluid_retrieval_module'],
                outputs: ['3x modularrouters:fluid_module'],
                id: `${id_prefix}fluid_module`
            },
            {
                input1: '3x modularrouters:blank_module',
                secondaries: ['thermal:charge_bench'],
                outputs: ['3x modularrouters:energy_output_module'],
                id: `${id_prefix}energy_output_module`
            },
            {
                input1: 'thermal:tar',
                secondaries: [
                    'atum:ectoplasm',
                    '2x #forge:dusts/quartz',
                    '5x #forge:dusts/lapis'
                ],
                outputs: ['kubejs:smoldering_lapis_lazuli_compound'],
                time: 400,
                energy: 204800,
                id: `${id_prefix}smoldering_lapis_lazuli_compound`
            },
            {
                input1: 'create:honeyed_apple',
                secondaries: ['4x #forge:storage_blocks/arcane_gold'],
                outputs: ['minecraft:enchanted_golden_apple'],
                id: `${id_prefix}enchanted_golden_apple`
            },
            {
                input1: 'mekanismtools:lapis_lazuli_helmet[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:armor_head_book'],
                id: `${id_prefix}armor_head_book`
            },
            {
                input1: 'mekanismtools:lapis_lazuli_chestplate[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:armor_chest_book'],
                id: `${id_prefix}armor_chest_book`
            },
            {
                input1: 'mekanismtools:lapis_lazuli_leggings[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:armor_legs_book'],
                id: `${id_prefix}armor_legs_book`
            },
            {
                input1: 'mekanismtools:lapis_lazuli_boots[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:armor_feet_book'],
                id: `${id_prefix}armor_feet_book`
            },
            {
                input1: 'botania:livingwood_bow[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:bow_book'],
                id: `${id_prefix}bow_book`
            },
            {
                input1: 'aquaculture:gold_fishing_rod[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:fishing_rod_book'],
                id: `${id_prefix}fishing_rod_book`
            },
            {
                input1: 'mekanismtools:lapis_lazuli_pickaxe[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:digger_book'],
                id: `${id_prefix}digger_book`
            },
            {
                input1: 'mekanismtools:lapis_lazuli_sword[minecraft:damage=0]',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:weapon_book'],
                id: `${id_prefix}weapon_book`
            },
            {
                input1: 'tconstruct:ender_slime_crystal',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:scrap_tome'],
                id: `${id_prefix}scrap_tome`
            },
            {
                input1: 'tconstruct:sky_slime_crystal',
                secondaries: ['16x minecraft:book'],
                outputs: ['16x apotheosis:null_book'],
                id: `${id_prefix}null_book`
            },
            {
                input1: 'thermal:rf_coil',
                secondaries: ['8x minecraft:book'],
                outputs: ['8x pedestals:bookmagnet'],
                id: `${id_prefix}bookmagnet`
            },
            {
                input1: '#forge:ingots/invar',
                secondaries: ['8x minecraft:book'],
                outputs: ['8x pedestals:bookarea'],
                id: `${id_prefix}bookarea`
            },
            {
                input1: '#forge:ingots/lumium',
                secondaries: ['8x minecraft:book'],
                outputs: ['8x pedestals:bookrange'],
                id: `${id_prefix}bookrange`
            },
            {
                input1: '#forge:ingots/terminite',
                secondaries: ['8x minecraft:book'],
                outputs: ['8x pedestals:bookspeed'],
                id: `${id_prefix}bookspeed`
            },
            {
                input1: '#forge:ingots/infused_iron',
                secondaries: ['8x minecraft:book'],
                outputs: ['8x pedestals:bookcapacity'],
                id: `${id_prefix}bookcapacity`
            },
            {
                input1: '#forge:ingots/refined_radiance',
                secondaries: ['8x minecraft:book'],
                outputs: ['8x pedestals:bookadvanced'],
                id: `${id_prefix}bookadvanced`
            },
            {
                input1: 'quark:white_crystal_cluster',
                secondaries: ['4x glassential:glass_ghostly'],
                outputs: ['4x atum:crystal_glass'],
                id: `${id_prefix}crystal_glass`
            },
            {
                input1: 'quark:white_crystal',
                secondaries: ['3x glassential:glass_ghostly'],
                outputs: ['4x atum:crystal_glass'],
                id: `${id_prefix}crystal_glass_2`
            },
            {
                input1: '12x #forge:ingots/refined_radiance',
                secondaries: ['astralsorcery:shifting_star', 'botania:laputa_shard'],
                outputs: ['kubejs:laputian_ingot'],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}laputian_ingot`
            }
        ]
    };

    const missingModItemReplacements = {
        'astralsorcery:shifting_star': 'astralsorcery:resonating_gem',
        'botania:laputa_shard': 'astralsorcery:stardust'
    };

    const resolveIngredient = (ingredient) => {
        if (Array.isArray(ingredient)) return ingredient.map(resolveIngredient);
        if (typeof ingredient !== 'string') return ingredient;
        if (missingModItemReplacements[ingredient] && !e6eRecipeIngredientExists(ingredient)
            && e6eRecipeIngredientExists(missingModItemReplacements[ingredient])) {
            return missingModItemReplacements[ingredient];
        }
        const match = /^(\d+\s*x\s*)?#forge:(.+)$/i.exec(ingredient.trim());
        if (!match) return ingredient;
        const commonTag = `${match[1] || ''}#c:${match[2]}`;
        return e6eRecipeIngredientExists(commonTag) ? commonTag : ingredient;
    };

    data.recipes.forEach((recipe) => {
        const resolvedInput1 = resolveIngredient(recipe.input1);
        const secondaries = recipe.secondaries.map(resolveIngredient);
        if (!e6eRecipeIngredientExists(resolvedInput1)) return;
        if (!secondaries.every(e6eRecipeIngredientExists)) return;
        if (!recipe.outputs.length || !recipe.outputs.every(e6eRecipeOutputExists)) return;

        // 等注册表检查通过后再调用 Item.of，避免旧模组物品缺失时出错。
        const outputs = recipe.outputs.map((output) => Item.of(output));
        const input1 = resolvedInput1;
        const re = event.recipes.immersiveengineering
            .arc_furnace(outputs, input1, secondaries)
            .id(recipe.id);

        if (recipe.time) {
            re.time(recipe.time);
        }

        if (recipe.energy) {
            re.energy(recipe.energy);
        }
    });
});
})();
