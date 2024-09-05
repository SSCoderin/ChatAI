import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/chatai.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Chat />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
