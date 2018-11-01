declare module 'appbit' {
	interface Appbit
		extends EventTarget<{
				unload: Event;
			}> {
		appTimeoutEnabled: boolean;
		readonly applicationId: string;
		readonly buildId: string;
		readonly permissions: Permissions;
		onunload: (event: Event) => void;
		exit(): void;
	}

	const me: Appbit;
	export { me };
}
