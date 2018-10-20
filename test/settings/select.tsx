<Select
	label={`Selection`}
	settingsKey="selection"
	options={[{ name: 'One' }, { name: 'Two' }, { name: 'Three' }]}
/>;
<Select
	label={`Multi-Selection`}
	multiple
	settingsKey="multiselection"
	options={[
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
		{ name: 'Three', value: '3' },
		{ name: 'Four', value: '4' },
		{ name: 'Five', value: '5' },
		{ name: 'Six', value: '6' },
		{ name: 'Seven', value: '7' },
		{ name: 'Eight', value: '8' },
		{ name: 'Nine', value: '9' },
		{ name: 'Ten', value: '10' },
		{ name: 'Eleven', value: '11' },
		{ name: 'Twelve', value: '12' },
		{ name: 'Thirteen', value: '13' },
		{ name: 'Fourteen', value: '14' },
		{ name: 'Fifteen', value: '15' },
	]}
	renderItem={option => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={selection => console.log(selection)}
/>;
