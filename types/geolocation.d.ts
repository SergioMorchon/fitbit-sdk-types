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
	type PositionErrorCode =
		| 'PERMISSION_DENIED'
		| 'POSITION_UNAVAILABLE'
		| 'TIMEOUT';
	const PositionErrorCode: {
		readonly PERMISSION_DENIED: 'PERMISSION_DENIED';
		readonly POSITION_UNAVAILABLE: 'POSITION_UNAVAILABLE';
		readonly TIMEOUT: 'TIMEOUT';
		readonly code: PositionErrorCode;
	};
	interface PositionError {
		readonly PERMISSION_DENIED: typeof PositionErrorCode.PERMISSION_DENIED;
		readonly POSITION_UNAVAILABLE: typeof PositionErrorCode.POSITION_UNAVAILABLE;
		readonly TIMEOUT: typeof PositionErrorCode.TIMEOUT;
		readonly code: PositionErrorCode;
		readonly message: string;
	}

	const geolocation: Geolocation;
}
