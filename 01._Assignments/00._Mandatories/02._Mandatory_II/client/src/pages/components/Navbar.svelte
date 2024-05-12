<script>
  import { Router, Link, Route, navigate } from "svelte-navigator";
  import { toast, Toaster } from "svelte-french-toast";
  import Home from "../Home/Home.svelte";
  import Login from "../Login/Login.svelte";
  import Signup from "../Signup/Signup.svelte";
  import User from "../User/User.svelte";
  import PrivateRoute from "../../util/PrivateRoute.svelte";
  import { user } from "../../stores/store.js";
  
  
  async function signOut() {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      toast.success("Logged out successfully");
      $user = null;
      navigate("/");
    } else {
      toast.error("Failed to log out");
    }
  }
</script>

<Toaster />
<Router>
  <header>
    <h1>Mandatory II </h1>

    <nav>
      <Link to="/">Home</Link>

      {#if $user === null}
      <Link to="/login">Login</Link>
      
      <Link to="/signup">Signup</Link>
      
      {/if}
        
        {#if $user !== null}
      <Link to="/user">User</Link>
      <a href="/" on:click={signOut}>Logout</a>
      {/if}
    </nav>
  </header>
<main>

  <Route path="/">
    <Home />
  </Route>

  <Route path="login">
    <Login />
  </Route>

  <Route path="signup">
    <Signup />
  </Route>

  <!-- <Route path="user">
    <User />
  </Route> -->
  <PrivateRoute path="user" let:location>
    <User />
  </PrivateRoute>

</main>
</Router>


<style>

</style>