
import './App.css';
import Greet from './componants/Greet';
import Welcome from './componants/Welcome'

function App() {
  return (
    <div className="App"> 
      <Greet name="sikandar"/>
      <Greet lastname="chauhan"/>
      <Welcome name="sikandar"/>
    </div>
  );
}

export default App;
