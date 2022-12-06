<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Code from '$lib/code.svelte';
	import questions from '../questions';
	import seedrandom from 'seedrandom';

	let myrng = false;
	let won = false;
	let fail = false;
	let showAnswer = false;
	let nQuestion = 0;
	let nextQuestion = false;
	let showAnswerButton = false;

	let answerRadio = -1;
	let answerMulti: number[] = [];
	let wrongAnswer: number[] = [];
	let correctAnswer: number[] = [];

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
		myrng = seedrandom('');
		shuffleQuestions = shuffle(questions);
		shuffleQuestions.forEach((e) => {
			e.options = [...shuffle(e.options)];
		});
		shuffleQuestions = [...shuffleQuestions];
	});

	$: q0 = shuffleQuestions[nQuestion];

	function solve() {
		let answerOk = false;
		if (q0.type == 'radio') {
			answerOk = !!q0.options[answerRadio].check;
		} else {
			const expected = q0.options.map((e, i) => (e.check ? i : -1)).filter((e) => e > -1);
			const filteredArray = answerMulti.filter((value) => expected.includes(value));
			answerOk = expected.length == filteredArray.length;
		}
		fail = false;

		if (answerOk) {
			won = true;
			correctAnswer = q0.options.map((e, i) => (e.check ? i : -1)).filter((e) => e > -1);
			showAnswer = true;
			setTimeout(() => {
				nextQuestion = true;
			}, 1500);
		} else {
			showAnswerButton = true;
			setTimeout(() => {
				fail = true;
			}, 10);

			if (answerRadio != -1) {
				wrongAnswer = [answerRadio, ...wrongAnswer];
			} else {
				const expected = q0.options.map((e, i) => (e.check ? i : -1)).filter((e) => e > -1);

				wrongAnswer = [...answerMulti.filter((e) => !expected.includes(e)), ...wrongAnswer];
			}

			answerRadio = -1;
			answerMulti = [];
		}
	}

	function renderAnswer() {
		correctAnswer = q0.options.map((e, i) => (e.check ? i : -1)).filter((e) => e > -1);
		showAnswer = true;
	}

	function gotoNextQuestion() {
		won = false;
		fail = false;
		showAnswer = false;
		nQuestion += 1;
		nextQuestion = false;
		showAnswerButton = false;

		showAnswer = false;

		answerRadio = -1;
		answerMulti = [];
		wrongAnswer = [];

		correctAnswer = [];
	}
</script>

{#if won}
	<div
		style="position: absolute; left: 50%; top: 30%"
		use:confetti={{
			force: 0.7,
			stageWidth: window.innerWidth,
			stageHeight: window.innerHeight,
			colors: ['#ff3e00', '#40b3ff', '#676778']
		}}
	/>
{/if}

{#if myrng}
<div class="w-full pt-0 pb-16">
	<div class="flex items-center justify-center space-x-2">
		<h1 class="text-3xl font-bold text-blue-600 tracking-wider">Practice Mode</h1>
	</div>
	<div class="bg-white container max-w-4xl mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
		<small>Question {nQuestion + 1} of {shuffleQuestions.length}</small>
		<h2 class="text-2xl font-bold tracking-wide text-gray-800">
			{nQuestion + 1})
			{q0.question}
		</h2>
		{#if q0.code}
			<Code sourcecode={q0.code} />
		{/if}
		<fieldset class="block">
			<div class="mt-2 text-lg">
				{#each q0.options as o, i}
					<div class="border-t border-gray-200">
						<label class="inline-flex items-center">
							{#if q0.type == 'checkbox'}
								<input
									class="form-checkbox"
									type="checkbox"
									disabled={won}
									bind:group={answerMulti}
									value={i}
								/>
							{:else}
								<input
									class="form-radio"
									type="radio"
									disabled={won}
									bind:group={answerRadio}
									value={i}
								/>
							{/if}
							<span
								class="ml-2"
								class:text-red-700={wrongAnswer.includes(i)}
								class:text-green-700={correctAnswer.includes(i)}>{o.text}</span
							>
						</label>
					</div>
				{/each}
			</div>
		</fieldset>

		{#if showAnswer}
			<div class="flex items-center justify-between" in:fade>
				<div class="w-full h-[1px] bg-gray-300" />
				<span class="text-sm uppercase mx-6 text-gray-400">justification</span>
				<div class="w-full h-[1px] bg-gray-300" />
			</div>

			<div class="text-lg">
				<SvelteMarkdown source={q0.answer} />
				<small>Answered by {q0.by}</small>
			</div>
		{/if}
		<hr class="my-2" />

		<button
			type="button"
			class:primary-btn={!(answerRadio == -1 && answerMulti.length == 0)}
			class:secondary-btn={(answerRadio == -1 && answerMulti.length == 0) || won}
			class:shake={fail}
			disabled={(answerRadio == -1 && answerMulti.length == 0) || won}
			on:click={solve}
			class="base-btn">Submit</button
		>

		{#if showAnswerButton}
			<button
				type="button"
				on:click={renderAnswer}
				disabled={showAnswer}
				class:danger-btn={!showAnswer}
				class="base-btn">Show answer</button
			>
		{/if}

		{#if nextQuestion}
			<button type="button" on:click={gotoNextQuestion} class="base-btn success-btn"
				>Next Question</button
			>
		{/if}
	</div>
</div>
{/if}
<style>
	.base-btn {
		@apply transition-colors focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2;
	}
	.primary-btn {
		@apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300;
	}
	.danger-btn {
		@apply text-white bg-red-700 hover:bg-red-800 focus:ring-red-300;
	}
	.success-btn {
		@apply text-white bg-green-700 hover:bg-green-800 focus:ring-green-300;
	}
	.secondary-btn {
		@apply text-gray-800 bg-gray-200 hover:bg-gray-100  focus:ring-gray-300;
	}

	.shake {
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both normal;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}
		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}
		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}
		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
</style>
