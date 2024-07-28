import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCa8yTS1XwJstzlNFhdAUuKXtQ-fk260X8",
    authDomain: "yap-pdf.firebaseapp.com",
    projectId: "yap-pdf",
    storageBucket: "yap-pdf.appspot.com",
    messagingSenderId: "666581381757",
    appId: "1:666581381757:web:1bca753187106f8c59b714",
    measurementId: "G-WFYBSMR3WG"
  };

  const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();

  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage };