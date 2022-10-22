import './App.scss';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Views/Home';
import About from './Views/About';
import Search from './Views/Search';

function App() {
  const [search, setSearch] = useState();

  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/search" element={ <Search/> } />
    </Routes>
  )
}

export default App;
