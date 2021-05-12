import * as firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
     apiKey: "AIzaSyB3bb9-Uw8g4JDINU9H18p9J4wj8WJgLjE",
     authDomain: "willy-app-2b94d.firebaseapp.com",
     databaseURL: "https://willy-app-2b94d.firebaseio.com",
     projectId: "willy-app-2b94d",
     storageBucket: "willy-app-2b94d.appspot.com",
     messagingSenderId: "458442157519",
     appId: "1:458442157519:web:0d329e5862a649b78636ba"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore();