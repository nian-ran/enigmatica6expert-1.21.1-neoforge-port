// 移除源 normal 目录替换掉的原配方；同目录的自定义配方随后重新注册。
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) return;

    const outputs = [
        'torchmaster:feral_flare_lantern',
        'torchmaster:megatorch',
        'occultism:large_candle_white',
        'eidolon_repraised:candle'
    ];

    outputs.forEach((output) => {
        if (e6ePortedItemExists(output)) event.remove({ output });
    });
});
