// 配方类型：immersivepetroleum:reservoirs
// 中文名称：地下油藏分布
// 用途：定义地下流体油藏及其分布。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/reservoirs/';

    const recipes = [
        {
            fluid: 'pneumaticcraft:oil',
            equilibrium: 2000000,
            fluidminimum: 2500000,
            fluidcapacity: 15000000,
            fluidtrace: 6,
            weight: 40,
            dimensions: {
                isBlacklist: true,
                list: ['minecraft:the_end']
            },
            biomes: {
                isBlacklist: false,
                list: []
            },
            name: 'oil',
            id: 'immersivepetroleum:reservoirs/oil'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:reservoirs';
        event.custom(recipe).id(recipe.id);
    });
});
})();
