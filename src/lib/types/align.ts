import type { ContentDistribution } from './content';
import type { BaselinePosition, ContentPosition, OverFlowPosition } from './position';

export type AlignContent =
	| 'normal'
	| BaselinePosition
	| ContentDistribution
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`;
export type AlignItems =
	| 'normal'
	| 'strech'
	| BaselinePosition
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`;
export type AlignSelft =
	| 'normal'
	| 'stretch'
	| BaselinePosition
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`;
export type AlignTracks =
	| 'normal'
	| BaselinePosition
	| ContentDistribution
	| `${`${OverFlowPosition} ` | ''}${ContentPosition}`;
