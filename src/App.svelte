<script>
  import { fly, fade } from 'svelte/transition';
  let showIntro = true;
  const toggleIntro = () => showIntro = !showIntro;
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: linear-gradient(120deg, #f6d365, #fda085);
    color: #333;
  }

  nav {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  section {
    padding: 2rem;
    margin: 0 auto;
    max-width: 800px;
  }

  .portfolio-item {
    background: white;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  .portfolio-item:hover {
    transform: translateY(-5px);
  }
</style>

<nav>
  <button on:click={toggleIntro}>{showIntro ? 'View Work' : 'Intro'}</button>
</nav>

{#if showIntro}
  <section in:fly={{ y: -50, duration: 500 }} out:fade>
    <h1>Hi, I'm Your Name</h1>
    <p>Welcome to my portfolio. Click the button to view my projects.</p>
  </section>
{:else}
  <section>
    <h2>Projects</h2>
    {#each [1, 2, 3] as item (item)}
      <div class="portfolio-item" in:fade>
        <h3>Project {item}</h3>
        <p>Project {item} description goes here.</p>
      </div>
    {/each}
  </section>
{/if}
