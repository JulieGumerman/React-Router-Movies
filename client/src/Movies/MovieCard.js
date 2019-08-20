import React, { useState } from 'react';

const MovieCard = props => {

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>
        
        {!props.movie.stars ? (
            <h2>Loading stars..</h2>
            ) : (
              props.movie.stars.map(star => (
                <div key={star} className="movie-star">
                  {star}
                </div>
              ))
            )} 

      </div>
      <div className="save-button" >Save</div>
    </div>
  )

};

export default MovieCard;
