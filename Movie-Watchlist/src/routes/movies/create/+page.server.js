import db from '$lib/db.js';
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    // Die Standard-Action wird aufgerufen, wenn das Formular ohne Action-Attribut gesendet wird
    default: async ({ request }) => {
        // Formulardaten abrufen
        const data = await request.formData();
        
        // Movie-Objekt mit den erforderlichen Feldern erstellen
        const newMovie = {
            title: data.get('title'),
            // year muss als Zahl gespeichert werden, daher parseInt()
            year: parseInt(data.get('year')), 
            length: data.get('length')
            // Die Funktion db.createMovie() ergänzt automatisch 'poster', 'actors' und 'watchlist'
        };

        // Film in die MongoDB einfügen
        await db.createMovie(newMovie);

        // Nach der erfolgreichen Erstellung zur Übersichtsseite navigieren
        throw redirect(303, "/movies"); 
    }
};