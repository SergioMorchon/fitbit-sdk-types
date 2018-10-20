import document from 'document';

document.addEventListener('pagescroll', e => {
	console.log(e.position);
});
document.addEventListener('click', e => {
	console.log(e.screenX);
});
