<ColorSelect
	settingsKey="color"
	colors={[
		{ color: 'tomato' },
		{ color: 'sandybrown' },
		{ color: 'gold' },
		{ color: 'aquamarine' },
		{ color: 'deepskyblue' },
		{ color: 'plum' },
	]}
/>;
<ColorSelect
	settingsKey="color"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
/>;
<ColorSelect
	value={props.settings.color}
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={value => props.settingsStorage.setItem('color', value)}
/>;
