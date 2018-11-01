interface Host {
	readonly app: {
		readonly name: string;
		readonly version: string;
	};
	readonly os: {
		readonly name: 'Android' | 'iOS' | 'Windows';
		readonly version: string;
	};
}
