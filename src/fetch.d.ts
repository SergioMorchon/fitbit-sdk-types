interface HeaderMap {
	[key: string]: string;
}
declare class Headers {
	constructor(headers: HeaderMap);
	append(name: string, value: string): void;
	delete(name: string): void;
	get(name: string): string | null;
	has(name: string): boolean;
	set(name: string, value: string): void;
}
interface RequestInit {
	body?: string;
	headers?: Headers | HeaderMap;
	method?: string;
}
interface Body {
	arrayBuffer(): Promise<ArrayBuffer>;
	json(): Promise<any>;
	text(): Promise<string>;
}
interface Request extends Body {}
declare class Request {
	readonly headers: Headers;
	readonly method: string;
	readonly url: string;
}
interface Response extends Body {}
declare class Response {
	readonly body: null;
	readonly headers: Headers;
	readonly ok: boolean;
	readonly status: number;
	readonly statusText: string;
	readonly url: string;
}

declare function fetch(
	input: string | Request,
	init?: RequestInit,
): Promise<Response>;
