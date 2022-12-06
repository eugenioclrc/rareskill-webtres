<script>
	import { page } from '$app/stores';
	import UwU from '$lib/images/UwU_big.gif';

	let isOpen = false;
</script>

<!--		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	-->

<!-- isOpen: false -->
<header class="">
	<nav class="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
		<div class="flex items-center justify-between">
			<div class="text-center">
				<a
					class="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
					href="/"
				>
					<img src={UwU} class="h-16" alt="home uwu" /> UwU
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="flex lg:hidden">
				<button
					on:click={() => (isOpen = !isOpen)}
					type="button"
					class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
					aria-label="toggle menu"
				>
					{#if isOpen}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class="{isOpen
				? 'translate-x-0 opacity-100 '
				: 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent"
		>
			<div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
				<a
					class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
					href="https://github.com/eugenioclrc/rareskill-webtres">source code</a
				>
				<a
					class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
					href="https://webtres.club/">webtres.club/</a
				>
				<a
					class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
					href="/practice">Practice mode</a
				>
				<!--
                <a class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6" href="#">Pricing</a>
                <a class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6" href="#">Contact</a>
                <a class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6" href="#">FAQ</a>
								-->
			</div>

			<!--<a class="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:mt-0 lg:w-auto" href="#"> Contact Us </a>-->
		</div>
	</nav>
</header>
