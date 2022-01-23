// priority: 99
onEvent('recipes', event => {
    const recipes = [
        {
            input: { item: 'immersiveengineering:ore_lead' },
            output: 'immersiveengineering:dust_lead',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:deepslate_ore_lead' },
            output: 'immersiveengineering:dust_lead',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:raw_lead' },
            output: 'immersiveengineering:dust_lead',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:ingot_lead' },
            output: 'immersiveengineering:dust_lead',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
        },
        {
            input: { item: 'immersiveengineering:ore_aluminum' },
            output: 'immersiveengineering:dust_aluminum',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:deepslate_ore_aluminum' },
            output: 'immersiveengineering:dust_aluminum',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:raw_aluminum' },
            output: 'immersiveengineering:dust_aluminum',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:ingot_aluminum' },
            output: 'immersiveengineering:dust_aluminum',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
        },
        {
            input: { item: 'immersiveengineering:ore_nickel' },
            output: 'immersiveengineering:dust_nickel',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:deepslate_ore_nickel' },
            output: 'immersiveengineering:dust_nickel',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:raw_nickel' },
            output: 'immersiveengineering:dust_nickel',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:ingot_nickel' },
            output: 'immersiveengineering:dust_nickel',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
        },
        {
            input: { item: 'immersiveengineering:ore_uranium' },
            output: 'immersiveengineering:dust_uranium',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:deepslate_ore_uranium' },
            output: 'immersiveengineering:dust_uranium',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:raw_uranium' },
            output: 'immersiveengineering:dust_uranium',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'immersiveengineering:dust_uranium' },
            output: 'immersiveengineering:dust_uranium',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
        },
        {
            input: {item: 'create:zinc_ore' },
            output: 'create:crushed_zinc_ore',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: {item: 'create:deepslate_zinc_ore' },
            output: 'create:crushed_zinc_ore',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'create:raw_zinc' },
            output: 'create:crushed_zinc_ore',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'create:zinc_ingot' },
            output: 'create:crushed_zinc_ore',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
        },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: {
                    item: recipe.output,
                    count: recipe.count
                },
                crushing_time: recipe.time,
                ignore_crushing_multiplier: recipe.ignore_crushing_multiplier
            })
    });
})

