import './App.css';
import Labstor from './labstor/Labstor.js'

function App() {
  const appStyle = {
    width: "100%",
    backgroundColor: '#ffc9b9'
}
  return (
    <div style={appStyle} className="App">
      <Labstor />
    </div>
  );
}

export default App;
