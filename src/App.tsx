import './App.scss';
import { Route, Routes } from 'react-router-dom';

import HomeView from './Views/HomeView';
import AboutView from './Views/AboutView';
import SearchView from './Views/SearchView';
import { useState } from 'react';
import { Weather } from './models/models';
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

function App() {
    const [displayWeather, setDisplayWeather] = useState<Weather | null>(null);
    const firebaseConfig = {
    apiKey: "AIzaSyDZbGulKwxHUkz4Jhb4vFf3HRtA3Fsyu0Y",
    authDomain: "tempraturfilt.firebaseapp.com",
    projectId: "tempraturfilt",
    storageBucket: "tempraturfilt.appspot.com",
    messagingSenderId: "842551959313",
    appId: "1:842551959313:web:67ee11924f5b686aca36b0"
    };
    const firestore = initializeApp(firebaseConfig);


    const auth = getAuth();
    signInAnonymously(auth)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error " + errorCode, errorMessage);
    });
    
    return (
        <Routes>
            <Route path="/" element={ <HomeView displayWeather={displayWeather} setDisplayWeather={setDisplayWeather} /> } />
            <Route path="/about" element={ <AboutView /> } />
            <Route path="/search" element={ <SearchView setDisplayWeather={setDisplayWeather} firestore={firestore} /> } />
        </Routes>
    )
}

export default App;
