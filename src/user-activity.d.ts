declare module 'user-activity' {
	interface GoalsEventMap {
		reachgoal: Event;
	}
	interface Goals {
		readonly activeMinutes: number | undefined;
		readonly calories: number | undefined;
		readonly distance: number | undefined;
		readonly elevationGain: number | undefined;
		onreachgoal: (event: Event) => void;
		readonly steps: number | undefined;
	}
	export const goals: Goals;

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
	export const today: Today;
}
