<script lang="ts">
	import { setWithExpiry, getWithExpiry } from '$lib/storage';
	import { onMount } from 'svelte';
	import questions from './questions-secureum-101';
	import seedrandom from 'seedrandom';
	import Question from '../../question.svelte';

	let myrng = false;
	let nQuestion = 0;

	function shuffle(array: Array<any>) {
		let currentIndex = array.length,
			randomIndex;
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(myrng() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	let shuffleQuestions = [...questions];

	let mounted = false;
	onMount(() => {
		let seed = getWithExpiry('seed');
		if (!seed) {
			seed = (Math.random() * 1e18).toFixed(0);
			setWithExpiry('seed', seed, 1000 * 60 * 60 * 24);
		}
		myrng = seedrandom(seed);
		shuffleQuestions = [...shuffle(shuffleQuestions)];
		shuffleQuestions.forEach((e) => {
			e.options = [...shuffle(e.options)];
		});
		shuffleQuestions = [...shuffleQuestions];
		mounted = true;
	});

	$: q0 = shuffleQuestions[nQuestion];
</script>

{#if myrng}
	<div class="w-full pt-0 pb-16">
		<div class="flex flex-col items-center justify-center space-x-2">
			<h1 class="text-3xl font-bold text-blue-600 tracking-wider">Practice Mode - Secureum Bootcamp quiz #101</h1>
			<small>
				All answer have been taken from patrickd blog post: 
				<a target="_blank" rel="noreferrer" href="https://ventral.digital/posts/2021/10/17/secureum-bootcamp-ethereum-101-quiz">secureum-bootcamp-ethereum-101-quiz</a>
			</small>
		</div>
		<div class="bg-white container max-w-4xl mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
			{#if mounted}
				<small>Question {nQuestion + 1} of {shuffleQuestions.length}</small>
				<Question {q0} bind:nQuestion />
			{/if}
		</div>
	</div>
{/if}
