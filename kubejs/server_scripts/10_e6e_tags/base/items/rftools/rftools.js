if (['rftools'].every((modId) => Platform.isLoaded(modId))) {
ServerEvents.tags('item', (event) => {
    //合成器
    for (let i = 1; i <= 3; i++) {
        event.get('rftools:crafter').add('rftoolsutility:crafter' + i);
    }

    //能量单元
    for (let i = 1; i <= 3; i++) {
        event.get('rftools:powercell').add('rftoolspower:cell' + i);
    }

    //维度储存单元
    var dimtiers = ['_simple', '', '_advanced'];
    dimtiers.forEach(function (tier) {
        event.get('rftools:dimensionalcell').add('rftoolspower:dimensionalcell' + tier);
    });

    //采石场形状卡
    var quarrycards = ['_fortune', '_silk', ''];
    quarrycards.forEach(function (card) {
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry' + card);
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry_clear' + card);
    });

    //流体形状卡
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_liquid');
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump');
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump_clear');
});

}
