// priority: 99
onEvent('recipes', event => {
    
    event.remove({output: 'ae2:cell_component_1k'})
    event.remove({output: 'ae2:controller'})
    event.remove({output: 'ae2:formation_core'})
    event.remove({output: 'ae2:annihilation_core'})
    event.remove({output: 'ae2:quartz_glass'})
    event.remove({output: 'ae2:quartz_vibrant_glass'})
    event.remove({output: 'ae2:quartz_growth_accelerator'})

    event.replaceInput({id: 'ae2:network/crafting/cpu_crafting_unit'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/blocks/pattern_providers_interface'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/crafting/molecular_assembler'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/parts/quartz_fiber_part'}, '#forge:glass', 'ae2:quartz_glass')
    event.replaceInput({id: 'ae2:network/blocks/inscribers'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'ae2:misc/fluix\pearl'}, 'ae2:fluix_dust', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ae2:network/blocks/interfaces_interface'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/blocks/spatial_io_pylon'}, 'ae2:fluix_dust', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ae2:network/blocks/io_condenser'}, 'minecraft:iron_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ae2:network/blocks/spatial_anchor'}, 'minecraft:iron_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ae2:network/blocks/quantum_ring'}, 'minecraft:iron_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ae2:network/wireless_part'}, 'minecraft:iron_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ae2:network/blocks/crystal_processing_charger'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'ae2:network/wireless_booster'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/blocks/security_station'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'ae2:misc/meteors_sky_compass'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'ae2:network/blocks/energy_energy_acceptor'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'ae2:network/cells/view_cell'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    
    event.recipes.createFilling('2x ae2:certus_quartz_crystal', [
        'ae2:certus_crystal_seed',
        Fluid.of('immersiveengineering:redstone_acid', 250)
      ])
    
      event.recipes.createFilling('2x ae2:fluix_crystal', [
        'ae2:fluix_crystal_seed',
        Fluid.of('immersiveengineering:redstone_acid', 250)
      ])

      event.recipes.createFilling('ae2:quartz_vibrant_glass', [
        'ae2:quartz_glass',
        Fluid.of('immersiveengineering:redstone_acid', 250)
      ])

      event.shaped('ae2:cell_component_1k', [
        'RCR',
        'SLS',
        'RCR'
    ], {
        R: 'minecraft:redstone',
        L: 'ae2:logic_processor',
        C: '#forge:gems/certus_quartz',
        S: 'immersiveengineering:storage_steel'
    }),
    event.shaped('ae2:controller', [
        'RCR',
        'SLS',
        'RCR'
    ], {
        R: 'immersiveengineering:storage_steel',
        L: 'ae2:engineering_processor',
        C: 'create:electron_tube',
        S: '#forge:gems/fluix'
    }),

    event.shaped('ae2:formation_core', [
        ' I ',
        'CFL',
        ' I '
    ], {
        I: 'create:precision_mechanism',
        L: 'ae2:logic_processor',
        F: 'ae2:fluix_dust',
        C: '#forge:gems/certus_quartz'
    }),

    event.shaped('ae2:annihilation_core', [
        ' I ',
        'CFL',
        ' I '
    ], {
        I: 'create:precision_mechanism',
        L: 'ae2:logic_processor',
        F: 'ae2:fluix_dust',
        C: '#forge:gems/quartz'
    })
    event.shapeless('ae2:fluix_smart_dense_cable', ['4x ae2:fluix_smart_cable'])

    event.recipes.createMixing('4x ae2:quartz_glass', [
        '4x #forge:dusts/certus_quartz',
        '4x #forge:glass',
        'create:powdered_obsidian',
        Fluid.of('immersiveengineering:ethanol', 250)
      ]).heated()
})