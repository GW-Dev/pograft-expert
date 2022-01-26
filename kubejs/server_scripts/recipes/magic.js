// priority: 99
onEvent('recipes', event => {

    event.remove({output: 'rootsclassic:mortar'})
    event.remove({output: 'rootsclassic:pestle'})
    event.remove({output: 'rootsclassic:altar'})
    event.remove({output: 'rootsclassic:imbuer'})
    event.remove({output: 'rootsclassic:brazier'})
    event.remove({id: 'hexerei:candle_color_red'})
    event.remove({id: 'ars_nouveau:imbuement_lapis'})
    event.remove({output: 'mahoutsukai:mortar'})
    event.remove({output: 'mahoutsukai:spell_cloth'})
    event.remove({output: 'mahoutsukai:pestle'})
    event.remove({output: 'mahoutsukai:dagger'})
    event.remove({output: 'ars_nouveau:novice_spell_book'})

    event.replaceInput({id: 'ars_nouveau:imbuement_amethyst'}, 'minecraft:amethyst_shard', 'naturesaura:sky_ingot')

    event.replaceInput({id: 'ars_nouveau:volcanic_sourcelink'}, 'minecraft:gold_ingot', 'naturesaura:infused_iron')
    event.replaceInput({id: 'ars_nouveau:relay'}, 'minecraft:gold_ingot', 'naturesaura:infused_iron')
    event.replaceInput({id: 'ars_nouveau:scribes_table'}, '#forge:logs/archwood', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:agronomic_sourcelink'}, 'minecraft:gold_ingot', 'naturesaura:infused_iron')
    event.replaceInput({id: 'ars_nouveau:source_jar'}, 'ars_nouveau:archwood_slab', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:enchanting_apparatus'}, 'minecraft:iron_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:arcane_stone'}, '#forge:stone', 'naturesaura:infused_brick')
    event.replaceInput({id: 'ars_nouveau:arcane_core'}, 'minecraft:gold_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:basic_spell_turret'}, 'minecraft:gold_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:basic_spell_turret'}, 'minecraft:redstone_block', 'naturesaura:tainted_gold_block')
    event.replaceInput({id: 'ars_nouveau:potion_melder'}, 'minecraft:gold_block', 'naturesaura:tainted_gold_block')
    event.replaceInput({id: 'ars_nouveau:ritual_brazier'}, 'minecraft:gold_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:alchemical_sourcelink'}, 'minecraft:gold_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:vitalic_sourcelink'}, 'minecraft:gold_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'ars_nouveau:mycelial_sourcelink'}, 'minecraft:gold_ingot', 'naturesaura:sky_ingot')
    
    event.shapeless('ars_nouveau:novice_spell_book', ['minecraft:book', '6x naturesaura:sky_ingot', '2x naturesaura:tainted_gold_block'])

    event.shaped('rootsclassic:brazier', [
        'IRI',
        'ICI',
        'ISI'
    ], {
        C: 'minecraft:cauldron',
        I: 'minecraft:iron_ingot',
        R: 'hexerei:candle_red',
        S: 'hexerei:dried_sage_bundle'
    }),
    event.shaped('rootsclassic:mortar', [
        'F F',
        'FSF',
        ' F '
    ], {
        F: '#forge:stone',
        S: 'hexerei:dried_sage_bundle'
    }),
    event.shaped('rootsclassic:pestle', [
        'CCF',
        'FFC',
        'FFC'
    ], {
        F: '#forge:stone',
        C: 'hexerei:candle_red'
    })

    event.shaped('rootsclassic:altar', [
        'VBV',
        'SGS',
        'PCP'
    ], {
        G: 'minecraft:gold_block',
        S: '#forge:stone',
        V: 'rootsclassic:verdant_sprig',
        B: 'hexerei:crystal_ball',
        P: 'minecraft:poppy',
        C: 'minecraft:chiseled_stone_bricks'
    })

    event.shaped('rootsclassic:imbuer', [
        '   ',
        'IBI',
        'SCS'
    ], {
        I: 'minecraft:iron_bars',
        B: 'hexerei:willow_broom',
        C: 'hexerei:candle_red',
        S: 'hexerei:dried_sage_bundle'
    })
    event.shaped('mahoutsukai:mortar', [
        '   ',
        'S S',
        'SES'
    ], {
        S: 'ars_nouveau:source_gem_block',
        E: 'ars_nouveau:earth_essence'
    })
    
    event.shaped('mahoutsukai:pestle', [
        ' F ',
        'SF ',
        'SS '
    ], {
        S: 'ars_nouveau:source_gem_block',
        F: 'ars_elemental:fire_focus'
    })

    event.shaped('mahoutsukai:dagger', [
        ' S ',
        'DBW',
        ' C '
    ], {
        S: 'ars_nouveau:starbuncle_shards',
        W: 'ars_nouveau:wixie_shards',
        D: 'ars_nouveau:whirlisprig_shards',
        C: 'ars_elemental:necrotic_focus',
        B: 'ars_nouveau:enchanters_sword'
    })
    
})
