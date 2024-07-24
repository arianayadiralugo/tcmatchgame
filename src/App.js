import logo from './logo.svg';
import './App.css';
import MatchGame from './components/matchGame';

var dataGame = [
  {key:1, name:"Guadalajara", status:""},
  {key:1, name:"Jalisco", status:""},
  {key:2, name:"Mexico", status:""},
  {key:2, name:"DF", status:""},

  {key:3, name:"Monterrey", status:""},
  {key:3, name:"Nuevo Leon", status:""},
  {key:4, name:"La Paz", status:""},
  {key:4, name:"Baja California Norte", status:""},

  {key:5, name:"Aguascalientes", status:""},
  {key:5, name:"Aguascalientes", status:""},
  {key:6, name:"Zacatecas", status:""},
  {key:6, name:"Zacatecas", status:""}
]
function App() {
  return (
    <div className="App">
      <h1>Country-Capital Match Game</h1>
      <MatchGame data={dataGame} />
    </div>
  );
}

export default App;
