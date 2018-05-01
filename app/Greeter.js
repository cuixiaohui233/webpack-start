//Greeter,js
import React, {Component} from 'react';
import config from './config.json';
import './greeter.css';

class Greeter extends Component{
    render() {
        return (
            <div className="root">
                    {config.greetText}
            </div>
        );
    }
}

export default Greeter;