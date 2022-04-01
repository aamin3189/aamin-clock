import React from "react";
import "./App.css";
// import Weather from "./components/weather/Weather";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="App dark">
      <Weather />
      {/* <Clock /> */}
    </div>
  );
}

export default App;
