import React from 'react';
import { Link } from 'react-router-dom';

import LIBRARY_DATA from './library.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';
 import './library.scss';
 
class LibraryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: LIBRARY_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='library-page'>
                <div>
                    {
                        collections.map(({ id, ...otherCollectionProps }) => (
                            <CollectionPreview key={id} { ...otherCollectionProps } />
                        ))
                    }
                </div>
                <div className='library-link'>
                    <Link className='link' to='/code'>CODE</Link>
                    <Link className='link' to='/write'>WRITE</Link>
                    <Link className='link' to='/dance'>DANCE</Link>
                    <Link className='link' to='/freerun'>FREERUN</Link>
                </div>
            </div>
        )
    }
}

export default LibraryPage;