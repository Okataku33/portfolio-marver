import { useState } from "react";
import { qaData } from "../constants/data";

export default function QandA() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false); // クイズ開始状態を管理

  // indexの型を明示的にnumberに指定
  const handleImageClick = (index: number) => {
    setSelectedItem(index);
  };

  // クイズに挑戦ボタンが押されたときに呼ばれる
  const handleQuizStart = () => {
    setIsQuizStarted(true);
  };

  // モーダルを閉じるための関数
  const closeModal = () => {
    setSelectedItem(null);
    setIsQuizStarted(false); // クイズ終了時には状態をリセット
  };

  // ポップアップの外側をクリックした場合にモーダルを閉じる
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="py-20 px-6 bg-yellow-50/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-light mb-12 text-yellow-800">Q&A</h2>

        {/* グリッドレイアウト（横4列、縦3列） */}
        <div className="grid grid-cols-4 gap-8">
          {qaData.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* 画像を表示 */}
              <div
                className="transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                onClick={() => handleImageClick(index)}
              >
                <div className="w-full relative">
                  <img
                    src={item.image}
                    alt={item.question}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ポップアップ表示 */}
        {selectedItem !== null && (
          <div
            onClick={handleOutsideClick} // 背景部分をクリックした場合にモーダルを閉じる
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 transition-all duration-1000 opacity-0 scale-95"
            style={{
              opacity: 1,
              transform: "scale(1)",
            }}
          >
            <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl transform transition-all duration-1000 scale-95 opacity-100">
              {/* 画像 */}
              <div className="mb-6">
                <img
                  src={qaData[selectedItem].image}
                  alt={qaData[selectedItem].question}
                  className="w-full h-64 object-cover rounded-lg border-4 border-yellow-500"
                />
              </div>

              {/* クイズ開始ボタン */}
              {!isQuizStarted && (
                <div className="flex justify-center gap-6 mb-8">
                  <button
                    className="bg-yellow-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transform transition duration-300 ease-out hover:scale-105"
                    onClick={handleQuizStart}
                  >
                    クイズに挑戦
                  </button>
                </div>
              )}

              {/* 質問と回答はクイズ開始後に表示 */}
              {isQuizStarted && (
                <>
                  {/* 質問 */}
                  <div className="flex gap-4 items-start mb-6">
                    <span
                      className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white 
                      rounded-full flex items-center justify-center font-bold shadow-xl"
                    >
                      Q
                    </span>
                    <h3 className="text-xl font-semibold text-yellow-800">
                      {qaData[selectedItem].question}
                    </h3>
                  </div>

                  {/* 回答 */}
                  <div className="flex gap-4 items-start ml-12 mb-8">
                    <span
                      className="flex-shrink-0 w-10 h-10 bg-yellow-300 text-yellow-700 
                      rounded-full flex items-center justify-center font-bold shadow-xl"
                    >
                      A
                    </span>
                    <p className="text-yellow-700 pt-1">
                      {qaData[selectedItem].answer}
                    </p>
                  </div>
                </>
              )}

              {/* ボタン（クイズ開始後は表示されない） */}
              <div className="flex justify-center gap-6">
                <button
                  className="bg-yellow-500 text-white py-2 px-6 rounded-full shadow-lg 
                  hover:bg-yellow-400 transform transition duration-300 ease-out hover:scale-105"
                  onClick={() => alert("お気に入りに追加しました")}
                >
                  お気に入りに追加
                </button>
              </div>

              {/* 閉じるボタン */}
              <div className="mt-6 text-center">
                <button
                  onClick={closeModal}
                  className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-500 transition-all"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
