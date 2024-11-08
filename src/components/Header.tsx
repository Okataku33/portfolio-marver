import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 実装済みの項目のみを残す
  const menuItems = [
    { name: 'HOME', href: '#' },
    { name: 'SCHEDULE', href: '#schedule' },
    { name: 'VIDEO', href: '#video' },
    { name: 'PHOTO', href: '#photo' },
    { name: 'Q&A', href: '#qa' },
  ];

  return (
    <>
      {/* メインヘッダー（スクロール前） */}
      <header className="relative z-50">
        <div className="absolute top-0 left-0 right-0 py-6 px-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">Riri Mizuki</div>
            <div className="flex items-center">
              <div className="flex gap-12">
                {' '}
                {/* gap-6から gap-12 に変更してスペースを広げる */}
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-800 hover:text-yellow-600 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* 固定ヘッダー（スクロール後） */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 transform
          ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Riri Mizuki</div>
          <div className="flex items-center">
            <div className="flex gap-12">
              {' '}
              {/* こちらも同様にgapを調整 */}
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-800 hover:text-yellow-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
