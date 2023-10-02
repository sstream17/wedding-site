<script lang="ts">
	import { base } from '$app/paths';
	import { page } from "$app/stores";

	import FlowerRail from "../../components/FlowerRail.svelte";
	import Nav from "../../components/Nav.svelte";

	$: pathName = $page.url.pathname;
	const homePath = `${base}/wedding`;
</script>

<Nav />

<div
	class="main"
	class:center-content={pathName !== homePath}
	class:wider={pathName === `${homePath}/wedding_party`}
>
	<FlowerRail side="left" />
	<slot />
	<FlowerRail side="right" />
</div>

<style>
	.center-content {
		max-width: 56em;
		padding: 2em;
		background-color: #102c46ee;
	}

	.wider {
		max-width: 70em !important;
	}

	.main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
