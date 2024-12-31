import React, { useEffect, useState, useRef } from "react";
import { qaData } from "../constants/data";
import { getDoc, updateDoc, doc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";

interface QandAProps {
  uid: string;
}

const QandA: React.FC<QandAProps> = ({ uid }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (uid) {
        const userDocRef = doc(db, "users", uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        }
      }
    };
    if (uid) {
      fetchUserInfo();
    } else {
      setUserInfo(null);
    }
  }, [uid]);

  const handleAddToFavorites = async () => {
    if (selectedItem !== null && userInfo) {
      try {
        const userDocRef = doc(db, "users", uid);

        const newFavorite = {
          marvelId: qaData[selectedItem].marvelId,
          image: qaData[selectedItem].image,
          createdAt: new Date(),
        };

        const isAlreadyFavorited = userInfo.favorites?.some(
          (fav: any) => fav.marvelId === newFavorite.marvelId
        );

        if (isAlreadyFavorited) {
          alert("既にお気に入りに追加されています");
          return;
        }

        await updateDoc(userDocRef, {
          favorites: [...(userInfo.favorites || []), newFavorite],
        });

        setUserInfo((prev: any) => ({
          ...prev,
          favorites: [...(prev?.favorites || []), newFavorite],
        }));

        setIsFavorited(true);
        alert("お気に入りに追加しました");
      } catch (error) {
        console.error("お気に入り追加に失敗しました: ", error);
      }
    }
  };

  const handleRemoveFromFavorites = async () => {
    if (selectedItem !== null && userInfo) {
      try {
        const userDocRef = doc(db, "users", uid);

        const marvelIdToRemove = qaData[selectedItem].marvelId;

        await updateDoc(userDocRef, {
          favorites: arrayRemove(
            userInfo.favorites?.find(
              (fav: any) => fav.marvelId === marvelIdToRemove
            )
          ),
        });

        setUserInfo((prev: any) => ({
          ...prev,
          favorites: prev?.favorites?.filter(
            (fav: any) => fav.marvelId !== marvelIdToRemove
          ),
        }));

        setIsFavorited(false);
        alert("お気に入りから削除しました");
      } catch (error) {
        console.error("お気に入り削除に失敗しました: ", error);
      }
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedItem(index);

    const isAlreadyFavorited = userInfo?.favorites?.some(
      (fav: any) => fav.marvelId === qaData[index].marvelId
    );
    setIsFavorited(isAlreadyFavorited);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!uid) {
    return (
      <section className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-light mb-12 text-stone-50">
            ログインが必要です
          </h2>
          <p className="text-white">Q&Aを利用するにはログインしてください。</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-light mb-12 text-stone-50">
          キャラクター
        </h2>

        <div className="grid grid-cols-4 gap-8">
          {qaData.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div
                className="transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                onClick={() => handleImageClick(index)}
              >
                <div className="w-full relative">
                  <img
                    src={item.image}
                    alt={item.marvelId}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem !== null && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div
              ref={popupRef}
              className="bg-sky-950 rounded-xl p-8 max-w-lg w-full shadow-2xl"
            >
              <div className="mb-6">
                <img
                  src={qaData[selectedItem].image}
                  alt={qaData[selectedItem].marvelId}
                  className="w-full h-64 object-cover rounded-lg border-4 border-sky-900"
                />
              </div>

              <div className="flex justify-center gap-6">
                <button
                  className={`bg-teal-400 text-white py-2 px-6 rounded-full shadow-lg transition duration-300 transform ${
                    isFavorited
                      ? "bg-zinc-500 hover:bg-zinc-700"
                      : "bg-teal-400 hover:bg-teal-600"
                  }`}
                  onClick={
                    isFavorited
                      ? handleRemoveFromFavorites
                      : handleAddToFavorites
                  }
                >
                  {isFavorited ? "お気に入りから外す" : "お気に入りに追加"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QandA;
