// priority: 100

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = false

onEvent('recipes', event => {
    const { smelting, blasting } = event.recipes.minecraft

    var unifyMetal = function (name, hasOre, nuggetItem, ingotItem, blockItem, dustItem, gearItem, plateItem) {
        if (ingotItem !== '') event.replaceOutput('#forge:ingots/' + name, ingotItem)
        if (dustItem !== '') event.replaceOutput('#forge:dusts/' + name, dustItem)
        if (nuggetItem !== '') event.replaceOutput('#forge:nuggets/' + name, nuggetItem)
        if (blockItem !== '') event.replaceOutput('#forge:storage_blocks/' + name, blockItem)
        if (gearItem !== '') event.replaceOutput('#forge:gears/' + name, gearItem)
        if (plateItem !== '') event.replaceOutput('#forge:plates/' + name, plateItem)
        event.remove({output: '#forge:ingots/' + name, type: 'minecraft:smelting'})
        event.remove({output: '#forge:ingots/' + name, type: 'minecraft:blasting'})
        if (dustItem !== '' && ingotItem !== '') {
            smelting(ingotItem, '#forge:dusts/' + name).xp(0.7)
            blasting(ingotItem, '#forge:dusts/' + name).xp(0.7)
        }
        if (hasOre && ingotItem !== '') {
            smelting(ingotItem, '#forge:ores/' + name).xp(0.7)
            blasting(ingotItem, '#forge:ores/' + name).xp(0.7)
        }
    }
})