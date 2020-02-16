import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/code'>CODE</Link>
            <Link className='option' to='/write'>WRITE</Link>
            <Link className='option' to='/dance'>DANCE</Link>
            <Link className='option' to='/freerun'>FREERUN</Link>
        </div>         
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/colors'>COLORS</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/login'>LOGIN</Link>
            }
        </div> 
    </div>
);

export default Header;