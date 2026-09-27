# E6E KubeJS 迁移记录

源：D:\HMCL\.minecraft\versions\Enigmatica6Expert\kubejs  
目标：D:\HMCL\.minecraft\versions\Enigmatica6Expert-1.21.1-NeoForge\kubejs  
版本：Minecraft 1.21.1 / NeoForge / KubeJS 7.2

## 已迁入

- 启动脚本：5 个，包括自定义物品/方块/流体注册、Expert 全局值和按目标已安装模组过滤的物品修改。
- 服务器脚本：267 个已迁移，425 个带依赖条件，88 个暂存；另将原版 `mine_stone` 进度迁为 1.21.1 数据包 JSON。条件脚本会按各自守卫运行；缺少依赖时跳过对应脚本或配方。
- 客户端脚本：9 个，包括配方查看器描述、隐藏项、配方移除和物品提示；条目按目标模组过滤。
- 资源：合并 461 个新文件；目标原有同路径文件未覆盖。

## 待处理

- 92 个服务器脚本及 17 个客户端脚本仍需重写或因依赖缺失而暂存。原 `normal` 目录的配方也纳入专家版迁移范围。CSV 按源文件列出状态和原因。
- 其余 1.16.5 数据包 JSON 与旧配置未复制。1.21 的 Data Components 替代大部分旧 NBT 写法；目标已安装 LootJS 3.7.0，尚未迁移的战利品事件需转为 LootJS 修改器或 1.21.1 数据包 JSON；旧 worldgen 事件目前不可用。

已迁入 Create Base 与 Expert 的 24 个含配方文件，以及原 `normal` 目录的 3 个含配方文件；两个 TODO 源文件没有配方内容。Create 配方逐条检查物品、标签、流体和输出，缺失依赖时只跳过对应配方。目标已安装 Create、KubeJS Create、Productive Bees、Lychee 和 LycheeJS。

原 E6E 的 `resourcefulbees:` 配方项不能直接用于目标版本。Create 压制、倒空和灌装中的通用蜂蜜改用 `productivebees:honey`；Productive Bees 没有与原版每一种蜂蜜流体及其方块一一对应的物品，因此这些品种专属配方暂不注册。专家模式六级压缩空间的蜂巢块改用 `productivebees:configurable_comb`，并以 `productivebees:bee_type` 数据组件区分蜜蜂：森林→煤、铝→铝、锌→锌、铀→铀矿、钴→锇、勤劳→下界合金。其中森林、钴、勤劳属于玩法替代选择；条件生成的蜜蜂还需相应模组及材料标签存在。Lychee 可用于后续世界合成移植；原 E6E Create 配方没有此类条目。

已对 24 个 Create 配方脚本和 1 个共享函数脚本执行 `node --check`，语法检查通过；Productive Bees 蜂巢块的数据组件配方尚未在游戏中重载验证。

高温物品事件已继续迁移到 Expert：玩家持有标签物品时由 tick 事件施加燃烧，丢弃最后一件时灭火；燃烧状态保存在各自玩家的持久数据中，以替代旧版共享的全局标记。

Expert 方块掉落也已切换为 LootJS 3.7 的 `LootJS.lootTables` 方式。修改按方块和掉落物是否存在分别守卫；当前实例缺少 Botania、Eidolon、MythicBotany 和 Dustrial Decor 时，相应的旧方块规则会跳过。

Apotheosis 附魔环境数值已改为 Apothic Enchanting 数据文件，按 1.21.1 的 `apothic_enchanting:enchanting_stats` 路径写入 44 项目标当前可用方块规则。缺少的 Botania、Eidolon、Astral Sorcery、Atum、MythicBotany、BYG、BetterEnd Forge 条目暂未生成；Environmental 的樱桃木重命名为 plum，因此书架 ID 同步改为 `environmental:plum_bookshelf`。Quark 旧色蜡烛映射到 1.21.1 原版彩色蜡烛，Occultism 白蜡烛映射到目标中的大型白蜡烛。

Expert Enigmatica 粉碎配方已按目标实例现有机器迁入：Occultism、Industrial Foregoing、Mekanism 富集仓、Immersive Engineering 粉碎机、Create 磨粉轮和 Ars Nouveau 粉碎配方。主产物及副产物概率按原配方保留；Pedestals、Astral Sorcery 和 Thermal 对应机器因目标实例未安装而跳过。

Base Enigmatica 粉碎配方已迁入相同的目标机器类型。目标实例当前只有 Upgrade Aquatic 的撕裂者牙齿配方会启用；Alex's Mobs 和 Astral Sorcery 条目由物品/标签存在性检查跳过。

本次日志问题已修正：石材与肉类物品标签不再因缺少一个旧模组而整份跳过，改为按目标注册表筛选现存物品；1.21.1 配方概率产物改用 Create 与 Immersive Engineering 附属的类型；缺少 Thermal 或 Astral Sorcery 时不构造其流体配方；Create 机械合成器的压缩机输出改用物品数据组件格式。
迁移清单：D:\gpt_work\e6e移植杂项文档\E6E KubeJS迁移清单.csv

2026-09-24 22:25 的 KubeJS 日志修复：Create 基础灌装在构造流体配方前检查实际流体 ID；基础与专家搅拌将可选模组产物延后到单条配方检查通过后创建，并仅在对应流体存在时构造附加配方；专家机械合成中的普通材料保留为字符串，避免缺失材料被提前解析；基础与专家 Enigmatica 粉碎使用 Immersive Engineering JS 的 `TagOutputJS` 包装主产物，Create 研磨将标签显式构造成物品原料。以上改动尚待游戏重新加载后的新日志确认。

2026-09-24 22:33 的 KubeJS 日志修复：Productive Bees 1.21.1 的蜂巢块物品 ID 是 `productivebees:configurable_comb`；`configurable_comb_block` 是配方类型名称。专家机械合成脚本已改用物品 ID，并在构造数据组件原料前检查该物品是否存在。

2026-09-24 22:37 的重新加载记录：KubeJS 服务器脚本 666/666 加载，配方解析失败数为 0。本轮随后迁入两组基础模式战利品：水下宝箱使用 LootJS 3.7 在原有战利品表中增加独立奖池，保留物品权重、数量和附魔等级；Repurposed Structures 海洋地牢与矿井改用 1.21.1 的战利品表路径。Aquaculture 海王馈赠杂物盒也增加四种 Upgrade Aquatic 海草，各自保留 10% 出现条件。可选物品与战利品表在运行时逐项检查。新增的两份脚本尚待下一次游戏重新加载确认。

同轮将 Occultism 野生阿弗利特的精华掉落覆盖为 1.21.1 数据包 JSON：基础掉落 1 个，掠夺附魔加成沿用旧专家包的 1–2 区间。目标 Occultism JAR 中仍提供此实体战利品表，数据文件放在新版单数 `loot_table` 路径。此覆盖也尚待游戏重新加载确认。

2026-09-24 22:44 的重新加载记录：KubeJS 服务器脚本 668/668 加载，配方解析失败数为 0。本轮随后用数据包覆盖 Project Vibrant Journeys 的贝壳方块掉落，保留鹦鹉螺壳、海晶碎片、海晶砂粒的 10:60:10 权重；Repurposed Structures 的七种府邸储藏室增加旧版食物奖池，使用新版复数 `mansions` 路径。食物奖池仅纳入当前注册的物品；两个 Sushi Go Crafting 食物和一个 Ars Nouveau 药水瓶的旧 NBT 属性尚待对应数据组件映射。本轮新增内容尚待游戏重新加载确认。

潮湿宝箱的珍宝、杂物和主掉落表已用 LootJS 3.7 补齐，使现有的宝箱右键脚本能够引用 `enigmatica:chests/soggy_treasure_box`。保留五次抽取、20:80 的子表权重及各奖品原始数量范围；旧版 `minecraft:scute` 映射为 `minecraft:turtle_scute`。缺失物品逐项跳过，Botania 法力戒指的旧 NBT 奖品暂缓迁入。此脚本尚待游戏重新加载确认。

气动工艺机械师小屋的现有战利品表也已用 LootJS 覆盖为旧专家包规则：抽取 4–6 次，按原权重、数量范围加入零件和 5–15 级附魔压缩铁护甲。缺失物品逐项跳过；此脚本尚待游戏重新加载确认。

按用户确认，原 `normal` 目录的配方也是本次专家版移植范围。原脚本确有 `global.isNormalMode` 守卫，目标脚本改为专家版运行。已将三份 Create 占位文件改为实际的压制、灌装和搅拌配方，并迁入 16 根木棍、四级 Mekanism 储物箱、HDPE 片/Quark 根/富集铁无序合成、紧凑机器墙的 Mekanism 灌注、Eidolon: Repraised 蜡烛、Torchmaster 灯笼/巨型火把、Occultism 大型白蜡烛和石头灵交易，以及 PneumaticCraft 的压力室、热框架冷却和热力植物配方；冷却温度、压力、产量与概率副产物均按源配方保留。热力植物的六条配方逐项检查材料、输出物品和流体；会与源专家配方争用原料的 Chorus/玻璃配方仅在旧专家依赖组未齐时注册。另迁入普通目录中的 Mekanism 压力反应室底物配方，映射为 1.21.1 chemical JSON 字段及 `c:fuels/bio` 标签；当 Materialis 在场时保留专家配方的能耗版本，并将专家反应脚本同步改为新版字段。Occultism 石头交易使用独立 ID，避免与专家版奥术石交易覆盖。Quark 的旧蜡烛配方映射到原版白蜡烛，其他旧版蜡烛物品也映射到目标物品或标签，并按目标物品和材料标签过滤。普通熔炉配方仅在 Eidolon: Repraised 未安装时作为回退，避免与同 ID 的专家熔炉配方冲突。其余 `normal` 条目在清单中保留“待适配”，不再以目录名称排除。新增配方尚待游戏重新加载确认，也需继续核对与 Expert 配方的同产物关系。

按用户指定，以目标已安装的 Oritech 1.2.12 和 KubeJS Oritech 0.4.5 替代 Thermal 加工。首批已将蜂蜜瓶离心成空瓶与 250 mB Productive Bees 蜂蜜映射到 Oritech 流体离心机，1000 mB 蜂蜜冷却成蜂蜜块映射到 Oritech 冷却机；原 `normal` 目录四条 Menril/Chorus 压榨双产物配方映射到流体离心机，900 mB 工业先锋乳胶制干橡胶、Menril 和 Chorus 流体结晶映射到冷却机；两条玻璃灌装配方映射到精炼机，两条 Mekanism 合金配方映射到铸造机。专家版原木热解成木炭与 125 mB 杂酚油也映射到精炼机。所有条目检查对应物品、标签和流体后才注册。Thermal 的能量、概率副产物、模具和催化剂机制尚未等价映射；其余 Thermal 引用不能仅替换命名空间，需逐项改写。首批 Oritech 配方尚待游戏重新加载确认。

按用户确认，目标实例中的 Eidolon: Repraised 可替代旧 Eidolon。目标 JAR 的模组 ID 与资源命名空间为 `eidolon_repraised`，并已安装 `kjseidolon` 附属；迁移脚本中的旧 `eidolon:` 注册表引用及模组加载守卫已映射到新 ID。物品路径已与目标 JAR 资源核对；相关配方仍待下一次游戏重载确认。

2026-09-25 00:00 的 KubeJS 报错修复：Ars Nouveau 缺失的 mana_fiber 改为先检查物品再构造数量；Farmer's Delight 烹饪锅配方改用 1.21.1 的 `recipe_book_tab`、`cookingtime` 和 `result.id` 字段，并逐项检查原料与产物；旧 Quark 彩色蜡烛改为原版彩色蜡烛，蜡烛材料标签改用 Productive Bees 蜡与原版蜜脾；PneumaticCraft 热力植物不再把缺失流体输入写成空数组；XNet 配方将旧版空 `forge:gems/diamond` 标签改为原版钻石并补齐存在性检查。五份改动脚本已通过 JavaScript 语法检查，运行时仍待下次游戏重载后的新日志确认。

继续将源普通目录配方纳入专家版：Flux Networks 控制器合成、Powah 各阶能量线缆与末影单元升级、Botany Pots 普通及染色花盆、Pretty Pipes 管道与合成终端。所有工作台配方使用 KubeJS 原生 shaped/shapeless 接口并在注册前检查物品和标签；Pretty Pipes 的旧 Thermal 固化橡胶映射为 Industrial Foregoing 干橡胶。对应行已在迁移清单标记为 conditional。当时目标实例尚未安装 KubeJS Powah 和 KubeJS Botany Pots；用户随后已加入 KubeJS Powah，本轮普通能量合成改用它的专用接口。KubeJS Botany Pots 仍未加入；Powah 附属也支持 energizing 配方类型。

本轮普通配方批次迁入 `normal/enigmatica/shaped.js` 的可通用部分：Powah 五个高阶各八种工作台配方，共 40 条；目标已安装木材模组的 29 种木材各六种 Storage Drawers 变体，共 174 条候选配方，合计 214 条配方定义。脚本注册前逐条检查输出、原料和标签；实际注册数待游戏重载日志确认。抽屉合成将旧 `forge:chests` 输入收窄为原版箱子以适配目标标签。该源文件的 Magic Feather/Lost Trinkets 配方因目标缺少对应模组暂存；Iron Jetpacks 配方需要 Thermal 专属部件，尚未找到 Oritech 的等价材料，暂不硬替换。该批只用原生工作台接口，不依赖 KubeJS Powah。

本轮继续迁入普通配方，共整理 52 条源配方定义：Powah 能量合成 16 条、Mekanism 精英工厂 mek_data 配方 9 条、Ars Nouveau 附魔装置配方 27 条。Powah 使用已加入的 KubeJS Powah 附属接口，Mekanism 与 Ars Nouveau 分别使用目标已安装的 KubeJS 附属；每条配方在注册前检查输出、原料及标签。三条旧 Carbuncle 蜜脾块箭矢配方映射到 Productive Bees 的 `productivebees:configurable_comb`；旧 Carbuncle 蜂转化配方因目标端没有可核验的等价蜂种而暂不迁入。Botania 缺失时对应 Powah 配方会逐条跳过；旧 `forge:` 标签若在目标注册表为空也会跳过。本轮未重载游戏，实际注册数及运行日志待确认。

2026-09-25 00:56 的 KubeJS 日志修复：Ars Nouveau 附魔装置脚本使用 Rhino 不接受的数组展开表达式，已改为 `concat`；Powah 附属在读取 `Ingredient` 对象数组时把首项判为空，已按附属接口改传物品 ID 或 `#标签` 字符串。两份脚本通过 JavaScript 语法检查；游戏运行时结果待下次重载日志确认。

2026-09-25 01:00 的 KubeJS 日志显示 Ars Nouveau 语法错误已消失，Powah 仍有 15 条配方因首项旧 `forge:` 标签为空而失败。Powah 脚本已将旧铁/铜复合方块标签拆成铁块与铜块两条输入配方，金、钻石、绿宝石方块改用原版物品 ID；铀锭与铀块改用目标 Mekanism JAR 中实际登记的 `c:ingots/uranium` 和 `c:storage_blocks/uranium`。源配方仍按 16 条计，目标新增 1 条铜块替代配方。新的运行结果待下次游戏重载确认。

2026-09-25 本轮日志修复与普通配方批次：粉碎脚本的 Aquamarine 输入改为目标端实际的 `astralsorcery:aquamarine_sand_ore` 物品，Create 磨粉 API 改传原料字符串；Astral Sorcery 旧 `infuser` JSON 已按目标 JAR 的 `astralsorcery:infusion` 字段重写。新增 KubeJS 数据覆盖修正 Oritech/Create 的 NeoForge 流体原料格式、为 CoFH 专用抽屉钥匙加 `cofh_core` 加载条件，并给 Ars Nouveau 两本空名法术书补上有效名称。已静态解析这四个 JSON 文件；尚未重新加载游戏。

按用户要求，本批加入 51 条专家模式配方定义：Industrial Foregoing shaped 23 条、Nature's Aura 树仪式 17 条、Wilden 生成仪式 2 条、Occultism 仪式 3 条、Apothic Spawners 刷怪笼属性修改 6 条。树仪式中的 NaturesStarlight 1 条、Thermal/Astral Sorcery 动物生成 4 条及依赖缺失物品的刷怪笼修改 12 条继续暂存。迁移清单已同步更新。配方与新覆盖文件等待下一次游戏重载确认。

本次日志仍显示 Eidolon Repraised 0.5.0.2 原生数据中的 3 条仪式使用空 `focus_items` 列表，1.21.1 Ingredient 编解码器拒绝空条目。为避免擅自增加额外仪式材料，暂未改写其祭品；需升级/修复该模组配方或确认可接受的焦点物品后再处理。此次 Astral Sorcery 配方工作检查到 `KubeJS More Recipe Types` 文档提供 Infuser 辅助函数，目标实例未发现已加载该附属；Apothic Spawners 未发现对应的 KubeJS 配方类型附属，本批使用原生 JSON 配方。

2026-09-25 本批迁入源 Base Thermal Press 蜜脾压缩/拆分配方：对照目标 Productive Bees 1.21.1 JAR 中实际存在的蜜蜂产物数据，将 38 种同名蜂种映射为带 `productivebees:bee_type` 组件的 `configurable_honeycomb` 与 `configurable_comb`，新增 76 条工作台配方定义；其余 41 种旧 Resourceful Bees 蜂种在目标 PB 配方数据中没有同名产物，暂时保留为待替代项。配方使用 KubeJS 原生 shapeless API，不依赖模组专属 recipe builder。检查时发现 Productive Bees Genesis 提供 KubeJS 蜜蜂配方注册钩子，但目标 mods 目录未安装；此附属不影响本批通用工作台配方，后续改写 PB 蜜蜂专属配方时可先加入。新脚本尚未在游戏重载验证。


2026-09-25 PneumaticCraft 专家配方继续移植：目标 mods 已安装 PneumaticCraft、KubeJS PneumaticCraft、Oritech/KubeJS Oritech 与 Productive Bees。专家 assembly、pressure chamber、shaped、thermo_plant 四份脚本去掉旧版多个模组必须同时存在的整组门槛，改为仅要求 PneumaticCraft 并逐配方检查目标原料、产物或流体；把可直接对应的 thermal:machine_frame 替换为 oritech:machine_frame_block，并把 resourcefulbees:otherworldly_honey 替换为 productivebees:honey。脚本含 273 条候选配方定义（assembly 132、pressure chamber 63、shaped 47、thermo plant 31）；缺失的旧版专属物品/流体会由逐配方检查跳过，实际注册数量待重载日志确认。迁移清单同步更新。

2026-09-25 06:14 日志修复：PneumaticCraft assembly/pressure chamber 的产物改为 1.21.1 所需的 `id` 字段，thermo plant 的可选输入不再写空数组，移除 pressure chamber 未声明且未使用的变量；修正普通 Apothic Spawners/Occultism 脚本中 Rhino 不支持的展开语法，以及 Nature's Aura 局部变量重声明。Create 粉碎脚本直接输出物品原料 JSON，避免物品标签被 KubeJS Create API 误判为流体。PneumaticCraft shaped 的旧版 `Item.of(物品, NBT字符串)` 写法已清除；旧配方预装的安全升级和特定药水/容器数据仍需确定 1.21.1 对应组件后恢复，目前对应物品使用普通物品堆。Occultism 两件矿工工具的自定义数据已迁为 `minecraft:custom_data`。上述更改尚待新的游戏重载日志确认。

2026-09-25 06:22 日志修复：PneumaticCraft assembly 114 条与 pressure chamber 51 条候选配方因旧 `pneumaticcraft:stacked_item` 原料序列化类型已不存在而报错；对照目标 8.2.23 模组自带 JSON，移除该字段，保留 `item/tag` 与 `count`。Nature's Aura 树仪式将数组原料筛选改为无局部变量写法，规避 Rhino 的重声明异常。新日志显示前轮 Create、thermo plant 与其他普通配方脚本未再报错；本轮改动仍待下一次重载确认。

2026-09-25 06:25 日志修复：仅剩 5 条 Powah 反向拆解压力室配方报错，因 thermo generator 和 energy cell 的最大堆叠数为 1；把每条配方的 3 台发电机、2 个能量单元拆成五个单件产物，加上 1 台 furnator，保持原总产出。专家版中三条普通压力室配方与专家配方 ID 重复，现仅在非专家模式注册普通版本，专家版本保留原 ID。上述改动待下一次重载确认。

2026-09-25 普通配方收尾：新增 2 条可安全映射的配方定义。Immersive Engineering 混凝土 `turn_and_copy` 按 IE 12.4.2 的 `fluid_stack`、`id/count` 与 `c:` 标签格式重写；Industrial Foregoing 液态星光激光钻配方按 1.21.1 的 `biome_filter`、`dimension_filter` 和流体对象格式重写，并只引用目标实例存在的末地群系。液态生命精华因目标缺少 Blood Magic 而保留暂存。

其余普通目录暂存项已更新清单原因：IE terminite 合金/电弧炉配方缺少 BetterEnd Forge；Atum 石切、BYG 黑砂、Enderium 输入及 Resourceful Bees T2–T4 Apiary 在目标端没有可确认的对应内容；Astral Sorcery 2.0 没有旧 `block_transmutation` 配方类型；Blood Magic、Botania、Compact Crafting、Emendatus Enigmatica、Masterful Machinery、MythicBotany、Refined Crafter Proxy 与 Tinkers Construct 不在目标模组列表。Thermal 普通压力燃料使用的 Industrial Foregoing biofuel 已有 Oritech 原生燃料发电兼容，因此不重复注册；旧版每桶 1,000,000 FE 的数值无法通过 Oritech `fuel_generator` 的 `time` 字段等价表达，暂不擅自改平衡。

附属核对：目标已安装 Immersive Engineering JS。目标未安装 KubeJS Nature's Aura；该附属有 1.21.1 NeoForge 版本，但剩余的 Nature's Aura 祭坛配方仍缺 Enderium 输入，另有 3 条 Thermal 生物配方因目标无对应实体暂存。KubeJS Industrial Foregoing 未找到可确认的 1.21.1 NeoForge 版本，因此本轮直接使用目标 IF JAR 中定义的原生 JSON 字段。新增内容待游戏下次重新加载后的 KubeJS 日志确认。

普通配方收尾复核再增补 9 条：Nature's Aura Wilden Stalker 生成仪式 1 条（目标已有 nocturnal powder 与 Wilden 材料）；Apothic Spawners 的 no_ai、ignore_players、ignore_conditions、max_nearby_entities 各含正向/反向共 8 条。Apothic Spawners 配方按目标 JAR 中现有的 stat 类型和字段构造，并在物品存在时注册。其余 4 条刷怪笼修改依赖未安装的 Glassential 与 Botania；Nature's Aura 另外 3 条 Thermal 生物目标端无对应实体。Apothic Spawners 未发现可确认的 KubeJS 专用附属，使用模组原生配方 JSON。新增脚本仍待游戏重载确认。

2026-09-25 普通配方收尾续迁：用户确认由 NeoVitae 替代 Blood Magic，且相关 KubeJS 附属已加入。目标 mods 已核对到 NeoVitae、NeoVitae KubeJS、KubeJS Industrial Foregoing 与 KubeJS Nature Aura。旧普通目录的中级切削液配方与 NeoVitae 原生 `neovitae:alchemytable/intermediate_cutting_fluid` 在原料、产物及参数上完全一致，因此直接复用原生配方，避免生成重复项；恶魔石工作台配方改用 `neovitae:dungeon_stone` 和 `#neovitae:crystals/demon`。IF 液体激光钻使用已安装附属的 `event.recipes.industrialforegoing.laser_drill_fluid` API，保留液态星光，并将旧生命精华流体映射为 NeoVitae 的 `neovitae:essentia_vitae_source`，保留 500 mB、红色透镜、村民实体、下界 Y=5–10 与权重 14；目标不存在的 BYG 群系已剔除。Nature Aura 祭坛条目仍因 Enderium 标签无物品而暂存，附属缺失原因已移除。游戏尚未重载，本批运行结果待新日志确认。

2026-09-25 NeoVitae 替代 Blood Magic 炼金台续迁：新增 base 26 条、expert 58 条静态定义，并保留 10 类升级附魔动态生成的 18 条候选（合计 102 条候选）。通过已安装的 NeoVitae KJS alchemytable 配方类型注册，保留专家模式守卫；将可确认的 Blood Magic 物品和恶魔晶体标签映射至 NeoVitae，并为旧配方 ID 与 NeoVitae 原生配方 ID 建立对应。普通 forge/c 标签现在按标签原样解析并检查是否含有效物品。旧版 SNBT 物品数据、缺失目标物品/标签及未映射物品的配方由保护逻辑跳过；专家脚本中 7 条 Patchouli 安全移除占位配方不注册。候选数不代表运行时实际注册数，待用户下次重载后根据 KubeJS 日志确认。

2026-09-25 NeoVitae 替代 Blood Magic 续迁：新增 50 条源配方定义的候选迁移，包含专家 Ara Vitae 25 条、基础/专家 Hellfire Forge 20 条、专家 Array 5 条。Ara Vitae 将 altarLevel、syphon、consumptionRate、drainRate 对应到 minTier、bloodNeeded、craftSpeed、drainSpeed；Soulforge 转入 NeoVitae Hellfire Forge 并保留 minimumDrain/drain；Array 使用已确认存在的 NeoVitae 配方纹理，旧 bindinglightningarray 纹理替换为目标 bindingarray。共享映射表新增可验证的 Blood Magic 表板、血球、誊写工具、路由节点、灵魂催化剂、demonite 等到 NeoVitae 对应物品的映射，并对标签和目标物品做存在检查。专家 Soulforge 的 12 条 Patchouli 删除占位没有注册；含旧损坏数据的 soulpickaxe 输入跳过。旧 Arc 配方要求可复用工具和额外产物，NeoVitae KJS 没有相同字段，因此保留待处理；Resourceful Bees 蜂罐 Entity NBT 也未强行映射到 Productive Bees。游戏尚未重载，实际注册结果待 KubeJS 日志确认。

本批附带修正：普通与专家炼金台脚本在局部 Blood Magic 映射表未命中时改用共享 NeoVitae 映射；不再把未知旧物品 ID 直接猜作相同路径，避免错误配方进入注册流程。

2026-09-25 普通材料统一配方续迁：将原 `normal/unification/unify_materials.js` 纳入专家版，按 1.21.1 KubeJS 的 `ServerEvents.recipes` 重写。覆盖每种目标端存在的材料标签所对应的矿石熔炼/高炉、齿轮、杆、板、线圈、Immersive Engineering 矿石粉碎副产物。旧 Thermal 压制工序改用 Oritech Foundry 并使用目标 IE 模具；同时保留原有 IE 压机、Create 压制和手工配方路径。标签优先使用 `c:`，仅在目标端旧 `forge:` 标签确实有内容时回退；配方按物品、标签和附属加载情况逐项筛选。目标已安装 KubeJS Oritech、Immersive Engineering JS 和 KubeJS Create。本轮未重载游戏，实际注册数与运行日志待确认。
共享原料存在性检查也已修正为先解析数量前缀，再验证其后的物品标签；因此 `4x #c:ingots/...` 这类 1.21.1 有数量的标签原料不会被误判为缺失。

2026-09-25 专家材料统一配方重整：移除旧专家统一脚本要求 Astral Sorcery、Blood Magic、Botania、Interactio、Thermal 同时存在的全局门槛，因此通用矿石冶炼、金属加工和 IE 粉碎不再被缺少的魔法模组整组阻断。改用目标端 `c:` 标签优先、`forge:` 标签回退；Thermal 压制改为 Oritech 装配机的四个逐件输入，保持专家版 4:4、16:4 的材料产出比例，IE 压机/Create 压制继续作为可用路径。Thermal slag 与 Blood Magic corrupted tiny dust 输出分别映射到目标 IE 渣和 NeoVitae 腐化微尘。Botania/Interactio 专属的魔力注入、雷电与星光物品转化仍需适配目标版世界合成方案；Ara Vitae 血晶融合已使用 NeoVitae 配方类型，但该整段魔法链尚受前述步骤依赖门控。本轮未重载游戏，实际注册数量与运行结果待日志核对。

普通材料统一配方同步纳入专家版：源列表共 77 种材料，脚本按存在的目标标签动态生成矿石熔炼/高炉、齿轮、杆、板、线圈和 IE 粉碎副产物；每种材料最多覆盖 16 条配方路径，理论上限 1,232 条，实际注册数由目标物品、标签和附属决定。Oritech Foundry 用于一件原料加模具的配方，四输入 Oritech Assembler 用于保持多份输入与输出比例；未把输入堆叠数误当成 Oritech Ingredient 支持的数量字段。新增及改写脚本等待下次游戏重载验证。

2026-09-25 基础材料加工续迁：为源端 77 种材料列表新增动态 1.21.1 配方适配，覆盖 Create 矿石粉碎/磨粉、宝石矿粉碎、锭/宝石磨粉、储存块粉碎与洗矿；Mekanism 粉碎/富集；Immersive Engineering 宝石矿处理、宝石及指定合金粉碎；原版矿石与粉尘熔炼；Occultism 与 Ars Nouveau 的金属/宝石粉碎。配方按目标 `c:`、`forge:` 或 Create 标签及目标物品逐项筛选，Oritech 替代环境未引用 Thermal。部分源端副产物依赖未安装物品时会省略该副产物。旧 Mekanism 多阶段矿石浆料、IE 锤砸/硬币、Pedestals、Tinkers Construct 等基础材料加工分支仍待后续移植。本轮未重载游戏，实际配方注册结果待下次 KubeJS 日志确认。

2026-09-25 基础染料来源配方续迁：移植目标端染料来源表的动态配方路径，覆盖 Create、Ars Nouveau、Immersive Engineering、Mekanism 富集与颜料提取、Occultism、Pedestals、Atum，以及 Oritech 离心机替代旧 Thermal 离心的稳定主产物。Oritech 离心机配方不伪造随机副产物；可用的 Create/IE/Ars 粉碎配方保留源端概率副产物。目标端不存在的原料和模组会按加载状态跳过；Botania、Atum、Pedestals 当前未安装。此脚本尚未经游戏重载验证。

2026-09-25 统一产物职责调整：用户确认目标端由 Almost Unified 负责统一物品/配方产物。已核对目标模组 ID 为 `almostunified`，并让迁移版 `unify_outputs.js` 在该模组加载时跳过重复的 `event.replaceOutput`；只有未安装 Almost Unified 时才运行旧 KubeJS 回退。Create、Mekanism、IE 等材料粉碎/熔炼加工配方仍由 KubeJS 注册，这些是加工途径而非物品归一规则。

2026-09-25 基础材料加工续迁：在 IE JS 附属和压模物品存在时，为材料动态加入 IE 锤砸矿石/宝石配方，以及 IE 9 格压缩与拆分模具配方（锭/宝石压储存块、储存块拆成锭/宝石、锭与金粒互转）。输入沿用目标端非空物品标签并保留 9:1 数量；排除源端明确不做压缩的末影、琥珀和石英。旧 Thermal coin die 在目标 IE 没有已确认等价模具，硬币压制仍暂存。本轮未重载游戏，配方注册结果待日志确认。


2026-09-25 基础配方输入替换续迁：启用此前被旧版模组全量门槛停用的通用替换脚本，79 条原输入替换改为逐条检查目标物品与标签；缺失模组、物品和空标签只跳过对应规则。把 normal/recipes/replace_input.js 的 Compact Machines 与 Powah 专家版相关替换合并进基础脚本，并纳入可用的 Ars Nouveau 材料替换。染料配方按目标染料标签、颜色方块、玻璃、沙砾等注册表内容筛选，Atum 分支仅在模组加载时运行。Almost Unified 继续负责统一物品与产物；本轮 KubeJS 只调整配方输入。未重载游戏，实际注册与运行结果待后续 KubeJS 日志确认。



2026-09-25 基础无序配方续迁：解除旧版全模组同时安装的总门槛，移植 64 条静态无序配方定义并按目标端输出物品、全部输入和标签筛选；将简单数量产物改为 KubeJS 可读的数量物品字符串，避免脚本预先解析未安装模组的物品。保留 Patchouli/Akashic Tome 书籍配方，Resourceful Bees 手册仅在其模组存在时注册。Botany Pots 各颜色花盆配方只使用目标已注册的花盆和非空染料标签；Atum 陶瓷仅在 Atum 已加载时注册；材料矿石拆分仅在旧材料物品与标签存在时注册。Thermal、BYG、Botania 等目标端缺失内容不硬映射。该批使用 KubeJS 核心无序合成 API，不需要专用配方附属；Almost Unified 继续处理产物统一。未重载游戏，实际注册数与运行结果待日志确认。


2026-09-25 基础配方移除规则续迁：移除旧版要求 Astral Sorcery、Atum、Blood Magic、Botania、BYG、Thermal 等全部同时安装的总门槛，恢复 47 处核心 KubeJS event.remove 调用；固定 ID 列表含 186 项、正则 ID 列表含 38 项，并启用原有输出、配方类型、模组及石切筛选。目标端缺少的物品、模组或配方 ID 不会命中筛选，因此不需要逐个模组附属。该脚本负责移除旧配方，不承担 Almost Unified 的物品统一职责。未重载游戏，移除范围和后续配方加载情况待 KubeJS 日志确认。

2026-09-25 专家版配方续迁：专家模式配方移除脚本解除旧版缺失模组总门槛，保留专家模式守卫，启用 138 个固定/正则配方 ID 过滤及其他类型/输出移除。Patchouli 占位配方候选共 111 条，仅为目标端已注册输出及 altered_recipe_indicator 创建，避免缺失的 Botania、Blood Magic、Atum 等物品触发空配方。专家输入替换脚本解除 Atum、Botania、Meet Your Fight、Resourceful Bees、Thermal 总门槛，25 条规则按输入和替代物品/标签逐项筛选，恢复 Powah、Storage Drawers、Framed Blocks、Integrated NBT、Little Logistics 等可用替换。输入替换使用 KubeJS 核心接口，无需额外 recipe type 附属；Almost Unified 的产物统一职责未改动。未重载游戏，实际匹配与占位配方注册待日志确认。
2026-09-25 Immersive Engineering Arc Furnace 配方续迁：基础 18 条、专家 33 条，以及源普通目录 1 条，共整理 52 条配方定义；普通配方按要求并入专家脚本。目标已安装 Immersive Engineering JS 附属，因此使用其 `arc_furnace` 配方 API。移除旧版 Thermal、TConstruct、Atum、Botania 等必须同时安装的整组门槛，按主原料、每个副料和主产物逐条筛选，并在旧 `forge:` 标签无内容时尝试同名 `c:` 标签。目标缺失的旧配料或任一产物时整条配方安全跳过，保持原始多产物比例。基础黄铜配方改为输出 Create 黄铜锭，由 Almost Unified 处理统一。普通目录终界尘/terminite 配方已并入专家文件，但 BetterEnd Forge 与目标产物未安装，运行时会跳过。脚本本轮未重载，实际注册结果待 KubeJS 日志确认。
2026-09-25 Immersive Engineering Alloy/Crusher/Blast Furnace 续迁：基础 Alloy 5 条、专家 Alloy 27 条、普通目录 Alloy 1 条（并入专家）、基础 Crusher 17 条、基础/专家 Blast Furnace 共 7 条，合计 57 条定义。目标 IE JS 附属已安装；移除这些文件的旧版多模组整组门槛，逐条检查主料、辅料、副产物及产物，旧 `forge:` 标签有内容时尝试同名 `c:` 标签。Thermal slag 以目标 IE slag 替换，旧 Emendatus obsidian dust 映射为 Mekanism obsidian dust；原料或概率副产物缺失的配方整条跳过，保留原配方产出结构。目标 1.21.1 的 pristine 装备原料使用 KubeJS 文档支持的 `minecraft:damage=0` 组件筛选；IE blueprint 输出使用目标 IE 原生配方 JSON 中的 `immersiveengineering:blueprint` 数据组件。基础黄铜统一输出 Create brass，普通 BetterEnd terminite 仍因目标缺少 BetterEnd 物品跳过。IE 配方脚本本轮未重载，实际注册结果待日志确认。

2026-09-25 Immersive Engineering Squeezer/Fermenter 续迁：源基础 Squeezer 的 56 条种子压榨配方与 Fermenter 的 70 条水果/作物发酵配方，共 126 条定义已接入。移除 Atum、Simple Farming、Alex's Mobs、BYG 等旧版模组的整组加载门槛，改为目标 IE 加载后逐条检查输入物品；IE 自身配方流体字段按已安装 1.21.1 IE JAR 的原生 JSON 改为 fluid.id，并为每条配方指定稳定 ID。物品缺失时跳过对应单条。IE 主模组与 KubeJS 附属已安装；本轮未重载游戏，实际注册情况待新日志确认。
2026-09-25 Ars Nouveau 专家附魔装置配方续迁：174 条候选定义（包括 Patchouli 占位配方）不再受 Alex's Mobs、Astral Sorcery、Atum、Botania、BYG、Blood Magic、Thermal 等旧依赖整组阻断；仅在 Ars Nouveau 与 KubeJS Ars 附属存在、且专家模式启用时执行。配方逐条核对产物、媒介、全部输入与标签；旧 forge 标签尝试回退到同名非空 c 标签，Eidolon/Blood Magic 项按目标 Eidolon: Repraised 与 NeoVitae 的已确认物品映射处理。旧版 ItemStack/NBT 构造已改成字符串配方描述和 1.21 数据组件选择器，以免缺失旧物品时提前构造失败。资源蜂的便携蜂罐配方因 Productive Bees Bee Cage 的目标类型数据没有已验证的一一映射，按物品检查跳过；Thermal Phyto-Gro 等无 Oritech 对等物不强行改名。移除了一条重复的 Void Jar 占位 ID。未重载游戏，实际注册数与运行日志待确认。
2026-09-25 专家版 Industrial Foregoing 溶解室续迁：把原脚本受 11 个旧版模组同时安装限制的入口改为仅要求 Industrial Foregoing 与已安装的 KubeJS Industrial Foregoing 附属，并保留专家模式条件。共整理 107 个源配方候选，其中包括 16 色花盆与漏斗花盆的动态配方；按 1.21.1 附属配方构造器重写输入流体、物品产物、处理时间及可选流体产物，逐条检查输入物品、标签、流体和产物。Blood Magic 生命精华流体映射至目标 NeoVitae 流体；目标端缺少的旧模组材料或流体不作猜测映射，相关单条配方会跳过。服务端脚本不依赖仅客户端定义的颜色数组，改为本地完整颜色表；不为缺省输入流体伪造水。KubeJS Industrial Foregoing 附属已在目标实例中确认安装。本轮仅做静态文件检查，未重载游戏，实际注册结果待 KubeJS 日志确认。

2026-09-25 专家版 Mekanism shaped 配方续迁：原专家版 75 条静态定义解除 Engineers Decor、Resourceful Bees、Thermal 同时安装的总门槛，保留 Mekanism 加载检查并逐配方核验输出和所有输入；普通版 4 个 basic/advanced/elite/ultimate Bin 配方已并入专家版脚本。Thermal machine_frame、rf_coil、hardened glass 标签、fluid_cell、machine_chiller 分别按功能对应替换为 Oritech machine_frame_block、magnetic_coil、industrial_glass_block、small_tank_block、cooler_block；forge 输入标签在同路径 c 标签有内容时优先使用。Thermal servo、hazmat、diving fabric、bottler、水源设备，以及旧 Engineers Decor / Resourceful Bees 专属部件未强行改名；缺失的单条材料会安全跳过。配方均为原版工作台 shaped 类型，目标端 KubeJS Mekanism 附属也已安装。本轮共 79 个配方定义候选，未重载游戏，实际注册结果待 KubeJS 日志确认。

2026-09-25 基础 Enigmatica shaped 配方续迁：移除原脚本要求 Astral Sorcery、Atum、Blood Magic、Botania、BYG、Eidolon、Resourceful Bees、Simple Farming、Tetra 和 Thermal 同时加载的总门槛；52 条静态定义及原有动态木材、树种、16 色染料配方统一经过目标物品与标签检查。简单数量产物改成 1.21.1 ItemStack 字符串，避免在过滤前解析目标不存在的模组物品。Blood Magic/Eidolon 输入与产物走已确认的 NeoVitae/Eidolon: Repraised 映射；Productive Bees 的蜜脾统一使用 configurable_honeycomb（不限定蜂种组件），蜂蜡使用 productivebees:wax。Morph-o-Tool 数据按目标物品存在性构造，Oritech wrench 取代已移除的 Thermal wrench。无等价内容的 Atum、BYG、Tetra、Thermal 岩棉/火药块/焦油块配方会安全跳过，不猜测替代物。此文件仅注册原版工作台 shaped 配方，不依赖模组专属配方序列化器；目标 KubeJS Oritech 已安装。本轮未重载游戏，实际注册数量待 KubeJS 日志确认。

2026-09-25 专家版 Occultism 仪式续迁：原脚本要求 Alex's Mobs、Astral Sorcery、Atum、Blood Magic、Botania、BYG、Eidolon、Materialis、Meet Your Fight、MythicBotany、Resourceful Bees、Simple Farming、TConstruct 与 Thermal 同时加载，现改为只要求目标 Occultism 与已安装的 Occultism KubeJS 附属，并逐条检查所有物品、标签、展示物和产物。整理 69 条静态仪式定义及 16 种 Mycelial Generator 动态候选，共 85 条候选。Forge 输入标签在同路径 c: 标签非空时回退；可确认的 Blood Magic、旧 Eidolon 与 Resourceful Bees 蜜脾分别转为 NeoVitae、Eidolon: Repraised 与 Productive Bees 通用蜜脾；没有等价目标物品的旧依赖会跳过对应配方。修正 ritual_dummy 的 JSON 类型为物品堆栈；损坏的旧版 SNBT 工具数据改用 1.21.1 damage 组件筛选，两个自定义矿工输出迁移到 minecraft:custom_data。Occultism 附属 1.11.0 的本地 ritual schema 确认 ritual_dummy 是 item_stack，且已安装目标 JAR。注释保留英文原文并逐条附中文翻译。仅静态审查，未重载游戏；注册结果待新 KubeJS 日志确认。
2026-09-25 基础 Resourceful Bees 工作台配方续迁：移除对 Alex's Mobs、Atum、Resourceful Bees、Simple Farming 全部同时加载的旧总门槛，改为要求目标 Productive Bees 并对 61 条静态定义逐条检查。旧蜂蜜脾输入统一映射至 Productive Bees configurable_honeycomb，压缩蜜脾映射 configurable_comb，蜂蜡与蜂蜡块分别映射 wax/wax_block；木材/下界/末地/岩石主题巢按目标实例已注册的 Productive Bees 巢物品映射。SushiGoCrafting 的物品堆叠数改为 1.21 ItemStack 数量字符串；shrimp 与 tobiko 的 Amount:15 依据目标 SushiGoCrafting JAR 的数据组件注册改为 sushigocrafting:amount=15。缺少同构输出的旧 Apiary 升级、蘑菇蜂巢、Atum Godforge 与目标未安装模组产物不会注册。配方属于原版 shaped 类型，不依赖 Productive Bees 专属 KubeJS 附属。静态审查通过，未重载游戏；实际注册数量待新日志确认。
2026-09-25 10:47 Industrial Foregoing 工作台配方续迁：基础 17 条、专家 41 条，共整理 58 条实际配方定义。去掉 Thermal、Botania、EnderStorage 等旧版模组必须同时加载的全局门槛；基础脚本仅要求 Industrial Foregoing，专家脚本保留专家模式条件，并按目标输出、每个材料和标签逐条筛选。优先使用非空 c 标签，空时回退同路径 forge 标签；可核实的 Thermal machine_frame、rf_coil、fluid_cell、energy_cell 分别映射至 Oritech machine_frame_block、magnetic_coil、small_tank_block、basic_battery。1.21.1 物品数据筛选改用 aura_bottle / syringe 的 custom_data 与鱼竿 damage 组件；范围升级产物保留 TitaniumAugment 自定义数据。thermal:fluid_cell_frame、enderium_glass、device_collector 没有已确认的目标等价物，相关配方会单条跳过。本批仅使用 KubeJS 原生 shaped 工作台接口，无需额外模组配方附属。未重载游戏；实际注册数待新 KubeJS 日志核对。
2026-09-25 10:58 Pretty Pipes 与 RFTools shaped 配方续迁：基础 Pretty Pipes 34 条、专家 Pretty Pipes 2 条、专家 RFTools 36 条，共核对 74 条源定义；普通目录两条同 ID 管道定义并入专家配方；RFTools 一条基础 quarry 卡定义由后续专家同 ID 配方替代，目标保留 71 个唯一配方 ID。解除 Thermal、Alex's Mobs、Atum、Botania、Meet Your Fight 的旧全局门槛，仅在对应基础模组加载时逐条检查输出、物品和标签。Thermal 机架/线圈/充电台/硬化玻璃分别映射至 Oritech machine_frame_block、magnetic_coil、charger_block、industrial_glass_block；Thermal redstone servo 用 Oritech machine_redstone_addon，PP Fluids 固化橡胶用 Industrial Foregoing dryrubber。Oritech 没有灰色岩棉等价物，依赖该物品的条目安全跳过。RFTools 注射器改用 1.21 minecraft:custom_data 组件。上述均为核心 shaped 工作台配方，无需专用 KubeJS recipe builder；RFTools Copy NBT 配方类型未纳入本批。未重载游戏，实际注册数待日志确认。
2026-09-25 RFTools 配方续迁：基础 Spawner 共 204 个源候选（155 个常规实体、46 条鱼类候选、3 条特殊实体），已改用目标 McJtyLib 1.21 的 `itemN.object` 数据结构；注册前移除同 ID 的原生 RFTools 配方。目标未安装 Alex's Mobs、Atum、BetterEnd Forge、Thermal，对应 67 个实体候选会跳过；其余最多 137 个再逐条检查材料和标签，旧 `forge:` 标签优先映射/回退到有内容的 `c:` 或旧标签。目标 RFTools 自带配方 JSON 已核对字段结构。专家 Copy NBT 工作台配方 4 条改为 `mcjtylib:copy_components` 包装原版 shaped recipe，并使用 1.21 `result.id` 格式；注册前移除同 ID 原生配方；Thermal hardened glass 映射为 Oritech industrial glass。Osmium gear 标签若目标为空，则依赖该材料的模块升级会被逐条略过，不改用不同材料替代。未发现专用 RFTools KubeJS 配方附属，本批使用 KubeJS 核心 `event.custom` 和 McJtyLib 原生序列化器。未重载游戏，实际注册数待 KubeJS 日志确认。

2026-09-25 专家字形与基础熔炼续迁：专家 Ars Nouveau 27 条源字形定义使用已安装的 KubeJS Ars Nouveau `glyph` 构造器，按目标原生字形配方的经验值核对 ONE/TWO/THREE 对应 27/55/160，NeoVitae 与 Eidolon: Repraised 输入逐条映射；缺失的 TooManyGlyphs 字形、其他目标物品会跳过。基础熔炉及高炉各约 30 条静态定义，另有旧 Atum 动态回收候选，已解除缺失模组的整文件门槛并逐条检查。旧版输出标签换成目标明确物品；Aquaculture 锡罐的 7 锡粒映射为 Mekanism 锡粒，旧末影/琥珀碎片没有可核实的对应产物，保持跳过。已安装的 KubeJS Oritech 附属接收 4 条没有概率副产物的旧 Thermal 粉碎候选；煤焦粉使用目标 IE 物品，远古残骸及黑曜石沿用 Oritech 原生加工。带概率产物的旧 Thermal 配方尚未迁入，避免改变其产出。以上仅核对静态文件和目标模组资源，未重载游戏；实际注册数仍需新日志确认。

2026-09-25 Occultism 与 Nature's Aura 续迁：基础 Occultism 粉碎共 49 条源定义解除旧模组总门槛；核对目标 Occultism 原生 JSON，使用 `result.type=occultism:item`、`id/count`，保留 `crushing_time` 与 `ignore_crushing_multiplier`，原料标签优先回退到非空 `c:`。已确认目标黑曜石粉为 Mekanism、木屑及煤焦粉为 IE 对应物品。目标已安装 Occultism KubeJS 附属，其本地类未提供 crushing schema，因此这一类使用原生 JSON。基础 Nature's Aura 动物生成共 40 条源定义，专家版再增 30 条；两者改用已安装的 KubeJS Nature's Aura `animal_spawner` schema，逐条检查实体、原料和标签，保留原 aura/time。专家版 Resourceful Bees 蜂蜜脾映射为 Productive Bees configurable_honeycomb；旧 Resourceful Bees 蜂种实体没有可直接对应的 Productive Bees 独立实体类型，相关基础配方跳过。三组合计 119 条源候选，不代表 119 条实际注册；缺少目标物品、标签或实体的单条配方不注册。未重载游戏，仍需后续日志确认运行结果。

2026-09-25 KubeJS 报错修复：按 logs/kubejs/server.log 11:43 的错误逐项修正：移除 Enigmatica shaped 脚本末尾多余括号；IE Fermenter/Squeezer 配方补齐附属 schema 强制要求的 result 字段，并用 minecraft:air 表示原生无物品产出；修复普通材料循环缺失的 plateTag；将 Mekanism 石墨电极的 graphDmg、Interactio 药水与磁盘颜色数据迁移为 1.21.1 组件格式；将 Industrial Foregoing 范围升级产物 ID 改为目标 range_addon_tier_0–2；调整 RFTools、Occultism 配方解析器的变量声明，规避 Rhino 重复声明。迁移清单已同步。本轮仅静态审查，未启动游戏或重载资源；需下次 KubeJS 重载日志确认运行结果。

附属复核：目标已安装 RFTools 系列，但本次检索未找到可确认的 1.21.1 KubeJS RFTools 专用附属，因此刷怪笼和 Copy Components 配方仍使用 KubeJS 核心与 McJtyLib 原生 schema。目标 mods 目录没有 Interactio；官方 CurseForge 项目列表目前仅显示 1.16.5 版本，因此 Interactio 配方脚本继续由模组加载条件跳过，无可供目标版本安装的 Interactio KubeJS 附属。

2026-09-25 Astral Sorcery 2.0 方块转化配方适配：目标已安装 Astral Sorcery 2.0.0.3，旧 `astralsorcery:block_transmutation` 已被新版 `astralsorcery:focal_transmutation` 取代。根据目标 JAR 内原生 recipe JSON 核对字段后，重写基础、普通和专家方块转化脚本。目标原生铁矿→星辉矿石、钻石矿→绿宝石矿石已合并，不再重复添加；其余旧铁/钻石矿从 forge/c 标签逐项筛选，旧 Emendatus 绿宝石矿输出映射为原版绿宝石矿石，由 Almost Unified 继续负责统一。普通模式工作台→旧发现祭坛映射到 Astral Sorcery 2.0 照明祭坛；专家苍穹石→星辉矿石保留，Quark 的 9 色旧水晶循环映射到 1.21.1 对应色刚玉块，填馅南瓜转蛋糕要求聚焦星光。Atum 方块配方只在 Atum 和对应物品实际存在时注册。Resourceful Bees 星辉蜜脾在 Productive Bees 中没有可核实的一一对应蜂种物品，未用通用蜜脾替代。旧版数值星光机制在 2.0 新配方中不存在：按原配方强度映射聚焦星光开关，转化时长使用 100 tick 默认值；填馅南瓜转化采用 600 tick。该机制转换不是旧版数值的精确等价。未找到兼容 Astral Sorcery 2.0/1.21.1 NeoForge 的专用 KubeJS 附属，使用 KubeJS 核心 event.custom 直接注册新版配方。静态核对完成，未重载游戏；运行结果待新的 KubeJS 日志确认。


2026-09-25 数据配方续迁：重新核对 GitHub develop 的 157 个有效配方 JSON，处理其中 52 个尚未由目标脚本覆盖的 ID。新增 34 条 Botany Pots 原生 JSON 配方定义（对种子、输入、结果物品及展示方块逐条检查；BYG 相关条目因目标未安装 BYG 会跳过），4 条 RFToolsBuilder Quarry/Shield 配方改用 McJtyLib 1.21 copy_components，1 条 Blood Magic leather_from_flesh 配方映射到 NeoVitae，2 条 Thermal 蜂蜜配方映射到 Oritech refinery/centrifuge_fluid。现有 Create 蜂蜜灌装和 Oritech 蜂蜜冷却已提供等价路径，不重复注册；剩余 9 条 GitHub 数据配方因缺少 BlockZapper/Tetra、IE no-op 或 Occultism 冲突而暂留。另迁入本地 PneumaticCraft medium_tank 专家配方，使用 1.21 NeoForge 严格组件匹配空小型储罐，并检查 gold_bronze 标签。KubeJS Botany Pots 附属仍未安装，本批 Botany Pots 使用核心 event.custom。静态审查完成，未重载游戏；实际注册数待新日志确认。
2026-09-25 Botany Pots 1.21.1 schema 修正：依据 Botany Pots 1.21.1 的 `BasicCrop`、`BasicSoil` 与 `LootTableDrops` codec，将此前整理的 34 条旧版定义转成新版字段（作物 `input/soil/grow_time/display/drops`，土壤 `input/display/growth_modifier`）。土壤旧 categories 由 KubeJS item tags 重建；10 条当前目标物品/方块可核实的作物使用独立原版 loot table，保留旧版每个产物的概率与 minRolls/maxRolls。Ditchbulb 展示方块映射到目标 `undergarden:ditchbulb_plant`。五条 Undergarden 土壤覆盖改用目标 Botany Pots 原生 recipe ID，避免与 1.21.1 默认土壤重复。其余 14 条作物与 5 条土壤继续由物品/方块或模组条件跳过（BYG 缺失、旧版 Undergarden 产物不存在）。目标 Botany Pots JAR 与 Undergarden/OCCULTISM 资源文件已静态核对；JSON 与脚本语法检查通过，未启动游戏/重载，仍需后续日志确认实际注册。
2026-09-25 Thermal 离心机配方复核：目标实例已安装 Oritech 与 KubeJS Oritech 附属。旧 Thermal 文件仅含 1 条地面肉→工业养蜂场肉液的配方，并附带 15% 骨粉副产物；KubeJS Oritech Centrifuge/Fluid Centrifuge 可处理物品和流体，但物品输出是确定物品堆，不支持该概率副产物。为避免把骨粉改成必出，保留暂存。
2026-09-25 Akashic Tome 配方组件修复：最新 14:02 KubeJS 日志中的 shapeless.js 报错由 Akashic Tome 的 custom_tome_name 按文本组件解析、脚本却传入普通字符串引起；现改为 1.21.1 文本组件对象 { text: ... }，并为新增英文注释逐句附中文翻译。该次日志未再出现 Botany Pots、Astral Sorcery、RFTools 或 Occultism 的前轮报错；本轮只静态修改，未重载游戏，新日志确认待下次加载。

2026-09-25 KubeJS 自定义物品配方缺口补齐（静态迁移）：按目标端已安装模组将原配方依赖的缺失机器与材料换成相近对象。19 种自定义金属各补入 suffused→fulminated→levigated→sliver 加工链，分别使用 Create 加热混合、Lychee 闪电、Create 粉碎、Lychee 闪电，并由 NeoVitae Ara Vitae 完成末段；缺失 Atum/其他金属原料时对 nebu、cobalt、cloggrum、froststeel、regalium、utherium 使用目标已有金/锇/铁材料回退。目标未安装 Masterful Machinery 时，新增 PneumaticCraft 压力室替代批量包装、三类未组装批次件、Laputian 锭及 12 类专精碎片；批次包装后续仍走现有 PneumaticCraft 装配配方、专精碎片仍由现有装配配方压制为专精代币。新增 Create 机械合成替代缺失 MythicBotany 的世界塑形器齿轮；Astral Sorcery altar 与 Arc Furnace 配方分别映射缺失的 Yggdrasil 枝、Laputa 碎片及旧 Astral 星星材料。另将 KubeJS storage package 的缺失 silicon gem 输入回退为原版石英。蜜蜂相关物品与配方未加入。本次仅静态审阅脚本与目标 JAR 物品模型，未运行游戏或重载；需用户之后执行 /reload 并提供新 KubeJS 日志，确认实际配方注册与缺失输入。

2026-09-25 KubeJS 自定义物品缺失配方续修（静态迁移）：根据目标端缺失模组，将 PneumaticCraft 压力室 Flux Bore Kit 的 Thermal 钻头/增幅组件替换为 Oritech 深层钻机、效率插件与采石插件；将缺失 Pedestals 的采石套件材料替换为 RFTools Builder 与采石形状卡。Create 序列组装中缺失的建筑膏改为黏土球，缺失的 Botania 空性香棒改为已有 KubeJS 香棒，修复焦炭砖、炼铁砖、合金砖及刺激包四条被过滤的链。Astral Sorcery 彩虹祭坛中两条缺失的 Pedestals 旧产物改为构造物品堆前安全跳过，避免脚本因 Item.of 报错而中止并让后续有效配方继续注册。蜜蜂配方仍未加入；仅静态修改，未重载游戏。

2026-09-25 KubeJS 香棒配方补齐：目标端原脚本遗漏 kubejs:scented_stick 的配方且旧输入依赖 Resourceful Bees 蜜脾；现新增 8 根木棍加原版绒球葱的工作台配方，并由刺激包序列组装复用。未加入蜂类物品或蜜蜂配方。

2026-09-25 Astral Sorcery Iridescent Altar 配方继续防错：将本脚本所有 Item.of 产物统一改为注册检查后构造；缺失的 Pedestals、Botania 或 Masterful Machinery 产物只跳过各自配方，不再中止整份脚本，后续有效 KubeJS 产物（包括世界塑形器手柄与桶）可继续注册。

2026-09-25 MBD2 多方块移植（待重启验证）：新增 e6e-mbd2 附属模组，注册旧 Masterful Machinery 的 7 台机器和 7 类共用端口；7 份旧结构布局保留为资源，缺失的旧版装饰方块按材质映射为现有方块。新增 KubeJS 脚本从 85 条旧专家机器配方和 14 条目标版本适配配方中逐条过滤可用输入/输出，转为 MBD2 配方，并补充控制器/端口合成、盖亚之魂替代物与中英文名称。目标不装 Botania，旧魔力和星光能力换算为 FE；Create 旋转输入也折算为 FE。Java 已编译，JS/JSON/结构符号静态检查通过；游戏正在运行，新模组尚未载入，实际注册数、结构成型、接口 UI 和生产循环待完整重启后的游戏验证。原 PneumaticCraft 替代配方暂时保留以避免进度中断。构建源与适配说明位于 D:\gpt_work\e6e移植杂项文档\e6e-mbd2-addon。

2026-09-25 MBD2 配方不注册修复（只改 KubeJS）：18:30 的 KubeJS 日志显示 `[E6E MBD2] Missing recipe data in kubejs/config/e6e_mbd2`，即 `JsonIO.read('kubejs/config/e6e_mbd2/legacy_recipes.json')` 在运行时返回 null，99 条机器配方全部没有注册，JEI/EMI 里自然也看不到。现改为把 99 条记录（legacy 85 + adapted 14）由生成器 `e6e-mbd2-addon/generate-recipe-data.js` 内联写入 `kubejs/server_scripts/20_e6e_mbd2/recipe_data.js`，通过 `global.e6eMbd2Recipes` 发布；`recipes.js` 只读取该全局数组，不再做任何文件读取。原始 JSON 仍保留在 `kubejs/config/e6e_mbd2/` 作为数据源，改完重跑生成器即可。加载器同时补上逐台机器的注册计数与失败日志，便于下次看日志定位。用 `e6e-mbd2-addon/check-recipe-script.js` 在 Node 中以桩件执行两份脚本：99 条记录中 91 条注册成功、8 条因 Botania/Blood Magic 内容缺失按设计跳过，全部配方只调用 MBD2 `MBDRecipeJS` 上真实存在的方法（inputItems/outputItems/inputFluids/outputFluids/inputFE/inputPNCAir 等），无重复 ID、无空输入输出。仍待游戏 `/reload` 后看 KubeJS 日志确认。

2026-09-25 MBD2 多方块朝向问题定位（该修复必须改 mod，KubeJS 无法完成）：原附属模组用 `FactoryBlockPattern.start()`（charDir=LEFT、stringDir=UP、aisleDir=FRONT）直接喂入 Masterful Machinery 的 layout。但两边的轴对称不上：MMM 的 layout 是 `layout[Y][Z].charAt(X)`，即外层数组是竖直层；MBD2 的 `aisle()` 外层数组是水平通道轴。实测 MBD2 把 7 台机器分别读成 8x5x4、23x17x22、71x93x76、33x33x33、19x13x21、19x21x30、7x7x4，等于整体绕 Y 轴转了 90 度，所以搭出来的方向和原版不一致。正确写法是把 layout 重排为 aisle=layout Z、row=layout Y、char=layout X，并用 `FactoryBlockPattern.start(RIGHT, UP, BACK)`；`e6e-mbd2-addon/check-layout-transform.js` 会复刻 MBD2 的 centerOffset 与 `setActualRelativeOffset`，逐块比对世界偏移：改法下 7 台机器 108/1120/41026/6130/1367/1277/60 块全部与原版 MMM 完全一致（0 处不匹配），且东/南/西朝向都只是纯旋转。KubeJS 侧做不到这件事：MBD2 的 `MBDStartupEvents.MACHINE` 只暴露 `create/removeMachine/getMachine`，`MBDMachineDefinition$Builder` 与 `MultiblockMachineDefinition$Builder` 都没有 `blockPatternFactory`；结构 JSON 是 jar 内 classpath 资源（`E6EMachines.class.getResourceAsStream`），资源包覆盖不到。机器逐层世界坐标图导出在实例根目录 `_e6e_mbd2_build_plan.txt`（`e6e-mbd2-addon/export-build-plan.js` 生成），可用于人工照图搭建或核对修复结果。

2026-09-26 Thermal 机器 MBD2 替换：当前实例未安装 Thermal 与 Oritech；新增 25 台独立 MBD2 控制器/配方类型，分机械、热加工、流体三种紧凑结构，保留原有 4 台 E6E MBD2 机器。所有机器控制器及通用加工配方通过 KubeJS 制作/注册，主编辑文件为 server_scripts/20_e6e_mbd2/thermal_recipes.js；补入粉碎、锯切、红石炉、合金、压制/压缩、离心、熔化/冷却铸造、热解、灌装、分馏和六类发电配方。木材锯切、作物/树木培养、树液提取与石料生成的动态配方也由 KubeJS 转到 MBD2。旧 Oritech 热金属配方改为 MBD2 压机；活跃脚本中的机器调用不再要求 Thermal。附属版本 1.1.0 已由 build.ps1 编译并安装到目标 mods 目录；旧 1.0.3 jar 已改名为 .jar.disabled，不会被 Forge 加载。尚未启动游戏，实际配方注册与结构成型仍待完整重启后确认。
2026-09-26 MBD2 Thermal 配方续迁：将 Base Thermal 粉碎机的致密构建方块配方加入 `kubejs/server_scripts/20_e6e_mbd2/thermal_recipes.js`，保留 3 个建筑膏必出、另有 2 个 50% 概率；源文件未指定耗能和时长，替代配方采用 100 tick、2000 FE 的 MBD2 基准。同步将专家地面肉离心配方的清单状态从暂存改为条件迁入：目标已有 MBD2 配方保留 100 mB 工业先锋肉液和 15% 骨粉概率，需 e6e_mbd2 与专家模式。基础离心/粉碎清单原因也同步为当前 MBD2 路径。未重载游戏；新增配方仍待运行日志确认。

2026-09-26 17:21 KubeJS 运行错误修复：日志中的 `unify_growables.js`、`unify_sawables.js`、`unify_stoneworks.js` 将辅助函数声明在模组条件块内，配方事件回调中无法解析；现把模组判断移到回调开头，让辅助函数处于脚本顶层。`packing_unpacking.js` 的 `recipetypes_packing_unpacking` 改为显式 `const` 声明，修复 Rhino 严格模式的未声明赋值。还未用新版本重载确认。该轮日志显示 MBD2 Thermal 注册 3 条、跳过 113 条；当前跳过日志将机器类型缺失和配方内容缺失合并计数，需后续日志细分确认。

2026-09-26 17:35 KubeJS 加载错误续修：17:31 日志中的 3 个 missing } after function body 分别由上一轮改模组条件时误删 soils_botany_pots、Create create_cutting、Pedestals pedestals_stoneworks 函数闭合括号引起。已在三个函数结束处补回。17:31 日志早于本次修复，修复后尚未重载，因此待 /reload 后确认脚本加载数恢复且 3 个错误消失；同一份 17:31 日志显示 packing_unpacking.js 已成功加载。

2026-09-26 17:43 KubeJS Botany Pots 配方解析错误续修：17:36 的 /reload 日志已不再报三份 unification 脚本缺少右括号；新增 90 条 botanypots:soil 和 1 条 botanypots:crop 解析错误，均出自 unify_growables.js 的 E6E 1.16.5 旧 JSON 字段。目标 Botany Pots 21.1.44 JAR 自带 793 条 block_derived_crop、239 条 block_derived_soil 等当前格式配方；现停止调用该脚本中的旧 Botany Pots 土壤、作物、树木配方生成函数，由目标模组内置配方提供对应功能。MBD2 Thermal 种植机和沉浸工程温室迁移调用仍保留。17:36 的日志早于此次修改，需下次 /reload 看解析错误是否归零；该轮总计 93 条 failed recipes，其中日志明确列出的旧 Botany Pots 解析错误为 91 条，其余计数待新日志确认。

2026-09-26 17:52 KubeJS 运行期配方错误续修：17:44 的 /reload 日志确认 723/723 server scripts 加载、0 个脚本加载错误，Botany Pots 解析错误已消失。运行期仍有旧 BYG 作物被 IE 温室 Item.of 构造、IE 锯木结果无法转换为 TagOutput、Mekanism 锯切继续使用已废弃的 Item.withChance()、Industrial Foregoing 石材生成 JSON 输出沿用旧 item 字段。现对 IE 温室的输入/产出/土壤与可选产物做存在性过滤，并按目标 IE 原生配方的 input/soil/results/render/time JSON 格式注册；锯木改按目标 IE 和 Mekanism JAR 中的 sawmill/sawing JSON 格式注册，保留 6 木板、锯末与 25% Mekanism 副产物；IF stonework_generate 的 output 改为 id 并过滤不存在的旧石材。三份脚本通过 node --check 语法检查；修改后尚未在游戏内 /reload 验证。

2026-09-26 配方覆盖续迁（按用户要求先完成定义、运行错误留到下一轮）：将仍暂存的启用配方文件逐项转成 Minecraft 1.21.1 / KubeJS 7 的 `ServerEvents.recipes`、`event.custom`、`event.shaped`、`event.shapeless` 与 `event.stonecutting`。新增 `kubejs/server_scripts/10_e6e_ported/recipe_completion.js`，覆盖 Nature's Aura 祭坛、Occultism 黑砂、Signalum Dust、Atum 石切、Compact Machines 隧道、Refined Crafter Proxy、Resourceful Bees Apiary 阶梯、Botania 与 MythicBotany 配方；旧 NBT 输出改为 `minecraft:custom_data` 组件，配方输出使用 1.21.1 `id/count` 字段。专家 Blood Magic Arc 已去掉旧 recipe builder 与 `withChance`，改用当前自定义 JSON 和 Create 粉碎副产物格式。源端已注释/空数组的 Compact Crafting Miniaturization 与 Tinkers Construct 三种配方类型确认没有启用配方；Architects Palette 的 Sunstone→Moonstone、工业氘厂、机器控制器/端口及氘→氚循环按目标原生配方/MBD2 机器合并，避免重复。迁移清单对应行已更新。本轮未启动游戏、未跑 `/reload` 或运行测试；目标注册、组件解析、缺失模组与配方类型错误留待全部配方迁完后统一处理。

2026-09-26 动力合成配方补迁：按用户指出的遗漏，重新移植 Powah Energizing 三组配方：基础 1 条、普通源配方 16 条并保留铜块替代输入（共 17 条）、专家 19 条。改用 1.21.1 / KubeJS 7 的 ServerEvents.recipes 与 KubeJS Powah energizing builder；专家配方 NBT 改为 minecraft:custom_data 物品组件。移除依赖全部旧模组的总门槛和逐项缺失输入过滤，每条配方独立捕获注册异常，避免一个失败阻断其余定义。迁移清单对应行已更新。本轮未启动游戏、未执行 /reload 或测试；配方注册兼容性与缺失物品/标签错误留待全部迁移后统一处理。

2026-09-26 专精凭证配方补迁：补全 12 种专精凭证（automation、botanical、astronomy、alchemy、ritual、aura、engineering、energistics、dimensional、battle、excavation、culinary）。每种配方消耗对应专精碎片 50 个，在 PneumaticCraft 激光装配机产出 1 个凭证；从通用装配脚本拆分到独立 mastery_tokens.js，输入改用目标 1.21.1 PneumaticCraft 的 item/count 格式，并逐条隔离注册。迁移清单对应行已更新。本轮未重载或测试；实际游戏内显示留待后续统一验证。

2026-09-26 全量配方覆盖续迁：全量审计发现目标脚本曾因物品、标签或流体未注册而静默跳过候选配方。新增 `global.e6eAttemptAllPortedRecipes` 开关，并将 76 个配方/材料加工脚本中的 139 处物品检查、33 处流体检查改为移植阶段继续尝试；后续统一修错时可关闭该开关。MBD2 Thermal 配方不再按配方材料存在性过滤，补入源 Base/Normal/Expert 的热解、合金、压制、粉碎、锯切、离心、灌装、冷却、熔化、分馏、树液提取及动力燃料定义，并保留动态蜂蜜、蜂巢压缩和树种配方；源端 Thermal 工作台与催化剂定义改为 1.21.1 `ServerEvents.recipes` / `event.custom` 逐条尝试。Powah 各阶工作台升级配方也移除低阶输入存在性过滤。未启动游戏、未 `/reload`、未运行测试；本轮按要求只完成配方定义，注册报错留到后续统一修复。

2026-09-26 全量配方覆盖续迁：再次核对源端 base/normal/expert recipe 与 recipetype 定义，发现普通树仪式曾硬跳过 NaturesStarlight 星光效果粉，并且普通动物生成器缺少 Thermal Blitz/Blizz/Basalz 三项；现补齐 1 条树仪式与 3 条动物生成候选。更新 10_e6e_ported/recipe_completion.js，将遗漏的旧模组配方分支改为在全量开关开启时逐条尝试，包括 Atum、Compact Machines 隧道自定义数据、Refined Crafter Proxy、Resourceful Bees 蜂巢升级、Botania/MythicBotany 蜜脾配方及 Blood Magic Arc；自定义输出改用 1.21.1 id/count/components JSON，并对单条注册异常隔离。另将迁移版 base/normal/expert recipes、recipetypes、unification 目录的 225 处 Platform.isLoaded 门槛改由 6ePortedRecipeModLoaded 控制（当前全量开关下尝试旧配方）；与此前 172 处物品/流体过滤放宽合并，后续统一处理目标缺失内容的注册报错。未启动游戏或运行测试。

2026-09-26 全量配方遗漏补齐：复核清单仍暂存项与目标格式后，补回 Astral Sorcery 星辉蜜脾方块→岩水晶矿焦点转化；普通 Apothic Spawners 源 18 条和专家源 22 条现均转为 apothic_spawners:spawner_modifier 1.21.1 JSON，专家 stat_changes 更新 type ID 并逐条隔离。NeoVitae 炼金桌全量定义模式下，对无法映射的 Blood Magic 物品/标签改为保留源 ID 尝试，避免被本地映射函数提前跳过。Botany Pots 数据的 34 条旧定义现全部保留，原先缺失的 14 条作物掉落表（BYG 8、Undergarden 6）已按旧结果补成目标 loot table JSON，并移除缺失物品/展示方块的全量阶段过滤。数据目录余项新增 Create Blockzapper 6 条、Tetra 橡木模块锤 custom_data 合成，以及 Occultism 4x stone_to_otherstone 同 ID 覆盖；IE generated_list 的 forge:false 仅是禁用占位，没有启用配方。迁移清单中对应行已更新；没有启动或重载游戏，目标 mod/配方类型解析和注册报错仍按用户要求留待后续统一处理。


2026-09-26 按用户要求撤回目标未安装 TConstruct/Materialis 的改动：移除本轮新增的 61 条 TConstruct 配方及 85 份材料定义/重定向 JSON；迁移清单将相关源文件恢复为 held。

2026-09-26 配方加载报错修复：移除服务端脚本对 `global` 的非法赋值，恢复注册时的物品、标签、流体与模组检查；修复多份逐条注册脚本在 Rhino 中的变量重复声明。缺失 Thermal/Tetra/Biomes We've Gone 等内容的定义继续保留在源码，但当前实例不提交无效配方。Astral Sorcery 祭坛配方按已安装 2.0.0.3 JAR 内 `astralsorcery:altar_crafting` 结构改写；补录配方修正 Occultism 产物字段，并检查 Compact Machines 隧道物品是否存在。Node 语法检查覆盖 725 个服务端 JS 文件，均通过。游戏未运行，尚无新 `/reload` 日志验证运行时注册结果。

2026-09-26 23:18 新日志跟进：KubeJS 已报告 `Added 524 recipes ... with 0 failed recipes`，但仍有两处 Powah 脚本回调错误。专家工作台在物品检查前执行 `Ingredient.of('thermal:fluid_cell')`，已改为延迟解析的字符串材料，并对各阶升级候选材料做存在性过滤；普通模式充能配方在 Rhino 中执行 `Array(count).fill(...)` 报错，改为显式循环构造材料数组。两份脚本均通过 Node 语法检查；游戏本轮已退出，仍需下次加载确认两处回调错误消失。

2026-09-26 23:22 新日志跟进：普通 Powah 充能错误已消失，当前 KubeJS 仅报告专家 Powah 工作台 `Assignment to undeclared variable crystal`；该赋值没有后续读取，已删除无效分支。当前日志仍是 524 条添加、0 条配方解析失败。修改后的脚本通过 Node 语法检查，待下次 `/reload` 确认运行时错误消失。
