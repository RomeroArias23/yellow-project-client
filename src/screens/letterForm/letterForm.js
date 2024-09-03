import React, { useState } from 'react';
import './letterForm.css';
import Swal from 'sweetalert2';

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
        
        // Transform addressee to Title Case
        const formattedData = {
            ...formData,
            addressee: formData.addressee
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')
        };

        try {
            const response = await fetch('https://yellow-project-api.onrender.com/letters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json().catch(() => {
                throw new Error('Invalid JSON response');
            });

            console.log('Success:', result);
            setFormData({ addressee: '', letter: '' });

            // Show SweetAlert2 with custom buttons
            Swal.fire({
                title: 'Gracias por enviar tu carta!',
                html: `
                    <p style="color: grey;">Puedes buscar y descargar tu mensaje en la pestaña de Cartas.</p>
                    <a href="https://onerpm.link/721046957373" target="_blank" rel="noopener noreferrer">
                        <button class="swal2-confirm swal2-styled" style="background-color: #3085d6; border: none;">Escuchar { YELLOW }</button>
                    </a>
                `,
                showConfirmButton: false,
                icon: 'success'
            });
        } catch (error) {
            console.error('Error:', error.message);
            Swal.fire({
                title: 'Error!',
                text: `Failed to add letter: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className='container'>
            <div className='box'>
                <h3>deja un mensaje a la persona que no le pudiste escribir</h3>
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
