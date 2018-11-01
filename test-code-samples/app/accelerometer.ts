import { Accelerometer } from 'accelerometer';

// sampling at 1Hz (once per second)
let accel = new Accelerometer({ frequency: 1 });
accel.onreading = function() {
	console.log(
		'ts:',
		accel.timestamp,
		'x:',
		accel.x,
		'y:',
		accel.y,
		'z:',
		accel.z,
	);
};
accel.start();

// 30 readings per second, 60 readings per batch
// the callback will be called once every two seconds
let acc = new Accelerometer({ frequency: 30, batch: 60 });
acc.onreading = () => {
	for (let index = 0; index < acc.readings.timestamp.length; index++) {
		console.log(
			`Accelerometer Reading: \
        timestamp=${acc.readings.timestamp[index]}, \
        [${acc.readings.x[index]}, \
        ${acc.readings.y[index]}, \
        ${acc.readings.z[index]}]`,
		);
	}
};

acc.stop();
