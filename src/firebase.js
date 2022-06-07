import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
process.env.API_KEY
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
