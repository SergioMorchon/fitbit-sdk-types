declare module 'user-activity' {
	interface ActiveZoneMinutes {
		readonly cardio: number | undefined;
		readonly fatBurn: number | undefined;
		readonly peak: number | undefined;
		readonly total: number;
	}

	interface Activity {
		readonly activeZoneMinutes: ActiveZoneMinutes | undefined;
		readonly calories: number | undefined;
		readonly distance: number | undefined;
		readonly elevationGain: number | undefined;
		readonly steps: number | undefined;
	}
	interface Goals extends Activity, EventTarget<{ reachgoal: Event }> {
		onreachgoal: (event: Event) => void;
	}
	const goals: Goals;
	interface Today {
		readonly adjusted: Activity;
		readonly local: Activity;
	}
	const today: Today;
	interface ActivityHistoryRecord {
		readonly averageHeartRate: number | void;
		readonly calories: number | void;
		readonly distance: number | void;
		readonly elevationGain: number | void;
		readonly restingHeartRate: number | void;
		readonly steps: number | void;
	}
	interface ActivityHistory {
		readonly maxRecordCount: number;
		query(options?: { limit?: number | undefined }): ActivityHistoryRecord[];
	}
	const dayHistory: ActivityHistory;
	const minuteHistory: ActivityHistory;
	const primaryGoal: keyof Activity;

	interface WeekActivity {
		readonly activeZoneMinutes: number | undefined;
	}
	interface Week {
		readonly adjusted: WeekActivity;
		readonly local: WeekActivity;
	}
	const week: Week;

	interface WeekGoals extends WeekActivity, EventTarget<{ reachgoal: Event }> {
		onreachgoal: (event: Event) => void;
	}

	const weekGoals: WeekGoals;
}
