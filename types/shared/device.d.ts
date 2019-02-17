interface BasicDeviceInfo {
	readonly lastSyncTime: Date;
	readonly modelId: string;
	readonly modelName: 'Ionic' | 'Versa';
	readonly screen: {
		readonly width: number;
		readonly height: number;
	};
	readonly type: 'WATCH' | 'TRACKER';
}
