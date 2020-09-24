declare module 'document' {
	/**
	 * The History interface allows manipulation of the document views history, that is the current view stack loaded in the app.
	 * @since 5.0
	 */
	export interface History {
		/** Integer number representing the number of currently loaded views. */
		readonly length: number;
		/**
		 * Make the view below the current one in the location history stack visible. Equivalent with history.go(-1).
		 * @throws {RangeError} Throws a RangeError if there's no other loaded view.
		 */
		back(): void;
		/**
		 * 	Make the view above the current one in the location history stack visible. Equivalent with history.go(1).
		 * @throws {RangeError} Throws a RangeError if there's no other view in forward history. one.
		 */
		forward(): void;

		/**
		 * Make a specific view from the location history visible, relative to the topmost visible view.
		 * @param delta The view position in the location history to which you want to move, relative to the current view. A negative value moves backwards, a positive value moves forwards. So, for example, history.go(2) will display the view that's forward two positions and history.go(-2) will display the view that's backward two positions.
		 * @throws {RangeError} Throws a RangeError if the position is not available in the history.
		 */
		go(delta?: number): void;
	}
	type EventHandler = (event: Event) => boolean;

	/**
	 * The Location interface allows manipulation of the application's views.
	 * @since 4.0
	 */
	export interface Location {
		/**
		 * The path of the currently loaded SVG file.
		 * NOTE: Always starts with a slash, e.g. `/file.view`
		 */
		readonly pathname: string;
		/**
		 * Load a new SVG file and place it on top of the view stack.
		 *
		 * NOTE: Assuming the current view is at a certain position within the location history stack, all the views on top and references to their elements will be freed. Accessing the UI elements after their references have been freed results in an error.
		 *
		 * NOTE: When loading a new view (as with this method), references to elements in the old view are kept, but document getters can only access elements within the current view. In order to access old elements, the currently visible view needs to be updated using `document.history` methods.
		 *
		 * NOTE: All document and element handlers and listeners will be cleared when the promise returned by `document.location.assign` is resolved. Examples of handlers and listeners that will be cleared might be found in `GlobalEvents`.
		 *
		 * @param path Path to the new SVG file to be loaded. This path has to be relative to the application root folder. Ex: `./resources/view1.view` `./resources/subdir/view2.view`
		 * @since 5.0
		 */
		assign(path: string): Promise<void>;

		/**
		 * Replace the currently loaded SVG file with a new one, asynchronously.
		 *
		 * Assuming the current view is at a certain position within the location history stack, all the views on top and references to their elements will be freed. Accessing the UI elements after their references have been freed results in an error.
		 *
		 * When loading a new view (as with this method), any references to elements in the old view will be invalidated, and `document` will refer to the newly loaded view.
		 *
		 * It is safe to call this method in `document.onunload` (for example, to implement a viewstack), but do be careful to allow yourself to exit your app still!
		 *
		 * NOTE: All document, element handlers, and listeners will be cleared when the promise returned by `document.location.replace` is resolved. Examples of handlers and listeners that will be cleared might be found in `GlobalEvents`.
		 *
		 * @param path Path to the new SVG file to be loaded. This path has to be relative to the application root folder. Ex: `./resources/view1.view` `./resources/subdir/view2.view`
		 * @since 5.0
		 */
		replace(path: string): Promise<void>;
	}
	interface DocumentModule extends GlobalEvents {
		readonly location: Location;
		readonly history: History;
		getEventHandler(elementType: string): EventHandler | null;
		setEventHandler(elementType: string, handler: EventHandler): void;
		replaceSync(path: string): void;
	}

	const document: DocumentModule & ElementSearch;
	export default document;
}
