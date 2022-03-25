import React from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen;
    var cancelFullScreen = doc.exitFullscreen;

    if (!doc.fullscreenElement) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  }
  return (
    <div className="App dark">
      <Clock />
      <button onClick={toggleFullScreen} className="fullscreen">
        Full Screen
      </button>
    </div>
  );
}

export default App;
