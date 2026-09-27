# E6E 1.21.1 配方类型脚本

此目录中的 `recipes_<命名空间>_<类型>.js` 每种配方类型对应一个可加载的 JS。每个文件头都有配方类型 ID、中文名称和用途说明。

- 共 193 个类型 JS，替换了 427 个原配方脚本。
- 原脚本中同时注册多种配方时，对应代码会出现在多个类型文件中，并通过 `00_e6e_core/01_recipe_type_view.js` 只注册当前文件的配方类型。
- Create 序列装配中的中间步骤仍在 `recipes_create_sequenced_assembly.js` 中。
- 单纯修改或移除现有配方的脚本位于 `20_e6e_recipe_changes`，占位脚本位于 `90_e6e_inactive_stubs`。
- `kubejs/data` 的 JSON 配方不属于 `server_scripts`，未改动。

替换前的完整 `server_scripts` 快照：

`D:\gpt_work\e6e移植杂项文档\server_scripts_before_recipe_type_reorganization_2026-09-27.zip`
