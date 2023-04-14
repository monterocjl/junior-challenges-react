import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./components/Pages/PokemonList/PokemonList";
import SinglePokemon from "./components/Pages/SinglePokemon/SinglePokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/:pokemonId' element={<SinglePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
