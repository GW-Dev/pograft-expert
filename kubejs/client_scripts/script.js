// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.add.items', event => {
	event.add(Item.of('create:chromatic_compound'))
	event.add(Item.of('create:refined_radiance'))
	event.add(Item.of('create:refined_radiance_casing'))
	event.add(Item.of('create:shadow_steel'))
	event.add(Item.of('create:shadow_steel_casing'))
  })

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('immersiveengineering:cloche'),
	event.hide('immersiveengineering:furnace_heater')
	event.hide('immersiveengineering:alloybrick')
	event.hide('cyclic:generator_food')
    event.hide('cyclic:computer_shape')
    event.hide('cyclic:battery')
    event.hide('cyclic:placer')
    event.hide('cyclic:breaker')
    event.hide('cyclic:forester')
    event.hide('cyclic:miner')
    event.hide('cyclic:structure')
    event.hide('cyclic:harvester')
    event.hide('cyclic:collector')
    event.hide('cyclic:collector_fluid')
    event.hide('cyclic:placer_fluid')
    event.hide('cyclic:user')
    event.hide('cyclic:conveyor')
    event.hide('cyclic:fan')
    event.hide('cyclic:uncrafter')
    event.hide('cyclic:wireless_transmitter')
    event.hide('cyclic:wireless_receiver')
    event.hide('cyclic:teleport')
    event.hide('cyclic:filter_data')
    event.hide('cyclic:shape_data')
    event.hide('cyclic:settings_data')
    event.hide('cyclic:location_data')
    event.hide('cyclic:crusher')
    event.hide('cyclic:fan_slab')
    event.hide('cyclic:rotator')
    event.hide('cyclic:wireless_item')
    event.hide('cyclic:wireless_fluid')
    event.hide( 'cyclic:wireless_energy')
    event.hide('cyclic:energy_pipe')
    event.hide('cyclic:item_pipe')
    event.hide('cyclic:fluid_pipe')
    event.hide('quark:pipe')
})