export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-yellow-50">
      <div className="relative">
        {/* メインのハート */}
        <div className="w-16 h-16 animate-pulse">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-400">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* 周りの小さなハート */}
        <div className="absolute -top-4 -left-4 w-8 h-8 animate-bounce delay-100">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-300">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="absolute -top-2 -right-4 w-6 h-6 animate-bounce delay-200">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-300">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="absolute -bottom-2 -right-2 w-7 h-7 animate-bounce delay-300">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-300">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-yellow-600 text-sm animate-pulse">
            Now Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
