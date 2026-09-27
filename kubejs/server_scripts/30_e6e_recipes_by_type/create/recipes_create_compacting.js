// 配方类型：create:compacting
// 名称：塑形

(function () {
    ServerEvents.recipes((event) => {
        // 明确声明为物品原料，避免物品标签被误判为流体标签。
        const itemIngredient = (id, count = 1) => Ingredient.of(id).withCount(count);
        event.recipes.create
            .compacting(Fluid.of('industrialforegoing:latex', 50), itemIngredient('minecraft:vine'))
            .heated()
            .id('enigmatica:latex_from_vine');

        event.recipes.create
            .compacting(Fluid.of('industrialforegoing:latex', 50), itemIngredient('minecraft:dandelion'))
            .heated()
            .id('enigmatica:latex_from_dandelion');

        event.recipes.create
            .compacting('powah:lens_of_ender', [
                itemIngredient('powah:photoelectric_pane'),
                itemIngredient('minecraft:ender_eye')
            ])
            .heated()
            .id('create:compacting/lens_of_ender');

        event.recipes.create
            .compacting('modularrouters:modular_router', [
                itemIngredient('minecraft:observer'),
                itemIngredient('immersiveengineering:circuit_board'),
                itemIngredient('modularrouters:augment_core')
            ])
            .heated()
            .id('modularrouters:modular_router');

        event.recipes.create
            .compacting('kubejs:rough_machine_frame', [
                itemIngredient('rftoolsbase:machine_base'),
                itemIngredient('kubejs:coated_machine_frame_top'),
                itemIngredient('#c:plates/steel',2)
            ])
            .heated()
            .id('kubejs:rough_machine_frame');

        event.recipes.create
            .compacting('minecraft:honey_block', [Fluid.of('productivebees:honey', 1000)])
            .id('create:compacting/honey_block');

        event.recipes.create
            .compacting('minecraft:honey_block', [Fluid.of('productivebees:honey', 1000)])
            .id('create:compacting/honey');
    });
})();
