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
		src="./home/hero_3x2.jpg"
		alt="Katie and Spencer"
		style="transform: translate(0, -{y / 10}%) scale({100 + y / 10}%);"
	/>
</header>

<div class="content">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
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
		font-size: 2.5em;
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
			margin-top: 10vh;
		}
	}
</style>
