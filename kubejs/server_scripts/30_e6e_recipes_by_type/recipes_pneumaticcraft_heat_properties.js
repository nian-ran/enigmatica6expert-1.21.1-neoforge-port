// 配方类型：pneumaticcraft:heat_properties
// 中文名称：方块热属性
// 用途：定义方块的导热等热属性。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/block_heat_properties/';
    const recipes = [
        {
            block: 'powah:uraninite_block',
            temperature: 623,
            thermalResistance: 500,
            transformCold: 'emendatusenigmatica:uranium_block',
            heatCapacity: 1500000,
            id: `${id_prefix}uraninite_block`
        },
        {
            block: 'quark:magma_bricks',
            temperature: 1300,
            thermalResistance: 500,
            transformCold: 'minecraft:netherrack',
            heatCapacity: 10000,
            id: `${id_prefix}magma_bricks`
        },
        {
            block: 'powah:blazing_crystal_block',
            temperature: 1700,
            heatCapacity: 20000,
            id: `${id_prefix}blazing_crystal_block`
        },
        {
            block: 'emendatusenigmatica:uranium_block',
            temperature: 438,
            thermalResistance: 500,
            transformCold: 'emendatusenigmatica:lead_block',
            heatCapacity: 500000,
            id: `${id_prefix}uranium_block`
        },
        {
            block: 'betterendforge:dense_snow',
            temperature: 263,
            thermalResistance: 500,
            transformCold: 'minecraft:snow_block',
            heatCapacity: 2000,
            id: `${id_prefix}dense_snow`
        }
        // 气动工艺 1.21.1 已没有流体 heat_properties 配方。
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.block)) return;

        const migratedRecipe = {
            type: 'pneumaticcraft:heat_properties',
            block: recipe.block,
            temperature: recipe.temperature,
            heatCapacity: recipe.heatCapacity
        };
        if (recipe.thermalResistance !== undefined) {
            migratedRecipe.thermalResistance = recipe.thermalResistance;
        }
        if (recipe.transformCold && e6ePortedItemExists(recipe.transformCold)) {
            migratedRecipe.transforms = { cold: recipe.transformCold };
        }

        event.custom(migratedRecipe).id(recipe.id);
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/pneumaticcraft/block_heat_properties/';

    /* 
    流体冷却与加热
    {
        fluid: 'immersiveengineering:concrete',
        temperature: 293, //流体的固有温度；据此加热或冷却周围物体
        thermalResistance: 100, //流体传热的阻力；数值越高传热越慢
        transformCold: { block: 'immersiveengineering:concrete' }, //冷却后转换成的方块
        transformHot: { block: 'immersiveengineering:concrete' }, //加热后转换成的方块
        heatCapacity: 10000 //流体转换前可传递的热量
    }
    
    方块冷却与加热
    
    {
        block: 'immersiveengineering:concrete',
        temperature: 293, //方块的固有温度；据此加热或冷却周围物体
        thermalResistance: 100, //方块传热的阻力；数值越高传热越慢
        transformCold: { block: 'immersiveengineering:concrete' }, //冷却后转换成的方块
        transformHot: { block: 'immersiveengineering:concrete' }, //加热后转换成的方块
        heatCapacity: 10000 //方块转换前可传递的热量
    }
    
    */

    const recipes = [
        {
            block: 'immersiveengineering:concrete',
            temperature: 333,
            thermalResistance: 100,
            transforms: { cold: 'immersiveengineering:concrete' },
            heatCapacity: 10000,
            id: `${id_prefix}concrete`
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.block)) return;
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});
})();
