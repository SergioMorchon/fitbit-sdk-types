declare module 'device' {
	type IonicColors = undefined;
	type VersaColors = 'black' | 'rose-gold' | 'silver' | 'graphite';
	interface Device extends BasicDeviceInfo {
		readonly bodyColor: IonicColors | VersaColors;
		readonly firmwareVersion: string;
	}

	const me: Device;
}
