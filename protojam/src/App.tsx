import { useState } from "react";
import "./App.css";
import { exercises } from "./data/exercices";
import Exercices from "./components/Exercices";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentExercise = exercises[currentIndex]

  const handleCorrect = () => {
    setScore(score + 1);
    setCurrentIndex(currentIndex + 1)
  }
  
  return (
    <>
      <p>Current Score: {score}</p>
      <Exercices exercise={currentExercise} onCorrect={handleCorrect}/>
    </>
  );
}

export default App;
