// 配方类型：neovitae:hellfire_forge
// 中文名称：地狱火锻炉加工
// 用途：用于登记Neovitae的地狱火锻炉加工配方。

(function () {
if (e6ePortedRecipeModLoaded('neovitae')) {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/neovitae/hellfire_forge/';
    const data = {
        recipes: [
            {
                inputs: ['#forge:stone', '#forge:rods/blaze', 'bloodmagic:explosivepowder'],
                output: 'bloodmagic:primitive_explosive_cell',
                minimumDrain: 1200.0,
                drain: 200.0,
                id: `${id_prefix}primitive_explosive_cell`
            },
            {
                inputs: [
                    '#forge:ingots/gold_tin',
                    '#forge:dusts/redstone',
                    '#forge:glass',
                    '#bloodmagic:crystals/demon'
                ],
                output: 'bloodmagic:demonwillgauge',
                minimumDrain: 400.0,
                drain: 50.0,
                id: 'bloodmagic:soulforge/demon_will_gauge'
            },
            {
                inputs: ['#forge:storage_blocks/iron_tin', '#forge:gems/diamond', 'bloodmagic:infusedslate'],
                output: 'bloodmagic:masterroutingnode',
                minimumDrain: 400.0,
                drain: 200.0,
                id: 'bloodmagic:soulforge/master_routing_node'
            },
            {
                inputs: [
                    '#forge:ingots/gold_silver',
                    'bloodmagic:itemroutingnode',
                    '#forge:dusts/redstone',
                    '#forge:dusts/glowstone'
                ],
                output: 'bloodmagic:inputroutingnode',
                minimumDrain: 400.0,
                drain: 25.0,
                id: 'bloodmagic:soulforge/input_routing_node'
            },
            {
                inputs: [
                    '#forge:ingots/iron_lead',
                    'bloodmagic:itemroutingnode',
                    '#forge:dusts/redstone',
                    '#forge:dusts/glowstone'
                ],
                output: 'bloodmagic:outputroutingnode',
                minimumDrain: 400.0,
                drain: 25.0,
                id: 'bloodmagic:soulforge/output_routing_node'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (!Array.isArray(recipe.inputs) || recipe.inputs.some((input) => input == null) || recipe.output == null) return;
        const inputs = recipe.inputs.map(e6eMapNeoVitaeIngredient);
        if (inputs.some((input) => input == null)) return;
        const output = e6eMapNeoVitaeItemId(recipe.output);
        if (!output) return;

        event.recipes.neovitae.hellfire_forge(
            inputs,
            Item.of(output, recipe.count || 1),
            Math.round(recipe.minimumDrain),
            Math.round(recipe.drain)
        ).id(recipe.id);
    });
});

}
})();

(function () {
if (e6ePortedRecipeModLoaded('neovitae')) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/neovitae/hellfire_forge/';
    const recipes = [
        {
            inputs: [
                'bloodmagic:soulforge',
                '#forge:ingots/iesnium',
                'occultism:spirit_attuned_crystal',
                'glassential:glass_ghostly'
            ],
            output: 'bloodmagic:demoncrystallizer',
            minimumDrain: 500.0,
            drain: 100.0,
            id: 'bloodmagic:soulforge/demon_crystallizer'
        },
        {
            inputs: [
                'bloodmagic:soulforge',
                '#forge:ingots/iesnium',
                'eidolon_repraised:crimson_essence',
                'occultism:spirit_attuned_gem'
            ],
            output: 'bloodmagic:demoncrucible',
            minimumDrain: 400.0,
            drain: 100.0,
            id: 'bloodmagic:soulforge/demon_crucible'
        },
        {
            inputs: [
                'eidolon_repraised:soul_shard',
                'naturesaura:infused_iron',
                'glassential:glass_ghostly',
                'minecraft:conduit'
            ],
            output: 'bloodmagic:soulgempetty',
            minimumDrain: 1.0,
            drain: 1.0,
            id: 'bloodmagic:soulforge/pettytartaricgem'
        },
        {
            inputs: [
                'bloodmagic:soulgempetty',
                '#forge:ingots/forgotten_metal',
                'glassential:glass_ethereal',
                'quark:diamond_heart'
            ],
            output: 'bloodmagic:soulgemlesser',
            minimumDrain: 60.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/lessertartaricgem'
        },
        {
            inputs: [
                'bloodmagic:soulgemlesser',
                '#forge:ingots/enderium',
                '#botania:runes/helheim',
                'bloodmagic:infusedslate'
            ],
            output: 'bloodmagic:soulgemcommon',
            minimumDrain: 240.0,
            drain: 50.0,
            id: 'bloodmagic:soulforge/commontartaricgem'
        },
        {
            inputs: [
                'bloodmagic:soulgemcommon',
                'bloodmagic:demonslate',
                '#forge:ingots/gaia_spirit',
                '#bloodmagic:crystals/demon'
            ],
            output: 'bloodmagic:soulgemgreater',
            minimumDrain: 1000.0,
            drain: 100.0,
            id: 'bloodmagic:soulforge/greatertartaricgem'
        },
        {
            inputs: ['#forge:storage_blocks/gold', 'eidolon_repraised:crimson_essence'],
            output: 'eidolon_repraised:arcane_gold_block',
            minimumDrain: 32.0,
            drain: 16.0,
            id: `${id_prefix}arcane_gold_ingot`
        },
        {
            inputs: [
                'bloodmagic:rawdemoncrystal',
                null,
                '#forge:storage_blocks/iesnium'
            ],
            output: 'occultism:iesnium_pickaxe',
            minimumDrain: 4000.0,
            drain: 2048.0,
            id: 'occultism:crafting/iesnium_pickaxe'
        },
        {
            inputs: ['occultism:dimensional_matrix', 'occultism:storage_controller_base'],
            output: 'occultism:storage_controller',
            minimumDrain: 32.0,
            drain: 16.0,
            id: 'occultism:crafting/storage_controller'
        },
        {
            inputs: ['bloodmagic:dungeon_stone', '#forge:ingots/tainted_gold', '#forge:gems/nitro'],
            output: 'bloodmagic:crystalline_resonator',
            minimumDrain: 1200.0,
            drain: 200.0,
            id: 'bloodmagic:soulforge/primitive_crystalline_resonator'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon_repraised:ender_calx',
                '#quark:crystal_clusters/white'
            ],
            output: 'bloodmagic:rawcatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/raw_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon_repraised:ender_calx',
                '#quark:crystal_clusters/green'
            ],
            output: 'bloodmagic:corrosivecatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/corrosive_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon_repraised:ender_calx',
                '#quark:crystal_clusters/red'
            ],
            output: 'bloodmagic:vengefulcatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/vengeful_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon_repraised:ender_calx',
                '#quark:crystal_clusters/yellow'
            ],
            output: 'bloodmagic:destructivecatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/destructive_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon_repraised:ender_calx',
                '#quark:crystal_clusters/indigo'
            ],
            output: 'bloodmagic:steadfastcatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/steadfast_catalyst'
        }
    ];

    recipes.forEach((recipe) => {
        if (!Array.isArray(recipe.inputs) || recipe.inputs.some((input) => input == null) || recipe.output == null) return;
        const inputs = recipe.inputs.map(e6eMapNeoVitaeIngredient);
        if (inputs.some((input) => input == null)) return;
        const output = e6eMapNeoVitaeItemId(recipe.output);
        if (!output) return;

        event.recipes.neovitae.hellfire_forge(
            inputs,
            Item.of(output, recipe.count || 1),
            Math.round(recipe.minimumDrain),
            Math.round(recipe.drain)
        ).id(recipe.id);
    });
});

}
})();
