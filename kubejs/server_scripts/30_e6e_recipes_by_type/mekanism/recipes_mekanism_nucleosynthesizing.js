// 配方类型：mekanism:nucleosynthesizing
// 中文名称：核合成加工
// 用途：用于登记通用机械的核合成加工配方。

(function () {
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/nucleosynthesizing/';
    /* 
        每单位耗时约消耗 4 万 RF。 
        耗时并非固定速度：能量缓存满时，机器会以 10000% 速度运行。  
           
    */
    var data = {
        recipes: [
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_trident' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_trident[minecraft:custom_data={CanCharge:1b,Riptide:0b,Channeling:0b,Energy:9223372036854775807L,Fluid:{FluidName:"biofuel",Amount:0},Special:0b,Selected:"ARTIFACT",Loyalty:0b}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_trident`
                //完成此合成约需 1000 亿 RF。
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_hammer' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_hammer[minecraft:custom_data={CanCharge:1b,Energy:9223372036854775807L,Fluid:{FluidName:"biofuel",Amount:0},Special:0b,Selected:"ARTIFACT",Beheading:0b}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_hammer`
                //完成此合成约需 1000 亿 RF。
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_drill' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_drill[minecraft:custom_data={CanCharge:1b,Special:0b,Selected:"ARTIFACT",Energy:9223372036854775807L,Fluid:{FluidName:"biofuel",Amount:0}}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_drill`
                //完成此合成约需 1000 亿 RF。
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_saw' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_saw[minecraft:custom_data={CanCharge:1b,Special:0b,Selected:"ARTIFACT",Energy:9223372036854775807L,Fluid:{FluidName:"biofuel",Amount:0}}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_saw`
                //完成此合成约需 1000 亿 RF。
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_backpack' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_backpack[minecraft:custom_data={CanCharge:1b,Special:0b,Selected:"ARTIFACT",Energy:9223372036854775807L}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_backpack`
                //完成此合成约需 1000 亿 RF。
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_nuke' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_nuke[minecraft:custom_data={CanCharge:1b,Special:0b,Selected:"ARTIFACT",Energy:9223372036854775807L,Fluid:{FluidName:"biofuel",Amount:0}}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_nuke`
                //完成此合成约需 1000 亿 RF。
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_launcher' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_launcher[minecraft:custom_data={CanCharge:1b,Energy:9223372036854775807L,Fluid:{FluidName:"biofuel",Amount:0},Special:0b,Selected:"ARTIFACT",Plunger:0b}]'),
                duration: 2500000,
                id: `${id_prefix}infinity_launcher`
                //完成此合成约需 1000 亿 RF。
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (!e6ePortedItemExists(recipe.itemInput.ingredient.item)) return;
        event.custom({
            type: 'mekanism:nucleosynthesizing',
            item_input: { item: recipe.itemInput.ingredient.item, count: recipe.itemInput.amount || 1 },
            chemical_input: { chemical: recipe.gasInput.gas, amount: recipe.gasInput.amount },
            output: recipe.output,
            duration: recipe.duration,
            per_tick_usage: false
        }).id(recipe.id);
    });
});
})();

(function () {
if (['astralsorcery', 'atum', 'bloodmagic'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/nucleosynthesizing/';
    /* 
        每单位耗时约消耗 4 万 RF。 
        耗时并非固定速度：能量缓存满时，机器会以 10000% 速度运行。  
           
    */
    var data = {
        recipes: [
            {
                output: Item.of('fluxnetworks:flux_plug'),
                itemInput: { ingredient: { item: 'powah:ender_cell_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                duration: 25000,
                id: `${id_prefix}flux_plug`
            },
            {
                output: Item.of('fluxnetworks:flux_point'),
                itemInput: { ingredient: { item: 'powah:ender_gate_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                duration: 25000,
                id: `${id_prefix}flux_point`
            },
            {
                output: Item.of('16x powah:crystal_blazing'),
                itemInput: { ingredient: { item: 'quark:blaze_lantern' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}crystal_blazing`
            },
            {
                output: Item.of('16x powah:crystal_niotic'),
                itemInput: { ingredient: { item: 'astralsorcery:celestial_crystal' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}crystal_niotic`
            },
            {
                output: Item.of('16x powah:crystal_spirited'),
                itemInput: { ingredient: { item: 'atum:osiris_godforged_block' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}crystal_spirited`
            },
            {
                output: Item.of('16x powah:crystal_nitro'),
                itemInput: { ingredient: { item: 'bloodmagic:largebloodstonebrick' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}crystal_nitro`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
