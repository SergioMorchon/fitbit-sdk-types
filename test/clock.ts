import clock from 'clock';

clock.granularity = 'minutes';
clock.ontick = evt => {
	console.log(evt.date.toTimeString());
};
