declare module 'peer' {
	type ReadyState = 'unknown' | 'started' | 'stopped';
	interface PeerApp
		extends EventTarget<{
			readystatechange: Event;
		}> {
		readonly readyState: ReadyState;
	}
	const app: PeerApp;
	type BatteryLevel = 'empty' | 'low' | 'medium' | 'high' | 'unknown';
	interface PeerDevice extends BasicDeviceInfo {
		readonly batteryLevel: BatteryLevel;
	}
	const device: PeerDevice;
}
