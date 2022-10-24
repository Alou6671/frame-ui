<script lang="ts">
	import type { Display, Margin, Padding } from "$lib/types";

    export let display: Display | null = null;
    export let padding: Padding | null = null;
    export let margin: Margin | null = null;
</script>

<div style="
            {display ? `display: ${display};` : ""}
            {margin ? `margin: ${margin};` : ""}
            {padding ? `padding: ${padding};` : ""}
            ">
    <slot />
</div>