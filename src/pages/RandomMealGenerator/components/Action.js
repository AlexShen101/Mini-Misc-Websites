import React from 'react';
import Header from '@Components/Header/Header';

const Action = (props) => {
    return (
        <div className='center-flex'>
            <div className='container widget random-meal-generator__large-container'>
                <Header
                    title={props.title}
                    subtitle={props.subtitle}
                />
                <button className='btn button--full button--XL' onClick={props.generateMeal}>Click Me!</button>
            </div>
        </div>

    );
}

export default Action;