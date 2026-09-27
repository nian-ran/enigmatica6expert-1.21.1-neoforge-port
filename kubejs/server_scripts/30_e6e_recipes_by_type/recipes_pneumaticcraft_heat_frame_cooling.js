// 配方类型：pneumaticcraft:heat_frame_cooling
// 中文名称：冷却框架加工
// 用途：用于登记气动工艺的冷却框架加工配方。

(function () {
if (['resourcefulbees'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const recipes = [];

    const id_prefix = 'enigmatica:base/pneumaticcraft/heat_frame_cooling/';

    honeyVarieties.forEach((honeyVariety) => {
        var output = `${honeyVariety}_block`;

        if (honeyVariety == 'resourcefulbees:honey') {
            output = 'minecraft:honey_block';
        }

        recipes.push({
            input: { type: 'pneumaticcraft:fluid', tag: honeyVariety, amount: 1000 },
            output: { item: output },
            max_temp: 273,
            id: `${id_prefix}${output.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:heat_frame_cooling',
                input: recipe.input,
                max_temp: recipe.max_temp,
                result: recipe.output,
                bonus_output: recipe.bonus_output
            })
            .id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/pneumaticcraft/heat_frame_cooling/';

    var data = {
        recipes: [
            {
                input: { fluid: { id: 'immersiveengineering:concrete', amount: 1000 } },
                output: { id: 'immersiveengineering:concrete' },
                temperature: 305,
                bonusMultiplier: 0.085,
                bonusLimit: 0.1,
                id: `${id_prefix}concrete`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (!e6ePortedFluidExists(recipe.input.fluid.id) || !e6ePortedItemExists(recipe.output.id)) return;
        event
            .custom({
                type: 'pneumaticcraft:heat_frame_cooling',
                input: recipe.input,
                temperature: recipe.temperature,
                output: recipe.output,
                bonusMultiplier: recipe.bonusMultiplier,
                bonusLimit: recipe.bonusLimit
            })
            .id(recipe.id);
    });
});
})();

(function () {
// 专家版纳入源 normal 目录的热框架冷却配方。
if (e6ePortedRecipeModLoaded('pneumaticcraft')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode == false) return;

        const recipes = [
            {
                fluid: 'integrateddynamics:menril_resin',
                output: 'integrateddynamics:crystalized_menril_block',
                id: 'enigmatica:normal/pneumaticcraft/heat_frame_cooling/crystalized_menril_block'
            },
            {
                fluid: 'integrateddynamics:liquid_chorus',
                output: 'integrateddynamics:crystalized_chorus_block',
                id: 'enigmatica:normal/pneumaticcraft/heat_frame_cooling/crystalized_chorus_block'
            }
        ];

        recipes.forEach((recipe) => {
            if (!e6ePortedFluidExists(recipe.fluid) || !e6ePortedItemExists(recipe.output)) return;

            event.recipes.pneumaticcraft
                .heat_frame_cooling(
                    { fluid: { amount: 1000, id: recipe.fluid } },
                    273,
                    { count: 1, id: recipe.output },
                    0.025,
                    0.25
                )
                .id(recipe.id);
        });
    });
}
})();
