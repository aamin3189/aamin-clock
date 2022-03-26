import React from "react";
import "./App.css";
import Weather from "./components/weather/Weather";
// import Clock from "./components/clock/Clock";

function App() {
  return (
    <div className="App dark">
      {/* <Clock /> */}
      <Weather />
    </div>
  );
}

export default App;
