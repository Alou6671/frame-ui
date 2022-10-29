<script lang="ts">
	import type {
		AccentColor,
		AlignContent,
		AlignItems,
		AlignSelft,
		Cursor,
		Display,
		Size
	} from './types';

	export let accentColor: AccentColor | undefined = undefined;
	export let alignContent: AlignContent | undefined = undefined;
	export let alignItems: AlignItems | undefined = undefined;
	export let alignSelf: AlignSelft | undefined = undefined;
	export let cursor: Cursor | undefined = undefined;
	export let display: Display | undefined = undefined;
	export let gap: Size | undefined = undefined;
	export let left: Size | undefined = undefined;
	export let right: Size | undefined = undefined;
	export let top: Size | undefined = undefined;
	export let bottom: Size | undefined = undefined;
</script>

<div
	style="
            {accentColor ? `accent-color: ${accentColor};` : ''}
			{alignContent ? `align-content: ${alignContent};` : ''}
			{alignItems ? `align-items: ${alignItems};` : ''}
			{cursor ? `cursor: ${cursor};` : ''}
			{bottom ? `bottom: ${bottom};` : ''}
            {display ? `display: ${display};` : ''}
			{gap ? `gap: ${gap};` : ''}
			{left ? `left: ${left};` : ''}
			{right ? `right: ${right};` : ''}
			{top ? `top: ${top};` : ''}
			{alignSelf ? `align-self: ${alignSelf};` : ''}
            "
	{...$$restProps}
>
	<slot />
</div>
