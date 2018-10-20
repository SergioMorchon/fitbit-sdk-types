import { Component, ReactNode, SyntheticEvent } from 'react';

declare global {
	function Page(): Component;
	function Section(): Component<{
		title: ReactNode;
		description?: ReactNode;
	}>;
	function Link(): Component<{
		source: string;
	}>;
	function Text(): Component<{
		bold?: boolean;
		italic?: boolean;
		align?: 'left' | 'center' | 'right' | string;
	}>;
	function TextImageRow(): Component<{
		label: string;
		sublabel?: string;
		icon?: string;
	}>;
	function Button(): Component<{
		label: string;
		list?: boolean;
		onClick: (event: SyntheticEvent) => void;
	}>;
	function Toggle(): Component<{
		settingsKey: string;
		label?: string;
		onChange?: (newValue: boolean) => void;
	}>;
	function Slider(): Component<{
		label: string;
		settingsKey?: string;
		min: number | string;
		max: number | string;
		step?: number | string;
		onChange?: (newValue: number) => void;
	}>;
	type AutocompleteOption = { name: string; [key: string]: any };
	function TextInput(): Component<{
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
	function ColorSelect(): Component<{
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
	function Select(): Component<{
		title?: string;
		selectViewTitle?: string;
		label: string;
		settingsKey?: string;
		options: Array<SelectOption>;
		multiple?: boolean;
		disabled?: boolean;
		renderItem?: (option: SelectOption) => JSX.Element;
		onSelection?: (
			selection: { selected: Array<number>; values: Array<any> },
		) => void;
	}>;
	function AdditiveList(): Component<{
		title?: string;
		description?: string;
		settingsKey?: string;
		minItems?: number | string;
		maxItems?: number | string;
		renderItem?: (item: SelectOption) => JSX.Element;
		addAction?: JSX.Element;
		onListChange?: (elements: Array<SelectOption>) => void;
	}>;
	function Oauth(): Component<{
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
	function StravaLogin(): Component<{
		title?: string;
		description?: string;
		settingsKey?: string;
		clientId?: string;
		clientSecret?: string;
		onAccessToken?: (accessToken: string, userInfo: any) => void;
	}>;
	function ImagePicker(): Component<{
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

	function registerSettingsPage(component: () => JSX.Element): void;
}
