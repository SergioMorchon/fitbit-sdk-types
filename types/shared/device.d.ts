declare module 'device' {
	type IonicColors = undefined;
	type VersaColors = 'black' | 'rose-gold' | 'silver' | 'graphite';
	interface Device {
		readonly bodyColor: IonicColors | VersaColors;
		readonly firmwareVersion: string;
		readonly lastSyncTime: Date;
		readonly modelId: string;
		readonly modelName: 'Ionic' | 'Versa';
		readonly screen: {
			readonly width: number;
			readonly height: number;
		};
		readonly type: 'WATCH' | 'TRACKER';
	}

	const me: Device;
}
