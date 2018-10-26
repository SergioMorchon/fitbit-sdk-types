import { settingsStorage } from 'settings';
settingsStorage.setItem('myKey', 'myValue');
console.log(settingsStorage.getItem('myKey'));

settingsStorage.onchange = function(evt) {
	console.log(JSON.parse(evt.newValue));
};
