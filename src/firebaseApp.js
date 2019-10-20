import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD1lmJIr0MMyHiMkwaTifbOvOd9M7LnC3g",
  authDomain: "turnout-7447f.firebaseapp.com",
  databaseURL: "https://turnout-7447f.firebaseio.com",
  projectId: "turnout-7447f",
  storageBucket: "turnout-7447f.appspot.com",
  messagingSenderId: "1012890262496",
  appId: "1:1012890262496:web:c953713a156653f91ba985"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
