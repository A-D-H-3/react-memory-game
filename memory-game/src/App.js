import "./App.css";
import MemoryCard from "./components/MemoryCard";
import { Component } from "react";

function generateDeck() {
  const symbols = ["∆", "ß", "L", "S", "O", "$", "+", "0"];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    i = { isFlipped: false, symbol: symbols[card % 8] };
    i.push(deck);
    shuffle(deck);
    return deck;
  }
}

function shuffle() {
  /**
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   */
  function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}

class Game extends Component {
  constructor(props) {
    super();
    let deck = [];
    let pickedCards = [];
    this.state = { props: deck };
    this.state = { props: pickedCards };
  }
}

function App() {
  carsdsJSX = this.state.map((card, index) => {
    return <MemoryCard />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Game-title">Memory Game</h1>
        <h3 className="Game-subtitle">Match Cards To Win</h3>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
