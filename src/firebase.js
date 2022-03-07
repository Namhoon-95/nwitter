import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: Process.env.REACT_APP_API_KEY,
    authDomain: Process.env.REACT_APP_AUTH_DOMAIN,
    projectId: Process.env.REACT_APP_PROJECT_ID,
    storageBucket: Process.env.REACT_APP_STORAGE_BECKET,
    messagingSenderId: Process.env.REACT_APP_SENDER_ID,
    appId: Process.env.REACT_APP_APP_ID,
    measurementId: Process.env.REACT_APP_MEASUREMENT_ID
  };

  export default firebase.initializeApp(firebaseConfig);