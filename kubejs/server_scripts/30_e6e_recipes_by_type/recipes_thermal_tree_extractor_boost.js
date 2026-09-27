// 配方类型：thermal:tree_extractor_boost
// 中文名称：树液提取机增产催化剂
// 用途：定义树液提取机的增产条件。

(function () {
if (['thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('thermal')) return;
    const id_prefix = 'enigmatica:base/thermal/tree_extractor_boost/';

    var data = {
        recipes: [
            {
                type: 'thermal:tree_extractor_boost',
                ingredient: {
                    item: 'industrialforegoing:fertilizer'
                },
                output: 1.7,
                cycles: 12,
                id: `${id_prefix}fertilizer`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
// 原热力系列催化剂修饰配方已改为新版 KubeJS 自定义配方格式并保留。
// 当前实例未安装热力系列，因此这些定义仍会参与
// 完整保留原配方；不支持的配方类型会记录到日志。
const e6eSourceThermalCatalysts = [
    {
        type: 'thermal:insolator_catalyst',
        ingredient: { item: 'industrialforegoing:fertilizer' },
        primary_mod: 2.0,
        secondary_mod: 2.0,
        energy_mod: 0.8,
        min_chance: 0.8,
        use_chance: 0.8,
        id: 'enigmatica:base/thermal/insolator_catalyst/fertilizer'
    },
    {
        type: 'thermal:insolator_catalyst',
        ingredient: { item: 'botania:fertilizer' },
        primary_mod: 1.7,
        secondary_mod: 1.7,
        energy_mod: 0.9,
        min_chance: 0.5,
        use_chance: 0.5,
        id: 'enigmatica:base/thermal/insolator_catalyst/floral_fertilizer'
    },
    {
        type: 'thermal:insolator_catalyst',
        ingredient: { item: 'farmingforblockheads:red_fertilizer' },
        primary_mod: 2.3,
        secondary_mod: 2.3,
        energy_mod: 0.8,
        min_chance: 0.15,
        use_chance: 0.15,
        id: 'enigmatica:base/thermal/insolator_catalyst/red_fertilizer'
    },
    {
        type: 'thermal:smelter_catalyst',
        ingredient: { tag: 'botania:runes/fire' },
        primary_mod: 3.5,
        secondary_mod: 5.0,
        energy_mod: 0.1,
        min_chance: 0.0,
        use_chance: 0.05,
        id: 'enigmatica:expert/thermal/smelter_catalyst/earth_rune'
    },
    {
        type: 'thermal:pulverizer_catalyst',
        ingredient: { tag: 'botania:runes/earth' },
        primary_mod: 2.5,
        secondary_mod: 5.0,
        energy_mod: 0.1,
        min_chance: 0.0,
        use_chance: 0.05,
        id: 'enigmatica:expert/thermal/pulverizer_catalyst/earth_rune'
    },
    {
        type: 'thermal:tree_extractor_boost',
        ingredient: { item: 'industrialforegoing:fertilizer' },
        output: 1.7,
        cycles: 12,
        id: 'enigmatica:base/thermal/tree_extractor_boost/fertilizer'
    }
];

if (e6ePortedRecipeModLoaded('thermal')) ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "thermal:tree_extractor_boost", false, ["thermal:insolator_catalyst","thermal:smelter_catalyst","thermal:pulverizer_catalyst","thermal:tree_extractor_boost"]);
    e6eSourceThermalCatalysts.forEach((recipe) => {
        try {
            var data = Object.assign({}, recipe);
            delete data.id;
            event.custom(data).id(recipe.id);
        } catch (error) {
            console.error('[E6E Thermal catalyst port] Could not attempt ' + recipe.id + ': ' + error);
        }
    });
});
})();
