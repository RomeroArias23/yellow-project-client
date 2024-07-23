import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import LettersDisplay from '../letters/letterDisplay';
import useFetchData from '../../hooks/useFetchData';
import './letterCard.css';

function LetterCard() {
    const { data: letters, loading: loadingLetters } = useFetchData('/letters');
    const [filteredLetters, setFilteredLetters] = useState([]);

    useEffect(() => {
        setFilteredLetters(letters); 
    }, [letters]);

    const handleSearch = async (addressee) => {
        if (addressee) {
            try {
                const response = await axios.get(`http://localhost:3000/letters/search?addressee=${addressee}`);
                setFilteredLetters(response.data);
            } catch (error) {
                console.error('Failed to fetch filtered letters', error);
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
        </div>
    );
}

export default LetterCard;