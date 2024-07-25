import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    const handleSearch = async (addressee) => {
        if (addressee) {
            try {
                console.log('Searching for:', addressee);
                const response = await axios.get(`/letters/search?addressee=${addressee}`);
                console.log('Search results:', response.data);
                setFilteredLetters(response.data);
                setError('');
            } catch (error) {
                console.error('Failed to fetch filtered letters', error);
                setError('Failed to fetch data');
                setFilteredLetters([]);
            }
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
                {loadingLetters ? <p>Loading letters...</p> : <LettersDisplay letters={filteredLetters} />}
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default LetterCard;

