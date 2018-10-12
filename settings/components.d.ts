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
		align?: 'left' | 'center' | 'right';
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
		min: string;
		max: string;
		step?: string;
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

	function registerSettingsPage(component: () => JSX.Element): void;
}
