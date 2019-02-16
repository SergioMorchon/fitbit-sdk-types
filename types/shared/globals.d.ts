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
//#region device
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(
	handler: (timestamp: number) => void,
): number;
//#endregion
