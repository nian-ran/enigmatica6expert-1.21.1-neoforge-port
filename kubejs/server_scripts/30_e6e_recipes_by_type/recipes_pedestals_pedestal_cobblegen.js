//priority: 900
// 配方类型：pedestals:pedestal_cobblegen
// 中文名称：基座圆石生成
// 用途：用于登记基座的基座圆石生成配方。

(function () {

ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "pedestals:pedestal_cobblegen", false, ["e6e_mbd2:thermal_rock_generator","pedestals:pedestal_cobblegen","pedestals:pedestal_cobblegensilk"]);
    if (!e6ePortedRecipeModLoaded('e6e_mbd2')) return;

    generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        if (e6ePortedRecipeModLoaded('pedestals')) pedestals_stoneworks(event, material, type);
        if (e6ePortedRecipeModLoaded('industrialforegoing')) industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        if (e6ePortedRecipeModLoaded('pedestals')) pedestals_stoneworks(event, material, type);
        if (e6ePortedRecipeModLoaded('industrialforegoing')) industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });
});

//石材处理辅助函数
function pedestals_stoneworks(event, material, type) {
    if (!e6eRecipeIngredientExists(material) || !e6eRecipeOutputExists(material)) return;
    var recipeType = 'pedestals:pedestal_cobblegen';

    if (type == 'stone') {
        recipeType = 'pedestals:pedestal_cobblegensilk';
    }
    //console.log(`Pedestals Recipe for Material: ${material}, Type: ${type}`);
    fallback_id(
        event.custom({
            type: recipeType,
            ingredient: {
                item: material
            },
            result: {
                item: material,
                count: 1
            }
        }),
        `enigmatica:base/unification/unify_stoneworks/${arguments.callee.name}/`
    );
}

function industrialforegoing_stoneworks(event, material, type) {
    if (!e6eRecipeOutputExists(material)) return;
    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

    fallback_id(
        event.custom({
            output: {
                id: material,
                count: 1
            },
            waterNeed: 1000,
            lavaNeed: 1000,
            waterConsume: waterConsume,
            lavaConsume: lavaConsume,
            type: 'industrialforegoing:stonework_generate'
        }),
        `enigmatica:base/unification/unify_stoneworks/${arguments.callee.name}/`
    );
}

function thermal_stoneworks(event, material) {
    if (!e6eRecipeIngredientExists(material) || !e6eRecipeOutputExists(material)) return;
    const builder = event.recipes.e6e_mbd2.thermal_rock_generator;
    if (typeof builder !== 'function') return;
    const path = String(material).replace(':', '/').replace(/[^a-z0-9_./-]/g, '_');
    builder()
        .id('enigmatica:base/thermal/rock_generator/' + path)
        .duration(100)
        .inputItems(material)
        .inputFluids('1000x minecraft:water')
        .outputItems('2x ' + material)
        .inputFE(2000);
}
})();
