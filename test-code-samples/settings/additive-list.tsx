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
		/>
	}
/>;
