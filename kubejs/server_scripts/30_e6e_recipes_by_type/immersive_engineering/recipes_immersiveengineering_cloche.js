//priority: 900
// 配方类型：immersiveengineering:cloche
// 中文名称：园艺玻璃罩种植
// 用途：用于登记沉浸工程的园艺玻璃罩种植配方。

(function () {

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "immersiveengineering:cloche", false, ["botanypots:crop","botanypots:soil","e6e_mbd2:thermal_phytogenic_insolator","immersiveengineering:cloche"]);
    if (!e6ePortedRecipeModLoaded('e6e_mbd2') && !e6ePortedRecipeModLoaded('immersiveengineering')) return;

    // 植物盆栽自带作物与土壤配方；
    // 下方 JSON 构造器使用了当前配方编解码器已删除的字段。

    cropRegistry.forEach((cropCategories) => {
        var type = cropCategories.type;
        cropCategories.crops.forEach((crop) => {
            crops_thermal_insolator(event, type, crop);
            if (e6ePortedRecipeModLoaded('immersiveengineering')) crops_immersiveengineering_cloche(event, type, crop);
        });
    });

    treeRegistry.forEach((treeCategories) => {
        var type = treeCategories.type;
        treeCategories.trees.forEach((tree) => {
            trees_thermal_insolator(event, tree);
            if (e6ePortedRecipeModLoaded('immersiveengineering')) trees_immersiveengineering_cloche(event, tree);
        });
    });
});

function soils_botany_pots(event, soil) {
    var input = soil.block,
        display;

    //例外项
    switch (input) {
        case 'minecraft:lava_bucket':
            display = { block: 'minecraft:lava' };
            break;
        case 'minecraft:water_bucket':
            display = { block: 'minecraft:water' };
            break;
        default:
            display = { block: soil.block };
    }

    if (soil.block.includes('farmland')) {
        display.properties = { moisture: 7 };
    }

    event.custom({
        type: 'botanypots:soil',
        input: { item: input },
        display: display,
        categories: soil.categories,
        growthModifier: soil.growthModifier
    });
}

function crops_botany_pots(event, type, crop) {
    // 每天的游戏刻数：24000
    // 每分钟的游戏刻数：1200
    var baseGrowthTicks = 24000,
        growthModifier = 1.0;

    // chance, minRolls, maxRolls
    var primary = [1.0, 10, 20],
        growthTicks = baseGrowthTicks,
        plantSecondary;

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }
    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'coral':
            growthModifier = 2.0;
            break;
        case 'crop_gourd':
            growthModifier = 1.5;
            break;
        case 'crop_melon':
            growthModifier = 1.5;
            break;
        case 'crop_seed':
            primary = [1.0, 10, 30];
            break;
        case 'flower':
            growthModifier = 0.5;
            break;
        case 'grass_like':
            growthModifier = 0.25;
            break;
        case 'lily_like':
            growthModifier = 0.25;
            break;
        case 'shroom':
            primary = [1.0, 10, 30];
            plantSecondary = crop.plant;
            break;
        case 'vine':
            //已禁用
            return;
        default:
        //默认
    }

    var input = crop.seed,
        outputs = [
            {
                chance: primary[0],
                output: { item: crop.plant },
                minRolls: primary[1],
                maxRolls: primary[2]
            }
        ];
    if (type.includes('crop_')) {
        //将种子加入作物类产物
        outputs.push({
            chance: 0.2,
            output: { item: crop.seed },
            minRolls: 1,
            maxRolls: 5
        });
    }

    if (plantSecondary) {
        //添加所有副产物
        outputs.push({
            chance: 0.05,
            output: { item: plantSecondary },
            minRolls: 1,
            maxRolls: 5
        });
    }

    event.custom({
        type: 'botanypots:crop',
        seed: { item: input },
        categories: [crop.substrate],
        growthTicks: growthTicks * growthModifier,
        display: { block: crop.render },
        results: outputs
    });
}

function crops_thermal_insolator(event, type, crop) {
    var baseWater = 500,
        baseEnergy = 20000,
        waterModifier = 1.0,
        energyModifier = 1.0;

    var primaryChance = 2.0,
        secondaryChance = 1.1,
        plantSecondary;

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }

    if (crop.plantSecondaryRate == 'low') {
        secondaryChance = 0.01;
    }

    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'cactus':
            waterModifier = 0.1;
            energyModifier = 4.0;
            break;
        case 'cane_like':
            waterModifier = 3.0;
            energyModifier = 2.0;
            break;
        case 'coral':
            waterModifier = 2.0;
            energyModifier = 4.0;
            break;
        case 'crop_gourd':
            waterModifier = 2.0;
            energyModifier = 1.5;
            break;
        case 'crop_melon':
            waterModifier = 2.0;
            energyModifier = 1.5;
            primaryChance = 1.0;
            break;
        case 'crop_seed':
            primaryChance = 3.0;
            break;
        case 'flower':
            waterModifier = 1.5;
            energyModifier = 0.5;
            break;
        case 'grass_like':
            waterModifier = 1.5;
            energyModifier = 0.5;
            break;
        case 'lily_like':
            waterModifier = 3.0;
            energyModifier = 0.5;
            break;
        case 'shroom':
            waterModifier = 1.5;
            energyModifier = 0.5;
            plantSecondary = crop.plant;
            break;
        default:
        //默认
    }

    var input = crop.seed,
        outputs = [{ item: crop.plant, amount: primaryChance }];

    if (type.includes('crop_')) {
        //将种子加入作物类产物
        outputs.push({ item: crop.seed, amount: secondaryChance });
    }

    if (plantSecondary) {
        //添加所有副产物
        outputs.push({ item: plantSecondary, amount: secondaryChance });
    }

    if (e6ePortedRecipeModLoaded('e6e_mbd2') && e6eRecipeIngredientExists(input)) {
        const builder = event.recipes.e6e_mbd2.thermal_phytogenic_insolator;
        const validOutputs = outputs.filter((output) => e6eRecipeOutputExists(output.item));
        if (typeof builder === 'function' && validOutputs.length > 0) {
            const path = String(input).replace(':', '/').replace(/[^a-z0-9_./-]/g, '_');
            const recipe = builder()
                .id('enigmatica:base/thermal/insolator/crops/' + type + '/' + path)
                .duration(200)
                .inputItems(input)
                .inputFluids(Math.round(baseWater * waterModifier) + 'x minecraft:water')
                .inputFE(Math.round(baseEnergy * energyModifier));

            validOutputs.forEach((output) => {
                const guaranteed = Math.floor(output.amount);
                const chance = output.amount - guaranteed;
                if (guaranteed > 0) recipe.outputItems(Item.of(output.item, guaranteed));
                if (chance > 0) recipe.chance(chance, (chanceRecipe) => chanceRecipe.outputItems(output.item));
            });
        }
    }
}

function crops_immersiveengineering_cloche(event, type, crop) {
    // 每天的游戏刻数：24000
    // 每分钟的游戏刻数：1200
    var baseGrowthTicks = 800;

    var primaryCount = 2,
        secondaryCount = 1,
        plantSecondary,
        growthTicks = baseGrowthTicks,
        growthModifier = 1.0,
        renderBlock = crop.render,
        renderType = 'generic';

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }

    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'cactus':
            growthModifier = 1.5;
            renderType = 'stacking';
            break;
        case 'cane_like':
            renderType = 'stacking';
            break;
        case 'coral':
            //已禁用
            return;
        case 'crop_fiber':
            primaryCount = 1;
            secondaryCount = 2;
            break;
        case 'crop_grain':
            growthModifier = 0.8;
            break;
        case 'crop_legume':
            growthModifier = 0.7;
            break;
        case 'crop_vine':
            growthModifier = 0.7;
            break;
        case 'crop_leafy':
            growthModifier = 0.6;
            break;
        case 'crop_melon':
            growthModifier = 1.5;
            break;
        case 'crop_gourd':
            growthModifier = 1.5;
            break;
        case 'flower':
            growthModifier = 0.5;
            break;
        case 'grass_like':
            growthModifier = 0.5;
            break;
        case 'shroom':
            growthModifier = 0.7;
            plantSecondary = crop.plant;
            break;
        case 'kelp_like':
            //已禁用
            return;
        case 'lily_like':
            //已禁用
            return;
        case 'vine':
            //已禁用
            return;
        default:
        //默认
    }
    var substrate = crop.substrate;
    switch (substrate) {
        case 'crimson_nylium':
            substrate = 'minecraft:crimson_nylium';
            break;
        case 'deepturf':
            substrate = 'undergarden:deepsoil';
            break;
        case 'end_stone':
            substrate = 'minecraft:end_stone';
            break;
        case 'glowcelium':
            substrate = 'byg:glowcelium_block';
            break;
        case 'grass':
            substrate = 'minecraft:grass_block';
            break;
        case 'mushroom':
            substrate = 'minecraft:mycelium';
            break;
        case 'nether':
            substrate = 'minecraft:netherrack';
            break;
        case 'sand':
            substrate = 'minecraft:sand';
            break;
        case 'soul_sand':
            substrate = 'minecraft:soul_sand';
            break;
        case 'warped_nylium':
            substrate = 'minecraft:warped_nylium';
            break;
        case 'shadow_grass':
            substrate = 'betterendforge:shadow_grass';
            break;
        case 'end_mycelium':
            substrate = 'betterendforge:end_mycelium';
            break;
        case 'end_moss':
            substrate = 'betterendforge:end_moss';
            break;
        case 'jungle_moss':
            substrate = 'betterendforge:jungle_moss';
            break;
        case 'crystal_moss':
            substrate = 'betterendforge:crystal_moss';
            break;
        case 'chorus_nylium':
            substrate = 'betterendforge:chorus_nylium';
            break;
        case 'pink_moss':
            substrate = 'betterendforge:pink_moss';
            break;
        case 'amber_moss':
            substrate = 'betterendforge:amber_moss';
            break;
        case 'strange_sand':
            substrate = 'atum:sand';
            break;
        case 'frozen_deepturf':
            substrate = 'undergarden:frozen_deepturf_block';
            break;
        case 'sediment':
            substrate = 'undergarden:sediment';
            break;
        case 'water':
            //已禁用
            return;
        default:
            substrate = 'minecraft:dirt';
    }

    var input = crop.seed;
    if (!e6eRecipeIngredientExists(input) || !e6eRecipeIngredientExists(substrate)
        || !e6eRecipeOutputExists(crop.plant)) return;
    var outputs = [{ id: crop.plant, count: primaryCount }];

    if (type.includes('crop_')) {
        //将种子加入作物类产物
        outputs.push({ id: crop.seed, count: secondaryCount });
        renderType = 'crop';
    }

    if (crop.plant.includes('kenaf') || crop.plant.includes('hemp')) {
        //覆盖渲染类型
        renderType = 'crop';
    }

    if (type == 'crop_gourd' || crop.plant == 'minecraft:melon') {
        renderType = 'stem';
    }

    if (crop.plant == 'simplefarming:zucchini' || crop.plant == 'simplefarming:squash_block') {
        renderType = 'crop';
    }

    if (plantSecondary && crop.plantSecondaryRate != 'low' && e6eRecipeOutputExists(plantSecondary)) {
        //添加所有副产物
        outputs.push({ id: plantSecondary, count: secondaryCount });
    }
    fallback_id(
        event.custom({
            type: 'immersiveengineering:cloche',
            input: { item: input },
            soil: { item: substrate },
            results: outputs,
            render: { type: 'immersiveengineering:' + renderType, block: renderBlock },
            time: Math.max(1, Math.round(growthTicks * growthModifier))
        }),
        `enigmatica:base/unification/unify_growables/${arguments.callee.name}/`
    );
}

function trees_botany_pots(event, type, tree) {
    // 每天的游戏刻数：24000
    // 每分钟的游戏刻数：1200
    var baseGrowthTicks = 24000,
        growthModifier = 1.0;

    // chance, minRolls, maxRolls
    var saplingRate = [1.0, 3, 6],
        trunkRate = [1.0, 15, 20],
        leafRate = [1.0, 15, 20],
        stickRate = [1.0, 5, 10],
        extraDecorationRate = [0.2, 5, 10],
        fruitRate = [0.5, 5, 10],
        growthTicks = baseGrowthTicks;

    var input = tree.sapling,
        outputs = [
            {
                chance: saplingRate[0],
                output: { item: tree.sapling },
                minRolls: saplingRate[1],
                maxRolls: saplingRate[2]
            }
        ];
    /*
    types:  tree, tree_shroom
    */
    if (type == 'tree') {
        outputs.push(
            {
                chance: trunkRate[0],
                output: { item: tree.trunk },
                minRolls: trunkRate[1],
                maxRolls: trunkRate[2]
            },
            {
                chance: leafRate[0],
                output: { item: tree.leaf },
                minRolls: leafRate[1],
                maxRolls: leafRate[2]
            }
        );
        if (tree.extraDecoration) {
            outputs.push({
                chance: extraDecorationRate[0],
                output: { item: tree.extraDecoration },
                minRolls: extraDecorationRate[1],
                maxRolls: extraDecorationRate[2]
            });
        }
        var stickType = 'minecraft:stick';
        if (type.includes('undergarden')) {
            //添加木棍
            stickType = 'undergarden:twistytwig';
        }
        outputs.push({
            chance: stickRate[0],
            output: { item: stickType },
            minRolls: stickRate[1],
            maxRolls: stickRate[2]
        });
        if (tree.fruit) {
            //添加所有水果
            outputs.push({
                chance: fruitRate[0],
                output: { item: tree.fruit },
                minRolls: fruitRate[1],
                maxRolls: fruitRate[2]
            });
        }
    }

    if (type == 'tree_shroom') {
        growthModifier = 0.5;
    }

    event.custom({
        type: 'botanypots:crop',
        seed: { item: input },
        categories: [tree.substrate],
        growthTicks: growthTicks * growthModifier,
        display: { block: input },
        results: outputs
    });
}

function trees_thermal_insolator(event, tree) {
    var baseWater = 500,
        baseEnergy = 20000,
        waterModifier = 3.0,
        energyModifier = 4.0;

    var saplingRate = 1.1,
        trunkRate = 3.1,
        leafRate = 4.5,
        extraDecorationRate = 0.5,
        fruitRate = 0.5;

    var input = tree.sapling,
        outputs = [
            { item: tree.sapling, amount: saplingRate },
            { item: tree.trunk, amount: trunkRate },
            { item: tree.leaf, amount: leafRate }
        ];

    if (tree.fruit) {
        //添加所有水果
        outputs.push({ item: tree.fruit, amount: fruitRate });
    }

    if (tree.extraDecoration) {
        //添加所有额外装饰
        outputs.push({ item: tree.extraDecoration, amount: extraDecorationRate });
    }

    if (e6ePortedRecipeModLoaded('e6e_mbd2') && e6eRecipeIngredientExists(input)) {
        const builder = event.recipes.e6e_mbd2.thermal_phytogenic_insolator;
        const validOutputs = outputs.filter((output) => e6eRecipeOutputExists(output.item));
        if (typeof builder === 'function' && validOutputs.length > 0) {
            const path = String(input).replace(':', '/').replace(/[^a-z0-9_./-]/g, '_');
            const recipe = builder()
                .id('enigmatica:base/thermal/insolator/trees/' + path)
                .duration(400)
                .inputItems(input)
                .inputFluids(Math.round(baseWater * waterModifier) + 'x minecraft:water')
                .inputFE(Math.round(baseEnergy * energyModifier));

            validOutputs.forEach((output) => {
                const guaranteed = Math.floor(output.amount);
                const chance = output.amount - guaranteed;
                if (guaranteed > 0) recipe.outputItems(Item.of(output.item, guaranteed));
                if (chance > 0) recipe.chance(chance, (chanceRecipe) => chanceRecipe.outputItems(output.item));
            });
        }
    }
}

function trees_immersiveengineering_cloche(event, tree) {
    // 每天的游戏刻数：24000
    // 每分钟的游戏刻数：1200
    var baseGrowthTicks = 800,
        growthModifier = 6;

    var saplingRate = 1,
        trunkRate = 3,
        leafRate = 4,
        extraDecorationRate = 1,
        fruitRate = 1,
        renderBlock = tree.sapling,
        renderType = 'generic';

    var input = tree.sapling;
    if (!e6eRecipeIngredientExists(input) || !e6eRecipeOutputExists(tree.trunk)
        || !e6eRecipeOutputExists(tree.leaf)) return;
    var outputs = [
        { id: tree.sapling, count: saplingRate },
        { id: tree.trunk, count: trunkRate },
        { id: tree.leaf, count: leafRate }
    ];

    var substrate = tree.substrate;
    switch (substrate) {
        case 'crimson_nylium':
            substrate = 'minecraft:crimson_nylium';
            break;
        case 'deepturf':
            substrate = 'undergarden:deepsoil';
            break;
        case 'end_stone':
            substrate = 'minecraft:end_stone';
            break;
        case 'glowcelium':
            substrate = 'byg:glowcelium_block';
            break;
        case 'mushroom':
            substrate = 'minecraft:mycelium';
            break;
        case 'nether':
            substrate = 'minecraft:netherrack';
            break;
        case 'warped_nylium':
            substrate = 'minecraft:warped_nylium';
            break;
        case 'jungle_moss':
            substrate = 'betterendforge:jungle_moss';
            break;
        case 'end_moss':
            substrate = 'betterendforge:end_moss';
            break;
        case 'amber_moss':
            substrate = 'betterendforge:amber_moss';
            break;
        case 'pink_moss':
            substrate = 'betterendforge:pink_moss';
            break;
        case 'chorus_nylium':
            substrate = 'betterendforge:chorus_nylium';
            break;
        case 'end_moss':
            substrate = 'betterendforge:end_moss';
            break;
        case 'shadow_grass':
            substrate = 'betterendforge:shadow_grass';
            break;
        default:
            substrate = 'minecraft:dirt';
    }

    if (!e6eRecipeIngredientExists(substrate)) return;

    if (tree.fruit && e6eRecipeOutputExists(tree.fruit)) {
        //添加所有水果
        outputs.push({ id: tree.fruit, count: fruitRate });
    }

    if (tree.extraDecoration && e6eRecipeOutputExists(tree.extraDecoration)) {
        //添加所有额外装饰
        outputs.push({ id: tree.extraDecoration, count: extraDecorationRate });
    }

    fallback_id(
        event.custom({
            type: 'immersiveengineering:cloche',
            input: { item: input },
            soil: { item: substrate },
            results: outputs,
            render: { type: 'immersiveengineering:' + renderType, block: renderBlock },
            time: Math.max(1, Math.round(baseGrowthTicks * growthModifier))
        }),
        `enigmatica:base/unification/unify_growables/${arguments.callee.name}/`
    );
}
})();
