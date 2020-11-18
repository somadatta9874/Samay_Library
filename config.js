import firebase from 'firebase/app'
require('@firebase/app').default;

var firebaseConfig = {
 
    apiKey: "AIzaSyD7SsQb0Mppki4OBZOpm_RNw0Sup5nK1hQ",
    authDomain: "wily-48fb0.firebaseapp.com",
    databaseURL: "https://wily-48fb0.firebaseio.com",
    projectId: "wily-48fb0",
    storageBucket: "wily-48fb0.appspot.com",
    messagingSenderId: "72842777727",
    appId: "1:72842777727:web:e55f4bb41db7bb0861db4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
