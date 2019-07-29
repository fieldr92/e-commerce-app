import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAVtt5WG-KmqrtMgcKLa5p9ncHgZwthiC4',
  authDomain: 'e-commerce-app-ralph.firebaseapp.com',
  databaseURL: 'https://e-commerce-app-ralph.firebaseio.com',
  projectId: 'e-commerce-app-ralph',
  storageBucket: '',
  messagingSenderId: '1000379614674',
  appId: '1:1000379614674:web:e067d15b9722b281'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error('error creating user', err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
