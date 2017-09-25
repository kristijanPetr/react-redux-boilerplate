import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC9t-QeYqfj0x8Ai8jK97HYJ2BWiGx3yuA",
  authDomain: "reactjshost.firebaseapp.com",
  databaseURL: "https://reactjshost.firebaseio.com",
  projectId: "reactjshost",
  storageBucket: "reactjshost.appspot.com",
  messagingSenderId: "275614406890"
};

export const firebaseApp = firebase.initializeApp(config);

export const userRef = firebase.database(); //.ref("users");

// export const completeGoalRef = firebase.database().ref("completeGoals");
