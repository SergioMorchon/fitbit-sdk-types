declare function clearInterval(handle: number): void;
declare function setInterval(
	handler: (...args: any[]) => void,
	timeout: number,
): number;
declare function clearTimeout(handle: number): void;
declare function setTimeout(
	handler: (...args: any[]) => void,
	timeout: number,
): number;
interface Coordinates {
	readonly accuracy: number;
	readonly altitude: number | null;
	readonly altitudeAccuracy: number | null;
	readonly heading: number | null;
	readonly latitude: number | null;
	readonly longitude: number | null;
	readonly speed: number | null;
}
interface Position {
	readonly coords: Coordinates;
	readonly timestamp: number;
}
//#region device
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(
	handler: (timestamp: number) => void,
): number;
//#endregion
