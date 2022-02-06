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
    event.remove({output: 'mahoutsukai:hammer'})
    event.remove({output: 'mahoutsukai:pestle'})
    event.remove({output: 'mahoutsukai:dagger'})
    event.remove({output: 'ars_nouveau:novice_spell_book'})
    event.remove({output: 'buddycards:buddysteel_blend'})
    event.remove({output: 'buddycards:buddysteel_ingot_blast'})
    event.remove({output: 'occultism:crafting/chalk_white_impure'})
    event.remove({output: 'mahoutsukai:mana_circuit_magitech'})
    event.remove({output: 'mahoutsukai:spell_cloth'})
    event.remove({id: 'occultism:crafting/chalk_white_impure'})
    event.remove({id: 'ars_nouveau:imbuement_amethyst_block'})

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
    event.replaceInput({id: 'ars_nouveau:enchanters_sword'}, 'minecraft:gold_ingot', 'naturesaura:tainted_gold_block')
    event.replaceInput({id: 'mahoutsukai:mana_circut_magitech'}, 'minecraft:iron_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({id: 'computercraft:pocket_computer_advanced'}, 'minecraft:gold_ingot', 'immersiveengineering:ingot_electrum')
    event.replaceInput({id: 'computercraft:wireless_modem_advanced'}, 'minecraft:gold_ingot', 'immersiveengineering:ingot_electrum')
    event.replaceInput({id: 'computercraft:computer_advanced_upgrade'}, 'minecraft:gold_ingot', 'immersiveengineering:ingot_electrum')
    event.replaceInput({id: 'computercraft:turtle_normal'}, 'minecraft:iron_ingot', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:monitor_advanced'}, 'minecraft:gold_ingot', 'immersiveengineering:ingot_electrum')
    event.replaceInput({id: 'computercraft:computer_normal'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:monitor_normal'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:printer'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:speaker'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:disk_drive'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:cable'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:wired_modem'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'computercraft:wireless_modem_normal'}, '#forge:stone', 'immersiveengineering:ingot_steel')
    event.replaceInput({id: 'advancedperipherals:peripheral_casing'}, 'minecraft:iron_ingot', 'immersiveengineering:storage_electrum')
    event.replaceInput({id: 'advancedperipherals:memory_card'}, 'minecraft:iron_ingot', 'immersiveengineering:storage_electrum')
    event.replaceInput({id: 'buddycards:golden_grading_sleeve'}, 'minecraft:gold_nugget', 'immersiveengineering:storage_electrum')
    event.replaceInput({id: 'buddycards:golden_grading_sleeves'}, 'minecraft:gold_nugget', 'immersiveengineering:storage_electrum')
    event.replaceInput({id: 'buddycards:grading_sleeves'}, 'minecraft:glass_pane', 'ae2:quartz_vibrant_glass')
    event.replaceInput({id: 'buddycards:grading_sleeves_bulk'}, 'minecraft:glass_pane', 'ae2:quartz_vibrant_glass')
    event.replaceInput({id: 'buddycardsexp:create/buddysteel_ingot'}, '#forge:storage_blocks/iron', '#forge:storage_blocks/steel')
    event.replaceInput({id: 'occultism:crafting/chalk_gold_impure'}, '#forge:dusts/gold', 'naturesaura:tainted_gold_block')
    event.replaceInput({id: 'occultism:crafting/chalk_purple_impure'}, 'occultism:crushed_end_stone', 'mahoutsukai:mana_circuit')
    event.replaceInput({id: 'occultism:spirit_fire/purified_ink'}, 'minecraft:black_dye', 'mahoutsukai:spell_cloth')
    event.replaceInput({type: 'occultism:ritual'}, 'minecraft:gold_ingot', '#forge:ingots/electrum')
    event.replaceInput({id: 'occultism:crafting/golden_sacrificial_bowl'}, 'minecraft:gold_ingot', '#forge:storage_blocks/constantan')
    event.replaceInput({id: 'occultism:crafting/storage_remote_inert'}, 'minecraft:gold_ingot', '#forge:storage_blocks/constantan')
    event.replaceInput({id: 'occultism:crafting/wormhole_frame'}, 'minecraft:gold_ingot', '#forge:storage_blocks/constantan')
    event.replaceInput({id: 'occultism:spirit_fire/spirit_attuned_gem'}, 'minecraft:diamond', 'ars_nouveau:source_gem_block')
    event.shapeless('ars_nouveau:novice_spell_book', ['minecraft:book', '6x naturesaura:sky_ingot', '2x naturesaura:tainted_gold_block'])
    event.shapeless('mahoutsukai:spell_cloth', ['ars_nouveau:spell_parchment', Item.of('mahoutsukai:dagger').ignoreNBT()]).keepIngredient(Item.of('mahoutsukai:dagger').ignoreNBT())

    event.recipes.createMixing('mahoutsukai:spell_cloth', [
        'ars_nouveau:spell_parchment',
        Item.of('mahoutsukai:dagger').ignoreNBT()
    ]).keepIngredient(Item.of('mahoutsukai:dagger').ignoreNBT())

    event.shaped('occultism:chalk_white_impure', [
        'OAI',
        'OAI',
        'OAI'
    ], {
        O: 'occultism:burnt_otherstone',
        I: 'mahoutsukai:fae_essence',
        A: 'occultism:otherworld_ashes'
    }),

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
    event.shaped('ars_nouveau:imbuement_chamber', [
        'AGA',
        'ESE',
        'AGA'
    ], {
        S: '#forge:plates/steel',
        E: 'create:electron_tube',
        A: '#forge:planks/archwood',
        G: 'naturesaura:infused_iron'
    })
    event.shaped('occultism:sacrificial_bowl', [
        'EGE',
        'OSO',
        'OOO'
    ], {
        S: 'mahoutsukai:mana_circuit',
        E: 'ars_elemental:necrotic_focus',
        O: 'occultism:otherstone',
        G: 'mahoutsukai:fae_essence'
    })
    
})
