import { OrientationSensor } from 'orientation';

// 30 readings per second, 60 readings per batch
let orient = new OrientationSensor({ frequency: 30, batch: 60 });
orient.onreading = () => {
	for (let index = 0; index < orient.readings.timestamp.length; index++) {
		console.log(
			`OrientationSensor Reading: \
        timestamp=$‌{orient.readings.timestamp[index]}, \
        [$‌{orient.readings.scalar[index]}, \
        $‌{orient.readings.i[index]}, \
        $‌{orient.readings.j[index]}, \
        $‌{orient.readings.k[index]}]`,
		);
	}
};
orient.start();
