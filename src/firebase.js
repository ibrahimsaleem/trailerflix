import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyD3bZ_ku3553DHQksktOcb5Tt00qLqWHVo",
  authDomain: "trailerflix99.firebaseapp.com",
  projectId: "trailerflix99",
  storageBucket: "trailerflix99.appspot.com",
  messagingSenderId: "469979224694",
  appId: "1:469979224694:web:27c1bde89db9b1fd905d57",
  measurementId: "G-259P1LWBKJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { auth };
  export default db;