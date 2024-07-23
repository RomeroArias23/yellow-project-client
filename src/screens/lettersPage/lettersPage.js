import React, { useState } from 'react';
import LetterCard from '../../components/letters/letterCard';

const LettersPage = () => {
  const [letters, setLetters] = useState([]);

  return (
    <div>
      <LetterCard setLetters={letters}/>
    </div>
  )
}

export default LettersPage;