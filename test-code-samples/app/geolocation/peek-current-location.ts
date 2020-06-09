import { geolocation } from 'geolocation';

geolocation.getCurrentPosition(
	(position) => {
		console.log(
			'Latitude: ' + position.coords.latitude,
			'Longitude: ' + position.coords.longitude,
		);
	},
	(error) => {
		console.log('Error: ' + error.code, 'Message: ' + error.message);
	},
);
