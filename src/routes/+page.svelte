<script lang="ts">
	import { flip } from 'svelte/animate';
	import profPic from '$lib/assets/profile_pic.jpg';
	import leftShapes from '$lib/assets/left_shapes.png';
	import rightShapes from '$lib/assets/right_shapes.png';
	import square from '$lib/assets/square.png';
	import triangle from '$lib/assets/triangle.png';

	//Website Images
	import codeninja from '$lib/assets/projects/CodeninjaMain.png';

	//Tech stack images
	import sv from '$lib/assets/icons/svelte.svg';
	import docker from '$lib/assets/icons/docker.svg';
	import javascript from '$lib/assets/icons/javascript.svg';
	import psg from '$lib/assets/icons/postgres.svg';
	import react from '$lib/assets/icons/react.svg';
	import python from '$lib/assets/icons/python.svg';
	import postman from '$lib/assets/icons/postman.svg';
	import css from '$lib/assets/icons/css.svg';
	import github from '$lib/assets/icons/github.svg';
	import { projects } from '$lib/data/project';

	type Stack = {
		logo: string;
		name: string;
	};

	const techstack: Stack[] = [
		{
			logo: sv,
			name: 'Svelte'
		},
		{
			logo: docker,
			name: 'Docker'
		},
		{
			logo: javascript,
			name: 'Javascript'
		},
		{
			logo: psg,
			name: 'Postgresql'
		},
		{
			logo: react,
			name: 'React'
		},
		{
			logo: python,
			name: 'Python'
		},
		{
			logo: postman,
			name: 'Postman'
		},
		{
			logo: css,
			name: 'CSS'
		},
		{
			logo: github,
			name: 'Github'
		}
	];
</script>

<div id="home" class="flex h-full justify-center bg-white">
	<img src={leftShapes} alt="Left_shapes" class="h-[90%] pt-15" />

	<div class="flex flex-col items-center pt-30">
		<h1 class="text-5xl">Hi, I'm Kyle!</h1>
		<h1 class="pb-10">Web Development Experience</h1>

		<div class="perspective-1000 group h-[17.5rem] w-[17.5rem] rounded-3xl">
			<div class="shake relative h-full w-full rounded-3xl text-center">
				<div class="absolute inset-0 rounded-3xl bg-gray-300 backface-hidden">
					<img src={profPic} alt="Avatar" class=" h-full w-full rounded-3xl object-cover" />
				</div>
			</div>
		</div>

		<button class="mt-10 h-21 w-[21.25rem] rounded-full border border-8 border-[#F3F3FB]"
			>Contact Me</button
		>
	</div>
	<img src={rightShapes} alt="Right_shapes" class="h-[90%] pt-15" />
</div>

<div id="about" class="flex h-screen flex-col items-center justify-center bg-white pt-30">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-3xl">About Me</h1>
		<div class="flex">
			<img src={square} />
			<img src={triangle} />
		</div>
	</div>
	<div
		class="absolute flex h-[18.75rem] w-[57rem] items-center justify-center rounded-3xl bg-gray-300/80 backdrop-blur-xs"
	>
		<div
			class="flex h-[15rem] w-[53.25rem] flex-col items-center justify-center rounded-3xl bg-white p-10"
		>
			<h1 class="pb-10 text-center text-black">
				Hi! I’m Kyle Carbonell, an undergraduate Computer Science student at UC Davis with a passion
				for building thoughtful, user-centered digital experiences. I’m especially interested in
				full-stack web development, database architecture, and crafting scalable backend systems
				that power real-world applications. Over the past few years, I’ve worked on a variety of
				projects—from campus-wide utility apps to admin dashboards—honing my skills in React,
				Svelte, TypeScript, PostgreSQL, and Cloud infrastructure. I enjoy turning abstract ideas
				into clean, efficient, and maintainable code, and I’m constantly learning new tools to
				improve both the developer and user experience.
			</h1>
			<h1 class="text-center text-black">
				I am always open to feed back and connections so please feel free to reach out!!
			</h1>
		</div>
	</div>
</div>

<div id="stack" class="flex h-auto flex-col items-center justify-center space-y-10 bg-white pt-30">
	<h1 class="text-3xl">Tech Stack</h1>
	<div class="grid h-full w-full grid-cols-3 grid-rows-3 place-items-center space-y-6">
		{#each techstack as stack}
			<div
				class="flex h-[25rem] w-[18rem] items-center justify-center rounded-3xl bg-gray-300/80 backdrop-blur-xs"
			>
				<div
					class="flex h-[22rem] w-[15rem] flex-col items-center justify-center rounded-3xl bg-white p-10"
				>
					<div class="pb-10 text-center text-black">
						<img src={stack.logo} class="pb-6" />
						<h1 class="text-xl">{stack.name}</h1>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div
	id="projects"
	class="flex h-auto flex-col items-center justify-center space-y-16 bg-white pt-30"
>
	<h1 class="text-3xl">Projects</h1>
	<div class="grid h-full w-full grid-cols-2 grid-rows-3 place-items-center items-start space-y-14">
		{#each Object.values(projects) as project}
			<div
				class="flex h-[25rem] w-[45rem] items-center justify-center rounded-3xl backdrop-blur-xs"
			>
				<a
					class="flex h-[20rem] w-auto flex-col justify-center space-y-2 rounded-3xl"
					href={project.href}
				>
					<img
						src={project.image}
						alt="Avatar"
						class="h-full w-full rounded-3xl border-16 border-[#f7f8ff]"
					/>
					<div>
						<h1 class="indent-2 text-xs text-[#4D4D4D]">{project.type}</h1>
						<h1 class="indent-2 text-3xl">{project.title}</h1>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<div id="contact" class="h-full bg-white">
	<h1>home</h1>
</div>

<style>
	.shake:hover {
		/* Start the shake animation and make the animation last for 0.5 seconds */
		animation: shake 0.5s;

		/* When the animation is finished, start again */
		animation-iteration-count: infinite;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}

	.flip-card {
		/* border: 1px solid #f1f1f1; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;

		border-radius: 100%;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.flip-card-front {
		color: black;
	}

	/* Style the back side */
	.flip-card-back {
		color: black;
		transform: rotateY(180deg);
	}
</style>
