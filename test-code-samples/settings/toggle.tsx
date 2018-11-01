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
