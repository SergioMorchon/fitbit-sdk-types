declare module 'document' {
	interface EventMap {
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
	}
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
		readonly key: string;
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
	interface EventHandler {
		(event: Event): boolean;
	}
	interface GlobalEvents extends EventTarget<EventMap> {
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

	interface DocumentModule extends GlobalEvents {
		readonly default: DocumentModule;
		readonly root: Element;
		getEventHandler(elementType: string): EventHandler | null;
		setEventHandler(elementType: string, handler: EventHandler): void;
	}
	type ElementState =
		| 'enabled'
		| 'disabled'
		| 'highlighted'
		| 'unhighlighted'
		| 'selected'
		| 'unselected'
		| 'expanded'
		| string;
	interface Element extends GlobalEvents {
		readonly class: string;
		readonly firstChild: Element | null;
		readonly id: string;
		readonly image: string;
		readonly layer: number;
		mode: number | [number, number];
		readonly nextSibling: Element | null;
		readonly parent: Element | null;
		state: ElementState;
		text: string;
		readonly type: string;
		value: number | [number, number];
		animate(trigger: string): void;
		sendEvent(event: Event): void;
	}

	interface ElementSearch {
		getElementById(id: string): Element;
		getElementsByClassName(className: string): Element[];
		getElementsByTypeName(typeName: string): Element[];
	}

	const document: DocumentModule & ElementSearch;
	export default document;

	interface ScrollIndicatorElement extends ContainerElement, Element {
		length: number;
		setPosition(position: number, pageSize: number, viewSize: number): void;
	}
	interface ComboButtonEnableDisableOptions {
		animate?: boolean;
	}
	interface ComboButtonShowHideOptions {
		animate?: boolean;
	}
	interface ComboButton extends ContainerElement, Element {
		disable(options?: ComboButtonEnableDisableOptions): void;
		enable(options?: ComboButtonEnableDisableOptions): void;
		hide(options?: ComboButtonShowHideOptions): void;
		show(options?: ComboButtonShowHideOptions): void;
	}
	interface VirtualTileListItemUpdateOptions {
		redraw?: boolean;
	}
	interface VirtualTileListDelegate {
		configureTile(
			tile: VirtualTileListItem,
			tileInfo: VirtualTileListItemInfo,
		): void;
		getTileInfo(position: number): VirtualTileListItemInfo;
	}
	interface VirtualTileListItemInfo {
		type: string;
	}
	interface VirtualTileList extends ContainerElement, Element {
		delegate: VirtualTileListDelegate;
		readonly firstVisibleTile: number;
		readonly lastVisibleTile: number;
		length: number;
		redraw(): void;
		updateTile(
			position: number,
			options?: VirtualTileListItemUpdateOptions,
		): void;
	}
	type TileListItemAlignment = 'middle' | 'top' | 'bottom';
	interface TileListItemOperationOptions {
		alignment?: TileListItemAlignment;
		animate?: boolean;
		redraw?: boolean;
	}
	interface VirtualTileListItem extends ContainerElement, Element {
		align(options: TileListItemOperationOptions): void;
		hide(options?: TileListItemOperationOptions): void;
		show(options?: TileListItemOperationOptions): void;
	}
	interface TileListItem extends ContainerElement, Element {
		align(options: TileListItemOperationOptions): void;
		hide(options?: TileListItemOperationOptions): void;
		remove(options?: TileListItemOperationOptions): void;
		show(options?: TileListItemOperationOptions): void;
	}
	interface GraphicsElement {
		getBBox(): DOMRect;
	}
	interface TileList extends Element, GraphicsElement {
		readonly length: number;
		getTile(position: number): TileListItem;
		insertTile(
			item: TileListItem,
			position: number,
			options?: TileListItemOperationOptions,
		): void;
		obtainTile(type: string): TileListItem | null;
		redraw(): void;
	}
	interface ImageElement extends Element, GraphicsElement {
		string: string;
	}
	interface LineElement extends Element, GraphicsElement {
		x1: number;
		x2: number;
		y1: number;
		y2: number;
	}
	interface GradientArcElement extends ArcElement {
		readonly gradient: Gradient;
	}
	interface ArcElement extends Element, GraphicsElement {
		arcWidth: number;
		startAngle: number;
		sweepAngle: number;
	}
	interface CircleElement extends Element, GraphicsElement {
		cx: number;
		cy: number;
		r: number;
	}
	interface GradientRectElement extends RectElement {
		gradient: Gradient;
	}
	interface RectElement extends Element, GraphicsElement {
		x: number;
		y: number;
		width: number;
		height: number;
	}
	interface TextAreaElement extends TextElement {
		baseline: number;
		displayAlign: 'top' | 'center' | 'bottom';
		lineIncrement: number;
		rows: number;
	}
	interface TextElement extends Element, GraphicsElement {
		letterSpacing: number;
		textAnchor: 'start' | 'middle' | 'end';
		textContent: string;
		textOverflow: 'clip' | 'ellipsis';
		readonly textOverflowing: boolean;
		writingMode: 'lr' | 'rl';
	}
	interface GroupElement extends GraphicsElement {
		readonly groupTransform: Transform | undefined;
	}
	interface ContainerElement extends GraphicsElement {
		overflow: 'inherit' | 'visible' | 'hidden';
	}
	interface DOMRect {
		readonly bottom: number;
		readonly height: number;
		readonly left: number;
		readonly right: number;
		readonly top: number;
		readonly width: number;
		readonly x: number;
		readonly y: number;
	}
	interface Bounded {
		readonly height: number;
		readonly width: number;
		readonly x: number;
		readonly y: number;
	}
	interface Styled {
		readonly style: Style;
	}
	interface Gradient {
		readonly colors: {
			c1: string;
			c2: string;
			c3: string;
			c4: string;
		};
		opacity: {
			o1?: number;
			o2?: number;
			o3?: number;
			o4?: number;
		};
		type: 'linear' | 'radial' | 'bilinear';
		x1: number;
		y1: number;
		x2: number;
		y2: number;
	}
	interface Transform {
		readonly rotate: {
			angle: number;
		};
		readonly scale: {
			x: number;
			y: number;
		};
		readonly translate: {
			x: number;
			y: number;
		};
	}
	interface Style {
		display: 'none' | 'inline' | 'inherit';
		fill: string;
		fillOpacity: number | undefined;
		fontFamily: string;
		fontSize: number | undefined;
		fontWeight: 'inherit' | 'light' | 'regular' | 'bold';
		opacity: number | undefined;
		textDecoration: 'none' | 'inherit' | 'underline';
		visibility: 'inherit' | 'visible' | 'hidden';
	}
}
