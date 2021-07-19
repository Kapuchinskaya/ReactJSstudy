import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  //из firebase   var firebaseConfig = {
  apiKey: "AIzaSyD-SrQC7fPyTtlDDgFdUu3w-QoBvWCp2GM",
  authDomain: "mancity-491e7.firebaseapp.com",
  databaseURL: "https://mancity-491e7-default-rtdb.firebaseio.com",
  projectId: "mancity-491e7",
  storageBucket: "mancity-491e7.appspot.com",
  messagingSenderId: "514080719920",
  appId: "1:514080719920:web:0879623b07def2c208d9f5",
  measurementId: "G-T950KXQ8V3",
};

firebase.initializeApp(config);

//connecting Database
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

const firebasePromotions = firebaseDB.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };
