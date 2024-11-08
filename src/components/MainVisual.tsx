import { useState, useEffect, useRef } from 'react';

export default function MainVisual() {
  const [isVisible, setIsVisible] = useState({
    profile: false,
    photo: false,
    intro: false,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, profile: true })),
              100
            );
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, photo: true })),
              300
            );
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, intro: true })),
              500
            );
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="pt-32 min-h-screen relative bg-gradient-to-b from-yellow-50/30 to-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* プロフィールと紹介文 */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* プロフィール */}
            <div
              className={`flex flex-col justify-start p-12 bg-white/80 backdrop-blur-sm rounded-2xl
    transform transition-all duration-1000
    ${
      isVisible.profile
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 -translate-x-10'
    }`}
            >
              <h1 className="mb-8 relative">
                <span className="font-dancing text-4xl text-yellow-800 relative z-10 block text-center">
                  Profile
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">❀</span>
                  <span className="text-yellow-300 text-xl">✿</span>
                  <span className="text-yellow-400 text-2xl">❀</span>
                </div>
              </h1>

              <div className="space-y-6 text-yellow-700 mt-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium min-w-[100px] text-yellow-800 relative">
                    身長
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-yellow-300 text-sm">
                      ❀
                    </span>
                  </span>
                  <span className="text-lg">151.4cm</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-medium min-w-[100px] text-yellow-800 relative">
                    出身
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-yellow-300 text-sm">
                      ✿
                    </span>
                  </span>
                  <span className="text-lg">長崎県佐世保市</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-medium min-w-[100px] text-yellow-800 relative">
                    血液型
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-yellow-300 text-sm">
                      ❀
                    </span>
                  </span>
                  <span className="text-lg">O型</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-medium min-w-[100px] text-yellow-800 relative">
                    MBTI
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-yellow-300 text-sm">
                      ✿
                    </span>
                  </span>
                  <span className="text-lg">ENFP</span>
                </div>
              </div>
            </div>
            {/* 紹介文 */}
            <div
              className={`relative p-8 backdrop-blur-sm rounded-2xl
                transform transition-all duration-1000 delay-300
                ${
                  isVisible.intro
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="prose prose-lg">
                <p className="text-yellow-700 leading-relaxed mb-4">
                  長崎県佐世保市で生まれ育ち、幼い頃から大好きだったマーメイドラグーンに今でも心を躍らせる普通の女の子。
                  <br />
                  配信者としての経験を活かしながら、夢であるアイドルへの道を歩み始めました。
                  <br />
                  みなさんの生活の一部となり、小さな幸せや癒しを届けられるアイドルになれるよう、日々頑張っています。
                </p>
              </div>

              {/* 装飾的な光の効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/0 via-yellow-100/20 to-yellow-100/0 rounded-lg"></div>
            </div>
          </div>

          {/* 写真 */}
          <div
            className={`w-full md:w-1/2 relative transform transition-all duration-1000 
              ${
                isVisible.photo
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/second-photo.jpg"
                alt="Profile Photo"
                className="w-full h-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 right-0 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
