import { gettext } from 'i18n';

function mySettings(props) {
	return (
		<Page>
			<Text align="center">{gettext('Active Minutes')}</Text>
		</Page>
	);
}

registerSettingsPage(mySettings);
