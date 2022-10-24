type Global = "auto" | "inherit" | "inherit" | "revert" | "revert-layer" | "unset";
type Cap = `${number}cap`;
type Ch = `${number}ch`;
type Em = `${number}em`;
type Ex = `${number}ex`;
type Ic = `${number}ic`;
type Lh = `${number}lh`;
type Rem = `${number}rem`;
type Rlh = `${number}rlh`;
type Vh = `${number}vh`;
type Vw = `${number}vw`;
type Vmin = `${number}vmin`;
type Vb = `${number}vb`;
type Vi = `${number}Vi`;
type Px = `${number}px`;
type Cm = `${number}cm`;
type Mm = `${number}mm`;
type Q = `${number}Q`;
type In = `${number}in`;
type Ppc = `${number}pc`;
type Pt = `${number}pt`;

type Length = Cap | Ch | Em | Ex | Ic | Lh | Rem | Rlh | Vh | Vw | Vmin | Vb | Vi | Px | Cm | Mm | Q | In | Ppc | Pt;
type Percentage = `${number}%`;

type DisplayOutside = "block" | "inline";
type DisplayInside = "flow" | "flow-root" | "table" | "flex" | "gride" | "ruby";
type DisplayListitem = "list-item";
type DisplayInternal = "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cel" | "table-column-group" | "tabe-column" | "table-caption" | "ruby-base" | "ruby-text" | "ruby-base-container" | "ruby-text-container";
type DisplayBox = "contents" | "none";
type Displaylegacy = "inline-block" | "inline-table" | "inline-flex" | "inline-gride";

type ColorKeywords1 = "black" | "silver" | "gray" | "white" | "maroon" | "red" | "purple" | "fushia" | "green" | "green" | "lime" | "olive" | "yellow" | "navy" | "blue" | "teal" | "aqua";
type ColorKeywords2 = "orange";
type ColorKeywords3 = "aliceblue" | "antiquewhite" | "aquamarine" | "azure" | "beige" | "bisque" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "aqua" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "limegreen" | "linen" | "magenta" | "fuchsia" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "oldlace" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "whitesmoke" | "yellowgreen";
type ColorKeywords4 = "rebeccapurple"
type NamedColor = ColorKeywords1 | ColorKeywords2 | ColorKeywords3 | ColorKeywords4;

type RGBFunction = `rgb(${number | Percentage}, ${number | Percentage}, ${number | Percentage} ${string | undefined})` | `rgb(${number | Percentage} ${number | Percentage} ${number | Percentage} ${string | undefined})`;
type RGBAFunction = `rgba(${number | Percentage}, ${number | Percentage}, ${number | Percentage} ${string | undefined})` | `rgb(${number | Percentage} ${number | Percentage} ${number | Percentage} ${string | undefined})`;

type AbsoluteColorFunction = RGBFunction | RGBAFunction; // TODO: finish to implement

type HexColor = `#${number}`;

type AbsoluteColorBase = HexColor | AbsoluteColorFunction | NamedColor | "transparent";

export type AccentColor = Color | Global;
export type Color = AbsoluteColorBase | "currentcolor";
export type Display = DisplayOutside | DisplayInside | DisplayListitem | DisplayInternal | DisplayBox | Displaylegacy | Global;
export type FontWeight = "normal" | "bold" | "lighter" | "bolder" | number | Global;
export type LineHeight = number | Length | Percentage | "normal" | Global;
export type Margin = Length | Percentage | Global;
export type Padding = Length | Percentage;