// 配方类型：apothic_spawners:spawner_modifier
// 中文名称：刷怪笼参数修改
// 用途：用于登记神化刷怪笼的刷怪笼参数修改配方。

(function () {
if (e6ePortedRecipeModLoaded('apothic_spawners') && e6ePortedRecipeModLoaded('meetyourfight')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/apotheosis/spawner_modifier/';
    const recipes = [
        {
            mainhand: { item: 'ars_nouveau:glyph_freeze' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [{ id: 'no_ai', value: true }],
            id: 'apotheosis:spawner/no_ai'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_freeze' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [{ id: 'no_ai', value: false }],
            id: 'apotheosis:spawner/no_ai_inverted'
        },
        {
            mainhand: { item: 'meetyourfight:spectres_eye' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_players', value: true }],
            id: 'apotheosis:spawner/ignore_players'
        },
        {
            mainhand: { item: 'meetyourfight:spectres_eye' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_players', value: false }],
            id: 'apotheosis:spawner/ignore_players_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_intangible' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_conditions', value: true }],
            id: 'apotheosis:spawner/ignore_conditions'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_intangible' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_conditions', value: false }],
            id: 'apotheosis:spawner/ignore_conditions_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_shield' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_light', value: true }],
            id: 'apotheosis:spawner/ignore_light'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_shield' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_light', value: false }],
            id: 'apotheosis:spawner/ignore_light_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_linger' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: 2,
                    min: -1,
                    max: 10
                }
            ],
            id: 'apotheosis:spawner/max_nearby'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_linger' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/max_nearby_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_delay' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'min_delay',
                    value: -5,
                    min: 100,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_delay' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'min_delay',
                    value: 5,
                    min: -1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_summon_decoy' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: 1,
                    min: -1,
                    max: 5
                }
            ],
            id: 'apotheosis:spawner/spawn_count'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_summon_decoy' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_count_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:ritual_scrying' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: 2,
                    min: -1,
                    max: 50
                }
            ],
            id: 'apotheosis:spawner/player_range'
        },
        {
            mainhand: { item: 'ars_nouveau:ritual_scrying' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/player_range_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_aoe' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: 1,
                    min: -1,
                    max: 32
                }
            ],
            id: 'apotheosis:spawner/spawn_range'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_aoe' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_range_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_sensitive' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'redstone_control',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/redstone_control'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_sensitive' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'redstone_control',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/redstone_control_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_dampen' },
            offhand: { item: 'naturesaura:token_joy' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'silent',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/silent'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_dampen' },
            offhand: { item: 'naturesaura:token_sorrow' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'silent',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/silent_inverted'
        }
    ];

    recipes.forEach((recipe) => {
        try {
            const recipeJson = Object.assign({}, recipe, {
                type: 'apothic_spawners:spawner_modifier',
                stat_changes: recipe.stat_changes.map((change) => {
                    const stat = Object.assign({}, change, { type: `apothic_spawners:${change.id}` });
                    delete stat.id;
                    return stat;
                })
            });
            delete recipeJson.id;
            event.custom(recipeJson).id(recipe.id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id}: ${error}`);
        }
    });
});

}
})();

(function () {
// 将 E6E 普通模式的 Apothic Spawners 刷怪笼修改配方加入专家模式。
if (e6ePortedRecipeModLoaded('apothic_spawners')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            mainhand: { item: 'minecraft:clock' },
            stat_changes: [{ type: 'apothic_spawners:min_delay', value: -5, min: 100 }],
            id: 'enigmatica:normal/apothic_spawners/min_delay'
        },
        {
            mainhand: { item: 'minecraft:clock' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:min_delay', value: 5 }],
            id: 'enigmatica:normal/apothic_spawners/min_delay_inverted'
        },
        {
            mainhand: { item: 'aquaculture:double_hook' },
            stat_changes: [{ type: 'apothic_spawners:spawn_count', value: 1, max: 5 }],
            id: 'enigmatica:normal/apothic_spawners/spawn_count'
        },
        {
            mainhand: { item: 'aquaculture:double_hook' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:spawn_count', value: -1, min: 1 }],
            id: 'enigmatica:normal/apothic_spawners/spawn_count_inverted'
        },
        {
            mainhand: { item: 'minecraft:sea_lantern' },
            stat_changes: [{ type: 'apothic_spawners:req_player_range', value: 2, max: 50 }],
            id: 'enigmatica:normal/apothic_spawners/player_range'
        },
        {
            mainhand: { item: 'minecraft:sea_lantern' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:req_player_range', value: -2, min: 1 }],
            id: 'enigmatica:normal/apothic_spawners/player_range_inverted'
        },
        {
            mainhand: { item: 'comforts:rope_and_nail' },
            stat_changes: [{ type: 'apothic_spawners:no_ai', value: true }],
            id: 'enigmatica:normal/apothic_spawners/no_ai'
        },
        {
            mainhand: { item: 'comforts:rope_and_nail' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:no_ai', value: false }],
            id: 'enigmatica:normal/apothic_spawners/no_ai_inverted'
        },
        {
            mainhand: { item: 'upgrade_aquatic:elder_eye' },
            stat_changes: [{ type: 'apothic_spawners:ignore_players', value: true }],
            id: 'enigmatica:normal/apothic_spawners/ignore_players'
        },
        {
            mainhand: { item: 'upgrade_aquatic:elder_eye' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:ignore_players', value: false }],
            id: 'enigmatica:normal/apothic_spawners/ignore_players_inverted'
        },
        {
            mainhand: { item: 'architects_palette:abyssaline_lamp' },
            stat_changes: [{ type: 'apothic_spawners:ignore_conditions', value: true }],
            id: 'enigmatica:normal/apothic_spawners/ignore_conditions'
        },
        {
            mainhand: { item: 'architects_palette:abyssaline_lamp' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:ignore_conditions', value: false }],
            id: 'enigmatica:normal/apothic_spawners/ignore_conditions_inverted'
        },
        {
            mainhand: { item: 'glassential:glass_dark' },
            stat_changes: [{ type: 'apothic_spawners:ignore_light', value: true }],
            id: 'enigmatica:normal/apothic_spawners/ignore_light'
        },
        {
            mainhand: { item: 'glassential:glass_dark' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:ignore_light', value: false }],
            id: 'enigmatica:normal/apothic_spawners/ignore_light_inverted'
        },
        {
            mainhand: { item: 'upgrade_aquatic:tooth_lantern' },
            stat_changes: [{ type: 'apothic_spawners:max_nearby_entities', value: 2, max: 10 }],
            id: 'enigmatica:normal/apothic_spawners/max_nearby'
        },
        {
            mainhand: { item: 'upgrade_aquatic:tooth_lantern' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:max_nearby_entities', value: -2, min: 1 }],
            id: 'enigmatica:normal/apothic_spawners/max_nearby_inverted'
        },
        {
            mainhand: { item: 'botania:blaze_block' },
            stat_changes: [{ type: 'apothic_spawners:spawn_range', value: 1, max: 32 }],
            id: 'enigmatica:normal/apothic_spawners/spawn_range'
        },
        {
            mainhand: { item: 'botania:blaze_block' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ type: 'apothic_spawners:spawn_range', value: -1, min: 1 }],
            id: 'enigmatica:normal/apothic_spawners/spawn_range_inverted'
        }
    ];

    recipes.forEach((recipe) => {
        var ingredients = [recipe.mainhand.item];
        if (recipe.offhand) ingredients.push(recipe.offhand.item);
        try {
            if (!ingredients.every((item) => e6ePortedItemExists(item))) return;
            var recipeJson = Object.assign({}, recipe, { type: 'apothic_spawners:spawner_modifier' });
            delete recipeJson.id;
            event.custom(recipeJson).id(recipe.id);
        } catch (error) {
            console.error(`[E6E port] Failed spawner modifier ${recipe.id}: ${error}`);
        }
    });
});
}
})();
