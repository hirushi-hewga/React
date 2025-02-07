import './App.css';
import * as Main from './Components/main/MainComponents'

const App = () => {
  return (
    <>
      <Main.MusicBand bgColor="lightgreen" />
      <Main.CulinaryRecipe bgColor="cyan" />
      <Main.ShakespeareBibliography bgColor="lightblue" />
      <Main.Movie bgColor="yellowgreen" />
      <Main.CurrentTime bgColor="turquoise" />
      <Main.Pet bgColor="salmon" />
    </>
  );
}

export default App;
