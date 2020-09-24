import document from 'document';

let mybutton = document.getElementById('mybutton');

mybutton.onactivate = function (e) {
	console.log('click');
};
