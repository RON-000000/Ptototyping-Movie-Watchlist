<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const { movie } = data;
</script>

<a href="/movies">Back</a>

<h1>{movie.title}</h1>

<div style="display: flex; gap: 40px;">
    <img src={movie.poster} alt={movie.title} style="width: 300px; height: auto;" />
    <div>
        <p><strong>Jahr:</strong> {movie.year}</p>
        <p><strong>Dauer:</strong> {movie.length}</p>
        
        <p><strong>Cast:</strong></p>
        {#if movie.actors && movie.actors.length > 0}
            <ul>
                {#each movie.actors as actor}
                    <li>{actor}</li>
                {/each}
            </ul>
        {:else}
            <p>Keine Darstellerinformationen verfügbar.</p>
        {/if}

        <form method="POST" action="?/delete" style="margin-top: 20px;">
            <button type="submit" style="background-color: darkred; color: white; padding: 10px; border: none; cursor: pointer;">Delete Movie</button>
        </form>
    </div>
</div>

<style>
  :global(body) {
    background-color: #1a1a1a;
  }

  h1, p, a, li {
    color: white;
  }
  
</style>