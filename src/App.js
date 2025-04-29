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
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/BarbaraISC">Bárbara Silva</a> and is{" "}
          <a href="https://github.com/BarbaraISC/weather-react-shecodes">
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://weather-app-barbara.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
