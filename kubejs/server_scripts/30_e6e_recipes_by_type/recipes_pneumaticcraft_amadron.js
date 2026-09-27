// 配方类型：pneumaticcraft:amadron
// 中文名称：阿玛德隆交易
// 用途：用于登记气动工艺的阿玛德隆交易配方。

(function () {
if (['atum'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    /* 使用文档：https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:base/pneumaticcraft/amadron/';

    const recipes = [
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.atum_mineral" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.atum_mineral.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_mineral_survey_atum_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['atum:atum'] } },
            id: `${id_prefix}mineral_survey_atum`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.undergarden_mineral" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.undergarden_mineral.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_mineral_survey_undergarden_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['undergarden:undergarden'] } },
            id: `${id_prefix}mineral_survey_undergarden`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.nether_botanical" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.nether_botanical.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_botanical_survey_nether_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['minecraft:the_nether'] } },
            id: `${id_prefix}botanical_survey_nether`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.end_botanical" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.end_botanical.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_botanical_survey_end_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['minecraft:the_end'] } },
            id: `${id_prefix}botanical_survey_end`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.end_mineral" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.end_mineral.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_mineral_survey_the_end_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['minecraft:the_end'] } },
            id: `${id_prefix}mineral_survey_the_end`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});

/**/

}
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /* 使用文档：https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:expert/pneumaticcraft/amadron/';

    const recipes = [
        {
            input: { resource: { id: 'kubejs:engineers_school_project', count: 1 } },
            output: { resource: { id: 'kubejs:medium_machinery_schematics', count: 1 } },
            level: 0,
            id: `${id_prefix}medium_machinery_schematics`
        },
        {
            input: { resource: { id: 'kubejs:engineers_school_upgrades', count: 1 } },
            output: { resource: { id: 'kubejs:heavy_machinery_schematics', count: 1 } },
            level: 0,
            id: `${id_prefix}heavy_machinery_schematics`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'pneumaticcraft:amadron',
            input: recipe.input,
            output: recipe.output,
            level: recipe.level,
            offer_id: recipe.id
        }).id(recipe.id);
    });
});
})();
