declare module 'image' {
	type SourceMimeType = string;
	type Color = string;
	interface TxiExportOptions {
		readonly background: string | undefined;
	}
	interface JpegExportOptions {
		readonly background: string | undefined;
		readonly quality: number | undefined;
	}
	interface Image {
		readonly height: number;
		readonly width: number;
		export(
			format: 'image/vnd.fitbit.txi',
			options?: TxiExportOptions,
		): Promise<ArrayBuffer>;
		export(
			format: 'image/jpeg',
			options?: JpegExportOptions,
		): Promise<ArrayBuffer>;
	}
	const Image: {
		from(imageUri: string): Promise<Image>;
	};
}
