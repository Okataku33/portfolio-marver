import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, provider } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  uid: string | null;
}

export default function Header({ uid }: HeaderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth");
    if (authStatus === "true") {
      setIsAuth(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ユーザー情報を Firestore から取得
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (isAuth && auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        }
      }
    };

    fetchUserInfo();
  }, [isAuth]);

  // ログアウト処理
  const handleLogout = () => {
    const confirmLogout = window.confirm("本当にログアウトしますか？");
    if (confirmLogout) {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      setUserInfo(null);
      navigate("/");
    }
  };

  // ログイン処理
  const loginInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        createdAt: new Date(),
      });

      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  // メニュー項目の定義
  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "SCHEDULE", href: "#schedule" },
    { name: "VIDEO", href: "#video" },
    { name: "PHOTO", href: "#photo" },
    { name: "Q&A", href: "#qa" },
    ...(isAuth
      ? [{ name: "ログアウト", href: "#", onClick: handleLogout }]
      : [{ name: "ログイン", href: "#", onClick: loginInWithGoogle }]),
  ];

  return (
    <>
      {/* メインヘッダー（スクロール前） */}
      <header className="relative z-50">
        <div className="absolute top-0 left-0 right-0 py-6 px-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-stone-50 font-[PressStart2P]">
              MARVERクイズ
            </div>
            <div className="flex items-center">
              <div className="flex gap-12">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.onClick}
                    className="text-sm text-stone-50 hover:text-yellow-600 transition-colors font-[PressStart2P]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* ユーザー情報表示 */}
              {isAuth && userInfo && (
                <div className="flex items-center gap-4 ml-4 bg-amber-100 p-2 rounded-lg shadow-md border border-gray-200">
                  <img
                    src={userInfo.photoURL || "/images/dummy.jpg"}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-2"
                  />
                  <div className="text-xs text-stone-50 font-[PressStart2P]">
                    <p className="font-semibold text-sm">{userInfo.name}</p>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* 固定ヘッダー（スクロール後） */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 transform
          ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-stone-50 font-[PressStart2P]">
            MARVERクイズ
          </div>
          <div className="flex items-center">
            <div className="flex gap-12">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className="text-sm text-stone-50 hover:text-yellow-600 transition-colors font-[PressStart2P]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* ユーザー情報表示 */}
            {isAuth && userInfo && (
              <div className="flex items-center gap-4 ml-4 bg-white p-2 rounded-lg shadow-md border border-gray-200">
                <img
                  src={userInfo.photoURL || "/images/dummy.jpg"}
                  alt="User Avatar"
                  className="w-14 h-14 rounded-full border-2 border-yellow-600"
                />
                <div className="text-sm text-stone-50 font-[PressStart2P]">
                  <p className="font-semibold text-lg">{userInfo.name}</p>
                  <p className="text-xs text-gray-500">{userInfo.email}</p>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
