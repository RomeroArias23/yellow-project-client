import React from 'react';
import './letterDisplay.css';

const LettersDisplay = ({ letters }) => {
    if (!letters.length) {
        return <p>Loading letters...</p>;
    }

    return (
        <div className="waves_main-container w-container">
            <div className="waves_center-heading">
                <div className="w-layout-grid waves_grid-features-6">
                    {letters.map((letter, index) => (
                        <div className="waves_tile-features-6" key={index}>
                            <div className="waves_mg-bottom-16">
                                <h1 className="waves_heading-3-no-margins">Para: {letter.addressee}</h1>
                                <p>{letter.letter}</p>
                                <p className="date">Fecha: {letter.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LettersDisplay;

