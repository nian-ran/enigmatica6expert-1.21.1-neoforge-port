//priority: 5
// 配方类型：e6e_mbd2:industrial_deuterium_plant
// 中文名称：工业氘工厂加工
// 用途：用于登记E6E MBD2 多方块机器的工业氘工厂加工配方。

(function () {
// e6e_mbd2 的 MBD2 机器所用的 E6E 自定义多方块配方。
// 由 e6e-mbd2-addon/generate-recipe-data.js 根据以下文件生成：
// kubejs/config/e6e_mbd2/{legacy,adapted}_recipes.json；修改这些文件后需重新运行生成器。
// 51 条记录，涉及 4 台机器。
//
// 运行时用 JsonIO.read() 读取 kubejs/config 路径会返回 null；因此将数据嵌入
// 同一个脚本中，可避免 KubeJS 加载时访问文件或跨脚本赋值全局变量。
const e6eMbd2Recipes = [
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:astronomy_mastery_shard",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:observatory",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "astralsorcery:crystals/attuned",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:mantle",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:marble_raw",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "thermal:device_rock_gen",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:mechanical_saw",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "astralsorcery:stars/irradiant",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "astralsorcery:liquid_starlight",
          "amount": 1024
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/astronomy_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:alchemy_mastery_shard",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_mixer",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_bottling_machine",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:stim_pack",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:death_ring",
          "count": 5
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:pet_reviver",
          "count": 5
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/alchemy_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:ritual_mastery_shard",
          "count": 5
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:altar",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:largebloodstonebrick",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:sea_lantern",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:beacon",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:chargingrune",
          "count": 48
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:accelerationrune",
          "count": 20
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:dislocationrune",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:altarcapacityrune",
          "count": 16
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:bettercapacityrune",
          "count": 16
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:masterritualstone",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:ritualstone",
          "count": 36
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:ritualdivinerdusk",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:ritualtinkerer",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:artisinal_ritual_kit",
          "count": 10
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:artisinal_chalk_set",
          "count": 10
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1024
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/ritual_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:aura_mastery_shard",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:aura_trove",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:firework_generator",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:big_box_o_boom",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:generator_limit_remover",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:projectile_generator",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:mimirs_memory_box",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:altar_of_birthing_kit",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:aura_detector",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:mover_cart",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:powered_rail",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:rail",
          "count": 32
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:activator_rail",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/aura_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:engineering_mastery_shard",
          "count": 2
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:advanced_pressure_tube",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:advanced_liquid_compressor",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:rotation_speed_controller",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:large_cogwheel",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:shaft",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:encased_chain_drive",
          "count": 32
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_arc_furnace",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:imaharas_indelible_electrodes",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_pumpjack",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_distillation_tower",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_pressure_chamber",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_furnace_engine_kit",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "pneumaticcraft:lubricant",
          "amount": 1024
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/engineering_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:energistics_mastery_shard",
          "count": 50
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:fusion_reactor_controller",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:fusion_reactor_frame",
          "count": 36
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:fusion_reactor_port",
          "count": 5
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:reactor_glass",
          "count": 24
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:electromagnetic_coil",
          "count": 5
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:pressure_disperser",
          "count": 224
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:rotational_complex",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:saturating_condenser",
          "count": 293
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:structural_glass",
          "count": 598
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:turbine_casing",
          "count": 417
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:turbine_rotor",
          "count": 10
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:turbine_blade",
          "count": 20
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:turbine_valve",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanismgenerators:turbine_vent",
          "count": 585
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:induction_casing",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:induction_port",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:ultimate_induction_provider",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:ultimate_induction_cell",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "fluxnetworks:flux_controller",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "fluxnetworks:flux_point",
          "count": 50
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "fluxnetworks:flux_plug",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "mekanismgenerators:tritium",
          "amount": 25600
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "mekanismgenerators:deuterium",
          "amount": 25600
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 750000
        }
      }
    ],
    "ticks": 1500,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/energistics_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:dimensional_mastery_shard",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "extrastorage:block_4096k",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "extrastorage:block_262144k_fluid",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:quantum_entangloporter",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "rsinfinitybooster:dimension_card",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:network_receiver",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:network_transmitter",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:network_card",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:teleporter",
          "count": 5
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:portable_teleporter",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/dimensional_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:battle_mastery_shard",
          "count": 5
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_mekasuit_helmet",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_mekasuit_bodyarmor",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_mekasuit_pants",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_mekasuit_boots",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_meka_tool",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/battle_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:excavation_mastery_shard",
          "count": 2
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "industrialforegoing:fluid_laser_base",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "industrialforegoing:ore_laser_base",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "industrialforegoing:laser_drill",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "occultism:dimensional_mineshaft",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:miner_marid_irradiated",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_excavator",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "immersiveengineering:survey_tools",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:mining_gadget_kit",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:flux_bore_kit",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_pedestal_quarry",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/excavation_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:culinary_mastery_shard",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:engineering_student_meals",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:box_of_thankful_dinners",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/culinary_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:automation_mastery_shard",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:controller",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "extrastorage:netherite_crafter",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:interface",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:pattern_grid",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:pattern",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:cable",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:deployer",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:mechanical_arm",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:content_observer",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:stockpile_switch",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "botania:auto_crafting_halo",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:field_creator",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:placer",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "entangled:block",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:universal_sensor",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:diy_drone_kit",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:assorted_router_kit",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "consumeInstantly": true,
        "data": {
          "amount": 30000
        }
      }
    ],
    "ticks": 60,
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/automation_mastery_shard",
    "type": "masterfulmachinery:machine_process",
    "structureId": "enigmatic_tree_of_life_structure",
    "controllerId": "enigmatic_tree_of_life"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "chance": 1,
        "data": {
          "item": "botania:life_essence",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "chance": 0.5,
        "data": {
          "item": "botania:life_essence",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "chance": 0.25,
        "data": {
          "item": "botania:life_essence",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:botania_mana",
        "data": {
          "amount": 2700000
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 2000000
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "pneumaticcraft:memory_essence",
          "amount": 16000
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "astralsorcery:liquid_starlight",
          "amount": 1000
        }
      },
      {
        "type": "masterfulmachinery:pncr_pressure",
        "perTick": true,
        "data": {
          "air": 1200
        }
      }
    ],
    "ticks": 300,
    "id": "enigmatica:expert/masterful_machinery/gaia_reactor/gaia_spirit",
    "type": "masterfulmachinery:machine_process",
    "structureId": "gaia_reactor_structure",
    "controllerId": "gaia_reactor"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "mekanismgenerators:deuterium",
          "amount": 640
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 10000
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "emendatusenigmatica:molten_sulfur",
          "amount": 10
        }
      },
      {
        "type": "masterfulmachinery:pncr_pressure",
        "perTick": true,
        "data": {
          "air": 100
        }
      },
      {
        "type": "masterfulmachinery:create_rotation",
        "data": {
          "speed": 256
        }
      }
    ],
    "ticks": 4000,
    "id": "enigmatica:expert/masterful_machinery/industrial_deuterium_plant/deuterium",
    "type": "masterfulmachinery:machine_process",
    "structureId": "industrial_deuterium_plant_structure",
    "controllerId": "industrial_deuterium_plant"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:reaper_scythe",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:ingots/pewter",
          "count": 3
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "betterendforge:leather_wrapped_stick",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:soul_shard",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:tattered_cloth",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:anubis_godshard",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/reaper_scythe",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:cleaving_axe",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:ingots/pewter",
          "count": 3
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "betterendforge:leather_wrapped_stick",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:prismarine_crystals",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:inlays/pewter",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:anput_godshard",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/cleaving_axe",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:prestigious_palm",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:wicked_weave",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:ender_calx",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:lesser_soul_gem",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:reagentvoid",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:warped_sprouts",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/prestigious_palm",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:lesser_soul_gem",
          "count": 4
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "occultism:spirit_attuned_gem",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:ender_calx",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:nepthys_godshard",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 4000
        }
      }
    ],
    "ticks": 400,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/lesser_soul_gem",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:reversal_pick",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:ingots/hepatizon",
          "count": 3
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "betterendforge:leather_wrapped_stick",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:soul_shard",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:inlays/pewter",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:lesser_soul_gem",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 5000
        }
      }
    ],
    "ticks": 500,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/reversal_pick",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "alexsmobs:dimensional_carver",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:reversal_pick",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "alexsmobs:void_worm_mandible",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "alexsmobs:void_worm_eye",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:ingots/netherite",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "perTick": true,
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 5000
        }
      }
    ],
    "ticks": 500,
    "id": "alexsmobs:dimensional_carver",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:glass_hand",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:basic_amulet",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:brass_hand",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:zombie_heart",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:lesser_soul_gem",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:wraith_heart",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "glassential:glass_dark_ethereal_reverse",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 10000
        }
      }
    ],
    "ticks": 1000,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/glass_hand",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:void_amulet",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:basic_amulet",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "alexsmobs:emu_feather",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:inlays/pewter",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:soul_shard",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:ingots/silver",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 10000
        }
      }
    ],
    "ticks": 1000,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/void_amulet",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:componentframeparts",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:gears/osmium",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "tconstruct:ender_slime_crystal",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:nuggets/utherium",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/componentframeparts",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemrouterfilterexact",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:componentframeparts",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:red_stained_crystal_glass_pane",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:nuggets/arcane_gold",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfilterexact",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemrouterfilteroredict",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:componentframeparts",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:lime_stained_crystal_glass_pane",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:chunks",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfilteroredict",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemrouterfilterenchant",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:componentframeparts",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:green_stained_crystal_glass_pane",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:enchanted_book",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfilterenchant",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemrouterfiltermoditems",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:componentframeparts",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:yellow_stained_crystal_glass_pane",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:enchanted_ash",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfiltermoditems",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemrouterfiltercomposite",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:componentframeparts",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "atum:white_stained_crystal_glass_pane",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:nuggets/silicon_bronze",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 100,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/itemrouterfiltercomposite",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:noderouter",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "upgrade_aquatic:elder_eye",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "occultism:spirit_attuned_gem",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:rods/prismarine",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:inlays/arcane_gold",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 50000
        }
      }
    ],
    "ticks": 1000,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/noderouter",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemroutingnode",
          "count": 2
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "botania:corporea_spark",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "occultism:spirit_attuned_gem",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "architects_palette:moonstone",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 500
        }
      }
    ],
    "ticks": 50,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/itemroutingnode",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:inputroutingnode",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemroutingnode",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:nuggets/lumium",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:dusts/fluorite",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 500
        }
      }
    ],
    "ticks": 50,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/inputroutingnode",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:outputroutingnode",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:itemroutingnode",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:nuggets/signalum",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:dusts/fluorite",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 500
        }
      }
    ],
    "ticks": 50,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/outputroutingnode",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon:ender_calx",
          "count": 8
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:dusts/ender_pearl",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 80
        }
      }
    ],
    "ticks": 10,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/ender_calx",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:golden_apple",
          "count": 4
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:apple",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:dusts/gold",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 150
        }
      }
    ],
    "ticks": 10,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/golden_apple",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:golden_carrot",
          "count": 4
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:carrot",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:dusts/gold",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 150
        }
      }
    ],
    "ticks": 10,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/golden_carrot",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:glistering_melon_slice",
          "count": 4
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:melon_slice",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:dusts/gold",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 150
        }
      }
    ],
    "ticks": 10,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/glistering_melon_slice",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:mastercore",
          "count": 1
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "botania:corporea_spark",
          "count": 3
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:storage_blocks/electrum",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "glassential:glass_ghostly",
          "count": 6
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 2000
        }
      }
    ],
    "ticks": 50,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/mastercore",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "bloodmagic:syntheticpoint",
          "count": 2
        }
      }
    ],
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "undergarden:masticator_scales",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "atum:godshards/montu",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "tag": "forge:ingots/utherium",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": 1000
        }
      }
    ],
    "ticks": 50,
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/syntheticpoint",
    "type": "masterfulmachinery:machine_process",
    "structureId": "wicked_altar_structure",
    "controllerId": "wicked_altar"
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_botanical_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:oak_leaves",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:stardust",
          "count": 16
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:resonating_gem",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:deployer",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 40000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:botanical_mastery_shard",
          "count": 2
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_astronomy_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:observatory_lens",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:attuned_celestial_crystal",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:resonating_gem",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "astralsorcery:stardust",
          "count": 32
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 45000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:astronomy_mastery_shard",
          "count": 1
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_alchemy_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:mechanical_mixer",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:spout",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:glass_bottle",
          "count": 32
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:blaze_powder",
          "count": 16
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:death_ring",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 35000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:alchemy_mastery_shard",
          "count": 1
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_ritual_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon_repraised:unholy_symbol",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "neovitae:hellfire_forge",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "neovitae:rune_charging",
          "count": 16
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "neovitae:rune_acceleration",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "neovitae:rune_dislocation",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "occultism:chalk_gold",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 40000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:ritual_mastery_shard",
          "count": 5
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_aura_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:aura_trove",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:firework_generator",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:generator_limit_remover",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:projectile_generator",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "naturesaura:aura_detector",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 35000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:aura_mastery_shard",
          "count": 1
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_engineering_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:advanced_pressure_tube",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:advanced_liquid_compressor",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:rotation_speed_controller",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:large_cogwheel",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:assembly_drill",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:assembly_laser",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 45000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:engineering_mastery_shard",
          "count": 2
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_energistics_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:ultimate_induction_provider",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:ultimate_induction_cell",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:pellet_antimatter",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:ultimate_control_circuit",
          "count": 16
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "powah:ender_core",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:controller",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 50000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:energistics_mastery_shard",
          "count": 50
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_dimensional_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:quantum_entangloporter",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:network_receiver",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:network_transmitter",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:network_card",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:teleporter",
          "count": 5
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "powah:ender_core",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 45000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:dimensional_mastery_shard",
          "count": 1
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_battle_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:netherite_helmet",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:netherite_chestplate",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:netherite_leggings",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:netherite_boots",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:pellet_antimatter",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:ultimate_control_circuit",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 45000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:battle_mastery_shard",
          "count": 5
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_excavation_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "industrialforegoing:ore_laser_base",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "industrialforegoing:laser_drill",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "occultism:dimensional_mineshaft",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "immersiveengineering:survey_tools",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "mekanism:atomic_disassembler",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 40000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:excavation_mastery_shard",
          "count": 2
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_culinary_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "farmersdelight:roast_chicken",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "farmersdelight:beef_stew",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "farmersdelight:vegetable_soup",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "farmersdelight:stuffed_pumpkin",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 25000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:culinary_mastery_shard",
          "count": 1
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/adapted_automation_mastery_shard",
    "controllerId": "enigmatic_tree_of_life",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:controller",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:pattern_grid",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "refinedstorage:pattern",
          "count": 64
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:deployer",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "create:mechanical_arm",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "pneumaticcraft:universal_sensor",
          "count": 4
        }
      },
      {
        "type": "masterfulmachinery:energy",
        "perTick": true,
        "data": {
          "amount": 40000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "kubejs:automation_mastery_shard",
          "count": 1
        }
      }
    ]
  },
  {
    "id": "enigmatica:expert/masterful_machinery/wicked_altar/adapted_reaper_scythe",
    "controllerId": "wicked_altar",
    "ticks": 200,
    "inputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon_repraised:soul_shard",
          "count": 8
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:netherite_ingot",
          "count": 2
        }
      },
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "minecraft:nether_star",
          "count": 1
        }
      },
      {
        "type": "masterfulmachinery:fluids",
        "data": {
          "fluid": "neovitae:essentia_vitae_source",
          "amount": 1000
        }
      }
    ],
    "outputs": [
      {
        "type": "masterfulmachinery:items",
        "data": {
          "item": "eidolon_repraised:reaper_scythe",
          "count": 1
        }
      }
    ]
  }
];

// E6E 的 Masterful Machinery 配方转换为 MBD2 机器配方。
//
// 机器定义（控制器、接口、方块结构）来自 e6e-mbd2-1.0.0.jar；本文件
// 只负责注册加工配方。数据数组由该模板上方的内容生成，
// 由 generate-recipe-data.js 根据 kubejs/config/e6e_mbd2/*.json 生成。
//

if (Platform.isLoaded('e6e_mbd2')) {
    ServerEvents.recipes((__e6eOriginalEvent) => {
    const event = e6eRecipeTypeView(__e6eOriginalEvent, "e6e_mbd2:industrial_deuterium_plant", false, ["e6e_mbd2:enigmatic_tree_of_life","e6e_mbd2:gaia_reactor","e6e_mbd2:industrial_deuterium_plant","e6e_mbd2:wicked_altar","minecraft:crafting_shaped"]);
        if (global.isExpertMode == false) return;

        const oldRecipes = e6eMbd2Recipes;
        if (!oldRecipes || oldRecipes.length === 0) {
            console.error('[E6E MBD2] Recipe data is empty - run e6e-mbd2-addon/generate-recipe-data.js');
            return;
        }

        function itemId(id) {
            if (id === 'botania:life_essence') return 'kubejs:gaia_spirit';
            if (id.startsWith('eidolon:')) {
                const replacement = id.replace('eidolon:', 'eidolon_repraised:');
                if (Item.exists(replacement)) return replacement;
            }
            if (id.startsWith('bloodmagic:')) {
                const replacement = id.replace('bloodmagic:', 'neovitae:');
                if (Item.exists(replacement)) return replacement;
            }
            return id;
        }

        function itemIngredient(data) {
            if (data.item) {
                const id = itemId(data.item);
                return Item.exists(id) ? (data.count || 1) + 'x ' + id : null;
            }
            if (data.tag) {
                const original = '#' + data.tag;
                if (e6eRecipeIngredientExists(original)) return (data.count || 1) + 'x ' + original;
                const common = '#' + data.tag.replace(/^forge:/, 'c:');
                if (e6eRecipeIngredientExists(common)) return (data.count || 1) + 'x ' + common;
            }
            return null;
        }

        function fluidId(id) {
            if (id === 'bloodmagic:life_essence_fluid') {
                return Fluid.exists('neovitae:essentia_vitae_source') ? 'neovitae:essentia_vitae_source' : null;
            }
            if (id === 'emendatusenigmatica:molten_sulfur') {
                if (Fluid.exists('mekanism:sulfuric_acid')) return 'mekanism:sulfuric_acid';
                return null;
            }
            return Fluid.exists(id) ? id : null;
        }

        function usable(content) {
            if (content.type === 'masterfulmachinery:items') {
                if (content.data.item) return Item.exists(itemId(content.data.item));
                return itemIngredient(content.data) !== null;
            }
            if (content.type === 'masterfulmachinery:fluids') return fluidId(content.data.fluid) !== null;
            return true;
        }

        function add(target, content, input) {
            const type = content.type;
            const data = content.data;
            if (type === 'masterfulmachinery:items') {
                const stack = itemIngredient(data);
                if (input) target.inputItems(stack);
                else target.outputItems((data.count || 1) + 'x ' + itemId(data.item));
            } else if (type === 'masterfulmachinery:fluids') {
                const stack = data.amount + 'x ' + fluidId(data.fluid);
                if (input) target.inputFluids(stack);
                else target.outputFluids(stack);
            } else if (type === 'masterfulmachinery:energy') {
                if (input) target.inputFE(data.amount);
                else target.outputFE(data.amount);
            } else if (type === 'masterfulmachinery:pncr_pressure') {
                if (input) target.inputPNCAir(data.air);
            } else if (type === 'masterfulmachinery:botania_mana') {
                // 植物魔法未安装；1 点旧版魔力折算为 4 FE。
                if (input) target.inputFE(data.amount * 4);
                else target.outputFE(data.amount * 4);
            } else if (type === 'masterfulmachinery:astral_starlight') {
                // 当前安装的 MBD2 不支持星辉魔法的星光能力。
                if (input) target.inputFE(data.amount * 100);
            } else if (type === 'masterfulmachinery:create_rotation') {
                // MBD2 的旋转处理器需要动能机器定义；
                // 旧版转速消耗改用额外 FE 消耗表示。
                if (input) target.inputFE(data.speed * 100);
            } else {
                throw new Error('[E6E MBD2] Unsupported capability ' + type);
            }
        }

        // MBD2 的 chance()/perTick() 接收一个以配方自身为参数的回调，因此修饰逻辑
        // 因此每次调用都必须重新构造内容，不能预先只构造一次。
        function addWithModifiers(targetRecipe, content, input) {
            function body(r) {
                if (content.perTick) r.perTick((tick) => add(tick, content, input));
                else add(r, content, input);
            }
            if (content.chance !== undefined) targetRecipe.chance(content.chance, body);
            else body(targetRecipe);
        }

        let added = 0;
        let unavailable = 0;
        let buildErrors = 0;
        const perMachine = {};
        const missingMachines = {};
        var mbdRecipe;
        oldRecipes.forEach((recipe) => {
            const machine = recipe.controllerId;
            if (typeof event.recipes.e6e_mbd2[machine] !== 'function') {
                missingMachines[machine] = (missingMachines[machine] || 0) + 1;
                return;
            }
            if (!recipe.inputs.every(usable) || !recipe.outputs.every(usable)) {
                unavailable++;
                return;
            }
            const oldPath = recipe.id.includes('/masterful_machinery/')
                ? recipe.id.split('/masterful_machinery/')[1]
                : machine + '/' + recipe.id.split(':').pop();
            try {
                mbdRecipe = event.recipes.e6e_mbd2[machine]()
                    .id('enigmatica:expert/mbd2/' + oldPath).duration(recipe.ticks);
                recipe.inputs.forEach((content) => addWithModifiers(mbdRecipe, content, true));
                recipe.outputs.forEach((content) => addWithModifiers(mbdRecipe, content, false));
                added++;
                perMachine[machine] = (perMachine[machine] || 0) + 1;
            } catch (error) {
                buildErrors++;
                if (buildErrors === 1) {
                    console.error('[E6E MBD2] failed to build ' + recipe.id + ': ' + error
                        + (error && error.stack ? '\n' + error.stack : ''));
                }
            }
        });
        if (buildErrors) console.error('[E6E MBD2] ' + buildErrors + ' recipes failed to build');
        console.info('[E6E MBD2] registered ' + added + ' machine recipes; ' + unavailable
            + ' require unavailable legacy content');
        console.info('[E6E MBD2] per machine: ' + JSON.stringify(perMachine));
        if (Object.keys(missingMachines).length > 0) {
            console.error('[E6E MBD2] e6e_mbd2 has no recipe type for: ' + JSON.stringify(missingMachines));
        }

        const parts = [
            ['item_input', 'minecraft:hopper', 'minecraft:chest'],
            ['item_output', 'minecraft:hopper', 'minecraft:barrel'],
            ['fluid_input', 'minecraft:bucket', 'minecraft:iron_block'],
            ['fluid_output', 'minecraft:bucket', 'minecraft:copper_block'],
            ['energy_input', 'minecraft:redstone_block', 'minecraft:iron_block'],
            ['energy_output', 'minecraft:redstone_block', 'minecraft:copper_block'],
            ['pressure_input', 'pneumaticcraft:advanced_pressure_tube', 'minecraft:iron_block']
        ];
        parts.forEach((part) => {
            if (!Item.exists(part[1]) || !Item.exists(part[2])) return;
            event.shaped('e6e_mbd2:' + part[0], ['ABA', 'BCB', 'ABA'], {
                A: 'minecraft:iron_ingot', B: part[1], C: part[2]
            }).id('e6e_mbd2:parts/' + part[0]);
        });

        const controllers = [
            ['enigmatic_tree_of_life', 'minecraft:oak_sapling'],
            ['gaia_reactor', 'minecraft:beacon'],
            ['industrial_deuterium_plant', 'mekanism:electrolytic_separator'],
            ['wicked_altar', 'eidolon_repraised:stone_altar']
        ];
        controllers.forEach((entry) => {
            if (!Item.exists(entry[1])) return;
            event.shaped('e6e_mbd2:' + entry[0], ['ABA', 'CDC', 'AEA'], {
                A: 'minecraft:iron_block',
                B: entry[1],
                C: 'e6e_mbd2:item_input',
                D: 'e6e_mbd2:item_output',
                E: 'e6e_mbd2:energy_input'
            }).id('e6e_mbd2:controllers/' + entry[0]);
        });
    });
}
})();
