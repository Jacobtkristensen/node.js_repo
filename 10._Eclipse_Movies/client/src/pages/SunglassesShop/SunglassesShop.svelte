<script>
    import { navigate } from "svelte-navigator";
    import { onMount } from "svelte";
    import { BASE_URL } from "../../Stores/generalStore";
    import { fetchGet, fetchPost } from "../../util/api";
    
    onMount(async() => {
        const customer = {
            name: "Gleb"
        };
        await fetchPost($BASE_URL + "/api/customers", customer);

        const result = await fetchGet($BASE_URL + "/api/customers");
        console.log(result);
    });
    



    function completeCheckout() {
        navigate('/');
    }
</script>

<h1>Sunglasses Shop</h1>

<button on:click={completeCheckout}>Checkout</button>