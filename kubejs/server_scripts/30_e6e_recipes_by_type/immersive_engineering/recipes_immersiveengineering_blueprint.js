// 配方类型：immersiveengineering:blueprint
// 中文名称：工程蓝图制作
// 用途：用于登记沉浸工程的工程蓝图制作配方。

(function () {
ServerEvents.recipes((event) => {
    var data = {
        recipes: [
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' },
                    { tag: 'forge:dyes/green' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:flare',
                    count: 48,
                    nbt: '{flareColour:2925323}'
                },
                id: 'bullet_flare_green'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' },
                    { tag: 'forge:dyes/yellow' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:flare',
                    count: 48,
                    nbt: '{flareColour:16777090}'
                },
                id: 'bullet_flare_yellow'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' },
                    { tag: 'forge:dyes/red' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:flare',
                    count: 48,
                    nbt: '{flareColour:13381126}'
                },
                id: 'bullet_flare_red'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/lead' },
                    { item: 'minecraft:ender_eye' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:homing',
                    count: 24
                },
                id: 'bullet_homing'
            },
            {
                inputs: [
                    { count: 12, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { item: 'minecraft:glass_bottle' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:potion',
                    count: 12
                },
                id: 'bullet_potion'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/lead' },
                    { tag: 'forge:nuggets/silver' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:silver',
                    count: 24
                },
                id: 'bullet_silver'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/steel' },
                    { tag: 'forge:nuggets/uranium' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:armor_piercing',
                    count: 24
                },
                id: 'bullet_armorpiercing'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/steel' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:buckshot',
                    count: 48
                },
                id: 'bullet_buckshot'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/lead' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:casull',
                    count: 24
                },
                id: 'bullet_casull'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { item: 'minecraft:tnt' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:he',
                    count: 24
                },
                id: 'bullet_explosive'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:dragons_breath',
                    count: 48
                },
                id: 'bullet_dragonsbreath'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.output.item)) return;

        const inputs = recipe.inputs.map((input) => {
            if (input.base_ingredient) {
                return { basePredicate: input.base_ingredient, count: input.count || 1 };
            }
            return input;
        });
        const hasAllItems = inputs.every((input) => {
            const options = Array.isArray(input) ? input : [input];
            return options.every((option) => !option.item || e6ePortedItemExists(option.item));
        });
        if (!hasAllItems) return;

        const result = { id: recipe.output.item, count: recipe.output.count || 1 };
        if (recipe.output.nbt) {
            const flareColor = /^\{\s*flareColour\s*:\s*(-?\d+)\s*\}$/.exec(recipe.output.nbt);
            if (flareColor) {
                result.components = { 'minecraft:custom_data': { flareColour: Number(flareColor[1]) } };
            }
        }

        const id = recipe.id ? 'immersiveengineering:blueprint/' + recipe.id : null;
        try {
            const registered = event.custom({
                type: 'immersiveengineering:blueprint',
                inputs,
                category: recipe.category,
                result
            });
            if (id) registered.id(id);
        } catch (error) {
            console.error(`[E6E ported recipe] immersiveengineering:blueprint/${recipe.id || 'unnamed'}: ${error}`);
        }
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { count: 2, basePredicate: { tag: 'forge:plates/aluminum' } },
                { tag: 'forge:ingots/energized_steel' },
                { tag: 'forge:wires' }
            ],
            category: 'components',
            output: {
                id: 'modularrouters:blank_module',
                count: 2
            },
            id: 'modularrouters:blank_module'
        },
        {
            inputs: [
                { count: 2, basePredicate: { tag: 'forge:plates/aluminum' } },
                { count: 5, basePredicate: { tag: 'forge:nuggets/electrum' } },
                { tag: 'forge:wires' }
            ],
            category: 'components',
            output: {
                id: 'modularrouters:blank_upgrade',
                count: 2
            },
            id: 'modularrouters:blank_upgrade'
        },
        {
            inputs: [
                { item: 'modularrouters:blank_upgrade' },
                { item: 'modularrouters:blank_module' },
                { item: 'powah:capacitor_blazing' },
                { tag: 'forge:wires' }
            ],
            category: 'components',
            output: {
                id: 'modularrouters:augment_core',
                count: 2
            },
            id: 'modularrouters:augment_core'
        }
    ];

    recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.output.id)) return;
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
})();
