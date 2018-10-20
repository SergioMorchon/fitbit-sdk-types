<Button label="Button" onClick={() => console.log('Clicked!')} />;
declare const props: any;
<Button
	list
	label="Clear Settings Storage"
	onClick={() => props.settingsStorage.clear()}
/>;
