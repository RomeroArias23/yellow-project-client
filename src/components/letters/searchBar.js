import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
    const [addressee, setAddressee] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        onSearch(addressee);  
    };

    return (
        <form onSubmit={handleSearch}>
            <div className='search'>
                <input
                    className='InputContainer'
                    type="search"
                    placeholder="Busca un nombre"
                    value={addressee}
                    onChange={(e) => setAddressee(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchBar;
