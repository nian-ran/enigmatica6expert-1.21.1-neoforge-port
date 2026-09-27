// 配方类型：powah:energizing
// 中文名称：充能台充能
// 用途：用于登记Powah 能源的充能台充能配方。

(function () {
if (e6ePortedRecipeModLoaded('powah') && e6ePortedRecipeModLoaded('kubejspowah')) {
    ServerEvents.recipes((event) => {
        const recipes = [
            
        ];

        recipes.forEach((recipe) => {
            try {
                if (!e6eRecipeOutputExists(recipe.result) || !recipe.ingredients.every(e6eRecipeIngredientExists)) return;
                event.recipes.powah.energizing(recipe.ingredients, Item.of(recipe.result), recipe.energy).id(recipe.id);
            } catch (error) {
                console.error(`[E6E Powah] Failed to register ${recipe.id}: ${error}`);
            }
        });
    });
}
})();

(function () {
// E6E 专家模式 Powah 充能配方，已改用 KubeJS Powah 附属 API。
if (e6ePortedRecipeModLoaded('powah') && e6ePortedRecipeModLoaded('kubejspowah')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const idPrefix = 'enigmatica:expert/powah/energizing/';
        const recipes = [
            {
                ingredients: ['#c:plates/enderium', '#c:ingots/netherite', '#c:storage_blocks/iron_osmium', '#c:storage_blocks/iron_osmium'],
                result: 'xnet:antenna_dish',
                energy: 1000000,
                id: 'xnet:antenna_dish'
            },
            {
                ingredients: ['xnet:redstone_proxy_upd'],
                result: 'xnet:redstone_proxy',
                energy: 100000,
                id: `${idPrefix}redstone_proxy_upd`
            },
            {
                ingredients: ['xnet:redstone_proxy'],
                result: 'xnet:redstone_proxy_upd',
                energy: 100000,
                id: 'xnet:redstoneproxy_update'
            },
            {
                ingredients: [
                    'ars_nouveau:wixie_charm',
                    'refinedstorage:raw_advanced_processor',
                    'refinedstorage:raw_advanced_processor',
                    'refinedstorage:raw_advanced_processor'
                ],
                result: '3x extrastorage:raw_neural_processor',
                energy: 3000000,
                id: 'extrastorage:raw_neural_processor'
            },
            {
                ingredients: ['#c:storage_blocks/dimensional', '#c:gems/diamond', 'integrateddynamics:crystalized_menril_block'],
                result: 'rftoolsbase:infused_diamond',
                energy: 9000000,
                id: 'rftoolsbase:infused_diamond'
            },
            {
                ingredients: ['#c:storage_blocks/dimensional', '#forge:gems/ender', 'integrateddynamics:crystalized_chorus_block'],
                result: 'rftoolsbase:infused_enderpearl',
                energy: 18000000,
                id: 'rftoolsbase:infused_enderpearl'
            },
            {
                ingredients: ['#c:ingots/froststeel', '#c:ingots/electrum'],
                result: '2x powah:steel_energized',
                energy: 10000,
                id: 'powah:energizing/energized_steel'
            },
            {
                ingredients: ['#c:storage_blocks/froststeel', '#c:storage_blocks/electrum'],
                result: '2x powah:energized_steel_block',
                energy: 100000,
                id: `${idPrefix}energized_steel_block`
            },
            {
                ingredients: ['astralsorcery:resonating_gem', '#c:dusts/starmetal', '#c:dusts/starmetal'],
                result: '2x powah:crystal_niotic',
                energy: 600000,
                id: 'powah:energizing/niotic_crystal'
            },
            {
                ingredients: ['#c:ingots/uranium', '#c:ingots/uranium', '#c:dusts/sulfur', '#c:dusts/fluorite'],
                result: '2x powah:uraninite',
                energy: 10000,
                id: `${idPrefix}uraninite`
            },
            {
                ingredients: ['minecraft:blaze_rod'],
                result: 'rftoolspower:blazing_rod[minecraft:custom_data={duration:5000.0f,time:0.0f,quality:200000.0f}]',
                energy: 10000000,
                id: `${idPrefix}blazing_rod`
            },
            {
                ingredients: [
                    'rftoolsbase:machine_base',
                    'powah:capacitor_blazing',
                    'powah:capacitor_blazing',
                    'powah:capacitor_blazing',
                    'powah:capacitor_blazing'
                ],
                result: 'rftoolspower:power_core2',
                energy: 500000,
                id: 'rftoolspower:power_core2'
            },
            {
                ingredients: [
                    'rftoolsbase:machine_base',
                    'powah:capacitor_nitro',
                    'powah:capacitor_nitro',
                    'powah:capacitor_nitro',
                    'powah:capacitor_nitro'
                ],
                result: 'rftoolspower:power_core3',
                energy: 10000000,
                id: 'rftoolspower:power_core3'
            },
            {
                ingredients: [
                    '#mekanism:alloys/atomic',
                    'rftoolsbase:infused_diamond',
                    'fluxnetworks:flux_core',
                    'rftoolsbase:infused_diamond',
                    '#mekanism:alloys/atomic'
                ],
                result: '2x mekanism:teleportation_core',
                energy: 1000000000,
                id: 'mekanism:teleportation_core'
            }
        ];

        recipes.forEach((recipe) => {
            try {
                if (!e6eRecipeOutputExists(recipe.result) || !recipe.ingredients.every((ingredient) =>
                    e6eRecipeIngredientExists(typeof ingredient === 'string' ? ingredient : ingredient.item))) return;
                var ingredients = recipe.ingredients.map((ingredient) => {
                    if (typeof ingredient === 'string') return ingredient;
                    return Item.of(`${ingredient.item}[minecraft:custom_data=${JSON.stringify(ingredient.customData)}]`);
                });
                event.recipes.powah.energizing(ingredients, Item.of(recipe.result), recipe.energy).id(recipe.id);
            } catch (error) {
                console.error(`[E6E Powah] Failed to register ${recipe.id}: ${error}`);
            }
        });
    });
}
})();

(function () {
// E6E 普通模式的 Powah 充能配方也加入当前专家实例。
if (e6ePortedRecipeModLoaded('powah') && e6ePortedRecipeModLoaded('kubejspowah')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const idPrefix = 'enigmatica:normal/powah/energizing/';
        const recipes = [
            {
                ingredients: ['#c:storage_blocks/iron', '#c:storage_blocks/gold'],
                result: '2x powah:energized_steel_block',
                energy: 100000,
                id: `${idPrefix}energized_steel_block`
            },
            {
                ingredients: ['#c:storage_blocks/copper', '#c:storage_blocks/gold'],
                result: '2x powah:energized_steel_block',
                energy: 100000,
                id: `${idPrefix}energized_steel_block_copper`
            },
            {
                ingredients: ['#c:storage_blocks/diamond'],
                result: 'powah:niotic_crystal_block',
                energy: 3000000,
                id: `${idPrefix}niotic_crystal_block`
            },
            {
                ingredients: ['#c:storage_blocks/emerald'],
                result: 'powah:spirited_crystal_block',
                energy: 10000000,
                id: `${idPrefix}spirited_crystal_block`
            }
        ];

        const energyValues = [5000, 10000, 15000, 20000, 25000, 30000];
        energyValues.forEach((energy, index) => {
            var count = index + 1;
            var uraniumIngots = [];
            var uraniumBlocks = [];
            for (var i = 0; i < count; i++) {
                uraniumIngots.push('#c:ingots/uranium');
                uraniumBlocks.push('#c:storage_blocks/uranium');
            }

            recipes.push(
                {
                    ingredients: uraniumIngots,
                    result: `${count}x powah:uraninite`,
                    energy,
                    id: `${idPrefix}uraninite_${index}`
                },
                {
                    ingredients: uraniumBlocks,
                    result: `${count}x powah:uraninite_block`,
                    energy: energy * 9,
                    id: `${idPrefix}uraninite_block_${index}`
                }
            );
        });

        recipes.forEach((recipe) => {
            try {
                if (!e6eRecipeOutputExists(recipe.result) || !recipe.ingredients.every(e6eRecipeIngredientExists)) return;
                event.recipes.powah.energizing(recipe.ingredients, Item.of(recipe.result), recipe.energy).id(recipe.id);
            } catch (error) {
                console.error(`[E6E Powah] Failed to register ${recipe.id}: ${error}`);
            }
        });
    });
}
})();
