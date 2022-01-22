// priority: 99
onEvent('recipes', event => {
    
    event.remove({output: 'ae2:cell_component_1k'})
    event.remove({output: 'ae2:controller'})
    event.remove({output: 'ae2:formation_core'})
    event.remove({output: 'ae2:annihilation_core'})


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
})