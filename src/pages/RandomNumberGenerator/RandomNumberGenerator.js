import React, { useState } from 'react';
import Header from '@Components/Header/Header';

const RandomNumberGenerator = () => {
    const [number, setNumber] = useState(0);
    const [error, setError] = useState('');

    const generateRandomNumber = () => {
        if (document.getElementById('random-number-generator__max').value !== '' && document.getElementById('random-number-generator__min').value !== '') {
            let max = parseInt(document.getElementById('random-number-generator__max').value);
            let min = parseInt(document.getElementById('random-number-generator__min').value);
            if (max <= min) {
                setError('Invalid range!');
            }
            else {
                let randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1))) + min;
                setNumber(randomNumber);
                setError('');
            }
        }
        else {
            setError('Please enter a valid input!')
        }
    }

    return (
        <div className='page random-number-generator'>
            <div className='container widget random-number-generator__container'>
                <Header
                    title='Random Number Generator'
                    subtitle='Enter Max and Min values and generate away!'
                />
                <h3 className='text'>Generate a random number between:</h3>
                <input type='number' className='input' id='random-number-generator__max' placeholder='Max' />
                <p className='text text--inline'>and</p>
                <input type='number' className='input' id='random-number-generator__min' placeholder='Min' />
                <button className='btn button--full' onClick={generateRandomNumber}>Generate!</button>

                {/* Check for error status and display number if there are no errors */}
                {error !== '' && <p className='text'>{error}</p>}
                {error === '' && <h1 className='text text--big'>{number}</h1>}
            </div>
        </div>
    );
}

export default RandomNumberGenerator;