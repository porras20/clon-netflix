import { motion } from 'framer-motion';
import { useState } from 'react';
import useTmdbApi from '../../hooks/useTmdbApi';

const Populares = () => {
    const [data] = useTmdbApi('https://api.themoviedb.org/3/movie/popular');
    console.log(data);
    return ( 
        <div className="container_populares">
            <h2>Peliculas populares</h2>
            <div className='cards'>
            {data?.results.map((movie) => (
                <motion.div 
                    key={movie.id}
                    whileHover={{ scale: 1.2 }}
                    className="card">
                    <img whileFocus={{scale:1.2}} src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`} alt=""/>
                    <div className='info-movie'>
                        <h2>{movie.title}</h2>
                        <p>Calificacion promedio: {movie.vote_average}</p>
                        <p>Cantidad de votos: {movie.vote_count}</p>
                    </div>
                    
                </motion.div>
                ))}
            </div>
        </div>
     );
}
 
export default Populares;