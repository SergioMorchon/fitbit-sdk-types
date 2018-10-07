import { geolocation } from 'geolocation';

var watchID = geolocation.watchPosition(
	position => {
		console.log(
			'Latitude: ' + position.coords.latitude,
			'Longitude: ' + position.coords.longitude,
		);
	},
	error => {
		console.log('Error: ' + error.code, 'Message: ' + error.message);
	},
);

geolocation.clearWatch(watchID);
