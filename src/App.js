import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [temp, setTemp] = useState([]);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Delhi");

  // console.log(city);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa8176b8ee208df3e864866f2286e1c7&units=metric`;

  const getWheather = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setTemp(res.main);
        setWeather(res.weather);
      });
  };

  useEffect(() => {
    getWheather();
  }, []);

  // console.log(temp);

  return (
    <div className="container my-4">
      <div className="container-fluid bg-light my-2 p-2 border rounded-1">
        Live Weather Forcast
      </div>

      <div className="card">
        <div className="card-header">Temp in {city}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{temp.temp} °C</p>
            <footer className="blockquote-footer">
              {weather.map((e) => (
                <cite title="Source Title">{e.main}</cite>
              ))}
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="input-group input-group-sm mb-3 my-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Enter city Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={getWheather}
        >
          Go
        </button>
      </div>
    </div>
  );
}
