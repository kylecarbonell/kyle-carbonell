<script lang="ts">
	import { page } from '$app/state';
	import NavBar from '$lib/components/NavBar.svelte';
	import rightArrow from '$lib/assets/rightArrow.png';
	import '../app.css';
	let { children } = $props();

	$inspect(page.url.pathname);
</script>

<div class="flex h-screen w-screen flex-col">
	{#if page.url.pathname.endsWith('/')}
		<div class={`fixed z-10 flex h-[4.5rem] w-full items-center justify-center `}>
			<NavBar></NavBar>
		</div>
	{:else}
		<a
			class={`fixed z-10 flex h-[4.5rem] w-full items-center justify-start pl-4`}
			href="/#projects"
		>
			<div
				class="flex h-12 w-auto items-center justify-between rounded-3xl bg-white p-3 shadow-[0px_3px_50px_rgba(0,0,0,0.3)]"
			>
				<img src={rightArrow} class="h-full" />
				<h1>Back To Projects</h1>
			</div>
		</a>
	{/if}
	<div class="h-full w-screen">
		<!-- <div class="pt-30"> -->
		{@render children()}
		<!-- </div> -->
	</div>
</div>
