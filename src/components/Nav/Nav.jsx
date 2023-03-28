import { NavLink } from "react-router-dom";
import './nav.css'

const Nav = () => {
    return ( 
        <nav>
            <ul>
                <li><NavLink to="/home" className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/peliculas" className={({isActive})=> isActive ? 'active' : ''}>Peliculas</NavLink></li>
                <li><NavLink to="/series"className={({isActive})=> isActive ? 'active' : ''}>Series</NavLink></li>
                <li><NavLink to="/mi-lista" className={({isActive})=> isActive ? 'active' : ''}>Mi lista</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default Nav;