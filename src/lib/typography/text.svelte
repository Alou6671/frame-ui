<script lang="ts">
	import type { FontWeight, Margin, LineHeight } from "$lib/types";


    export let margin: Margin = "0px";
    export let fontFamily: string = "'Poppins', sans-serif";
    export let fontWeight: FontWeight = 300;
    export let lineHeight: LineHeight = 1.5;
</script>

<p style="
            --frame-text-margin: {margin};
            --frame-font-familly: {fontFamily};
            --frame-font-weight: {fontWeight};
            --frame-font-line-height: {lineHeight};

            margin: var(--frame-text-margin);
            font-family: var(--frame-font-familly);
            font-weight: var(--frame-font-weight);
            line-height: 1.5;
        ">
    <slot />
</p>
