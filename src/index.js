import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGz6sG9zAGF_dn-JEg9RrU4Y1Dixuw1YM",
  authDomain: "react-ecommerce-sk.firebaseapp.com",
  projectId: "react-ecommerce-sk",
  storageBucket: "react-ecommerce-sk.appspot.com",
  messagingSenderId: "493915558145",
  appId: "1:493915558145:web:dbf1dc7d3610c866328b00"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
