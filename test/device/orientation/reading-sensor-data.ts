import { OrientationSensor } from 'orientation';

let orientation = new OrientationSensor({ frequency: 60 });
orientation.onreading = function() {
	console.log(
		'Orientation Sensor Reading: ' + 'timestamp: ' + orientation.timestamp,
		'quaternion[0]: ' + orientation.quaternion[0],
		'quaternion[1]: ' + orientation.quaternion[1],
		'quaternion[2]: ' + orientation.quaternion[2],
		'quaternion[3]: ' + orientation.quaternion[3],
	);
};
orientation.start();
