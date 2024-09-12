// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import './App.css'; // Import your main stylesheet

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Multi-Step Form</h1>
        </header>
        <main>
          {/* Automatically redirect to the MultiStepForm which starts at Step 1 */}
          <Routes>
            <Route path="/" element={<Navigate to="/form" />} />
            <Route path="/form" element={<MultiStepForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
