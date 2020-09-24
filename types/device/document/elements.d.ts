interface ElementSearchMap {
	[key: string]: Element;
	image: ImageElement;
	text: TextElement;
	rect: RectElement;
	line: LineElement;
	circle: CircleElement;
	textarea: TextAreaElement;
	arc: ArcElement;
	gradientRect: GradientRectElement;
	gradientArc: GradientArcElement;
	g: GroupElement;
}
interface ElementSearch {
	getElementById(id: string): Element | null;
	getElementsByClassName(className: string): Element[];
	getElementsByTagName<TagName extends keyof ElementSearchMap>(
		tagName: TagName,
	): Array<ElementSearchMap[TagName]>;
}
type EventName =
	| 'activate'
	| 'click'
	| 'collapse'
	| 'disable'
	| 'enable'
	| 'expand'
	| 'highlight'
	| 'load'
	| 'mousedown'
	| 'mousemove'
	| 'mouseout'
	| 'mouseover'
	| 'mouseup'
	| 'paint'
	| 'reload'
	| 'select'
	| 'unhighlight'
	| 'unload'
	| 'unselect';
interface Element extends ElementSearch, GlobalEvents {
	readonly children: readonly Element[];
	class: string;
	readonly firstChild: Element | null;
	readonly id: string;
	readonly image: string;
	layer: number;
	mode: number | [number, number];
	readonly nextSibling: Element | null;
	readonly parent: Element | null;
	state: string;
	text: string;
	readonly type: string;
	value: number | [number, number];
	enabled: boolean;
	animate(trigger: EventName): void;
	sendEvent(event: Event): void;
}
interface ScrollIndicatorElement extends ContainerElement {
	length: number;
	setPosition(position: number, pageSize: number, viewSize: number): void;
}
interface VirtualTileListItemUpdateOptions {
	redraw?: boolean;
}
interface VirtualTileListItemInfo {
	type: string;
}
interface VirtualTileListDelegate<ItemInfo extends VirtualTileListItemInfo> {
	configureTile(tile: VirtualTileListItem, tileInfo: ItemInfo): void;
	getTileInfo(position: number): ItemInfo;
}

interface VirtualTileList<ItemInfo extends VirtualTileListItemInfo>
	extends ContainerElement {
	delegate: VirtualTileListDelegate<ItemInfo>;
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
interface VirtualTileListItem extends ContainerElement {
	align(options: TileListItemOperationOptions): void;
	hide(options?: TileListItemOperationOptions): void;
	show(options?: TileListItemOperationOptions): void;
}
interface TileListItem extends ContainerElement {
	align(options: TileListItemOperationOptions): void;
	hide(options?: TileListItemOperationOptions): void;
	remove(options?: TileListItemOperationOptions): void;
	show(options?: TileListItemOperationOptions): void;
}
interface GraphicsElement extends Element, Styled, Bounded {
	getBBox(): DOMRect;
}
interface TileList extends GraphicsElement {
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
interface ImageElement extends GraphicsElement {
	href: string;
}
interface LineElement extends GraphicsElement {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}
interface GradientArcElement extends ArcElement {
	readonly gradient: Gradient;
}
interface ArcElement extends GraphicsElement {
	arcWidth: number;
	startAngle: number;
	sweepAngle: number;
}
interface CircleElement extends GraphicsElement {
	cx: number;
	cy: number;
	r: number;
}
interface GradientRectElement extends RectElement {
	gradient: Gradient;
}
interface RectElement extends GraphicsElement, Bounded {}
interface TextAreaElement extends TextElement {
	baseline: number;
	displayAlign: 'top' | 'center' | 'bottom';
	lineIncrement: number;
	rows: number;
}
interface TextElement extends GraphicsElement {
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
	height: number;
	width: number;
	x: number;
	y: number;
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
	strokeWidth: number;
	textDecoration: 'none' | 'inherit' | 'underline';
	visibility: 'inherit' | 'visible' | 'hidden';
}
