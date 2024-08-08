import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import AboutPage from './AboutPage';
import WorkDetails from './Components/workDetails/Workdetails.jsx';
import './App.css';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work/:projectId" element={<WorkDetails />} />
    </Routes>
  );
}

export default App;
