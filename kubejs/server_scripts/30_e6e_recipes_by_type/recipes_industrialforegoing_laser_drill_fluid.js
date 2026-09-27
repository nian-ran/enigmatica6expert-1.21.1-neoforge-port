// 配方类型：industrialforegoing:laser_drill_fluid
// 中文名称：激光钻取流体
// 用途：用于登记工业先锋的激光钻取流体配方。

(function () {
if (['botania', 'resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    var nether_end_biomes = end_biomes.concat(nether_biomes);

    const id_prefix = 'enigmatica:base/industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            output: '{FluidName:"pneumaticcraft:oil",Amount:10}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                    depth_min: 5,
                    depth_max: 20,
                    weight: 8
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.black },
            entity: 'minecraft:empty',
            id: `${id_prefix}oil`
        },
        {
            output: '{FluidName:"industrialforegoing:essence",Amount:5}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                    depth_min: 5,
                    depth_max: 10,
                    weight: 4
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.green },
            entity: 'minecraft:empty',
            id: `${id_prefix}essence`
        },
        {
            output: '{FluidName:"resourcefulbees:honey",Amount:50}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                    depth_min: 5,
                    depth_max: 100,
                    weight: 10
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            entity: 'minecraft:empty',
            id: `${id_prefix}honey`
        },
        {
            output: '{FluidName:"industrialforegoing:pink_slime",Amount:50}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 256,
                    weight: 10
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.pink },
            entity: 'botania:pink_wither',
            id: `${id_prefix}pink_slime`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
if (['astralsorcery', 'bloodmagic', 'tconstruct'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_fluids/';
    let nether_end_biomes = end_biomes.concat(nether_biomes);

    const recipes = [
        {
            output: '{FluidName:"industrialforegoing:meat",Amount:1000}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.brown },
            entity: 'minecraft:cow',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}liquid_meat`
        },
        {
            output: '{FluidName:"bloodmagic:life_essence_fluid",Amount:1000}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: nether_biomes },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 10,
                    weight: 14
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.red },
            entity: 'minecraft:villager',
            id: `${id_prefix}life_essence_fluid`
        },
        {
            output: '{FluidName:"astralsorcery:liquid_starlight",Amount:1000}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: end_biomes },
                    blacklist: {},
                    depth_min: 250,
                    depth_max: 255,
                    weight: 10
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.white },
            entity: 'minecraft:empty',
            id: `${id_prefix}liquid_starlight`
        },
        {
            output: '{FluidName:"tconstruct:blazing_blood",Amount:1000}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: nether_biomes },
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.orange },
            entity: 'minecraft:blaze',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}blazing_blood`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();

(function () {
// 将 E6E 普通目录中可对应的 NeoVitae 与激光钻配方加入专家模式。
if (e6ePortedRecipeModLoaded('industrialforegoing')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        if (e6ePortedRecipeModLoaded('astralsorcery') && e6ePortedItemExists('industrialforegoing:white_laser_lens') && e6ePortedFluidExists('astralsorcery:liquid_starlight')) {
            event.recipes.industrialforegoing.laser_drill_fluid(
                Fluid.of('astralsorcery:liquid_starlight', 100),
                'industrialforegoing:white_laser_lens',
                [
                    {
                        biome_filter: {
                            blacklist: [],
                            whitelist: [
                                'minecraft:the_end',
                                'minecraft:the_void',
                                'minecraft:small_end_islands',
                                'minecraft:end_barrens',
                                'minecraft:end_highlands',
                                'minecraft:end_midlands'
                            ]
                        },
                        dimension_filter: { blacklist: [], whitelist: [] },
                        depth_min: 250,
                        depth_max: 255,
                        weight: 10
                    }
                ]
            ).id('enigmatica:normal/industrialforegoing/laser_drill_fluid/liquid_starlight');
        }

        if (e6ePortedRecipeModLoaded('neovitae') && e6ePortedItemExists('industrialforegoing:red_laser_lens') && e6ePortedFluidExists('neovitae:essentia_vitae_source')) {
            event.recipes.industrialforegoing.laser_drill_fluid(
                Fluid.of('neovitae:essentia_vitae_source', 500),
                'industrialforegoing:red_laser_lens',
                [
                    {
                        biome_filter: {
                            blacklist: [],
                            whitelist: [
                                'minecraft:nether_wastes',
                                'minecraft:basalt_deltas',
                                'minecraft:warped_forest',
                                'minecraft:crimson_forest',
                                'minecraft:soul_sand_valley'
                            ]
                        },
                        dimension_filter: { blacklist: [], whitelist: [] },
                        depth_min: 5,
                        depth_max: 10,
                        weight: 14
                    }
                ],
                { entity: { type: 'minecraft:villager' }, data: {}, display: '' }
            ).id('enigmatica:normal/industrialforegoing/laser_drill_fluid/essentia_vitae');
        }
    });
}
})();
