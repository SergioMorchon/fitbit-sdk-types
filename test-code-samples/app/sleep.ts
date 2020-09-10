import sleep from 'sleep';
import { me as appbit } from 'appbit';

if (sleep && appbit.permissions.granted('access_sleep')) {
	sleep.addEventListener('change', () => {
		console.log(`User sleep state is: ${sleep.state}`);
	});
} else {
	console.log(
		'Sleep API not supported on this device, or permission not granted',
	);
}
