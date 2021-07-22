import { goals, today, weekGoals, week } from 'user-activity';

console.log(`${goals.activeZoneMinutes.total} activeZoneMinutes Goal`);

goals.addEventListener('reachgoal', (evt) => {
	if (today.adjusted.activeZoneMinutes.total == goals.activeZoneMinutes.total) {
		// AZM Goal has been met
	}
});

console.log(`${today.local.activeZoneMinutes.fatBurn}`);
console.log(`${today.local.activeZoneMinutes.cardio}`);
console.log(`${today.local.activeZoneMinutes.peak}`);
console.log(`${today.adjusted.activeZoneMinutes.total}`);

console.log(`${weekGoals.activeZoneMinutes} mins weekly AZM goal`);
weekGoals.addEventListener('reachgoal', (evt) => {
	// AZM Weekly Goal has been met
});
