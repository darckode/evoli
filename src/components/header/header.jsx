import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='title'>
            <div>
                <h1>EVOLI</h1>
                <h3>the best I can be</h3>
            </div>
        </div>
        <div className='options'>
            <Link className='option' to='/about'>ABOUT</Link>
            <Link className='option' to='/projects'>PROJECTS</Link>
            <Link className='option' to='/library'>LIBRARY</Link>
            <Link className='option' to='/shop'>SHOP</Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    LOGOUT
                </div>
            ) : (
                <Link className='option' to='/login'>
                    LOGIN
                </Link>
            )}
            <CartIcon /> 
        </div> 
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapsStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapsStateToProps)(Header);