<ColorSelect
	centered={true}
	settingsKey="color"
	colors={[
		{ color: 'tomato', value: '1' },
		{ color: 'sandybrown', value: '2' },
		{ color: 'gold', value: '3' },
		{ color: 'aquamarine', value: '4' },
		{ color: 'deepskyblue', value: '5' },
		{ color: 'plum', value: '6' },
		{ color: 'tomato', value: '7' },
		{ color: 'sandybrown', value: '12' },
		{ color: 'gold', value: '13' },
		{ color: 'aquamarine', value: '14' },
		{ color: 'deepskyblue', value: '15' },
	]}
	onSelection={(value) => console.log(value)}
/>;
<ColorSelect
	settingsKey="color"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={(value) => {
		console.log(`value: ${value.align}, number: ${value.number}`);
	}}
/>;

// Work with typed settings
interface ColorValue { align: string, number: string}

interface ColorSelectSettingsType {
	validKey : ColorValue
	anyKey: any
	assignableKey : { align: string, number: string, option?:boolean }
	incompatibleKey : string
}

<ColorSelect<ColorValue, ColorSelectSettingsType>
	settingsKey="validKey"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={(value) => {
		console.log(`value: ${value.align}, number: ${value.number}`);
	}}
/>;

<ColorSelect<ColorValue, ColorSelectSettingsType>
	settingsKey="anyKey"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={(value) => {
		console.log(`value: ${value.align}, number: ${value.number}`);
	}}
/>;

<ColorSelect<ColorValue, ColorSelectSettingsType>
	settingsKey="assignableKey"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={(value) => {
		console.log(`value: ${value.align}, number: ${value.number}`);
	}}
/>;

/*

// examples should not and do not work

<ColorSelect<ColorValue, ColorSelectSettingsType>
	settingsKey="whatever"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={(value) => {
		console.log(`value: ${value.align}, number: ${value.number}`);
	}}
/>;

<ColorSelect<ColorValue, ColorSelectSettingsType>
	settingsKey="incompatibleKey"
	colors={[
		{ color: 'tomato', value: { align: 'left', number: '1' } },
		{ color: 'sandybrown', value: { align: 'right', number: '2' } },
	]}
	onSelection={(value) => {
		console.log(`value: ${value.align}, number: ${value.number}`);
	}}
/>;

*/