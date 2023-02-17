import './App.scss';
import { Route, Routes } from 'react-router-dom';

import HomeView from './Views/HomeView';
import AboutView from './Views/AboutView';
import ColorView from './Views/ColorView';
import SearchView from './Views/SearchView';
import { useState } from 'react';
import { Weather } from './models/models';

function App() {
    const [displayWeather, setDisplayWeather] = useState<Weather | null>(null);

    return (
        <Routes>
            <Route path="/" element={ <HomeView displayWeather={displayWeather} setDisplayWeather={setDisplayWeather} /> } />
            <Route path="/about" element={ <AboutView /> } />
            <Route path="/color" element={ <ColorView /> } />
            <Route path="/search" element={ <SearchView setDisplayWeather={setDisplayWeather} /> } />
        </Routes>
    )
}

export default App;
