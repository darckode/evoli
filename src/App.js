import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import ColorsPage from './pages/colors/colors';

import './App.css';

const CodePage = () => (
    <div>
        <h1>CODE</h1>
    </div>
); 
const WritePage = () => (
    <div>
        <h1>WRITE</h1>
    </div>
); 
const DancePage = () => (
    <div>
        <h1>DANCE</h1>
    </div>
); 
const FreerunPage = () => (
    <div>
        <h1>FREERUN</h1>
    </div>
); 

class App extends React.Component {
    render() {
        return (
            <div>
                <Header /> 
                <h1 className='title'>EVOLI</h1>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/colors' component={ ColorsPage } /> 
                    <Route exact path='/shop' component={ ShopPage } />
                     
                    <Route exact path='/code' component={CodePage} />
                    <Route exact path='/write' component={WritePage} />
                    <Route exact path='/dance' component={DancePage} />
                    <Route exact path='/freerun' component={FreerunPage} />
                </Switch>
            </div>
        )
    }
}

export default App;
