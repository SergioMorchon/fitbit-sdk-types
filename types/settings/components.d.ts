declare const Fragment: (props: { children: JSX.Element }) => JSX.Element;
declare const Page: (props: { children: JSX.Element }) => JSX.Element;
declare const Section: (props: {
	children: JSX.Element;
	title: JSX.Element;
	description?: JSX.Element;
}) => JSX.Element;
declare const Link: (props: {
	children: JSX.Element;
	source: string;
}) => JSX.Element;
declare const Text: (props: {
	bold?: boolean;
	italic?: boolean;
	align?: 'left' | 'center' | 'right';
	children: JSX.Element;
}) => JSX.Element;
declare const TextImageRow: (props: {
	label?: string | JSX.Element;
	sublabel?: string | JSX.Element;
	icon?: string;
}) => JSX.Element;
declare const Button: (props: {
	label?: string;
	list?: boolean;
	onClick: (event: Event) => void;
}) => JSX.Element;
declare const Toggle: (props: {
	settingsKey: string;
	label?: string;
	onChange?: (newValue: boolean) => void;
}) => JSX.Element;
declare const Slider: (props: {
	label?: string;
	settingsKey?: string;
	min: number | string;
	max: number | string;
	step?: number | string;
	onChange?: (newValue: number) => void;
}) => JSX.Element;
declare const TextInput: <Option extends { name: string }>(props: {
	title?: string;
	label?: string;
	placeholder?: string;
	action?: string;
	type?: string;
	value?: string;
	disabled?: boolean;
	settingsKey?: string;
	onChange?: (newValue: string) => void;
	onAutocomplete?: (newValue: string) => ReadonlyArray<Option>;
	renderItem?: (autocompleteOption: Option) => JSX.Element;
	renderAutocomplete?: (
		autoCompleteOption: Option,
		newValue: string,
	) => JSX.Element;
}) => JSX.Element;
declare const ColorSelect: <Value = string>(props: {
	colors: ReadonlyArray<{ color: string; value?: Value }>;
	centered?: boolean;
	settingsKey?: string;
	value?: Value;
	onSelection?: (value: Value) => void;
}) => JSX.Element;
declare const Select: <Option extends { name: string }>(props: {
	title?: string;
	selectViewTitle?: string;
	label?: string;
	settingsKey?: string;
	options: ReadonlyArray<Option>;
	multiple?: boolean;
	disabled?: boolean;
	renderItem?: (option: Option) => JSX.Element;
	onSelection?: (selection: {
		selected: ReadonlyArray<number>;
		values: ReadonlyArray<Option>;
	}) => void;
}) => JSX.Element;
declare const AdditiveList: <Option extends { name: string }>(props: {
	title?: string;
	description?: string;
	settingsKey?: string;
	minItems?: number | string;
	maxItems?: number | string;
	renderItem?: (item: Option) => JSX.Element;
	addAction?: JSX.Element;
	onListChange?: (elements: ReadonlyArray<Option>) => void;
}) => JSX.Element;
declare const Oauth: (props: {
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
		redirect_uri?: string;
		client_id?: string;
		state?: string;
		response_type?: string;
		scope?: string;
	};
	url?: string;
	showError?: true;
	onReturn?: (data: any) => void;
	onAccessToken?: (accessToken: string) => void;
}) => JSX.Element;
declare const StravaLogin: (props: {
	title?: string;
	description?: string;
	settingsKey: string;
	clientId?: string;
	clientSecret?: string;
	onAccessToken?: (accessToken: string, userInfo: any) => void;
}) => JSX.Element;
declare const ImagePicker: (props: {
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
}) => JSX.Element;

interface SettingsComponentProps {
	readonly settings: { [key: string]: string | undefined };
	readonly settingsStorage: LiveStorage;
}
type SettingsComponent = (props: SettingsComponentProps) => JSX.Element;

declare function registerSettingsPage(component: SettingsComponent): void;
declare const createComponent: any;
