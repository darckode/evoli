import React from 'react';
import COLORS_DATA from './colors.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';
 import './colors.scss';
 
class ColorsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: COLORS_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='color-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} { ...otherCollectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default ColorsPage;