import React, { useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Ramadhan from "./components/ramadhan/Ramadhan";
import Timonk from "./components/timonk/Timonk";

const COMP_COUNT = 4;

function render(page: number) {
  switch (page) {
    case 0:
      return <Timonk />;
    case 1:
      return <Weather />;
    case 2:
      return <Clock />;
    case 3:
      return <Ramadhan />;
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
