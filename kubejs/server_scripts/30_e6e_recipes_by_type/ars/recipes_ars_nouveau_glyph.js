// 配方类型：ars_nouveau:glyph
// 中文名称：法术符文制作
// 用途：用于登记新生魔艺的法术符文制作配方。

(function () {
ServerEvents.recipes((event) => {
    const recipes = [
        
    ];

    /*
    等级
    第一阶段：魔法黏土
    第二阶段：奇妙黏土
    第三阶段：神话黏土
    */

    recipes.forEach((recipe) => {
        if (!e6eRecipeOutputExists(recipe.output)) return;
        if (!recipe.inputs.every((input) => e6eRecipeIngredientExists(input))) return;

        event.recipes.ars_nouveau.glyph(recipe.output, recipe.inputs, recipe.exp).id(recipe.id);
    });
});
})();

(function () {
if (e6ePortedRecipeModLoaded('ars_nouveau') && e6ePortedRecipeModLoaded('kubejsarsnouveau')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'minecraft:pufferfish',
            output: 'ars_nouveau:glyph_aoe',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_aoe'
        },
        {
            input: 'undergarden:droopvine_item',
            output: 'ars_nouveau:glyph_fortune',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_fortune'
        },
        {
            input: 'powah:charged_snowball',
            output: 'ars_nouveau:glyph_amplify',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_amplify'
        },
        {
            input: 'bloodmagic:reagentwater',
            output: 'ars_nouveau:glyph_conjure_water',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_conjure_water'
        },
        {
            input: 'create:adjustable_chain_gearshift',
            output: 'ars_nouveau:glyph_accelerate',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_accelerate'
        },
        {
            input: 'bloodmagic:reagentlava',
            output: 'ars_nouveau:glyph_ignite',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_ignite'
        },
        {
            input: 'bloodmagic:reagentvoid',
            output: 'ars_nouveau:glyph_dispel',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_dispel'
        },
        {
            input: 'bloodmagic:reagentgrowth',
            output: 'ars_nouveau:glyph_grow',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_grow'
        },
        {
            input: 'bloodmagic:reagentmagnetism',
            output: 'ars_nouveau:glyph_pull',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_pull'
        },
        {
            input: 'bloodmagic:reagentair',
            output: 'ars_nouveau:glyph_launch',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_launch'
        },
        {
            input: 'eidolon_repraised:tattered_cloth',
            output: 'ars_nouveau:glyph_phantom_block',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_phantom_block'
        },
        {
            input: 'naturesaura:infused_iron_hoe',
            output: 'ars_nouveau:glyph_harvest',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_harvest'
        },
        {
            input: 'naturesaura:hopper_upgrade',
            output: 'ars_nouveau:glyph_pickup',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_pickup'
        },
        {
            input: 'naturesaura:furnace_heater',
            output: 'ars_nouveau:glyph_smelt',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_smelt'
        },
        {
            input: 'bloodmagic:reagentair',
            output: 'ars_nouveau:glyph_glide',
            tier: 'THREE',
            id: 'ars_nouveau:glyph_glide'
        }
    ];

    /*
    等级
    等级
    第一阶段：魔法黏土
    ONE：魔法黏土
    第二阶段：奇妙黏土
    TWO：奇妙黏土
    第三阶段：神话黏土
    THREE：神话黏土
    */

    // 目标版本的奥术新生符文在这三个等级分别消耗 27、55 和 160 经验。
    // 目标版本的 Ars Nouveau 字形在这三个等级分别消耗 27、55、160 点经验。
    const experienceByTier = {
        ONE: 27,
        TWO: 55,
        THREE: 160
    };

    const inputMap = {
        'bloodmagic:reagentwater': 'neovitae:reagent_water',
        'bloodmagic:reagentlava': 'neovitae:reagent_lava',
        'bloodmagic:reagentvoid': 'neovitae:reagent_void',
        'bloodmagic:reagentgrowth': 'neovitae:reagent_growth',
        'bloodmagic:reagentfastminer': 'neovitae:reagent_fast_miner',
        'bloodmagic:reagentmagnetism': 'neovitae:reagent_magnetism',
        'bloodmagic:reagentair': 'neovitae:reagent_air',
        'eidolon:tattered_cloth': 'eidolon_repraised:tattered_cloth',
        'eidolon:shadow_gem': 'eidolon_repraised:shadow_gem'
    };

    recipes.forEach((recipe) => {
        const input = inputMap[recipe.input] || recipe.input;
        if (!e6eRecipeOutputExists(recipe.output) || !e6eRecipeIngredientExists(input)) return;

        event.remove({ id: recipe.id });
        event.recipes.ars_nouveau
            .glyph(recipe.output, [input], experienceByTier[recipe.tier] || 0)
            .id(recipe.id);
    });
});

}
})();
