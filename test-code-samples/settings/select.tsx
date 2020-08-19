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
	renderItem={(option) => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={(selection) => console.log(selection)}
/>;

// typed examples

interface SelectOption {
	name: string;
	value: string;
}

interface SelectSettingsType {
	selectProp: {
		values: SelectOption[];
		selected: number[];
	};
	compatibleProp: {
		values: SelectOption[];
		selected: number[];
		other?: string;
	};
	incompatibleProp: {
		values: { name: string; value: string; option: boolean }[];
		selected: number[];
		other: string;
	};
	compatibleProp2: {
		values: { name: string }[];
		selected: number[];
		other?: string;
	};
}

<Select<SelectOption, SelectSettingsType>
	label={`Multi-Selection`}
	multiple
	settingsKey="selectProp"
	options={[
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
	]}
	renderItem={(option) => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={(selection) => console.log(selection)}
/>;

<Select<SelectOption, SelectSettingsType>
	label={`Multi-Selection`}
	multiple
	settingsKey="compatibleProp"
	options={[
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
	]}
	renderItem={(option) => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={(selection) => console.log(selection)}
/>;

<Select<SelectOption, SelectSettingsType>
	label={`Multi-Selection`}
	multiple
	settingsKey="compatibleProp2"
	options={[
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
	]}
	renderItem={(option) => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={(selection) => console.log(selection)}
/>;

/*

// examples should not and do not work


<Select<SelectOption, SelectSettingsType>
	label={`Multi-Selection`}
	multiple
	settingsKey="incompatibleProp"
	options={[
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
	]}
	renderItem={(option) => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={(selection) => console.log(selection)}
/>;

<Select<SelectOption, SelectSettingsType>
	label={`Multi-Selection`}
	multiple
	settingsKey="anyKey"
	options={[
		{ name: 'One', value: '1' },
		{ name: 'Two', value: '2' },
	]}
	renderItem={(option) => (
		<TextImageRow
			label={option.name}
			sublabel="Sub-Label"
			icon="https://tinyurl.com/ybbmpxxq"
		/>
	)}
	onSelection={(selection) => console.log(selection)}
/>;

*/
