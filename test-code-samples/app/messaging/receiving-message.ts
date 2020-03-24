// Import the messaging module
import * as messaging from 'messaging';

// Listen for the onmessage event
messaging.peerSocket.onmessage = function (evt) {
	// Output the message to the console
	console.log(JSON.stringify(evt.data));
};
