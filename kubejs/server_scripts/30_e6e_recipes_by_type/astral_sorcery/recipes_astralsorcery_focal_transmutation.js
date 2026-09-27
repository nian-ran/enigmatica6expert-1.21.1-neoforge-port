// 配方类型：astralsorcery:focal_transmutation
// 中文名称：聚焦转化
// 用途：用于登记星辉魔法的聚焦转化配方。

(function () {
if (e6ePortedRecipeModLoaded('astralsorcery')) {
    ServerEvents.recipes((event) => {
        const addFocalTransmutation = (input, output, id, requiresFocusedStarlight) => {
            if (!e6ePortedItemExists(input) || !e6ePortedItemExists(output)) return false;

            event.custom({
                type: 'astralsorcery:focal_transmutation',
                color: -1,
                duration: 100,
                input_display_stacks: { item: input },
                input_predicates: [{ type: 'minecraft:matching_blocks', blocks: input }],
                output_states: [{ data: { Name: output }, weight: 1 }],
                requires_focused_starlight: requiresFocusedStarlight
            }).id(id);
            return true;
        };

        const getTaggedBlockItems = (tags) => {
            const ids = new Set();
            tags.forEach((tag) => {
                try {
                    Ingredient.of(`#${tag}`).stacks.forEach((stack) => ids.add(stack.id));
                } catch (error) {
                    // 忽略不存在的可选标签。
                    // 忽略目标端不存在的可选标签。
                }
            });
            const items = [];
            ids.forEach((id) => {
                if (e6ePortedItemExists(id) && !id.includes('chunk')) items.push(id);
            });
            return items;
        };

        // 星辉魔法 2.0 已为原生铁矿提供旧版铁矿配方。
        // Astral Sorcery 2.0 已为原版铁矿提供转化，因此这里只补充旧版标签中的其他铁矿。
        const nativeIronOres = new Set(
            getTaggedBlockItems(['minecraft:iron_ores']).concat([
                'minecraft:iron_ore',
                'minecraft:deepslate_iron_ore'
            ])
        );
        getTaggedBlockItems(['forge:ores/iron', 'c:ores/iron']).forEach((input) => {
            if (nativeIronOres.has(input)) return;
            const path = String(input).replace(':', '_').replace(/[^a-z0-9_/-]/g, '_');
            addFocalTransmutation(
                input,
                'astralsorcery:starmetal_ore',
                `enigmatica:base/astralsorcery/focal_transmutation/starmetal_ore_from_${path}`,
                false
            );
        });

        // 原生 diamond_ore 配方已能通过聚焦星光产出 emerald_ore。
        // 原版钻石矿石已有聚焦星光转化为绿宝石矿石的配方；这里只补充其他旧标签矿石。
        getTaggedBlockItems(['forge:ores/diamond', 'c:ores/diamond']).forEach((input) => {
            if (input === 'minecraft:diamond_ore') return;
            const path = String(input).replace(':', '_').replace(/[^a-z0-9_/-]/g, '_');
            addFocalTransmutation(
                input,
                'minecraft:emerald_ore',
                `enigmatica:base/astralsorcery/focal_transmutation/emerald_ore_from_${path}`,
                true
            );
        });

        // 旧工作台升级探索祭坛的配方现在改为制作 2.0 版照明祭坛。
        // 旧版工作台转化为发现祭坛的配方，现在映射到 2.0 的照明祭坛。
        const workbenches = getTaggedBlockItems(['forge:workbench', 'forge:workbenches']);
        workbenches.forEach((input) => {
            const path = String(input).replace(':', '_').replace(/[^a-z0-9_/-]/g, '_');
            addFocalTransmutation(
                input,
                'astralsorcery:altar_illumination',
                `enigmatica:normal/astralsorcery/focal_transmutation/illumination_altar_from_${path}`,
                false
            );
        });

        // 保留原 E6E 资源蜜蜂方块转换候选配方。
        // 保留源 E6E 的 Resourceful Bees 星辉蜜脾方块转化候选。
        addFocalTransmutation(
            'resourcefulbees:starry_honeycomb_block',
            'astralsorcery:rock_crystal_ore',
            'enigmatica:base/astralsorcery/focal_transmutation/rock_crystal_ore_from_starry_honeycomb_block',
            false
        );
    });
}
})();

(function () {
if (e6ePortedRecipeModLoaded('astralsorcery')) {
    ServerEvents.recipes((event) => {
        if (global.isExpertMode === false) return;

        const addFocalTransmutation = (input, output, id, options = {}) => {
            if (!e6ePortedItemExists(input) || !e6ePortedItemExists(output)) return false;

            event.custom({
                type: 'astralsorcery:focal_transmutation',
                color: -1,
                duration: options.duration ?? 100,
                input_display_stacks: { item: input },
                input_predicates: [{ type: 'minecraft:matching_blocks', blocks: input }],
                output_states: [{ data: { Name: output }, weight: 1 }],
                requires_focused_starlight: options.requiresFocusedStarlight ?? false
            }).id(id);
            return true;
        };

        // 保留 E6E 自定义方块转换为星辉金属矿石的配方。
        // 保留 E6E 自定义方块转化为星辉矿石的配方。
        addFocalTransmutation(
            'kubejs:firmament',
            'astralsorcery:starmetal_ore',
            'enigmatica:expert/astralsorcery/focal_transmutation/starmetal_ore_from_firmament'
        );

        // Quark 1.21 将旧版彩色水晶方块命名为刚玉；保留原来的颜色循环。
        // Quark 1.21 将旧彩色水晶方块更名为刚玉方块；此处保留原来的颜色循环。
        if (e6ePortedRecipeModLoaded('quark')) {
            [
                ['red', 'orange'],
                ['orange', 'yellow'],
                ['yellow', 'green'],
                ['green', 'blue'],
                ['blue', 'indigo'],
                ['indigo', 'violet'],
                ['violet', 'white'],
                ['white', 'black'],
                ['black', 'red']
            ].forEach((e6eExpertCorundumPair) => {
                addFocalTransmutation(
                    `quark:${e6eExpertCorundumPair[0]}_corundum`,
                    `quark:${e6eExpertCorundumPair[1]}_corundum`,
                    `enigmatica:expert/astralsorcery/focal_transmutation/${e6eExpertCorundumPair[0]}_to_${e6eExpertCorundumPair[1]}_corundum`,
                    { requiresFocusedStarlight: true }
                );
            });
        }

        // 星辉魔法 2.0 的原生南瓜转蛋糕配方需要聚焦星光。
        // Astral Sorcery 2.0 的原生南瓜转蛋糕配方要求聚焦星光，因此此处采用相同条件。
        addFocalTransmutation(
            'farmersdelight:stuffed_pumpkin_block',
            'minecraft:cake',
            'enigmatica:expert/astralsorcery/focal_transmutation/cake_from_stuffed_pumpkin',
            { duration: 600, requiresFocusedStarlight: true }
        );

        // Atum 输入可选；旧探索祭坛映射为星辉魔法 2.0 的照明祭坛。
        // Atum 原料为可选内容；旧发现祭坛映射到 Astral Sorcery 2.0 的照明祭坛。
        if (e6ePortedRecipeModLoaded('atum')) {
            addFocalTransmutation(
                'atum:godforged_block',
                'astralsorcery:altar_illumination',
                'enigmatica:expert/astralsorcery/focal_transmutation/illumination_altar_from_godforged_block'
            );
        }
    });
}
})();
