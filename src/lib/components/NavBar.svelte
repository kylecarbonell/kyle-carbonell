<script lang="ts">
	let active = $state(Array(5).fill(false));

	function setActive(index: number) {
		active = Array(active.length).fill(false);
		active[index] = true;
	}
	setActive(0);
</script>

<div
	class="flex h-12 w-[32rem] items-center justify-between rounded-3xl bg-white p-3 shadow-[0px_3px_50px_rgba(0,0,0,0.3)]"
>
	<a
		href="#home"
		class="flex h-[2.6rem] w-[5.5rem] items-center justify-center rounded-3xl bg-white"
		style={active[0] && 'background-color : #F94706; color: white'}
		onclick={() => {
			setActive(0);
		}}>Home</a
	>
	<a
		href="#about"
		class="flex h-[2.6rem] w-[5.5rem] items-center justify-center rounded-3xl bg-white"
		style={active[1] && 'background-color : #F94706; color: white'}
		onclick={() => {
			setActive(1);
		}}>About</a
	>
	<a
		href="#stack"
		class="flex h-[2.6rem] w-[5.5rem] items-center justify-center rounded-3xl bg-white"
		style={active[2] && 'background-color : #F94706; color: white'}
		onclick={() => {
			setActive(2);
		}}>Stack</a
	>
	<a
		href="#projects"
		class="flex h-[2.6rem] w-[5.5rem] items-center justify-center rounded-3xl bg-white"
		style={active[3] && 'background-color : #F94706; color: white'}
		onclick={() => {
			setActive(3);
		}}>Projects</a
	>
	<!-- <a href="#contact" class="bg-white w-[5.5rem] h-[2.6rem] flex items-center justify-center rounded-3xl" style={active[4] && "background-color : #F94706; color: white"} onclick={() => {setActive(4)}}>Contact</a> -->
</div>
