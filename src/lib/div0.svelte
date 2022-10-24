<script lang="ts">
	import type { AccentColor, Display } from "./types";

    export let accentColor: AccentColor | null;
    export let display: Display | null = null;
</script>

<div style="
            {accentColor ? `accent-color: {accentColor};` : ""}
            {display ? `display: ${display};` : ""}
            ">

</div>