import React from 'react';
import CounterBlock from './CounterBlock';
import './CounterApp.css'
import CounterSettings from './CounteinerSettings/CounterSettings';

const CounterApp = () => {
    return (
        <div className="CounterApp">
            <CounterSettings/>
            <CounterBlock/>
        </div>
    );
};

export default CounterApp;