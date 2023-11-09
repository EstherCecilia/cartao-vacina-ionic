import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcqlsfWiFTgtWAhd59-P1-HNAmW_tWhk4",
  authDomain: "cartao-vacina-bd0ca.firebaseapp.com",
  projectId: "cartao-vacina-bd0ca",
  storageBucket: "cartao-vacina-bd0ca.appspot.com",
  messagingSenderId: "66013464293",
  appId: "1:66013464293:web:4ce6b295933604fd93f60c",
};
const app: any = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
