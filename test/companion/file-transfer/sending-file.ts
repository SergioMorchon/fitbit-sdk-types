// Import Outbox from the file-transfer module
import { outbox } from 'file-transfer';

// Source image on the internet
let srcImage = 'https://placekitten.com/348/250';

// Destination filename
let destFilename = 'kitten.jpg';

// Fetch the image from the internet
fetch(srcImage)
	.then(function(response) {
		// We need an arrayBuffer of the file contents
		return response.arrayBuffer();
	})
	.then(function(data) {
		// Queue the file for transfer
		outbox
			.enqueue(destFilename, data)
			.then(function(ft) {
				// Queued successfully
				console.log("Transfer of '" + destFilename + "' successfully queued.");
			})
			.catch(function(error) {
				// Failed to queue
				throw new Error(
					"Failed to queue '" + destFilename + "'. Error: " + error,
				);
			});
	})
	.catch(function(error) {
		// Log the error
		console.log('Failure: ' + error);
	});
