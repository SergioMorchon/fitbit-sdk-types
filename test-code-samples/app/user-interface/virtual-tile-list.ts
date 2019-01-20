import document from 'document';

let VTList = document.getElementById('my-list') as VirtualTileList<{
	type: string;
	value: string;
	index: number;
}>;

let NUM_ELEMS = 100;

VTList.delegate = {
	getTileInfo: function(index) {
		return {
			type: 'my-pool',
			value: 'Menu item',
			index: index,
		};
	},
	configureTile: function(tile, info) {
		if (info.type == 'my-pool') {
			tile.getElementById('text').text = `${info.value} ${info.index}`;
			let touch = tile.getElementById('touch-me');
			touch.onclick = evt => {
				console.log(`touched: ${info.index}`);
			};
		}
	},
};

// VTList.length must be set AFTER VTList.delegate
VTList.length = NUM_ELEMS;
