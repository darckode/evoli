import React from 'react';
import logo from './logo.svg';
import Homepage from './homepage';
import './App.css';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>EVOLI</h1>
                <Homepage />
            </div>
        )
    }
}

export default App;
