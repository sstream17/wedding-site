<script lang="ts">
	import HamburgerButton from "./HamburgerButton.svelte";

	export let segment: string;

	const mediumWidth: number = 768;

	let collapsed: boolean = true;
	let transitionable: boolean = false;
	let width: number;
	$: collapsible = width <= mediumWidth;

	$: if (width > mediumWidth) {
		collapsed = true;
		transitionable = false;
	}

	const pages = [
		{ title: "Home" },
		{ title: "Schedule" },
		{ title: "Travel" },
		{ title: "Photos" },
		{ title: "Wedding Party" },
		{ title: "Registry" },
		{ title: "FAQ" },
		{ title: "RSVP" },
	];

	const convertToSlug = (value: string) => {
		return value
			.replace(/\W+/g, " ")
			.split(/ /)
			.map((word) => word.toLowerCase())
			.join("_");
	};

	const toggleHamburgerMenu = () => {
		collapsed = !collapsed;
		transitionable = true;
	};
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 192, 203, 0.1);
		font-weight: 300;
		padding: 0 1em;
		text-align: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: "";
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 192, 203);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	.left {
		position: absolute;
		top: 0;
		left: 0;
		margin: 1rem;
	}

	.right {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;
	}

	.title-center {
		display: inline-block;
		white-space: nowrap;
		margin: 0;
	}

	.title-center > * {
		margin: 0;
	}

	@media screen and (max-width: 768px) {
		nav {
			padding: 0 0.25rem;
		}

		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		ul.transitionable {
			transition: opacity 0.75s ease-in-out;
		}

		ul {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
			pointer-events: none;
			width: 100%;
			height: 100%;
			opacity: 0;
			background: #102C46;
		}

		@supports (
			(-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
		) {
			ul {
				background: #102C46B2;
				backdrop-filter: blur(10px);
				-webkit-backdrop-filter: blur(10px);
			}
		}

		ul.collapsible {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		ul.collapsible.show {
			opacity: 100;
			pointer-events: auto;
		}

		.left {
			position: static;
			margin: inherit;
		}

		.right {
			position: static;
			margin: inherit;
			margin-bottom: 3rem;
		}
	}
</style>

<svelte:window bind:innerWidth={width} />

<nav>
	<div class="title">
		<HamburgerButton onClick={toggleHamburgerMenu} {collapsed} />
		<a class="title-center" href=".">
			<h1>Katherine & Spencer</h1>
		</a>
		<div />
	</div>
	<ul class:collapsible class:show={!collapsed} class:transitionable>
		<li>
			<div class="left">November 3, 2022</div>
		</li>
		<li>
			<div class="right">York, NE</div>
		</li>
		{#each pages as page}
			{#if page.title === 'Home'}
				<li>
					<a
						on:click={() => (collapsed = true)}
						aria-current={segment === undefined ? 'page' : undefined}
						href=".">{page.title}</a>
				</li>
			{:else}
				<li>
					<a
						on:click={() => (collapsed = true)}
						aria-current={segment === convertToSlug(page.title) ? 'page' : undefined}
						href="{convertToSlug(page.title)}">{page.title}</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
