import React from 'react';
import sidebarData from './SidebarData';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return (
            <div>
                <div className='sidebar'>
                    <ul className='sidebar__list'>
                        <h3 className='text sidebar__title'>Projects</h3>
                        {sidebarData.map((val, index) => {
                            return <li className='sidebar__text' key={index}> <Link to={val.link}>{val.title}</Link></li>
                        })
                        }
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sidebar;