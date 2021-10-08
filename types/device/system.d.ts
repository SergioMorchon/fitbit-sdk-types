declare module 'system' {
	interface MemoryPressureMonitor
		extends EventTarget<{
			memorypressurechange: Event;
		}> {
		onmemorypressurechange: (event: Event) => void;
		readonly pressure: 'normal' | 'high' | 'critical';
	}
	interface MemoryUsage {
		readonly peak: number;
		readonly total: number;
		readonly used: number;
	}
	interface Memory {
		readonly js: MemoryUsage;
		readonly monitor: MemoryPressureMonitor;
		readonly native: MemoryUsage;
	}
	const memory: Memory;
	function launchApp(uuid: string, launchArguments?: any): void;
	function isAppInstalled(uuid: string): boolean;
}
