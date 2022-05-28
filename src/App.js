import './css/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Pokedex from './components/pokedex/Pokedex';
import Pokemons from './components/pokemons/Pokemons';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
