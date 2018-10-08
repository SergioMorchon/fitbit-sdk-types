import { me } from 'appbit';

console.log('Application ID: ' + me.applicationId);
console.log('Build ID: ' + me.buildId);

if (!me.permissions.granted('access_heart_rate')) {
	console.log("We're not allowed to read a users' heart rate!");
}
