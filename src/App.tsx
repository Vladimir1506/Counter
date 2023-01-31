import React from 'react';
import CounterApp from './components/CounterApp/CounterApp';
import {Provider} from 'react-redux';
import {store} from './redux/store';


function App() {
    return (
        <div>
            <Provider store={store}>
                <CounterApp/>
            </Provider>
            {/*<ChatApp/>*/}
        </div>
    );
}

export default App;
