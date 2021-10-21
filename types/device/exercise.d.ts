declare module 'exercise' {
	export interface ExerciseStats {
		readonly activeTime: number;
		readonly calories: number;
		readonly distance: number;
		readonly elevationGain: number;
		readonly heartRate: {
			readonly current: number;
			readonly max: number;
			readonly average: number;
		};
		readonly pace: {
			readonly current: number;
			readonly average: number;
		};
		readonly speed: {
			readonly current: number;
			readonly max: number;
			readonly average: number;
		};
		readonly steps: number;
		readonly swimLengths: number | undefined;
	}
	export interface SwimLengthEvent extends Event {
		readonly dominantStroke:
			| 'back'
			| 'unknown'
			| 'freestyle'
			| 'breast'
			| 'butterfly';
		readonly lengthDuration: number;
		readonly lengthStart: number;
		readonly strokes: number;
	}
	export interface ExerciseOptions {
		autopause?: boolean;
		disableTouch?: boolean;
		gps?: boolean;
		poolLength?: number;
	}
	export interface Exercise
		extends EventTarget<{
			statechange: Event;
			swimlength: SwimLengthEvent;
		}> {
		readonly currentLapStats: ExerciseStats | undefined;
		readonly startDate: Date | undefined;
		readonly state: 'started' | 'paused' | 'stopped';
		readonly stats: ExerciseStats | undefined;
		readonly type: string | undefined;
		pause(): void;
		resume(): void;
		splitLap(): ExerciseStats;
		start(exerciseType: string, options?: ExerciseOptions): void;
		stop(): void;
	}

	const exercise: Exercise;
	export default exercise;
}
