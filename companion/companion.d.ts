/// <reference path="../shared/permissions.d.ts" />

declare module 'companion' {
	interface Companion {
		readonly applicationId: string;
		readonly buildId: string;
		readonly host: Host;
		readonly permissions: Permissions;
	}
	export const me: Companion;
}
