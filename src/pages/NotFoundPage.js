import React from 'react';
import Header from '@Components/Header/Header';

const NotFoundPage = () => {

    return (
        <div className='page'>
            <div className='container widget'>
                <Header
                    title='Page Not Found!'
                />

                <p className='text'>Seems like this page is not finished yet. Check SidebarData.js and routes.js to see if there was a mistake.</p>
            </div>
        </div>
    )
};

export default NotFoundPage;