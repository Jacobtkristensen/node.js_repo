<script>
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte";
    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    function handleShowLove(childName) {
        console.log("💚 for " + childName +" by "+ parentName)
    }
    
    let treasureChest = ["😂","🤬","😇", "💩"];
    

    function handleTreasure(childName){
        treasureChest.pop();
        treasureChest = treasureChest;

        console.log(childName + " took a treasure")
        console.log(treasureChest)
    }
    function wipeFridge() {
        fridgeMessages.set([{ message: "Svelte Family Fridge"}]);
    }
</script>

<h1>{parentName}</h1>

<button on:click={wipeFridge}>Wipe Fridge</button>

<p >
{#each treasureChest as treasure}
{treasure}
{/each}
</p>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} takeTreasure={handleTreasure}/>
{/each}


