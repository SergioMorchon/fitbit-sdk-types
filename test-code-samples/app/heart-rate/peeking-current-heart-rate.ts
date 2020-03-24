import { HeartRateSensor } from 'heart-rate';

if (HeartRateSensor) {
	let hrm = new HeartRateSensor();
	hrm.onreading = function () {
		console.log('Current heart rate: ' + hrm.heartRate);
	};
	hrm.start();
}
