import Container from "react-bootstrap/Container";
import Pokemons from '../pokemons/components/Pokemons';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndividualPokemon from '../pokemons/components/IndividualPokemon';
import AuthLayout from '../auth/components/AuthLayout';
import PokemonLayout from '../pokemons/components/PokemonLayout';
import NotFound from './NotFound';
import User from '../auth/components/User';
import AppContainer from '../auth/components/AppContainer';


function App() {

  return (
    <BrowserRouter>
      <AppContainer>
        <Container>
          <User />
          <Routes>
            <Route path='login' element={<AuthLayout />} />
            <Route path="/" element={<PokemonLayout />}>
              <Route index element={<NotFound />} />
              <Route path='pokemon' element={<Pokemons />} />
              <Route path='pokemon/:id' element={<IndividualPokemon />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
