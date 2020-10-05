<script lang="ts">
    export let segment: string;
</script>

<style>
	.main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main class:main={segment === undefined}>
	<slot></slot>
</main>