import './App.css';
import Pallets from './Pallets';
import seedsColors from './seedsColors';
function App() {
  return (
    <div className="App">
      <Pallets pallets={seedsColors[4]}/>
    </div>
  );
}

export default App;
