import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyCQAycBu2pZsw_4JQLzRL_aESIis5csHnc",
  authDomain: "lunar-surface-operations.firebaseapp.com",
  databaseURL: "https://lunar-surface-operations-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: 'gs://lunar-surface-operations.appspot.com'
};

export const app =  firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
export const storage = getStorage(app);