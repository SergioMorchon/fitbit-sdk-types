import { Gyroscope } from 'gyroscope';

if (Gyroscope) {
	// 30 readings per second, 60 readings per batch
	let gyro = new Gyroscope({ frequency: 30, batch: 60 });
	gyro.onreading = () => {
		for (let index = 0; index < gyro.readings.timestamp.length; index++) {
			console.log(
				`Gyroscope Reading: \
        timestamp=${gyro.readings.timestamp[index]}, \
        [${gyro.readings.x[index]}, \
        ${gyro.readings.y[index]}, \
        ${gyro.readings.z[index]}]`,
			);
		}
	};
	gyro.start();

	const readTheReadingsArray = (
		xArr: Float32Array,
		yArr: Float32Array,
		zArr: Float32Array,
	) => {
		xArr.map(function (x: number, i: number) {
			return Math.sqrt(x * x + yArr[i] * yArr[i] + zArr[i] * zArr[i]);
		});
	};

	gyro.onreading = () => {
		readTheReadingsArray(gyro.readings.x, gyro.readings.y, gyro.readings.z);
	};
}
