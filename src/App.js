import React from 'react';
import Homepage from './pages/homepage/homepage';
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
