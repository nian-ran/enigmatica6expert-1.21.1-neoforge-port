// 配方类型：mcjtylib:copy_components
// 中文名称：物品组件复制
// 用途：用于登记McJtyLib的物品组件复制配方。

(function () {
// E6E GitHub 中 RFToolsBuilder 的 copy_nbt 数据配方已改为 McJtyLib 1.21 的 copy_components。
if (e6ePortedRecipeModLoaded('rftoolsbuilder') && e6ePortedRecipeModLoaded('mcjtylib')) {
    ServerEvents.recipes((event) => {
        const recipes = [
            {
                id: 'rftoolsbuilder:shape_card_quarry_fortune',
                result: 'rftoolsbuilder:shape_card_quarry_fortune',
                pattern: ['sns', 'eMd', 'srs'],
                key: {
                    n: { item: 'minecraft:ghast_tear' },
                    M: { item: 'rftoolsbuilder:shape_card_quarry' },
                    r: { item: 'minecraft:redstone' },
                    s: { tag: 'forge:gems/dimensional' },
                    d: { item: 'minecraft:diamond' },
                    e: { item: 'minecraft:emerald' }
                }
            },
            {
                id: 'rftoolsbuilder:shape_card_quarry_silk',
                result: 'rftoolsbuilder:shape_card_quarry_silk',
                pattern: ['sns', 'dMd', 'sds'],
                key: {
                    n: { item: 'minecraft:nether_star' },
                    M: { item: 'rftoolsbuilder:shape_card_quarry' },
                    s: { tag: 'forge:gems/dimensional' },
                    d: { item: 'minecraft:diamond' }
                }
            },
            {
                id: 'rftoolsbuilder:shield_block3',
                result: 'rftoolsbuilder:shield_block3',
                pattern: ['sOs', 'OMO', 'sOs'],
                key: {
                    M: { item: 'rftoolsbuilder:shield_block2' },
                    s: { tag: 'forge:gems/dimensional' },
                    O: { item: 'minecraft:obsidian' }
                }
            },
            {
                id: 'rftoolsbuilder:shield_block4',
                result: 'rftoolsbuilder:shield_block4',
                pattern: ['nOs', 'OMO', 'sOn'],
                key: {
                    M: { item: 'rftoolsbuilder:shield_block3' },
                    n: { item: 'minecraft:nether_star' },
                    s: { tag: 'forge:gems/dimensional' },
                    O: { item: 'minecraft:obsidian' }
                }
            }
        ];
        const tagReplacements = {
            'forge:gems/dimensional': ['c:gems/dimensional', 'forge:gems/dimensional']
        };

        function e6eResolveRFToolsCopyIngredient(ingredient) {
            if (!ingredient || typeof ingredient !== 'object') return null;
            if (typeof ingredient.item === 'string') {
                return e6ePortedItemExists(ingredient.item) ? { item: ingredient.item } : null;
            }
            if (typeof ingredient.tag === 'string') {
                var candidates = tagReplacements[ingredient.tag] || [ingredient.tag];
                var resolvedTag = candidates.find((candidate) => e6eRecipeIngredientExists(`#${candidate}`));
                return resolvedTag ? { tag: resolvedTag } : null;
            }
            return null;
        }

        recipes.forEach((recipe) => {
            if (!e6ePortedItemExists(recipe.result)) return;
            var key = {};
            var valid = true;
            Object.keys(recipe.key).forEach((symbol) => {
                var resolved = e6eResolveRFToolsCopyIngredient(recipe.key[symbol]);
                if (!resolved) valid = false;
                else key[symbol] = resolved;
            });
            if (!valid) return;

            event.remove({ id: recipe.id });
            event.custom({
                type: 'mcjtylib:copy_components',
                recipe: {
                    type: 'minecraft:crafting_shaped',
                    category: 'misc',
                    key: key,
                    pattern: recipe.pattern,
                    result: { count: 1, id: recipe.result }
                }
            }).id(recipe.id);
        });
    });
}
})();

(function () {
if (e6ePortedRecipeModLoaded('rftoolsstorage') && e6ePortedRecipeModLoaded('mcjtylib')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            result: { item: 'rftoolsstorage:storage_module1' },
            pattern: ['AEA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:silver_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module0' },
                E: { tag: 'forge:gears/osmium' }
            },
            id: 'rftoolsstorage:storage_module1'
        },
        {
            result: { item: 'rftoolsstorage:storage_module2' },
            pattern: ['AEA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:diamond_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module1' },
                E: { tag: 'forge:gears/osmium' }
            },
            id: 'rftoolsstorage:storage_module2'
        },
        {
            result: { item: 'rftoolsstorage:storage_module3' },
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:obsidian_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module2' }
            },
            id: 'rftoolsstorage:storage_module3'
        },
        {
            result: { item: 'rftoolsutility:advanced_charged_porter' },
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'kubejs:dimensional_storage_crystal' },
                C: { item: 'rftoolsutility:charged_porter' }
            },
            id: 'rftoolsutility:advanced_charged_porter'
        }
    ];

    const rftoolsCopyComponentsItemReplacements = {
        'thermal:charge_bench': 'e6e_mbd2:energy_output',
        'thermal:rf_coil': 'e6e_mbd2:energy_input',
        'thermal:machine_frame': 'create:brass_casing',
        'thermal:redstone_servo': 'e6e_mbd2:item_input',
        'thermal:cured_rubber': 'industrialforegoing:dryrubber'
    };
    const rftoolsCopyComponentsTagReplacements = {
        'forge:gears/osmium': ['c:gears/osmium', 'forge:gears/osmium']
    };

    function resolveCopyComponentsIngredient(ingredient) {
        if (!ingredient || typeof ingredient !== 'object') return null;
        if (typeof ingredient.item === 'string') {
            if (!e6ePortedItemExists(rftoolsCopyComponentsItemReplacements[ingredient.item] || ingredient.item)) return null;
            return { item: rftoolsCopyComponentsItemReplacements[ingredient.item] || ingredient.item };
        }
        if (typeof ingredient.tag === 'string') {
            if (ingredient.tag === 'thermal:glass/hardened') {
                return e6ePortedItemExists('mekanism:structural_glass')
                    ? { item: 'mekanism:structural_glass' }
                    : null;
            }
            var tagCandidates = rftoolsCopyComponentsTagReplacements[ingredient.tag] || [ingredient.tag];
            var resolvedTag = tagCandidates.find((candidate) => e6eRecipeIngredientExists(`#${candidate}`));
            return resolvedTag ? { tag: resolvedTag } : null;
        }
        return null;
    }

    recipes.forEach((recipe) => {
        const output = recipe.result && recipe.result.item;
        if (!output || !e6ePortedItemExists(output)) return;

        const key = {};
        let valid = true;
        Object.keys(recipe.key).forEach((symbol) => {
            const ingredient = resolveCopyComponentsIngredient(recipe.key[symbol]);
            if (!ingredient) valid = false;
            else key[symbol] = ingredient;
        });
        if (!valid) return;

        event.remove({ id: recipe.id });
        event.custom({
            type: 'mcjtylib:copy_components',
            recipe: {
                type: 'minecraft:crafting_shaped',
                category: 'misc',
                key: key,
                pattern: recipe.pattern,
                result: { count: 1, id: output }
            }
        }).id(recipe.id);
    });
});

}
})();
