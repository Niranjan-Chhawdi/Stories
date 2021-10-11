import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyDzXMJBhAx3oTNHi2USSnM0kv9ybhePxbI",
  authDomain: "story-hub-d0f37.firebaseapp.com",
  projectId: "story-hub-d0f37",
  storageBucket: "story-hub-d0f37.appspot.com",
  messagingSenderId: "583079377221",
  appId: "1:583079377221:web:5e6421a70cfbc95940662c"
};

firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()    