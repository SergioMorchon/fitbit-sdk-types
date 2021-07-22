declare module 'weather' {
	export const WeatherCondition: {
		ClearNight: unknown;
		Cloudy: unknown;
		Cold: unknown;
		Flurries: unknown;
		Fog: unknown;
		FreezingRain: unknown;
		HazyMoonlight: unknown;
		HazySunshineDay: unknown;
		Hot: unknown;
		Ice: unknown;
		IntermittentCloudsDay: unknown;
		IntermittentCloudsNight: unknown;
		MostlyClearNight: unknown;
		MostlyCloudyDay: unknown;
		MostlyCloudyNight: unknown;
		MostlyCloudyWithFlurriesDay: unknown;
		MostlyCloudyWithFlurriesNight: unknown;
		MostlyCloudyWithShowersDay: unknown;
		MostlyCloudyWithShowersNight: unknown;
		MostlyCloudyWithSnowDay: unknown;
		MostlyCloudyWithSnowNight: unknown;
		MostlyCloudyWithThunderstormsDay: unknown;
		MostlyCloudyWithThunderstormsNight: unknown;
		MostlySunnyDay: unknown;
		Overcast: unknown;
		PartlyCloudyNight: unknown;
		PartlyCloudyWithShowersNight: unknown;
		PartlyCloudyWithThunderstormsNight: unknown;
		PartlySunnyDay: unknown;
		PartlySunnyWithFlurriesDay: unknown;
		PartlySunnyWithShowersDay: unknown;
		PartlySunnyWithThunderstormsDay: unknown;
		Rain: unknown;
		RainAndSnow: unknown;
		Showers: unknown;
		Sleet: unknown;
		Snow: unknown;
		SunnyDay: unknown;
		Thunderstorms: unknown;
		Windy: unknown;
	};

	export type WeatherCondition =
		typeof WeatherCondition[keyof typeof WeatherCondition];

	export interface CurrentWeather {
		readonly epochTime: number;
		readonly weatherCondition: WeatherCondition;
		readonly temperature: number;
	}

	export interface Location {
		readonly name: string;
		readonly timeOffsetUTC: number;
		readonly currentWeather: CurrentWeather;
	}

	export const TemperatureUnit: {
		Celsius: 'celsius';
		Fahrenheit: 'fahrenheit';
	};

	export type TemperatureUnit =
		typeof TemperatureUnit[keyof typeof TemperatureUnit];

	export interface WeatherData {
		readonly temperatureUnit: TemperatureUnit;
		readonly locations: Location[];
	}

	export interface WeatherProvider {
		getWeatherData(options?: {
			temperatureUnit?: TemperatureUnit;
		}): Promise<WeatherData>;
	}

	export const weather: WeatherProvider;

	export default weather;
}
