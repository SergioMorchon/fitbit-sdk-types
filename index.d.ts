type PermissionName =
	| 'access_activity'
	| 'access_user_profile'
	| 'access_heart_rate'
	| 'access_location'
	| 'access_internet'
	| 'run_background';

interface Permissions {
	granted(permissionName: PermissionName): boolean;
}

type BatchedReading<Reading> = { [P in keyof Reading]: Array<Reading[P]> };

interface StrictEventListener<EventMap> {
	addEventListener<EventName extends keyof EventMap>(
		type: EventName,
		listener: (event: EventMap[EventName]) => void,
	): void;
	removeEventListener<EventName extends keyof EventMap>(
		eventName: EventName,
	): void;
}

interface Sensor<Reading extends {}, EventMap = {}>
	extends StrictEventListener<
			EventMap & {
				activate: Event;
				error: SensorErrorEvent;
				reading: Event;
			}
		> {
	onactivate: (event: Event) => void;
	onerror: (event: SensorErrorEvent) => void;
	onreading: (event: Event) => void;
	start(): void;
	stop(): void;
	readonly activated: boolean;
	readonly readings: BatchedReading<Reading>;
}

declare class SensorBase {
	constructor(options?: SensorOptions);
}

interface SensorErrorEvent {
	readonly defaultPrevented: boolean;
	readonly error: Error;
	readonly target: EventTarget;
	readonly type: string;
}

interface SensorOptions {
	readonly frequency?: number;
	readonly batch?: number;
}

interface BatchedSensorOptions extends SensorOptions {
	readonly batch?: number;
}

declare module 'accelerometer' {
	interface AccelerometerReading {
		readonly timestamp: number | null;
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}

	interface Accelerometer
		extends Sensor<AccelerometerReading>,
			AccelerometerReading {}
	export class Accelerometer extends SensorBase {}
}

declare module 'appbit' {
	interface Appbit {
		appTimeoutEnabled: boolean;
		readonly applicationId: string;
		readonly buildId: string;
		onunload(this: Appbit, event: Event): void;
		readonly permissions: Permissions;
		exit(): void;
	}

	export const me: Appbit;
}

declare module 'barometer' {
	interface BarometerReading {
		readonly pressure: number | null;
		readonly timestamp: number | null;
	}
	interface Barometer extends Sensor<BarometerReading>, BarometerReading {}
	export class Barometer extends SensorBase {}
}

declare module 'body-presence' {
	interface BodyPresenceReading {
		readonly present: boolean;
	}
	interface BodyPresenceSensor extends Sensor<BodyPresenceReading> {}
	export class BodyPresenceSensor extends SensorBase {
		readonly present: boolean;
	}
}

declare module 'clock' {
	type Granularity = 'off' | 'seconds' | 'minutes' | 'hours';
	interface TickEvent extends Event {
		readonly date: Date;
	}
	interface Clock {
		granularity: Granularity;
		ontick: (event: TickEvent) => void;
	}

	const clock: Clock;
	export default clock;
}

declare module 'device' {
	interface Device {
		readonly firmwareVersion: string;
		readonly lastSyncTime: Date;
		readonly modelId: string;
		readonly modelName: string;
		readonly screen: {
			readonly width: number;
			readonly height: number;
		};
		readonly type: 'WATCH' | 'TRACKER';
	}

	export const me: Device;
}

declare module 'display' {
	interface EventMap {
		change: Event;
		patata: string;
	}
	interface Display extends StrictEventListener<EventMap> {
		autoOff: boolean;
		brightnessOverride: number | undefined;
		on: boolean;
		onchange: (event: Event) => void;
		poke(): void;
	}

	export const display: Display;
}

declare module 'document' {
	interface EventMap {
		activate: Event;
		animationend: AnimationEvent;
		animationiteration: AnimationEvent;
		animationstart: AnimationEvent;
		click: MouseEvent;
		collapse: Event;
		disable: Event;
		enable: Event;
		expand: Event;
		highlight: Event;
		keydown: KeyboardEvent;
		keypress: KeyboardEvent;
		keyup: KeyboardEvent;
		listbackward: ListScrollEvent;
		listforward: ListScrollEvent;
		load: LoadEvent;
		mousedown: MouseEvent;
		mousemove: MouseEvent;
		mouseout: MouseEvent;
		mouseover: MouseEvent;
		mouseup: MouseEvent;
		pagescroll: PageScrollEvent;
		reload: LoadEvent;
		select: Event;
		unhighlight: Event;
		unload: Event;
		unselect: Event;
	}
	interface ListScrollEvent extends Event {
		readonly first: number;
		readonly last: number;
		readonly middle: number;
	}
	interface LoadEvent extends Event {
		readonly phase: 1 | 2;
	}
	interface PageScrollEvent extends Event {
		readonly pageSize: number;
		readonly position: number;
		readonly viewSize: number;
	}
	interface EventHandler {
		(event: Event): boolean;
	}

	interface GlobalEvents extends StrictEventListener<EventMap> {
		onactivate: (event: Event) => void;
		onanimationend: (event: AnimationEvent) => void;
		onanimationiteration: (event: AnimationEvent) => void;
		onanimationstart: (event: AnimationEvent) => void;
		onclick: (event: MouseEvent) => void;
		oncollapse: (event: Event) => void;
		ondisable: (event: Event) => void;
		onenable: (event: Event) => void;
		onexpand: (event: Event) => void;
		onhighlight: (event: Event) => void;
		onkeydown: (event: KeyboardEvent) => void;
		onkeypress: (event: KeyboardEvent) => void;
		onkeyup: (event: KeyboardEvent) => void;
		onlistbackward: (event: ListScrollEvent) => void;
		onlistforward: (event: ListScrollEvent) => void;
		onload: (event: LoadEvent) => void;
		onmousedown: (event: MouseEvent) => void;
		onmousemove: (event: MouseEvent) => void;
		onmouseout: (event: MouseEvent) => void;
		onmouseover: (event: MouseEvent) => void;
		onmouseup: (event: MouseEvent) => void;
		onpagescroll: (event: PageScrollEvent) => void;
		onreload: (event: Event) => void;
		onselect: (event: Event) => void;
		onunhighlight: (event: Event) => void;
		onunload: (event: Event) => void;
		onunselect: (event: Event) => void;
	}

	interface DocumentModule extends GlobalEvents {
		readonly default: DocumentModule;
		readonly root: Element;
		getEventHandler(elementType: string): EventHandler | null;
		setEventHandler(elementType: string, handler: EventHandler): void;
	}

	interface Element extends GlobalEvents {
		[key: string]: any;
	}

	interface ElementSearch {
		getElementById(id: string): Element;
		getElementsByClassName(className: string): Element[];
		getElementsByTypeName(typeName: string): Element[];
	}

	const document: DocumentModule & ElementSearch;
	export default document;
}

declare module 'fs' {
	export function writeFileSync(
		filename: string,
		data: ArrayBuffer | ArrayBufferView,
	): void;
	export function writeFileSync(
		filename: string,
		data: string,
		encoding: 'ascii' | 'utf-8',
	): void;
	export function writeFileSync(
		filename: string,
		data: any,
		encoding: 'cbor' | 'json',
	): void;
	export function readFileSync(filename: string): any;
	export function readFileSync(
		filename: string,
		encoding: 'ascii' | 'utf-8',
	): string;
	export function readFileSync(
		filename: string,
		encoding: 'cbor' | 'json',
	): any;
	export function renameSync(oldFilename: string, newFilename: string): void;
	export function unlinkSync(filename: string): void;
	interface FileStats {
		readonly size: number;
		readonly mtime: any;
	}
	export function statSync(filename: string): FileStats;
	type FileDescriptor = number;
	export function writeSync(
		fd: FileDescriptor,
		buffer: ArrayBuffer,
		offset?: number,
		length?: number,
		position?: number,
	): void;
	export function readSync(
		fd: FileDescriptor,
		buffer: ArrayBuffer,
		offset?: number,
		length?: number,
		position?: number,
	): void;
	export function closeSync(fd: FileDescriptor): void;
	export function openSync(
		filename: string,
		flags: 'r' | 'r+' | 'w' | 'w+' | 'a' | 'a+',
	): FileDescriptor;
	export function listDirSync(path: string): Iterator<string>;
}

declare module 'file-transfer' {
	interface EventMap {
		newfile: Event;
	}
	type FileName = string;
	interface Inbox extends StrictEventListener<EventMap> {
		onnewfile: (event: Event) => void;
		nextFile(): FileName | undefined;
	}

	export const inbox: Inbox;
}

declare module 'geolocation' {
	type WatchId = number;
	interface Geolocation {
		clearWatch(watchId: WatchId): void;
		getCurrentPosition(
			successCallback: PositionCallback,
			errorCallback?: PositionErrorCallback,
			options?: PositionOptions,
		): void;
		watchPosition(
			successCallback: PositionCallback,
			errorCallback?: PositionErrorCallback,
			options?: PositionOptions,
		): WatchId;
	}
	interface PositionOptions {
		enableHighAccuracy?: boolean;
		maximumAge?: number;
		timeout?: number;
	}
	type PositionErrorCode =
		| 'PERMISSION_DENIED'
		| 'POSITION_UNAVAILABLE'
		| 'TIMEOUT';
	export const PositionErrorCode: {
		readonly PERMISSION_DENIED: 'PERMISSION_DENIED';
		readonly POSITION_UNAVAILABLE: 'POSITION_UNAVAILABLE';
		readonly TIMEOUT: 'TIMEOUT';
		readonly code: PositionErrorCode;
	};

	export const geolocation: Geolocation;
}

declare module 'gyroscope' {
	interface GyroscopeReading {
		readonly timestamp: number | null;
		readonly x: number | null;
		readonly y: number | null;
		readonly z: number | null;
	}
	interface Gyroscope extends Sensor<GyroscopeReading>, GyroscopeReading {}
	export class Gyroscope extends SensorBase {}
}

declare module 'haptics' {
	type VibrationPatternName =
		| 'bump'
		| 'nudge'
		| 'nudge-max'
		| 'ping'
		| 'confirmation'
		| 'confirmation-max';
	interface Vibration {
		start(pattern: VibrationPatternName): void;
	}
	export const vibration: Vibration;
}

declare module 'messaging' {
	type CloseCode = 'CONNECTION_LOST' | 'PEER_INITIATED' | 'SOCKET_ERROR';
	export class CloseEvent extends Event {
		readonly CONNECTION_LOST: 'CONNECTION_LOST';
		readonly PEER_INITIATED: 'PEER_INITIATED';
		readonly SOCKET_ERROR: 'SOCKET_ERROR';
		readonly code: CloseCode;
		readonly wasClean: boolean;
	}
	type ErrorCode = 'BUFFER_FULL';
	export class ErrorEvent extends Error {
		readonly BUFFER_FULL: 'BUFFER_FULL';
		readonly code: ErrorCode;
	}
	export class MessageEvent extends Event {
		readonly data: any;
	}
	type ReadyState = 'CLOSED' | 'OPEN';
	interface EventMap {
		bufferedamountdecrease: Event;
		close: CloseEvent;
		error: ErrorEvent;
		message: MessageEvent;
		open: Event;
	}
	interface MessageSocket extends StrictEventListener<EventMap> {}
	class MessageSocket {
		readonly CLOSED: 'CLOSED';
		readonly OPEN: 'OPEN';
		readonly MAX_MESSAGE_SIZE: number;
		readonly bufferedAmount: number;
		onbufferedamountdecrease: (event: Event) => void;
		onclose: (event: CloseEvent) => void;
		onerror: (event: ErrorEvent) => void;
		onmessage: (event: MessageEvent) => void;
		onopen: (event: Event) => void;
		readonly readyState: ReadyState;
		send(data: any): void;
	}
	export const peerSocket: MessageSocket;
}
