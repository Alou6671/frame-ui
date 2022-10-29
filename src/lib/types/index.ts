import Animation from './animation';
import type Display from './display';
import type Length from './lenght';
import type Percentage from './percentage';

type Global = 'inherit' | 'inherit' | 'revert' | 'revert-layer' | 'unset';

type ColorKeywords1 =
	| 'black'
	| 'silver'
	| 'gray'
	| 'white'
	| 'maroon'
	| 'red'
	| 'purple'
	| 'fushia'
	| 'green'
	| 'green'
	| 'lime'
	| 'olive'
	| 'yellow'
	| 'navy'
	| 'blue'
	| 'teal'
	| 'aqua';
type ColorKeywords2 = 'orange';
type ColorKeywords3 =
	| 'aliceblue'
	| 'antiquewhite'
	| 'aquamarine'
	| 'azure'
	| 'beige'
	| 'bisque'
	| 'blanchedalmond'
	| 'blueviolet'
	| 'brown'
	| 'burlywood'
	| 'cadetblue'
	| 'chartreuse'
	| 'chocolate'
	| 'coral'
	| 'cornflowerblue'
	| 'cornsilk'
	| 'crimson'
	| 'cyan'
	| 'aqua'
	| 'darkblue'
	| 'darkcyan'
	| 'darkgoldenrod'
	| 'darkgray'
	| 'darkgreen'
	| 'darkgrey'
	| 'darkkhaki'
	| 'darkmagenta'
	| 'darkolivegreen'
	| 'darkorange'
	| 'darkorchid'
	| 'darkred'
	| 'darksalmon'
	| 'darkseagreen'
	| 'darkslateblue'
	| 'darkslategray'
	| 'darkslategrey'
	| 'darkturquoise'
	| 'darkviolet'
	| 'deeppink'
	| 'deepskyblue'
	| 'dimgray'
	| 'dimgrey'
	| 'dodgerblue'
	| 'firebrick'
	| 'floralwhite'
	| 'forestgreen'
	| 'gainsboro'
	| 'ghostwhite'
	| 'gold'
	| 'goldenrod'
	| 'greenyellow'
	| 'grey'
	| 'honeydew'
	| 'hotpink'
	| 'indianred'
	| 'indigo'
	| 'ivory'
	| 'khaki'
	| 'lavender'
	| 'lavenderblush'
	| 'lawngreen'
	| 'lemonchiffon'
	| 'lightblue'
	| 'lightcoral'
	| 'lightcyan'
	| 'lightgoldenrodyellow'
	| 'lightgray'
	| 'lightgreen'
	| 'lightgrey'
	| 'lightpink'
	| 'lightsalmon'
	| 'lightseagreen'
	| 'lightskyblue'
	| 'lightslategray'
	| 'lightslategrey'
	| 'lightsteelblue'
	| 'lightyellow'
	| 'limegreen'
	| 'linen'
	| 'magenta'
	| 'fuchsia'
	| 'mediumaquamarine'
	| 'mediumblue'
	| 'mediumorchid'
	| 'mediumpurple'
	| 'mediumseagreen'
	| 'mediumslateblue'
	| 'mediumspringgreen'
	| 'mediumturquoise'
	| 'mediumvioletred'
	| 'midnightblue'
	| 'mintcream'
	| 'mistyrose'
	| 'moccasin'
	| 'navajowhite'
	| 'oldlace'
	| 'olivedrab'
	| 'orangered'
	| 'orchid'
	| 'palegoldenrod'
	| 'palegreen'
	| 'paleturquoise'
	| 'palevioletred'
	| 'papayawhip'
	| 'peachpuff'
	| 'peru'
	| 'pink'
	| 'plum'
	| 'powderblue'
	| 'rosybrown'
	| 'royalblue'
	| 'saddlebrown'
	| 'salmon'
	| 'sandybrown'
	| 'seagreen'
	| 'seashell'
	| 'sienna'
	| 'skyblue'
	| 'slateblue'
	| 'slategray'
	| 'slategrey'
	| 'snow'
	| 'springgreen'
	| 'steelblue'
	| 'tan'
	| 'thistle'
	| 'tomato'
	| 'transparent'
	| 'turquoise'
	| 'violet'
	| 'wheat'
	| 'whitesmoke'
	| 'yellowgreen';
type ColorKeywords4 = 'rebeccapurple';
type NamedColor = ColorKeywords1 | ColorKeywords2 | ColorKeywords3 | ColorKeywords4;

type RGBFunction =
	| `rgb(${number | Percentage}, ${number | Percentage}, ${number | Percentage} ${string | ''})`
	| `rgb(${number | Percentage} ${number | Percentage} ${number | Percentage} ${string | ''})`;
type RGBAFunction =
	| `rgba(${number | Percentage}, ${number | Percentage}, ${number | Percentage} ${string | ''})`
	| `rgb(${number | Percentage} ${number | Percentage} ${number | Percentage} ${string | ''})`;

type AbsoluteColorFunction = RGBFunction | RGBAFunction; // TODO: finish to implement

type HexColor = `#${number}`;

type AbsoluteColorBase = HexColor | AbsoluteColorFunction | NamedColor | 'transparent';

type OverFlowPosition = 'unsafe' | 'safe';
type ContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'strech';
type ContentPosition = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';

export type Size = Length | Percentage | Global;

export type AccentColor = Color | 'auto' | Global;
export { Animation };
export type AlignContent =
	| 'normal'
	| BaselinePosition
	| ContentDistribution
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`
	| Global;
export type AlignItems =
	| 'normal'
	| 'strech'
	| BaselinePosition
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`
	| Global;
export type AlignSelft =
	| 'normal'
	| 'stretch'
	| BaselinePosition
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`
	| Global;
export type AlignTracks =
	| 'normal'
	| BaselinePosition
	| ContentDistribution
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`
	| Global;
export type All = 'initial' | 'inherit' | 'unset' | 'revert' | 'revert-layer';
export type Color = AbsoluteColorBase | 'currentcolor';
export type Cursor =
	| 'default'
	| 'none'
	| 'context-menu'
	| 'help'
	| 'pointer'
	| 'progress'
	| 'wait'
	| 'cell'
	| 'crosshair'
	| 'text'
	| 'vertical-text'
	| 'alias'
	| 'copy'
	| 'move'
	| 'no-drop'
	| 'not-allowed'
	| 'grab'
	| 'grabbing'
	| 'e-resize'
	| 'n-resize'
	| 'ne-resize'
	| 'nw-resize'
	| 's-resize'
	| 'se-resize'
	| 'sw-resize'
	| 'w-resize'
	| 'ew-resize'
	| 'ns-resize'
	| 'nesw-resize'
	| 'nwse-resize'
	| 'col-resize'
	| 'row-resize'
	| 'all-scroll'
	| 'zoom-in'
	| 'zoom-out';
export { Display };
export type FontWeight = 'normal' | 'bold' | 'lighter' | 'bolder' | number | Global;
export type LineHeight = number | Length | Percentage | 'normal' | Global;
export type Url = `url(${string})`;
export type ZIndex = number | Percentage | Global;
