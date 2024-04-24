import React, { useState } from 'react';
import Movie from "./Movie"
import myMovies from "./Movies.json"

function MovieList() {
    const [movies, setMovies] = useState(myMovies);

    const deleteMovie = (title)=> {
        console.log('Deleting movie:', title); // Deletes Movie
        const updatedMovies = movies.filter(movie => movie.title !== title);
        console.log('Updated movies:', updatedMovies); // Calls function to update movies array
        setMovies(updatedMovies);
      };

    return(
        <div className="movie-list">
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.title} className="col-12 col-sm-6 ">
                        <Movie title={movie.title} director={movie.director} stars={movie.stars} onDelete={deleteMovie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;