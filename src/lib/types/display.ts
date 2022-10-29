type DisplayOutside = 'block' | 'inline';
type DisplayInside = 'flow' | 'flow-root' | 'table' | 'flex' | 'gride' | 'ruby';
type DisplayListitem = 'list-item';
type DisplayInternal =
	| 'table-row-group'
	| 'table-header-group'
	| 'table-footer-group'
	| 'table-row'
	| 'table-cel'
	| 'table-column-group'
	| 'tabe-column'
	| 'table-caption'
	| 'ruby-base'
	| 'ruby-text'
	| 'ruby-base-container'
	| 'ruby-text-container';
type DisplayBox = 'contents' | 'none';
type Displaylegacy = 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-gride';
type Display =
	| DisplayOutside
	| DisplayInside
	| DisplayListitem
	| DisplayInternal
	| DisplayBox
	| Displaylegacy
	| Global;

export default Display;
