global.packmode = 'expert';
global.isNormalMode = false;
global.isExpertMode = true;

// KubeJS 7 requires cross-script helpers to be assigned through global.
global.setMode = (player) => {
    const expertModeQuestId = '0000000000000FEB';
    const progress = global.packmode == 'expert' ? 'complete' : 'reset';
    player.server.runCommandSilent(`ftbquests change_progress ${player.username} ${progress} ${expertModeQuestId}`);
};
