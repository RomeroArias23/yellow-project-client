import React from 'react';
import './letterDisplay.css';
import { toPng } from 'html-to-image';

const YELLOW = 'YELLOW';

const LettersDisplay = ({ letters }) => {
    if (!letters.length) {
        return <p>Biscando cartas...</p>;
    }

    const downloadCard = async (elementId, fileName) => {
        const element = document.getElementById(elementId);
        if (element) {
            try {
                const dataUrl = await toPng(element);
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error('Error generating image:', error);
            }
        }
    };

    return (
        <div className="waves_main-container w-container">
            <div className="waves_center-heading">
                <div className="w-layout-grid waves_grid-features-6">
                    {letters.map((letter, index) => (
                        <div
                            className="waves_tile-features-6"
                            key={index}
                            id={`card-${index}`}
                            onClick={() => downloadCard(`card-${index}`, `Letter-${index}.png`)}
                            style={{
                                cursor: 'pointer',
                                backgroundImage: `url('https://i.ibb.co/QN0t10P/yellow-texture.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="waves_mg-bottom-16">
                                <h1 className="waves_heading-3-no-margins">A la persona que no le pude escribir por última vez</h1>
                                <p>{letter.letter}</p>
                                <p className="date">Fecha: {letter.date}</p>
                            </div>
                            <div className="watermark">
                                <code className="watermark-p">import "{YELLOW}" from './CVLTVRE'</code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LettersDisplay;




