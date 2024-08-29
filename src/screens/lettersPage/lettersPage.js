import React, { useState } from 'react';
import LetterCard from '../../components/letters/letterCard';
import './lettersPage.css';

const LettersPage = () => {
  const [letters, setLetters] = useState([]);

  return (
    <div className='letters-page'>
      <p className='instructions'>Pulsa sobre tu carta para descargarla</p>
      <LetterCard setLetters={letters}/>
    </div>
  )
}

export default LettersPage;