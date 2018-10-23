type Component<Props> = (props: Props) => JSX.Element;

declare const Page: Component<{ children: JSX.Element }>;
declare const Section: Component<{
	title: JSX.Element;
	description?: JSX.Element;
}>;
declare const Link: Component<{
	source: string;
}>;
declare const Text: Component<{
	bold?: boolean;
	italic?: boolean;
	align?: 'left' | 'center' | 'right';
	children: JSX.Element;
}>;
declare const TextImageRow: Component<{
	label?: string;
	sublabel?: string;
	icon?: string;
}>;
declare const Button: Component<{
	label?: string;
	list?: boolean;
	onClick: (event: Event) => void;
}>;
declare const Toggle: Component<{
	settingsKey: string;
	label?: string;
	onChange?: (newValue: boolean) => void;
}>;
declare const Slider: Component<{
	label?: string;
	settingsKey?: string;
	min: number | string;
	max: number | string;
	step?: number | string;
	onChange?: (newValue: number) => void;
}>;
type AutocompleteOption = { name: string; [key: string]: any };
declare const TextInput: Component<{
	title?: string;
	label?: string;
	placeholder?: string;
	action?: string;
	type?: string;
	disabled?: boolean;
	settingsKey?: string;
	onChange?: (newValue: string) => void;
	onAutocomplete?: (newValue: string) => Array<AutocompleteOption>;
	renderItem?: (autocompleteOption: AutocompleteOption) => JSX.Element;
	renderAutocomplete?: (
		autoCompleteOption: AutocompleteOption,
		newValue: string,
	) => JSX.Element;
}>;
declare const ColorSelect: Component<{
	settingsKey: string;
	colors: Array<{
		color: string;
		value?: any;
	}>;
	centered?: boolean;
	onSelection?: (value: string) => void;
}>;
type SelectOption = {
	name: string;
	value?: any;
	[extraProperty: string]: any;
};
declare const Select: Component<{
	title?: string;
	selectViewTitle?: string;
	label?: string;
	settingsKey?: string;
	options: Array<SelectOption>;
	multiple?: boolean;
	disabled?: boolean;
	renderItem?: (option: SelectOption) => JSX.Element;
	onSelection?: (
		selection: { selected: Array<number>; values: Array<any> },
	) => void;
}>;
declare const AdditiveList: Component<{
	title?: string;
	description?: string;
	settingsKey?: string;
	minItems?: number | string;
	maxItems?: number | string;
	renderItem?: (item: SelectOption) => JSX.Element;
	addAction?: JSX.Element;
	onListChange?: (elements: Array<SelectOption>) => void;
}>;
declare const Oauth: Component<{
	title?: string;
	label?: string;
	status?: string;
	description?: string;
	settingsKey?: string;
	authorizeUrl?: string;
	requestTokenUrl?: string;
	clientId?: string;
	clientSecret?: string;
	scope?: string;
	pkce?: boolean;
	onAccessToken?: (accessToken: string) => void;
}>;
declare const StravaLogin: Component<{
	title?: string;
	description?: string;
	settingsKey?: string;
	clientId?: string;
	clientSecret?: string;
	onAccessToken?: (accessToken: string, userInfo: any) => void;
}>;
declare const ImagePicker: Component<{
	title?: string;
	description?: string;
	label?: string;
	sublabel?: string;
	pickerTitle?: string;
	pickerImageTitle?: string;
	pickerLabel?: string;
	settingsKey?: string;
	imageWidth?: number | string;
	imageHeight?: number | string;
	showIcon?: boolean;
	disabled?: boolean;
	onImagePicked?: (
		image: {
			imageUri: string;
			imageString: string;
			type: string;
			width: number;
			height: number;
		},
	) => void;
}>;

declare function registerSettingsPage(element: JSX.Element): void;
declare const createComponent: Function;
