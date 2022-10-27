<script lang="ts">
	import Div0 from '$lib/div0.svelte';
	import type { Display, Margin, Padding } from '$lib/types';

	export let display: Display | null = null;
	export let padding: Padding | null = null;
	export let margin: Margin | null = null;
</script>

<Div0 {display} {padding} {margin} {...$$restProps}>
	<slot />
</Div0>
