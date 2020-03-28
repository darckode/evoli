import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';


// import HomePage from './pages/homepage/homepage';
// import AboutPage from './pages/about/about';
// import LibraryPage from './pages/library/library';
// import ColorsPage from './pages/colors/colors';
// import ShopPage from './pages/shop/shop';
// import CheckoutPage from './pages/checkout/checkout';
// import LoginPage from './pages/login/login';

import CodePage from './pages/code/code';
import WritePage from './pages/write/write';
import DancePage from './pages/dance/dance';
import FreerunPage from './pages/freerun/freerun';

// import ProjectsPage from './pages/projects/projects';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession  } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage /> )
          }
        />
        <Route path='/code' component={ CodePage } /> 
        <Route path='/write' component={ WritePage } /> 
        <Route path='/dance' component={ DancePage } /> 
        <Route path='/freerun' component={ FreerunPage } /> 
      </Switch>
    </div>
    // <div>
    //   <Header />   
    //   <Switch>
    //       <Route exact path='/' component={HomePage} />
    //       <Route exact path='/about' component={ AboutPage } /> 
    //       <Route exact path='/projects' component={ProjectsPage} />
    //       <Route exact path='/library' component={LibraryPage} />
    //       <Route path='/shop' component={ ShopPage } />
    //       <Route exact path='/checkout' component={ CheckoutPage } />
    //       <Route 
    //           exact 
    //           path='/login' 
    //           render={() => 
    //               this.props.currentUser ? (
    //                   <Redirect to='/' /> 
    //               ) :  (
    //                   <LoginPage />
    //               )
    //           }
    //       />

    //       <Route path='/colors' component={ ColorsPage } /> 
    //   </Switch>
    // </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
