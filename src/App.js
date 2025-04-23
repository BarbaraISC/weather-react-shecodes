import "./App.css";
import WeatherForm from "./WeatherForm";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" alt="SheCodes logo" src={logo} />
        <h1>Weather App</h1>
        <WeatherForm />
      </div>
    </div>
  );
}

export default App;
