import firebase from "firebase";
import { MessageInfo } from "../types";

var firebaseConfig = {
  apiKey: "AIzaSyBQHgYVSHrZdyzHi9LjYmRlv-stJ74dY8Q",
  authDomain: "my-page-e0589.firebaseapp.com",
  projectId: "my-page-e0589",
  storageBucket: "my-page-e0589.appspot.com",
  messagingSenderId: "96695873081",
  appId: "1:96695873081:web:b137a48f17bfe17a26a7e8",
  measurementId: "G-HX56RXNT32",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const addMessage = (
  message: MessageInfo | boolean,
  onIncompleted: () => void,
  onPost: () => void,
  onError: () => void
) => {
  message === true || message === false
    ? onIncompleted()
    : db
        .collection("messages")
        .add(message)
        .then(() => {
          onPost();
        })
        .catch((e) => {
          console.log(e);
          onError();
        });
};

export default firebase;
