import { useState } from "react";
import "./App.css";
import ExercisesData from "./data/exercises";
import Exercises from "./components/Exercises";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentExercise = ExercisesData[currentIndex];

  const handleCorrect = () => {
    setScore(score + 1);
    if (currentIndex < ExercisesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <nav className="bg-gray-200 shadow px-8 py-4 flex justify-center items-center">
          <h1>Code Block Game 🧩</h1>
          <p>Current Score: {score}</p>
        </nav>
        <Exercises exercise={currentExercise} onCorrect={handleCorrect} />
      </div>
    </>
  );
}

export default App;
