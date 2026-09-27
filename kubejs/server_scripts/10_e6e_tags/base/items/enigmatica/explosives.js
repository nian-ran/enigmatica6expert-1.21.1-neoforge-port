if (['botania', 'tconstruct', 'thermal'].every((modId) => Platform.isLoaded(modId))) {
'use strict';

ServerEvents.tags('item', (event) => {
    /**
     * 用于给物品添加标签的模板，会自动处理“基础标签”。
     * 例如，将 `thermal:ice_tnt` 加入 `#enlightened6:explosives/ice` 时，也会自动加入 `#enlightened6:explosives`。
     * 处理目标标签时，先移除与 `removals` 匹配的条目，再加入 `additions` 中的条目。
     * @type {{tag:string,removals?:any[],additions?:any[]}[]}
     * @param tag 不带 `#` 前缀的标签字符串，例如 `forge:ingots` 或 `why:using/this/tag`。
     * @param removals （可选）接受正则表达式、标签字符串或物品字符串。
     * @param additions （可选）接受正则表达式、标签字符串或物品字符串。
     */
    let recipes = [
        {
            tag: 'enigmatica:explosives/base',
            additions: [
                'minecraft:tnt',
                'minecraft:tnt_minecart',
                'thermal:explosive_grenade',
                'supplementaries:bomb',
                'archers_paradox:explosive_arrow',
                'immersiveengineering:he',
                'apotheosis:explosive_arrow',
                'botania:lens_explosive'
            ]
        },
        {
            tag: 'enigmatica:explosives/lightning',
            additions: [
                'powah:charged_snowball',
                'thermal:lightning_charge',
                'thermal:lightning_grenade',
                'thermal:lightning_tnt',
                'thermal:lightning_tnt_minecart',
                'archers_paradox:lightning_arrow'
            ]
        },
        {
            tag: 'enigmatica:explosives/ice',
            additions: ['thermal:ice_charge', 'thermal:ice_grenade', 'thermal:ice_tnt', 'thermal:ice_tnt_minecart']
        },
        {
            tag: 'enigmatica:explosives/earth',
            additions: [
                'tconstruct:efln_ball',
                'thermal:earth_charge',
                'thermal:earth_tnt',
                'thermal:earth_tnt_minecart',
                'thermal:earth_grenade'
            ]
        },
        {
            tag: 'enigmatica:explosives/slime',
            additions: ['thermal:slime_tnt_minecart', 'thermal:slime_tnt', 'thermal:slime_grenade']
        },
        {
            tag: 'enigmatica:explosives/fire',
            additions: [
                'thermal:fire_grenade',
                'minecraft:fire_charge',
                'thermal:fire_tnt',
                'thermal:fire_tnt_minecart',
                'archers_paradox:blaze_arrow'
            ]
        },
        {
            tag: 'enigmatica:explosives/ender',
            additions: ['thermal:ender_grenade', 'thermal:ender_tnt', 'thermal:ender_tnt_minecart']
        },
        {
            tag: 'enigmatica:explosives/glow',
            additions: ['thermal:glowstone_grenade', 'thermal:glowstone_tnt', 'thermal:glowstone_tnt_minecart']
        },
        {
            tag: 'enigmatica:explosives/redstone',
            additions: [
                'thermal:redstone_grenade',
                'thermal:redstone_tnt',
                'thermal:redstone_tnt_minecart',
                'archers_paradox:redstone_arrow'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        let removals = recipe.removals ? recipe.removals : [];
        let additions = recipe.additions ? recipe.additions : [];
        let splitTag = recipe.tag.split('/');
        for (let i = 0; i < splitTag.length; i++) {
            let tag = splitTag.slice(0, i + 1).join('/');
            event.get(tag).remove(removals).add(additions);
        }
    });
});

}
