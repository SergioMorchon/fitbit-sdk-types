import { Gyroscope } from 'gyroscope';

// 30 readings per second, 60 readings per batch
let gyro = new Gyroscope({ frequency: 30, batch: 60 });
gyro.onreading = () => {
	for (let index = 0; index < gyro.readings.timestamp.length; index++) {
		console.log(
			`Gyroscope Reading: \
        timestamp=$‌{gyro.readings.timestamp[index]}, \
        [$‌{gyro.readings.x[index]}, \
        $‌{gyro.readings.y[index]}, \
        $‌{gyro.readings.z[index]}]`,
		);
	}
};
gyro.start();
