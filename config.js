import * as firebase from 'firebase';

require('@firebase/firestore');
var firebaseConfig = {
  apiKey: "AIzaSyABmd8lddIuv2CykM2B9POG9A5jF1P8sU0",
  authDomain: "storyhub-f0e4e.firebaseapp.com",
  databaseURL: "https://storyhub-f0e4e.firebaseio.com",
  projectId: "storyhub-f0e4e",
  storageBucket: "storyhub-f0e4e.appspot.com",
  messagingSenderId: "741613358499",
  appId: "1:741613358499:web:f050719fcdcfab11155e16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();