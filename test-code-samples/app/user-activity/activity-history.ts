import { me as appbit } from 'appbit';
import { minuteHistory, dayHistory } from 'user-activity';

if (appbit.permissions.granted('access_activity')) {
	// query the previous 5 minutes step data
	const minuteRecords = minuteHistory.query({ limit: 5 });

	minuteRecords.forEach((minute, index) => {
		console.log(`${minute.steps || 0} steps. ${index + 1} minute(s) ago.`);
	});

	// query all days history step data
	const dayRecords = dayHistory.query();

	dayRecords.forEach((day, index) => {
		console.log(`${day.steps || 0} steps. ${index + 1} day(s) ago.`);
	});
}
