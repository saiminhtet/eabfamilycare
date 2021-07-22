import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';
// import { seedDatabase } from '../seed';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyBnysrU8FhrKGDI2W53l6pwbM87GfLS8nM',
  authDomain: 'eabfamilycare.firebaseapp.com',
  projectId: 'eabfamilycare',
  storageBucket: 'eabfamilycare.appspot.com',
  messagingSenderId: '901617380437',
  appId: '1:901617380437:web:81008acd896308e31d38dc',
  measurementId: 'G-8PZNKNTFG6'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);
console.log('firebase', firebase);
export { firebase, FieldValue };
