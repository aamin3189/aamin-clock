import React, { useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const COMP_COUNT = 2;

function render(page: number) {
  switch (page) {
    case 0:
      return <Clock />;
    case 1:
      return <Weather />;
    default:
      return <Clock />;
  }
}

function App() {
  const [page, setPage] = useState(0);

  function control(caviate: number) {
    if (page + caviate < 0 || page + caviate > COMP_COUNT - 1) return;
    setPage(page + caviate);
  }

  return (
    <div className="App dark">
      {render(page)}
      <div className="controls">
        <div>
          <MdKeyboardArrowLeft onClick={() => control(-1)} />
        </div>
        <div>
          <MdKeyboardArrowRight onClick={() => control(1)} />
        </div>
      </div>
    </div>
  );
}

export default App;
