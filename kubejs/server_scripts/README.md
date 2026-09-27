# E6E 1.21.1 `server_scripts` 分类

这里按脚本的**实际用途**分类。目录名前的数字标明依赖层次；文件内已有的 `//priority:` 声明保持原样。

| 目录 | JS 数 | 分类依据 |
| --- | ---: | --- |
| `00_e6e_core` | 2 | 服务端共用辅助函数、跨类型配方过滤器 |
| `01_e6e_constants` | 23 | 材料、物品、模式等共享常量 |
| `10_e6e_tags` | 237 | `ServerEvents.tags` 等标签定义；保留 `base` / `expert` 与标签领域的子目录 |
| `20_e6e_recipe_changes` | 7 | 移除配方、替换输入或产物、统一产物等对现有配方的修改 |
| `30_e6e_recipes_by_type` | 193 | 注册新配方的脚本；按最终配方 `type`，每种类型一个 JS |
| `40_e6e_gameplay` | 14 | 方块、实体、物品、玩家和战利品表事件 |
| `50_e6e_mbd2_ui` | 1 | MBD2 机器界面事件 |
| `90_e6e_inactive_stubs` | 15 | 无配方注册的兼容占位文件、已由有序目录加载的重复源与示例脚本 |

总计 492 个服务端 JS。原 `10_e6e_ported` 的 272 个剩余脚本已分类；原 `20_e6e_mbd2/port_ui.js` 也已移动。原目录中的配方注册脚本已在此前替换为 `30_e6e_recipes_by_type` 的分类文件。

每个来源脚本都有独立的函数作用域，避免同名常量冲突。跨类型源脚本通过 `00_e6e_core/01_recipe_type_view.js` 中的过滤器限定各文件注册的类型。`kubejs/data` 中的 JSON 配方不属于 `server_scripts`，未纳入本目录分类。

本次移动前的快照：`D:\gpt_work\e6e移植杂项文档\server_scripts_before_full_reorganization_2026-09-27.zip`。

逐文件旧路径到新路径的清单：`D:\gpt_work\e6e移植杂项文档\server_scripts_full_reorganization_2026-09-27.json`。

## 注释语言

脚本中的说明性注释已改为中文。为保持 KubeJS 行为和日后恢复示例代码的能力，`//priority:` 等加载指令、JSDoc 类型、配方字段名、命名空间 ID、URL 和被注释掉的代码仍保留其原始写法。
