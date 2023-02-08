import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Country from './pages/Country';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
