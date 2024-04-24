import React from 'react';

export default function Movie(props) {
  
  const deleteMovie = () => {
    props.onDelete(props.title);
  };

  return (
    <div className="movie">
        <button type="button" class="btn btn-primary" onClick={deleteMovie}>Delete</button>
        <div className="movie-title">
            <b>Movie Title: {props.title}</b>
        </div>
        <div className="movie-director">
            Director: {props.director}
        </div>
        <div className="movie-stars">
            Stars: {props.stars}
        </div>
    </div>
  )
}