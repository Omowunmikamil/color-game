import React, { useState, useEffect } from "react";

const colors = {
  red: ["#ffcccc", "#ff9999", "#ff6666", "#ff3333", "#cc0000", "#990000"],
  blue: ["#ccccff", "#9999ff", "#6666ff", "#3333ff", "#0000cc", "#000099"],
  green: ["#ccffcc", "#99ff99", "#66ff66", "#33ff33", "#00cc00", "#009900"],
  yellow: ["#ffffcc", "#ffff99", "#ffff66", "#ffff33", "#cccc00", "#999900"],
  purple: ["#e6ccff", "#cc99ff", "#b266ff", "#9933ff", "#6600cc", "#4d0099"],
  orange: ["#ffcc99", "#ff9966", "#ff6633", "#ff3300", "#cc2900", "#991f00"],
  pink: ["#ffccff", "#ff99ff", "#ff66ff", "#ff33ff", "#cc00cc", "#990099"],
  brown: ["#ffcc99", "#ff9966", "#ff6633", "#ff3300", "#cc2900", "#991f00"],
  black: ["#cccccc", "#999999", "#666666", "#333333", "#000000", "#000000"],
  teal: ["#ccffff", "#99ffff", "#66ffff", "#33ffff", "#00cccc", "#009999"],
};

export default function ColorGuessingGame() {
  const [targetColor, setTargetColor] = useState("");
  const [shades, setShades] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setGameStatus(`Game Over! Your Score: ${score}`);
      if (score > highestScore) {
        setHighestScore(score);
      }
    }
  }, [timeLeft, gameOver]);

  const startNewGame = (startTimer) => {
    const newColor = Object.keys(colors)[Math.floor(Math.random() * 6)];
    const newShades = colors[newColor];
    const randomShade = newShades[Math.floor(Math.random() * newShades.length)];

    setTargetColor(randomShade);
    setShades(newShades);
    setGameStatus("");
    if (startTimer) {
      setTimeLeft(30); // Reset timer when startTimer is true
      setScore(0);
    }
    setGameOver(false);
  };

  const handleGuess = (shade) => {
    if (shade === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct! 🎉");
      startNewGame(false); // Start a new round with a different color
    } else {
      setGameOver(true);
      setGameStatus("Game Over! ❌");
      if (score > highestScore) {
        setHighestScore(score);
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg p-6">
      <h1
        className="text-2xl sm:text-4xl text-center font-bold mb-6 pb-3 border-b w-full "
        data-testid="gameInstructions"
      >
        Guess the correct shade!
      </h1>
      <div className="flex flex-col items-center mt-10">
        <div
          className="size-36 mb-4 border-4 border-gray-800 rounded-xl "
          style={{ backgroundColor: targetColor }}
          data-testid="colorBox"
        ></div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 justify-center gap-4 mb-4">
          {shades.map((shade) => (
            <button
              key={shade}
              className="size-14 md:size-20 rounded-full border-2 border-gray-800 shadow-lg transition transform hover:scale-110 focus:ring-2 focus:ring-white"
              style={{ backgroundColor: `${shade}` }}
              onClick={() => handleGuess(shade)}
              data-testid="colorOption"
            ></button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-8">
          <p className="text-lg font-medium" data-testid="gameStatus">
            {gameStatus}
          </p>
          <p className="text-lg font-medium" data-testid="score">
            Score: {score}
          </p>
          <p className="text-lg font-medium" data-testid="highestScore">
            Highest Score: {highestScore}
          </p>
          <p className="text-lg font-medium" data-testid="timer">
            Time Left: {timeLeft}s
          </p>
        </div>
        <button
          onClick={() => startNewGame(true)}
          className="mt-4 px-8 py-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white rounded-full cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-90 transition-all duration-200 ease-out"
          data-testid="newGameButton"
        >
          New Game
        </button>
      </div>
    </div>
  );
}
