ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     secondary_output: Item.of('minecraft:sugar').withChance(0.5),
        //     output: Item.of('minecraft:diamond', 8),
        //     input: Item.of('minecraft:lead'),
        //     experience: 0.5,
        //     duration: 100,
        //     ignore_occultism_multiplier: true
        // }
    ];

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
