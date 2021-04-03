<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status} &nbsp; :(</h1> 
<h2>{error.message}</h2>

<div>
<p>La page que vous souhaitez n'existe pas  </p> <a href="index" >retourner à l'accueil ?</a>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
