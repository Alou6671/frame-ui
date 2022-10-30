<script lang="ts">
	import { Div } from '$lib';
	import { Animation } from '../lib/types';

	const anim: Animation = new Animation({
		name: 'example',
		duration: '4s',
		iterationCount: 'infinite'
	});
</script>

<svelte:head>
	<style>
		@keyframes example {
			from {
				background-color: red;
			}
			to {
				background-color: yellow;
			}
		}
	</style>
</svelte:head>

<div style="display: flex; flex-direction: row;">
	<Div justifyContent="center" display="flex" width="100px" height="100px" animation={anim}>
		<p>test</p>
	</Div>

	<div class="center" style="animation: {anim.cssValue};">
		<p>test</p>
	</div>
</div>

<style>
	.center {
		display: flex;
		justify-content: center;
		width: 100px;
		height: 100px;
		background-color: red;
	}
</style>
