<Button label="Button" onClick={() => console.log('Clicked!')} />;
<Button
	onClick={() => {}}
	label={<Text bold={true}>Embedded Text in Label</Text>}
/>;
declare const props: any;
<Button
	list
	label="Clear Settings Storage"
	onClick={() => props.settingsStorage.clear()}
/>;
