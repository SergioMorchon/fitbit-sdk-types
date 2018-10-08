import * as messaging from 'messaging';

if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
	// Send a message
}
if (messaging.peerSocket.readyState === messaging.peerSocket.CLOSED) {
	// Display error message
}
