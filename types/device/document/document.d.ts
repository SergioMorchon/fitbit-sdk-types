declare module 'document' {
	type EventHandler = (event: Event) => boolean;
	interface DocumentModule extends GlobalEvents {
		getEventHandler(elementType: string): EventHandler | null;
		setEventHandler(elementType: string, handler: EventHandler): void;
	}

	const document: DocumentModule & ElementSearch;
	export default document;
}
