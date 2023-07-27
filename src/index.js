import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration (public keys)

const firebaseConfig = {

  apiKey: "AIzaSyDIcVytdUbH308ymmVm7JZiSsuJx-t76a8",

  authDomain: "my-react-blog-150b2.firebaseapp.com",

  projectId: "my-react-blog-150b2",

  storageBucket: "my-react-blog-150b2.appspot.com",

  messagingSenderId: "677658816243",

  appId: "1:677658816243:web:26bbe5295c1982c7e51186"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
