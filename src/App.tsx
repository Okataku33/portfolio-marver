import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Schedule from "./components/Schedule";
import QandA from "./components/QandA";
import ContentTabs from "./components/ContentTabs";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // isLoadingがtrueの間はLoadingSpinnerのみを表示
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // メインコンテンツ
  return (
    <div className="relative">
      {/* トランジションオーバーレイ */}
      <div
        className={`fixed inset-0 bg-yellow-50 z-50 transition-opacity duration-1000 ease-in-out
          ${isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <Header />
      {/* メインコンテンツ */}
      <div
        className={`min-h-screen bg-gradient-to-b from-white via-yellow-50/20 to-yellow-100/20
          transition-opacity duration-1000 ease-in-out
          ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        <MainVisual />

        <main className="relative">
          <div className="space-y-32 md:space-y-15">
            <Schedule />
            <ContentTabs />
            <QandA />
          </div>

          {/* 背景装飾 */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl" />
            <div className="absolute top-2/3 right-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl" />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
