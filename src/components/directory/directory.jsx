import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
// import candles from '../../assets/candles.jpg';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'code',
                    imageUrl: '#',
                    id: 1,
                    linkUrl: 'code'
                },
                {
                    title: 'write',
                    imageUrl: '#',
                    id: 2,
                    linkUrl: 'write'
                },
                {
                    title: 'dance',
                    imageUrl: '#',
                    id: 3,
                    linkUrl: 'dance'
                },
                {
                    title: 'freerun',
                    imageUrl: '#',
                    id: 4,
                    linkUrl: 'freerun'
                }
            ],
            colors: [
                {
                    title: 'red',
                    imageUrl: '#',
                    id: 1,
                    linkUrl: 'red'
                },
                {
                    title: 'orange',
                    imageUrl: '#',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'yellow',
                    imageUrl: '#',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'green',
                    imageUrl: '#',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'blue',
                    imageUrl: '#',
                    id: 5,
                    linkUrl: ''
                },
                {
                    title: 'indigo',
                    imageUrl: '#',
                    id: 6,
                    linkUrl: ''
                },
                {
                    title: 'violet',
                    imageUrl: '#',
                    id: 7,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>    
        )
    }
} 

export default Directory;