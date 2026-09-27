// 配方类型：immersiveengineering:squeezer
// 中文名称：挤压机加工
// 用途：用于登记沉浸工程的挤压机加工配方。

(function () {
// 暂停使用：1.21.1 沉浸工程的 KubeJS 配方格式要求产物是非空气物品，
// 但这些原配方只产出植物油；不要自行增加副产物。
// 暂停：1.21.1 沉浸工程 KubeJS 配方结构要求有效物品产物，而旧配方只产出植物油；这里不虚构副产物。
if (false && e6ePortedRecipeModLoaded('immersiveengineering')) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/squeezer/';

    const recipes = [
        {
            inputs: [
                'simplefarming:cantaloupe_seeds',
                'simplefarming:cotton_seeds',
                'simplefarming:cucumber_seeds',
                'simplefarming:cumin_seeds',
                'simplefarming:eggplant_seeds',
                'simplefarming:ginger_seeds',
                'simplefarming:honeydew_seeds',
                'simplefarming:kenaf_seeds',
                'simplefarming:lettuce_seeds',
                'simplefarming:squash_seeds',
                'supplementaries:flax_seeds',
                'atum:flax_seeds',
                'undergarden:gloomgourd_seeds',
                'sushigocrafting:rice_seeds',
                'sushigocrafting:cucumber_seeds',
                'sushigocrafting:soy_seeds',
                'sushigocrafting:wasabi_seeds',
                'sushigocrafting:sesame_seeds',
                'environmental:cattail_seeds'
            ],
            value: 20
        },

        {
            inputs: [
                'simplefarming:broccoli_seeds',
                'simplefarming:onion_seeds',
                'simplefarming:pea_seeds',
                'simplefarming:soybean_seeds',
                'simplefarming:spinach_seeds',
                'simplefarming:zucchini_seeds',
                'betterendforge:glowing_pillar_seed',
                'betterendforge:lumecorn_seed',
                'betterendforge:lanceleaf_seed',
                'betterendforge:end_lotus_seed',
                'betterendforge:end_lily_seed',
                'betterendforge:blue_vine_seed',
                'betterendforge:amber_root_seed',
                'betterendforge:bulb_vine_seed',
                'betterendforge:blossom_berry_seed',
                'betterendforge:shadow_berry'
            ],
            value: 40
        },

        {
            inputs: [
                'simplefarming:carrot_seeds',
                'simplefarming:cassava_seeds',
                'simplefarming:pepper_seeds',
                'simplefarming:potato_seeds',
                'simplefarming:radish_seeds',
                'simplefarming:sweet_potato_seeds',
                'simplefarming:tomato_seeds',
                'simplefarming:turnip_seeds',
                'simplefarming:yam_seeds',
                'occultism:datura_seeds'
            ],
            value: 60
        },

        {
            inputs: [
                'simplefarming:barley_seeds',
                'simplefarming:corn_seeds',
                'simplefarming:oat_seeds',
                'simplefarming:peanut_seeds',
                'simplefarming:quinoa_seeds',
                'simplefarming:rice_seeds',
                'simplefarming:rye_seeds',
                'simplefarming:sorghum_seeds',
                'simplefarming:sunflower_seeds',
                'atum:emmer_seeds'
            ],
            value: 80
        },

        { inputs: ['simplefarming:grape_seeds'], value: 120 }
    ];

    // 旧版纯流体配方暂停使用期间，此处作为参考保留。
    // 旧版仅流体产出的配方暂时停用，此处保留原始转换定义供后续核对。
    recipes.forEach((recipe) => {
        recipe.inputs.forEach((seed) => {
            if (!e6ePortedItemExists(seed)) return;

            event.custom({
                type: 'immersiveengineering:squeezer',
                fluid: {
                    id: 'immersiveengineering:plantoil',
                    amount: recipe.value
                },
                input: {
                    item: seed
                },
                result: { item: 'minecraft:air' },
                energy: 6400
            }).id(`${id_prefix}${seed.replace(':', '/')}`);
        });
    });
});

}
})();
