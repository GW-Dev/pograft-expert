onEvent('recipes', event => {
    event.remove({id: 'biggerreactors:smelting/graphite_ingot'})
    event.remove({id: 'biggerreactors:crafting/ludicrite_block_nether_star'})
    event.remove({id: 'biggerreactors:crafting/uranium_to_cyanite'})
    event.remove({id: 'biggerreactors:crafting/reactor/reactor_casing'})
    event.remove({id: 'biggerreactors:crafting/reactor/reactor_fuel_rod'})
    event.remove({id: 'biggerreactors:crafting/turbine/turbine_casing'})
    event.remove({id: 'biggerreactors:crafting/heat_exchanger/casing'})
    event.remove({id: 'biggerreactors:crafting/reactor/reactor_manifold'})
    event.remove({id: 'enderchests:ender_pouch'})
    event.remove({id: 'hostilenetworks:living_matter/loot_fabricator'})

    event.replaceInput({mod: 'endertanks'}, 'minecraft:ender_pearl', 'enderchests:ender_pouch')
    event.replaceInput({mod: 'enderchests'}, 'minecraft:ender_pearl', 'enderchests:ender_pouch')
    event.replaceInput({id: 'minecraft:piston'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'advgenerators:crafting/controller'}, 'minecraft:quartz', 'immersiveengineering:circuit_board')
    event.replaceInput({id: 'advgenerators:turbines/blade'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({id: 'advgenerators:turbines/rotor_tier1'}, 'minecraft:iron_ingot', '#forge:ingots/electrum')
    event.replaceInput({id: 'advgenerators:turbines/rotor_tier2'}, 'minecraft:gold_nugget', '#forge:storage_blocks/constantan')
    event.replaceInput({id: 'advgenerators:turbines/kit_tier2'}, 'minecraft:gold_nugget', '#forge:storage_blocks/constantan')
    //event.replaceInput({id: 'advgenerators:turbines/rotor_tier4'}, 'immersiveengineering:ingot_steel', 'botania:terrasteel_ingot')
    //event.replaceInput({id: 'advgenerators:turbines/kit_tier4'}, 'immersiveengineering:ingot_steel', 'botania:terrasteel_ingot')
    event.replaceInput({mod: 'advgenerators'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.replaceInput({mod: 'advgenerators'}, 'minecraft:redstone', 'immersiveengineering:rs_engineering')
    event.replaceInput({mod: 'hostilenetworks'}, '#forge:glass_panes', 'occultism:spirit_attuned_gem')
    event.replaceInput({id: 'hostilenetworks:living_matter/framework'}, 'minecraft:smooth_stone', '#forge:storage_blocks/iesnium')

    
    event.recipes.immersiveengineeringCrusher('biggerreactors:graphite_dust', Item.of('immersiveengineering:graphite_electrode').ignoreNBT())

    event.recipes.createMechanicalCrafting('enderchests:ender_pouch', [
        'BBBBB',
        'BSESB',
        'BESEB',
        'BSESB',
        'BBBBB'
      ], {
        E: 'cyclic:eye_redstone',
        B: 'minecraft:blaze_rod',
        S: 'naturesaura:sky_ingot'
      })
        event.recipes.createMechanicalCrafting('hostilenetworks:loot_fabricator', [
            'BBBBB',
            'BSESB',
            'BESEB',
            'BSESB',
            'BBBBB'
          ], {
            E: '#forge:storage_blocks/iesnium',
            B: 'occultism:spirit_attuned_crystal',
            S: 'naturesaura:sky_ingot'
      })
      event.recipes.createMechanicalCrafting('4x biggerreactors:reactor_casing', [
        'BBBBBB',
        'BBEEBB',
        'BBEEBB',
        'BBEEBB',
        'BBEEBB',
        'BBBBBB'
      ], {
        E: '#forge:storage_blocks/uranium',
        B: 'biggerreactors:graphite_ingot'
      })
      event.recipes.createMechanicalCrafting('4x biggerreactors:turbine_casing', [
        'BBBBBB',
        'BBEEBB',
        'BBEEBB',
        'BBEEBB',
        'BBEEBB',
        'BBBBBB'
      ], {
        E: 'biggerreactors:cyanite_block',
        B: 'biggerreactors:graphite_ingot'
      })
      event.recipes.createMechanicalCrafting('4x biggerreactors:heat_exchanger_casing', [
        'BBBBBB',
        'BBEEBB',
        'BBEEBB',
        'BBEEBB',
        'BBEEBB',
        'BBBBBB'
      ], {
        E: 'biggerreactors:ludicrite_ingot',
        B: 'biggerreactors:graphite_ingot'
      })
})