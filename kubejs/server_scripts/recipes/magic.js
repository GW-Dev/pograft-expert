// priority: 99
onEvent('recipes', event => {

    event.remove({output: 'rootsclassic:mortar'})
    event.remove({output: 'rootsclassic:pestle'})
    event.remove({output: 'rootsclassic:altar'})
    event.remove({output: 'rootsclassic:imbuer'})
    event.remove({output: 'rootsclassic:brazier'})
    event.remove({id: 'hexerei:candle_color_red'})

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
    
})
