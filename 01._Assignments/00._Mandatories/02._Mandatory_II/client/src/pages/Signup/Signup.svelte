<script>
    import { fetchGet, fetchPost } from "../../util/api";
    import toast from "svelte-french-toast";
    
    let email = '';
    let password = '';
    let confirmPassword = '';

    function handleSignup() {
        if (password !== confirmPassword) {
            // Use a toast library to display the error message
            toast.error("Passwords do not match!");
            return;
        }
        console.log("Signup Attempt:", {email, password });
        // Implement signup logic here, such as an API call
    }
</script>

<h2>
    Signup here to access the application
</h2>

<form on:submit|preventDefault={handleSignup}>
    <input type="email" bind:value={email} placeholder="Email" required>
    <input type="password" bind:value={password} placeholder="Password" required>
    <input type="password" bind:value={confirmPassword} placeholder="Confirm Password" required>
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