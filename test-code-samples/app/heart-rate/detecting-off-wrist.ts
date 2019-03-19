import { BodyPresenceSensor } from 'body-presence';
import { HeartRateSensor } from 'heart-rate';

if (HeartRateSensor && BodyPresenceSensor) {
	let hrm = new HeartRateSensor({ frequency: 1, batch: 60 });

	let body = new BodyPresenceSensor();
	body.onreading = () => {
		if (!body.present) {
			hrm.stop();
		} else {
			hrm.start();
		}
	};
	body.start();
}
