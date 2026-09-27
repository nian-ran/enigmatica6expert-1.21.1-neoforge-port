// 配方类型：tconstruct:entity_melting
// 中文名称：实体熔融
// 用途：用于登记匠魂的实体熔融配方。

(function () {
if (['resourcefulbees', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/tconstruct/entity_melting/';
    const recipes = [
        {
            entity: { types: ['resourcefulbees:aluminum_bee'] },
            result: { fluid: 'kubejs:molten_aluminum_bee', amount: 100 },
            damage: 2,
            id: `${id_prefix}molten_aluminum_bee`
        },
        {
            entity: { types: ['resourcefulbees:slimy_bee'] },
            result: { fluid: 'kubejs:liquid_slimy_bee', amount: 100 },
            damage: 2,
            id: `${id_prefix}liquid_slimy_bee`
        },

        // 实体熔化黑名单
        {
            entity: {
                types: [
                    'pneumaticcraft:drone',
                    'pneumaticcraft:amadrone',
                    'pneumaticcraft:collector_drone',
                    'pneumaticcraft:guard_drone',
                    'pneumaticcraft:harvesting_drone',
                    'pneumaticcraft:logistics_drone',
                    'ars_nouveau:whelp',
                    'ars_nouveau:familiar_bookwyrm',
                    'ars_nouveau:carbuncle',
                    'ars_nouveau:familiar_carbuncle',
                    'ars_nouveau:drygmy',
                    'ars_nouveau:familiar_drygmy',
                    'ars_nouveau:dummy',
                    'ars_nouveau:familiar_jabberwog',
                    'ars_nouveau:sylph',
                    'ars_nouveau:familiar_sylph',
                    'ars_nouveau:wixie',
                    'ars_nouveau:familiar_wixie',
                    'ars_nouveau:summon_horse',
                    'ars_nouveau:summon_wolf',
                    'ars_nouveau:ally_vex'
                ]
            },
            result: { fluid: 'minecraft:water', amount: 0 },
            damage: 2,
            id: `${id_prefix}disabled`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:entity_melting';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/tconstruct/entity_melting/';
    const recipes = [
        {
            entity: { type: 'minecraft:cow' },
            result: { fluid: 'industrialforegoing:meat', amount: 100 },
            damage: 2,
            id: `${id_prefix}liquid_meat`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:entity_melting';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
