import { Player } from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' symbol='X'/>
          <Player initialName='Player 2' symbol='0'/>
          
        </ol>
        game board
      </div>
      log
    </main>
  );
}

export default App;