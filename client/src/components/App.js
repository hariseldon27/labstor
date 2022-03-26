import './App.css';
import Labstor from './labstor/Labstor.js'

function App() {
  const holderStyle = {
    width: "88%",
    margin: "0 auto",
    // border: "black 10px solid",
    padding: "15px",
    // height: "100%",
    backgroundColor: '',
}
  return (
    <div style={holderStyle} className="App">
      <Labstor />
    </div>
  );
}

export default App;
