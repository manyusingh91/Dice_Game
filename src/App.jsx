import React, { useState } from "react";
import StartGame from "./component/StartGame";
import GamePlay from "./component/GamePlay"; // Import GamePlay
import './App.css';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
