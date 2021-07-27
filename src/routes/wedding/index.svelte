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

<div class="content">
	<h2 class="title">Katherine Wiles<br />+<br />Spencer Stream</h2>
	<h3 class="title">June 18, 2022 in York, Nebraska</h3>
	<br />

	<h2>How we met.</h2>
	<h3>June 13, 2014</h3>
	<p>We met on a high school band trip in Hawaii.</p>
	<br />

	<h2>The proposal.</h2>
	<h3>December 16, 2020</h3>
	<p>
		We drove around town looking at Christmas lights and made a stop near a
		pond to get a closer look.
	</p>
</div>

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

	h2.title {
		font-size: 2.5em;
	}

	h3.title {
		font-size: 1.5em;
	}

	.content {
		margin: 0 auto;
		max-width: 56em;
		padding: 2em;
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2.5em;
			margin-top: 4vh;
		}

		h2.title {
			font-size: 2em;
		}

		h3.title {
			font-size: 1.25em;
		}
	}
</style>
