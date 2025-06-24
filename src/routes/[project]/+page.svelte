<script lang="ts">
	import { page } from '$app/state';
	import { projects } from '$lib/data/project';

	const link = page.params.project;
	const project = $derived(projects[link]);
</script>

<div class="h-full px-10 pt-30">
	<div class="flex w-full items-center justify-center space-x-4 pb-16">
		{#each project.gallery! as gallery}
			<img
				src={gallery}
				alt="Avatar"
				class="object-fit h-auto w-1/4 rounded-3xl border-16 border-[#f7f8ff]"
			/>
		{/each}
	</div>
	<div class="flex h-auto justify-between">
		<div class="w-1/4">
			<div class="flex justify-between">
				<h4 class="w-1/4">Category:</h4>
				<h4 class="flex w-3/4 items-end justify-end">{project.type}</h4>
			</div>
			<div class="flex justify-between">
				<h4 class="w-1/4">Organization:</h4>
				<h4 class="flex w-3/4 items-end justify-end">{project.organization}</h4>
			</div>
			<div class="flex justify-between">
				<h4 class="w-1/4">Frontend:</h4>
				<h4 class="flex w-3/4 items-end justify-end">{project.frontend_stack?.join(', ')}</h4>
			</div>
			<div class="flex justify-between">
				<h4 class="w-1/4">Backend:</h4>
				<h4 class="flex w-3/4 items-end justify-end">{project.backend_stack?.join(', ')}</h4>
			</div>

			<div class="mt-16">
				{#if project.github}
					<button
						class="h-12 w-full rounded-3xl border-5 border-[#f7f8ff] bg-white"
						onclick={() => window.open(project.github, '_blank')}>Github</button
					>
				{/if}
				{#if project.url}
					<button
						class="mt-2 h-12 w-full rounded-3xl border-5 border-[#f7f8ff] bg-orange-600"
						onclick={() => window.open(project.url, '_blank')}>Preview</button
					>
				{/if}
			</div>
		</div>
		<h2 class="flex w-1/2 justify-end">{project.description}</h2>
	</div>
</div>
