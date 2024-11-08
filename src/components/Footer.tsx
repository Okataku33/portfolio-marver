import { Instagram, Youtube, Facebook, Music } from 'lucide-react';

// Xのアイコンをカスタムコンポーネントとして作成
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const snsLinks = [
    { name: 'X', icon: <XIcon className="w-5 h-5" />, url: '#' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, url: '#' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, url: '#' },
    { name: 'TikTok', icon: <Music className="w-6 h-6" />, url: '#' },
  ];

  const menuLinks = [
    { name: 'プライバシーポリシー', url: '#' },
    { name: '会員規約', url: '#' },
    { name: '特定商取引法に関する表記', url: '#' },
    { name: '支払い期日/解約方法について', url: '#' },
    { name: '推奨環境', url: '#' },
    { name: 'ヘルプ / お問い合わせ', url: '#' },
    { name: '会員登録', url: '#' },
    { name: 'ログイン', url: '#' },
  ];

  return (
    <footer className="py-16 bg-yellow-50/50">
      <div className="container mx-auto px-6">
        {/* SNSアイコン */}
        <div className="flex justify-center gap-8 mb-12">
          {snsLinks.map((sns) => (
            <a
              key={sns.name}
              href={sns.url}
              className="text-yellow-700/70 hover:text-yellow-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.name}
            >
              {sns.icon}
            </a>
          ))}
        </div>

        {/* メニューリンク */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-sm">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-yellow-700/70 hover:text-yellow-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* コピーライト */}
        <div className="text-center text-sm text-yellow-700/70">
          <p>
            © Riri Mizuki <a href="#" className="hover:text-yellow-800"></a>
          </p>
        </div>
      </div>
    </footer>
  );
}
