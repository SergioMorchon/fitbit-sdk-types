declare function btoa(stringToEncode: string): string;
declare function atob(encodedData: string): string;

interface URLSearchParams {
	/**
	 * Appends a specified key/value pair as a new search parameter.
	 */
	append(name: string, value: string): void;
	/**
	 * Deletes the given search parameter, and its associated value, from the list of all search parameters.
	 */
	delete(name: string): void;
	/**
	 * Returns the first value associated to the given search parameter.
	 */
	get(name: string): string | null;
	/**
	 * Returns all the values association with a given search parameter.
	 */
	getAll(name: string): string[];
	/**
	 * Returns a Boolean indicating if such a search parameter exists.
	 */
	has(name: string): boolean;
	/**
	 * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
	 */
	set(name: string, value: string): void;
	sort(): void;
	/**
	 * Returns a string containing a query string suitable for use in a URL. Does not include the question mark.
	 */
	toString(): string;
	forEach(
		callbackfn: (value: string, key: string, parent: URLSearchParams) => void,
		thisArg?: any,
	): void;
}

declare var URLSearchParams: {
	prototype: URLSearchParams;
	new (
		init?: string[][] | Record<string, string> | string | URLSearchParams,
	): URLSearchParams;
	toString(): string;
};

interface URLSearchParams {
	/**
	 * Returns an array of key, value pairs for every entry in the search params
	 */
	entries(): IterableIterator<[string, string]>;
	/**
	 * Returns a list of keys in the search params
	 */
	keys(): IterableIterator<string>;
	/**
	 * Returns a list of values in the search params
	 */
	values(): IterableIterator<string>;
	/**
	 * iterate over key/value pairs
	 */
	[Symbol.iterator](): IterableIterator<[string, string]>;
}
