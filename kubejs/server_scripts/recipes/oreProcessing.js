onEvent('recipes', event => {

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