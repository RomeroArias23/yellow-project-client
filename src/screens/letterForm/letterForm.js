import React, { useState } from 'react';
import './letterForm.css';

function LetterForm() {
    const [formData, setFormData] = useState({
        addressee: '',
        letter: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://yellow-project.onrender.com/letters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json().catch(() => {
                throw new Error('Invalid JSON response');
            });
    
            console.log('Success:', result);
            setFormData({ addressee: '', letter: '' });
            alert("Letter successfully added!");
        } catch (error) {
            console.error('Error:', error.message);
            alert(`Failed to add letter: ${error.message}`);
        }
    };

    return (
        <div className='container'>
            <div className='box'>
                <h3>Escribe un mensaje que no hayas podido enviar</h3>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='addressee'>
                        <label htmlFor='addressee'></label>
                        <input
                            type='text'
                            id='addressee'
                            name='addressee'
                            placeholder='para:'
                            value={formData.addressee}
                            onChange={handleChange}
                            pattern='^[A-Z][a-z]*$'
                            title='Escribe el nombre de la persona a quien diriges tu carta'
                            required
                        />
                    </div>
                    <div className='letter-box'>
                        <label htmlFor='letter'></label>
                        <textarea
                            id='letter'
                            name='letter'
                            placeholder='texto'
                            value={formData.letter}
                            onChange={handleChange}
                            maxLength='150'
                            required
                        />
                    </div>
                    <div className='button'>
                        <button type='submit' className='btn' id='send'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LetterForm;
