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
	readonly key: 'back' | 'up' | 'down';
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
	}> {
	onactivate: (event: Event) => void;
	onanimationend: (event: AnimationEvent) => void;
	onanimationiteration: (event: AnimationEvent) => void;
	onanimationstart: (event: AnimationEvent) => void;
	onclick: (event: MouseEvent) => void;
	oncollapse: (event: Event) => void;
	ondisable: (event: Event) => void;
	onenable: (event: Event) => void;
	onexpand: (event: Event) => void;
	onhighlight: (event: Event) => void;
	onkeydown: (event: KeyboardEvent) => void;
	onkeypress: (event: KeyboardEvent) => void;
	onkeyup: (event: KeyboardEvent) => void;
	onlistbackward: (event: ListScrollEvent) => void;
	onlistforward: (event: ListScrollEvent) => void;
	onload: (event: LoadEvent) => void;
	onmousedown: (event: MouseEvent) => void;
	onmousemove: (event: MouseEvent) => void;
	onmouseout: (event: MouseEvent) => void;
	onmouseover: (event: MouseEvent) => void;
	onmouseup: (event: MouseEvent) => void;
	onpagescroll: (event: PageScrollEvent) => void;
	onreload: (event: Event) => void;
	onselect: (event: Event) => void;
	onunhighlight: (event: Event) => void;
	onunload: (event: Event) => void;
	onunselect: (event: Event) => void;
}
