<script lang="ts">
	import type {
		AccentColor,
		Animation,
		All,
		AlignContent,
		AlignItems,
		AlignSelft,
		AlignTracks,
		Cursor,
		Display,
		JustifyContent,
		JustifyItems,
		JustifySelf,
		JustifyTacks,
		Size,
		ZIndex
	} from './types';

	export let accentColor: AccentColor | undefined = undefined;
	export let animation: Animation | undefined = undefined;
	export let all: All | undefined = undefined;
	export let alignContent: AlignContent | undefined = undefined;
	export let alignItems: AlignItems | undefined = undefined;
	export let alignSelf: AlignSelft | undefined = undefined;
	export let alignTracks: AlignTracks | undefined = undefined;
	export let bottom: Size | undefined = undefined;
	export let cursor: Cursor | undefined = undefined;
	export let display: Display | undefined = undefined;
	export let gap: Size | undefined = undefined;
	export let height: Size | undefined = undefined;
	export let justifyContent: JustifyContent | undefined = undefined;
	export let justifyItems: JustifyItems | undefined = undefined;
	export let justifySelf: JustifySelf | undefined = undefined;
	export let justifyTacks: JustifyTacks | undefined = undefined;
	export let left: Size | undefined = undefined;
	export let right: Size | undefined = undefined;
	export let top: Size | undefined = undefined;
	export let width: Size | undefined = undefined;
	export let zIndex: ZIndex | undefined = undefined;
</script>

<div
	style="
            {accentColor ? `accent-color: ${accentColor};` : ''}
			{animation ? `animation: ${animation.cssValue};` : ''}
			{all ? `all: ${all};` : ''}
			{alignContent ? `align-content: ${alignContent};` : ''}
			{alignItems ? `align-items: ${alignItems};` : ''}
			{alignSelf ? `align-self: ${alignSelf};` : ''}
			{alignTracks ? `aling-tracks: ${alignTracks};` : ''}
			{bottom ? `bottom: ${bottom};` : ''}
			{cursor ? `cursor: ${cursor};` : ''}
            {display ? `display: ${display};` : ''}
			{gap ? `gap: ${gap};` : ''}
			{height ? `height: ${height};` : ''}
			{justifyContent ? `justify-content: ${justifyContent};` : ''}
			{justifyItems ? `justify-items: ${justifyItems};` : ''}
			{justifySelf ? `justify-self: ${justifySelf};` : ''}
			{justifyTacks ? `justify-content: ${justifyTacks};` : ''}
			{left ? `left: ${left};` : ''}
			{right ? `right: ${right};` : ''}
			{top ? `top: ${top};` : ''}
			{width ? `width: ${width};` : ''}
			{zIndex ? `z-index: ${zIndex};` : ''}
            "
	{...$$restProps}
>
	<slot />
</div>
