import React from 'react';
import CounterApp from './components/CounterApp/CounterApp';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <CounterApp/>
        </Provider>
    );
}

export default App;
