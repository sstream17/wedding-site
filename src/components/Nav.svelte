<script lang="ts">
	export let segment: string;
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
</style>

<nav>
	<a class="title-center" href="/wedding">
		<h1>Katherine & Spencer</h1>
	</a>
	<ul>
		<li>
			<div class="left">November 3, 2022</div>
		</li>
		<li>
			<div class="right">York, NE</div>
		</li>
		<li>
			<a
				aria-current={segment === undefined ? 'page' : undefined}
				href="/wedding">Home</a>
		</li>
		<li>
			<a
				aria-current={segment === 'schedule' ? 'page' : undefined}
				href="/wedding/schedule">Schedule</a>
		</li>
		<li>
			<a
				aria-current={segment === 'travel' ? 'page' : undefined}
				href="/wedding/travel">Travel</a>
		</li>
		<li>
			<a
				aria-current={segment === 'photos' ? 'page' : undefined}
				href="/wedding/photos">Photos</a>
		</li>
		<li>
			<a
				aria-current={segment === 'wedding_party' ? 'page' : undefined}
				href="/wedding/wedding_party">Wedding Party</a>
		</li>
		<li>
			<a
				aria-current={segment === 'registry' ? 'page' : undefined}
				href="/wedding/registry">Registry</a>
		</li>
		<li>
			<a
				aria-current={segment === 'faq' ? 'page' : undefined}
				href="/wedding/faq">FAQ</a>
		</li>
		<li>
			<a
				aria-current={segment === 'rsvp' ? 'page' : undefined}
				href="/wedding/rsvp">RSVP</a>
		</li>
	</ul>
</nav>
