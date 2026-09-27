// 打开机器菜单时，MBD2 会在客户端和服务端都触发此事件。
// 此时客户端界面资源已初始化，再创建界面组件。
const E6EPortUI = Java.loadClass('e6e.mbd2.E6EPortUI');

[
    'item_input', 'item_output',
    'fluid_input', 'fluid_output',
    'energy_input', 'energy_output',
    'pressure_input'
].forEach(port => {
    MBDMachineEvents.onUI('e6e_mbd2:' + port, event => E6EPortUI.apply(event.event));
});
