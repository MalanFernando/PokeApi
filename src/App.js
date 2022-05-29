import './css/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import Login from './components/login/Login';
import Pokedex from './components/pokedex/Pokedex';
import Pokemons from './components/pokemons/Pokemons';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokemons" element={<Pokemons/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
