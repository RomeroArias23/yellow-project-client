import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LetterForm from './screens/letterForm/letterForm';
import LettersPage from './screens/lettersPage/lettersPage';
import CreditsScreen from './screens/credits/creditsScreen';
import Home from './screens/home/home';
import Navbar from './components/navBar/navBar';
import './global/globalStyles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letters" element={<LettersPage />} />
        <Route path="/write" element={<LetterForm />} />
        <Route path="/credits" element={<CreditsScreen />} />
      </Routes>
    </Router>
  );
}


export default App; 