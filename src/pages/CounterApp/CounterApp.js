import React, { useState } from 'react';
import Header from '@Components/Header/Header';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='page counter-app center-items'>
            <div className='container widget'>
                <Header
                    title='Counter App'
                />
                <h3 className='text'>{`Count: ${count}`}</h3>
                <div className='counter__buttons'>
                    <button className='btn button--small' onClick={() => { setCount(count + 1) }}>+1</button>
                    <button className='btn button--small' onClick={() => { setCount(count - 1) }}>-1</button>
                    <button className='btn button--small' onClick={() => { setCount(0) }}>Reset</button>
                </div>
            </div>
        </div>

    );
}
export default CounterApp;