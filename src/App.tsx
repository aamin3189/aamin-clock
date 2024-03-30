import React, { useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Weather from "./components/weather/Weather";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdFullscreen } from "react-icons/md";
import Ramadhan from "./components/ramadhan/Ramadhan";
import Timonk from "./components/timonk/Timonk";
import DigiGred from "./components/digigred/DigiGred";
import News from "./components/news/News";
import TimonkV2 from "./components/timonk.v2/Timonk.v2";
import Motion from "./components/motion/Motion";
// import Background from "./components/background/Background";

const COMP_COUNT = 6;

function render(page: number) {
  switch (page) {
    case 0:
      return <Ramadhan />;
    case 1:
      return <Clock />;
    case 2:
      return <Weather />;
    case 3:
      return <Timonk />;
    case 4:
      return <News />;
    case 5:
      return <Motion />;
    default:
      return <Clock />;
  }
}

// Deploy new script

function App() {
  const [page, setPage] = useState(0);

  function control(caviate: number) {
    if (page + caviate < 0 || page + caviate > COMP_COUNT - 1) return;
    setPage(page + caviate);
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
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
      <div style={{ position: "fixed", left: 30, bottom: 20 }} onClick={toggleFullScreen}>
        <MdFullscreen size={30} />
      </div>
    </div>
  );
}

export default App;
