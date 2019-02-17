declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(
	handler: (timestamp: number) => void,
): number;
