// E6E 1.16.5 to 1.21.1 NeoForge client migration
// Entries are filtered against target-installed mods.
function e6eAvailableViewerEntries(entries) {
    return entries.filter((entry) => {
        // The 1.21.1 addInformation event cannot convert legacy regex filters
        // into item entries. Expand only concrete IDs present in the registry.
        if (typeof entry !== 'string') return false;
        const namespace = entry.startsWith('#') ? entry.slice(1).split(':')[0] : entry.split(':')[0];
        if (entry.startsWith('#')) return namespace === 'minecraft' || namespace === 'kubejs' || Platform.isLoaded(namespace);
        return Item.exists(entry);
    });
}
