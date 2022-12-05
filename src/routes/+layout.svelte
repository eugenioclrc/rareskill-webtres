<script>
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<main class="bg-gray-200 w-full min-h-screen">
	<Header />
	<slot />
</main>