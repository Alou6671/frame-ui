import type { ContentDistribution } from './content';
import type { BaselinePosition, ContentPosition, OverFlowPosition } from './position';

export type JustifyContent =
	| 'normal'
	| ContentDistribution
	| `${`${OverFlowPosition} ` | ''}${ContentPosition | 'left' | 'right'}`;
export type JustifyItems =
	| 'normal'
	| 'strech'
	| BaselinePosition
	| `${`${OverFlowPosition} ` | ''}${ContentPosition | 'left' | 'right'}`
	| 'legacy'
	| `legacy ${'left' | 'right' | 'center'}`;
export type JustifySelf =
	| 'auto'
	| 'normal'
	| 'strech'
	| BaselinePosition
	| `${`${OverFlowPosition} ` | ''}${ContentPosition | 'left' | 'right'}`;

type JustifyTacksParams =
	| 'normal'
	| ContentDistribution
	| `${`${OverFlowPosition} ` | ''}${ContentPosition | 'left' | 'right'}`;

export class JustifyTacks {
	constructor(params?: JustifyTacksParams[]) {
		this.value = params ?? [];
	}

	private readonly value: JustifyTacksParams[];

	public get cssValue(): string {
		return this.value.toString();
	}
}
