import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//Benji Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-M80XbLeaoPAED0Us69bGRlDppnflYt4",
  authDomain: "explorelah-71887.firebaseapp.com",
  projectId: "explorelah-71887",
  storageBucket: "explorelah-71887.appspot.com",
  messagingSenderId: "854064236460",
  appId: "1:854064236460:web:0d0cce11a7b226a4bb5c09",
  measurementId: "G-C2QX2J80E5",
};

const firebaseApp = initializeApp(firebaseConfig)
// export default firebaseConfig;
// const db = firebaseApp.firestore();

export default firebaseApp

//Could not get the bottom two exports to work, so mytrips creates its own db
// const db = getFirestore(firebaseApp);
// export default firebaseApp
