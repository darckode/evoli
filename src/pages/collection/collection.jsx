import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item';

import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.scss';

const CollectionPage = ({ collection  }) => {
    const { title, items } = collection;
    return (
        <div className='collection'>
            <Link to={`/shop/${title}`} className='title'>{ title }</Link>
            <div className='item'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
};

const mapsStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapsStateToProps)(CollectionPage);