import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <h1 id='header__title'>{props.title}</h1>
            {props.subtitle != null && (
                <h3 id='header__subtitle'>{props.subtitle}</h3>
            )}
        </div>
    );
}

Header.defaultProps = {
    title: 'Insert Header'
}
export default Header;