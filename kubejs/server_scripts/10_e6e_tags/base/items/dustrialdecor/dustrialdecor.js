if (['dustrial_decor'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    var irontags = ['', '_aluminum', '_lead', '_tin', '_copper', '_brass'];

    irontags.forEach(function (tag) {
        event.remove('forge:ingots/iron' + tag, 'dustrial_decor:rusty_iron_ingot');
    });

    event.remove('forge:nuggets/iron', 'dustrial_decor:rusty_iron_nugget');
    event.remove('forge:nuggets/iron_copper', 'dustrial_decor:rusty_iron_nugget');

    //此脚本似乎也会移除默认 forge 标签；max 认为是 KubeJS 递归移除的缺陷。暂时手动补回这些标签，或先保持缺失状态。
    event.get('forge:ingots').add('dustrial_decor:rusty_iron_ingot');
    event.get('forge:nuggets').add('dustrial_decor:rusty_iron_nugget');
});

}
