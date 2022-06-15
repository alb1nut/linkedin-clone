import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeORVSq1YOal65pe13tHzjZuukzj33USU",
    authDomain: "linkedin-clone-4f3ee.firebaseapp.com",
    projectId: "linkedin-clone-4f3ee",
    storageBucket: "linkedin-clone-4f3ee.appspot.com",
    messagingSenderId: "580691056776",
    appId: "1:580691056776:web:48705fe9e009ac19a3673d",
    measurementId: "G-EYF2BZZMHJ"
  };

//   Connects to databaseand sets everthing up
  const firebaseApp =firebase.initializeApp(firebaseConfig);
 
//  get firestore from firebaseApp
  const db = firebaseApp.firestore();

//   get access to authentication
const auth =firebase.auth();

export {db ,auth};