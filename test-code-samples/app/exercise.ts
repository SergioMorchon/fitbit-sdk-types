import exercise, { ExerciseStats } from 'exercise';
exercise.start('Coding Workout', { gps: false });
if (exercise.state === 'started') {
	console.log(exercise.stats.calories || 0);
	exercise.stop();
}

const exerciseOptions = {
	gps: false,
};

exercise.start('Coding', exerciseOptions);
showStats(exercise.stats);
exercise.pause();
exercise.resume();
exercise.stop();
showStats(exercise.stats);

function showStats(stats: ExerciseStats) {
	console.log(`Distance: ${stats.distance}`);
	console.log(`Calories: ${stats.calories}`);
	console.log(`Steps: ${stats.steps}`);
	console.log(`Elevation Gain: ${stats.elevationGain}`);
	console.log(`Speed:`);
	console.log(` current: ${stats.speed.current}`);
	console.log(` max: ${stats.speed.max}`);
	console.log(` average: ${stats.speed.average}`);
	console.log(`Pace:`);
	console.log(
		` current: ${stats.pace.current / 60}min ${stats.pace.current % 60}sec`,
	);
	console.log(
		` average: ${stats.pace.average / 60}min ${stats.pace.average % 60}sec`,
	);
	console.log(`Heart Rate:`);
	console.log(` current: ${stats.heartRate.current}`);
	console.log(` max: ${stats.heartRate.max}`);
	console.log(` average: ${stats.heartRate.average}`);
}

import { geolocation } from 'geolocation';
const watchId = geolocation.watchPosition((position) => {
	exercise.start('run', { gps: true });
	geolocation.clearWatch(watchId);
});
