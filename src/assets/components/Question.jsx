// 👇 At the top, keep this same
import React, { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import bgMusic from '../bg-music.mp3';
import correctSound from '../correct.mp3';
import wrongSound from '../wrong.mp3';

const Quiz = () => {
  const [coins, setCoins] = useState(0);
  const [isMuted, setIsMuted] = useState(() => localStorage.getItem('quiz-muted') === 'true');
  const [timeLeft, setTimeLeft] = useState(60);
  const [showTimeout, setShowTimeout] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [selected, setSelected] = useState(null);
  const [autoNextProgress, setAutoNextProgress] = useState(0);
  const [showStart, setShowStart] = useState(true);
  const [countdown, setCountdown] = useState(null);

  const coinHeaderRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const [playCorrect] = useSound(correctSound, { volume: 0.5, soundEnabled: !isMuted });
  const [playWrong] = useSound(wrongSound, { volume: 0.5, soundEnabled: !isMuted });
  const [playBg, { stop: stopBg }] = useSound(bgMusic, { volume: 0.3, loop: true, soundEnabled: !isMuted });

  useEffect(() => {
    if (!isMuted) playBg();
    else stopBg();
    localStorage.setItem('quiz-muted', isMuted);
  }, [isMuted]);

  useEffect(() => {
    if (timeLeft > 0 && countdown === null && !showStart) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft <= 0) {
      setShowTimeout(true);
    }
  }, [timeLeft, countdown, showStart]);

  const animateCoin = () => {
    const coin = document.createElement('img');
    coin.src = 'https://quizard.app/images/coin.png';
    coin.style.position = 'fixed';
    coin.style.left = '50%';
    coin.style.top = '50%';
    coin.style.width = '40px';
    coin.style.zIndex = 9999;
    coin.style.transition = 'transform 0.8s ease-in-out';
    coin.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(coin);

    const target = coinHeaderRef.current?.getBoundingClientRect();
    if (target) {
      const x = target.left + target.width / 2;
      const y = target.top + target.height / 2;
      requestAnimationFrame(() => {
        coin.style.transform = `translate(${x - window.innerWidth / 2}px, ${y - window.innerHeight / 2}px) scale(0.5)`;
      });

      setTimeout(() => {
        document.body.removeChild(coin);
        setCoins((prev) => prev + 4);
      }, 800);
    }
  };

  const handleAnswer = (isCorrect, index) => {
    if (selected !== null) return;
    setSelected(index);
    if (isCorrect) {
      playCorrect();
      animateCoin();
    } else {
      playWrong();
    }

    // Start progress for auto next
    let progress = 0;
    setAutoNextProgress(0);
    progressIntervalRef.current = setInterval(() => {
      progress += 2;
      setAutoNextProgress(progress);
      if (progress >= 100) {
        clearInterval(progressIntervalRef.current);
        goToNext();
      }
    }, 50);
  };

  const goToNext = () => {
    clearInterval(progressIntervalRef.current);
    setLoadingNext(true);
    setTimeout(() => {
      setLoadingNext(false);
      setShowTimeout(false);
      setTimeLeft(60);
      setSelected(null);
      setAutoNextProgress(0);
    }, 1000);
  };

  const startQuiz = () => {
    let count = 3;
    setShowStart(false);
    setCountdown(3);
    const interval = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(interval);
        setCountdown(null);
      } else {
        setCountdown(count);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#1f3a40] text-white px-4 py-6 relative">

      {/* Start Screen */}
      {showStart && (
        <div className="fixed inset-0 bg-[#1f3a40] flex items-center justify-center z-50">
          <button
            onClick={startQuiz}
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full text-2xl shadow-lg hover:bg-yellow-500"
          >
            Let’s Go 🚀
          </button>
        </div>
      )}

      {/* Countdown Screen */}
      {countdown !== null && (
        <div className="fixed inset-0 bg-[#1f3a40] flex items-center justify-center z-50 text-white text-8xl font-bold animate-scaleUp">
          {countdown}
        </div>
      )}

      {/* Main Quiz UI */}
      {!showStart && countdown === null && (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-yellow-400">India Quiz</h1>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsMuted((prev) => !prev)}>{isMuted ? '🔇' : '🔊'}</button>
              <button onClick={() => window.location.href = '/'}>🏠</button>
              <div ref={coinHeaderRef} className="bg-pink-500 px-3 py-1 rounded-full flex items-center gap-2">
                <img src="https://quizard.app/images/coin.png" alt="coin" className="w-5 h-5" />
                <span className="font-semibold text-lg">{coins}</span>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-[#183239] max-w-3xl mx-auto rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Question 1 of 10</h2>
              <span className="text-sm bg-white text-black px-2 py-1 rounded-full">Single Select Question</span>
            </div>

            <div className="relative mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/India_Gate_in_New_Delhi_03-2016_img3.jpg/800px-India_Gate_in_New_Delhi_03-2016_img3.jpg"
                alt="question"
                className="rounded-lg w-full max-h-72 object-cover"
              />
              <div
                className={`absolute top-2 right-2 w-12 h-12 bg-gray-800 border-4 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${timeLeft > 30 ? 'border-pink-500' : timeLeft > 10 ? 'border-yellow-400' : 'border-red-500'}`}
              >
                {timeLeft}
              </div>
            </div>

            <div className="text-center text-lg font-medium mb-6">
              What is the capital of India?
            </div>

            <div className="space-y-3">
              {["New Delhi", "Mumbai", "Kolkata", "Chennai"].map((option, index) => {
                const isCorrect = index === 0;
                const isSelected = selected === index;
                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(isCorrect, index)}
                    className={`w-full flex items-center text-left px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer
                      ${selected !== null && isCorrect ? 'bg-green-500 text-white' :
                        isSelected && !isCorrect ? 'bg-red-500 text-white animate-shake' :
                          'bg-white text-black hover:bg-yellow-100'}
                    `}
                  >
                    <span className="w-6 h-6 mr-4 bg-[#1f3a40] text-white rounded-full flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {selected !== null && (
              <div className="mt-6 relative">
                <button
                  onClick={goToNext}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl relative z-10 cursor-pointer"
                >
                  Next Question
                </button>
                <div
                  className="absolute bottom-0 left-0 h-1 bg-green-400 rounded-b-xl transition-all duration-100 linear"
                  style={{ width: `${autoNextProgress}%`, zIndex: 0 }}
                ></div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Timeout Popup */}
      {showTimeout && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-8 text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">⏰ Time's Up!</h2>
            <button
              onClick={goToNext}
              className="mt-4 inline-block rounded-full border border-gray-700 px-6 py-2 text-sm font-medium text-black hover:bg-gray-200 cursor-pointer relative overflow-hidden"
            >
              {loadingNext ? (
                <span className="flex justify-center items-center gap-2">
                  Loading <span className="loader border-2 border-t-transparent w-4 h-4 rounded-full animate-spin"></span>
                </span>
              ) : (
                'Go to Next Question'
              )}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .animate-shake {
          animation: shake 0.5s;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-scaleUp {
          animation: scaleUp 1s ease-in-out infinite;
        }
        @keyframes scaleUp {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Quiz;
