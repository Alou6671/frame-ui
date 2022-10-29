<script lang="ts">
	import { Animation } from '../lib/types';

	const anim: Animation = new Animation({
		name: 'example',
		duration: '4s',
		iterationCount: 'infinite'
	});
	console.log(anim.cssValue);
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

<div class="center" style="animation: {anim.cssValue};">
	<p>test</p>
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
