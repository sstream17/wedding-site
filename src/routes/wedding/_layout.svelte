<script lang="ts">
	import Nav from "../../components/Nav.svelte";

	export let segment: string;
</script>

<Nav {segment} />

<main class:center-content={segment !== undefined}>
	<slot />
</main>

<style>
	.center-content {
		max-width: 56em;
		padding: 2em;
	}

	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
