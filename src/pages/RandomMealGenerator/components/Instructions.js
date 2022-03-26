import React from 'react';
import Header from '@Components/Header/Header';

const Instructions = (props) => {
    let instructions = props.instructions.split(/(?:\r\n|\r|\n)/g)

    return (
        <div className='center-flex'>
            <div className='random-meal-generator__tab-container'>
                <Header
                    title={props.title}
                    subtitle={props.subtitle}
                />
                {instructions.map((step, index) => {
                    return <p className='text' key={index}>{step}<br /></p>
                })}
            </div>
        </div>

    );
}

export default Instructions;