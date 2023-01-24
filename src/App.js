import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search defaultCity="Washington" />
            <Weather />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
