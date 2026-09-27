// 配方类型：lychee:lightning_channeling
// 中文名称：雷击触发转化
// 用途：用于登记荔枝事件配方的雷击触发转化配方。

(function () {
// 使用当前整合包可用的 Lychee 配方类型恢复非蜜蜂类雷击配方。
// 目标端没有 Interactio、BYG 和 Quark 晶体物品；用 Lychee 闪电配方及相近材料恢复非蜜蜂产物。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false || !e6ePortedRecipeModLoaded('lychee')) return;

    const recipes = [
        {
            id: 'enigmatica:expert/lychee/firmament',
            inputs: ['mekanism:fluorite_gem', '6x minecraft:prismarine', '6x undergarden:shiverstone'],
            output: '3x kubejs:firmament'
        },
        {
            id: 'enigmatica:expert/lychee/crystalline_oak_leaves',
            inputs: ['64x minecraft:oak_leaves', 'astralsorcery:stardust', 'minecraft:green_dye'],
            output: '64x kubejs:crystalline_oak_leaves'
        },
        {
            id: 'enigmatica:expert/lychee/crystalline_flowering_palo_verde_leaves',
            inputs: ['64x minecraft:flowering_azalea_leaves', 'astralsorcery:stardust', 'minecraft:yellow_dye'],
            output: '64x kubejs:crystalline_flowering_palo_verde_leaves'
        },
        {
            id: 'enigmatica:expert/lychee/crystalline_dark_oak_wood',
            inputs: ['64x minecraft:dark_oak_wood', 'astralsorcery:stardust', 'minecraft:orange_dye'],
            output: '64x kubejs:crystalline_dark_oak_wood'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output) || !recipe.inputs.every(e6eRecipeIngredientExists)) return;
        event.custom({
            type: 'lychee:lightning_channeling',
            item_in: recipe.inputs,
            post: `drop ${recipe.output}`
        }).id(recipe.id);
    });
});
})();

(function () {
// Botania/Interactio 缺失时，用 Create、Lychee 与 NeoVitae 补齐 E6E 的自定义矿物处理链。
// 保留四阶段加工次序；只有目标端确实注册了对应矿物及输入标签时才添加配方。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "lychee:lightning_channeling", false, ["create:crushing","create:mixing","lychee:lightning_channeling","neovitae:ara_vitae_recipe"]);
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
