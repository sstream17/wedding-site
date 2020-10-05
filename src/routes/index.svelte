<style>
	* {
		text-align: center;
	}

	h1 {
		margin: 0 auto;
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}

	.button {
		text-decoration: none;
		display: inline-block;
		padding: 1rem;
		border-radius: 0.25rem;
		background: rgb(255, 192, 203);
		color: #202020;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Katherine & Spencer</title>
</svelte:head>

<h1>We're getting married!</h1>

<h2>
	Visit our site for to see details about the wedding, browse the registry,
	and RSVP
</h2>

<div class="button-container">
	<a href="/wedding" class="button" role="button">Katherine & Spencer's
		Wedding</a>
</div>
