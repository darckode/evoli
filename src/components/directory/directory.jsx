import React from 'react';
import MenuItem from '../menu-item/menu-item';
import SECTIONS_DATA from './directory.data';

import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = SECTIONS_DATA;
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>    
        )
    }
} 

export default Directory;