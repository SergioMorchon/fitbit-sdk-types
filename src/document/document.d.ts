declare module 'document' {
	type EventHandler = (event: Event) => boolean;
	interface DocumentModule extends GlobalEvents {
		readonly default: DocumentModule;
		readonly root: Element;
		getEventHandler(elementType: string): EventHandler | null;
		setEventHandler(elementType: string, handler: EventHandler): void;
	}

	const document: DocumentModule & ElementSearch;
	export default document;
}
