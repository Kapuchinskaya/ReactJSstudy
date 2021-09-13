import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import 'firebase/storage';

 import {cityDb} from './temp/m-city-export'

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

//passing data to FB

const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });



export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
}