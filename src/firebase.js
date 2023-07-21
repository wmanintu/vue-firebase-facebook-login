import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: 'preorder-8a6e9.firebaseapp.com',
  databaseURL: 'https://preorder-8a6e9.firebaseio.com',
  projectId: 'preorder-8a6e9',
  storageBucket: 'preorder-8a6e9.appspot.com',
  messagingSenderId: '762948999290'
};


export const firebaseApp = initializeApp(firebaseConfig);