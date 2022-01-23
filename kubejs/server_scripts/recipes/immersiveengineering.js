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

    event.replaceInput({id: 'immersiveengineering:crafting/light_engineering'}, '#forge:ingots/copper', '#forge:ingots/brass')
    event.remove({output: 'ars_nouveau:imbuement_chamber'})
    event.replaceInput({id: 'immersiveengineering:crafting/rs_engineering'}, '#forge:ingots/copper', 'utilitix:linked_crystal')
    event.replaceOutput({id: 'cyclic:apple_sprout_emerald'}, 'cyclic:apple_sprout_emerald', 'cyclic:apple_emerald')
    event.replaceOutput({id: 'cyclic:apple_sprout_diamond'}, 'cyclic:apple_sprout_diamond', 'cyclic:apple_diamond')
    event.replaceInput({id: 'cyclic:solidifier/solidifier_apple_enchanted'}, 'minecraft:golden_apple', 'cyclic:apple_emerald')
    event.replaceInput({id: 'immersiveengineering:crafting/empty_shell'}, '#forge:plates/copper', 'immersiveengineering:empty_casing')
    event.replaceInput({id: 'immersiveengineering:crafting/heavy_engineering'}, '#forge:ingots/electrum', 'create:shadow_steel_casing')
    event.replaceInput({id: 'ae2:network/crafting/cpu_crafting_unit'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/blocks/pattern_providers_interface'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'ae2:network/crafting/molecular_assembler'}, 'minecraft:iron_ingot', 'immersiveengineering:circuit_board')

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
    
    event.recipes.createMixing('create:chromatic_compound', [
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:polished_rose_quartz'
      ]).superheated()
    
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
    event.shaped('ars_nouveau:imbuement_chamber', [
        'AGA',
        'ESE',
        'AGA'
    ], {
        S: '#forge:plates/steel',
        E: 'create:electron_tube',
        A: '#forge:planks/archwood',
        G: 'minecraft:gold_ingot'
    })
    event.shaped('occultism:sacrificial_bowl', [
        'EGE',
        'OSO',
        'OOO'
    ], {
        S: '#forge:plates/steel',
        E: 'create:electron_tube',
        O: 'occultism:otherstone',
        G: 'minecraft:gold_ingot'
    })
    event.recipes.immersiveengineeringArcFurnace(['2x #forge:ingots/zinc'],'#forge:ores/zinc', [], '#forge:slag')
    event.recipes.immersiveengineeringArcFurnace(['13x #forge:ingots/zinc', Item.of('#forge:ingots/zinc').withChance(0.5)],'create:raw_zinc_block')
    event.recipes.immersiveengineeringArcFurnace(['1x #forge:ingots/zinc'],'create:crushed_zinc_ore')
    event.recipes.immersiveengineeringArcFurnace(['#forge:ingots/zinc', Item.of('#forge:ingots/zinc').withChance(0.5)],'create:raw_zinc')

    event.recipes.createCrushing([
        'create:crushed_nickel_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_ores/nickel')
    event.recipes.createCrushing([
        '2x create:crushed_nickel_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_nickel_ore').withChance(0.25),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 'immersiveengineering:deepslate_ore_nickel')
    event.recipes.createCrushing([
        'create:crushed_nickel_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_nickel_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 'immersiveengineering:ore_nickel')
    event.recipes.createCrushing([
        '9x create:crushed_uranium_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_blocks/uranium')
    event.recipes.createCrushing([
        'create:crushed_uranium_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_ores/uranium')
    event.recipes.createCrushing([
        '2x create:crushed_uranium_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_uranium_ore').withChance(0.25),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 'immersiveengineering:deepslate_ore_uranium')
    event.recipes.createCrushing([
        'create:crushed_uranium_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_uranium_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 'immersiveengineering:ore_uranium')
    event.recipes.createCrushing([
        '9x create:crushed_aluminum_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_blocks/aluminum')
    event.recipes.createCrushing([
        'create:crushed_aluminum_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_ores/aluminum')
    event.recipes.createCrushing([
        '2x create:crushed_aluminum_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_aluminum_ore').withChance(0.25),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 'immersiveengineering:deepslate_ore_aluminum')
    event.recipes.createCrushing([
        'create:crushed_aluminum_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_aluminum_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 'immersiveengineering:ore_aluminum')
    event.recipes.createCrushing([
        '9x create:crushed_lead_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_blocks/lead')
    event.recipes.createCrushing([
        'create:crushed_lead_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_ores/lead')
    event.recipes.createCrushing([
        '2x create:crushed_lead_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_lead_ore').withChance(0.25),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 'immersiveengineering:deepslate_ore_lead')
    event.recipes.createCrushing([
        'create:crushed_lead_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_lead_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 'immersiveengineering:ore_lead')
    event.recipes.createCrushing([
        '9x create:crushed_silver_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_blocks/silver')
    event.recipes.createCrushing([
        'create:crushed_silver_ore',
        Item.of('create:experience_nugget').withChance(0.75)
      ], '#forge:raw_ores/silver')
    event.recipes.createCrushing([
        '2x create:crushed_silver_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_silver_ore').withChance(0.25),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 'immersiveengineering:deepslate_ore_silver')
    event.recipes.createCrushing([
        'create:crushed_silver_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_silver_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 'immersiveengineering:ore_silver')
    event.recipes.createCrushing([
        'create:crushed_silver_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_silver_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 'occultism:silver_ore')
    event.recipes.createCrushing([
        '2x create:crushed_silver_ore',
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_silver_ore').withChance(0.25),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 'occultism:silver_ore_deepslate')
    event.recipes.immersiveengineeringCrusher('2x create:crushed_zinc_ore', '#forge:ores/zinc') // Secondary output format: {chance: 0.5, output: 'item:id'}
    event.recipes.immersiveengineeringCrusher('12x create:crushed_zinc_ore', 'create:raw_zinc_block')
    event.recipes.immersiveengineeringCrusher('create:crushed_zinc_ore', 'create:raw_zinc', [Item.of('create:crushed_zinc_ore').withChance(0.3333)])
    event.recipes.immersiveengineeringCrusher('create:crushed_zinc_ore', '#forge:ingots/zinc')
})

