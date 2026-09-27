// 配方类型：naturesaura:animal_spawner
// 中文名称：动物生成仪式
// 用途：用于登记自然灵气的动物生成仪式配方。

(function () {
ServerEvents.recipes((event) => {
    if (!e6ePortedRecipeModLoaded('naturesaura') || !e6ePortedRecipeModLoaded('kubejs_naturesaura')) return;
    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/';
    const recipes = [
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/mana', 'naturesaura:gold_leaf'],
            entity: 'ars_nouveau:carbuncle',
            aura: 100000,
            time: 100,
            id: `${id_prefix}carbuncle`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/mana', 'naturesaura:ancient_sapling'],
            entity: 'ars_nouveau:sylph',
            aura: 100000,
            time: 100,
            id: `${id_prefix}sylph`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/mana', 'naturesaura:token_joy'],
            entity: 'ars_nouveau:drygmy',
            aura: 100000,
            time: 100,
            id: `${id_prefix}drygmy`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:cod', 'minecraft:iron_bars'],
            entity: 'quark:crab',
            aura: 30000,
            time: 40,
            id: `${id_prefix}crab`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:spider_eye', 'minecraft:lily_pad'],
            entity: 'quark:frog',
            aura: 30000,
            time: 40,
            id: `${id_prefix}frog`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:leather', 'minecraft:coal'],
            entity: 'quark:foxhound',
            aura: 150000,
            time: 120,
            id: `${id_prefix}foxhound`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:coarse_dirt', 'industrialforegoing:fertilizer'],
            entity: 'alexsmobs:cockroach',
            aura: 30000,
            time: 40,
            id: `${id_prefix}cockroach`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:coarse_dirt', 'minecraft:brown_mushroom'],
            entity: 'alexsmobs:cockroach',
            aura: 150000,
            time: 120,
            id: `${id_prefix}cockroach_2`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'resourcefulbees:bee_jar',
                'resourcefulbees:iron_honeycomb',
                'naturesaura:infused_iron_block'
            ],
            entity: 'resourcefulbees:infused_bee',
            aura: 400000,
            time: 320,
            id: `${id_prefix}infused_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'resourcefulbees:bee_jar',
                'resourcefulbees:gold_honeycomb',
                'naturesaura:tainted_gold_block'
            ],
            entity: 'resourcefulbees:tainted_bee',
            aura: 500000,
            time: 400,
            id: `${id_prefix}tainted_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'resourcefulbees:bee_jar',
                'resourcefulbees:tainted_honeycomb',
                'naturesaura:sky_ingot'
            ],
            entity: 'resourcefulbees:sky_bee',
            aura: 600000,
            time: 480,
            id: `${id_prefix}sky_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'farmersdelight:cabbage_leaf',
                'simplefarming:lettuce',
                'minecraft:carrot'
            ],
            entity: 'minecraft:rabbit',
            aura: 30000,
            time: 40,
            id: 'naturesaura:animal_spawner/rabbit'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'astralsorcery:nocturnal_powder'],
            entity: 'minecraft:phantom',
            aura: 200000,
            time: 200,
            id: 'naturesaura:animal_spawner/phantom'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:feather', 'minecraft:jungle_sapling'],
            entity: 'minecraft:parrot',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/parrot'
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'undergarden:gloom_o_lantern',
                'undergarden:inky_stew',
                'eidolon_repraised:fungus_sprouts'
            ],
            entity: 'alexsmobs:mungus',
            aura: 150000,
            time: 120,
            id: `${id_prefix}mungus`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#aquaculture:turtle', 'minecraft:seagrass'],
            entity: 'minecraft:turtle',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/turtle'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:brown_wool', 'minecraft:wheat'],
            entity: 'environmental:yak',
            aura: 50000,
            time: 60,
            id: `${id_prefix}yak`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'environmental:slabfish_effigy',
                'minecraft:tropical_fish',
                'upgrade_aquatic:luminous_prismarine_vertical_slab'
            ],
            entity: 'environmental:slabfish',
            aura: 50000,
            time: 60,
            id: `${id_prefix}slabfish`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:apple', 'minecraft:allium', 'minecraft:sweet_berries'],
            entity: 'environmental:deer',
            aura: 50000,
            time: 60,
            id: `${id_prefix}deer`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:seagrass', 'minecraft:egg', 'minecraft:wheat_seeds'],
            entity: 'environmental:duck',
            aura: 50000,
            time: 60,
            id: `${id_prefix}duck`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'thermal:satchel',
                ['minecraft:grass', 'minecraft:dead_bush'],
                'minecraft:rabbit_foot'
            ],
            entity: 'alexsmobs:kangaroo',
            aura: 50000,
            time: 60,
            id: `${id_prefix}kangaroo`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'astralsorcery:nocturnal_powder',
                'minecraft:prismarine_crystals',
                'upgrade_aquatic:glow_squid_bucket'
            ],
            entity: 'upgrade_aquatic:thrasher',
            aura: 100000,
            time: 120,
            id: `${id_prefix}thrasher`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/iron',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'resourcefulbees:zombie_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}zombie_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/tinkers_bronze',
                'minecraft:dark_prismarine'
            ],
            entity: 'resourcefulbees:water_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}water_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/slimesteel',
                'minecraft:slime_block'
            ],
            entity: 'resourcefulbees:slimy_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}slimy_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/tin',
                'minecraft:bone_block'
            ],
            entity: 'resourcefulbees:skeleton_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}skeleton_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/zinc',
                'minecraft:sandstone'
            ],
            entity: 'resourcefulbees:sand_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}sand_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/nickel',
                'minecraft:andesite'
            ],
            entity: 'resourcefulbees:rocky_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}rocky_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/gold',
                '#forge:dyes'
            ],
            entity: 'resourcefulbees:rgbee_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}rgbee_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/osmium',
                'minecraft:blue_ice'
            ],
            entity: 'resourcefulbees:icy_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}icy_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/steel',
                'minecraft:coal_block'
            ],
            entity: 'resourcefulbees:coal_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}coal_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/uranium',
                'thermal:gunpowder_block'
            ],
            entity: 'resourcefulbees:creeper_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}creeper_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/copper',
                'minecraft:oak_wood'
            ],
            entity: 'resourcefulbees:forest_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}forest_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/aeternium',
                'minecraft:obsidian'
            ],
            entity: 'resourcefulbees:obsidian_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}obsidian_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/aeternium',
                'architects_palette:ender_pearl_block'
            ],
            entity: 'resourcefulbees:ender_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}ender_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/netherite',
                'minecraft:glowstone'
            ],
            entity: 'resourcefulbees:glowstone_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}glowstone_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/netherite',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'resourcefulbees:pigman_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}pigman_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/cloggrum',
                'undergarden:catalyst'
            ],
            entity: 'resourcefulbees:clogged_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}clogged_bee`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'alexsmobs:maggot', 'farmersdelight:organic_compost'],
            entity: 'alexsmobs:fly',
            aura: 50000,
            time: 60,
            id: `${id_prefix}fly`
        }
    ];

    recipes.forEach((recipe) => {
        const mapInput = (input) => {
            if (Array.isArray(input)) return input.map(mapInput);
            if (!input.startsWith('#forge:')) return input;
            const common = input.replace('#forge:', '#c:');
            return e6eRecipeIngredientExists(common) ? common : input;
        };
        const inputs = recipe.inputs.map(mapInput);
        const entityNamespace = String(recipe.entity).split(':')[0];
        if (entityNamespace !== 'minecraft' && !e6ePortedRecipeModLoaded(entityNamespace)) return;
        if (!inputs.every(e6eRecipeIngredientExists)) return;
        try {
            event.remove({ id: recipe.id });
            event.recipes.naturesaura.animal_spawner(recipe.entity, inputs, recipe.aura, recipe.time).id(recipe.id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id}: ${error}`);
        }
    });
});
})();

(function () {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    if (!e6ePortedRecipeModLoaded('naturesaura') || !e6ePortedRecipeModLoaded('kubejs_naturesaura')) return;

    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/';
    const recipes = [
        {
            inputs: [
                'naturesaura:birth_spirit',
                'quark:bottled_cloud',
                'resourcefulbees:sand_honeycomb',
                'minecraft:sand'
            ],
            entity: 'alexsmobs:guster',
            aura: 150000,
            time: 120,
            id: `${id_prefix}guster`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/fluorite',
                'resourcefulbees:electrum_honeycomb',
                'powah:charged_snowball'
            ],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/lapis',
                'resourcefulbees:icy_honeycomb',
                'minecraft:blue_ice'
            ],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/apatite',
                'resourcefulbees:rocky_honeycomb',
                'minecraft:basalt'
            ],
            entity: 'thermal:basalz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}basalz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/sulfur',
                'resourcefulbees:coal_honeycomb',
                'minecraft:nether_bricks'
            ],
            entity: 'minecraft:blaze',
            aura: 150000,
            time: 120,
            id: 'naturesaura:animal_spawner/blaze'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'minecraft:blue_ice'],
            entity: 'ars_nouveau:wilden_guardian',
            aura: 250000,
            time: 120,
            id: `${id_prefix}wilden_guardian`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'valhelsia_structures:bone_pile'],
            entity: 'ars_nouveau:wilden_hunter',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_hunter`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'astralsorcery:nocturnal_powder'],
            entity: 'ars_nouveau:wilden_stalker',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_stalker`
        },
        {
            inputs: [
                'farmersdelight:honey_glazed_ham_block',
                'naturesaura:token_anger',
                'eidolon_repraised:shadow_gem',
                '#forge:ingots/forgotten_metal'
            ],
            entity: 'undergarden:masticator',
            aura: 5000000,
            time: 200,
            id: `${id_prefix}masticator`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'resourcefulbees:sand_honeycomb',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'alexsmobs:komodo_dragon',
            aura: 50000,
            time: 60,
            id: `${id_prefix}komodo_dragon`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:sand_honeycomb', 'minecraft:chicken'],
            entity: 'alexsmobs:rattlesnake',
            aura: 30000,
            time: 40,
            id: `${id_prefix}rattlesnake`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:sand_honeycomb', 'minecraft:golden_carrot'],
            entity: 'atum:camel',
            aura: 50000,
            time: 60,
            id: `${id_prefix}camel`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:shepherd_honeycomb', '#forge:wool'],
            entity: 'minecraft:sheep',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/sheep_white'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:boobee_honeycomb', 'minecraft:fire_charge'],
            entity: 'minecraft:ghast',
            aura: 120000,
            time: 150,
            id: 'naturesaura:animal_spawner/ghast'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:water_honeycomb', 'minecraft:heart_of_the_sea'],
            entity: 'minecraft:guardian',
            aura: 120000,
            time: 150,
            id: 'naturesaura:animal_spawner/guardian'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:water_honeycomb', 'minecraft:conduit'],
            entity: 'minecraft:elder_guardian',
            aura: 5000000,
            time: 200,
            id: `${id_prefix}elder_guardian`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:ender_honeycomb', 'archers_paradox:shulker_arrow'],
            entity: 'minecraft:shulker',
            aura: 150000,
            time: 100,
            id: 'naturesaura:animal_spawner/shulker'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'botania:red_string', 'minecraft:end_stone'],
            entity: 'minecraft:enderman',
            aura: 120000,
            time: 120,
            id: 'naturesaura:animal_spawner/enderman'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'minecraft:dandelion'],
            entity: 'alexsmobs:moose',
            aura: 100000,
            time: 100,
            id: `${id_prefix}moose`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:water_honeycomb', '#forge:dyes/black'],
            entity: 'minecraft:squid',
            aura: 50000,
            time: 40,
            id: 'naturesaura:animal_spawner/squid'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:shepherd_honeycomb', 'environmental:mud'],
            entity: 'minecraft:pig',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/pig'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:shepherd_honeycomb', '#forge:hay_bales'],
            entity: 'minecraft:cow',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/cow'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:shepherd_honeycomb', 'minecraft:golden_carrot'],
            entity: 'minecraft:horse',
            aura: 100000,
            time: 100,
            id: 'naturesaura:animal_spawner/horse'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:creeper_honeycomb', 'minecraft:gunpowder'],
            entity: 'minecraft:creeper',
            aura: 100000,
            time: 120,
            id: 'naturesaura:animal_spawner/creeper'
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:carpet', 'minecraft:chest'],
            entity: 'minecraft:llama',
            aura: 100000,
            time: 120,
            id: 'naturesaura:animal_spawner/llama'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:shepherd_honeycomb', 'minecraft:wheat_seeds'],
            entity: 'minecraft:chicken',
            aura: 30000,
            time: 40,
            id: 'naturesaura:animal_spawner/chicken'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:rocky_honeycomb', '#forge:gems/mana_diamond'],
            entity: 'quark:stoneling',
            aura: 2000000,
            time: 200,
            id: `${id_prefix}stoneling`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:water_honeycomb', 'quark:crab_leg'],
            entity: 'upgrade_aquatic:nautilus',
            aura: 30000,
            time: 40,
            id: `${id_prefix}nautilus`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#botania:runes/asgard',
                '#botania:runes/vanaheim',
                'bloodmagic:seersigil'
            ],
            entity: 'minecraft:wandering_trader',
            aura: 2000000,
            time: 400,
            id: `${id_prefix}wandering_trader`
        }
    ];

    recipes.forEach((recipe) => {
        const inputs = recipe.inputs.map((input) => {
            if (input.startsWith('resourcefulbees:') && input.endsWith('_honeycomb')) {
                return 'productivebees:configurable_honeycomb';
            }
            if (input.startsWith('#forge:')) {
                const common = input.replace('#forge:', '#c:');
                return e6eRecipeIngredientExists(common) ? common : input;
            }
            return input;
        });
        const entityNamespace = String(recipe.entity).split(':')[0];
        if (entityNamespace !== 'minecraft' && !e6ePortedRecipeModLoaded(entityNamespace)) return;
        if (!inputs.every(e6eRecipeIngredientExists)) return;
        try {
            event.remove({ id: recipe.id });
            event.recipes.naturesaura.animal_spawner(recipe.entity, inputs, recipe.aura, recipe.time).id(recipe.id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id}: ${error}`);
        }
    });
});
})();

(function () {
// 将 E6E 普通模式的 Wilden 动物生成仪式加入专家模式。
if (['naturesaura', 'ars_nouveau'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const recipes = [
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:blitz_rod', 'thermal:blitz_powder'],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: 'enigmatica:normal/naturesaura/animal_spawner/blitz'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:blizz_rod', 'thermal:blizz_powder'],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: 'enigmatica:normal/naturesaura/animal_spawner/blizz'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:basalz_rod', 'thermal:basalz_powder'],
            entity: 'thermal:basalz',
            aura: 150000,
            time: 120,
            id: 'enigmatica:normal/naturesaura/animal_spawner/basalz'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_nouveau:wilden_spike', 'minecraft:snow_block'],
            entity: 'ars_nouveau:wilden_guardian',
            aura: 250000,
            time: 120,
            id: 'enigmatica:normal/naturesaura/animal_spawner/wilden_guardian'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_nouveau:wilden_horn', 'minecraft:bone'],
            entity: 'ars_nouveau:wilden_hunter',
            aura: 150000,
            time: 120,
            id: 'enigmatica:normal/naturesaura/animal_spawner/wilden_hunter'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_nouveau:wilden_wing', 'astralsorcery:nocturnal_powder'],
            entity: 'ars_nouveau:wilden_stalker',
            aura: 150000,
            time: 120,
            id: 'enigmatica:normal/naturesaura/animal_spawner/wilden_stalker'
        }
    ];

    recipes.forEach((recipe) => {
        const entityNamespace = String(recipe.entity).split(':')[0];
        if (entityNamespace !== 'minecraft' && !e6ePortedRecipeModLoaded(entityNamespace)) return;
        if (!recipe.inputs.every(e6eRecipeIngredientExists)) return;
        try {
            event.custom({
                type: 'naturesaura:animal_spawner',
                ingredients: recipe.inputs.map((input) => input.startsWith('#') ? { tag: input.substring(1) } : { item: input }),
                entity: recipe.entity,
                aura: recipe.aura,
                time: recipe.time
            }).id(recipe.id);
        } catch (error) {
            console.error(`[E6E ported recipe] ${recipe.id}: ${error}`);
        }
    });
});
}
})();
