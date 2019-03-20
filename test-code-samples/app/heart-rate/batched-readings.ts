import { HeartRateSensor } from 'heart-rate';

if (HeartRateSensor) {
	// 1 reading per second, 60 readings per batch
	let hrm = new HeartRateSensor({ frequency: 1, batch: 60 });
	hrm.onreading = () => {
		for (let index = 0; index < hrm.readings.timestamp.length; index++) {
			console.log(
				`HeartRateSensor Reading: \
        timestamp=${hrm.readings.timestamp[index]}, \
        [${hrm.readings.heartRate[index]}]`,
			);
		}
	};
	hrm.start();
}
