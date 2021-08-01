<script lang="ts">
	import Seo from "../../components/SEO.svelte";

	let y: number;
</script>

<Seo
	description="We're getting married! Join Katherine Wiles and Spencer Stream for their special day."
/>

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
	<p>
		Although we spent an entire year in high school without knowing each
		other, we only met the next summer on a band trip to Hawaii. Students
		were required to go out in groups of 5 or more, and Spencer tagged along
		with my group. We ended up having so much fun and spent the rest of the
		trip together. Our favorite memory was the luau and riding back on the
		bus together.
	</p>
	<br />

	<h2>The proposal.</h2>
	<h3>December 16, 2020</h3>
	<p>
		Spencer left early from work to pick up the ring after it arrived at the
		store. When I got home from my hair appointment and noticed Spencer was
		not there, I texted to ask where he was. He replied, "I'm getting gas."
		When Spencer got home, he asked if I wanted to go out for dinner and
		look at Christmas lights. We drove around town looking at lights and
		made a stop near a pond to get a closer look. It was here where Spencer
		got down on one knee and asked if I would marry him!
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
		z-index: 10;
	}

	h1 {
		position: relative;
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
		box-sizing: border-box;
		background-color: #102c46cc;
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
