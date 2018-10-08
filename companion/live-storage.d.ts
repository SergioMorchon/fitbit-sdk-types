interface StorageChangeEvent extends Event {
	readonly key: string | null;
	readonly newValue: string | null;
	readonly oldValue: string | null;
}
interface LiveStorage
	extends Storage,
		StrictEventListener<{
			change: StorageChangeEvent;
		}> {
	onchange: (event: Event) => void;
}
