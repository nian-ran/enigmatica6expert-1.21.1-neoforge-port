// 配方类型：immersiveengineering:fermenter
// 中文名称：发酵机加工
// 用途：用于登记沉浸工程的发酵机加工配方。

(function () {
// 暂停使用：1.21.1 沉浸工程的 KubeJS 配方格式要求产物是非空气物品，
// 但这些原配方只产出乙醇；不要自行增加副产物。
// 暂停：1.21.1 沉浸工程 KubeJS 配方结构要求有效物品产物，而旧配方只产出乙醇；这里不虚构副产物。
if (false && e6ePortedRecipeModLoaded('immersiveengineering')) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/fermenter/';

    const lowAmountInputs = [
        'farmersdelight:pumpkin_slice',
        'simplefarming:cantaloupe',
        'simplefarming:honeydew',
        'simplefarming:squash'
    ];

    const normalAmountInputs = [
        'alexsmobs:banana',
        'ars_nouveau:mana_berry',
        'atmospheric:aloe_leaves',
        'atmospheric:passionfruit',
        'atmospheric:yucca_fruit',
        'betterendforge:blossom_berry',
        'betterendforge:shadow_berry_raw',
        'byg:baobab_fruit',
        'byg:blueberries',
        'byg:crimson_berries',
        'byg:green_apple',
        'byg:holly_berries',
        'byg:joshua_fruit',
        'byg:nightshade_berries',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'integrateddynamics:menril_berries',
        'minecraft:beetroot',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:sweet_berries',
        'minecraft:wheat',
        'simplefarming:apricot',
        'simplefarming:banana',
        'simplefarming:barley',
        'simplefarming:blackberries',
        'simplefarming:blueberries',
        'simplefarming:broccoli',
        'simplefarming:cassava',
        'simplefarming:cherries',
        'simplefarming:corn',
        'simplefarming:cucumber',
        'simplefarming:eggplant',
        'simplefarming:grapes',
        'simplefarming:habanero',
        'simplefarming:lettuce',
        'simplefarming:mango',
        'simplefarming:oat',
        'simplefarming:olives',
        'simplefarming:onion',
        'simplefarming:orange',
        'simplefarming:peanut',
        'simplefarming:pear',
        'simplefarming:pea_pod',
        'simplefarming:pepper',
        'simplefarming:plum',
        'simplefarming:radish',
        'simplefarming:raspberries',
        'simplefarming:rice',
        'simplefarming:rye',
        'simplefarming:sorghum',
        'simplefarming:soybean',
        'simplefarming:spinach',
        'simplefarming:strawberries',
        'simplefarming:sweet_potato',
        'simplefarming:turnip',
        'simplefarming:yam',
        'simplefarming:zucchini',
        'sushigocrafting:cucumber',
        'sushigocrafting:soy_bean',
        'sushigocrafting:wasabi_root',
        'sushigocrafting:avocado',
        'undergarden:blisterberry',
        'upgrade_aquatic:mulberry'
    ];
    /*
		const recipes = [{	input: 'simplefarming:apricot',	fluid: 'immersiveengineering:ethanol',	amount: 80,	energy: 6400}
		];
	*/

    // 旧版纯流体配方暂停使用期间，此处作为参考保留。
    // 旧版仅流体产出的配方暂时停用，此处保留原始转换定义供后续核对。
    lowAmountInputs.forEach((input) => {
        if (!e6ePortedItemExists(input)) return;

        event.custom({
            type: 'immersiveengineering:fermenter',
            fluid: {
                id: 'immersiveengineering:ethanol',
                amount: 20
            },
            input: {
                item: input
            },
            result: { item: 'minecraft:air' },
            energy: 1600
        }).id(`${id_prefix}low/${input.replace(':', '/')}`);
    });
    normalAmountInputs.forEach((input) => {
        if (!e6ePortedItemExists(input)) return;

        event.custom({
            type: 'immersiveengineering:fermenter',
            fluid: {
                id: 'immersiveengineering:ethanol',
                amount: 80
            },
            input: {
                item: input
            },
            result: { item: 'minecraft:air' },
            energy: 6400
        }).id(`${id_prefix}high/${input.replace(':', '/')}`);
    });
});

}
})();
