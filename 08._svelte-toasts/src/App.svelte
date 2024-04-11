<script>
	import toast, {Toaster} from 'svelte-french-toast'

	function handleClick() {
		toast.success('Hello, world!')
	}

  function helloDarkness() {
    toast('Hello Darkness', {
      
    })
  }
</script>

<Toaster />
<button type="button" on:click={handleClick}>Toast</button>

<button type="button" on:click={helloDarkness}>Darkness</button>