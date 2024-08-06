import "./App.css";
import React, { useState } from "react";
import Information from "./component/Information";

function App() {
  
  // setting the state to the value of 0
  const [multiply, setMultiply] = useState(0);

  // setting props value
  const name = "Michael";
  const classroom = "2 Alpha";
  const subject = " Mathematics";

  return (
    <div className="App">


      {/* Calling the props */}
      <Information name={name} classroom={classroom} subject={subject} />

      <p> Multiples of 2 includes : {multiply} </p>

      {/* update the state when the button is clicked */}
      <button onClick={() => setMultiply(multiply + 2)} className="">
        Click and Start Learning
      </button>
    </div>
  );
}

export default App;
