declare module 'user-activity' {
	interface Goals extends EventTarget<{ reachgoal: Event }> {
		readonly activeMinutes: number | undefined;
		readonly calories: number | undefined;
		readonly distance: number | undefined;
		readonly elevationGain: number | undefined;
		onreachgoal: (event: Event) => void;
		readonly steps: number | undefined;
	}
	const goals: Goals;

	interface Activity {
		readonly activeMinutes: number | undefined;
		readonly calories: number | undefined;
		readonly distance: number | undefined;
		readonly elevationGain: number | undefined;
		readonly steps: number | undefined;
	}
	interface Today {
		readonly adjusted: Activity;
		readonly local: Activity;
	}
	const today: Today;
}
