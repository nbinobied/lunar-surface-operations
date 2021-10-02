import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import { getStorage } from "firebase/storage";



export const app =  firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
export const storage = getStorage(app);
