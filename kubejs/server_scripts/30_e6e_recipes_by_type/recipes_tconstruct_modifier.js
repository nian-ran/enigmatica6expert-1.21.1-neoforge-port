// 配方类型：tconstruct:modifier
// 中文名称：工具强化
// 用途：用于登记匠魂的工具强化配方。

(function () {
if (['eidolon_repraised', 'materialis', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/materialis/modifiers/';
    const recipes = [
        {
            result: { name: 'materialis:reaping', level: 1 },
            inputs: [
                { item: 'eidolon_repraised:tattered_cloth' },
                { item: 'eidolon_repraised:reaper_scythe' },
                { item: 'eidolon_repraised:tattered_cloth' },
                { item: 'eidolon_repraised:soul_shard' },
                { item: 'eidolon_repraised:soul_shard' }
            ],
            tools: { tag: 'tconstruct:modifiable/melee' },
            slots: { abilities: 1 },
            max_level: 1,
            id: 'materialis:tools/modifiers/reaping'
        },
        {
            result: { name: 'materialis:reaping', level: 1 },
            inputs: [
                { item: 'eidolon_repraised:tattered_cloth' },
                { item: 'eidolon_repraised:reaper_scythe' },
                { item: 'eidolon_repraised:tattered_cloth' },
                { item: 'eidolon_repraised:soul_shard' },
                { item: 'eidolon_repraised:soul_shard' }
            ],
            tools: { tag: 'tconstruct:modifiable/armor/chestplate' },
            slots: { abilities: 1 },
            requirements: {
                name: 'tconstruct:unarmed',
                level: 1,
                error: 'recipe.tconstruct.modifier.unarmed'
            },
            max_level: 1,
            id: 'materialis:tools/modifiers/reaping_unarmed'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:modifier';
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

    const recipes = [
        {
            inputs: [
                {
                    item: 'minecraft:blaze_rod'
                },
                {
                    item: 'tconstruct:smeltery_controller'
                },
                {
                    item: 'minecraft:blaze_rod'
                },
                {
                    item: 'minecraft:lava_bucket'
                },
                {
                    item: 'minecraft:lava_bucket'
                }
            ],
            tools: [
                { tag: 'tconstruct:modifiable/melee' },
                { tag: 'tconstruct:modifiable/harvest' }
            ],
            slots: {
                abilities: 1
            },
            result: 'tconstruct:melting',
            level: 1,
            id: 'tconstruct:tools/modifiers/ability/melting'
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:modifier',
                inputs: recipe.inputs,
                tools: recipe.tools,
                slots: recipe.slots,
                result: recipe.result,
                level: recipe.level
            })
            .id(recipe.id);
    });
});

}
})();
