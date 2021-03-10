<script>
	import Router from 'svelte-spa-router';
	import Home from './pages/home.svelte';
	import singup from './pages/home.svelte';


const routes = {
	"/": Home,
	"/signup" : singup 
};
</script>

<Router {routes}/>


