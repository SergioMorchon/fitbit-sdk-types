interface Coordinates {
	readonly accuracy: number;
	readonly altitude: number | null;
	readonly altitudeAccuracy: number | null;
	readonly heading: number | null;
	readonly latitude: number;
	readonly longitude: number;
	readonly speed: number | null;
}
interface Position {
	readonly coords: Coordinates;
	readonly timestamp: number;
}

declare module 'geolocation' {
	type WatchId = number;
	type PositionErrorCallback = (error: PositionError) => void;
	type PositionCallback = (position: Position) => void;
	interface Geolocation {
		clearWatch(watchId: WatchId): void;
		getCurrentPosition(
			successCallback: PositionCallback,
			errorCallback?: PositionErrorCallback,
			options?: PositionOptions,
		): void;
		watchPosition(
			successCallback: PositionCallback,
			errorCallback?: PositionErrorCallback,
			options?: PositionOptions,
		): WatchId;
	}
	interface PositionOptions {
		enableHighAccuracy?: boolean;
		maximumAge?: number;
		timeout?: number;
	}
	interface PositionError {
		readonly PERMISSION_DENIED: any;
		readonly POSITION_UNAVAILABLE: any;
		readonly TIMEOUT: any;
		readonly code:
			| PositionError['PERMISSION_DENIED']
			| PositionError['POSITION_UNAVAILABLE']
			| PositionError['TIMEOUT'];
		readonly message: string;
	}

	const geolocation: Geolocation;
}
