<script lang="ts">
	import Nav from "../../components/Nav.svelte";

	export let segment: string;
</script>

<Nav {segment} />

<main
	class:center-content={segment !== undefined}
	class:wider={segment === 'wedding_party'}
>
	<div class="flowers top" />
	<slot />
	<div class="flowers bottom" />
</main>

<style>
	.center-content {
		max-width: 56em;
		padding: 2em;
	}

	.wider {
		max-width: 70em !important;
	}

	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.flowers {
		position: absolute;
		height: 200px;
		width: 400px;
		z-index: -10;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.top {
		top: 0;
		right: 0;
		background-image: url("/flowers_top.png");
		background-position-x: 100%;
	}

	.bottom {
		left: 0;
		bottom: 0;
		background-image: url("/flowers_bottom.png");
	}
</style>
