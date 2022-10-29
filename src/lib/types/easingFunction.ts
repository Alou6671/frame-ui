type CubicBezierEasingFunction =
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| `cubic-bezier(${number}, ${number}, ${number}, ${number})`;

type StepPosition = 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'sart' | 'end';
type StepEasingFunction = 'step-start' | 'step-end' | `steps(${number}${`, ${StepPosition}`})`;

type EasingFunction = 'linear' | CubicBezierEasingFunction | StepEasingFunction;

export default EasingFunction;
