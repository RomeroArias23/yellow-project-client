import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import LettersDisplay from '../letters/letterDisplay';
import useFetchData from '../../hooks/useFetchData';
import './letterCard.css';

function LetterCard() {
    const { data: letters, loading: loadingLetters } = useFetchData('/letters');
    const [filteredLetters, setFilteredLetters] = useState([]);
    const [error, setError] = useState('');  // Manage error state

    useEffect(() => {
        setFilteredLetters(letters); 
    }, [letters]);

    const handleSearch = async (addressee) => {
        if (addressee) {
            try {
                const response = await axios.get(`/letters/search?addressee=${addressee}`);
                setFilteredLetters(response.data);
                setError('');  // Reset error on successful fetch
            } catch (error) {
                console.error('Failed to fetch filtered letters', error);
                setError('Failed to fetch data');  // Set error message for the UI
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
                {error && <p className="error">{error}</p>}  // Display error message if present
            </div>
        </div>
    );
}

export default LetterCard;
