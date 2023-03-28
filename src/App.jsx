import './App.css'
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import MiLista from './components/Mi-lista/Index'
import Peliculas from './components/Peliculas/Index'
import Series from './components/Series/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/mi-lista' element={<MiLista/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
