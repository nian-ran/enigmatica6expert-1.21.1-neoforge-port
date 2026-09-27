// 配方类型：betterendforge:alloying
// 中文名称：合金熔炼
// 用途：用于登记更好的末地的合金熔炼配方。

(function () {
if (['betterendforge', 'eidolon_repraised'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/betterend/alloying/';

    var data = {
        recipes: [
            {
                ingredients: [{ tag: 'forge:ingots/copper' }, { tag: 'forge:ingots/zinc' }],
                result: Item.of('emendatusenigmatica:brass_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [{ tag: 'forge:ingots/iron' }, { tag: 'forge:ingots/lead' }],
                result: Item.of('eidolon_repraised:pewter_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [{ tag: 'forge:ingots/copper' }, { tag: 'forge:ingots/nickel' }],
                result: Item.of('emendatusenigmatica:constantan_ingot', 2),
                experience: 2,
                smelttime: 300
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        fallback_id(
            event.custom({
                type: 'betterendforge:alloying',
                ingredients: recipe.ingredients,
                result: recipe.result,
                experience: recipe.experience,
                smelttime: recipe.smelttime
            }),
            id_prefix
        );
    });
});

}
})();

(function () {
if (['betterendforge', 'thermal'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/betterend/alloying/';

    var data = {
        recipes: [
            
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:alloying',
                ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
                result: recipe.output,
                experience: recipe.experience,
                smelttime: recipe.smelttime
            })
            .id(recipe.id);
    });
});

}
})();

(function () {
ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "betterendforge:alloying", true, ["betterendforge:alloying","create:mixing","e6e_mbd2:thermal_induction_smelter","immersiveengineering:alloy","immersiveengineering:arc_furnace"]);
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/alloying/';

    const recipes = [
        {
            inputs: ['#forge:ingots/compressed_iron', '#forge:gems/quartz'],
            output: Item.of('refinedstorage:quartz_enriched_iron', 2)
        }
    ];
    const IEOutput = Java.loadClass('com.chen1335.immersiveEngineeringJs.api.crafting.TagOutputJS');
    const IEIngredient = Java.loadClass('com.chen1335.immersiveEngineeringJs.api.crafting.IngredientWithSizeJS');
    const TagKey = Java.loadClass('net.minecraft.tags.TagKey');
    const Registries = Java.loadClass('net.minecraft.core.registries.Registries');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

    const ieIngredient = (input) => {
        const ingredient = `${input}`;
        if (ingredient.startsWith('#')) {
            const tag = TagKey.create(Registries.ITEM, ResourceLocation.parse(ingredient.substring(1)));
            return IEIngredient.ofTag(tag);
        }
        return IEIngredient.ofItemStack(Item.of(ingredient));
    };

    const recipetypes_alloying = (event, recipe) => {
        if (!recipe.smelttime) {
            recipe.smelttime = 200;
        }
        if (!recipe.experience) {
            recipe.experience = 0.0;
        }

        // 此 1.21.1 实例已移除 BetterEnd；仅在它存在时注册对应配方。
        // 中文：当前 1.21.1 实例未安装 BetterEnd；仅在该模组加载时注册对应配方。
        if (e6ePortedRecipeModLoaded('betterendforge')) {
            fallback_id(
                event.custom({
                    type: 'betterendforge:alloying',
                    ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
                    result: recipe.output,
                    experience: recipe.experience,
                    smelttime: recipe.smelttime
                }),
                id_prefix
            );
        }

        // create
        fallback_id(event.recipes.create.mixing(recipe.output, recipe.inputs).heated(), id_prefix);

        // immersiveengineering
        const ieOutput = IEOutput.ofItemStack(recipe.output);
        const ieInputs = recipe.inputs.map(ieIngredient);
        fallback_id(
            event.recipes.immersiveengineering.alloy(ieOutput, ieInputs[0], ieInputs[1]),
            id_prefix
        );
        fallback_id(
            event.recipes.immersiveengineering.arc_furnace(
                [ieOutput],
                ieInputs[0],
                recipe.smelttime,
                recipe.energy || 51200,
                [ieInputs[1]]
            ),
            id_prefix
        );

        // MBD2 热力感应炉
        if (e6ePortedRecipeModLoaded('e6e_mbd2') && recipe.inputs.every(e6eRecipeIngredientExists)
            && e6eRecipeOutputExists(recipe.output)) {
            const builder = event.recipes.e6e_mbd2.thermal_induction_smelter;
            if (typeof builder === 'function') {
                builder()
                    .id('enigmatica:expert/thermal/induction_smelter/quartz_enriched_iron')
                    .duration(recipe.smelttime)
                    .inputItems(recipe.inputs[0])
                    .inputItems(recipe.inputs[1])
                    .outputItems(recipe.output)
                    .inputFE(recipe.energy || 51200);
            }
        }
    };

    recipes.forEach((recipe) => {
        recipetypes_alloying(event, recipe);
    });
});
})();
