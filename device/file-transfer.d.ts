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
