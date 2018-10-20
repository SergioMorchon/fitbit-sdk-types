import document from 'document';

let tileList = document.getElementById('tile-list');
let tileItems = tileList.getElementsByClassName('tile-item');

let tileState = {};

tileItems.forEach((element, index) => {
	tileState[index] = element.firstChild.value; // initial state
	element.firstChild.onclick = evt => {
		tileState[index] = !tileState[index];
		console.log(
			`item ${index} :: ${tileState[index] ? 'checked' : 'unchecked'}`,
		);
	};
});
