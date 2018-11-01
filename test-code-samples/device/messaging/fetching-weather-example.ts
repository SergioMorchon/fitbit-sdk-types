// Import the messaging module
import * as messaging from 'messaging';

// Request weather data from the companion
function fetchWeather() {
	if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
		// Send a command to the companion
		messaging.peerSocket.send({
			command: 'weather',
		});
	}
}

// Display the weather data received from the companion
function processWeatherData(data: any) {
	console.log('The temperature is: ' + data.temperature);
}

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
	// Fetch weather when the connection opens
	fetchWeather();
};

// Listen for messages from the companion
messaging.peerSocket.onmessage = function(evt) {
	if (evt.data) {
		processWeatherData(evt.data);
	}
};

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
	// Handle any errors
	console.log('Connection error: ' + err.code + ' - ' + err.message);
};

// Fetch the weather every 30 minutes
setInterval(fetchWeather, 30 * 1000 * 60);
