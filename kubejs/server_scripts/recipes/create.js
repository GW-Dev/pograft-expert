// priority: 99
onEvent('recipes', event => {
    
    event.remove({id: 'create:emptying/milk_bucket'})
    event.remove({id: 'create:filling/milk_bucket'})
    event.remove({output: 'create:electron_tube'})
    event.remove({output: 'create:empty_blaze_burner'})
    event.remove({output: 'immersiveengineering:ingot_constantan'})
    event.remove({output: 'immersiveengineering:ingot_electrum'})
    event.remove({output: 'immersiveengineering:alloybrick'})
    event.remove({output: 'immersiveengineering:slab_alloybrick'})

    event.recipes.createMixing('immersiveengineering:ingot_electrum', [
        '#forge:ingots/gold',
        '#forge:ingots/silver'
      ]).superheated()

      event.recipes.createMixing('immersiveengineering:ingot_constantan', [
        '#forge:ingots/nickel',
        '#forge:ingots/copper'
      ]).superheated()

    event.shaped('create:electron_tube', [
        ' R ',
        ' D ',
        ' S '
    ], {
        R: 'create:polished_rose_quartz',
        D: 'minecraft:diamond',
        S: 'immersiveengineering:nugget_steel'
    }),
    event.shaped('create:electron_tube', [
        ' R ',
        ' P ',
        ' S '
    ], {
        R: 'create:polished_rose_quartz',
        P: 'create:precision_mechanism',
        S: 'immersiveengineering:nugget_steel'
    }),
    event.shaped('create:empty_blaze_burner', [
        'SS ',
        'II ',
        '   '
    ], {
        I: 'minecraft:iron_bars',
        S: 'immersiveengineering:plate_steel'
    })
    event.recipes.createMixing('create:chromatic_compound', [
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:polished_rose_quartz'
      ]).superheated()

})

onEvent('fluid.tags', event => {
    event.get('forge:milk').remove([
        'create:milk',
        'create:flowing_milk'
    ])
})