// 已加载 Almost Unified 时，由它统一配方产物。
//priority: 900
/*
    本脚本统一配方产物。

    本脚本使用三个数组定义产物统一规则。
    这些数组位于 constants/materials.js 脚本中。

    本脚本所用函数位于同一目录的 functions.js 脚本中。

    你可以按需要使用和修改本脚本，但请勿声称本脚本由你原创。
    欢迎注明出处，但并非强制要求。
*/
ServerEvents.recipes((event) => {
    // Almost Unified 已负责目标端的配方产物统一，避免重复改写。
    if (Platform.isLoaded('almostunified')) return;

    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = `#forge:${type}s/${material}`;
                var tag = Ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});
