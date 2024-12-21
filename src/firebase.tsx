import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebaseの設定オブジェクト
const firebaseConfig = {
  apiKey: "AIzaSyBBnEFnXzRFCv2LCL_241sFpzPlAgm03JI",
  authDomain: "fir-portfolio-c3f5a.firebaseapp.com",
  projectId: "fir-portfolio-c3f5a",
  storageBucket: "fir-portfolio-c3f5a.firebasestorage.app",
  messagingSenderId: "283636616973",
  appId: "1:283636616973:web:abe27cda6db6ef167e2a44",
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// 型推論により、auth、provider、db の型が適切に設定される
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
