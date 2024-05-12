<script>
    import { Confetti } from 'svelte-confetti'; 
</script>

<div style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;">
 <Confetti amount={500}
 x={[-5, 5]} 
 y={[0, 0.1]} 
 delay={[500, 2000]} 
 infinite 
 fallDistance="100vh" />
</div>

<h1>Congrats!</h1>
<h2>
    You've reached the user page which is protected!
</h2>

