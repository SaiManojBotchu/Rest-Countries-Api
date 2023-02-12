import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Country from './pages/Country';
import NoPage from './pages/NoPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = !isDarkMode && 'light-theme';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Header dark={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
