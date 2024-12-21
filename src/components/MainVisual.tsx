import { useState, useRef, useEffect } from "react";

export default function MainVisual() {
  const message =
    "あなたのMARVER推しは誰かな？下のボタンから推しを探しに行こう!!";
  const textRef = useRef<HTMLParagraphElement>(null); // 文字を表示するpタグの参照
  const [showButton, setShowButton] = useState(false); // ボタン表示の状態管理

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.textContent += message[index]; // textContentで文字を追加
        index += 1;
        if (index === message.length) {
          clearInterval(interval); // 文字が全て表示されたら停止
          setShowButton(true); // 文字が全て表示された後にボタンを表示
        }
      }
    }, 100);

    return () => clearInterval(interval); // クリーンアップ
  }, []); // 初回レンダリング時のみ実行

  const handleClick = () => {
    alert("クイズに進む！");
    // ここにボタンがクリックされたときの処理を追加できます。
  };

  return (
    <section className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      {/* ボタンをテキストの上に配置 */}
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

      {/* 左側のテキスト */}
      <div className="w-full px-8 text-center text-white flex justify-center items-center">
        <p ref={textRef} className="text-2xl font-semibold"></p>
      </div>

      {/* アイアンマンを文章の上に動かす */}
      <div className="absolute left-0 top-10 w-full">
        <div className="animate-slide-left-to-right">
          <img
            src="/images/ironman.png" // アイアンマンの画像を指定
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
