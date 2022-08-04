import React from "react";
import './App.css';
import useTyper from "./useTyper";
function App() {

  const {handleChange,text,isTimeRunning,textAreaRef,timeRemaining,startGame, wordCount} = useTyper();

  return (
    <div className="App">
      <h1>How fast do you type? </h1>
      <textarea onChange={handleChange} value={text} disabled={!isTimeRunning} ref={textAreaRef} />
      <h2>Time remaining: {timeRemaining}</h2>
      <button onClick={startGame} disabled={isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount === 0 ? "": wordCount}</h1>
    </div>
  );
}

export default App;
