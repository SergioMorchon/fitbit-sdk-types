type Component<Props> = (props: Props) => JSX.Element;

declare const Page: Component<{ children: JSX.Element }>;
declare const Section: Component<{
	children: JSX.Element;
	title: JSX.Element;
	description?: JSX.Element;
}>;
declare const Link: Component<{
	children: JSX.Element;
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
interface AutocompleteOption {
	name: string;
	[key: string]: any;
}
declare const TextInput: Component<{
	title?: string;
	label?: string;
	placeholder?: string;
	action?: string;
	type?: string;
	value?: string;
	disabled?: boolean;
	settingsKey?: string;
	onChange?: (newValue: string) => void;
	onAutocomplete?: (newValue: string) => AutocompleteOption[];
	renderItem?: (autocompleteOption: AutocompleteOption) => JSX.Element;
	renderAutocomplete?: (
		autoCompleteOption: AutocompleteOption,
		newValue: string,
	) => JSX.Element;
}>;
declare const ColorSelect: Component<{
	colors: Array<{
		color: string;
		value?: any;
	}>;
	centered?: boolean;
	settingsKey?: string;
	value?: string;
	onSelection?: (value: string) => void;
}>;
interface SelectOption {
	name: string;
	value?: any;
	[extraProperty: string]: any;
}
declare const Select: Component<{
	title?: string;
	selectViewTitle?: string;
	label?: string;
	settingsKey?: string;
	options: SelectOption[];
	multiple?: boolean;
	disabled?: boolean;
	renderItem?: (option: SelectOption) => JSX.Element;
	onSelection?: (selection: { selected: number[]; values: any[] }) => void;
}>;
declare const AdditiveList: Component<{
	title?: string;
	description?: string;
	settingsKey?: string;
	minItems?: number | string;
	maxItems?: number | string;
	renderItem?: (item: SelectOption) => JSX.Element;
	addAction?: JSX.Element;
	onListChange?: (elements: SelectOption[]) => void;
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
	encodeAsBase64?: boolean;
	disabled?: boolean;
	oAuthParams?: {
		redirect_uri: string;
		client_id: string;
		state: string;
		response_type: string;
		scope: string;
	};
	url?: string;
	showError?: true;
	onReturn?: (data: any) => void;
	onAccessToken?: (accessToken: string) => void;
}>;
declare const StravaLogin: Component<{
	title?: string;
	description?: string;
	settingsKey: string;
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
	onImagePicked?: (image: {
		imageUri: string;
		imageString: string;
		type: string;
		width: number;
		height: number;
	}) => void;
}>;

interface SettingsComponentProps {
	readonly settings: { [key: string]: string };
	readonly settingsStorage: LiveStorage;
}
type SettingsComponent = (props: SettingsComponentProps) => JSX.Element;

declare function registerSettingsPage(component: SettingsComponent): void;
declare const createComponent: any;
