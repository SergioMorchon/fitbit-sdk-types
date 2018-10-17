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
	}
	interface SignificantLocationChangeEvent {
		readonly position: Position;
	}
	interface EventMap {
		unload: Event;
		significantlocationchange: SignificantLocationChangeEvent;
		wakeinterval: Event;
	}
	interface Companion extends EventTarget<EventMap> {
		readonly applicationId: string;
		readonly buildId: string;
		readonly host: Host;
		readonly permissions: Permissions;
		readonly launchReasons: LaunchReasons;
		onunload: (event: Event) => void;
		yield(): void;
		monitorSignificantLocationChanges: boolean;
		onsignificantlocationchange: (
			event: SignificantLocationChangeEvent,
		) => void;
		onwakeinterval: (event: Event) => void;
		wakeInterval: number | undefined;
	}
	export const me: Companion;
}
