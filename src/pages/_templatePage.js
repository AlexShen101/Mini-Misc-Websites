import React, { useState } from 'react';
import Header from '@Components/Header/Header';

const Template = () => {

    return (
        <div className='page'>
            <Header
                title='title'
                subtitle='sub'
            />
            <div className='container widget'>
            </div>
        </div>
    )
};

export default Template;