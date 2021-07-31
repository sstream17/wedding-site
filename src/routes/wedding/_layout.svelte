<script lang="ts">
	import Nav from "../../components/Nav.svelte";

	export let segment: string;
</script>

<Nav {segment} />

<main
	class:center-content={segment !== undefined}
	class:wider={segment === 'wedding_party'}
>
	<div class="flower-rail left">
		<div class="flowers top" />
		<div class="flowers middle" />
		<div class="flowers bottom" />
	</div>
	<slot />
	<div class="flower-rail right">
		<div class="flowers top" />
		<div class="flowers middle" />
		<div class="flowers bottom" />
	</div>
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

	.flower-rail {
		position: fixed;
		top: 0;
		height: 100%;
		width: 20em;
		z-index: -10;
		--x-offset: -4%;
	}

	.left {
		left: var(--x-offset);
		transform: scaleX(-100%);
	}

	.right {
		right: var(--x-offset);
	}

	.flowers {
		background-image: url(/pink_flower_petals.png);
		background-size: cover;
		height: 35%;
	}

	.top {
		transform: scaleY(-100%);
	}

	.middle {
		transform: translateX(25%);
	}

	.bottom {
		transform: rotate(12deg);
	}
</style>
