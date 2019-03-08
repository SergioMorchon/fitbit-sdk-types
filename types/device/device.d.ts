declare module 'device' {
	interface Device extends BasicDeviceInfo {
		readonly bodyColor: string;
		readonly firmwareVersion: string;
	}

	const me: Device;
}
