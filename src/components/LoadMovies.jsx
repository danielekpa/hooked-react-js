import React from "react";
import Movie from "./Movie";

function LoadMovies({movies, loading, errorMessage}) {
  return (
    <div className="movies">
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies?.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))
      )}
    </div>
  );
}

export default LoadMovies;
