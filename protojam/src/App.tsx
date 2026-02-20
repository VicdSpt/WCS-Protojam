import { useState } from "react";
import "./App.css";
import ExercisesData from "./data/exercises";
import Exercises from "./components/Exercises";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentExercise = ExercisesData[currentIndex];

  const [life, setLife] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const [gameWon, setGameWon] = useState(false);

  const handleCorrect = () => {
    setScore(score + 1);
    if (currentIndex < ExercisesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameWon(true);
    }
  };

  const handleWrong = () => {
    const newLife = life - 1;
    setLife(newLife);
    setGameOver(newLife === 0);
  };

  const handleRestartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setLife(3);
    setGameOver(false);
    setGameWon(false);
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center gap-6">
        <div className="text-6xl">😭</div>
        <h2 className="text-white text-4xl font-bold tracking-tight">
          Game Over
        </h2>
        <p className="text-indigo-300 text-lg">
          Your final score is:{" "}
          <span className="text-white font-bold">{score}</span>
        </p>
        <button
          onClick={handleRestartGame}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl cursor-pointer transition-colors shadow-lg shadow-indigo-500/20"
        >
          Try Again ?
        </button>
      </div>
    );
  }
  if (gameWon) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center gap-6">
        <div className="text-6xl">🤩</div>
        <h2 className="text-white text-4xl font-bold tracking-tight">
          You Won !
        </h2>
        <p className="text-indigo-300 text-lg">
          Your final score is:{" "}
          <span className="text-white font-bold">{score}</span>
        </p>
        <button
          onClick={handleRestartGame}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl cursor-pointer transition-colors shadow-lg shadow-indigo-500/20"
        >
          Try Again ?
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900">
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-xl tracking-tight">
            Code Block Game 🧩
          </h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
              <span className="text-indigo-300 text-sm font-semibold">
                Score
              </span>
              <span className="text-white font-bold">{score}</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: life }).map((_, i) => (
                <span key={i} className="text-lg">
                  ❤️
                </span>
              ))}
            </div>
          </div>
        </nav>
        <Exercises
          exercise={currentExercise}
          onCorrect={handleCorrect}
          onWrong={handleWrong}
        />
      </div>
    </>
  );
}

export default App;
