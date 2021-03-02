import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBNoRNd2mLbWy6w4SDS_tvymykLPPSKek4",
    authDomain: "coderhouse-trank.firebaseapp.com",
    projectId: "coderhouse-trank",
    storageBucket: "coderhouse-trank.appspot.com",
    messagingSenderId: "610151543921",
    appId: "1:610151543921:web:714fe69ae93d617cd717d0",
    measurementId: "G-8TQRM1WJHY"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);