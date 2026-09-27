// 配方类型：astralsorcery:lightwell
// 中文名称：聚星缸产液
// 用途：用于登记星辉魔法的聚星缸产液配方。

(function () {
if (['astralsorcery', 'bloodmagic'].every((modId) => e6ePortedRecipeModLoaded(modId))) {
ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/lightwell/';

    // shatterMultiplier：数值越高，破坏速度越慢
    // productionMultiplier：数值越高，每轮产物越多

    const recipes = [
        {
            input: { item: 'bloodmagic:slate_ampoule' },
            output: 'bloodmagic:life_essence_fluid',
            productionMultiplier: 100.0,
            shatterMultiplier: 0.1,
            color: 16056324,
            id: `${id_prefix}life_essence`
        },
        {
            input: { item: 'astralsorcery:resonating_gem' },
            output: 'astralsorcery:liquid_starlight',
            productionMultiplier: 50.0,
            shatterMultiplier: 100.0,
            color: -16734209,
            id: 'astralsorcery:lightwell/starlight_resonating_gem'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:lightwell';
        event.custom(recipe).id(recipe.id);
    });
});

}
})();
