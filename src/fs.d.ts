declare module 'fs' {
	function writeFileSync(
		filename: string,
		data: ArrayBuffer | ArrayBufferView,
	): void;
	function writeFileSync(
		filename: string,
		data: string,
		encoding: 'ascii' | 'utf-8',
	): void;
	function writeFileSync(
		filename: string,
		data: any,
		encoding: 'cbor' | 'json',
	): void;
	function readFileSync(filename: string): any;
	function readFileSync(filename: string, encoding: 'ascii' | 'utf-8'): string;
	// tslint:disable-next-line unified-signatures
	function readFileSync(filename: string, encoding: 'cbor' | 'json'): any;
	function renameSync(oldFilename: string, newFilename: string): void;
	function unlinkSync(filename: string): void;
	interface FileStats {
		readonly size: number;
		readonly mtime: any;
	}
	function statSync(filename: string): FileStats;
	type FileDescriptor = number;
	function writeSync(
		fd: FileDescriptor,
		buffer: ArrayBuffer,
		offset?: number,
		length?: number,
		position?: number,
	): void;
	function readSync(
		fd: FileDescriptor,
		buffer: ArrayBuffer,
		offset?: number,
		length?: number,
		position?: number,
	): void;
	function closeSync(fd: FileDescriptor): void;
	function openSync(
		filename: string,
		flags: 'r' | 'r+' | 'w' | 'w+' | 'a' | 'a+',
	): FileDescriptor;
	interface DirectoryIteratorResult {
		readonly done: boolean;
		readonly value: string | undefined;
	}
	interface DirectoryIterator {
		next(): DirectoryIteratorResult;
	}
	function listDirSync(path: string): DirectoryIterator;
}
