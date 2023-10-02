<script lang="ts">
	import { page } from "$app/stores";

	import FlowerRail from "../../components/FlowerRail.svelte";
	import Nav from "../../components/Nav.svelte";

	$: pathName = $page.url.pathname;
</script>

<Nav />

<div
	class="main"
	class:center-content={pathName !== "/wedding"}
	class:wider={pathName === "/wedding/wedding_party"}
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
