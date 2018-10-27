declare module 'appbit' {
	interface Appbit {
		appTimeoutEnabled: boolean;
		readonly applicationId: string;
		readonly buildId: string;
		readonly permissions: Permissions;
		onunload(this: Appbit, event: Event): void;
		exit(): void;
	}

	export const me: Appbit;
}
