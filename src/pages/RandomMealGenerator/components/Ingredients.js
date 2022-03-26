import React from 'react';
import Header from '@Components/Header/Header';

const Ingredients = (props) => {
    return (
        <div className='center-flex'>
            <div className='random-meal-generator__tab-container'>
                <Header
                    title={props.title}
                    subtitle={props.subtitle}
                />
                {props.displayIngredients}
            </div>
        </div>
    );
}

export default Ingredients;