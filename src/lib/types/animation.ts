import type EasingFunction from './easingFunction';
import type Time from './time';

type AnimationIterationCount = 'infinite' | number;
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';
type AnimationPlayState = 'running' | 'paused';
type AnimationTimingFunction = EasingFunction;
type AnimationTimeline = 'auto' | 'none' | string;

interface AnimationParams {
	name?: string;
	duration?: Time;
	timingFunction?: AnimationTimingFunction;
	delay?: Time;
	direction?: AnimationDirection;
	iterationCount?: AnimationIterationCount;
	fillMode?: AnimationFillMode;
	playState?: AnimationPlayState;
	timeline?: AnimationTimeline;
}

class Animation {
	constructor(params?: AnimationParams) {
		if (params != null) {
			this.name = params.name;
			this.duration = params.duration;
			this.timingFunction = params.timingFunction;
			this.delay = params.delay;
			this.direction = params.direction;
			this.iterationCount = params.iterationCount;
			this.fillMode = params.fillMode;
			(this.playState = params.playState), (this.timeline = params.timeline);
		}
	}

	private readonly name: string | undefined;
	private readonly duration: Time | undefined;
	private readonly timingFunction: AnimationTimingFunction | undefined;
	private readonly delay: Time | undefined;
	private readonly direction: AnimationDirection | undefined;
	private readonly iterationCount: AnimationIterationCount | undefined;
	private readonly fillMode: AnimationFillMode | undefined;
	private readonly playState: AnimationPlayState | undefined;
	private readonly timeline: AnimationTimeline | undefined;

	public get cssValue(): string {
		return [
			this.duration,
			this.timingFunction,
			this.delay,
			this.iterationCount,
			this.direction,
			this.fillMode,
			this.playState,
			this.name
		]
			.filter((elem) => elem != undefined)
			.toString()
			.replaceAll(',', ' ');
	}
}
export default Animation;
