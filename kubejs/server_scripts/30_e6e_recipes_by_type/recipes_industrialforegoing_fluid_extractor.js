// 配方类型：industrialforegoing:fluid_extractor
// 中文名称：流体提取机加工
// 用途：用于登记工业先锋的流体提取机加工配方。

(function () {
ServerEvents.recipes((event) => {
    treeRegistry.forEach((treeCategories) => {
        treeCategories.trees.forEach((tree) => {
            const strippedLog = getStrippedLogFrom(tree.trunk);
            if (!tree.sap || !strippedLog || tree.rate.dead <= 0) return;
            if (!e6ePortedItemExists(tree.trunk) || !e6ePortedItemExists(strippedLog) || !e6ePortedFluidExists(tree.sap)) return;

            const strippedState = strippedLog == 'minecraft:air'
                ? { Name: 'minecraft:air' }
                : { Name: strippedLog, Properties: { axis: 'y' } };

            // 工业先锋 1.21 的流体堆使用注册表 ID，
            // 去皮原木结果所用的方块状态对象。
            event.custom({
                type: 'industrialforegoing:fluid_extractor',
                input: { item: tree.trunk },
                result: strippedState,
                breakChance: 0.005,
                output: { id: tree.sap, amount: tree.rate.dead },
                defaultRecipe: false
            }).id(`industrialforegoing:fluid_extractor/${tree.trunk.replace(':', '/')}`);

            event.custom({
                type: 'industrialforegoing:fluid_extractor',
                input: { item: strippedLog },
                result: { Name: 'minecraft:air' },
                breakChance: 0.005,
                output: { id: tree.sap, amount: tree.rate.dead / 2 },
                defaultRecipe: false
            }).id(`industrialforegoing:fluid_extractor/${strippedLog.replace(':', '/')}`);
        });
    });
});
})();
