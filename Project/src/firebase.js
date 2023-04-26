import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdtjesJvnc4w6T2aJlBc3C9Q2JM_9NS-I",
  authDomain: "todo-list-ea017.firebaseapp.com",
  databaseURL: "https://todo-list-ea017-default-rtdb.firebaseio.com",
  projectId: "todo-list-ea017",
  storageBucket: "todo-list-ea017.appspot.com",
  messagingSenderId: "983557641844",
  appId: "1:983557641844:web:297e9e790daaec5f46e321"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
