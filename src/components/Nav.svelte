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
</style>

<nav>
	<ul>
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
