import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Schedule from "./components/Schedule";
import QandA from "./components/QandA";
import ContentTabs from "./components/ContentTabs";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { auth } from "./firebase";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    // 認証状態を監視
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in with UID:", user.uid);
        setUid(user.uid);
      } else {
        console.log("No user logged in");
        setUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router basename="/portfolio-marver">
      {/* サブディレクトリ用に basename を設定 */}
      <div className="bg-gradient-to-b bg-slate-950 min-h-screen text-white">
        <Header />
        <div
          className={`fixed inset-0 bg-slate-950 z-50 transition-opacity duration-1000 ease-in-out
          ${isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />
        <div
          className={`min-h-screen bg-gradient-to-b from-white transition-opacity duration-1000 ease-in-out
          ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <Routes>
            <Route
              path="/qanda"
              element={uid ? <QandA uid={uid} /> : <div>Loading...</div>}
            />
            <Route
              path="/"
              element={
                <>
                  <MainVisual />
                  <main className="relative">
                    <div>
                      <Schedule />
                      <ContentTabs />
                    </div>
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                      <div className="absolute top-1/4 left-0 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl" />
                      <div className="absolute top-2/3 right-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl" />
                    </div>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
