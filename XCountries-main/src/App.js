import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
      } catch (err) {
        throw err;
      }
        
    };
    fetchData();
  }, []);

  console.log(countries);
  return (
    <div className="App">
      {countries.map((country) => {
        return (
          <div className="card">
            <img src={country.flags.png} alt={country.flag}></img>
            <h3>{country.name.common}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
