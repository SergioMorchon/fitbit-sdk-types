import * as messaging from 'messaging';

// Counter used to limit the amount of messages sent
var counter = 0;

function sendMoreData() {
	// Artificial limit of 100 messages
	if (counter < 100) {
		// Send data only while the buffer contains less than 128 bytes
		while (messaging.peerSocket.bufferedAmount < 128) {
			// Send the incremented counter value as the message
			messaging.peerSocket.send(counter++);
		}
	}
}

// Listen for the onbufferedamountdecrease event
messaging.peerSocket.onbufferedamountdecrease = function () {
	// Amount of buffered data has decreased, continue sending data
	sendMoreData();
};

// Start sending data
sendMoreData();
