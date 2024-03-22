<script>
  import Greeter from "./components/Greeter/greeter.svelte";
  import FriendsCounter from "./components/friendsCounter/friendsCounter.svelte";
</script>

<main>
<Greeter name="Alfred"></Greeter>

<FriendsCounter counter={3} ></FriendsCounter>
</main>
