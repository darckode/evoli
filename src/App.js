import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import AboutPage from './pages/about/about';
import LibraryPage from './pages/library/library';
import ColorsPage from './pages/colors/colors';
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

import CodePage from './pages/code/code';
import WritePage from './pages/write/write';
import DancePage from './pages/dance/dance';
import FreerunPage from './pages/freerun/freerun';
import ProjectsPage from './pages/projects/projects';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); 

                userRef.onSnapshot(snapShot => {
                    setCurrentUser ({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header /> 
                
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={ AboutPage } /> 
                    <Route exact path='/projects' component={ProjectsPage} />
                    <Route exact path='/library' component={LibraryPage} />
                    <Route exact path='/shop' component={ ShopPage } />
                    <Route exact path='/login' component={ LoginPage } />

                    <Route exact path='/code' component={ CodePage } /> 
                    <Route exact path='/write' component={ WritePage } /> 
                    <Route exact path='/dance' component={ DancePage } /> 
                    <Route exact path='/freerun' component={ FreerunPage } /> 

                    <Route exact path='/colors' component={ ColorsPage } /> 
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
     setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);