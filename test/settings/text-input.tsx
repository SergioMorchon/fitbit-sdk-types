<TextInput label="example" settingsKey="text" />;
<TextInput
	label="Example"
	title="Text Input"
	settingsKey="textInput"
	disabled={!(props.settings.toggleTextInput === 'true')}
/>;
<Toggle label="Enable Text Input" settingsKey="toggleTextInput" />;
<TextInput
	title="Add List Item"
	label="Item Name"
	placeholder="Type something"
	action="Add Item"
	onAutocomplete={value => {
		const autoValues = [
			{ name: 'red', value: '1' },
			{ name: 'orange', value: '2' },
			{ name: 'yellow', value: '3' },
			{ name: 'green', value: '4' },
			{ name: 'blue', value: '5' },
			{ name: 'purple', value: '6' },
		];
		return autoValues.filter(option => option.name.indexOf(value) === 0);
	}}
/>;
<TextInput type="text" value="text value" />;
<TextInput type="number" value="1" />;
<TextInput type="password" value="password value" />;
<TextInput type="search" value="search value" />;
<TextInput type="email" value="email value" />;
<TextInput type="tel" value="tel value" />;
<TextInput type="url" value="url value" />;
