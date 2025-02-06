import './App.css';
import MusicBand from './Components/MusicBand/MusicBand'
import CulinaryRecipe from './Components/CulinaryRecipe/CulinaryRecipe'
import ShakespeareBibliography from './Components/ShakespeareBibliography/ShakespeareBibliography';
import Movie from './Components/Movie/Movie';
import CurrentTime from './Components/CurrentTime/CurrentTime';
import Pet from './Components/Pet/Pet';

const App = () => {
  return (
    <>
      <MusicBand bgColor="lightgreen" />
      <CulinaryRecipe bgColor="cyan" />
      <ShakespeareBibliography bgColor="lightgreen" />
      <Movie bgColor="cyan" />
      <CurrentTime bgColor="lightgreen" />
      <Pet bgColor="cyan" />
    </>
  );
}

export default App;
