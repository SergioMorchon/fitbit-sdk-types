declare module 'document' {
	type EventHandler = (event: Event) => boolean;
	interface DocumentModule extends GlobalEvents {
		readonly location: {
			readonly pathname: string;
		};
		getEventHandler(elementType: string): EventHandler | null;
		setEventHandler(elementType: string, handler: EventHandler): void;
		replaceSync(path: string): void;
	}

	const document: DocumentModule & ElementSearch;
	export default document;
}
