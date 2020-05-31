interface Storage {
	readonly length: number;
	clear(): void;
	getItem(key: string): any | null;
	key(index: number): string | null;
	removeItem(key: string): void;
	setItem(key: string, value: any): void;
}
