import db from '$lib/db.js';

export async function load() {
  try {
    const movies = await db.getMovies();
    return {
      movies: movies || []
    };
  } catch (error) {
    console.error('Fehler beim Laden der Filme:', error);
    return {
      movies: []
    };
  }
}
