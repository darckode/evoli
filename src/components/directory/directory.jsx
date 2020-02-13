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
                    title: 'candles',
                    imageUrl: 'https://fee.org/media/26184/scentedcandle.jpg?anchor=center&mode=crop&width=1920&rnd=131602403570000000',
                    id: 1
                },
                {
                    title: 'hearts',
                    imageUrl: '#',
                    id: 2
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.sections.map(({ title, imageUrl, id }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                    ))
                }
            </div>    
        )
    }
} 

export default Directory;