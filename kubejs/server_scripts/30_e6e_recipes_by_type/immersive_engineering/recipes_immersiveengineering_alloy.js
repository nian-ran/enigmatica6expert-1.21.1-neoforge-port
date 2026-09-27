// 配方类型：immersiveengineering:alloy
// 中文名称：合金制作
// 用途：用于登记沉浸工程的合金制作配方。

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('immersiveengineering')) return;
    const id_prefix = 'enigmatica:base/immersiveengineering/alloy/';
    const recipes = [
        {
            input1: '#forge:ingots/copper',
            input2: '#forge:ingots/zinc',
            output: '2x create:brass_ingot',
            id: 'immersiveengineering:alloysmelter/brass'
        },
        {
            input1: '#forge:ingots/iron',
            input2: '#forge:ingots/lead',
            output: '2x eidolon_repraised:pewter_ingot',
            id: `${id_prefix}pewter_ingot`
        },
        {
            input1: '#forge:glass',
            input2: '3x #forge:ingots/copper',
            output: '3x tconstruct:tinkers_bronze_ingot',
            id: `${id_prefix}tinkers_bronze_ingot`
        }
    ];
    const resolveIngredient = (ingredient) => {
        if (typeof ingredient !== 'string') return ingredient;
        const match = /^(\d+\s*x\s*)?#forge:(.+)$/i.exec(ingredient.trim());
        if (!match) return ingredient;
        const commonTag = `${match[1] || ''}#c:${match[2]}`;
        return e6eRecipeIngredientExists(commonTag) ? commonTag : ingredient;
    };

    recipes.forEach((recipe) => {
        const input1 = resolveIngredient(recipe.input1);
        const input2 = resolveIngredient(recipe.input2);
        if (!e6eRecipeIngredientExists(input1) || !e6eRecipeIngredientExists(input2)) return;
        if (!e6eRecipeOutputExists(recipe.output)) return;
        event.recipes.immersiveengineering.alloy(Item.of(recipe.output), input1, input2).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "immersiveengineering:alloy", false, ["betterendforge:alloying","create:mixing","e6e_mbd2:thermal_induction_smelter","immersiveengineering:alloy","immersiveengineering:arc_furnace"]);
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
    const idPrefix = 'enigmatica:expert/immersiveengineering/alloy/';
    const recipes = [
        {
            inputs: ['3x #forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: '3x undergarden:froststeel_ingot',
            id: `${idPrefix}froststeel_ingot_3`
        },
        {
            inputs: ['minecraft:book', 'pneumaticcraft:upgrade_matrix'],
            output: 'immersiveengineering:blueprint',
            outputComponent: '[immersiveengineering:blueprint="components"]',
            id: `${idPrefix}blueprint_components_from_upgrade_matrix`
        },
        {
            inputs: ['4x glassential:glass_ghostly', '#quark:crystal_clusters/white'],
            output: '4x atum:crystal_glass',
            id: `${idPrefix}crystal_glass`
        },
        {
            inputs: ['3x glassential:glass_ghostly', 'quark:white_crystal'],
            output: '4x atum:crystal_glass',
            id: `${idPrefix}crystal_glass_2`
        },
        {
            inputs: ['4x #forge:storage_blocks/arcane_gold', 'create:honeyed_apple'],
            output: 'minecraft:enchanted_golden_apple',
            id: `${idPrefix}enchanted_golden_apple`
        },
        {
            inputs: [
                '16x minecraft:book',
                'mekanismtools:lapis_lazuli_helmet[minecraft:damage=0]'
            ],
            output: '16x apotheosis:armor_head_book',
            id: `${idPrefix}armor_head_book`
        },
        {
            inputs: [
                '16x minecraft:book',
                'mekanismtools:lapis_lazuli_chestplate[minecraft:damage=0]'
            ],
            output: '16x apotheosis:armor_chest_book',
            id: `${idPrefix}armor_chest_book`
        },
        {
            inputs: [
                '16x minecraft:book',
                'mekanismtools:lapis_lazuli_leggings[minecraft:damage=0]'
            ],
            output: '16x apotheosis:armor_legs_book',
            id: `${idPrefix}armor_legs_book`
        },
        {
            inputs: [
                '16x minecraft:book',
                'mekanismtools:lapis_lazuli_boots[minecraft:damage=0]'
            ],
            output: '16x apotheosis:armor_feet_book',
            id: `${idPrefix}armor_feet_book`
        },
        {
            inputs: ['16x minecraft:book', 'botania:livingwood_bow[minecraft:damage=0]'],
            output: '16x apotheosis:bow_book',
            id: `${idPrefix}bow_book`
        },
        {
            inputs: ['16x minecraft:book', 'aquaculture:gold_fishing_rod[minecraft:damage=0]'],
            output: '16x apotheosis:fishing_rod_book',
            id: `${idPrefix}fishing_rod_book`
        },
        {
            inputs: [
                '16x minecraft:book',
                'mekanismtools:lapis_lazuli_pickaxe[minecraft:damage=0]'
            ],
            output: '16x apotheosis:digger_book',
            id: `${idPrefix}digger_book`
        },
        {
            inputs: [
                '16x minecraft:book',
                'mekanismtools:lapis_lazuli_sword[minecraft:damage=0]'
            ],
            output: '16x apotheosis:weapon_book',
            id: `${idPrefix}weapon_book`
        },
        {
            inputs: ['16x minecraft:book', 'tconstruct:ender_slime_crystal'],
            output: '16x apotheosis:scrap_tome',
            id: `${idPrefix}scrap_tome`
        },
        {
            inputs: ['16x minecraft:book', 'tconstruct:sky_slime_crystal'],
            output: '16x apotheosis:null_book',
            id: `${idPrefix}null_book`
        },
        {
            inputs: ['8x minecraft:book', 'thermal:rf_coil'],
            output: '8x pedestals:bookmagnet',
            id: 'pedestals:bookmagnet'
        },
        {
            inputs: ['8x minecraft:book', '#forge:ingots/invar'],
            output: '8x pedestals:bookarea',
            id: 'pedestals:bookarea'
        },
        {
            inputs: ['8x minecraft:book', '#forge:ingots/lumium'],
            output: '8x pedestals:bookrange',
            id: 'pedestals:bookrange'
        },
        {
            inputs: ['8x minecraft:book', '#forge:ingots/terminite'],
            output: '8x pedestals:bookspeed',
            id: 'pedestals:bookspeed'
        },
        {
            inputs: ['8x minecraft:book', '#forge:ingots/infused_iron'],
            output: '8x pedestals:bookcapacity',
            id: 'pedestals:bookcapacity'
        },
        {
            inputs: ['8x minecraft:book', '#forge:ingots/refined_radiance'],
            output: '8x pedestals:bookadvanced',
            id: 'pedestals:bookadvanced'
        },
        {
            inputs: ['2x #forge:ingots/terminite', '#forge:dusts/diamond'],
            output: '2x emendatusenigmatica:enderium_ingot',
            id: `${idPrefix}enderium_ingot`
        },
        {
            inputs: ['2x #forge:storage_blocks/terminite', '9x #forge:dusts/diamond'],
            output: '2x emendatusenigmatica:enderium_block',
            id: `${idPrefix}enderium_block`
        },
        {
            inputs: ['3x modularrouters:blank_module', '3x prettypipes:high_retrieval_module'],
            output: '3x modularrouters:puller_module_1',
            id: 'modularrouters:puller_module_1'
        },
        {
            inputs: ['3x modularrouters:blank_module', '3x prettypipes:high_extraction_module'],
            output: '3x modularrouters:sender_module_1',
            id: 'modularrouters:sender_module_1'
        },
        {
            inputs: ['3x modularrouters:blank_module', '3x ppfluids:high_fluid_retrieval_module'],
            output: '3x modularrouters:fluid_module',
            id: 'modularrouters:fluid_module'
        },
        {
            inputs: ['3x modularrouters:blank_module', 'thermal:charge_bench'],
            output: '3x modularrouters:energy_output_module',
            id: 'modularrouters:energy_output_module'
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
        if (!recipe.inputs || recipe.inputs.length !== 2) return;
        const resolvedInputs = recipe.inputs.map(resolveIngredient);
        if (!resolvedInputs.every(e6eRecipeIngredientExists)) return;
        if (!e6eRecipeOutputExists(recipe.output)) return;

        const inputs = resolvedInputs;
        const output = Item.of(`${recipe.output}${recipe.outputComponent || ''}`);
        event.recipes.immersiveengineering
            .alloy(output, inputs[0], inputs[1])
            .id(recipe.id);
    });
});
})();
