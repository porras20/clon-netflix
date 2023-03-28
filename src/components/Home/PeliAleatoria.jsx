import { useEffect, useState } from "react";
import poster from '../../../public/initialposter.avif'
const PeliAletatoria = () => {
    
    return ( 
        <div className="home_container">
            <div className="encabezado">
                <div className="poster"></div>
                <div className="info">
                    <h2>John Wick</h2>
                    <p>John Wick is an American action thriller media franchise created 
                    by Derek Kolstad and centered around John Wick, a former hitman who 
                    is forced back into the criminal underworld he had previously abandoned.</p>
                    <button className="more-info">Más información</button>
                    <button className="trailer">Ver Trailer</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default PeliAletatoria;