<script lang="ts">
	export let segment: string;

	const mediumWidth = 768;

	let collapsed: boolean = true;
	let width: number;
	$: collapsible = width <= mediumWidth;

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

	.hamburger {
		float: left;
		cursor: pointer;
		display: none;
		z-index: 11;
	}

	@media screen and (max-width: 768px) {
		.hamburger {
			display: block;
		}

		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: baseline;
		}

		ul {
			display: none;
		}

		ul.collapsible {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
			width: 100%;
			height: 100%;
			background-color: #102c46;
		}

		ul.collapsible > li {
			display: block;
		}

		ul.collapsible.show {
			display: block;
		}

		.left {
			position: static;
			margin: inherit;
		}

		.right {
			position: static;
			margin: inherit;
		}
	}
</style>

<svelte:window bind:innerWidth={width} />

<nav>
	<div class="title">
		<div
			class="hamburger"
			role="button"
			on:click={() => (collapsed = !collapsed)}>
			menu
		</div>
		<a class="title-center" href="/wedding">
			<h1>Katherine & Spencer</h1>
		</a>
		<div />
	</div>
	<ul class:collapsible class:show={!collapsed}>
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
						on:click={() => (collapsed = !collapsed)}
						aria-current={segment === undefined ? 'page' : undefined}
						href="/wedding">{page.title}</a>
				</li>
			{:else}
				<li>
					<a
						on:click={() => (collapsed = !collapsed)}
						aria-current={segment === convertToSlug(page.title) ? 'page' : undefined}
						href="/wedding/{convertToSlug(page.title)}">{page.title}</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
