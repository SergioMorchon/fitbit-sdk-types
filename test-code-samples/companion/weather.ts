import { me as companion } from 'companion';
import { weather, TemperatureUnit } from 'weather';

if (companion.permissions.granted('access_location')) {
	weather
		.getWeatherData({ temperatureUnit: TemperatureUnit.Celsius })
		.then((data) => {
			if (data.locations.length > 0) {
				const temp = Math.floor(data.locations[0].currentWeather.temperature);
				const cond = data.locations[0].currentWeather.weatherCondition;
				const loc = data.locations[0].name;
				const unit = data.temperatureUnit;
				console.log(`It's ${temp}° ${unit} and ${cond} in ${loc}`);
			}
		})
		.catch((ex) => {
			console.error(ex);
		});
}
