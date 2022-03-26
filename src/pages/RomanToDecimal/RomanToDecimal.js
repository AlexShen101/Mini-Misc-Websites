import React, { useState } from 'react';
import Header from '@Components/Header/Header';

const RomanToDecimal = () => {
    const [numeral, setNumeral] = useState('');
    const [decimal, setDecimal] = useState(0);
    const [error, setError] = useState('');

    const resetDecimal = () => {
        setDecimal(0);
    }

    const romanToInt = (str) => {
        const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let num = 0;
        let count = 0;

        for (let i = 0; i < str.length; i++) {
            const prev = roman[str[i - 1]];
            const curr = roman[str[i]];
            const next = roman[str[i + 1]];

            if (next >= curr && curr > prev) {
                setError('Invalid ordering');
                return;
            }
            else if (curr < next) {
                if (curr * 50 <= next) {
                    setError('Subtraction Difference Error.');
                    return;
                }
                else if (curr != 1 && curr != 10 && curr != 100) {
                    setError('Invalid Subtractor Error.');
                    return;
                }
                else if (count >= 1) {
                    setError('Too Many Subtractors Error.');
                    return;
                }
                else {
                    num -= curr;
                }
            }
            else {
                if (curr == 1 || curr == 10 || curr == 100) {
                    count++;
                }
                if (count === 4) {
                    setError('Four in a Row Error');
                    return;
                }
                num += curr;
            }


        }
        return num;
    };

    const convert = () => {
        if (numeral === '') {
            setError('Nothing was submitted.');
        }
        else if (!/^[IVXLCDM]+$/.test(numeral)) {
            setError('Invalid letter entered!');
        }
        else {
            setError('');
            let num = romanToInt(numeral);
            setDecimal(num);
        }
        setNumeral('');

    }

    return (
        <div className='page'>
            <div className='container widget'>
                <Header
                    title='Roman to Decimal Numbers Converter'
                />
                <form onSubmit={(e) => {
                    e.preventDefault();
                    resetDecimal();
                    convert();
                    return false;
                }}
                >
                    <h3 className='text'>Enter a roman numberal:</h3>
                    <input className='input form__input' type='text' value={numeral} onChange={(e) => setNumeral(e.target.value)}></input>
                    <button className='btn form__button'>Convert</button>

                </form>

                {error !== '' && <p className='text'>{error}</p>}

                {error === '' &&
                    <div>
                        <h3 className='text'>Decimal Conversion:</h3>
                        <p className='text text--huge'>{decimal}</p>
                    </div>}
            </div>
        </div>
    )
}

export default RomanToDecimal;

