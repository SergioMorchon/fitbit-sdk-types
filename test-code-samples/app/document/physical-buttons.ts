import { document } from 'document';

document.onkeypress = function (e) {
	switch (e.key) {
		case 'back':
			console.log('back');
			break;
		case 'down':
			console.log('down');
			break;
		case 'up':
			console.log('up');
	}
	e.preventDefault();
};
