import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainVisual() {
  const message =
    "あなたのMARVER推しは誰かな？下のボタンから推しを探しに行こう!!";
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.textContent += message[index];
        index += 1;
        if (index === message.length) {
          clearInterval(interval);
          setShowButton(true);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate("/qanda");
  };

  return (
    <section className="pt-32 min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden relative">
      {showButton && (
        <div className="absolute bottom-16 text-center w-full z-10">
          <button
            onClick={handleClick}
            className="bg-teal-400 text-white px-8 py-4 rounded-xl text-2xl font-bold shadow-xl hover:bg-teal-700 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
          >
            推しを探す
          </button>
        </div>
      )}

      <div className="w-full px-8 text-center text-white flex justify-center items-center">
        <p ref={textRef} className="text-2xl font-semibold"></p>
      </div>

      <div className="absolute left-0 top-10 w-full">
        <div className="animate-slide-left-to-right">
          <img
            src={`${import.meta.env.BASE_URL}images/ironman.png`}
            alt="Iron Man"
            className="w-[300px] h-auto object-cover"
          />
        </div>
      </div>

      {/* アイアンマンの動きのためのCSSアニメーション */}
      <style>
        {`
        .animate-slide-left-to-right {
          animation: slideLeftToRight 10s linear infinite;
        }

        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(calc(100vw + 300px));
          }
        }
        `}
      </style>
    </section>
  );
}
