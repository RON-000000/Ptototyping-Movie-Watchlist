<script>
    import MovieCard from '$lib/components/MovieCard.svelte'; 
    
    /** @type {import('./$types').PageData} */
    export let data;
    const { movies } = data; 
</script>

<div class="container py-4">
  <h2 class="text-white mb-4">Daten und Bilder generiert mit Gemini und Imagen</h2>
  
  <a href="/movies/create" style="margin-bottom: 20px; display: inline-block;">
      <button style="padding: 10px 20px;">Add New Movie</button> 
  </a>

  <div class="row" style="display: flex; flex-wrap: wrap; gap: 20px;">
    {#if movies && movies.length > 0}
        {#each movies as movie}
          <MovieCard {movie} />
        {/each}
    {:else}
        <p style="color: white;">Derzeit sind keine Filme in der Datenbank vorhanden.</p>
    {/if}
  </div>
</div>

<style>
  :global(body) {
    background-color: #1a1a1a;
  }

  h2, p, a {
    color: white;
  }
  
</style>


