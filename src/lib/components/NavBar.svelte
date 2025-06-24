<script lang="ts">
    let active = $state(Array(5).fill(false))

    function setActive(index : number){
        active = Array(active.length).fill(false)
        active[index] = true
    }
    setActive(0)
</script>

<div class="w-[32rem] h-12 bg-white rounded-3xl shadow-[0px_3px_50px_rgba(0,0,0,0.3)] p-3 flex items-center justify-between">
    <a href="#home" class="bg-white w-[5.5rem] h-[2.6rem] flex items-center justify-center rounded-3xl" style={active[0] && "background-color : #F94706; color: white"} onclick={() => {setActive(0)}}>Home</a>
    <a href="#about" class="bg-white w-[5.5rem] h-[2.6rem] flex items-center justify-center rounded-3xl" style={active[1] && "background-color : #F94706; color: white"} onclick={() => {setActive(1)}}>About</a>
    <a href="#stack" class="bg-white w-[5.5rem] h-[2.6rem] flex items-center justify-center rounded-3xl" style={active[2] && "background-color : #F94706; color: white"} onclick={() => {setActive(2)}}>Stack</a>
    <a href="#projects" class="bg-white w-[5.5rem] h-[2.6rem] flex items-center justify-center rounded-3xl" style={active[3] && "background-color : #F94706; color: white"} onclick={() => {setActive(3)}}>Projects</a>
    <a href="#contact" class="bg-white w-[5.5rem] h-[2.6rem] flex items-center justify-center rounded-3xl" style={active[4] && "background-color : #F94706; color: white"} onclick={() => {setActive(4)}}>Contact</a>
</div>