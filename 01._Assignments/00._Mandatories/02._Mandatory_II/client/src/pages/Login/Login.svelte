<script>
    import { fetchGet, fetchPost } from "../../util/api";
    import { BASE_URL } from "../../stores/store.js";
    import { navigate } from "svelte-navigator";
    import { user } from "../../stores/store.js";
    import { toast, Toaster } from "svelte-french-toast";
    
    let email;
    let password;

    async function handleLogin(event) {
      event.preventDefault(); 

      try {
        const status = await fetchPost($BASE_URL + "/api/login", { email, password });
        
        if (status.data.email !== undefined) {
          user.set(true);
          console.log("Login successful");
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Invalid email or password");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    }


 
</script>


<h2>
    Login here to access the application
</h2>
<Toaster />
<form on:submit={handleLogin}>
    <input type="email" bind:value={email} placeholder="Email" required>
    <input type="password" bind:value={password} placeholder="Password" required>
    <button type="submit">Login</button>
</form>



<style>

    button {
      cursor: pointer;
      background-color: #0056b3;
      color: white;
      border: none;
    }
    
    button:hover {
      background-color: #004494;
    }
    </style>