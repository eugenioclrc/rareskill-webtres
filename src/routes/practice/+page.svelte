<script lang="ts">
	import { setWithExpiry, getWithExpiry } from '$lib/storage';
	import { onMount } from 'svelte';
	import questions from '../questions';
	import seedrandom from 'seedrandom';
	import Question from './question.svelte';

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

	onMount(() => {
		let seed = getWithExpiry('seed');
		if (!seed) {
			seed = (Math.random() * 1e18).toFixed(0);
			setWithExpiry('seed', seed, 1000 * 60 * 60 * 24);
		}
		myrng = seedrandom(seed);
		shuffleQuestions = shuffle(questions);
		shuffleQuestions.forEach((e) => {
			e.options = [...shuffle(e.options)];
		});
		shuffleQuestions = [...shuffleQuestions];
	});

	$: q0 = shuffleQuestions[nQuestion];
</script>

{#if myrng}
	<div class="w-full pt-0 pb-16">
		<div class="flex items-center justify-center space-x-2">
			<h1 class="text-3xl font-bold text-blue-600 tracking-wider">Practice Mode</h1>
		</div>
		<div class="bg-white container max-w-4xl mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
			<small>Question {nQuestion + 1} of {shuffleQuestions.length}</small>
			<Question {q0} bind:nQuestion />
		</div>
	</div>
{/if}
