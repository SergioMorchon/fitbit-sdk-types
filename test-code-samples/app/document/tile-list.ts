import document from 'document';

let list = document.getElementById('my-list');
let items = list.getElementsByClassName('tile-list-item');

items.forEach((element, index) => {
	let touch = element.getElementById('touch-me');
	touch.onclick = (evt) => {
		console.log(`touched: ${index}`);
	};
});
