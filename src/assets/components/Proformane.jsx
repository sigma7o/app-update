import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

// React Icons imports
import { FaShareAlt, FaArrowLeft, FaTrophy } from "react-icons/fa";

const Proformance = () => {
  const { width, height } = useWindowSize();

  const score = 80;
  const correct = 8;
  const incorrect = 2;
  const total = 10;
  const timeSpent = 75;

  const handleBackToHome = () => {
    alert("Going back to home...");
  };

  return (
    <div className="bg-[#1f3b4d] min-h-screen text-white flex flex-col items-center justify-center px-4 py-6 relative">
      <Confetti width={width} height={height} numberOfPieces={250} recycle={false} />

      <h2 className="text-yellow-400 text-3xl font-bold text-center mb-6">
        🎉 Buddhism Quiz Result
      </h2>

      {/* Result Grid with shadow */}
      <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#1a2e3b] p-6 rounded-xl shadow-2xl">
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">🥇 <strong>Coin Earned:</strong> {score}</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">🏆 <strong>Your Score:</strong> {score}</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">✅ <strong>Correct:</strong> {correct}</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">❌ <strong>Incorrect:</strong> {incorrect}</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">🎯 <strong>Accuracy:</strong> {Math.round((correct / total) * 100)}%</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">⏱️ <strong>Time Spent:</strong> {timeSpent} sec</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">🕳️ <strong>Unattempted:</strong> {total - (correct + incorrect)}</div>
        <div className="bg-[#254d61] p-4 rounded-lg text-center shadow-md">🥉 <strong>Live Rank:</strong> 4</div>
      </div>

      {/* Share & Back to Home buttons with icons and half width */}
      <div className="w-full max-w-2xl mt-8 flex flex-wrap gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 px-4 py-3 rounded-xl cursor-pointer shadow-lg transition-all duration-200">
          <FaShareAlt /> Share Score
        </button>

        <button
          onClick={handleBackToHome}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 px-4 py-3 rounded-xl cursor-pointer shadow-lg transition-all duration-200"
        >
          <FaArrowLeft /> Back to Home
        </button>
      </div>

      {/* Leaderboard button with icon and full width */}
      <div className="mt-6 w-full max-w-3xl px-4">
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl cursor-pointer w-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
          <FaTrophy /> Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Proformance;
