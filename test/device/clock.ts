import clock from 'clock';

clock.granularity = 'minutes';
clock.ontick = evt => {
	console.log(evt.date.toTimeString());
};
clock.addEventListener('tick', e => {
	console.log(e.date.toTimeString());
});
