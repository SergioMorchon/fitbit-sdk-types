declare module 'device' {
	interface Device {
		readonly bodyColor: string | undefined;
		readonly firmwareVersion: string;
		readonly lastSyncTime: Date;
		readonly modelId: string;
		readonly modelName: string;
		readonly screen: {
			readonly width: number;
			readonly height: number;
		};
		readonly type: string;
	}

	const me: Device;
}
