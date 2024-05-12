<script>
    import { user } from "../../stores/store.js";
    import { toast, Toaster } from "svelte-french-toast";
    import { navigate } from "svelte-navigator";
    import { Link } from "svelte-navigator";
</script>




{#if $user === null}
<h2>Hello</h2>
<p><a href="/login">Login</a> if you want any use of this application</p>
{/if}
{#if $user !== null}

<h2>Hello</h2>
<p>You can now access the <Link to="/user">User</Link> page, which is a protected Route.</p>

{/if}