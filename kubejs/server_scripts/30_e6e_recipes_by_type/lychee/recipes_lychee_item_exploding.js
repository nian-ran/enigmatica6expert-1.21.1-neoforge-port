// 配方类型：lychee:item_exploding
// 中文名称：爆炸转化掉落物
// 用途：用于登记荔枝事件配方的爆炸转化掉落物配方。

(function () {
// Lychee 提供过热材料配方；MBD2 替代原 Oritech 装配机。
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "lychee:item_exploding", false, ["e6e_mbd2:thermal_press","lychee:item_exploding"]);
    if (global.isExpertMode == false) return;

    const steelIngot = e6eRegisteredItemTagHasItems('#c:ingots/steel')
        ? '#c:ingots/steel' : 'immersiveengineering:ingot_steel';
    const steelBlock = e6eRegisteredItemTagHasItems('#c:storage_blocks/steel')
        ? '#c:storage_blocks/steel' : 'immersiveengineering:storage_steel';
    const bitumen = 'immersivepetroleum:bitumen';

    if (e6ePortedRecipeModLoaded('lychee') && e6eRecipeIngredientExists(steelIngot)
        && e6eRecipeIngredientExists(steelBlock) && e6eRecipeIngredientExists(bitumen)
        && e6eRecipeOutputExists('kubejs:superheated_steel_ingot')
        && e6eRecipeOutputExists('kubejs:superheated_steel_block')) {
        event.custom({
            type: 'lychee:item_exploding',
            item_in: [`2x ${steelIngot}`, `2x ${bitumen}`, '2x minecraft:obsidian'],
            post: 'drop 4x kubejs:superheated_steel_ingot'
        }).id('enigmatica:expert/lychee/superheated_steel_ingot');

        event.custom({
            type: 'lychee:item_exploding',
            item_in: [`2x ${steelBlock}`, `18x ${bitumen}`, '18x minecraft:obsidian'],
            post: 'drop 4x kubejs:superheated_steel_block'
        }).id('enigmatica:expert/lychee/superheated_steel_block');
    }

    if (!e6ePortedRecipeModLoaded('e6e_mbd2')) return;
    const pressed = [
        ['kubejs:superheated_steel_ingot', '2x kubejs:hot_compressed_iron_ingot', 'hot_compressed_iron_ingot', 1000],
        ['kubejs:superheated_steel_block', '2x kubejs:hot_compressed_iron_block', 'hot_compressed_iron_block', 9000]
    ];
    pressed.forEach(([input, output, name, fe]) => {
        if (!e6eRecipeIngredientExists(input) || !e6eRecipeOutputExists(output)) return;
        event.recipes.e6e_mbd2.thermal_press()
            .id('enigmatica:expert/mbd2/press/' + name)
            .duration(120)
            .inputItems('4x ' + input)
            .outputItems(output)
            .inputFE(fe);
    });
});
})();
