<script lang="ts">
  export let movie: {
    _id: string;
    title: string;
    year: number;
    length: string;
    poster: string;
  };

  // Pfad zur Detailseite
  const detailPath = `/movies/${movie._id}`;
</script>

<div class="col-md-3 mb-4">
  <a href={detailPath} style="text-decoration: none; color: inherit; display: block; height: 100%;">
    <div class="card bg-dark text-white h-100">
      <img src={movie.poster} class="card-img-top" alt={movie.title}>
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">Jahr: {movie.year}</p>
        <p class="card-text">Dauer: {movie.length}</p>
      </div>
    </div>
  </a>
</div>

<style>
  a {
    text-decoration: none;
  }
</style>