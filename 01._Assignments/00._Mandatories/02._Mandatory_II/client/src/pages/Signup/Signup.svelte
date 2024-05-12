<script>
  import { fetchGet, fetchPost } from "../../util/api";
  import { BASE_URL } from "../../stores/store.js";
  import { navigate } from "svelte-navigator";
  import { user } from "../../stores/store.js";
  import { toast, Toaster } from "svelte-french-toast";

  let email = "";
  let password = "";
  let confirmPassword = "";

  async function signup(email, password) {
    try {
      const response = await fetchPost($BASE_URL + "/api/signup", { email, password });

      if (response.data === "Signup successful") {
        toast.success("Signup successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  }

  async function handleSignup(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    await signup(email, password);
  }
</script>

<Toaster />
<h2>Signup here to access the application</h2>

<form on:submit={handleSignup}>
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <input type="password" bind:value={confirmPassword} placeholder="Confirm Password" required />
  <button type="submit">Signup</button>
</form>

<style>
  button {
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
  }

  button:hover {
    background-color: #218838;
  }
</style>
