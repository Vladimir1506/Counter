import React from 'react';
import CounterBlock from './CounterBlock';
import './CounterApp.css'
import CounterSettings from './CounterSettings';

const CounterApp = () => {
    return (
        <div className="CounterApp">
            <CounterSettings/>
            <CounterBlock/>
        </div>
    );
};

export default CounterApp;