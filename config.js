import firebase from 'firebase'
require("@firebase/firestore")


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaTr6HWAvGRztl87gisfo22I5YeWWdSM4",
    authDomain: "bedtime-stories-e9501.firebaseapp.com",
    databaseURL: "https://bedtime-stories-e9501.firebaseio.com",
    projectId: "bedtime-stories-e9501",
    storageBucket: "bedtime-stories-e9501.appspot.com",
    messagingSenderId: "399493906856",
    appId: "1:399493906856:web:b27d585d71c537d709dd9d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
