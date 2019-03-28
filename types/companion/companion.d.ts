declare module 'companion' {
	interface LaunchReasons {
		readonly locationChanged:
			| {
					position: Position;
			  }
			| undefined;
		readonly peerAppLaunched: boolean | undefined;
		readonly settingsChanged: boolean | undefined;
		readonly wokenUp: boolean | undefined;
		readonly fileTransfer: boolean | undefined;
	}
	interface SignificantLocationChangeEvent {
		readonly position: Position;
	}
	interface Companion
		extends EventTarget<{
			unload: Event;
			significantlocationchange: SignificantLocationChangeEvent;
			wakeinterval: Event;
		}> {
		readonly applicationId: string;
		readonly buildId: string;
		readonly host: Host;
		readonly permissions: Permissions;
		readonly launchReasons: LaunchReasons;
		onunload: (event: Event) => void;
		monitorSignificantLocationChanges: boolean;
		onsignificantlocationchange: (
			event: SignificantLocationChangeEvent,
		) => void;
		onwakeinterval: (event: Event) => void;
		wakeInterval: number | undefined;
		yield(): void;
	}
	const me: Companion;
}
