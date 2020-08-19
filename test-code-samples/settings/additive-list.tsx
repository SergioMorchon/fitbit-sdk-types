<AdditiveList settingsKey="additive" />;
<AdditiveList
	settingsKey="additive"
	addAction={
		<Select
			label="Add Item"
			options={[
				{ name: 'Label1' },
				{ name: 'Label2' },
				{ name: 'Label3' },
				{ name: 'Label4' },
				{ name: 'Label5' },
			]}
		/>
	}
/>;
type Option = {
	name: string;
	required?: boolean;
	value: {
		location: string;
		icon: string;
	};
};
<AdditiveList<Option>
	title="A list of TextImageRow"
	settingsKey="select-list"
	maxItems="5"
	renderItem={({ name, value }) => (
		<TextImageRow label={name} sublabel={value.location} icon={value.icon} />
	)}
	addAction={
		<Select<Option>
			label="Add Item"
			options={[
				{
					name: 'Label1',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label2',
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label3',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label4',
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label5',
					required: false,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
			]}
		/>
	}
/>;
<AdditiveList
	title="A list with Autocomplete"
	settingsKey="autocomplete-list"
	maxItems="5"
	addAction={
		<TextInput
			title="Add List Item"
			label="Item Name"
			placeholder="Type something"
			action="Add Item"
			onAutocomplete={(value) => {
				const autoValues = [
					{ name: 'red', value: '1' },
					{ name: 'orange', value: '2' },
					{ name: 'yellow', value: '3' },
					{ name: 'green', value: '4' },
					{ name: 'blue', value: '5' },
					{ name: 'purple', value: '6' },
				];
				return autoValues.filter((option) => option.name.indexOf(value) === 0);
			}}
		/>
	}
/>;
<AdditiveList
	title="A list of TextImageRow"
	settingsKey="select-list"
	maxItems="5"
	renderItem={({ name, value }) => (
		<TextImageRow label={name} sublabel={value.location} icon={value.icon} />
	)}
	addAction={
		<Select
			label="Add Item"
			options={[
				{
					name: 'Label1',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label2',
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label3',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label4',
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
				{
					name: 'Label5',
					required: false,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
			]}
		/>
	}
/>;

// typed settings examples
interface AdditiveOption {
	name: string;
	value: {
		location: string;
		icon: string;
	};
}
interface AdditiveListSettingsType {
	validKey: AdditiveOption[];
	assignableKey: { name: string }[];
	invalidKey: string;
}

<AdditiveList<AdditiveOption>
	title="A list of TextImageRow"
	settingsKey="select-list"
	maxItems="5"
	renderItem={({ name, value }) => (
		<TextImageRow label={name} sublabel={value.location} icon={value.icon} />
	)}
	addAction={
		<Select
			label="Add Item"
			options={[
				{
					name: 'Label1',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
			]}
		/>
	}
/>;

<AdditiveList<AdditiveOption, AdditiveListSettingsType>
	title="A list of TextImageRow"
	settingsKey="validKey"
	maxItems="5"
	renderItem={({ name, value }) => (
		<TextImageRow label={name} sublabel={value.location} icon={value.icon} />
	)}
	addAction={
		<Select
			label="Add Item"
			options={[
				{
					name: 'Label1',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
			]}
		/>
	}
/>;

<AdditiveList<AdditiveOption, AdditiveListSettingsType>
	title="A list of TextImageRow"
	settingsKey="assignableKey"
	maxItems="5"
	renderItem={({ name, value }) => (
		<TextImageRow label={name} sublabel={value.location} icon={value.icon} />
	)}
	addAction={
		<Select
			label="Add Item"
			options={[
				{
					name: 'Label1',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
			]}
		/>
	}
/>;

/*

// should not and do not work

<AdditiveList<AdditiveOption, AdditiveListSettingsType>
	title="A list of TextImageRow"
	settingsKey="invalidKey"
	maxItems="5"
	renderItem={({ name, value }) => (
		<TextImageRow label={name} sublabel={value.location} icon={value.icon} />
	)}
	addAction={
		<Select
			label="Add Item"
			options={[
				{
					name: 'Label1',
					required: true,
					value: {
						location: 'Sub-Label',
						icon: 'https://tinyurl.com/ybbmpxxq',
					},
				},
			]}
		/>
	}
/>;

*/
