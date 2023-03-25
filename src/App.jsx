import './App.css'
import React from 'react';
import useTmdbApi from './hooks/useTmdbApi';

const App = () => {
  const [data, isLoading, error] = useTmdbApi('https://api.themoviedb.org/3/movie/popular');
  return (
    <div>
      {data?.results.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default App
