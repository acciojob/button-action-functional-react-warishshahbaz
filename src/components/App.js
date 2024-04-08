import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div id="main">
      {/* Button with an ID of 'click' */}
      <button id="click" onClick={() => setButtonClicked(true)}>
        Click me
      </button>

      {/* Conditional rendering of the paragraph tag */}
      {buttonClicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
