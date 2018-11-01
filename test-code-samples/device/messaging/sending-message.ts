// Import the messaging module
import * as messaging from 'messaging';

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
	// Ready to send messages
	sendMessage();
};

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
	// Handle any errors
	console.log('Connection error: ' + err.code + ' - ' + err.message);
};

// Send a message to the peer
function sendMessage() {
	// Sample data
	var data = {
		title: 'My test data',
		isTest: true,
		records: [1, 2, 3, 4],
	};

	if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
		// Send the data to peer as a message
		messaging.peerSocket.send(data);
	}
}
