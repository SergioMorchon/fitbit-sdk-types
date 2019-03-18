declare module 'user-settings' {
	interface LocaleSettings {
		readonly language: string;
	}
	const locale: LocaleSettings;
}
