<a href="/movies">Back</a>

<h1>Add a Movie</h1>

<form method="POST" style="display: flex; flex-direction: column; width: 400px; gap: 15px; background-color: #2a2a2a; padding: 20px; border-radius: 5px;">
    
    <label for="title" style="color: white; font-weight: bold;">Name</label>
    <input type="text" id="title" name="title" required 
           style="padding: 10px; border: 1px solid #555; background-color: #1a1a1a; color: white;">

    <label for="year" style="color: white; font-weight: bold;">Year</label>
    <input type="number" id="year" name="year" required min="1900" max="2100" 
           style="padding: 10px; border: 1px solid #555; background-color: #1a1a1a; color: white;"> 

    <label for="length" style="color: white; font-weight: bold;">Length</label>
    <input type="text" id="length" name="length" required placeholder="z.B. 114 Minuten" 
           style="padding: 10px; border: 1px solid #555; background-color: #1a1a1a; color: white;"> 

    <button type="submit" style="padding: 12px; margin-top: 20px; background-color: #007bff; color: white; border: none; cursor: pointer; border-radius: 4px;">
        Add Movie
    </button>
</form>

<style>
    :global(body) {
        background-color: #1a1a1a;
        color: white;
    }
    h1 {
        color: white;
        margin-bottom: 20px;
    }
    a {
        color: #007bff;
        text-decoration: none;
        margin-bottom: 15px;
        display: inline-block;
    }
</style>