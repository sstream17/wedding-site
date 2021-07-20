<script lang="ts">
	let y: number;
</script>

<svelte:head>
	<title>Katherine & Spencer's Wedding</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<header class="zoom">
	<h1>We're getting married!</h1>
	<img
		src="./home/hero3_3x2.jpg"
		alt="Katie and Spencer"
		style="transform: translate(0, -{y / 10}%) scale({100 + y / 10}%);"
	/>
</header>

<div class="content" />

<style>
	.zoom {
		position: relative;
		overflow: hidden;
		padding-bottom: 25%;
	}

	.zoom img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
		z-index: -1;
	}

	h1 {
		font-weight: bolder;
		font-size: 4em;
		margin-top: 30vh;
		text-shadow: 1px 1px 4px black;
		z-index: 100;
	}

	.content {
		margin: 0 auto;
		max-width: 56em;
		padding: 2em;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2.5em;
			margin-top: 4vh;
		}
	}
</style>
