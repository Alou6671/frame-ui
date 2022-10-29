<script lang="ts">
	import Div0 from '$lib/div0.svelte';
	import type { Display } from '$lib/types';

	export let display: Display | undefined = undefined;
</script>

<Div0 {display} {...$$restProps}>
	<slot />
</Div0>
