interface BasicDeviceInfo {
	readonly lastSyncTime: Date;
	readonly modelId: string;
	readonly modelName: string;
	readonly screen: {
		readonly width: number;
		readonly height: number;
	};
	readonly type: string;
}
