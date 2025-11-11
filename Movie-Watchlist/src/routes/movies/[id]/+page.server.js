import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit'; // Importieren Sie 'redirect'

export async function load({ params }) {
    // Ruft einen einzelnen Film über die ID ab
    const movie = await db.getMovie(params.id); 
    
    // Optional: Fehlerbehandlung, falls Film nicht gefunden wird
    if (!movie) {
        // SvelteKit-Konvention für 404-Fehler
        return {
            status: 404,
            error: new Error('Movie not found')
        };
    }

    return { movie };
}

export const actions = {
    delete: async ({ params }) => {
        // Löscht den Film in der Datenbank
        await db.deleteMovie(params.id);
        
        // WICHTIG: Weiterleitung muss mit throw redirect erfolgen
        throw redirect(303, '/movies'); // Navigiert zur Übersichtsseite [cite: 299, 306]
    }
};