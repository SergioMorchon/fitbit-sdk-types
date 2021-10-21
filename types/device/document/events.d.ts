interface ListScrollEvent extends Event {
	readonly first: number;
	readonly last: number;
	readonly middle: number;
}
interface LoadEvent extends Event {
	readonly phase: 1 | 2;
}
interface PageScrollEvent extends Event {
	readonly pageSize: number;
	readonly position: number;
	readonly viewSize: number;
}
interface AnimationEvent extends Event {
	readonly elapsedTime: number;
}
interface KeyboardEvent extends Event {
	readonly key: 'down' | 'up' | 'back';
}
interface MouseEvent extends Event {
	readonly screenX: number;
	readonly screenY: number;
}
interface ActivateEvent extends Event {
	readonly command: 'back' | 'exit' | 'home' | 'ok' | 'select';
	readonly screenX: number;
	readonly screenY: number;
}
interface GlobalEvents
	extends EventTarget<{
		activate: Event;
		animationend: AnimationEvent;
		animationiteration: AnimationEvent;
		animationstart: AnimationEvent;
		beforeunload: Event;
		click: MouseEvent;
		collapse: Event;
		disable: Event;
		enable: Event;
		expand: Event;
		highlight: Event;
		keydown: KeyboardEvent;
		keypress: KeyboardEvent;
		keyup: KeyboardEvent;
		listbackward: ListScrollEvent;
		listforward: ListScrollEvent;
		load: LoadEvent;
		mousedown: MouseEvent;
		mousemove: MouseEvent;
		mouseout: MouseEvent;
		mouseover: MouseEvent;
		mouseup: MouseEvent;
		pagescroll: PageScrollEvent;
		reload: LoadEvent;
		select: Event;
		unhighlight: Event;
		unload: Event;
		unselect: Event;
	}> {}
