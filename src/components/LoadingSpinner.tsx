export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950">
      <div className="relative">
        {/* アイアンマンの画像 */}
        <div className="w-32 h-32 animate-spin">
          <img
            src="/images/ironman.png" // アイアンマンの画像パスを指定
            alt="Iron Man"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 周りの小さなアイアンマンのアニメーション（画像を使う場合） */}
        <div className="absolute -top-8 -left-8 w-16 h-16 animate-bounce delay-100">
          <img
            src="/images/ironman.png"
            alt="Iron Man"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute -top-4 -right-8 w-12 h-12 animate-bounce delay-200">
          <img
            src="/images/ironman.png"
            alt="Iron Man"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute -bottom-4 -left-6 w-14 h-14 animate-bounce delay-300">
          <img
            src="/images/ironman.png"
            alt="Iron Man"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ローディングテキスト */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-rose-600 text-text-sm animate-pulse">
            Now Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
