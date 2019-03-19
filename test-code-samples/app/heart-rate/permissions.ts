import { me } from 'appbit';
import { HeartRateSensor } from 'heart-rate';

if (me.permissions.granted('access_heart_rate') && HeartRateSensor) {
	let hrm = new HeartRateSensor();
	hrm.start();
}
