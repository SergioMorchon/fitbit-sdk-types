import document from 'document';

document.location.replace('another.view').then(() => {
	// another view loaded
	// setup new document handlers
});

document.location.assign('another.view').then(() => {
	// another view loaded
});

document.addEventListener('beforeunload', (evt) => {
	// before document unload
});

document.addEventListener('unload', (evt) => {
	// document unloaded
});
