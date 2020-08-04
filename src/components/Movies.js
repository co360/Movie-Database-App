import React from 'react'
import Spinner from './Spinner'
import MovieItem from './MovieItem'

const Movies = ({ movies, loading, getMovie }) => {
    
    if (loading) {
        return <Spinner />;
      } else {
        return (
          <div className="grid-3 my-3">
            {movies.map(movie => (
              <MovieItem key={movie.imdbID} movie={movie} getMovie={getMovie} />
            ))}
          </div>
        );
      }
}

export default Movies
