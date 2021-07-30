declare module 'sleep' {
	export interface ISleep
		extends EventTarget<{
			change: Event;
		}> {
		readonly state: 'awake' | 'asleep' | 'unknown';
	}
	export type Sleep = ISleep | undefined;
	export const sleep: Sleep;
	export default sleep;
}
