declare module 'sleep' {
	interface ISleep
		extends EventTarget<{
			change: Event;
		}> {
		readonly state: 'awake' | 'asleep' | 'unknown';
	}
	export type Sleep = ISleep | undefined;
	const sleep: Sleep;
	export default sleep;
}
