import React, { useState } from 'react';
import Header from '@Components/Header/Header';

const VisibilityToggle = () => {
    const [visible, setVisibility] = useState(false);

    return (
        <div className='page visibility-toggle'>

            <div className='container widget'>
                <Header
                    title='Visibility Toggle'
                    subtitle='For visibility toggling'
                />
                <h3 className='text'>Toggle Box</h3>
                {visible && (
                    <div>
                        <p className='text'>Hey! Here are some details you can now see!</p>
                    </div>
                )}
                <button className='btn button--small'
                    onClick={() => visible ? setVisibility(false) : setVisibility(true)}
                >{visible == false ? 'Show details' : 'Hide details'}</button>
            </div>
        </div>
    );
}

export default VisibilityToggle;