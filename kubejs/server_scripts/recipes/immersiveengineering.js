// priority: 99
onEvent('recipes', event => {
    
    event.remove({id: 'immersiveengineering:crafting/cloche'})
    event.remove({id: 'immersiveengineering:crafting/furnace_heater'})
    event.remove({id: 'immersiveengineering:crafting/conveyor_basic'})
    event.remove({id: 'immersiveengineering:crafting/coil_lv'})
    event.remove({id: 'immersiveengineering:crafting/coil_mv'})
    event.remove({id: 'immersiveengineering:crafting/coil_hv'})
    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({id: 'immersiveengineering:crafting/sheetmetal_steel'})
    event.remove({id: 'immersiveengineering:crafting/sheetmetal_iron'})
    event.remove({id: 'occultism:crafting/sacrificial_bowl'})
    event.remove({id: 'forbidden_arcanus:enchanted_golden_apple'})
    event.remove({id: 'immersiveengineering:crafting/insulating_glass'})
    event.remove({id: 'immersiveengineering:crafting/blastbrick_reinforced'})
    event.remove({id: 'immersiveengineering:arcfurnace/ore_zinc'})
    event.remove({id: 'immersiveengineering:crafting/redstone_acid'})
    event.remove({id: 'immersiveengineering:crafting/radiator'})

    
    event.replaceInput({id: 'immersiveengineering:crafting/light_engineering'}, '#forge:ingots/copper', '#forge:ingots/brass')
    event.remove({output: 'ars_nouveau:imbuement_chamber'})
    event.replaceInput({id: 'immersiveengineering:crafting/rs_engineering'}, '#forge:ingots/copper', 'utilitix:linked_crystal')
    event.replaceOutput({id: 'cyclic:apple_sprout_emerald'}, 'cyclic:apple_sprout_emerald', 'cyclic:apple_emerald')
    event.replaceOutput({id: 'cyclic:apple_sprout_diamond'}, 'cyclic:apple_sprout_diamond', 'cyclic:apple_diamond')
    event.replaceInput({id: 'cyclic:solidifier/solidifier_apple_enchanted'}, 'minecraft:golden_apple', 'cyclic:apple_emerald')
    event.replaceInput({id: 'immersiveengineering:crafting/empty_shell'}, '#forge:plates/copper', 'immersiveengineering:empty_casing')
    event.replaceInput({id: 'immersiveengineering:crafting/heavy_engineering'}, '#forge:ingots/electrum', 'create:shadow_steel_casing')
    

    event.shapeless('1x immersiveengineering:blastbrick_reinforced', ['immersiveengineering:plate_steel', 'immersiveengineering:blastbrick', 'create:brass_ingot'])

    event.shapeless('48x cgm:basic_bullet', ['immersiveengineering:empty_casing', 'minecraft:gunpowder'])
    event.shapeless('24x cgm:advanced_bullet', ['immersiveengineering:empty_casing', '2x minecraft:gunpowder'])
    event.shapeless('48x cgm:shell', ['immersiveengineering:empty_shell', '2x minecraft:gunpowder', '2x #forge:nuggets/gold'])
    event.shapeless('8x cgm:stun_grenade', ['immersiveengineering:plate_uranium', '2x minecraft:gunpowder', '3x #forge:dusts/glowstone'])
    event.shapeless('8x cgm:grenade', ['immersiveengineering:plate_uranium', '2x minecraft:gunpowder', '3x #forge:nuggets/steel'])
    event.shapeless('4x cgm:missile', ['immersiveengineering:plate_uranium', '2x minecraft:gunpowder', '3x #forge:nuggets/uranium'])

    event.recipes.createMixing('immersiveengineering:blastbrick_reinforced', [
        'immersiveengineering:plate_steel',
        'immersiveengineering:blastbrick',
        'create:brass_ingot'
      ])

    event.recipes.createMixing('48x cgm:basic_bullet', [
        'immersiveengineering:empty_casing', 
        'minecraft:gunpowder'
      ])
    
    event.recipes.createMixing('24x cgm:advanced_bullet', [
        'immersiveengineering:empty_casing', 
        'minecraft:gunpowder',
        'minecraft:gunpowder'
      ])

    event.recipes.createMixing('48x cgm:shell', [
        'immersiveengineering:empty_shell', 
        'minecraft:gunpowder',
        'minecraft:gunpowder',
        '#forge:nuggets/gold',
        '#forge:nuggets/gold',
      ])

    event.recipes.createMixing('8x cgm:stun_grenade', [
        'immersiveengineering:plate_uranium', 
        'minecraft:gunpowder',
        'minecraft:gunpowder',
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone'
      ])

    event.recipes.createMixing('8x cgm:grenade', [
        'immersiveengineering:plate_uranium', 
        'minecraft:gunpowder',
        'minecraft:gunpowder',
        '#forge:dusts/steel',
        '#forge:dusts/steel',
        '#forge:nuggets/steel'
      ])

    event.recipes.createMixing('4x cgm:missile', [
        'immersiveengineering:plate_uranium', 
        'minecraft:gunpowder',
        'minecraft:gunpowder',
        '#forge:dusts/uranium',
        '#forge:dusts/uranium',
        '#forge:nuggets/uranium'
      ])
    
    
    
    event.recipes.createMixing('2x immersiveengineering:insulating_glass', [
        '#forge:storage_blocks/steel',
        '#forge:glass',
        '#forge:glass',
        'create:powdered_obsidian',
        Fluid.of('immersiveengineering:redstone_acid', 250),
        'create:electron_tube'
      ]).superheated()

    event.shaped('8x immersiveengineering:conveyor_basic', [
        'BBB',
        'LLL',
        'IRI'
    ], {
        B: 'create:belt_connector',
        L: 'minecraft:leather',
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    }),
    event.shaped('immersiveengineering:coil_lv', [
        'CCC',
        'CAC',
        'CCC'
    ], {
        C: 'immersiveengineering:wirecoil_copper',
        A: 'createaddition:alternator'
    }),
    event.shaped('immersiveengineering:coil_mv', [
        'EEE',
        'EAE',
        'EEE'
    ], {
        E: 'immersiveengineering:wirecoil_electrum',
        A: 'createaddition:alternator'
    }),
    event.shaped('immersiveengineering:coil_hv', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'immersiveengineering:wirecoil_steel',
        A: 'createaddition:alternator'
    }),
    event.shaped('immersiveengineering:dynamo', [
        'PEP',
        'RCR',
        'SSS'
    ], {
        P: 'create:precision_mechanism',
        E: 'create:electron_tube',
        R: 'minecraft:redstone',
        C: 'immersiveengineering:coil_lv',
        S: 'immersiveengineering:ingot_steel'
    }),
    event.shaped('4x immersiveengineering:sheetmetal_steel', [
        ' S ',
        'SES',
        ' S '
    ], {
        S: 'immersiveengineering:plate_steel',
        E: 'create:electron_tube'
    }),
    event.shaped('4x immersiveengineering:sheetmetal_iron', [
        ' I ',
        'IEI',
        ' I '
    ], {
        I: '#forge:plates/iron',
        E: 'create:electron_tube'
    })
    
    event.shaped('immersiveengineering:radiator', [
        'SCS',
        'CIC',
        'SCS'
    ], {
        S: '#forge:sheetmetals/steel',
        C: '#forge:plates/copper',
        I: 'immersiveengineering:insulating_glass'
    })
    
})

