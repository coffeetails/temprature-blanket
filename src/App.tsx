import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'
import HomeView from './Views/HomeView';
import AboutView from './Views/AboutView';
import ColorView from './Views/ColorView';
import SearchView from './Views/SearchView';
import { useState } from 'react';
import { Weather } from './models/models';

function App() {
    const [displayWeather, setDisplayWeather] = useState<Weather | null>(null);
    
    const supabase = createClient('https://pxpnvjvtmnvoarrcxtse.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4cG52anZ0bW52b2FycmN4dHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0ODgxNzksImV4cCI6MTk5MjA2NDE3OX0.gdRuDktzgUFsO7QSqO9a0spUeJDBhpXUMqVc7zvFzPQ')

    async function getData() {
        const countries = await supabase.from('countries').select()
        console.log(countries.data)
        const temperatures = await supabase.from('temperatures').select();
        console.log(temperatures.data)
        const data = await supabase.from('temperatures').select('*')
        console.log(JSON.stringify(data))
    }
    
    getData();
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
