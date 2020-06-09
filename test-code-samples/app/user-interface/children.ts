import document from 'document';

const element = document.getElementById('some-element');

element.children.forEach((child) => {
	console.log(child.id);
});
