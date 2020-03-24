import document from 'document';

let spinner = document.getElementById('spinner');

// Start the spinner
spinner.state = 'enabled';

setTimeout(function () {
	// Stop the spinner
	spinner.state = 'disabled';
}, 4000);
