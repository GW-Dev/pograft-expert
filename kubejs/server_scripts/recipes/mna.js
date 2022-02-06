onEvent('recipes', event => {
    event.remove({id: 'mna:vinteum_coated_iron'})
    event.remove({id: 'mna:vinteum_bar_blast_furnace'})
    event.remove({id: 'mna:vinteum_bar'})
    event.remove({id: 'mna:purified_vinteum_coated_iron'})
    event.remove({id: 'mna:purified_vinteum_bar_blast_furnace'})
    event.remove({id: 'mna:purified_vinteum_bar'})
    event.recipes.createMixing('mna:vinteum_coated_iron', [
        'occultism:spirit_attuned_gem', '#mna:dusts/vinteum', '2x #forge:ingots/iesnium', 'minecraft:iron_ingot'
      ]).superheated()
    event.recipes.createMixing('mna:purified_vinteum_coated_iron', [
        '4x occultism:spirit_attuned_gem', '2x #mna:dusts/purified_vinteum', '2x #forge:ingots/iesnium', 'minecraft:iron_ingot'
      ]).superheated()
    event.recipes.immersiveengineeringArcFurnace(['1x mna:vinteum_ingot'],'4x mna:vinteum_coated_iron')
    event.recipes.immersiveengineeringArcFurnace(['1x mna:purified_vinteum_ingot'],'8x mna:purified_vinteum_coated_iron')
    event.replaceInput({id: 'mna:wizard_chalk'}, 'minecraft:paper', 'mahoutsukai:spell_cloth')
    event.replaceInput({id: 'mna:manaweaving/intermediate/ironbark'}, 'minecraft:iron_ingot', 'mna:vinteum_ingot')
})