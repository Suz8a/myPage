import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { MessageInfo } from '../types';
const firebaseConfig = {
  apiKey: 'AIzaSyBQHgYVSHrZdyzHi9LjYmRlv-stJ74dY8Q',
  authDomain: 'my-page-e0589.firebaseapp.com',
  projectId: 'my-page-e0589',
  storageBucket: 'my-page-e0589.appspot.com',
  messagingSenderId: '96695873081',
  appId: '1:96695873081:web:b137a48f17bfe17a26a7e8',
  measurementId: 'G-HX56RXNT32',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const addMessage = async (
  message: MessageInfo | boolean,
  onIncompleted: () => void,
  onPost: () => void,
  onError: () => void
) => {
  if (message === true || message === false) {
    onIncompleted();
    return;
  }
  try {
    await addDoc(collection(db, 'messages'), message);
    onPost();
  } catch (e) {
    console.log(e);
    onError();
  }
};

export default app;
