import { useState } from "react";
import "./App.css";
import ExercisesData  from "./data/exercises";
import Exercises from "./components/Exercises";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentExercise = ExercisesData[currentIndex]

  const handleCorrect = () => {
    setScore(score + 1);
    setCurrentIndex(currentIndex + 1)
  }
  
  return (
    <>
      <p>Current Score: {score}</p>
      <Exercises exercise={currentExercise} onCorrect={handleCorrect}/>
    </>
  );
}

export default App;
