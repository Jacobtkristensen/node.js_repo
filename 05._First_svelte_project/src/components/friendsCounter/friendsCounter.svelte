<script>
    export let counter = 0;

    function alienateFriend(){
        counter--;
    }
</script>

<div>Friends Counter:</div>
<h1>{counter}</h1>
<button on:click={alienateFriend}>Alienate a friend</button>