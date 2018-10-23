interface StorageChangeEvent extends Event {
	readonly key: string | null;
	readonly newValue: string | null;
	readonly oldValue: string | null;
}
interface LiveStorage
	extends Storage,
		EventTarget<{
			change: StorageChangeEvent;
		}> {
	onchange: (event: StorageChangeEvent) => void;
}
