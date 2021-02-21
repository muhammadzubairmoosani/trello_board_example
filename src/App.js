import "./App.css";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import { data } from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trello Board Example</h1>
        <Board initialBoard={data} />
      </header>
    </div>
  );
}

export default App;
