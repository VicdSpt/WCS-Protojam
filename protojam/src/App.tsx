import { useState } from "react";
import "./App.css";
import ExercisesData from "./data/exercises";
import Exercises from "./components/Exercises";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentExercise = ExercisesData[currentIndex];

  const [life, setLife] = useState(5);

  const handleCorrect = () => {
    setScore(score + 1);
    if (currentIndex < ExercisesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleWrong = () => {
    setLife(life - 1);
  }

  return (
    <>
      <div className="min-h-screen">
        <nav className="bg-gray-200 shadow px-8 py-4 flex justify-center items-center">
          <h1>Code Block Game 🧩</h1>
          <p>Current Score: {score}</p>
          <p>
            Lifes:
            {Array.from({ length: life }).map((_, i) => (
              <span key={i}>❤️</span>
            ))}
          </p>
        </nav>
        <Exercises exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong}/>
      </div>
    </>
  );
}

export default App;
