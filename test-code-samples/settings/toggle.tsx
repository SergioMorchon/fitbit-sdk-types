<Toggle settingsKey="toggle" label="example" />;
<Toggle settingsKey="toggle" />;
<Toggle
	settingsKey="toggle"
	label={`Toggle Switch: ${settings.toggle === 'true' ? 'on' : 'off'}`}
/>;
<Toggle settingsKey="toggle" label="Toggle Switch" />;

declare const settings: any;
{
	JSON.parse(settings.toggle || 'false') && (
		<Toggle settingsKey="hiddenToggle" />
	);
}

// Work with typed settings

interface ToggleSettingsType {
	stringKey: string;
	booleanKey: boolean;
	assignableKey: boolean | string;
}

<Toggle<ToggleSettingsType> settingsKey="booleanKey"></Toggle>;

<Toggle<ToggleSettingsType> settingsKey="assignableKey"></Toggle>;

/*

// examples should not work

<Toggle<ToggleSettingsType>
	settingsKey="any other key should report an error"
></Toggle>;

<Toggle<ToggleSettingsType>
	settingsKey="stringKey"
></Toggle>;

 */
