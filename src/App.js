import "./App.css";
import Header from "./Header";
import Player from "./Player";
import NextVideos from "./NextVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Player />
        <NextVideos />
      </main>
    </div>
  );
}

export default App;
