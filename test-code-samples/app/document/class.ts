import { document } from 'document';

const element = document.getElementById('some-element');

if (element.class === 'show') {
	element.class = 'hide';
} else {
	element.class = 'show';
}
