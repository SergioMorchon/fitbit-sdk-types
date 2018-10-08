import * as messaging from 'messaging';

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
	// Handle any errors
	console.log('Connection error: ' + err.code + ' - ' + err.message);
};
