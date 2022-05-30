import './css/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import Login from './components/login/Login';
import Pokedex from './components/pokedex/Pokedex';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path='/pokedex/:id' element={<PokemonDetail/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
