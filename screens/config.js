import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBV9ij-U70-R-dfGXSDLiqmutLBtoHh7t8",
  authDomain: "p-60-e106f.firebaseapp.com",
  databaseURL: "https://p-60-e106f-default-rtdb.firebaseio.com",
  projectId: "p-60-e106f",
  storageBucket: "p-60-e106f.appspot.com",
  messagingSenderId: "387509614681",
  appId: "1:387509614681:web:72f7739e371f1caa331948"
};

firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();