import React, { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import LettersDisplay from '../letters/letterDisplay';
import useFetchData from '../../hooks/useFetchData';
import './letterCard.css';

function LetterCard() {
    const { data: letters, loading: loadingLetters } = useFetchData('/letters');
    const [filteredLetters, setFilteredLetters] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setFilteredLetters(letters);
    }, [letters]);

    const handleSearch = (addressee) => {
        if (addressee) {
            const filtered = letters.filter(letter => 
                letter.addressee.toLowerCase().includes(addressee.toLowerCase())
            );
            setFilteredLetters(filtered);
        } else {
            setFilteredLetters(letters);
        }
    };

    return (
        <div>
            <div className='title'>
                <SearchBar className='searchbar' onSearch={handleSearch} />
            </div>
            <div>
                {loadingLetters ? <p>Buscando cartas...</p> : <LettersDisplay letters={filteredLetters} />}
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default LetterCard;


