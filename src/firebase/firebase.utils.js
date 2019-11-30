import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFYz2xWIE9XgR2gWCqy14Zuba2tv17-3s",
    authDomain: "shopping-db-cccde.firebaseapp.com",
    databaseURL: "https://shopping-db-cccde.firebaseio.com",
    projectId: "shopping-db-cccde",
    storageBucket: "shopping-db-cccde.appspot.com",
    messagingSenderId: "746966042648",
    appId: "1:746966042648:web:31753d20cbb3eea6399b6d",
    measurementId: "G-6WCFY7R83J"
  };

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth){
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email }= userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;

