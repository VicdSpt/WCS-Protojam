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
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900">
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl tracking-tight">Code Block Game 🧩</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
              <span className="text-indigo-300 text-sm font-semibold">Score</span>
              <span className="text-white font-bold">{score}</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: life }).map((_, i) => (
                <span key={i} className="text-lg">❤️</span>
              ))}
            </div>
          </div>
        </nav>
        <Exercises exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong}/>
      </div>
    </>
  );
}

export default App;
