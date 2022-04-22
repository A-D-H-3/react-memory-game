import "./App.css";
import MemoryCard from "./components/MemoryCard";

function App() {
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
