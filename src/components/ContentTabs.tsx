import { useState, useRef, useEffect } from "react";
import type { TabType } from "../constants/data";

interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
}

interface Photo {
  src: string;
  alt: string;
}

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("videos");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const checkScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setShowLeftButton(scrollLeft > 20);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 20);
      };

      container.addEventListener("scroll", checkScroll);
      // 初期状態のチェック
      checkScroll();

      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const videos: YouTubeVideo[] = [
    {
      id: "Qm6okfrpp8E",
      title: "マーベル1",
      description: "ホワットイフの動画",
    },
    {
      id: "ljfdGYlcA_M",
      title: "マーベル2",
      description: "シャンチーの動画",
    },
    {
      id: "8d-wn4dnXmE",
      title: "マーベル3",
      description: "キャプテンアメリカの動画",
    },
    {
      id: "Fd7TpcBAeW8",
      title: "マーベル4",
      description: "サンダーボルツの動画",
    },
    {
      id: "7rmUFAgsI4M",
      title: "マーベル5",
      description: "アベンジャーズの動画",
    },
  ];

  const photos: Photo[] = [
    {
      src: "/images/dummy.jpg",
      alt: "写真タイトル1",
    },
    {
      src: "/images/dummy.jpg",
      alt: "写真タイトル2",
    },
    {
      src: "/images/dummy.jpg",
      alt: "写真タイトル3",
    },
    {
      src: "/images/dummy.jpg",
      alt: "写真タイトル4",
    },
    {
      src: "/images/dummy.jpg",
      alt: "写真タイトル5",
    },
  ];

  return (
    <section className="py-20 px-6 bg-yellow-50/50">
      <div className="container mx-auto">
        {/* タブヘッダー */}
        <div className="flex justify-center gap-12 mb-12">
          {["VIDEOS", "PHOTOS", "TWEETS"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase() as TabType)}
              className={`text-xl font-light pb-2 transition-all duration-300 
                border-b-2 hover:text-yellow-700
                ${
                  activeTab === tab.toLowerCase()
                    ? "border-yellow-400 text-yellow-800"
                    : "border-transparent text-yellow-500"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <div>
          {/* Photos Grid */}
          {activeTab === "photos" && (
            <div className="relative group">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-200 scrollbar-track-transparent"
              >
                <div className="flex gap-6 min-w-min">
                  {photos.map((photo, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedPhoto(i)}
                      className="flex-none w-[calc(50%-12px)] md:w-[calc(50%-12px)] max-w-[600px] aspect-[1/1] bg-white p-2 rounded-lg cursor-pointer
                        transition-all duration-300 hover:-translate-y-1
                        hover:shadow-[0_4px_20px_rgba(255,200,50,0.15)]"
                    >
                      <div className="relative h-full rounded-md overflow-hidden group">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/40">
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-white text-sm font-medium">
                              {photo.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 左スクロールボタン */}
              {showLeftButton && (
                <button
                  onClick={handleScrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-24
                    bg-gradient-to-r from-yellow-100/90 to-transparent
                    hover:from-yellow-200/90 transition-all duration-300
                    cursor-pointer flex items-center justify-start pl-2
                    opacity-0 group-hover:opacity-100"
                  aria-label="前の写真を見る"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/80 rounded-full">
                    <div className="w-3 h-3 border-l-2 border-t-2 border-yellow-400 rotate-[-45deg]" />
                  </div>
                </button>
              )}

              {/* 右スクロールボタン */}
              {showRightButton && (
                <button
                  onClick={handleScrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-24
                    bg-gradient-to-l from-yellow-100/90 to-transparent
                    hover:from-yellow-200/90 transition-all duration-300
                    cursor-pointer flex items-center justify-end pr-2
                    opacity-0 group-hover:opacity-100"
                  aria-label="次の写真を見る"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/80 rounded-full">
                    <div className="w-3 h-3 border-r-2 border-t-2 border-yellow-400 rotate-45" />
                  </div>
                </button>
              )}
            </div>
          )}

          {/* Videos Grid - 同様のスクロール機能を追加 */}
          {activeTab === "videos" && (
            <div className="relative group">
              <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-200 scrollbar-track-transparent">
                <div className="flex gap-6 min-w-min">
                  {videos.map((video, i) => (
                    <div
                      key={i}
                      className="flex-none w-[calc(50%-12px)] md:w-[calc(50%-12px)] max-w-[500px] aspect-video bg-white p-2 rounded-lg
                        transition-all duration-300 hover:-translate-y-1
                        hover:shadow-[0_4px_20px_rgba(255,200,50,0.15)] cursor-pointer"
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <div className="relative h-full rounded-md overflow-hidden group">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/40">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400/90 text-white">
                            ▶
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-white text-sm font-medium">
                              {video.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tweets */}
          {activeTab === "tweets" && (
            <div className="max-w-2xl mx-auto space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg
                    transition-all duration-300 hover:-translate-y-1
                    hover:shadow-[0_4px_20px_rgba(255,200,50,0.15)]"
                >
                  <div className="text-yellow-600 mb-2">2024.10.28</div>
                  <p className="text-lg text-yellow-800">
                    ツイート内容がここに表示されます。
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Photo Modal */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-yellow-400/90 
                  text-yellow-900 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* YouTube Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                className="absolute -top-10 right-0 w-10 h-10 rounded-full bg-yellow-400/90 
                  text-yellow-900 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideo(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
