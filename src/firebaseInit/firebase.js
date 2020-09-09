import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzx_g8C06cDstS-SjA1uP63CjoXQKsIJY",
    authDomain: "chat-react-app-6e7a9.firebaseapp.com",
    databaseURL: "https://chat-react-app-6e7a9.firebaseio.com",
    projectId: "chat-react-app-6e7a9",
    storageBucket: "chat-react-app-6e7a9.appspot.com",
    messagingSenderId: "997443432223",
    appId: "1:997443432223:web:0d73eefbc10ea92bd3ca2a",
    measurementId: "G-LHM98ZGMR5"
})

const db =firebaseApp.firestore()
export default db