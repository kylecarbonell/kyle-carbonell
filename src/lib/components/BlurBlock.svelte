<script lang="ts">
	import type { Snippet } from "svelte";



    const {children, width, height} : {children : Snippet<[]> , width : string, height : string} = $props()
</script>

<div class="bg-gray-300/80 w-[57rem] h-[18.75rem] flex items-center justify-center rounded-3xl absolute backdrop-blur-xs">
    <div class="bg-white w-[53.25rem] h-[15rem] flex flex-col items-center justify-center rounded-3xl p-10">
        {@render children()}
    </div>
    
</div>