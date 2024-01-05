import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inner from './pages/Inner';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inner" element={<Inner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
