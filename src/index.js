import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookDetail from './BookDetail'; // cuando lo tengas hecho

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
  </React.StrictMode>
);

reportWebVitals();
