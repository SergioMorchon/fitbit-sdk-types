declare module 'peer' {
	interface PeerAppEventMap {
		readystatechange: Event;
	}
	type ReadyState = 'unknown' | 'started' | 'stopped';
	interface PeerApp extends EventTarget<PeerAppEventMap> {
		onreadystatechange: (event: Event) => void;
		readonly readyState: ReadyState;
	}
	export const app: PeerApp;
	type BatteryLevel = 'empty' | 'low' | 'medium' | 'high' | 'unknown';
	interface PeerDevice {
		readonly batteryLevel: BatteryLevel;
		readonly lastSyncTime: Date;
		readonly modelId: string;
		readonly modelName: string;
		readonly screen: {
			readonly width: number;
			readonly height: number;
		};
		readonly type: 'WATCH' | 'TRACKER';
	}
	export const device: PeerDevice;
}
