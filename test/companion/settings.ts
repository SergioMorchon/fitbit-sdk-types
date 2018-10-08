import { settingsStorage } from 'settings';
settingsStorage.setItem('myKey', 'myValue');
console.log(settingsStorage.getItem('myKey'));
