//priority: 1005

// 原始定义保留在脚本中，运行时已启用注册检查。
function e6eAttemptAllPortedRecipesEnabled() {
    return false;
}

//
// 通用辅助函数
//
// 要使注释中的 JSDoc 真正生效，需要 ProbeJS Legacy 4.6.0 或更高版本。
// ProbeJS Legacy 的 CurseForge 页面：https://www.curseforge.com/minecraft/mc-mods/probejs-legacy
//

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}

function shapelessRecipe(result, ingredients, id) {
    return { result: result, ingredients: ingredients, id: id };
}

const E6E_BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const E6E_ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const E6E_TagKey = Java.loadClass('net.minecraft.tags.TagKey');
const E6E_Registries = Java.loadClass('net.minecraft.core.registries.Registries');

function e6eRegisteredItemExists(value) {
    try {
        const id = String(value).trim().replace(/^\d+\s*x\s*/i, '').split('[')[0];
        return id !== 'minecraft:air' && Item.exists(id);
    } catch (error) {
        return false;
    }
}

function e6eRegisteredItemTagHasItems(value) {
    try {
        const id = String(value).replace(/^#/, '');
        const tag = E6E_TagKey.create(E6E_Registries.ITEM, E6E_ResourceLocation.parse(id));
        const holders = E6E_BuiltInRegistries.ITEM.getTag(tag);
        return holders.isPresent() && holders.get().size() > 0;
    } catch (error) {
        return false;
    }
}

function e6eRecipeOutputExists(output) {
    if (e6eAttemptAllPortedRecipesEnabled()) return true;
    try {
        if (typeof output === 'string') return e6eRegisteredItemExists(output);
        if (output && typeof output.isEmpty === 'function' && output.isEmpty()) return false;
        if (output && output.id != null) {
            return e6eRegisteredItemExists(output.id) || e6ePortedFluidExists(output.id);
        }
        if (output && output.item != null) return e6eRegisteredItemExists(output.item);
        return false;
    } catch (error) {
        return false;
    }
}

function e6eRecipeIngredientExists(ingredient) {
    if (e6eAttemptAllPortedRecipesEnabled()) return true;
    try {
        if (Array.isArray(ingredient)) return ingredient.some(e6eRecipeIngredientExists);
        if (typeof ingredient === 'string') {
            const value = ingredient.trim();
            if (!value) return false;
            const normalized = value.replace(/^\d+\s*x\s*/i, '').trim();
            if (normalized.startsWith('#')) return e6eRegisteredItemTagHasItems(normalized);
            return e6eRegisteredItemExists(normalized);
        }
        if (ingredient && typeof ingredient === 'object') {
            if (ingredient.id != null) {
                return e6eRegisteredItemExists(ingredient.id) || e6ePortedFluidExists(ingredient.id);
            }
            if (ingredient.item != null) return e6eRegisteredItemExists(ingredient.item);
            if (ingredient.tag != null) return e6eRegisteredItemTagHasItems(ingredient.tag);
            if (typeof ingredient.isEmpty === 'function') return !ingredient.isEmpty();
            if (typeof ingredient.toJson === 'function') return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

function e6ePortedItemExists(itemId) {
    return e6eAttemptAllPortedRecipesEnabled() || Item.exists(itemId);
}

function e6ePortedFluidExists(fluidId) {
    return e6eAttemptAllPortedRecipesEnabled() || Fluid.exists(fluidId);
}

function e6ePortedRecipeModLoaded(modId) {
    return e6eAttemptAllPortedRecipesEnabled() || Platform.isLoaded(modId);
}

function e6eCreateIngredientExists(value) {
    if (Array.isArray(value)) return value.every(e6eCreateIngredientExists);
    if (value && typeof value === 'object' && typeof value.fluidTag === 'string') {
        return Number(value.amount) > 0;
    }
    return e6eRecipeIngredientExists(value);
}

function e6eCreateOutputExists(value) {
    if (Array.isArray(value)) return value.every(e6eCreateOutputExists);
    return e6eRecipeOutputExists(value);
}

function e6eCreateCanRegisterRecipe(output, ingredients) {
    const outputs = Array.isArray(output) ? output : [output];
    const inputs = Array.isArray(ingredients) ? ingredients : [ingredients];
    return outputs.every(e6eCreateOutputExists) && inputs.every(e6eCreateIngredientExists);
}
function e6eCanRegisterRecipe(output, ingredients) {
    return e6eRecipeOutputExists(output) && ingredients.every(e6eRecipeIngredientExists);
}

// 星辉魔法 2.x 的祭坛合成格式，依据其 1.21.1 数据配方。
function e6eAstralAltarRecipe(source) {
    const output = typeof source.output.toResultJson === 'function' ? source.output.toResultJson() : source.output;
    if (!e6eRecipeOutputExists(output)) return null;
    const key = {};
    for (const symbol of Object.keys(source.key)) {
        let ingredient = source.key[symbol];
        if (ingredient.type === 'astralsorcery:crystal') ingredient = { tag: ingredient.hasToBeCelestial ? 'astralsorcery:celestial_crystal' : 'astralsorcery:rock_crystal' };
        if (!e6eRecipeIngredientExists(ingredient)) return null;
        key[symbol] = { type: 'item', ingredient: ingredient };
    }
    const additional = [];
    for (const ingredient of source.relay_inputs || []) {
        if (!e6eRecipeIngredientExists(ingredient)) return null;
        additional.push({ count: 1, ingredient: ingredient });
    }
    const raw = source.pattern.map((row) => row.replace(/_/g, ' '));
    const fiveWide = raw.length === 5 && raw.every((row) => row.length === 5);
    const gridPattern = fiveWide ? raw.slice(1, 4).map((row) => row.slice(1, 4)) : raw;
    if (gridPattern.length !== 3 || !gridPattern.every((row) => row.length === 3)) return null;
    const grid = { key: key, pattern: gridPattern };
    if (fiveWide) grid.relayPattern = raw.map((row, y) => row.split('').map((symbol, x) => x > 0 && x < 4 && y > 0 && y < 4 ? ' ' : symbol).join(''));
    return {
        type: 'astralsorcery:altar_crafting',
        baseFocusShatterChance: 0.0,
        duration: source.duration,
        effects: ['astralsorcery:default_central_beam', 'astralsorcery:default_lumen_input', 'astralsorcery:default_altar_sparkle', 'astralsorcery:default_relay_input'],
        grid: grid,
        mayChain: false,
        onlyNight: true,
        outputModifiers: [],
        outputs: [output],
        requiredAdditionalInputs: additional,
        requiredFluid: [],
        requiredLumen: [],
        requiredStarlight: source.focus_constellation ? [source.focus_constellation] : [],
        requiredType: ['illumination', 'luminance', 'resonance', 'radiance'][source.altar_type]
    };
}

// NeoVitae 替代 Blood Magic 时使用的安全物品/标签映射。
function e6eMapNeoVitaeItemId(id) {
    if (typeof id !== 'string') return null;

    const bloodMagicItems = {
        'bloodmagic:airscribetool': 'neovitae:air_scribe_tool',
        'bloodmagic:apprenticebloodorb': 'neovitae:blood_orb_apprentice',
        'bloodmagic:blankslate': 'neovitae:tabula_rasa',
        'bloodmagic:corrosivecatalyst': 'neovitae:spiritus_ruina_catalyst',
        'bloodmagic:corrupted_tinydust': 'neovitae:corrupted_tiny_dust',
        'bloodmagic:crystalline_resonator': 'neovitae:primitive_crystalline_resonator',
        'bloodmagic:demonslate': 'neovitae:tabula_spiritus',
        'bloodmagic:demoncrucible': 'neovitae:athanor',
        'bloodmagic:demoncrystallizer': 'neovitae:crystallarium_maleficum',
        'bloodmagic:destructivecatalyst': 'neovitae:spiritus_nihilum_catalyst',
        'bloodmagic:divinationsigil': 'neovitae:sigil_divination',
        'bloodmagic:dungeon_stone': 'neovitae:dungeon_stone',
        'bloodmagic:earthscribetool': 'neovitae:earth_scribe_tool',
        'bloodmagic:etherealslate': 'neovitae:tabula_aetherea',
        'bloodmagic:explosivepowder': 'neovitae:explosive_powder',
        'bloodmagic:firescribetool': 'neovitae:fire_scribe_tool',
        'bloodmagic:infusedslate': 'neovitae:tabula_animata',
        'bloodmagic:itemroutingnode': 'neovitae:routing_conduit',
        'bloodmagic:looting_anointment_l': 'neovitae:looting_anointment_l',
        'bloodmagic:magicianbloodorb': 'neovitae:blood_orb_magician',
        'bloodmagic:masterbloodorb': 'neovitae:blood_orb_master',
        'bloodmagic:masterroutingnode': 'neovitae:master_routing_node',
        'bloodmagic:inputroutingnode': 'neovitae:input_routing_node',
        'bloodmagic:noderouter': 'neovitae:node_router',
        'bloodmagic:outputroutingnode': 'neovitae:output_routing_node',
        'bloodmagic:primitive_explosive_cell': 'neovitae:hellforged_explosive_cell',
        'bloodmagic:rawcatalyst': 'neovitae:raw_spiritus_catalyst',
        'bloodmagic:rawdemoncrystal': 'neovitae:raw_demonite',
        'bloodmagic:reagentair': 'neovitae:reagent_air',
        'bloodmagic:reagentbinding': 'neovitae:reagent_binding',
        'bloodmagic:reagentfastminer': 'neovitae:reagent_fast_miner',
        'bloodmagic:reagentgrowth': 'neovitae:reagent_growth',
        'bloodmagic:reagentlava': 'neovitae:reagent_lava',
        'bloodmagic:steadfastcrystal': 'neovitae:spiritus_gem_common',
        'bloodmagic:vengefulcrystal': 'neovitae:spiritus_gem_common',
        'bloodmagic:destructivecrystal': 'neovitae:spiritus_gem_common',
        'bloodmagic:defaultcrystal': 'neovitae:spiritus_gem_common',
        'bloodmagic:corrosivecrystal': 'neovitae:spiritus_gem_common',
        'bloodmagic:chargingrune': 'neovitae:rune_charging',
        'bloodmagic:dislocationrune': 'neovitae:rune_dislocation',
        'bloodmagic:accelerationrune': 'neovitae:rune_acceleration',
        'bloodmagic:reinforcedslate': 'neovitae:tabula_robur',
        'bloodmagic:soulforge': 'neovitae:hellfire_forge',
        'bloodmagic:steadfastcatalyst': 'neovitae:spiritus_invictus_catalyst',
        'bloodmagic:tauoil': 'neovitae:tau_oil',
        'bloodmagic:vengefulcatalyst': 'neovitae:spiritus_vindicta_catalyst',
        'bloodmagic:weakbloodorb': 'neovitae:blood_orb_weak',
        'bloodmagic:waterscribetool': 'neovitae:water_scribe_tool',
        'bloodmagic:duskscribetool': 'neovitae:tenebrae_scribe_tool'
    };

    let target = bloodMagicItems[id];
    if (!target && id.startsWith('bloodmagic:')) {
        return e6eAttemptAllPortedRecipesEnabled() ? id : null;
    }
    if (!target && id.startsWith('eidolon:')) {
        const replacement = 'eidolon_repraised:' + id.substring('eidolon:'.length);
        if (e6eRegisteredItemExists(replacement)) target = replacement;
        else if (e6eAttemptAllPortedRecipesEnabled()) target = id;
    }
    if (!target) target = id;
    return e6eAttemptAllPortedRecipesEnabled() || e6eRegisteredItemExists(target) ? target : null;
}

function e6eMapNeoVitaeIngredient(value) {
    if (Array.isArray(value) && e6eAttemptAllPortedRecipesEnabled()) {
        return value.map((ingredient) => e6eMapNeoVitaeIngredient(ingredient) || ingredient);
    }
    if (typeof value !== 'string') return null;
    const isTag = value.startsWith('#');
    const raw = isTag ? value.substring(1) : value;
    let mapped;

    if (isTag && raw === 'bloodmagic:crystals/demon') {
        mapped = '#neovitae:crystals/demon';
    } else if (isTag && raw.startsWith('bloodmagic:')) {
        return e6eAttemptAllPortedRecipesEnabled() ? value : null;
    } else if (isTag) {
        mapped = value;
    } else {
        mapped = e6eMapNeoVitaeItemId(raw);
    }

    if (!mapped || !e6eRecipeIngredientExists(mapped)) {
        return e6eAttemptAllPortedRecipesEnabled() ? (mapped || value) : null;
    }
    return mapped;
}

function e6eNeoVitaeRecipeId(idPrefix, sourceId) {
    if (typeof sourceId !== 'string') return idPrefix + 'unidentified';
    const separator = sourceId.indexOf(':');
    const path = separator >= 0 ? sourceId.substring(separator + 1) : sourceId;
    return idPrefix + path.replace(/[^a-zA-Z0-9_/-]/g, '_');
}

/**
 * @param {string} str 
 * @returns 
 */
function titleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
}

/**
 * @template T
 * @param {$Collection_<T>} array 
 * @returns {T}
 */
function randomOf(array) {
    return Utils.randomOf(Utils.getRandom(), array)
}

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function entryIsBlacklisted(material, type) {
    for (let blackList of unificationBlacklist) {
        if (blackList.material == material && blackList.type == type) {
            return true
        }
    }
    return false;
}

/**
 * @param {$IngredientJS_} tag
 */
function tagIsEmpty(tag) {
    return !e6eRecipeIngredientExists(tag);
}

/**
 * @param {$IngredientJS_} tag 
 */
function getPreferredItemInTag(tag) {
    const got = getItemsInTag(tag).sort((a, b) => compareIndices(a.mod, b.mod, tag))[0]
    return got || Item.of(air)
}

/**
 * @param {$IngredientJS_} tag 
 * @returns {Internal.ItemStackJS[]}
 */
function getItemsInTag(tag) {
    return Ingredient.of(tag).stacks.toArray();
}

function compareIndices(a, b, tag) {
    if (a == b) return 0; // 仅当 a 与 b 相同，它们才会位于 modPriorities 的同一位置。

    for (let mod of modPriorities) {
        if (mod == a) return -1; // 若 a 排在 b 之前，则 idx(a) < idx(b)，返回 -1。
        if (mod == b) return 1; // 若 a 排在 b 之后，则 idx(a) > idx(b)，返回 1。
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}

function getStrippedLogFrom(logBlock) {
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
    return air;
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

/**
 * @param {$IngredientJS_} item 
 * @param {Internal.PlayerJS<any>} player 
 */
function playerHas(item, player) {
    return player.inventory.find(item) != -1;
}

// lt  = .slice(0, index)
// lte = .slice(0, index + 1)
// gt  = .slice(index)
// gte = .slice(index + 1)

function lowerTiers(tiers, tier) {
    return tiers.slice(0, tiers.indexOf(tier));
}

/**
 * 将 `<类型所属模组>:kjs_<哈希>` 中的 md5 移到给定前缀下
 * @param {Internal.RecipeJS} recipe 
 * @param {string} id_prefix 
 */
function fallback_id(recipe, id_prefix) {
    if (!recipe || typeof recipe.getId !== 'function') return recipe;
    if (String(recipe.getId()).includes(':kjs_')) {
        recipe.serializeJson(); // 缺少此项时哈希值一定会冲突
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
    return recipe;
}
