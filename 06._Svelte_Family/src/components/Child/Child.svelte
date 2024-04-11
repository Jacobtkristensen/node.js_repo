<script>
export let child;
export let onShowLove;
export let takeTreasure;

import { fridgeMessages } from "../../stores/fridgeMessageStore";

let fridgeMessageInputValue = ""; 

function submitFridgeMessage() {

    const newFridgeMessage = {
        creator: child.name,
        message: fridgeMessageInputValue
   };

    //fridgeMessages.set([...$fridgeMessages, newFridgeMessage])
    fridgeMessages.update((fridgeMessageStoreValue) => {
        fridgeMessageStoreValue.push(newFridgeMessage);
        return fridgeMessageStoreValue;
    })
    
    fridgeMessageInputValue = "";
}

</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
    >
<h2>{child.name}</h2>

<label for="fridgeMessage">Write a Fridge Message</label>
<input type="text" name="fridgeMessage" placeholder="Fridge Message"
    bind:value={fridgeMessageInputValue}
>
<br>
<button on:click={submitFridgeMessage}>Write Fridge Message</button>
<br>
<br>
<button on:click={() => onShowLove(child.name)}>Show Love 💚</button>
<button on:click={() => takeTreasure(child.name)}>Take Treasure🤫</button>

</div>


<style>
    .is-girl {
        background-color: pink;
        color: black;
    }
    .is-boy {
        background-color: blue;
    }
    .grey-sheep {
        border: 0.5em solid grey;
    }
    .black-sheep {
        border: 0.5em solid yellow;
    }
    .not-a-sheep {
        border: 0.5em solid aqua;
        
    }
</style>