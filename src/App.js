import './App.css';
import Card from "./components/Card";
import Page from "./components/Page";
import Sorter from "./components/Sorter";

function App() {
  return (
    <div className="App">
        Movie List
        <Page />
        <Card />
        <Sorter />
    </div>
  );
}

export default App;
