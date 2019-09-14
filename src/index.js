import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyC7p68DMr4EVDQotKpj9DYvmFSRqpxKimU",
  authDomain: "evernote-clone-ca38f.firebaseapp.com",
  databaseURL: "https://evernote-clone-ca38f.firebaseio.com",
  projectId: "evernote-clone-ca38f",
  storageBucket: "evernote-clone-ca38f.appspot.com",
  messagingSenderId: "725170777747",
  appId: "1:725170777747:web:a57bb71fb5b097975b6766"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
