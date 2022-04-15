import React, { useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Ramadhan from "./components/ramadhan/Ramadhan";

const COMP_COUNT = 3;

function render(page: number) {
  switch (page) {
    case 0:
      return <Ramadhan />;
    case 1:
      return <Weather />;
    case 3:
      return <Clock />;
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
