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
	interface DirectoryIteratorResult {
		readonly done: boolean;
		readonly value: string | undefined;
	}
	interface DirectoryIterator {
		next(): DirectoryIteratorResult;
	}
	export function listDirSync(path: string): DirectoryIterator;
}
