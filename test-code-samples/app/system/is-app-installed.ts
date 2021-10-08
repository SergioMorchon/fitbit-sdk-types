import { isAppInstalled } from 'system';

if (isAppInstalled('12345678-1234-5678-1234-567812345678')) {
	console.log('App is installed!');
} else {
	console.log('App is NOT installed!');
}
