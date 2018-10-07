import { Barometer } from 'barometer';

let bar = new Barometer({ frequency: 1 });
bar.onreading = function() {
	console.log(
		'ts:',
		bar.timestamp,
		'pressure:',
		// @ts-ignore parseInt expects string, pressure is already a number
		parseInt(bar.pressure) + ' Pa',
	);
};
bar.start();

// 10 foot of air [15°C, dry] = 36.62293100066991 pascal
const approxFloorPa = 36.62293100066991;

// The current floor in pascal
let currentFloorPa = 0;

// How many floors has the user completed since we started
let floorCounter = 0;

// Event occurs when the batched readings are available
bar.onreading = function() {
	if (currentFloorPa !== 0) {
		// Calculate the difference between the current floor, and the new pressure
		let diffPa = currentFloorPa - bar.pressure;
		console.log('Difference: ' + diffPa + ' Pa');

		// Did the pressure change more than 10 feet?
		if (Math.abs(diffPa) > approxFloorPa) {
			console.log('Floor change detected');

			// Detect up or down direction
			if (bar.pressure > currentFloorPa) {
				console.log('User went downwards');
			} else {
				console.log('User went upwards');
			}

			// This is now our current floor
			currentFloorPa = bar.pressure;

			// Increment floor counter
			floorCounter++;
			console.log('Floors completed: ' + floorCounter);
		}
	} else {
		// The initial starting floor
		currentFloorPa = bar.pressure;
	}
};

// Begin monitoring the sensor
bar.start();

// 1 reading per second, 60 readings per batch
bar = new Barometer({ frequency: 1, batch: 60 });
bar.onreading = () => {
	for (let index = 0; index < bar.readings.timestamp.length; index++) {
		console.log(
			`Barometer Reading: \
        timestamp=$‌{bar.readings.timestamp[index]}, \
        [$‌{bar.readings.pressure[index]}]`,
		);
	}
};
bar.start();

bar.stop();
